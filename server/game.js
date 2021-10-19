


const settings = {
  guessesReset: 7,
  biggestNumber: 100,
};
let game = {
  number: 0,
  guesses: 0,
};

function onPeerConnect(peerContext, context) {
  peerContext.peer.send("Guess a number from 0 to 100.");
  game.guesses = settings.guessesReset;
  game.number = Math.floor(Math.random() * settings.biggestNumber) + 1
}
function onPeerDisconnect(peerContext, context) {}

function onPeerData(data, peerContext, context) {
  let send = (d) => {
    try {
      peerContext.peer.send(d)
    } catch (e) {
      console.error(e)
    }
  }

  // Ping
  if (data == "!ping") {
    send("pong");
    return;
  }

  // Get player location data + username + id
  if (data == "!players") {
    let players = context.map(peerData => {
      let p = peerData.ipInfo;
      return {
        id: peerData.scratchpad.id,
        username: p.ka_username,
        loc: p.loc,
        country: p.country,
        timezone: p.timezone,
      }
    })
    send(JSON.stringify(players))
    return;
  }

  let num = parseInt(data)
  if (isNaN(num)) {
    console.log("Not a number", data);
    return
  }

  if (num > game.number) {
    send("Too high")
  } else if (num < game.number) {
    send("Too low")
  } else {
    send("Correct!")
  }

}

export { onPeerConnect, onPeerData,onPeerDisconnect }