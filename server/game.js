


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
  let send = (d) => peerContext.peer.send(d)
  if (data == "ping") {
    send("pong");
    return;
  }
  let num = parseInt(data)
  if (isNaN) {
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