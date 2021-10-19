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
 
 
 
 
 
 