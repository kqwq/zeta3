import { findFlagUrlByIso2Code } from 'country-flags-svg'
import { getCountry, getTimezone } from 'countries-and-timezones';


const settings = {
  maxPlayersPerRoom: 12,
  maxImpostorsPerRoom: 3,

};
let game = {
  playerData: [/*
    {
      id: "1234567890123456", // program id (ka) OR unique id generated in main2.js (off-ka)
      x: 0,
      y: 0,
      isImpostor: false,
      isSpectator: false,
      tasks: [], // Array<string> of task ids
      
      

    */],
  rooms: [/*
    {
      rid: "0.5239403241290", // room id
      hostPlayerId: "1234567890123456", // host player id (program id)
      name: "", // room name
      playerIds: [], // Array<string> player ids in room (program ids)
      settings: {
        maxPlayers: 12,
        impostors: 2,
        playerSpeed: 0.1,
      },
    }
  */]
};
function getPlayer(id) {
  return game.playerData.find(p => p.id == id)
}
function getRoom(rid) {
  return game.rooms.find(r => r.rid == rid)
}



function onPeerConnect(peerContext, context) {
  onPeerData("room", peerContext, context)
  onPeerData("profile", peerContext, context)

  // Create player data
  game.playerData.push({
    id: peerContext.scratchpad.id, // Guarenteed to be loaded from main2.js
    x: 0,
    y: 0,
    isImpostor: false,
    isSpectator: false,
    tasks: [],
  });
}
function onPeerDisconnect(peerContext, context) {
  // Remove player data
  game.playerData = game.playerData.filter(p => p.id != peerContext.scratchpad.id)
}

function onPeerData(data, peerContext, context) {
  let send = (d) => {
    try {
      peerContext.peer.send(d)
    } catch (e) {
      console.error(e)
    }
  }
  let commandName = data.split(" ")[0]
  let commandArg = data.substring(commandName.length + 1)
  switch (commandName) {
    case "ping": {
      send("pong");
      break;

    } case "geo": {
      let players = context.map(peerData => {
        let p = peerData.ipInfo;
        let svgLink = findFlagUrlByIso2Code(p.country);
        let countryName = getCountry(p.country).name;
        let timezone = getTimezone(p.timezone);
        return {
          id: peerData.scratchpad?.id,
          loc: p.loc,
          country: countryName,
          iso2: p.country,
          tz: p.timezone,
          utcOffset: timezone.utcOffset,
          dstOffset: timezone.dstOffset,
          flag: svgLink
        }
      })
      send(JSON.stringify(players))
      break;
    } case "profiles": {

      let profiles = context.map(peerData => {
        return peerData.profile
      })
      send("set-profiles " + JSON.stringify(profiles))
      break;
    } case "profile": {
      let me = {
        ...peerContext.profile, id: peerContext.scratchpad?.id
      }
      send("set-profile " + JSON.stringify(me))
      break;
    } case "lifeprotip": {

      let facts = [
        "A person who has never made a mistake has never tried anything new.",
        "Banging your head against a wall for hours and hours is an extremely effective way to pass the time.",
        "The most common way people give up their power is by thinking they don’t have any.",
        "The best revenge is massive success.",
        "If you hear a voice within you say “you cannot paint,” then by all means paint and that voice will be silenced.",
        "The only person you are destined to become is the person you decide to be.",
        "A thrilling time is in your immediate future.",
        "The world is a dangerous place, and those who do not act will be swept up in their own destruction.",
        "It’s better to be alone sometimes.",
        "When everything seems to be going against you, remember that the airplane takes off against the wind, not with it.",
        "It’s not the years in your life that count. It’s the life in your years.",
        "Change your thoughts and you change your world.",
        "The best time to plant a tree was 20 years ago. The second best time is now.",
        "The person who will not stand for something will fall for anything.",
        "If you tell the truth, you don’t have to remember anything.",
        "A friend is someone who knows all about you and still loves you.",
        "A life spent making mistakes is not only more honorable, but more useful than a life spent doing nothing.",
        "If you want to make a permanent change, stop focusing on the negative and focus on the positive.",
        "The only way to do great work is to love what you do.",
        "If you can dream it, you can achieve it.",
        "The best time to plant a tree was 20 years ago. The second best time is now.",
        "The person who will not stand for something will fall for anything.",
        "If you tell the truth, you don’t have to remember anything.",
        "A friend is someone who knows all about you and still"
      ]
      send(facts[Math.floor(Math.random() * facts.length)])
      break;
    } case "rooms": {
      send("set-rooms " + JSON.stringify(game.rooms))
      break;
    } case "create-room": {
      let roomSettings = JSON.parse(commandArg)
      let room = {
        rid: Math.random().toString().substring(2),
        hostPlayerId: peerContext.scratchpad.id,
        playerIds: [peerContext.scratchpad.id],
        settings: {
          name: commandArg.name,
          maxPlayers: roomSettings.maxPlayers || 12,
          impostors: roomSettings.impostors || 2,
          playerSpeed: roomSettings.playerSpeed || 0.1,
        },
      }
      game.rooms.push(room)
      send("set-room " + JSON.stringify(room))
      break;
    } case "edit-room": {
      let roomSettings = JSON.parse(commandArg)
      let room = getRoom(roomSettings.rid)
      room.settings = roomSettings
      send("set-room " + JSON.stringify(room))
      break;
    } case "join-room": {
      let roomId = commandArg
      getRoom(roomId).playerIds.push(peerContext.scratchpad.id)
      send("200")
      break;
    } case "leave-room": {
      let roomId = commandArg
      getRoom(roomId).playerIds = getRoom(roomId).playerIds.filter(id => id != peerContext.scratchpad.id)
      send("200")
      break;
    } case "start-game": {
      let roomId = commandArg
      let room = getRoom(roomId)
      room.playerIds.forEach(id => {
        let player = getPlayer(id)
        player.x = Math.random() * settings.mapWidth
        player.y = Math.random() * settings.mapHeight
        player.isImpostor = false
        player.isSpectator = false
        player.tasks = []
      })
      room.playerIds.forEach(id => {
        let player = getPlayer(id)
        //player.tasks.push(...)
      })
      send("200")
      break;
    }
  }
}

/**
 * 
 * @param {*} data Raw data from the peer
 * @param {*} peerContext peerData[index]
 * @param {*} context peerData
 * @returns {boolean} false if no suspicious data was found, true if player is cheating
 */
function cheatDetector(data, peerContext, context) { // anti-cheat system
  return false
}

export { onPeerConnect, onPeerData, onPeerDisconnect, cheatDetector }