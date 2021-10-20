let getMenuCode = (status, players, games, version, isInRoom) => ` _______  __   __  _______  __    _  _______    __   __  _______ 
|   _   ||  |_|  ||       ||  |  | ||       |  |  | |  ||       |
|  |_|  ||       ||   _   ||   |_| ||    ___|  |  | |  ||  _____|
|       ||       ||  | |  ||       ||   | __   |  |_|  || |_____ 
|       ||       ||  |_|  ||  _    ||   ||  |  |       ||_____  |
|   _   || ||_|| ||       || | |   ||   |_| |  |       | _____| |
|__| |__||_|   |_||_______||_|  |__||_______|  |_______||_______|
  KA Edition                                                     


${isInRoom ? "-" : "*"} [Host]                  Status    ${status}${" ".repeat(10-status.length)}Special thanks to
${isInRoom ? "-" : "*"} [Join random]           Players   ${players}${" ".repeat(2-players.length)}           everyone who made
${isInRoom ? "*" : "-"} [Leave]                 Games     ${games}            this possible!
* [Credits]
* [Exit game]             Version   ${version}`;

