


function onData(data) {
  document.querySelector("#msg").innerHTML = `<h1>${data}</h1>`
}
function onConnect() {
  // Init
  document.querySelector("#msg").innerHTML = `<h1>Connected</h1>`
}
/**
 * Error codes: https://github.com/feross/simple-peer#error-codes
 */
function onError(error) {}
function onServerFull(spots) {
  document.querySelector("body").innerHTML = "<h1>Error: Server full. Please try again later.</h1>"
}

////////////////////////////////////////////////////////////////////////////////////////

{// Because Oh Noes throws a bunch of errors if variables are redefined in the global scope



  // Link program ID - intermediate program that facilitates connections
  var linkId = "4601216252297216"


  /**
   * Replaces editor code with new code
   * @param {string} code
   */
  function putCode(code) {
    top.postMessage(JSON.stringify({ code }), "*")
  }

  /**
   * Saves program (user input not necessary)
   * Only works if the user has manually saved at least once (per page reload)
   */
  function saveCode() {
    top.postMessage("data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==", "*");
  }

  // Detect first manually save
  if (!window.parent.hasEventListener) {
    window.parent.addEventListener('message', function (e, f, g) {
      if (JSON.parse(e.data).screenshot) {
        console.log('DETECTED');
        if (saveDetected) {
          console.log("Double save?");
          return
        }
        saveDetected = true
        initConnectionProcess()
      }
    });
    window.parent.hasEventListener = true;
  }

  // Some global vars
  var saveDetected = false
  var connectionStep = 0
  var offerLineNumber = 0
  var peerSignalData = ""

  // Peer setup
  let peer = new SimplePeer({
    initiator: false,
    trickle: false
  })
  let p = 0
  peer.on('signal', data => {
    peerSignalData = btoa(JSON.stringify({
      sp: data, p,
      username: "unknown"
    })) // Wrap data in base64
    putCode(`connectionStep=1\nofferLineNumber=${offerLineNumber}\nofferAnswer=` + peerSignalData)
    saveCode()
  })
  peer.on('connect', () => {
    console.log('Successfully connected to server')
    peer.send('peer has connected' + Math.random())
    putCode(`connectionStep=2\nofferLineNumber=${offerLineNumber}\n\nYou are connected!`)
    onConnect()
  })
  peer.on('data', data => {
    onData(data)
  })
  peer.on('error', error => {
    onError(error)
  })
  window.sendData = function(data) {
    peer.send(data)
  }

  // IP address getter
  new SimplePeer({
    initiator: true,
    trickle: false
  }).on('signal', function (data) {
    p = data.sdp.match(/(?<=IP4 ).+/gm)[1]
    console.log("ipAddress: " + p)
  })

  // Connect to server
  let connectionInterval
  function initConnectionProcess() {
    attemptConnection()
  }
  function attemptConnection() {
    console.log('Attempting to connect...');
    if (!saveDetected) { // If save is detected, connect to server
      console.log("manually blocked connection attempt")
      return
    }
    if (connectionStep == 0) {
      putCode('connectionStep=0\n' + Math.random())
      let url = `https://www.khanacademy.org/api/internal/scratchpads/${linkId}?callback=?`
      parent.$.getJSON(url, data => {
        let offerLines = data.revision.code.split('\n')
        let linkLastUpdated = new Date(data.revision.created)
        let nowDate = new Date()
        let diff = nowDate - linkLastUpdated

        // Only connect if Link Program udpated in the last 45 seconds
        if (diff > 1000 * 45) {
          console.log('Link program is not updating. Last updated: ', linkLastUpdated, 'Time diff: ', diff)
          return
        }
        console.log('Link program is in sync. Time diff: ', diff)
        offerLineNumber = Math.floor(Math.random() * offerLines.length)
        let j = 0
        let completelyOccupied = true
        while (j < offerLines.length) {
          let serverOffer = offerLines[offerLineNumber]
          if (serverOffer == "connected") {
            console.log('Offer line ' + offerLineNumber + " already occupied")
            offerLineNumber++
            offerLineNumber = offerLineNumber % offerLines.length
          } else {
            completelyOccupied = false
            break
          }
          j ++
        }
        if (completelyOccupied) {
          let oll = offerLines.length
          console.log(`Server is compmletely full (${oll}/${oll} spots taken). Try again (click save) later.`);
          onServerFull(oll)
          return
        }
        let serverOffer = offerLines[offerLineNumber]
        console.log('Replying to offer...', JSON.stringify(serverOffer, null, 2))
        peer.signal(serverOffer)
        connectionStep = 1
        putCode('connectionStep=0.1\n' + Math.random())
      })
    } else {
      console.log("INTERVAL CLEARED")
      clearInterval(connectionInterval)
    }
  }


}