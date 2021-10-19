


const settings = {
  maxPlayersPerRoom: 12,
  maxImpostorsPerRoom: 3,
  
};
let game = {
  number: 0,
  guesses: 0,
  playerData: [/*
    {
      id: "1234567890123456", // program id
      kaid: "", // kaid
      username: "", // ka username

      x: 0,
      y: 0,
      isImpostor: false,
      isSpectator: false,
      tasks: [], // Array<string> of task ids
      
      

    */],
  rooms: [/*
    {
      id: "0.5239403241290", // room id
      hostPlayerId: "1234567890123456", // host player id (program id)
      name: "", // room name
      players: [], // Array<string> players in room (program ids)
      settings: {
        maxPlayers: 12,
        impostors: 2,
        playerSpeed: 0.1,
      },
    }
  */]
};

function onPeerConnect(peerContext, context) {
  peerContext.peer.send("Guess a number from 0 to 100.");
  game.guesses = settings.guessesReset;
  game.number = Math.floor(Math.random() * settings.biggestNumber) + 1
}
function onPeerDisconnect(peerContext, context) {

}

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

  // Join a room
  if (data == "!join") {
    let roomId = data.split(" ")[1]
    // Get number of players in that room

    peerData.game.room = roomId
    return
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

export { onPeerConnect, onPeerData, onPeerDisconnect }