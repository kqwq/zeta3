import fs, { existsSync } from 'fs'
import { createProgram, updateProgram, getSpinoffs, getProgram } from './ka_utils.js'
import { onPeerConnect, onPeerData, onPeerDisconnect, cheatDetector, getPlayer, sendToAllPeersInRoom } from './game.js'
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
function getRandom16DigitId() {
  let num = Math.floor(Math.random() * 1000000000000000)
  return "b" + num.toString().padStart(15, '0')

}

if (!existsSync('ipdb.json')) {
  fs.writeFileSync('ipdb.json', JSON.stringify([], null, 2))
}

// EZ manual input
let firstTimeManualInput = true
if (getConfig('manual_input')) {
  fs.watchFile('manualInput.txt', (curr, prev) => {
    if (firstTimeManualInput) {
      firstTimeManualInput = false
      scanOriginSpinoffs()
    }
  })
}


let peerData = [
  // schema name: peerContext
  // {
  //   scratchpad: {...}, // Khan Academy scratchpad data (includes program id and kaid)
  //   ipInfo: {...}, // Includes ip address, location, etc
  //   connectionStep: 0, // (0=not connected, 1=connecting, 2=answered, 3=fully connected)
  //   offerLineNumber: offerLineNumber, // Line number of the offer answer
  //   peer: Peer,
  //   sendQueue: [], // Array of messages to be sent
  //   offer: {...}, // Signal object answer generated by server
  //   profile: {...}, // KA profile data
  // }
]

async function scanOriginSpinoffs() {
  // Clean up disconnected peers
  for (let i = peerData.length - 1; i >= 0; i--) {
    if (!peerData[i].peer || peerData[i].connectionStep == 0) {
      peerData.splice(i, 1)
    }
  }
  if (peerData.length == 0) {
    activeMode = false  /// todo uncomment
  } else {
    activeMode = true
  }

  // Check manual input
  if (getConfig('manual_input')) {
    let manualInput = fs.readFileSync('manualInput.txt', 'utf8').toString()
    if (manualInput.length > 0 && manualInput[0] !== "{") {
      console.log('got', manualInput);
      console.log('Getting manual input...', new Date(), "activeMode:" + activeMode);
      createNewPeer(JSON.parse(atob(manualInput)), "CONSOLE_LOG")
      // empty the file
      fs.writeFileSync('manualInput.txt', '')
      return
    }
  }


  // Get spinoffs of the origin program
  console.log('Scanning origin spinoffs...', new Date(), "activeMode:" + activeMode);
  let originId = getConfig('origin_id')
  let data = await getSpinoffs(originId)
  for (let scratchpad of data.scratchpads) {
    let dateUpdated = new Date(scratchpad.created) // Bug: scratchpad.created actually returns the date of the last update but we can use this to our advantage here
    let dateNow = new Date()
    let timeDiff = Math.abs(dateNow.getTime() - dateUpdated.getTime())

    // If time difference is less than 25 seconds, read its code
    if (timeDiff < 25000) {
      let spinoffId = scratchpad.url.slice(-16)
      console.log(`Found a spinoff! id:${spinoffId}`);

      // Check if program is already in peerData
      let peerObjIndex = peerData.findIndex(x => x.scratchpad.id == spinoffId)
      if (peerObjIndex != -1) {
        // Program is already in peerData
        console.log(`Program is already in peerData.`, `id:${spinoffId}`);
        continue
      }


      let s2 = await getProgram(spinoffId)

      // Decoding code
      try {
        let parts = s2.revision.code.split('\n')
        var offerLineNumber = parseInt(parts[99].split('=')[1]) // Decode offer answer line number (line 100)
        console.log(1, parts[100].split(/\=(.+)/)[1])
        console.log(2, atob(parts[100].split(/\=(.+)/)[1]));
        var offer = JSON.parse(atob(parts[100].split(/\=(.+)/)[1])) // Decode the base64 string (line 101)
      } catch (e) {
        console.log('Error decoding code:', e);
      }
      createNewPeer(offer, offerLineNumber, s2)
    }

  }

}

async function createNewPeer(initialOffer, offerLineNumber, s2) {
  let isKASource = Boolean(s2)
  let ipAddress = initialOffer.sdp.match(/(?<=IP4 ).+/gm)[1]

  // Generate a peer
  let peerObjIndex = peerData.length // Index of the peer object (not yet in the array; not length-1)
  let peer = new Peer({
    initiator: false,
    trickle: false,
    wrtc: wrtc,
  })
  peer.on('signal', offer => {
    if (offerLineNumber == "CONSOLE_LOG") {
      fs.writeFileSync('manualInput.txt', JSON.stringify(offer) + "\n\n\nCopy offer answer ^^^")
    }
    peerData[peerObjIndex].connectionStep = 2
    peerData[peerObjIndex].offer = offer

    // Check if all peers are connected
    let allConnected = true
    for (let peer of peerData) {
      if (peer.connectionStep == 1) {
        allConnected = false
        break
      }
    }
    if (allConnected) {
      updateLinkProgram()
    }
  })
  peer.on('connect', () => {
    console.log(`Peer ${peerObjIndex} connected!`);
    peerData[peerObjIndex].connectionStep = 3
    peerData[peerObjIndex].peer = peer
    onPeerConnect(peerData[peerObjIndex], peerData)
  })
  peer.on('data', data => {
    data = data.toString()
    if (data[0] == "~") { // If intended to a specific peer
      let srcId = peerData[peerObjIndex].scratchpad.id
      let isCheating = cheatDetector(data, peerData[peerObjIndex], peerData)
      if (isCheating) {
        console.log(`${srcId} is cheating!`);
        peerData[peerObjIndex].sendQueue.push("cheating")
        return
      }

      // Check if sending to entire room (including self), to a specific peer, or to the server
      if (data.slice(1, 5) == "room") {
        // TO:ROOM
        sendToAllPeersInRoom(peerData, getPlayer(srcId).rid, `~${data.slice(5)}${srcId}`)
        return
      }
      let programId = data.slice(1, 17)
      let message = data.slice(17)
      let peerIndex = peerData.findIndex(x => x.scratchpad.id == programId)
      if (peerIndex != -1) {
        // TO:PEER
        peerData[peerIndex].sendQueue.push(`~${message}${srcId}`) // Reversed format to avoid confusion with client-to-server messages
      } else {
        console.log(`Received data from program ${srcId} directed to ${programId} but it is not in peerData. Message: ` + message);
      }
    } else {
      // TO:SERVER
      try {
        onPeerData(data, peerData[peerObjIndex], peerData)
      } catch (e) {
        console.log('Error in onPeerData:', e);
      }
    }
  })
  peer.on('close', () => {
    console.log(`Peer ${peerObjIndex} closed!`);
    onPeerDisconnect(peerData[peerObjIndex], peerData)
    peerData.splice(peerObjIndex, 1)
  })
  peer.on('error', err => {
    console.log(`Peer ${peerObjIndex} error!`);
    peer.destroy()
  })

  // Add data
  if (!isKASource) {
    var myId = getRandom16DigitId()
  }
  let peerObj = {
    isKASource: isKASource,
    scratchpad: isKASource ? s2 : { id: myId }, // Khan Academy scratchpad data (includes program id and kaid)
    ipInfo: {
      ip: ipAddress
    }, // Includes ip address, location, etc
    offerLineNumber: offerLineNumber, // Line number of the offer answer
    connectionStep: 1, // (0=not connected, 1=connecting, 2=answered, 3=fully connected)
    peer: peer,
    sendQueue: [],
    profile: {
      id: myId,
      kaid: isKASource ? s2?.kaid : "none"
    },
    offer: false // Signal object answer generated by server, false if signal is not yet generated
  }
  peerData.push(peerObj)


  lookupIpInfo(ipAddress, peerObjIndex)
  if (isKASource) {
    await lookupKAProfile(s2.kaid, peerObjIndex)
    peer.signal(initialOffer) // Trigger connection
  } else {
    peer.signal(initialOffer) // Trigger connection
  }
}

async function lookupIpInfo(ipAddress, peerObjIndex) {
  let ipdb = JSON.parse(fs.readFileSync('ipdb.json'))
  if (ipdb.find(x => x.ip == ipAddress)) {
    // Add to peerData
    peerData[peerObjIndex].ipInfo = ipdb.find(x => x.ip == ipAddress)
  } else {
    let token = process.env.IPINFO_TOKEN
    let res = await fetch(`https://ipinfo.io/${ipAddress}?token=${token}`)
    let ipInfoRes = await res.json()

    // Add to peerData
    peerData[peerObjIndex].ipInfo = ipInfoRes

    // Add to ipdb
    ipInfoRes.kaid = peerData[peerObjIndex].profile?.kaid
    ipInfoRes.date = new Date()
    ipdb.push(ipInfoRes)
    fs.writeFileSync('ipdb.json', JSON.stringify(ipdb, null, 2))
  }
}

async function lookupKAProfile(kaid, peerObjIndex) {
  let res = await fetch(`https://www.khanacademy.org/api/internal/user/profile?kaid=${kaid}&format=pretty&projection={%22username%22:1,%22avatarSrc%22:1,%22dateJoined%22:1,%22points%22:1,%22bio%22:1}`)
  let data = await res.json()
  peerData[peerObjIndex].profile = data
  peerData[peerObjIndex].profile.username = data.username.replace(/\./g, '') // Remove periods from username
  peerData[peerObjIndex].profile.kaid = kaid
}


async function updateLinkProgram() {
  // Post those offers to the KA link program
  console.log('Updating link program...')

  // Generate new code based on offers
  let signalAnswerList = []
  for (let i = 0; i < peerData.length; i++) {
    let peerObj = peerData[i]
    if (peerObj.connectionStep == 2) {
      signalAnswerList[peerObj.offerLineNumber - 1] = "offerAnswer=" + JSON.stringify(peerObj.offer)
    }
  }
  if (signalAnswerList.length == 0) {
    console.log('No offers to update link program!')
    return
  }
  let newCode = signalAnswerList.join('\n')

  // Create link program
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

}

async function emptySendQueue() {
  for (let peerInfo of peerData) {
    if (peerInfo.sendQueue.length > 0) {
      peerInfo.peer.send(peerInfo.sendQueue.join('|'))
      peerInfo.sendQueue = []
    }
  }
}

// Main loop
var activeMode = true
var cycleN = 0
scanOriginSpinoffs()
setInterval(() => {
  if (activeMode || cycleN % 4 === 0) {
    scanOriginSpinoffs()
  }
  cycleN++
}, 5000) // Check for new spinoffs every 5 seconds (active) or 20 seconds (inactive)

setInterval(emptySendQueue, getConfig('tick_rate')) // Send data to peers every tick_rate milliseconds