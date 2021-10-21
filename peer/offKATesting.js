// Peer setup
if (!parent){
  
  console.log('no parent');
  var parent = {
    zeta3: {
      onLoadingProgress:()=>{},
      onConnect:()=>{},
      onData:()=>{},
      onUselessSave:()=>{},
      onDisconnect:()=>{},
      onError:()=>{},
    }
  }

  var pz3 = parent.zeta3

  parent.peer = new SimplePeer({
    initiator: true,
    trickle: false
  })
  parent.peer.on('signal', data => {
    parent.zetaStep = 1
    pz3.onLoadingProgress(5)
    parent.peerSignalData = btoa(JSON.stringify(data)) // Wrap data in base64
  }).on('connect', () => {
    parent.zetaStep = 3
    console.log('Successfully connected to server')
    parent.send = (data) => peer.send(data)
    parent.peer.send('peer has connected' + Math.random())
    pz3.onLoadingProgress(100)
    pz3.onConnect()

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

  let manualInput = (data) => {
    parent.peer.signal(data)
  }
}