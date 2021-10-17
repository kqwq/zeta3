import fs, { existsSync } from 'fs'
import { createProgram, updateProgram, getSpinoffs, getProgram } from './ka_utils.js'
import { onPeerConnect, onPeerData, onPeerDisconnect } from './game.js'
import fetch from 'node-fetch'
import wrtc from 'wrtc'
import Peer from 'simple-peer'
import dotenv from 'dotenv'
dotenv.config({ path: '../.env' })

function editConfig(key, value) {
  let config = JSON.parse(fs.readFileSync('config.json'))
  config[key] = value
  fs.writeFileSync('config.json', JSON.stringify(config, null, 2))
}
function getConfig(key) {
  let config = JSON.parse(fs.readFileSync('config.json'))
  return config[key]
}
function atob(str) {
  return Buffer.from(str, 'base64').toString('binary')
}
function btoa(str) {
  return Buffer.from(str, 'binary').toString('base64')
}

if (!existsSync('ipdb.json')) {
  fs.writeFileSync('ipdb.json', JSON.stringify([], null, 2))
}

let peers = [] // Array of simple-peer objects (global)
let offers = [] // Array<string> of simple-peer offers (global)
let peerMetadata = [
  // schema name: peerContext
  // {
  //   username: '',
  //   ip: '',
  //   ipInfo: '',
  //   connected: false,
  //   peer: Peer
  // }
]
let blockSpinoffScan = true

function main() {

  // Create 10 simple-peer offers
  blockSpinoffScan = true
  let numberOfOffers = 2
  let numberOfOffersCompleted = 0
  offers = []
  for (let i = 0; i < numberOfOffers; i++) {
    if (peerMetadata[i] && peerMetadata[i].connected) {
      numberOfOffersCompleted ++
      continue // Skip if already connected
    }
    let peer = new Peer({ initiator: true, trickle: false, wrtc: wrtc })
    peer.on('signal', (data) => {
      offers[i] = data
      numberOfOffersCompleted ++
      console.log(`Offer ${i} sent (${numberOfOffersCompleted} / ${numberOfOffers})`)
      if (numberOfOffersCompleted >= numberOfOffers) {
        updateLinkProgram()
      }
    })
    peer.on('data', data => {
      onPeerData(data, peer, peerMetadata)
    })
    peer.on('connect', () => {
      console.log(`Offer ${i} connected`)
      onPeerConnect(peer, peerMetadata)
    })
    peer.on('close', () => {
      console.log(`Offer ${i} closed`)
      peerMetadata[i].connected = false
    })
    peer.on('error', (err) => {
      console.log(`Offer ${i} error: ${err}`)
      peer.destroy()
    })
    peers[i] = peer;
    peerMetadata[i] =
    {
      username: '',
      ip: 0,
      ipInfo: {},
      connected: false,
      peer: peer
    };
  }



}

async function updateLinkProgram() {
  // Post those offers to the KA link program
  console.log('Sending to link program...')
  let newCode = ""
  for (let i = 0; i < offers.length; i++) {
    if (peerMetadata[i].connected) {
      newCode += `connected\n`
    } else {
      newCode += `${JSON.stringify(offers[i])}\n`
    }
  }
  let linkId = getConfig('link_id')
  let existingProgram
  if (linkId) {
    existingProgram = await updateProgram(linkId, newCode, "Link2")
  }
  if (!linkId || existingProgram.status == 404) {

    // Create a new program
    let data = await createProgram(newCode, "Link2")
    linkId = data.id.toString()
    console.log(`Created program ${linkId}`)

    // Update config with the program id
    editConfig('link_id', linkId)
  }

  console.log(`Done updating link - https://www.khanacademy.org/cs/i/${linkId}`)
  blockSpinoffScan = false

}

async function scanOriginSpinoffs() {
    console.log('Scanning origin spinoffs...', new Date());


    // Get spinoffs of the origin program
    let originId = getConfig('origin_id')
    let data = await getSpinoffs(originId)
    for (let scratchpad of data.scratchpads) {
      let dateUpdated = new Date(scratchpad.created) // Bug: scratchpad.created actually returns the date of the last update but we can use this to our advantage here
      let dateNow = new Date()
      let timeDiff = Math.abs(dateNow.getTime() - dateUpdated.getTime())

      // If time difference is less than 10 seconds, read its code
      if (timeDiff < 10000) {
        let spinoffId = scratchpad.url.slice(-16)
        console.log(`Found a spinoff! id:${spinoffId}`);
        let s2 = await getProgram(spinoffId)

        // Decoding code

        try {
          let parts = s2.revision.code.split('\n')
          if (parts[0] == "connectionStep=1") {
            console.log('connecting...');
            let offerLineNumber = parseInt(parts[1].split('=')[1])
            let offerInfo = JSON.parse(atob(parts[2].split(/\=(.+)/)[1])) // Decode the base64 string
            let offerAnswer = offerInfo.sp
            let ipAddress = offerInfo.p // p is shorthand for ip address here
            let username = offerInfo.username

            // Signal the peer
            console.log(`Offer answer: ${JSON.stringify(offerAnswer, null, 2)}`);
            let peer = peers[offerLineNumber]
            peer.signal(offerAnswer)

            // Update metadata
            console.log(ipAddress, 'ipaddress', username);
            peerMetadata[offerLineNumber] = {
              username: username,
              ip: ipAddress,
              ipInfo: {},
              connected: true,
            }
            lookupIpInfo(ipAddress, offerLineNumber)

            // Update link program
            updateLinkProgram()
            limbo()
            return

          } else {
            console.log('Bad format. Expected "connectionStep=1", got "' + parts[0] + '"');
          }
        } catch (e) {
          console.log('Error decoding code:', e);
        }
      }
    }
  
}

async function lookupIpInfo(ipAddress, offerLineNumber) {
  let ipdb = JSON.parse(fs.readFileSync('ipdb.json'))
  if (ipdb.find(x => x.ip == ipAddress)) {
    // Add to peer metadata
    peerMetadata[offerLineNumber].ipInfo = ipdb.find(x => x.ip == ipAddress)
  } else {
    let token = process.env.IPINFO_TOKEN
    let res = await fetch(`https://ipinfo.io/${ipAddress}?token=${token}`)
    let ipInfoRes = await res.json()

    // Add to peer metadata
    peerMetadata[offerLineNumber].ipInfo = ipInfoRes

    // Add to ipdb
    ipInfoRes.ka_username = peerMetadata[offerLineNumber].username
    ipInfoRes.date = new Date()
    ipdb.push(ipInfoRes)
    fs.writeFileSync('ipdb.json', JSON.stringify(ipdb, null, 2))
  }
}

function limbo() {
  console.log('limbo')
}

setInterval(() => {
  main()
}, 1000 * 30) // Run every 30 seconds
main()

setInterval(() => {
  if (blockSpinoffScan) {
    console.log('blocking...');
  } else {
    scanOriginSpinoffs()
  }
}, 5000) // Check for new spinoffs every 2 seconds