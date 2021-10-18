

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
function onError(error) { }
function onServerFull(spots) {
  document.querySelector("body").innerHTML = "<h1>Error: Server full. Please try again later.</h1>"
}
function onLoadingProgress(percent) {
  document.querySelector("#msg").innerHTML = `<h1>Loading: ${percent}%</h1>`
}
function onSave() {

}

////////////////////////////////////////////////////////////////////////////////////////

(() => {// Because Oh Noes throws a bunch of errors if variables are redefined in the global scope AND avoid 2 instances from running

  if (parent.saveDetected) { // Avoid 2 instances of program running at the same time
    console.log('Second instance of program BLOCKED');
    return
  }


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
  var this_ = this;
  if (!window.parent.hasEventListener) {
    window.parent.addEventListener('message', function (e, f, g) {
      if (JSON.parse(e.data).screenshot) {
        console.log('DETECTED');
        if (parent.saveDetected) {
          onSave()
          console.log("Double save - no code executed");
          return
        } else {
          // First time saving
          if (connectionStep == 0) {
            console.log("Saved too fast! Please press save again.");
          } else {
            parent.saveDetected = true
            initConnectionProcess()
          }
        }
      }
    });
    window.parent.hasEventListener = true;
  }

  // Some semi-global vars
  parent.saveDetected = false
  var connectionStep = 0 // 0 = not connected, 1 = connecting, 2 = connected
  var offerLineNumber = Math.floor(Math.random() * 100) + 1 // Random number (1-100) to prevent conflicts between multiple peers
  var peerSignalData = ""

  // Peer setup
  var peer = new SimplePeer({
    initiator: true,
    trickle: false
  })
  peer.on('signal', data => {
    connectionStep = 1
    onLoadingProgress(10)
    peerSignalData = btoa(JSON.stringify(data)) // Wrap data in base64
  })
  peer.on('connect', () => {
    connectionStep = 2
    console.log('Successfully connected to server')
    peer.send('peer has connected' + Math.random())
    putCode(`connectionStep=2\nofferLineNumber=${offerLineNumber}\n\nYou are connected!`)
    onLoadingProgress(100)
    onConnect()
  })
  peer.on('data', data => {
    onData(data)
  })
  peer.on('error', error => {
    onError(error)
  })

  // Connect to server
  function initConnectionProcess() {
    console.log("Init connection ...")
    onLoadingProgress(5)
    putCode(`${'\n'.repeat(99)}offerLineNumber=${offerLineNumber}\noffer=` + peerSignalData)
    saveCode()
    onLoadingProgress(15)
    setTimeout(() => {

      console.log('this should run in 5s');
      if (connectionStep == 1) {
        console.log('Second save executed if slow network/computer');
        saveCode()
        onLoadingProgress(16)
      }
    }, 5000) // Wait 2000ms for the code to be saved



    attemptConnection()


    console.log('fin');
  }
  function attemptConnection() {
    console.log('Attempting to connect...');
    onLoadingProgress(6)
    if (!parent.saveDetected) { // If save is detected, connect to server
      console.log(this, saveDetected, "???")
      console.log("Logical error, manually blocked connection attempt. Please try again later.")
      return
    }
    let url = `https://www.khanacademy.org/api/internal/scratchpads/${linkId}?callback=?`
    parent.$.getJSON(url, data => {
      if (data == null) {
        console.log("Connection error: Link Program was likely deleted. Please contact Squishy.")
        return
      }
      let linkProgramCode = data.revision.code.split('\n')
      let linkLastUpdated = new Date(data.revision.created)
      let nowDate = new Date()
      let diff = nowDate - linkLastUpdated
      let diffSeconds = Math.floor(diff / 1000)
      let diffHours = Math.floor(diff / (1000 * 60 * 60))

      // Only connect if Link Program udpated in the last 45 seconds
      if (diff > 1000 * 45) {
        console.log('STARTING SERVER... Last updated: ', linkLastUpdated, 'Time diff: ' + diffHours + ' hours')
      } else {
        console.log('Link program is in sync. Time diff: ', 'Time diff: ' + diffSeconds + ' seconds')
      }

      // Detect a signal answer to my offer
      let serverOffer = linkProgramCode[offerLineNumber - 1]
      if (!serverOffer || !serverOffer.includes('offerAnswer=')) {
        console.log("No offer answer detected yet...");
        setTimeout(attemptConnection, 2000) // Wait 2 seconds and try again
        return
      }

      serverOffer = serverOffer.split(/\=(.+)/)[1] // Remove offerAnswer=
      peer.signal(serverOffer)
    })

  }


})()
