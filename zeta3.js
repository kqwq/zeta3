/**
    * Zeta 3 Import
    */
var zeta3Id = "" // <-- Program ID of zeta3 source code
if (parent.zetaStep == undefined) {
  parent.sendQueue = []
  parent.$.getJSON("https://ww" + `w.khanacadem${`y.o`}rg/api/labs/scratchpads/${zeta3Id}?callback=?`, $ => eval($['revision'].code));
}
var sendTo = (recipient, data) => {
  parent.sendQueue.push({ recipient, data })
};

/**
 * Zeta 3 Interface
 */
parent.zeta3 = {
  /**
   * Connection progress (out of 100) when connecting to the server
   * @param {number} progress
   * if number is < 20, initializing is in progress
   * if number is == 20, connection may take up to 20 seconds
   * if number is == 50, connection may take up to 5 seconds
   * if number is == 100, connection is established
   */
  onLoadingProgress: function (percent) {
    console.log("Loading progress: " + percent + "%");
  },

  /**
   * Called when connection is established
   */
  onConnect: function () {
    document.querySelector("#msg").innerHTML = `<h1>Connected</h1>`

  },

  /**
   * Called when data is received from the server. Opposite of sendTo(recipient, data)
   * @param {string} sender Either
   * "server" if the data is from the server
   * 16-digit id if the data is sent from another program (e.g. "1234567890123456")
   * @param {string} data
   */
  onData: function (sender, data) {
    document.querySelector("#msg").innerHTML = `<h1>${sender} sent ${data}</h1>`
  },

  /** 
   * Called when user saves the program after the initial save (has no effect on the state of the program)
   */
  onUselessSafe: function () {
    alert("Saving doesn't do anything at this state.")
  },

  /**
   * Called when connection is lost, either by the server or by the client (this program)
   */
  onDisconnect: function () {
  },

  /**
   * Called when there is a connection error
   * Code name is err.code and will be one of the following:
   * Either LINK_NOT_FOUND (interface deleted), 
   *        LINK_UNRESPONSIVE (interface not reading and responding to your code changes),
   *  or a simple-peer error (https://github.com/feross/simple-peer#error-codes)
   */
  onError: function (err) {
    console.error(err)
  },
}

/**
 * sendTo(recipient, data)
 * Send data to the recipient. If called before connection is established, the data is pushed to a queue and sent when connection is established.
 * @param {string} recipient Either
 * "server" if the data is from the server
 * 16-digit id if the data is sent from another program (e.g. "1234567890123456")
 * @param {string} data Cannot start with "~"
 */
sendTo("server", "Connection established! " + Math.random()); // TODO remove this example








////////////////////////////////////////////////////////////////////////////////////////

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
    sendTo = parent.sendTo
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
    parent.sendTo = (recipient, data) => {
      let message
      if (!data) { // If no recipient is provided, assume it's to the server
        message = recipient
      } else if (recipient == "server") {
        message = data
      } else {
        message = `~${recipient}${data}`
      }
      parent.peer.send(message)
    }

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
      // Fix send queue
      sendTo = parent.sendTo
      parent.sendQueue.forEach(({ recipient, data }) => {
        sendTo(recipient, data)
      })
    }).on('data', data => {
      data = data.toString()
      if (data[0] == "~") {
        pz3.onData(data.slice(-16), data.slice(1, -16))
      } else {
        pz3.onData('server', data)
      }
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