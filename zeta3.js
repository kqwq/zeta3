(() => {// Because Oh Noes throws a bunch of errors if variables are redefined in the global scope AND avoid 2 instances from running

  var pz3 = parent.zeta3
  if (parent.zetaStep == undefined) {
    parent.zetaStep = 0
  }
  /*
  0 = generating peer signal, wait before saving
  1 = peer signal generated, save now
  2 = (INSTANCE 2) attempt connection every 2 seconds
  3 = fully connected, do not tamper with code

  */


  if (parent.zetaStep == 3) { // Avoid running the wrong instance
    console.log('Third instance of zeta3 BLOCKED');
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
  if (!window.parent.hasEventListener) {
    window.parent.addEventListener('message', function (e, f, g) {
      if (JSON.parse(e.data).screenshot) {
        console.log('DETECTED');
        switch (parent.zetaStep) {
          case 0:
            console.log("Saved too fast! Please press save again.");
            break;
          case 1:
            console.log("Saved first time! Proceeding to next step.");
            initConnectionProcess()
            break;
          default:
            console.log("Save detected on zeta step " + parent.zetaStep);
            break;
        }
      }
    });
    window.parent.hasEventListener = true;
  }

  if (parent.zetaStep == 0) {
    // Some semi-global vars
    parent.offerLineNumber = Math.floor(Math.random() * 100) + 1 // Random number (1-100) to prevent conflicts between multiple peers
    parent.peerSignalData = ""

    // Peer setup
    parent.peer = new SimplePeer({
      initiator: true,
      trickle: false
    }).on('signal', data => {
      parent.zetaStep = 1
      pz3.onLoadingProgress(5)
      parent.peerSignalData = btoa(JSON.stringify(data)) // Wrap data in base64
    }).on('connect', () => {
      parent.zetaStep = 3
      console.log('Successfully connected to server')
      parent.send = (data) => peer.send(data)
      parent.peer.send('peer has connected' + Math.random())
      putCode(`You are connected!`)
      pz3.onLoadingProgress(100)
      pz3.onConnect()
    }).on('data', data => {
      pz3.onData(data)
    }).on('error', error => {
      pz3.onError(error)
    }).on('close', () => {
      pz3.onDisconnect()
    })

    // Connect to server
    function initConnectionProcess() {
      console.log("Init connection ...")
      pz3.onLoadingProgress(10)
      putCode(`${'\n'.repeat(99)}offerLineNumber=${parent.offerLineNumber}\noffer=` + parent.peerSignalData)
      saveCode()
      parent.zetaStep = 2
      pz3.onLoadingProgress(15)
      // setTimeout(() => {

      //   console.log('this should run in 5s');
      //   if (connectionStep == 1) {
      //     console.log('Second save executed if slow network/computer');
      //     saveCode()
      //     onLoadingProgress(16)
      //   }
      // }, 5000) // Wait 2000ms for the code to be saved

    }
  } else if (parent.zetaStep == 2) {

    pz3.connectionAttempts = 0
    setTimeout(attemptConnection, 2000) // Wait 2000ms for server to respond


    function attemptConnection() {
      console.log('Attempting to connect...');
      let url = `https://www.khanacademy.org/api/internal/scratchpads/${linkId}?callback=?`
      parent.$.getJSON(url, data => {
        if (data == null) {
          pz3.onError({ code: "LINK_NOT_FOUND" })
          console.log("Connection error: Link Program was likely deleted. Please contact Squishy.")
          return
        }
        let linkProgramCode = data.revision.code.split('\n')
        let linkLastUpdated = new Date(data.revision.created)
        let nowDate = new Date()
        let diff = nowDate - linkLastUpdated
        let diffSeconds = Math.floor(diff / 1000)
        let diffHours = Math.floor(diff / (1000 * 60 * 60))

        // If diff is greater than 10 seconds, then the server's activeMode is false (scans every 20 seconds instead of every 5 seconds)
        if (diff > 1000 * 10) {
          pz3.onLoadingProgress(20)
        } else {
          pz3.onLoadingProgress(50)
        }

        // Detect a signal answer to my offer
        let serverOffer = linkProgramCode[parent.offerLineNumber - 1]
        if (!serverOffer || !serverOffer.includes('offerAnswer=')) {
          pz3.connectionAttempts++
          if (pz3.connectionAttempts > 12) {
            pz3.onError({ code: "LINK_UNRESPONSIVE" })
            console.log("Connection error: Link Program is unresponsive. Please contact Squishy.")
            return
          }
          setTimeout(attemptConnection, 2000) // Wait 2 seconds and try again
          return
        }

        serverOffer = serverOffer.split(/\=(.+)/)[1] // Remove offerAnswer=
        parent.zetaStep = 3
        parent.peer.signal(serverOffer)
      })

    }
  }


})()
