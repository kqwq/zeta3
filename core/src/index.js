//import p5 from 'p5';
import Loader from './tau_graphics'

new p5(sketch);
function sketch(p5) {
p5.disableFriendlyErrors  = true;

  document.body.style.margin = 0;
  document.body.style.overflow = 'hidden';

  // Peer setup
  let isKhanAcademy = (window.parent != window);
  window.parent.zeta3 = {
    onLoadingProgress: () => { },
    onConnect: window.parent?.zeta3?.onConnect,
    onData: (sender, data) => {
      let commandName = data.split(" ")[0]
      let commandArg = data.substring(commandName.length + 1)
      if (sender === "server") {
        handleServerCommand(commandName, commandArg)
      } else {
        handlePeerCommand(sender, commandName, commandArg)
      }
    },
    onUselessSave: window.parent?.zeta3?.onUselessSave,
    onDisconnect: () => { },
    onError: () => {
      console.error(err)
    },

  }

  if (!isKhanAcademy) { // Only run if off khanacademy.org
    window.mi = s => parent.peer.signal(s)
    console.log('Off-KA version detected, loading SimplePeer, sendTo');
    if (!parent.browserUsername) {
      parent.browserUsername = /*prompt('Enter a username:') || */Math.random().toString(36).substring(7);
      // Remove non-alpha-numeric characters
      parent.browserUsername = parent.browserUsername.replace(/[^a-zA-Z0-9]/g, '');
    }



    parent.peer = new SimplePeer({
      initiator: true,
      trickle: false
    }).on('signal', data => {
      parent.peerSignalData = btoa(JSON.stringify(data)) // Wrap data in base64
      console.log(parent.peerSignalData + "\n" + parent.browserUsername);
    }).on('connect', () => {
      parent.isConnected = true;
      console.log('Successfully connected to server')
      parent.send = (data) => peer.send(data)
      parent.peer.send('peer has connected' + Math.random())
    }).on('data', data => {
      // console.log(data.toString()); // Log absolutely everything
      for (let dataPiece of data.toString().split("|")) {
        if (dataPiece[0] == "~") {
          parent.zeta3.onData(dataPiece.slice(-16), dataPiece.slice(1, -16))
        } else {
          parent.zeta3.onData('server', dataPiece)
        }
      }
    }).on('error', error => {
      console.log(error);
    }).on('close', () => {
      parent.isConnected = true;
      console.log('Connection closed');
    })

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
  }

  const sendTo = parent.sendTo;

  function handlePeerCommand(senderId, commandName, commandArg) {
    switch (commandName) {
      case "ping":
        sendTo(senderId, "pong")
        break;
      case "chat": 
        parent.browserColor = commandArg
        break;
      case "m": // movement
        let pos = commandArg.split(" ")
        console.log(pos, senderId);
        let updatePlayer = players.find(p => p.id == senderId)
        if (!updatePlayer) {
          console.log(`Player id ${senderId} not found`);
          return
        }
        updatePlayer.x = parseInt(pos[0])
        updatePlayer.y = parseInt(pos[1])
        break;
      default:
        console.log(`Unrecognized peer command from id:${senderId}`, commandName, commandArg)
    }
  }

  function handleServerCommand(commandName, commandArg) {
    switch (commandName) {
      case "ping":
        sendTo(senderId, "pong")
        break;
      case "cheating":
        alert("You have been flagged for cheating")
        scene = "menu"
        parent.peer.destroy()
        // Destroy environment and notify player of cheating
        putCode('<!DOCTYPE html><html><head><title>Error</title></head><body><img src="https://upload.wikimedia.org/wikipedia/commons/9/96/Farm-Fresh_server_error.png"><br><p>Possible cheating detected</p></body></html>')
        break;
      case "set-profile":
        myProfile = JSON.parse(commandArg)
        break;
      case "set-profiles":
        profiles = JSON.parse(commandArg)
        break;
      case "set-room":
        waitingForServer = false
        isMultiplayer = true
        room = JSON.parse(commandArg)
        if (scene == "online") {
          scene = "initGame"
        }
        break;
      case "set-rooms":
        waitingForServer = false
        isMultiplayer = true
        rooms = JSON.parse(commandArg)
        break;
      case "add-bean":
        let pd = JSON.parse(commandArg)
        // Check if player already exists
        let player = players.find(p => p.id == pd.id)
        if (player) {
          console.log(`Player id ${pd.id} already exists`);
          return
        }
        new Bean(pd.id, pd.name, pd.isSpectator, pd.isImposter, pd.x, pd.y)
        break;
      case "remove-bean":
        let playerIndex = players.findIndex(p => p.id == commandArg)
        room.playerIds.splice(playerIndex, 1)
        players.splice(playerIndex, 1)
        break;
      default:
        console.log("Unrecognized server command: " + commandName, commandArg)
    }
  }



  ////////////////////////////////////////
  /* Global multiplayer variables */
  var scene = "loading"
  var isMultiplayer = false;
  var waitingForServer = false;
  var room = {}; // Room the player is in
  var rooms = []; // All rooms in the game
  var myProfile = {}; // Player's profile
  var profiles = []; // All players' profiles in the game

  // debugging
  var codeEval = ""





  /////////////////////////////////



  var font
  p5.preload = () => {
    font = {
      button: "Arial",
      title: "Arial",
      howto: "Arial",
      game: "Arial",
      ui: "Arial",
      beans: "Arial",
      monospace: "Arial",
      // button: p5.loadFont("src/fonts/ARIAL.TFF", console.log),
      // title: p5.loadFont("./fonts/VERDNANA.TFF", 50),
      // howto: p5.loadFont("./fonts/ARIALBD.TFF", 20),
      // game: p5.loadFont("./fonts/COUR.TFF", 20),
      // ui: p5.loadFont("./fonts/COMIC.TFF", 40),
      // beans: p5.loadFont("./fonts/VERDANAB.TFF", 20),
      // monospace: p5.loadFont("./fonts/COUR.TFF", 10),
    }
  }

  var screenLength, screenDiagonal, globalHt, globalLOS, cam;
  var beanColors, beanShadows;
  var imgSource, drawCharacter, drawCharacterBody, joffreyText, pixelText;
  p5.setup = () => {
    var srcCode = Loader(p5);
    imgSource = srcCode.imgSource;
    drawCharacter = srcCode.drawCharacter;
    drawCharacterBody = srcCode.drawCharacterBody;
    joffreyText = srcCode.joffreyText;
    pixelText = srcCode.pixelText;




    p5.background(0);
    // Init p5 p5.canvas
    p5.createCanvas(p5.windowWidth, p5.windowHeight);


    // Please reset to this state after setting p5.rectMode(), textAlign, or p5.stroke()
    p5.rectMode(p5.CENTER);
    p5.textAlign(p5.CENTER, p5.CENTER);
    p5.noStroke();

    // Config sizes
    p5.width = p5.windowWidth;
    p5.height = p5.windowHeight;
    screenLength = Math.max(p5.width, p5.height); // Max dimention of scren
    screenDiagonal = Math.sqrt(sq(p5.width) + sq(p5.height)); // Effective size of screen
    globalHt = 360 / screenDiagonal; // Global image scaling factor, ~0.424 for a 600x600 p5.canvas.
    globalLOS = screenLength / 4 + 15; // Global rectangular p5.line of sight. On a 600x600 p5.canvas 150 is perfect but 10 is added just to be safe.

    // Config colors
    beanColors = [
      p5.color(197, 17, 17), // Red
      p5.color(19, 47, 210), // Blue
      p5.color(18, 127, 45), // Green
      p5.color(237, 83, 185), // Pink
      p5.color(239, 125, 14), // Orange
      p5.color(244, 244, 88), // Yellow
      p5.color(63, 72, 78), // Black
      p5.color(213, 224, 239), // White
      p5.color(107, 48, 188), // Purple
      p5.color(114, 73, 30), // Brown
      p5.color(57, 254, 219), // Cyan
      p5.color(80, 239, 58) // Lime
    ];
    beanShadows = [// Secondary bean colors. Simple p5.color interpolation between `beanColors` and black is not accurate
      p5.color(123, 8, 56),
      p5.color(9, 21, 142),
      p5.color(10, 77, 45),
      p5.color(170, 44, 173),
      p5.color(181, 63, 21),
      p5.color(178, 125, 31),
      p5.color(30, 31, 37),
      p5.color(131, 150, 191),
      p5.color(60, 23, 124),
      p5.color(94, 38, 20),
      p5.color(22, 168, 67),
      p5.color(36, 169, 190),
    ];


    /** Camera **/
    cam = { // Camera variables
      /*
        Use coordinate(s) to refer to in-game coordinates.
        Use position to refer to mouse position on the p5.canvas or relative placement.
        It's OK to say "Player 1 is at the same position as player 2".
        Bad:  "Player 3's starting position is (760, -45)"
        Good: "Player 3's starting coords are (760, -45)"
      */
      ht: globalHt, // ht = p5.height, the number of p5.pixels high the p5.camera is from the ground
      gotoHt: globalHt, // Used for the p5.smooth effect when zooming with the mouse scroll
      x: 10, // X coordinate of p5.camera
      y: 10, // Y coordinate of p5.camera
      hw: p5.width / 2, // hw = half p5.width of p5.canvas
      hh: p5.height / 2 // hh = half p5.height of p5.canvas
    };

    /* Buttons */
    new Button("menu", // Shown on this scene
      "   Freeplay", // Button name
      p5.width / 2 - 115, // Middle X-coordinate
      265, // Middle Y-coordinate
      210, // Button p5.width
      60, // Button p5.height
      function () {
        initGame();
      } // Call this when button is pressed
    );
    new Button("menu", "    Online", p5.width / 2 + 110, 265, 220, 60, function () {
      mouseJustPressed = false;
      scene = "online";
    });
    new Button("menu", " How to play", p5.width / 2 - 115, 334, 210, 50, function () {
      scene = "howto";
    });
    new Button("menu", "     Credits", p5.width / 2 + 110, 334, 220, 50, function () {
      scene = "credits";
    });
    new Button("howto", "Return", p5.width / 2, p5.height - 70, 200, 50, function () {
      scene = "menu";
    });
    new Button("credits", "Return", p5.width / 2, p5.height - 70, 200, 50, function () {
      scene = "menu";
    });
    new Button("online", "  Back", 80, 50, 90, 40, function () {
      scene = "menu";

    });
    new Button("online", " Refresh", 185, 50, 95, 40, function () {
      waitingForServer = true
      sendTo("rooms")
    });
    new Button("online", "  Host", 290, 50, 88, 40, function () {
      waitingForServer = true
      let roomSettings = {
        name: myProfile?.username || parent.browserUsername || "Anonymous",
      }
      sendTo("create-room " + JSON.stringify(roomSettings))
    });
    new Button("game", "  Leave", 80, 50, 90, 40, function () {
      if (isMultiplayer) {
        send("leave-room")
      }
      isMultiplayer = false
      resetGame()
      scene = "menu";

    });
  }


  // Images
  var globalUIScale = 1;
  var img = {};
  var imgData = {
    "init": [0, 0, 1],
    "cafeteria_room": [550, 25, 0.99],
    "admin_room": [793, 398, 0.39],
    "reactor_room": [51, 229, 1.5],
    "o2_room": [866, 261, 0.36],
    "weapons_room": [942, 87, 0.55],
    "security_room": [315, 277, 0.33],
    "medbay_room": [420, 230, 0.43],
    "electrical_room": [456, 424, 0.24],
    "navigation_room": [1180, 265, 0.33],
    "shields_room": [940, 520, 0.5],
    "upper_engine_room": [178, 116, 0.38],
    "lower_engine_room": [178, 480, 0.38],
    "hallway_2": [330, 142, 0.45],
  }

  // Define global scope for graphics to load in
  var url = 'https://www.khanacademy.org/api/labs/scratchpads/';
  var ID = 5373284282744832;
  //if (!imgSource) $.getJSON(url + ID + '?callback=?', d => eval(d.revision.code)); // Load graphics

  var gameAPI;
  var debugM = false; // Enables zoom and makes `Player.seen` visible above each player.
  var debugX = []; // Positions of the cyan markers for coding the p5.map. Only used in debug mode
  var debugY = [];
  var gMouseX = 0; // Mouse X position in game coordinates
  var gMouseY = 0; // Mouse Y position in game coordinates
  p5.mouseIsPressed = false;

  var mapRooms = [];
  var colliders = [];
  var players = []; // Array of `Bean` (player) objects
  var me;
  var uiManager;
  var objs = []; // Interactive components including vents and tasks
  var mouseJustPressed = false;
  var keyJustPressed = false;
  var keys = [];
  var beanWhoReported = null; // The player who reported the body
  var beanNames = ["Red", "Blue", "Green", "Pink", "Orange", "Yellow", "Black", "White", "Purple", "Brown", "Cyan", "Lime"];

function resetGame() {
  mapRooms = [];
  colliders = [];
  players = []; // Array of `Bean` (player) objects
  me;
  uiManager;
  objs = []; // Interactive components including vents and tasks
  mouseJustPressed = false;
  keyJustPressed = false;
  keys = [];
  beanWhoReported = null; // The player who reported the body
}

  
  // Random range
  function sq(x) { return x * x }

  var X = function (cor) {// Convert from x-coordinate to x-position
    return (cor - cam.x) / cam.ht + cam.hw;
  };
  var Y = function (cor) {// Convert from y-coordinate to y-position
    return (cor - cam.y) / cam.ht + cam.hh;
  };
  var S = function (size) {// Convert from in-game size to drawn size
    return size / cam.ht;
  };
  var RevX = function (pos) {// Convert from x-position to x-coordinate
    return (pos - cam.hw) * cam.ht + cam.x;
  };
  var RevY = function (pos) {// Convert from y-position to y-coordinate
    return (pos - cam.hh) * cam.ht + cam.y;
  };
  var RevS = function (size) {// Convert from drawn size to in-game size
    return size * cam.ht;
  };
  var updateCamera = function () {
    if (cam.ht !== cam.gotoHt) {
      if (cam.gotoHt < 0.3 || cam.gotoHt > 50) { // Restrict zoom level
        cam.gotoHt = cam.ht;
      } else {
        cam.ht = cam.gotoHt; // Jump to zoom level
        scene = "loading"
      }
    }

    if (debugM) {
      var panSpeed = 10 * cam.ht;
      if (keys[p5.UP] || keys[87]) {
        cam.y -= panSpeed;
      } else if (keys[p5.DOWN] || keys[83]) {
        cam.y += panSpeed;
      }
      if (keys[p5.LEFT] || keys[65]) {
        cam.x -= panSpeed;
      } else if (keys[p5.RIGHT] || keys[68]) {
        cam.x += panSpeed;
      }
    } else {
      cam.x += (me.x - cam.x) * 0.1;
      cam.y += (me.y - cam.y) * 0.1;
    }
  };


  /* Buttons and println source code */
  var buttons = [];
  var Button = function (on_scene, name, x_position, y_position, button_width, button_height, action) {

    /* Directly assigned properties */
    this.on_scene = on_scene;
    this.name = name;
    this.x = x_position;
    this.y = y_position;
    this.width = button_width;
    this.height = button_height;
    this.action = action;

    /* Generated properties */
    this.is_hover = false;
    this.corner_size = Math.min(button_width, button_height) * 0.2;
    this.font = null
    this.edge_l = x_position - button_width / 2; // Left edge x-position
    this.edge_r = x_position + button_width / 2; // Right edge x-position
    this.edge_t = y_position - button_height / 2; // Top edge y-position
    this.edge_b = y_position + button_height / 2; // Button edge y-position

    /* Push to buttons array */
    buttons.push(this);
  };
  Button.prototype.on_mouse_click = function () {
    /* Clicking the button */
    if (this.is_hover) {
      this.is_hover = false;
      this.action();
    }
  };
  Button.prototype.update = function () {
    if (!this.font) {
      this.font = font.button
    }
    if (scene === this.on_scene) {

      /* Check if mouse hovers over button */
      if (p5.mouseY > this.edge_t && p5.mouseY < this.edge_b && p5.mouseX > this.edge_l && p5.mouseX < this.edge_r) {
        this.is_hover = true;
        p5.cursor(p5.HAND);
      } else {
        this.is_hover = false;
      }

      /* Draw the button */
      if (this.is_hover) {
        p5.fill(255, 100);
      } else {
        p5.fill(0, 0);
      }
      p5.strokeWeight(3);
      p5.stroke(255);
      p5.rect(this.x, this.y, this.width, this.height, this.corner_size);
      p5.fill(255, 255, 255);
      p5.textFont(this.font);
      p5.noStroke();
      joffreyText(this.name, this.x - this.width * 0.45, this.y - this.height * 0.35, this.height * 0.27, p5.color(255), 2);
    }
  };
  var update_buttons = function () {
    for (var i = 0; i < buttons.length; i++) {
      buttons[i].update();
    }
  }



  /** Collision code **/
  // Credit to @BobLyon https://www.khanacademy.org/cs/i/5567955982876672
  var isBetween = function (c, a, b) {
    return (a - c) * (b - c) <= 0;
  };
  var isInCircle = function (x, y, cx, cy, diam) {
    var dx = x - cx;
    var dy = y - cy;
    return dx * dx + dy * dy <= diam * diam / 4;
  };
  var lineCircleCollide = function (x1, y1, x2, y2, cx, cy, diam) {
    var m = (y2 - y1) / (x2 - x1);
    if (p5.abs(m) > 1024) {
      return lineCircleCollide(y1, x1, y2, x2, cy, cx, diam);
    }
    if (isInCircle(x2, y2, cx, cy, diam)) {
      return true;
    }
    x1 -= cx;
    x2 -= cx;
    y1 -= cy;
    y2 -= cy;
    var r = diam * diam / 4;
    var k = y1 - m * x1;
    var a = (1 + m * m) / r;
    var b = 2 * m * k / r;
    var c = k * k / r - 1;
    var discrim = b * b - 4 * a * c;
    if (discrim < 0) {
      return false;
    }
    discrim = p5.sqrt(discrim);
    a *= 2;
    return isBetween((-b - discrim) / a, x1, x2) || isBetween((-b + discrim) / a, x1, x2);
  };
  var isLineLineIntersect = function (x1, y1, x2, y2, x3, y3, x4, y4) {
    /** Credit to Jent@ /// **/
    // x1 must be less than x2, x3 must be less than x4
    var o = (x3 - x1 - (x2 - x1) / (y2 - y1) * y3 + (x2 - x1) / (y2 - y1) * y1) / ((x2 - x1) / (y2 - y1) * (y4 - y3) - (x4 - x3));
    var x = x3 + (x4 - x3) * o;
    var y = y3 + (y4 - y3) * o;
    return x >= Math.min(x1, x2) && x <= Math.max(x1, x2) && x >= Math.min(x3, x4) && x <= Math.max(x3, x4) && y >= Math.min(y1, y2) && y <= Math.max(y1, y2) && y >= Math.min(y3, y4) && y <= Math.max(y3, y4);
  };

  /** Map components **/
  var LCollider = function (x1, y1, x2, y2) {
    y2 += 0.01;
    colliders.push(this);
    this.slack = 15;
    this.x0 = Math.min(x1, x2) - this.slack;
    this.x3 = Math.max(x1, x2) + this.slack;
    this.y0 = Math.min(y1, y2) - this.slack;
    this.y3 = Math.max(y1, y2) + this.slack;
    this.drawX1 = x1;
    this.drawY1 = y1;
    this.drawX2 = x2;
    this.drawY2 = y2;
    var chX = x2 - x1;
    var chY = y2 - y1;
    var magni = Math.sqrt(sq(chX) + sq(chY));
    var len = 0.5;
    chX *= len / magni;
    chY *= len / magni;
    this.x1 = x1 + chX;
    this.y1 = y1 + chY;
    this.x2 = x2 - chX;
    this.y2 = y2 - chY;
  }
  LCollider.prototype.checkCollisionsWith = function (p) {
    if (p.x - p.wasX === 0 && p.y - p.wasY === 0) {
      return; // Ignore because player is not moving
    }
    if (p.x > this.x0 && p.x < this.x3 && p.y > this.y0 && p.y < this.y3) {
      // In range
      if (lineCircleCollide(this.x1, this.y1, this.x2, this.y2, p.x, p.y, p.s)) {
        if (p.alreadyCollided) {
          p.x = p.wasX;
          p.y = p.wasY;
          return; // Check next player
        }
        p.alreadyCollided = true; // To prevent double collisions/out of bounds glitches

        // Player motion
        var pX = p.x - p.wasX;
        var pY = p.y - p.wasY;
        var angle = p5.atan2(pY, pX);
        var pMag = Math.sqrt(sq(pX) + sq(pY));

        // Normalized player motion rotated 90 p5.degrees
        var pnX = pY / pMag;
        var pnY = -pX / pMag;

        // Slope of wall
        var sX = this.x2 - this.x1;
        var sY = this.y2 - this.y1;
        var sMag = Math.sqrt(sq(sX) + sq(sY));
        sX /= sMag;
        sY /= sMag;

        // Normalized p5.normal of wall
        var snX = sY;
        var snY = -sX;

        var dotProduct = snX * pnX + snY * pnY;
        var speed = p.ySpeed;

        // Sliding physics here
        ///_clearLogs();
        ///println("Player velocity: "+pX.toFixed(2)+" "+pY.toFixed(2)+"\nPlayer slide:    "+pnX.toFixed(2)+" "+pnY.toFixed(2)+"\nWall direction:  "+sX.toFixed(2)+" "+sY.toFixed(2)+"\nWall p5.normal:     "+snX.toFixed(2)+" "+snY.toFixed(2));
        p.x = p.wasX + sX * dotProduct * speed;
        p.y = p.wasY + sY * dotProduct * speed;

        if (lineCircleCollide(this.x1, this.y1, this.x2, this.y2, p.x, p.y, p.s)) {

          // Push player away from p5.point 1 if near it
          var chX = p.x - this.x1;
          var chY = p.y - this.y1;
          if (sq(chX) + sq(chY) < sq(p.s)) {
            p.x += chX / 2;
            p.y += chY / 2;
            return;
          }

          // Push player away from p5.point 2 if near it
          var chX = p.x - this.x2;
          var chY = p.y - this.y2;
          if (sq(chX) + sq(chY) < sq(p.s)) {
            p.x += chX / 2;
            p.y += chY / 2;
            return;
          }

          // If nothing works, just revert to old position
          p.x = p.wasX;
          p.y = p.wasY;
        }
      }
    }
  };

  var Task = function (room, type, x, y) {
    this.room = room;
    this.type = type;
    this.x = x;
    this.y = y;

    this.update = function () {
      p5.ellipse(X(this.x), Y(this.y), S(1), S(1));
    };
  };

  var Vent = function (id, x, y, connections) {
    objs.push(this);
    this.id = id;
    this.x = x;
    this.y = y;
    this.s = 1.4;
    this.connections = connections;
    this.maxDist = 2;
    this.maxDistSq = sq(this.maxDist);

    this.update = function () {
      var distSq = sq(me.x - this.x) + sq(me.y - this.y);
      if (distSq > this.maxDistSq) {
        p5.fill(255, 0, 0);
      } else {
        p5.fill(255, 255, 255);
      }
      p5.rect(X(this.x), Y(this.y), S(this.s), S(this.s / 2));
    };
  };

  var RoomOutline = function (type, x, y, w, h) { /// Old code, delete ASAP
    mapRooms.push(this);
    this.names = [];
    if (type.includes("-")) {
      var types = type.split("-");
      this.type = types[0];
      this.subtype = types[1];
    } else {
      this.type = type;
      this.subtype = "none";
    }
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    this.vertices = [];
    this.walls = [];

    var x1, y1, x2, y2;
    x1 = this.x;
    y1 = this.y;
    x2 = this.x + this.w;
    y2 = this.y + this.h;

    switch (this.type) {

      case "junction":
        this.vertices = [{
          x: x2,
          y: y1
        },
        {
          x: x1,
          y: y1
        },
        {
          x: x1,
          y: y2
        },
        {
          x: x2,
          y: y2
        },
        ];
        if (this.subtype === "hor") {
          new LCollider(x1, y1, x2, y1);
          new LCollider(x1, y2, x2, y2);
        } else if (this.subtype === "ver") {
          new LCollider(x1, y1, x1, y2);
          new LCollider(x2, y1, x2, y2);
        } else if (this.subtype === "TL") {
          new LCollider(x1, y1, x1, y2);
          new LCollider(x1, y1, x2, y1);
        } else if (this.subtype === "BR") {
          new LCollider(x2, y1, x2, y2);
          new LCollider(x1, y2, x2, y2);
        } else if (this.subtype === "TR") {
          new LCollider(x1, y1, x1, y2);
          new LCollider(x1, y2, x2, y2);
        } else if (this.subtype === "BL") {
          new LCollider(x2, y1, x2, y2);
          new LCollider(x1, y1, x2, y1);
        } else if (this.subtype === "L") {
          new LCollider(x1, y1, x1, y2);
        } else if (this.subtype === "B") {
          new LCollider(x1, y2, x2, y2);
        } else if (this.subtype === "T") {
          new LCollider(x1, y1, x2, y1);
        }
        break;

      case "corner":

        var vs = [{
          x: x2,
          y: y1
        },
        {
          x: x1,
          y: y1
        },
        {
          x: x1,
          y: y2
        },
        {
          x: x2,
          y: y2
        },
        ];
        var vsInd = function (index) {
          return vs[(index + vs.length) % vs.length];
        };
        var clipCorner = {
          "TL": 1,
          "TR": 0,
          "BL": 2,
          "BR": 3
        }[this.subtype];

        var v = vs.splice(clipCorner, 1)[0];
        var vUp = vsInd(clipCorner);
        var vDown = vsInd(clipCorner - 1);

        var vMidUp = {
          x: (v.x + vUp.x) / 2,
          y: (v.y + vUp.y) / 2
        };
        var vMidDown = {
          x: (v.x + vDown.x) / 2,
          y: (v.y + vDown.y) / 2
        };
        vs.splice(clipCorner, 0, vMidUp); // Insert new edges
        vs.splice(clipCorner, 0, vMidDown);

        // Corner and 2 edges surounding corner
        new LCollider(vUp.x, vUp.y, vMidUp.x, vMidUp.y);
        new LCollider(vMidUp.x, vMidUp.y, vMidDown.x, vMidDown.y);
        new LCollider(vMidDown.x, vMidDown.y, vDown.x, vDown.y);

        // Opposite side 1
        var oppoV = vsInd(clipCorner - 2);
        new LCollider(vDown.x, vDown.y, (vDown.x * 3 + oppoV.x) / 4, (vDown.y * 3 + oppoV.y) / 4);
        new LCollider(oppoV.x, oppoV.y, (vDown.x + oppoV.x * 3) / 4, (vDown.y + oppoV.y * 3) / 4);

        // Opposite side 2
        new LCollider(vUp.x, vUp.y, (vUp.x * 3 + oppoV.x) / 4, (vUp.y * 3 + oppoV.y) / 4);
        new LCollider(oppoV.x, oppoV.y, (vUp.x + oppoV.x * 3) / 4, (vUp.y + oppoV.y * 3) / 4);

        // Apply
        this.vertices = vs;
        break;

      case "square":
        this.vertices = [{
          x: x2,
          y: y1
        },
        {
          x: x1,
          y: y1
        },
        {
          x: x1,
          y: y2
        },
        {
          x: x2,
          y: y2
        },
        ];
        if (this.subtype === "admin") {
          new LCollider(x1, y1, x2, y1);
          new LCollider(x1, (y1 * 4 + y2 * 3) / 7, x1, y2);
          new LCollider(x2, y2, x1, y2);
        } else if (this.subtype === "coms") {

          new LCollider(x1, y1, (x1 + x2) / 2, y1);
          new LCollider(x1, y1, x1, y2);
          new LCollider(x2, y2, x1, y2);
        } else if (this.subtype === "electrical") {
          new LCollider(x1, y1, x2, y1);
          new LCollider(x1, y1, x1, y2);
          new LCollider((x1 * 2 + x2) / 3, y2, x2, y2);
        }
        new LCollider(x2, y2, x2, y1);
        break;

      case "storage":
        this.vertices = [{
          x: x2,
          y: y1
        }, // TR
        {
          x: (x1 * 2 + x2) / 3,
          y: y1
        }, //TL top
        {
          x: x1,
          y: (y1 * 3 + y2) / 4
        }, //TL left
        {
          x: x1,
          y: (y1 + y2 * 3) / 4
        }, //BL left
        {
          x: (x1 * 2 + x2) / 3,
          y: y2
        }, //BL bottom
        {
          x: x2,
          y: y2
        }, // BR
        ];
        var v = this.vertices;
        var TR = v[0];
        var TLT = v[1];
        var TLL = v[2];
        var BLL = v[3];
        var BLB = v[4];
        var BR = v[5];
        new LCollider(TR.x, TR.y, (TLL.x + TR.x * 7) / 8, TR.y);
        new LCollider(TLT.x, TLT.y, (TLL.x * 3.56 + TR.x * 6.2) / 10, TR.y);
        new LCollider(TLT.x, TLT.y, TLL.x, TLL.y);
        new LCollider(TLL.x, TLL.y, BLL.x, (TLL.y + BLL.y) / 2);

        new LCollider(BLL.x, BLL.y, BLB.x, BLB.y);
        new LCollider(BLB.x, BLB.y, BR.x, BR.y);
        new LCollider(BR.x, BR.y, BR.x, (BR.y * 4 + TR.y * 3) / 7);
        new LCollider(BR.x, (BR.y * 2.9 + TR.y * 7.1) / 10, TR.x, TR.y);
        break;

      case "sudoku":
        var vs = [{
          x: x2,
          y: y1
        },
        {
          x: x1,
          y: y1
        },
        {
          x: x1,
          y: y2
        },
        {
          x: x2,
          y: y2
        },
        ];
        var vsInd = function (index) {
          return vs[(index + vs.length) % vs.length];
        };
        var clipEdges = {
          "L": [1, 2],
          "R": [3, 0],
          "T": [0, 1],
          "B": [2, 3]
        }[this.subtype];
        var c1 = clipEdges[0];
        var c2 = clipEdges[1];

        // Default edges
        new LCollider(vsInd(c2).x, vsInd(c2).y, vsInd(c2 + 1).x, vsInd(c2 + 1).y);
        new LCollider(vsInd(c2 + 2).x, vsInd(c2 + 2).y, vsInd(c2 + 1).x, vsInd(c2 + 1).y);
        new LCollider(vsInd(c2 + 2).x, vsInd(c2 + 2).y, vsInd(c2 + 3).x, vsInd(c2 + 3).y);

        // Clipped edge
        var cMidLX = (vs[c1].x * 2 + vs[c2].x) / 3;
        var cMidLY = (vs[c1].y * 2 + vs[c2].y) / 3;
        var cMidRX = (vs[c1].x + vs[c2].x * 2) / 3;
        var cMidRY = (vs[c1].y + vs[c2].y * 2) / 3;
        new LCollider(vs[c1].x, vs[c1].y, cMidLX, cMidLY);
        new LCollider(vs[c2].x, vs[c2].y, cMidRX, cMidRY);
        this.vertices = vs;
        break;


    }

    this.addTask = function (type, x, y) {
      new Task(this, type, x, y);
      return this;
    };

    this.addNames = function (names) {
      this.names.concat(names);
      return this;
    };

    this.addVent = function (id, x, y, connections) {
      new Vent(id, x, y, connections);
    };

    this.update = function () {
      p5.fill(100, 50);
      if (me.x > this.x && me.x < this.x + this.w && me.y > this.y && me.y < this.y + this.h) {
        /// In room
      }

      p5.stroke(100);
      p5.strokeWeight(S(3));
      p5.beginShape();
      for (var i = 0; i < this.vertices.length; i++) {
        var v = this.vertices[i];
        p5.vertex(X(v.x), Y(v.y));
      }
      p5.endShape(p5.CLOSE);
    };
    this.drawWalls = function () { };
  };

  var MapRoom = function (imageName, wallData, collisionData) {
    mapRooms.push(this);
    this.authors = [];
    this.imageName = imageName;
    this.image = img[imageName];
    this.imageX = imgData[imageName][0]; // TL corner of image
    this.imageY = imgData[imageName][1];
    this.walls = [];
    this.addWalls(wallData);
    this.addCollisions(collisionData);
    return this;
  };
  MapRoom.prototype.addAuthor = function (authorOrAuthors) {
    let author = authorOrAuthors;
    if (typeof author === "string") {
      this.authors.push(author);
    } else {
      this.authors = this.authors.concat(author);
    }
  };
  MapRoom.prototype.addTask = function () { };
  MapRoom.prototype.addVent = function () { };
  MapRoom.prototype.addWalls = function (wallData) {
    var wd = wallData;
    if (!wd) return;
    var wds = wd.split(" ");
    for (var i = 0; i < wds.length; i++) { // For every continuous wall group...
      var section = wds[i].split("|");
      var wallSection = [];
      for (var j = 0; j < section.length; j++) {
        var p = section[j].split(",");
        wallSection.push({
          x: Number(p[0]),
          y: Number(p[1])
        });
      }
      this.walls.push(wallSection);
    }
  };
  MapRoom.prototype.addCollisions = function (collisionData) {
    var cd = collisionData;
    if (!cd) return;
    var cds = cd.split(" ");
    for (var i = 0; i < cds.length; i++) { // For every continuous wall group...
      var section = cds[i].split("|");
      for (var j = 0; j < section.length - 1; j++) {
        var p1 = section[j].split(",");
        var p2 = section[j + 1].split(",");
        new LCollider(Number(p1[0]), Number(p1[1]), Number(p2[0]), Number(p2[1]));
      }
    }
  };
  MapRoom.prototype.update = function () {
    p5.image(this.image, X(this.imageX), Y(this.imageY));
  }
  MapRoom.prototype.drawWalls = function () {
    if (!debugM) {
      // Walls
      p5.noFill();
      p5.strokeWeight(S(5));
      p5.stroke(17, 27, 27);
      for (let section of this.walls) {
        p5.beginShape();
        for (let p of section) {
          p5.vertex(X(p.x), Y(p.y));
        }
        p5.endShape();
      }
      p5.strokeWeight(S(2));
      p5.stroke(46, 46, 46);
      for (let section of this.walls) {
        p5.beginShape();
        for (let p of section) {
          p5.vertex(X(p.x), Y(p.y));
        }
        p5.endShape();
      }
    }
  };



  var Bean = function (id, name, isSpectator, isImposter, x, y) {
    this.id = id;
    this.isDead = false;
    this.deadStep = 0;
    players.push(this);
    this.name = name || "undefined";
    this.isSpectator = isSpectator;
    this.isImposter = isImposter;
    this.x = this.wasX = this.seekX = x;
    this.y = this.wasY = this.seekY = y;
    this.s = 15; // Size
    this.index = players.length - 1;
    this.col = beanColors[this.index];
    this.colName = beanNames[this.index];
    this.facingEast = true;
    this.xSpeed = 2.5; // Speed in the X direction
    this.ySpeed = this.xSpeed * 0.88; // Speed in the Y direction
    this.mouseRangeSlowdown = 50; // For p5.smooth mouse controls
    this.speedMultiplier = 1; // For player control
    this.isMoving = false; // Read-only
    this.alreadyCollided = false; // For collision physics
    this.sees = []; // For partial visibility for humans and voting logic for AI
    this.notSees = [];
    this.nearbyColliders = []; // For optimization
    if (isImposter) {
      this.killTimer = this.killTimerReset = 10; // In seconds
      this.killRange = 40; // In game coordinates
    }
    this.reportRange = 40;
  };
  Bean.prototype.localControls = function () {
    // Key controls 
    this.speedMultiplier = 0;
    if (keys[p5.LEFT] || keys[65]) {
      this.speedMultiplier = 1;
      this.seekX = this.x - 1;
    } else if (keys[p5.RIGHT] || keys[68]) {
      this.speedMultiplier = 1;
      this.seekX = this.x + 1;
    }
    if (keys[p5.UP] || keys[87]) {
      this.speedMultiplier = 1;
      this.seekY = this.y - 1;
    } else if (keys[p5.DOWN] || keys[83]) {
      this.speedMultiplier = 1;
      this.seekY = this.y + 1;
    }

    // Mouse controls
    if (p5.mouseIsPressed && p5.mouseButton === p5.LEFT && !uiManager.isMouseHoverAny) {
      this.speedMultiplier = 1;
      this.seekX = gMouseX;
      this.seekY = gMouseY;
      var mouseMag = Math.sqrt(sq(p5.mouseX - X(this.x)) + sq(p5.mouseY - Y(this.y)));
      if (mouseMag < this.mouseRangeSlowdown) {
        this.speedMultiplier = mouseMag / this.mouseRangeSlowdown;
      }
    }

  };
  Bean.prototype.update = function () {
    if (this.isDead) return;

    // Movement
    this.speedMultiplier = 1;
    this.alreadyCollided = false;
    this.wasX = this.x;
    this.wasY = this.y;
    this.seekX = this.x;
    this.seekY = this.y;

    // Change velX and velY
    if (this == me) {
      this.localControls();
    }

    // More movement code
    this.isMoving = (this.seekX !== this.x || this.seekY !== this.y);
    var velX = this.seekX - this.x;
    var velY = this.seekY - this.y;
    if (velX || velY) {
      if (velX < 0) {
        this.facingEast = false;
      }
      if (velX > 0) {
        this.facingEast = true;
      }
      var magni = Math.sqrt(sq(velX) + sq(velY));
      velX *= this.xSpeed / magni;
      velY *= this.ySpeed / magni;
      this.x += velX * this.speedMultiplier;
      this.y += velY * this.speedMultiplier;
    }


    // Find nearby colliders for optimized collisions
    this.nearbyColliders = [];
    for (var i = 0; i < colliders.length; i += 1) {
      var w = colliders[i];
      var hGLOS = 100;
      if (
        (p5.abs(w.x1 - this.x) < hGLOS && p5.abs(w.y1 - this.y) < hGLOS) ||
        (p5.abs(w.x2 - this.x) < hGLOS && p5.abs(w.y2 - this.y) < hGLOS)) {
        this.nearbyColliders.push(w);
      }
    }

    // Update player-player visibility (PPV)
    this.sees = [];
    this.notSees = [];
    for (var i = 0; i < players.length; i++) {
      var isIntersection = false;
      var p = players[i];
      if (p === this) { // If player is myself, ignore
        continue;
      }
      if (p5.abs(p.x - this.x) > globalLOS || p5.abs(p.y - this.y) > globalLOS) { // If player is "off-screen", consider it not seen
        this.notSees.push(p);
        continue;
      }
      for (var j = 0; j < this.nearbyColliders.length; j++) {
        /* Thanks to everyone in the KACC discord server for helping me figure this out */
        var w = this.nearbyColliders[j]; // w for collider (wall)
        isIntersection = isLineLineIntersect(w.x1, w.y1, w.x2, w.y2, this.x, this.y, p.x, p.y);
        if (isIntersection) { // If wall blocks p5.line of sight
          this.notSees.push(p);
          break;
        }
      }
      if (!isIntersection) {
        this.sees.push(p);
      }
    }

    // Imposter logic
    if (this.isImposter) {
      this.killTimer -= 1 / 60;
    }
  };
  Bean.prototype.draw = function () {
    // Drawing
    if (this.isDead) {
      drawCharacterBody(X(this.x), Y(this.y), S(this.s), this.col, this.deadStep++);
      return;
    }

    // Calculate player position
    var x = X(this.x);
    var y = Y(this.y);
    var s = S(this.s);
    if (x < -50 || x > p5.width + 50 || y < -50 || y > p5.height + 50) {// If player is off-screen, ignore
      return;
    }

    // Calculate bobbing animation when walking
    var cycle = 0;
    var walkY = 0;
    if (this.isMoving) {
      walkY = (1 - p5.cos(p5.radians(p5.frameCount * 360 / 20))) * this.s / 12;
      cycle = p5.floor(p5.frameCount / 5) % 4;
    }

    // Shadow
    p5.fill(0, 100);
    p5.ellipse(x, y + s * 0.35, s * 0.95, s * 0.25);

    // Draw bean
    drawCharacter(x, y - S(this.s / 4 + walkY), s / 60, !this.facingEast, this.index, cycle);

    // Show PPV (player-player visibility) if in debug mode
    if (debugM) {
      p5.stroke(255);
      p5.strokeWeight(1);
      for (var i = 0; i < this.sees.length; i++) {
        p5.fill(this.sees[i].col);
        p5.ellipse(x + i * 10 - this.sees.length * 5 + 5, y - S(this.s), 10, 10);
      }
      p5.noStroke();
    }
  };
  Bean.prototype.drawName = function () {
    // Draw name above player
    var x = X(this.x);
    var y = Y(this.y);
    var s = S(this.s);
    p5.fill(0);
    var yPos = y - s * 1.2;
    p5.text(this.name, x - 1, yPos + 1);
    p5.text(this.name, x - 1, yPos - 1);
    p5.text(this.name, x + 1, yPos - 1);
    p5.text(this.name, x + 1, yPos + 1);
    if (this.isImposter) {
      p5.fill(255, 0, 0);
    } else {
      p5.fill(255);
    }
    p5.text(this.name, x, yPos);
  }
  Bean.prototype.lineOfSight = function () {
    /** Credit to Jent @iforgothisusername /// **/
    if (debugM) {
      p5.stroke(0, 50);
      p5.fill(5, 5, 10, 50);
    } else {
      p5.fill(5, 5, 10);
    }
    p5.noStroke();

    for (let room of mapRooms) {
      for (let wall of room.walls) {
        for (let i = 0; i < wall.length - 1; i++) {

          var left = wall[i];
          var right = wall[i + 1];
          p5.quad(
            X(left.x), Y(left.y),
            X(right.x), Y(right.y),
            X(this.x + (right.x - this.x) * 100), Y(this.y + (right.y - this.y) * 100),
            X(this.x + (left.x - this.x) * 100), Y(this.y + (left.y - this.y) * 100)
          );
        }

      }
    }
  };
  Bean.prototype.reportBody = function () {
    beanWhoReported = this;
    scene = "vote";
  }

  /** More UI **/
  var UIElement = function (imageName, x, y, available, action, key, number) {
    uiManager.elements.push(this);
    this.imageName = imageName;
    this.image = img[imageName];
    this.x = x;
    this.y = y;
    this.w = this.image.width;
    this.h = this.image.height;
    this.available = available;
    this.action = action;
    this.key = key;
    this.number = number || (() => null);
    this.isMouseHover = false;
  };
  UIElement.prototype.show = function () {
    var isHover = p5.mouseX > this.x && p5.mouseX < this.x + this.w && p5.mouseY > this.y && p5.mouseY < this.y + this.h;

    var isAvailable = this.available();
    if (isAvailable) {
      if ((keyJustPressed && keys[this.key]) || (mouseJustPressed && isHover)) {
        this.action();
      }
    }
    p5.tint(255, isAvailable ? 255 : 99);
    p5.image(this.image, this.x, this.y);
    p5.noTint();

    // Display number
    if (typeof this.number === "function") {
      var displayNumber = this.number();
      if (displayNumber !== null) {
        p5.text(displayNumber, this.x + this.w / 2, this.y + this.h / 2);
      }
    }

    if (isHover && isAvailable) {
      p5.cursor("pointer");
    }
    this.isMouseHover = isHover;
  };

  var UIManager = function () {
    this.elements = [];
    this.isMouseHoverAny = false;
  };
  UIManager.prototype.populateUI = function () {
    new UIElement("report_button", p5.width - 200, p5.height - 100,

      function () {// When available
        this.bestI = null;
        var bestDist = sq(me.reportRange);
        for (var i = 0; i < me.sees.length; i++) {
          var p = me.sees[i];
          if (p.isDead) {// If crewmate is dead
            var distance = sq(me.x - p.x) + sq(me.y - p.y);
            if (distance < bestDist) {
              bestDist = distance;
              this.bestI = i;
            }
          }
        }
        return this.bestI !== null;
      },

      function () {
        me.reportBody();
      },

      82 // R key to report body
    );



    if (me.isImposter) {
      new UIElement("kill_button", p5.width - 100, p5.height - 100,

        function () {// When available
          if (me.killTimer > 0) return false;
          this.bestI = null;
          var bestDist = sq(me.killRange);
          for (var i = 0; i < me.sees.length; i++) {
            var p = me.sees[i];
            if (!p.isImposter && !p.isDead) {// If crewmate and not dead
              var distance = sq(me.x - p.x) + sq(me.y - p.y);
              if (distance < bestDist) {
                bestDist = distance;
                this.bestI = i;
              }
            }
          }
          return this.bestI !== null;
        },

        function () {// Action
          if (this.bestI !== null) {
            var closest = me.sees[this.bestI];
            gameAPI.kill(true, me.id, closest.id);
          }
        },

        81, // Q key to kill

        function () {
          return me.killTimer > 0 ? Math.ceil(me.killTimer) : null;
        });
    }
  }
  UIManager.prototype.show = function () {
    this.isMouseHoverAny = false;
    p5.textFont(font.ui);
    p5.fill(255);
    for (let element of this.elements) {
      element.show();
      this.isMouseHoverAny = this.isMouseHoverAny || element.isMouseHover;
    }
  };

  /** Multiplayer support */
  var MultiInterface = function () {
    this.localID = -1; // -1 = unknown, 0-11 = assigned

  };
  MultiInterface.prototype.updatePosition = function (broadcast, beanID, x, y, velocityX, velocityY) {
    if (broadcast) {

    }
  };
  MultiInterface.prototype.completeTask = function (broadcast, breanID, taskName) {

  };
  MultiInterface.prototype.kill = function (broadcast, killerID, victimID) {
    if (broadcast) {

    }
    var killer = players.find(p => p.id === killerID);
    var victim = players.find(p => p.id === victimID);
    killer.x = victim.x;
    killer.y = victim.y;
    killer.killTimer = killer.killTimerReset;
    victim.isDead = true; // Set killed player as dead
  };
  MultiInterface.prototype.reportBody = function (broadcast, killerID, targetID) {
    if (broadcast) {

    }
  }
  MultiInterface.prototype.callEmergencyMeeting = function (broadcast, beanID) {

  };
  MultiInterface.prototype.confirmVote = function (broadcast, voterID, susID) {

  };
  MultiInterface.prototype.sendChatMessage = function (broadcast, senderID, messageContent) {

  };
  MultiInterface.prototype.quit = function (broadcast, beanID) {

  };
  gameAPI = new MultiInterface();

  /** Scenes **/
  var menuBalls = [];
  for (var i = 0; i < 25; i++) {
    menuBalls.push({
      x: p5.random(0, p5.width),
      y: p5.random(0, p5.height),
      s: p5.random(0.5, 5)
    });
  }
  function bgSnowballs() {
    p5.fill(255);
    p5.stroke(255);
    p5.strokeWeight(1);
    for (var i = 0; i < menuBalls.length; i++) {
      var ms = menuBalls[i];
      ms.x += ms.s / 4;
      p5.ellipse(ms.x, ms.y, ms.s, ms.s);
    }
    if (p5.frameCount % 20 === 0) {
      menuBalls.push({
        x: 0,
        y: p5.random(0, p5.height),
        s: p5.random(0.5, 7)
      });
    }
  }

  var sceneLoading = function () {
    var keyName;
    if (imgSource) {
      if (!imgKeys) {
        imgKeys = Object.keys(imgSource)
      }
      if (loadIndex >= imgKeys.length) { // If all graphics are done loading

        // Delete every canvas
        document.querySelectorAll('body>:not(.p5Canvas)')
          .forEach(function (canvas) {
            canvas.parentNode.removeChild(canvas);
          });


        for (var i = 0; i < mapRooms.length; i++) {
          if (mapRooms[i].image !== undefined) { /// new type
            var room = mapRooms[i];
            room.image = img[room.imageName];
          }

        }
        loadIndex = 0; // Reset counter in case images need to be reloaded again
        scene = "menu";
        return;
      }
      keyName = imgKeys[loadIndex];
      if (keyName in imgData) {
        img[keyName] = imgSource[keyName](0, 0, imgData[keyName][2] / cam.ht);
      } else {
        img[keyName] = imgSource[keyName](0, 0, globalUIScale);
      }
      loadIndex++;
    }
    p5.background(0);
    p5.textSize(30);
    p5.fill(255);
    p5.resetMatrix();
    p5.textAlign(p5.CENTER, p5.CENTER);
    p5.textFont(font.game);
    if (imgSource) {
      p5.text("Loading..." + p5.floor(100 * loadIndex / imgKeys.length) + "%", p5.width / 2, p5.height / 2);
      p5.textSize(20);
      p5.text(keyName, p5.width / 2, p5.height / 2 + 80); // Show name of image
    } else {
      p5.text("Fetching...", p5.width / 2, p5.height / 2);
    }
  }

  var sceneMenu = function () {

    p5.background(0);

    // Title

    joffreyText("Team Among Us presents", p5.width / 2 - 70, 10, 5, p5.color(224, 175, 78), 3);
    joffreyText("Among Us", p5.width / 2 - 140, 40, 30, p5.color(255), 1.5);

    // Snowballs
    bgSnowballs()

    for (let i = 1; i < 10; i++) {
      drawCharacter(p5.width / 2 - 250 + 50 * i, 503, 0.75, 0, Math.floor(p5.frameCount / 30 + i * 3) % beanColors.length);
    }
    //drawCharacter(p5.width / 2 - 165, 514, 2, false, 1);
    //drawCharacter(p5.width / 2 + 215, 445, 1.9, true, 2);
    //drawCharacter(p5.width / 2 + 142, 508, 2, true, 3);
  };

  var sceneHowto = function () {
    p5.background(0);
    p5.textFont(font.title);
    p5.text("How to Play", 300, 50);

  };
  var sceneCredits = function () {

    p5.background(0);
    p5.textFont(font.title);
    p5.text("Among Khan", 300, 50);
  };

  var onlinePage = 1;
  var sceneOnline = function () {

    // Go back to menu is multiplayer is not enabled

    if (false && !parent.isConnected) {
      alert("You are not connected to the server. Please try again later.");
      scene = "menu";
      return;
    }



    p5.background(0);
    bgSnowballs()

    p5.rectMode(p5.CORNER)
    p5.textAlign(p5.LEFT);
    p5.noFill()
    p5.strokeWeight(2)
    p5.stroke(255)
    p5.rect(30, 80, p5.width - 60, p5.height - 110, 5)
    p5.strokeWeight(1)
    p5.rect(33, 83, p5.width - 66, p5.height - 116, 4)

    let roomsPerPage = Math.floor((p5.height - 120) / 60)
    for (var i = 0; i < roomsPerPage; i++) {
      var ind = (onlinePage - 1) * roomsPerPage + i;
      if (ind < 0 || ind >= rooms.length) {
        continue;
      }
      var theRoom = rooms[ind];
      p5.strokeWeight(3);
      p5.stroke(255);
      let yPos = i * 60 + 90;
      if (p5.mouseX > 50 && p5.mouseX < p5.width - 100 && p5.mouseY > yPos && p5.mouseY < yPos + 53) {
        p5.fill(50);
        p5.cursor("pointer"); 
        if (mouseJustPressed) { 
          if (p5.mouseButton === p5.LEFT) {
            if (!parent.isConnected) {
              alert("You are not connected to the server. Please try again later.");
              return
            }
            waitingForServer = true
            sendTo("join-room " + theRoom.rid);
          }
        }
      } else {
        p5.noFill();
      }
      p5.rect(50, 90 + 60 * i, p5.width - 100, 53, 5);
      p5.fill(255);

      p5.noStroke();
      p5.text(theRoom.name || "[no name]", 65, 122 + 60 * i);
      p5.text(`${theRoom.playerIds.length}/${theRoom.settings.maxPlayers}`, 300, 122 + 60 * i);
      // if (room.isPublic) {

      // } else {
      //   fill(0, 174, 255);
      //   text("Private",  229, 122 + 60 * i);
      // }
    }

    if (rooms.length > roomsPerPage) {
      p5.fill(255);
      p5.stroke(255);
      p5.strokeWeight(2);
      var btn1X = p5.width - 36;
      var btn2X = p5.width - 64;
      var btnY = 65;
      if (p5.sq(btn1X - p5.mouseX) + p5.sq(btnY - p5.mouseY) <= p5.sq(8)) {
        if (mouseJustPressed) {
          onlinePage = p5.min(p5.ceil(rooms.length / 5), onlinePage + 1);
        }
        p5.fill(255);
      } else {
        p5.noFill();
      }
      p5.ellipse(btn1X, btnY, 22, 22);
      if (p5.sq(btn2X - p5.mouseX) + p5.sq(btnY - p5.mouseY) <= p5.sq(8)) {
        p5.fill(255);
        if (mouseJustPressed) {
          onlinePage = p5.max(1, onlinePage - 1);
        }
      } else {
        p5.noFill();
      }
      p5.ellipse(btn2X, btnY, 22, 22);
      p5.textFont('Arial')
      p5.noStroke();
      p5.fill(255);
      p5.text(">", btn1X - 5, btnY + 1);
      p5.text("<", btn2X - 5, btnY + 1);
      p5.text("Page " + onlinePage + "/" + p5.ceil(rooms.length / roomsPerPage), btn1X - 139, btnY + 2);
    }


    p5.noStroke();
    p5.rectMode(p5.CENTER)
  };

  var sceneGame = function () {
    gMouseX = RevX(p5.mouseX);
    gMouseY = RevY(p5.mouseY);

    p5.background(0);
    updateCamera();

    /* Draw rooms excluding walls */
    for (var i = 0; i < mapRooms.length; i++) {
      mapRooms[i].update();
    }

    /* Update player movement and AI */
    
    for (var i = players.length - 1; i >= 0; i--) {
      var player = players[i];
      player.update();
      /* Check collisions with nearby colliders (walls) */
      for (var j = 0; j < player.nearbyColliders.length; j++) {
        player.nearbyColliders[j].checkCollisionsWith(player);
      }
    }

    /* Multiplayer position update */
    
    if (isMultiplayer) {
      // Every 12 frames (5fps)
      if (p5.frameCount % 12 == 0) {
        sendTo("room", `m ${me.x.toFixed(2)} ${me.y.toFixed(2)}`)
      }
    }

    /* Draw players that are NOT visible to me so they can appear in the shadows */
    for (var i = 0; i < me.notSees.length; i++) {
      var player = me.notSees[i];
      player.draw();
    }

    /* Restrict player vision */
    me.lineOfSight();

    /* Draw colliders if in debug mode, otherwise draw room walls */
    if (debugM && !debugX.length) {
      p5.strokeWeight(S(3.5));
      p5.stroke(0, 255, 0);
      for (var i = 0; i < me.nearbyColliders.length; i++) {
        var w = me.nearbyColliders[i];
        p5.line(X(w.drawX1), Y(w.drawY1), X(w.drawX2), Y(w.drawY2));
      }
    } else {
      for (var i = 0; i < mapRooms.length; i++) {
        mapRooms[i].drawWalls();
      }
    }
    p5.noStroke();

    for (var i = objs.length - 1; i >= 0; i--) {
      var obj = objs[i];
      obj.update();
      if (obj.isDead) {
        objs.splice(i, 1);
      }
    }

    /* Draw players that are visible to me */
    for (var i = me.sees.length - 1; i >= 0; i--) {
      var player = me.sees[i];
      player.draw();
    }
    me.draw(); // Cannot see yourself
    p5.textFont(font.beans);
    for (var i = me.sees.length - 1; i >= 0; i--) {
      var player = me.sees[i];
      if (!player.isDead) player.drawName();
    }
    if (!me.isDead) me.drawName();

    /* Report, kill, vent, etc icons */
    uiManager.show();

    /* For debugging */
    if (debugM) {
      cam.x = me.x;
      cam.y = me.y; //fix position of player


      var printThis = "";
      var newX, newY;
      p5.strokeWeight(2);
      if (debugX.length) {

        // Draw cyan dots

        for (var i = 0; i < debugX.length; i++) {
          if (debugX[i] === "gap") {
            continue;
          }
          p5.fill(0, 255, 247);
          p5.ellipse(X(debugX[i]), Y(debugY[i]), 10, 10);
          if (i > 0 && debugX[i - 1] !== "gap") {
            p5.stroke(0, 255, 255, 200);
            p5.line(X(debugX[i]), Y(debugY[i]), X(debugX[i - 1]), Y(debugY[i - 1]));
          }
        }
        // Predict next p5.line position
        var lastI = debugX.length - 1;
        if (debugX[lastI] === "gap") { // If gap between walls, draw p5.red p5.line instead of cyan
          lastI--;
          p5.stroke(255, 0, 0, 150);
        } else {
          p5.stroke(0, 255, 255);
        }
        var lastX = debugX[lastI];
        var lastY = debugY[lastI];
        var chX = gMouseX - lastX;
        var chY = gMouseY - lastY;
        var magni = Math.sqrt(sq(chX) + sq(chY));
        var angle = p5.atan2(chY, chX);
        if (!keys[32]) {
          angle = p5.radians(45) * p5.round(angle / p5.radians(45)); // Snap into 45-angle direction
        }
        newX = p5.round(lastX + magni * p5.cos(angle));
        newY = p5.round(lastY + magni * p5.sin(angle));

        // Draw it
        p5.line(X(lastX), Y(lastY), X(newX), Y(newY));
        p5.noStroke();

        // If P key is pressed, p5.clear positions
        if (keys[80]) {
          debugX = [];
          debugY = [];
        }

        // If O key is pressed, create a wall gap
        if (keys[79] && keyJustPressed) {
          debugX.push("gap");
          debugY.push("gap");
        }

        // If I key is pressed, undo
        if (keys[73] && keyJustPressed) {
          debugX.p5.pop();
          debugY.p5.pop();
        }
      } else {
        newX = gMouseX;
        newY = gMouseY;
      }
      if (mouseJustPressed && p5.mouseButton === p5.RIGHT) { // If right clicked, add another dot
        debugX.push(p5.round(newX));
        debugY.push(p5.round(newY));
        for (var i = 0; i < debugX.length; i++) {
          if (debugX[i] === "gap") {
            printThis = printThis.slice(0, printThis.length - 1);
            printThis += " ";
          } else {
            printThis += debugX[i] + "," + debugY[i] + "|";
          }
        }
        printThis = '"' + printThis.slice(0, printThis.length - 1) + '"'; // Remove the last 

        if (mouseJustPressed) {// Print wall or collision string to console
          console.log(printThis);
        }
      }
    } else {

      p5.fill(255, 255, 255);
      p5.textFont(font.game);
      p5.text("PRESS X FOR DEBUG MODE", 165, 50);
    }

  };

  /** Create instances **/
  // Cafeteria and connecting junctions
  //new RoomOutline("cafeteria", 543, 2, 352, 352).addTask("wires", 45, 5).addTask("wires", 55, 6).addNames("in cafeteria", "at spawn", "near spawn");

  //new LCollider();
  new RoomOutline("junction-T", 318, 155, 241, 62).addNames("between spawn and upper engine", "between spawn and medbay", "coming out of medbay", "left of cafeteria");
  new LCollider(318, 217, 458, 217);
  new LCollider(501, 217, 558, 217);
  new RoomOutline("junction-hor", 895, 156, 57, 60).addNames("by weapons", "near weapons");
  new RoomOutline("junction-L", 698, 355, 60, 114).addNames("near admin", "above storage", "below cafeteria");
  new LCollider(698 + 60, 355, 698 + 60, 394);
  new LCollider(698 + 60, 458, 698 + 60, 468);

  // admin and connecting room
  new RoomOutline("junction-hor", 759, 396, 35, 60);
  //new RoomOutline("square-admin", 795, 396, 146, 143);

  // TR of p5.map
  //new RoomOutline("corner-TR", 953, 118, 138, 134);
  new RoomOutline("junction-ver", 990, 253, 64, 30).addNames("a", "b");
  new RoomOutline("junction-hor", 972, 310, 18, 47).addNames("a", "b");
  new RoomOutline("junction-L", 990, 283, 63, 25).addNames("a", "b");
  new RoomOutline("junction-BL", 1055, 284, 62, 38).addNames("a", "b");
  new RoomOutline("junction-L", 1052, 360, 65, 11).addNames("a", "b");
  new RoomOutline("junction-BR", 1056, 386, 62, 45).addNames("a", "b");
  new RoomOutline("junction-TL", 992, 373, 62, 60).addNames("a", "b").addVent();
  new RoomOutline("junction-ver", 992, 432, 62, 75).addNames("a", "b");


  new RoomOutline("junction-B", 990, 310, 61, 47).addNames("a", "b");
  new RoomOutline("junction", 1053, 310, 63, 75).addNames("a", "b");
  new LCollider(949, 162, 949, 170);

  // shields, coms
  new RoomOutline("corner-BR", 953, 508, 140, 160).addNames("a", "b");
  new RoomOutline("junction-T", 781, 552, 173, 71).addNames("a", "b");
  new LCollider(781, 552 + 71, 781 + 87, 552 + 71);
  new LCollider(939, 552 + 71, 866 + 87, 552 + 71);
  new RoomOutline("junction-ver", 870, 625, 68, 16).addNames("a", "b");
  new RoomOutline("square-coms", 793, 642, 145, 115);

  // storage
  new RoomOutline("storage", 600, 470, 180, 275);

  // electrical and surrounding junctions
  new RoomOutline("junction-ver", 445, 594, 46, 14);
  new RoomOutline("junction-B", 417, 610, 182, 64);
  new LCollider(423, 610, 444, 610);
  new LCollider(492, 610, 599, 610);

  new RoomOutline("junction-TR", 370, 610, 50, 64);
  new RoomOutline("junction-BL", 370, 526, 50, 84);
  new RoomOutline("junction-hor", 317, 526, 52, 60);
  new LCollider(315, 588, 315, 600);
  new LCollider(370, 588, 370, 606);


  // engines junctions in between
  new RoomOutline("corner-BL", 175, 483, 140, 160);
  new RoomOutline("corner-TL", 176, 114, 140, 160);
  new LCollider(210, 274, 224, 274);
  new LCollider(210, 483, 227, 483);
  new RoomOutline("junction-ver", 228, 404, 50, 77);
  new RoomOutline("junction-hor", 278, 347, 40, 53);
  new RoomOutline("junction-hor", 192, 348, 33, 53);
  new RoomOutline("junction-ver", 226, 274, 52, 70).addNames("a", "b");
  new RoomOutline("junction", 225, 344, 53, 62).addNames("a", "b");
  new LCollider(316, 217, 316, 235);

  // reactor
  //new RoomOutline("sudoku-R", 57, 294, 133, 163);

  // navigation
  new RoomOutline("sudoku-L", 1199, 265, 92, 175);
  new RoomOutline("junction-hor", 1118, 323, 80, 60);


  new LCollider(409, 155, 466, 155);


  var initGame = function () {
    new MapRoom("hallway_2", "", "")
      .addAuthor("@openPodBayDoorsHal")

    new MapRoom("cafeteria_room", "549,154|549,85|609,25|808,25|898,111|898,154 898,217|898,263|819,342|760,342 696,342|628,342|550,268|550,217", "549,154|549,107|611,45|809,45|898,134|898,155 898,217|898,263|819,342|760,342 696,342|628,342|550,268|550,217")
      .addAuthor(["@dt.ka", "@EmeraldBlackbird", "@VXS", "@TheCoderLegend", "Wyatt-Matthews"])

    new MapRoom("admin_room", "793,396|950,396|950,520|925,545|793,545|793,456", "794,415|949,415|950,520|925,545|793,545|793,456 832,479|909,479|909,509|832,509|832,479")
      .addAuthor(["@dauntlessStudios", "@DreamWasntTaken", "@Tiny252112"])

    new MapRoom("reactor_room", "192,350|192,289|143,289|143,234|107,234|57,274|57,449|112,487|142,487|142,434|192,434|192,401", "191,349|191,306|142,306|142,251|112,251|74,289|74,303|93,303|108,318|108,367|121,372|121,389|77,389|77,461|111,485|141,485|141,435|191,435|191,401")
      .addAuthor("@dt.ka")

    new MapRoom("o2_room", "192,350|192,289|143,289|143,234|107,234|57,274|57,449|112,487|142,487|142,434|192,434|192,401", "978,310wa|908,310|866,367 866,373|979,373|979,358")
      .addAuthor("@n3wninja")

    new MapRoom("weapons_room", "941,155|941,87|1021,87|1093,157|1093,256|1047,256 996,256|977,256|943,222|943,216", "942,175|966,175|966,161|984,143|984,105|1025,105|1090,170|1054,170|1054,188|1043,204|1043,261 1000,261|1000,217|986,208|942,208 1038,172|1027,186|996,185|988,174|989,163|1013,154|1037,167")
      .addAuthor("@dt.ka")

    new MapRoom("security_room", "316,332|316,297|343,278|372,278|401,295|401,437|316,437|316,401|280,401", "316,346|316,326|334,307|387,307|399,314|399,358|369,358|369,371|381,371|381,395|400,395|400,435|316,435|316,401")
      .addAuthor("@DreamWasntTaken")

    new MapRoom("medbay_room", "500,231|538,231|538,315|603,377|603,413|452,413|420,381|420,231|457,231", "499,218|499,246|511,246|511,270|538,270|538,287|510,287|510,303|538,303|538,333|603,392|603,413|453,413|420,380|420,303|447,303|447,288|421,288|421,270|447,270|447,246|463,246|463,218")
      .addAuthor("@dauntlessStudios", "@Tiny252112", "@Misty333", "@n3wninja")

    new MapRoom("electrical_room", "457,424|601,424|601,467|554,509|554,569|518,605|494,605|494,631 456,631|456,424", "457,445|501,445|501,451|600,451|600,466|552,509|552,568|516,604|494,604 457,604|457,533|508,533|508,507|458,507|458,446")
      .addAuthor("@Superelectronic")

    new MapRoom("navigation_room", "", "")
      .addAuthor("@VXS")

    new MapRoom("shields_room", "", "")
      .addAuthor("@silverleaf12")

    new MapRoom("upper_engine_room", "", "")
      .addAuthor(["@VXS", "@FadeAway", "@TheCoderLegend"])

    new MapRoom("lower_engine_room", "", "")
      .addAuthor(["@VXS", "@FadeAway", "@TheCoderLegend"])

    // Players

    var angle = Math.PI * 1.2;
    var magni = 200;
    var centerX = 728;
    var centerY = 187;
    me = new Bean(myProfile.id || "me", myProfile?.nickname || myProfile.id || "Me", false, false, 448, 187);
    ///


    ///
    // for (var i = 0; i < 2; i++) {/// revert to i < 9
    //   angle += Math.PI / 10;
    //   var b = new Bean(0, "CPU " + (i + 2), false, !i, centerX + p5.cos(angle) * magni, centerY + p5.cos(angle) * magni);
    //   b.id = i + 1;
    // }
    cam.x = me.x;
    cam.y = me.y;

    uiManager = new UIManager();
    uiManager.populateUI();

    scene = "game";
  };

  /** Mouse and Key Events **/
  p5.mouseScrolled = function () {
    if (debugM) {
      if (mouseScroll < 0) {
        cam.gotoHt *= 2;
      } else if (mouseScroll > 0) {
        cam.gotoHt /= 2;
      }
    }
  };

  p5.mousePressed = function () {
    p5.mouseIsPressed = true;
    mouseJustPressed = true;
    for (var i = 0; i < buttons.length; i++) {
      buttons[i].on_mouse_click(); // Check every button if clicked
    }
  };
  p5.mouseReleased = function () {
    p5.mouseIsPressed = false;
  };
  p5.keyPressed = function () {
    keyJustPressed = true;
    keys[p5.keyCode] = true;
    if (keys[88]) { // Go in and out of debug mode
      debugM = !debugM;
      if (!debugM) {
        cam.gotoHt = globalHt;
      }
    }
  };

  p5.keyReleased = () => {
    keys[p5.keyCode] = false;
  };

  var loadIndex = 0;
  var imgKeys;
  p5.draw = () => {
    if (codeEval) {
      eval(codeEval);
      codeEval = false;
    }

    p5.cursor(waitingForServer ? "progress" : p5.ARROW);

    switch (scene) {
      case "loading":
        sceneLoading();
        break;
      case "waiting_room":
        sceneWaitingRoom();
        break;
      case "game":
        sceneGame();
        break;
      case "vote":
        scene = "game";///
        break;
      case "menu":
        sceneMenu();
        break;
      case "howto":
        sceneHowto();
        break;
      case "credits":
        sceneCredits();
        break;
      case "help":
        scene = "menu";
        break;
      case "online":
        sceneOnline();
        break;
      case "initGame":
        initGame();
        break;


      // Add scene here

      default:
        console.log("Scene '" + scene + "' does not exist.");
    }

    update_buttons();
    mouseJustPressed = false;
    keyJustPressed = false;
    p5.textFont(font.monospace);
    p5.fill(255, 255, 255);
    p5.textAlign(p5.LEFT, p5.TOP);
    p5.text(p5.frameRate().toFixed(1), 5, 5);
    p5.textAlign(p5.CENTER, p5.CENTER);


  };



}