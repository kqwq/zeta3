
// iife
var Loader = function (p5) {

// TODO compress this file
let beanNames = ["Red", "Blue", "Green", "Pink", "Orange", "Yellow", "Black", "White", "Purple", "Brown", "Cyan", "Lime"];
let beanColors = [
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
let beanShadows = [// Secondary bean colors. Simple p5.color interpolation between `beanColors` and black is not accurate
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


var jofferyFontData = {
  txtHeight: 34,
  txtSpacing: 4 //spacing between each char
};
jofferyFontData.characters = {
  //UPPER CASE {
  "A": function () {
    p5.beginShape();
    p5.vertex(6, 0);
    p5.bezierVertex(2, 15, 2, 17, 0, 27);
    p5.endShape();
    p5.beginShape();
    p5.vertex(6, 0);
    p5.bezierVertex(7, 13, 8, 10, 9, 27);
    p5.endShape();
    p5.line(2, 17, 7, 17);
    return 9;
  },
  "B": function () {
    p5.beginShape();
    p5.vertex(0, 0);
    p5.bezierVertex(4, -2, 8, 10, 0, 13);
    p5.bezierVertex(7, 14, 8, 26, 0, 27);
    p5.endShape();
    p5.line(0, 0, 0, 27);
    return 4;
  },
  "C": function () {
    p5.beginShape();
    p5.vertex(7, 1);
    p5.bezierVertex(0, -10, -3, 35, 6, 27);
    p5.endShape();
    return 7;
  },
  "D": function () {
    p5.beginShape();
    p5.vertex(0, 0);
    p5.vertex(0, 27);
    p5.bezierVertex(15, 13, 0, -6, 0, 1);
    p5.endShape();
    return 6;
  },
  "E": function () {
    p5.line(0, 0, 0, 27);
    p5.line(0, 0, 5, 0);
    p5.line(0, 27, 5, 27);
    p5.line(0, 13, 3, 13);
    return 5;
  },
  "F": function () {
    p5.line(0, 0, 5, 0);
    p5.line(0, 0, 0, 27);
    p5.line(0, 10, 3, 10);
    return 5;
  },
  "G": function () {
    p5.beginShape();
    p5.vertex(7, 0);
    p5.bezierVertex(-5, -1, 0, 38, 8, 24);
    p5.bezierVertex(9, 22, 8, 14, 8, 15);
    p5.vertex(5, 15);
    p5.endShape();
    return 8;
  },
  "H": function () {
    p5.line(0, 0, 0, 27);
    p5.line(7, 0, 7, 27);
    p5.line(0, 12, 7, 12);
    return 7;
  },
  "I": function () {
    p5.line(0, 0, 4, 0);
    p5.line(2, 0, 2, 27);
    p5.line(0, 27, 4, 27);
    return 4;
  },
  "J": function () {
    p5.line(3, 0, 9, 0);
    p5.beginShape();
    p5.vertex(0, 27);
    p5.bezierVertex(9, 30, 5, 6, 6, 0);
    p5.endShape();
    return 9;
  },
  "K": function () {
    p5.line(0, 0, 0, 27);
    p5.beginShape();
    p5.vertex(6, 0);
    p5.bezierVertex(6, 11, 4, 11, 0, 15);
    p5.bezierVertex(3, 17, 8, 17, 6, 27);
    p5.endShape();
    return 6;
  },
  "L": function () {
    p5.line(0, 0, 0, 27);
    p5.line(0, 27, 7, 27);
    return 7;
  },
  "M": function () {
    p5.beginShape();
    p5.vertex(0, 27);
    p5.vertex(0.6, 0);
    p5.vertex(4, 13);
    p5.vertex(9, 0);
    p5.vertex(9, 27);
    p5.endShape();
    return 9;
  },
  "N": function () {
    p5.beginShape();
    p5.vertex(0, 27);
    p5.vertex(0, 0);
    p5.vertex(8, 27);
    p5.vertex(8, 0);
    p5.endShape();
    return 8;
  },
  "O": function () {
    p5.beginShape();
    p5.vertex(0, 13);
    p5.bezierVertex(-1, -4, 9, -4, 8, 13);
    p5.bezierVertex(9, 27, 0, 37, 0, 13);
    p5.endShape();
    return 8;
  },
  "P": function () {
    p5.line(0, 0, 0, 27);
    p5.beginShape();
    p5.vertex(0, 0);
    p5.bezierVertex(10, 4, 5, 15, 0, 19);
    p5.endShape();
    return 5;
  },
  "Q": function () {
    p5.line(4, 23, 7, 31);
    p5.beginShape();
    p5.vertex(4, 0);
    p5.bezierVertex(0, -2, -1, 31, 4, 27);
    p5.bezierVertex(12, 21, 7, -2, 4, 0);
    p5.endShape();
    return 8;
  },
  "R": function () {
    p5.line(0, 0, 0, 27);
    p5.beginShape();
    p5.vertex(0, 0);
    p5.bezierVertex(9, -3, 5, 20, 0, 13);
    p5.bezierVertex(7, 21, 5, 20, 7, 27);
    p5.endShape();
    return 7;
  },
  "S": function () {
    p5.beginShape();
    p5.vertex(0, 27);
    p5.bezierVertex(8, 30, 6, 19, 4, 16);
    p5.bezierVertex(-7, -5, 9, 0, 6, 0);
    p5.endShape();
    return 6;
  },
  "T": function () {
    p5.line(1, 0, 7, 0);
    p5.line(4, 0, 4, 27);
    return 7;
  },
  "U": function () {
    p5.beginShape();
    p5.vertex(0, 0);
    p5.bezierVertex(-4, 42, 13, 32, 7, 0);
    p5.endShape();
    return 7;
  },
  "V": function () {
    p5.beginShape();
    p5.vertex(1, 0);
    p5.bezierVertex(3, 17, 2, 15, 5, 27);
    p5.bezierVertex(9, 5, 6, 16, 9, -1);
    p5.endShape();
    return 9;
  },
  "W": function () {
    p5.beginShape();
    p5.vertex(0, 0);
    p5.vertex(2, 27);
    p5.vertex(6, 13);
    p5.vertex(9, 27);
    p5.vertex(12, 0);
    p5.endShape();
    return 12;
  },
  "X": function () {
    p5.line(1, 0, 7, 27);
    p5.line(8, 0, -1, 27);
    return 7;
  },
  "Y": function () {
    p5.line(1, 0, 4, 14);
    p5.line(8, 0, 4, 14);
    p5.line(4, 14, 4, 27);
    return 8;
  },
  "Z": function () {
    p5.beginShape();
    p5.vertex(1, 0);
    p5.vertex(6, 0);
    p5.vertex(0, 27);
    p5.vertex(6, 27);
    p5.endShape();
    return 6;
  },
  //}
  //NUMBERS {
  "0": function () {
    p5.beginShape();
    p5.vertex(5, 0);
    p5.bezierVertex(3, -3, -4, 24, 5, 27);
    p5.bezierVertex(9, 27, 11, -3, 5, 0);
    p5.endShape();
    return 8;
  },
  "1": function () {
    p5.line(0, 4, 3, 0);
    p5.line(3, 0, 2, 27);
    p5.line(0, 27, 4, 27);
    return 4;
  },
  "2": function () {
    p5.beginShape();
    p5.vertex(0, 1);
    p5.bezierVertex(5, -2, 4, 9, 0, 27);
    p5.vertex(4, 27);
    p5.endShape();
    return 4;
  },
  "3": function () {
    p5.beginShape();
    p5.vertex(0, 0);
    p5.bezierVertex(8, 0, 0, 17, 0, 14);
    p5.bezierVertex(8, 23, 1, 25, 0, 27);
    p5.endShape();
    return 4;
  },
  "4": function () {
    p5.line(5, 0, 5, 27);
    p5.beginShape();
    p5.vertex(5, 0);
    p5.bezierVertex(3, 8, 2, 8, 0, 20);
    p5.bezierVertex(4, 21, 2, 19, 7, 20);
    p5.endShape();
    return 7;
  },
  "5": function () {
    p5.beginShape();
    p5.vertex(4, 0);
    p5.vertex(0, 0);
    p5.vertex(0, 15);
    p5.bezierVertex(6, 9, 7, 29, 0, 27);
    p5.endShape();
    return 4;
  },
  "6": function () {
    p5.beginShape();
    p5.vertex(6, 0);
    p5.bezierVertex(0, 1, 1, 9, 1, 13);
    p5.bezierVertex(0, 42, 14, 17, 1, 13);
    p5.endShape();
    return 6;
  },
  "7": function () {
    p5.beginShape();
    p5.vertex(0, 0);
    p5.bezierVertex(7, -1, 4, 3, 3, 27);
    p5.endShape();
    return 4;
  },
  "8": function () {
    p5.beginShape();
    p5.vertex(3, 0);
    p5.bezierVertex(-4, 7, 11, 26, 2, 27);
    p5.bezierVertex(-4, 19, 12, 1, 3, 0);
    p5.endShape();
    return 5;
  },
  "9": function () {
    p5.beginShape();
    p5.vertex(5, 27);
    p5.vertex(5.5, 0);
    p5.bezierVertex(-3, 0, 0, 22, 5, 10);
    p5.endShape();
    return 6;
  },
  //}
  //ETC {
  ".": function () {
    p5.ellipse(0, 28, 0.4, 0.4);
    return 0;
  },
  " ": function () {
    return jofferyFontData.txtSpacing;
  },
  ",": function () {
    p5.ellipse(0, 28, 1.0, 1.0);
    p5.beginShape();
    p5.vertex(0, 28);
    p5.bezierVertex(3, 27, 0, 33, -1, 33);
    p5.endShape();
    return 2;
  },
  ";": function () {
    p5.ellipse(1, 13, 1.0, 1.0);
    p5.ellipse(1, 23, 1.0, 1.0);
    p5.beginShape();
    p5.vertex(1, 23);
    p5.bezierVertex(4, 21, 1, 28, 0, 29);
    p5.endShape();
    return 3;
  },
  ":": function () {
    p5.ellipse(1, 13, 1.0, 1.0);
    p5.ellipse(1, 26, 1.0, 1.0);
    return 2;
  },
  "\'": function () {
    p5.ellipse(0, 1, 0.9, 0.9);
    p5.beginShape();
    p5.vertex(0, 1);
    p5.bezierVertex(1, 0, 2, 4, 0, 5);
    p5.endShape();
    return 0;
  },
  "!": function () {
    p5.line(0, 0, 0, 24);
    p5.ellipse(0, 28, 0.4, 0.4);
    return 0;
  },
  "\"": function () {
    //p5.LEFT
    p5.ellipse(0, 1, 0.9, 0.9);
    p5.beginShape();
    p5.vertex(0, 1);
    p5.bezierVertex(1, 0, 2, 4, 0, 5);
    p5.endShape();
    //right
    p5.ellipse(4, 1, 0.9, 0.9);
    p5.beginShape();
    p5.vertex(4, 1);
    p5.bezierVertex(5, 0, 6, 4, 4, 5);
    p5.endShape();
    return 6;
  },
  "/": function () {
    p5.line(0, 27, 11, 3);
    return 11;
  },
  "?": function () {
    p5.beginShape();
    p5.vertex(0, 2);
    p5.bezierVertex(5, -5, 15, 7, 1, 14);
    p5.vertex(1, 24);
    p5.endShape();
    p5.ellipse(1, 28, 0.4, 0.4);
    return 2;
  },
  "(": function () {
    p5.beginShape();
    p5.vertex(5, 0);
    p5.bezierVertex(-1, 12, -1, 19, 5, 29);
    p5.endShape();
    return 5;
  },
  ")": function () {
    p5.beginShape();
    p5.vertex(2, 0);
    p5.bezierVertex(7, 12, 7, 19, 2, 29);
    p5.endShape();
    return 5;
  },
  //}
};
var joffreyText = function (str, x, y, s, clr, boldness) {
  str = str.toUpperCase();
  p5.strokeJoin(p5.ROUND);
  var currX = 0;
  var currY = 0;
  //draw
  p5.push();
  p5.translate(x, y); //to pos
  //take care of p5.scale, siz, boldness, clr...
  p5.scale(s / 10); //Divide so that p5.scale makes sense...
  p5.stroke(clr);
  p5.noFill();
  p5.strokeWeight(boldness || 2);
  //go through the string
  for (var i = 0; i < str.length; i++) {
    p5.push();
    p5.translate(currX, currY); //p5.translate to the current character
    //if not \n (which is p5.line break)
    if (str[i] !== "\n") {
      //draw char, p5.translate by textW that char function returns plus p5.text spacing
      currX += jofferyFontData.characters[str[i]]() + jofferyFontData.txtSpacing;
    } else {
      //p5.line break
      currX = 0; //reset x
      currY += jofferyFontData.txtHeight; //add to y
    }
    p5.pop();
  }
  p5.pop();
  p5.strokeJoin(p5.MITER);
}

var pixelFontData = {
  txtHeight: 16, //two spaces plus p5.height of each, 14
  txtSpacing: 2 //spacing between each char
};
pixelFontData.characters = {
  //UPPER CASE {
  "A": [
    "    11    ",
    "   1111   ",
    "  111111  ",
    " 111  111 ",
    "111    111",
    "111    111",
    "11      11",
    "11      11",
    "11      11",
    "1111111111",
    "1111111111",
    "11      11",
    "11      11",
    "11      11",
  ],
  "B": [
    "11111111  ",
    "111111111 ",
    "11     111",
    "11      11",
    "11      11",
    "11     111",
    "111111111 ",
    "111111111 ",
    "11     111",
    "11      11",
    "11      11",
    "11     111",
    "111111111 ",
    "11111111  ",

  ],
  "C": [
    "  111111  ",
    " 11111111 ",
    "111    111",
    "11      11",
    "11        ",
    "11        ",
    "11        ",
    "11        ",
    "11        ",
    "11        ",
    "11      11",
    "111    111",
    " 11111111 ",
    "  111111  ",
  ],
  "D": [
    "11111111  ",
    "111111111 ",
    "11     111",
    "11      11",
    "11      11",
    "11      11",
    "11      11",
    "11      11",
    "11      11",
    "11      11",
    "11      11",
    "11     111",
    "111111111 ",
    "11111111  ",
  ],
  "E": [
    "1111111111",
    "1111111111",
    "11        ",
    "11        ",
    "11        ",
    "11        ",
    "1111111   ",
    "1111111   ",
    "11        ",
    "11        ",
    "11        ",
    "11        ",
    "1111111111",
    "1111111111",
  ],
  "F": [
    "1111111111",
    "1111111111",
    "11        ",
    "11        ",
    "11        ",
    "11        ",
    "1111111   ",
    "1111111   ",
    "11        ",
    "11        ",
    "11        ",
    "11        ",
    "11        ",
    "11        ",
  ],
  "G": [
    "  111111  ",
    " 11111111 ",
    "111    111",
    "11      11",
    "11        ",
    "11        ",
    "11   11111",
    "11   11111",
    "11      11",
    "11      11",
    "11      11",
    "111    111",
    " 11111111 ",
    "  111111  ",
  ],
  "H": [
    "11      11",
    "11      11",
    "11      11",
    "11      11",
    "11      11",
    "11      11",
    "1111111111",
    "1111111111",
    "11      11",
    "11      11",
    "11      11",
    "11      11",
    "11      11",
    "11      11",
  ],

  "I": [
    "111111",
    "111111",
    "  11  ",
    "  11  ",
    "  11  ",
    "  11  ",
    "  11  ",
    "  11  ",
    "  11  ",
    "  11  ",
    "  11  ",
    "  11  ",
    "111111",
    "111111",
  ],
  "J": [
    "    111111",
    "    111111",
    "      11  ",
    "      11  ",
    "      11  ",
    "      11  ",
    "      11  ",
    "      11  ",
    "      11  ",
    "      11  ",
    "11    11  ",
    "111  111  ",
    " 111111   ",
    "  1111    "
  ],
  "K": [
    "11      11",
    "11     111",
    "11    111 ",
    "11   111  ",
    "11  111   ",
    "11 111    ",
    "11111     ",
    "11111     ",
    "11 111    ",
    "11  111   ",
    "11   111  ",
    "11    111 ",
    "11     111",
    "11      11",
  ],
  "L": [
    "11        ",
    "11        ",
    "11        ",
    "11        ",
    "11        ",
    "11        ",
    "11        ",
    "11        ",
    "11        ",
    "11        ",
    "11        ",
    "11        ",
    "1111111111",
    "1111111111",
  ],
  "M": [
    "11      11",
    "11      11",
    "111    111",
    "1111  1111",
    "1111111111",
    "1111111111",
    "11 1111 11",
    "11  11  11",
    "11  11  11",
    "11      11",
    "11      11",
    "11      11",
    "11      11",
    "11      11",
  ],
  "N": [
    "11      11",
    "11      11",
    "11      11",
    "111     11",
    "1111    11",
    "11111   11",
    "11 111  11",
    "11  111 11",
    "11   11111",
    "11    1111",
    "11     111",
    "11      11",
    "11      11",
    "11      11",
  ],
  "O": [
    "  111111  ",
    " 11111111 ",
    "111    111",
    "11      11",
    "11      11",
    "11      11",
    "11      11",
    "11      11",
    "11      11",
    "11      11",
    "11      11",
    "111    111",
    " 11111111 ",
    "  111111  ",
  ],
  "P": [
    "11111111  ",
    "111111111 ",
    "11     111",
    "11      11",
    "11      11",
    "11     111",
    "111111111 ",
    "11111111  ",
    "11        ",
    "11        ",
    "11        ",
    "11        ",
    "11        ",
    "11        "
  ],
  "Q": [
    "  111111  ",
    " 11111111 ",
    "111    111",
    "11      11",
    "11      11",
    "11      11",
    "11      11",
    "11      11",
    "11  11  11",
    "11  111 11",
    "11   11111",
    "111   111 ",
    " 111111111",
    "  1111  11"
  ],
  "R": [
    "11111111  ",
    "111111111 ",
    "11     111",
    "11      11",
    "11      11",
    "11     111",
    "111111111 ",
    "11111111  ",
    "11 111    ",
    "11  111   ",
    "11   111  ",
    "11    111 ",
    "11     111",
    "11      11"
  ],
  "S": [
    "  111111  ",
    " 11111111 ",
    "111    111",
    "11      11",
    "11        ",
    "111       ",
    " 1111111  ",
    "  1111111 ",
    "       111",
    "        11",
    "11      11",
    "111    111",
    " 11111111 ",
    "  111111  "
  ],
  "T": [
    "1111111111",
    "1111111111",
    "    11    ",
    "    11    ",
    "    11    ",
    "    11    ",
    "    11    ",
    "    11    ",
    "    11    ",
    "    11    ",
    "    11    ",
    "    11    ",
    "    11    ",
    "    11    ",
  ],
  "U": [
    "11      11",
    "11      11",
    "11      11",
    "11      11",
    "11      11",
    "11      11",
    "11      11",
    "11      11",
    "11      11",
    "11      11",
    "11      11",
    "111    111",
    " 11111111 ",
    "  111111  ",
  ],
  "V": [
    "11      11",
    "11      11",
    "11      11",
    "11      11",
    "11      11",
    "11      11",
    "11      11",
    "11      11",
    "11      11",
    "111    111",
    " 111  111 ",
    "  111111  ",
    "   1111   ",
    "    11    "
  ],
  "W": [
    "11      11",
    "11      11",
    "11      11",
    "11      11",
    "11      11",
    "11      11",
    "11  11  11",
    "11  11  11",
    "11  11  11",
    "11  11  11",
    "11  11  11",
    "1111111111",
    " 11111111 ",
    "  11  11  ",
  ],
  "X": [
    "11      11",
    "11      11",
    "11      11",
    "111    111",
    " 111  111 ",
    "  111111  ",
    "   1111   ",
    "   1111   ",
    "  111111  ",
    " 111  111 ",
    "111    111",
    "11      11",
    "11      11",
    "11      11",
  ],
  "Y": [
    "11      11",
    "11      11",
    "11      11",
    "11      11",
    "11      11",
    "111    111",
    " 111  111 ",
    "  111111  ",
    "   1111   ",
    "    11    ",
    "    11    ",
    "    11    ",
    "    11    ",
    "    11    "
  ],
  "Z": [
    "1111111111",
    "1111111111",
    "        11",
    "       111",
    "      111 ",
    "     111  ",
    "    111   ",
    "   111    ",
    "  111     ",
    " 111      ",
    "111       ",
    "11        ",
    "1111111111",
    "1111111111",
  ],
  //}
  //LOWER CASE {
  "a": [
    "          ",
    "          ",
    "  111111  ",
    "  1111111 ",
    "       111",
    "        11",
    "  11111 11",
    " 111111111",
    "111    111",
    "11      11",
    "11      11",
    "111    111",
    " 111111111",
    "  11111 11"
  ],
  "b": [
    "11        ",
    "11        ",
    "11        ",
    "11  111   ",
    "11 11111  ",
    "11111 111 ",
    "1111   111",
    "111     11",
    "111     11",
    "111     11",
    "1111   111",
    "11111 111 ",
    "11 11111  ",
    "11  111   ",
  ],
  "c": [
    "          ",
    "          ",
    "          ",
    "  111111  ",
    " 11111111 ",
    "111    111",
    "11      11",
    "11        ",
    "11        ",
    "11        ",
    "11      11",
    "111    111",
    " 11111111 ",
    "  111111  ",
  ],
  "d": [
    "        11",
    "        11",
    "        11",
    "   111  11",
    "  11111 11",
    " 111 11111",
    "111   1111",
    "11     111",
    "11     111",
    "11     111",
    "111   1111",
    " 111 11111",
    "  11111 11",
    "   111  11",
  ],
  "e": [
    "          ",
    "          ",
    "          ",
    "  111111  ",
    " 11111111 ",
    "111    111",
    "11      11",
    "1111111111",
    "111111111 ",
    "11        ",
    "11        ",
    "111    111",
    " 11111111 ",
    "  111111  "

  ],
  "f": [
    "    1111",
    "   11111",
    "   11   ",
    "11111111",
    "11111111",
    "   11   ",
    "   11   ",
    "   11   ",
    "   11   ",
    "   11   ",
    "   11   ",
    "   11   ",
    "   11   ",
    "   11   ",
  ],
  "g": [
    "          ",
    "          ",
    "  111111  ",
    " 11111111 ",
    "111    111",
    "11      11",
    "111    111",
    " 111111111",
    "  11111 11",
    "        11",
    "        11",
    " 11    111",
    " 11111111 ",
    "  111111  "

  ],
  "h": [
    "11        ",
    "11        ",
    "11        ",
    "11  111   ",
    "11 11111  ",
    "11111 111 ",
    "1111   111",
    "111     11",
    "11      11",
    "11      11",
    "11      11",
    "11      11",
    "11      11",
    "11      11",
  ],
  "i": [
    "      ",
    "  11  ",
    "  11  ",
    "      ",
    "      ",
    "1111  ",
    "1111  ",
    "  11  ",
    "  11  ",
    "  11  ",
    "  11  ",
    "  111 ",
    "   111",
    "    11"
  ],
  "j": [
    "    11",
    "    11",
    "      ",
    "      ",
    "  1111",
    "  1111",
    "    11",
    "    11",
    "    11",
    "    11",
    "    11",
    "   111",
    "11111 ",
    "1111  ",
  ],
  "k": [
    "          ",
    "11        ",
    "11        ",
    "11      11",
    "11     111",
    "11    111 ",
    "11   111  ",
    "11  111   ",
    "11 111    ",
    "1111111   ",
    "1111 111  ",
    "111   111 ",
    "11     111",
    "11      11"
  ],
  "l": [
    "11",
    "11",
    "11",
    "11",
    "11",
    "11",
    "11",
    "11",
    "11",
    "11",
    "11",
    "11",
    "11",
    "11",
  ],
  "m": [
    "          ",
    "          ",
    "          ",
    "          ",
    "11 11111  ",
    "111111111 ",
    "111 11 111",
    "11  11  11",
    "11  11  11",
    "11  11  11",
    "11  11  11",
    "11  11  11",
    "11  11  11",
    "11  11  11",
  ],
  "n": [
    "          ",
    "          ",
    "          ",
    "          ",
    "11 11111  ",
    "111111111 ",
    "111    111",
    "11      11",
    "11      11",
    "11      11",
    "11      11",
    "11      11",
    "11      11",
    "11      11",

  ],
  "o": [
    "          ",
    "          ",
    "          ",
    "          ",
    "  111111  ",
    " 11111111 ",
    "111    111",
    "11      11",
    "11      11",
    "11      11",
    "11      11",
    "111    111",
    " 11111111 ",
    "  111111  ",
  ],
  "p": [
    "          ",
    "          ",
    "          ",
    "11 11111  ",
    "111111111 ",
    "1111   111",
    "111     11",
    "111     11",
    "111     11",
    "1111   111",
    "111111111 ",
    "11 11111  ",
    "11        ",
    "11        ",
  ],
  "q": [
    "          ",
    "          ",
    "          ",
    "  11111 11",
    " 111111111",
    "111   1111",
    "11     111",
    "11     111",
    "11     111",
    "111   1111",
    " 111111111",
    "  11111 11",
    "        11",
    "        11",

  ],
  "r": [
    "          ",
    "          ",
    "          ",
    "          ",
    "11  1111  ",
    "11 111111 ",
    "11111  111",
    "1111    11",
    "111       ",
    "11        ",
    "11        ",
    "11        ",
    "11        ",
    "11        ",
  ],
  "s": [
    "          ",
    "          ",
    "          ",
    "  111111  ",
    " 11111111 ",
    "111    111",
    "111     11",
    " 11111    ",
    "   11111  ",
    "     1111 ",
    "11     111",
    "111    111",
    " 11111111 ",
    "  111111  "
  ],
  "t": [
    "      ",
    "  11  ",
    "  11  ",
    "111111",
    "111111",
    "  11  ",
    "  11  ",
    "  11  ",
    "  11  ",
    "  11  ",
    "  11  ",
    "  111 ",
    "   111",
    "    11",

  ],
  "u": [
    "          ",
    "          ",
    "          ",
    "11      11",
    "11      11",
    "11      11",
    "11      11",
    "11      11",
    "11      11",
    "11      11",
    "11      11",
    "111    111",
    " 11111111 ",
    "  111111  "
  ],
  "v": [
    "          ",
    "          ",
    "          ",
    "11      11",
    "11      11",
    "11      11",
    "11      11",
    "11      11",
    "11      11",
    "111    111",
    " 111  111 ",
    "  111111  ",
    "   1111   ",
    "    11    ",
  ],
  "w": [
    "          ",
    "          ",
    "          ",
    "11      11",
    "11      11",
    "11      11",
    "11  11  11",
    "11  11  11",
    "11  11  11",
    "11  11  11",
    "11  11  11",
    "111 11 111",
    " 11111111 ",
    "  11  11  ",
  ],
  "x": [
    "          ",
    "          ",
    "          ",
    "11      11",
    "111    111",
    " 111  111 ",
    "  111111  ",
    "   1111   ",
    "    11    ",
    "   1111   ",
    "  111111  ",
    " 111  111 ",
    "111    111",
    "11      11",
  ],
  "y": [
    "          ",
    "          ",
    "11      11",
    "11      11",
    "11     111",
    "11     111",
    "11    1111",
    "111  11111",
    " 111111 11",
    "  1111  11",
    "        11",
    "       111",
    "  1111111 ",
    "  111111  ",
  ],
  "z": [
    "          ",
    "          ",
    "          ",
    "1111111111",
    "1111111111",
    "       111",
    "      111 ",
    "     111  ",
    "    111   ",
    "   111    ",
    "  111     ",
    " 111      ",
    "1111111111",
    "1111111111",
  ],
  //}
  //NUMBERS {
  "0": [
    "  111111  ",
    " 11111111 ",
    "111    111",
    "11      11",
    "11    1111",
    "11   11111",
    "11  111 11",
    "11 111  11",
    "11111   11",
    "1111    11",
    "11      11",
    "111    111",
    " 11111111 ",
    "  111111  "
  ],
  "1": [
    "  11  ",
    " 111  ",
    "1111  ",
    "1111  ",
    "  11  ",
    "  11  ",
    "  11  ",
    "  11  ",
    "  11  ",
    "  11  ",
    "  11  ",
    "  11  ",
    "111111",
    "111111",
  ],
  "2": [
    "  111111  ",
    " 11111111 ",
    "111    111",
    "11      11",
    "        11",
    "       111",
    "  1111111 ",
    " 1111111  ",
    "111       ",
    "11        ",
    "11        ",
    "11        ",
    "1111111111",
    "1111111111"
  ],
  "3": [
    "  111111  ",
    " 11111111 ",
    "111    111",
    "11      11",
    "        11",
    "       111",
    "    11111 ",
    "    11111 ",
    "       111",
    "        11",
    "11      11",
    "111    111",
    " 11111111 ",
    "  111111  ",
  ],
  "4": [
    "      11  ",
    "     111  ",
    "    1111  ",
    "   11111  ",
    "  111 11  ",
    " 111  11  ",
    "111   11  ",
    "11    11  ",
    "1111111111",
    "1111111111",
    "      11  ",
    "      11  ",
    "      11  ",
    "      11  ",
  ],
  "5": [
    "1111111111",
    "1111111111",
    "11        ",
    "11        ",
    "11111111  ",
    "111111111 ",
    "       111",
    "        11",
    "        11",
    "        11",
    "11      11",
    "111    111",
    " 11111111 ",
    "  111111  "
  ],
  "6": [
    "  111111  ",
    " 11111111 ",
    "111    111",
    "11      11",
    "11        ",
    "11        ",
    "11111111  ",
    "111111111 ",
    "11     111",
    "11      11",
    "11      11",
    "111    111",
    " 11111111 ",
    "  111111  "
  ],
  "7": [
    "1111111111",
    "1111111111",
    "        11",
    "        11",
    "       111",
    "      111 ",
    "     111  ",
    "    111   ",
    "   111    ",
    "   11     ",
    "   11     ",
    "   11     ",
    "   11     ",
    "   11     ",
  ],
  "8": [
    "  111111  ",
    " 11111111 ",
    "111    111",
    "11      11",
    "11      11",
    "111    111",
    " 11111111 ",
    " 11111111 ",
    "111    111",
    "11      11",
    "11      11",
    "111    111",
    " 11111111 ",
    "  111111  "
  ],
  "9": [
    "  111111  ",
    " 11111111 ",
    "111    111",
    "11      11",
    "11      11",
    "111     11",
    " 111111111",
    "  11111111",
    "        11",
    "        11",
    "11      11",
    "111    111",
    " 11111111 ",
    "  111111  "
  ],
  //}
  //ETC {
  ".": [
    "  ",
    "  ",
    "  ",
    "  ",
    "  ",
    "  ",
    "  ",
    "  ",
    "  ",
    "  ",
    "  ",
    "  ",
    "11",
    "11"
  ],
  ",": [
    "    ",
    "    ",
    "    ",
    "    ",
    "    ",
    "    ",
    "    ",
    "    ",
    "    ",
    "    ",
    "  11",
    "  11",
    " 11 ",
    "11  ",
  ],
  ";": [
    "    ",
    "    ",
    "  11",
    "  11",
    "    ",
    "    ",
    "    ",
    "    ",
    "    ",
    "    ",
    "  11",
    "  11",
    " 11 ",
    "11  ",
  ],
  ":": [
    "  ",
    "  ",
    "11",
    "11",
    "  ",
    "  ",
    "  ",
    "  ",
    "  ",
    "  ",
    "11",
    "11",
    "  ",
    "  "
  ],
  "$": [
    "    11    ",
    "  111111  ",
    " 11111111 ",
    "111 11 111",
    "11  11  11",
    "111 11    ",
    " 1111111  ",
    "  1111111 ",
    "    11 111",
    "11  11  11",
    "111 11 111",
    " 11111111 ",
    "  111111  ",
    "    11    "
  ],
  "#": [
    "      11  ",
    "  11  11  ",
    "  11  1111",
    "  11111111",
    "11111111  ",
    "1111  11  ",
    "  11  11  ",
    "  11  1111",
    "  11111111",
    "11111111  ",
    "1111  11  ",
    "  11  11  ",
    "  11      ",
    "          "
  ],
  "\'": [
    "111",
    "111",
    "111",
    " 1 ",
    "   ",
    "   ",
    "   ",
    "   ",
    "   ",
    "   ",
    "   ",
    "   ",
    "   ",
    "   ",
  ],
  "!": [
    "11",
    "11",
    "11",
    "11",
    "11",
    "11",
    "11",
    "11",
    "11",
    "11",
    "  ",
    "  ",
    "11",
    "11",
  ],
  "\"": [
    "111  111",
    "111  111",
    "111  111",
    " 1    1 ",
    "        ",
    "        ",
    "        ",
    "        ",
    "        ",
    "        ",
    "        ",
    "        ",
    "        ",
    "        ",
  ],
  "/": [
    "        11",
    "        11",
    "        11",
    "       111",
    "      111 ",
    "     111  ",
    "    111   ",
    "   111    ",
    "  111     ",
    " 111      ",
    "111       ",
    "11        ",
    "11        ",
    "11        "
  ],
  "?": [
    "  111111  ",
    " 11111111 ",
    "111    111",
    "11      11",
    "        11",
    "       111",
    "      111 ",
    "     111  ",
    "    111   ",
    "    11    ",
    "          ",
    "          ",
    "    11    ",
    "    11    "
  ],
  "%": [
    " 111    11",
    "11111   11",
    "11 11   11",
    "11 11  111",
    "11111 111 ",
    " 111 111  ",
    "    111   ",
    "   111    ",
    "  111 111 ",
    " 111 11111",
    "111  11 11",
    "11   11 11",
    "11   11111",
    "11    111 "
  ],
  "&": [
    "   111    ",
    "  11111   ",
    " 11   11  ",
    " 11   11  ",
    " 11   11  ",
    "  11 11   ",
    "  11111   ",
    "111111    ",
    "11  111 11",
    "11   11111",
    "11    111 ",
    "111   111 ",
    " 111111111",
    "  11111 11"
  ],
  "(": [
    "   11",
    "  11 ",
    " 11  ",
    "11   ",
    "11   ",
    "11   ",
    "11   ",
    "11   ",
    "11   ",
    "11   ",
    "11   ",
    " 11  ",
    "  11 ",
    "   11",
  ],
  ")": [
    "11   ",
    " 11  ",
    "  11 ",
    "   11",
    "   11",
    "   11",
    "   11",
    "   11",
    "   11",
    "   11",
    "   11",
    "  11 ",
    " 11  ",
    "11   ",
  ],
  "@": [
    "          ",
    "  111111  ",
    " 11    11 ",
    "11      11",
    "1  11 1  1",
    "1 11 11  1",
    "1 11 11  1",
    "1 11 11  1",
    "1 11 11 11",
    "1  111 11 ",
    "11        ",
    " 11    11 ",
    "  111111  ",
    "          ",
  ],
  //}  
  " ": [
    "   ",
    "   ",
    "   ",
    "   ",
    "   ",
    "   ",
    "   ",
    "   ",
    "   ",
    "   ",
    "   ",
    "   ",
    "   ",
    "   ",
  ],
};
pixelFontData.getBitmap = function (char) {
  return pixelFontData.characters[char];
};
var pixelText = function (str, x, y, s, clr, boldness, clr2) {
  var currX = 0;
  var currY = 0;
  var currClr = clr;
  //draw
  p5.push();
  p5.translate(x, y); //to pos
  //take care of p5.scale, siz, boldness, clr...
  p5.scale(s);
  if (boldness) {
    p5.strokeWeight(boldness);
    p5.stroke(clr);
  } else {
    p5.noStroke();
  }
  //go through the string
  for (var i = 0; i < str.length; i++) {
    p5.push();
    p5.translate(currX, currY); //p5.translate to the current character
    p5.fill(currClr);
    //if not \n (which is p5.line break)
    if (str[i] !== "\n" && str[i] !== "\\") {
      var charArr = pixelFontData.getBitmap(str[i]); //p5.get the array for the character
      //p5.loop through rows
      for (var row = 0; row < charArr.length; row++) {
        //p5.loop through cols
        for (var col = 0; col < charArr[0].length; col++) {
          //if there is a one at that space, draw a pixel
          if (charArr[row][col] === '1') {
            p5.rect(col, row, 1, 1);
          }
        }
      }
      //p5.translate the number of cols plus space
      currX += charArr[0].length + pixelFontData.txtSpacing;
    } else {
      //special things in the string
      switch (str[i]) {
        case "\n":
          //p5.line break
          currX = 0; //reset x
          currY += pixelFontData.txtHeight; //add to y
          break;
        case "\\":
          //highlight / using the second clr
          if (currClr === clr) {
            currClr = clr2;
          } else {
            currClr = clr;
          }
          break;
      }
    }
    p5.pop();
  }
  p5.pop();
}
var gradientPixTxt = function (str, x, y, txtSize, gradClrFrom, gradClrTo, boldness) {

  var h = pixelFontData.txtHeight * txtSize; //find p5.height of str

  //also add more p5.height if there are p5.line breaks
  //check if there are p5.line breaks
  if (str.indexOf("\n") !== -1) {
    //p5.loop through, find all p5.line breaks, and add to p5.height
    for (var i = 0; i < str.length; i++) {
      if (str[i] === "\n") {
        h += pixelFontData.txtHeight * txtSize;
      }
    }
  }

  //p5.width = spaces between * number of chars plus p5.width of chars themselves
  //most chars are 10 pxs wide, okay if the p5.width is a little off, add extra just in case
  var w = pixelFontData.txtSpacing * str.length + txtSize * str.length * 11;

  var currX = 0, currY = 0; //what char we are at right now

  //white pixel txt mask
  var txtMsk = (function () {
    var msk = p5.createGraphics(w, h, p5.P2D);
    msk.background(0);
    //draw the text
    msk.push();
    msk.scale(txtSize);
    msk.fill(255);
    if (boldness) {
      msk.strokeWeight(boldness);
      msk.stroke(255);
    } else {
      msk.noStroke();
    }
    for (var i = 0; i < str.length; i++) {
      msk.push();
      msk.translate(currX, currY); //to curr char pos
      //as long as the char is not indicating a line break
      if (str[i] !== "\n") {
        var charArr = pixelFontData.getBitmap(str[i]); //get the array for the character
        //loop through rows
        for (var row = 0; row < charArr.length; row++) {
          //loop through cols
          for (var col = 0; col < charArr[0].length; col++) {
            //if there is a one at that space, draw a pixel
            if (charArr[row][col] === '1') {
              msk.rect(col, row, 1, 1);
            }
          }
        }
        //translate the number of cols plus space
        currX += charArr[0].length + pixelFontData.txtSpacing;
      } else {
        //back to x = 0, increment y  for line break
        currX = 0;
        currY += pixelFontData.txtHeight;
      }
      msk.pop();
    }
    msk.pop();
    return msk.get(); //capture the image
  })();

  //gradient img
  var gradTxt = (function () {
    //draw a simple gradient using 2 clrs passed in
    var grad = p5.createGraphics(w, h, p5.P2D);
    grad.strokeWeight(1);
    for (var i = 0; i < h; i++) {
      grad.stroke(lerpColor(gradClrFrom, gradClrTo, i / h));
      grad.line(0, i, w, i);
    }
    return grad.p5.get(); //capture the img and return
  })();

  gradTxt.mask(txtMsk); //mask gradient with the white pixel text

  p5.image(gradTxt, x, y); //draw the image

}

  /** Player code **/
  var drawCharacter = function (x, y, size, facingLeft, col, cycle) {
    var col1, col2;
    if (typeof col === "number") {
      col1 = beanColors[col];
      col2 = beanShadows[col];
    } else {
      col1 = col;
      col2 = p5.lerpColor(p5.color(0, 0, 0), col, 0.6);
    }
    cycle = cycle || 0;
    p5.rectMode(p5.CORNER);
    p5.push();
    p5.translate(x - 200 * size, y - 200 * size);
    p5.scale(size);
    if (facingLeft) {
      p5.scale(-1, 1);
      p5.translate(-400, 0);
    }

    p5.noStroke();
    if (cycle === 0) {
      p5.fill(0, 0, 0);
      p5.ellipse(203, 173, 39, 26);
      p5.rect(181, 166, 45, 57, 13);
      p5.rect(170, 181, 14, 43, 10);
      p5.rect(182, 211, 21, 27, 10);
      p5.rect(206, 211, 18, 24, 10);

      p5.fill(col1);
      p5.rect(174, 186, 7, 33, 63);
      p5.rect(177, 186, 4, 33);
      p5.rect(187, 165, 31, 34, 63);
      p5.rect(190, 180, 32, 34, 63);
      p5.rect(188, 175, 32, 34, 63);

      p5.fill(col2);
      p5.rect(174, 192, 7, 27, 55);
      p5.rect(177, 192, 4, 27);
      p5.rect(185, 210, 14, 24, 63);
      p5.rect(210, 221, 10, 11, 23);
      p5.triangle(192, 221, 186, 179, 185, 221);
      p5.triangle(201, 219, 187, 198, 185, 221);
      p5.triangle(220, 219, 222, 202, 208, 219);
      p5.rect(189, 212, 27, 7);
      p5.triangle(220, 216, 220, 228, 210, 215);

      p5.fill(0, 0, 0);
      p5.rect(194, 173, 36, 22, 63);

      p5.fill(75, 100, 110);
      p5.rect(198, 176, 29, 16, 63);

      p5.fill(150, 200, 220);
      p5.rect(201, 176, 24, 10, 63);

      p5.fill(255, 255, 255);
      p5.rect(207, 176, 15, 7, 63);

    } else if (cycle === 1) {
      p5.fill(0, 0, 0);
      p5.ellipse(203, 173, 39, 26);
      p5.rect(181, 166, 45, 57, 13);
      p5.rect(170, 181, 14, 43, 10);

      p5.fill(col1);
      p5.rect(174, 186, 7, 33, 63);
      p5.rect(177, 186, 4, 33);
      p5.rect(187, 165, 31, 34, 63);
      p5.rect(190, 180, 32, 34, 63);
      p5.rect(188, 175, 32, 34, 63);

      p5.fill(col2);
      p5.rect(174, 192, 7, 27, 55);
      p5.rect(177, 192, 4, 27);

      p5.push();
      p5.translate(176, 210);
      p5.rotate(p5.radians(26));
      p5.fill(0, 0, 0);
      p5.rect(17, -3, 10, 15, 28);
      p5.rect(0, 0, 26, 15, 28);

      p5.translate(3, 1);
      p5.fill(col2);
      p5.rect(0, 0, 20, 10, 28);
      p5.rect(10, -5, 10, 10, 28);
      p5.pop();

      p5.push();
      p5.translate(216, 209);
      p5.rotate(p5.radians(44));

      p5.fill(0, 0, 0);
      p5.rect(0, -3, 29, 18, 23);

      p5.fill(col2);
      p5.rect(0, 0, 26, 11, 23);
      p5.pop();

      p5.triangle(192, 221, 186, 179, 185, 221);
      p5.triangle(201, 219, 187, 198, 185, 221);
      p5.triangle(220, 219, 222, 202, 208, 219);
      p5.rect(189, 212, 27, 7);
      p5.triangle(220, 216, 220, 228, 210, 215);

      p5.fill(0, 0, 0);
      p5.rect(194, 173, 36, 22, 63);

      p5.fill(75, 100, 110);
      p5.rect(198, 176, 29, 16, 63);

      p5.fill(150, 200, 220);
      p5.rect(201, 176, 24, 10, 63);

      p5.fill(255, 255, 255);
      p5.rect(207, 176, 15, 7, 63);
    } else if (cycle === 2) {
      p5.fill(0, 0, 0);
      p5.ellipse(203, 173, 39, 26);
      p5.rect(181, 166, 45, 57, 13);
      p5.rect(170, 181, 14, 43, 10);

      p5.fill(col1);
      p5.rect(174, 186, 7, 33, 63);
      p5.rect(177, 186, 4, 33);
      p5.rect(187, 165, 31, 34, 63);
      p5.rect(190, 180, 32, 34, 63);
      p5.rect(188, 175, 32, 34, 63);

      p5.fill(col2);
      p5.rect(174, 192, 7, 27, 55);
      p5.rect(177, 192, 4, 27);

      p5.push();
      p5.translate(214, 213);
      p5.rotate(p5.radians(81));

      p5.fill(0, 0, 0);
      p5.rect(0, -3, 26, 20, 23);

      p5.fill(col2);
      p5.rect(0, 0, 23, 13, 23);
      p5.pop();

      p5.push();
      p5.translate(174, 224);
      p5.rotate(p5.radians(-10));
      p5.fill(0, 0, 0);
      p5.rect(0, -2, 31, 16, 28);

      p5.translate(3, 1);
      p5.fill(col2);
      p5.rect(0, 0, 25, 10, 28);
      p5.rect(15, -3, 10, 5, 28);
      p5.pop();

      p5.triangle(192, 221, 186, 179, 185, 221);
      p5.triangle(201, 219, 187, 198, 185, 221);
      p5.triangle(220, 219, 222, 202, 208, 219);
      p5.rect(189, 212, 27, 7);

      p5.fill(0, 0, 0);
      p5.rect(194, 173, 36, 22, 63);

      p5.fill(75, 100, 110);
      p5.rect(198, 176, 29, 16, 63);

      p5.fill(150, 200, 220);
      p5.rect(201, 176, 24, 10, 63);

      p5.fill(255, 255, 255);
      p5.rect(207, 176, 15, 7, 63);
    } else if (cycle === 3) {
      p5.fill(0, 0, 0);
      p5.ellipse(203, 173, 39, 26);
      p5.rect(181, 166, 45, 57, 13);
      p5.rect(170, 181, 14, 43, 10);

      p5.fill(col1);
      p5.rect(174, 186, 7, 33, 63);
      p5.rect(177, 186, 4, 33);
      p5.rect(187, 165, 31, 34, 63);
      p5.rect(190, 180, 32, 34, 63);
      p5.rect(188, 175, 32, 34, 63);

      p5.fill(col2);
      p5.rect(174, 192, 7, 27, 55);
      p5.rect(177, 192, 4, 27);
      p5.triangle(192, 221, 186, 179, 185, 221);
      p5.triangle(201, 219, 187, 198, 185, 221);
      p5.triangle(220, 219, 222, 202, 208, 219);
      p5.rect(189, 212, 27, 7);

      p5.push();
      p5.translate(213, 214);
      p5.rotate(p5.radians(90));

      p5.fill(0, 0, 0);
      p5.rect(0, -1, 28, 18, 6);

      p5.fill(col2);
      p5.rect(-2, 2, 27, 12, 4);
      p5.pop();

      p5.push();
      p5.translate(212, 214);
      p5.rotate(p5.radians(90));

      p5.fill(0, 0, 0);
      p5.rect(0, -4, 17, 32, 23);

      p5.fill(col2);
      p5.rect(-2, 0, 16, 24, 6);
      p5.pop();

      p5.fill(0, 0, 0);
      p5.rect(194, 173, 36, 22, 63);

      p5.fill(75, 100, 110);
      p5.rect(198, 176, 29, 16, 63);

      p5.fill(150, 200, 220);
      p5.rect(201, 176, 24, 10, 63);

      p5.fill(255, 255, 255);
      p5.rect(207, 176, 15, 7, 63);
    }


    p5.pop();
    p5.rectMode(p5.CENTER);
    p5.noStroke();
  };

  var drawCharacterBody = function (x, y, s, col, step) {
    /** Author: Superelectronic12@Superelectronic **/

    p5.rectMode(p5.CORNER);
    p5.push();
    s *= 0.02;
    p5.translate(x - 200 * s, y - 200 * s);
    p5.scale(s);
    p5.noStroke();

    if (step >= 1 && step < 30) {
      p5.fill(0, 0, 0);
      p5.rect(181, 198, 43, 27, 13);
      p5.rect(170, 200, 14, 24, 10);
      p5.rect(182, 211, 21, 27, 10);
      p5.rect(206, 211, 18, 24, 10);
      p5.fill(0);
      p5.ellipse(201, 203, 40, 22);
      p5.fill(p5.lerpColor(p5.color(0, 0, 0), col, 0.6));
      p5.ellipse(202, 202, 35, 16);
      p5.fill(p5.lerpColor(p5.color(0, 0, 0), col, 0.2));
      p5.ellipse(202, 202, 30, 12);
      p5.fill(p5.lerpColor(p5.color(0, 0, 0), col, 0.6));
      p5.rect(173, 203, 8, 18, 55);
      p5.rect(185, 212, 14, 24, 63);
      p5.rect(210, 221, 10, 11, 23);
      p5.triangle(195, 218, 185, 207, 185, 231);
      p5.triangle(201, 219, 187, 220, 185, 221);
      p5.triangle(220, 230, 221, 206, 208, 219);
      p5.rect(189, 212, 27, 9);
      p5.triangle(220, 216, 220, 228, 210, 215);
      p5.fill(110);
      p5.ellipse(200, 195, 7, 7);
      p5.ellipse(206, 195, 7, 7);
      p5.rect(200.5, 195, 5, 10);
      p5.fill(220);
      p5.ellipse(200, 195, 5, 5);
      p5.ellipse(206, 195, 5, 5);
      p5.rect(201.5, 195, 3, 10);
      p5.ellipse(203, 196, 6, 4);
      p5.fill(p5.lerpColor(p5.color(0, 0, 0), col, 0.2));
      p5.ellipse(203, 206, 10, 4);
    }
    if (step >= 1 && step < 2) {
      p5.fill(220, 0, 0);
      p5.ellipse(196, 196, 31, 9);
      p5.ellipse(191, 199, 32, 9);
    }
    if (step >= 2 && step < 3) {
      p5.fill(220, 0, 0);
      p5.ellipse(193, 196, 31, 9);
      p5.ellipse(188, 199, 32, 9);
    }
    if (step >= 3 && step < 4) {
      p5.fill(220, 0, 0);
      p5.ellipse(192, 195, 28, 9);
      p5.ellipse(187, 198, 28, 9);
    }
    if (step >= 4 && step < 5) {
      p5.fill(220, 0, 0);
      p5.ellipse(190, 195, 25, 8);
      p5.ellipse(185, 198, 25, 8);
    }
    if (step >= 5 && step < 6) {
      p5.fill(220, 0, 0);
      p5.ellipse(185, 192, 25, 8);
      p5.ellipse(180, 195, 25, 8);
    }
    if (step >= 6 && step < 7) {
      p5.fill(220, 0, 0);
      p5.ellipse(178, 190, 25, 6);
      p5.ellipse(173, 194, 20, 6);
    }
    if (step >= 7 && step < 8) {
      p5.fill(220, 0, 0);
      p5.ellipse(172, 188, 20, 6);
      p5.ellipse(170, 192, 16, 6);
    }
    if (step >= 8 && step < 9) {
      p5.fill(220, 0, 0);
      p5.ellipse(167, 188, 15, 5);
      p5.ellipse(167, 192, 12, 6);
    }
    if (step >= 9 && step < 10) {
      p5.fill(220, 0, 0);
      p5.ellipse(162, 189, 11, 3);
      p5.ellipse(165, 193, 9, 4);
    }
    if (step >= 10 && step < 11) {
      p5.fill(220, 0, 0);
      p5.ellipse(160, 189, 7, 2);
      p5.ellipse(160, 194, 5, 2);
    }

    if (step >= 30 && step < 33) {
      p5.fill(0, 0, 0);
      p5.push();
      p5.rect(181, 198, 43, 27, 13);
      p5.rect(170, 200, 14, 16, 10);
      p5.rect(182, 211, 21, 27, 10);
      p5.rect(206, 211, 18, 24, 10);
      p5.fill(0);
      p5.ellipse(201, 210, 40, 22);
      p5.fill(p5.lerpColor(p5.color(0, 0, 0), col, 0.6));
      p5.ellipse(202, 209, 35, 16);
      p5.fill(p5.lerpColor(p5.color(0, 0, 0), col, 0.2));
      p5.ellipse(202, 209, 30, 12);
      p5.fill(p5.lerpColor(p5.color(0, 0, 0), col, 0.6));
      p5.rect(173, 203, 8, 10, 55);
      p5.rect(185, 219, 14, 16, 63);
      p5.rect(210, 221, 10, 11, 23);
      p5.triangle(195, 218, 185, 215, 185, 231);
      p5.triangle(201, 219, 187, 220, 185, 221);
      p5.triangle(220, 230, 221, 213, 208, 219);
      p5.rect(189, 218, 27, 5);
      p5.triangle(220, 225, 220, 226, 210, 215);
      p5.push();
      p5.translate(0, 47);
      p5.scale(1, 0.8);
      p5.fill(110);
      p5.ellipse(200, 195, 7, 7);
      p5.ellipse(206, 195, 7, 7);
      p5.rect(200.5, 195, 5, 10);
      p5.fill(220);
      p5.ellipse(200, 195, 5, 5);
      p5.ellipse(206, 195, 5, 5);
      p5.rect(201.5, 195, 3, 10);
      p5.ellipse(203, 196, 6, 4);
      p5.fill(p5.lerpColor(p5.color(0, 0, 0), col, 0.2));
      p5.ellipse(203, 206, 10, 4);
      p5.pop();
      p5.pop();
    }

    if (step >= 33 && step < 36) {
      p5.fill(0, 0, 0);
      p5.push();
      p5.rect(181, 198, 43, 27, 13);
      p5.fill(p5.lerpColor(p5.color(0, 0, 0), col, 0.5));
      p5.rect(185, 200, 36, 24, 13);
      p5.fill(0);
      p5.ellipse(201, 215, 40, 22);
      p5.fill(p5.lerpColor(p5.color(0, 0, 0), col, 0.6));
      p5.ellipse(202, 214, 35, 16);
      p5.fill(p5.lerpColor(p5.color(0, 0, 0), col, 0.2));
      p5.ellipse(202, 214, 30, 12);
      p5.fill(0);
      p5.rect(180, 195, 18, 12, 10);
      p5.fill(p5.lerpColor(p5.color(0, 0, 0), col, 0.6));
      p5.rect(182, 197, 14, 8, 55);
      p5.push();
      p5.translate(0, 376);
      p5.scale(1, -0.8);
      p5.fill(110);
      p5.ellipse(200, 195, 7, 7);
      p5.ellipse(206, 195, 7, 7);
      p5.rect(200.5, 195, 5, 10);
      p5.fill(220);
      p5.ellipse(200, 195, 5, 5);
      p5.ellipse(206, 195, 5, 5);
      p5.rect(201.5, 195, 3, 10);
      p5.ellipse(203, 196, 6, 4);
      p5.fill(p5.lerpColor(p5.color(0, 0, 0), col, 0.2));
      p5.ellipse(203, 206, 10, 4);
      p5.pop();
      p5.pop();
    }

    if (step >= 36) {
      p5.fill(0, 0, 0);
      p5.push();
      p5.rect(181, 198, 43, 27, 13);
      p5.fill(p5.lerpColor(p5.color(0, 0, 0), col, 0.5));
      p5.rect(185, 200, 36, 24, 13);
      p5.fill(0);
      p5.ellipse(201, 219, 40, 27);
      p5.fill(p5.lerpColor(p5.color(0, 0, 0), col, 0.6));
      p5.ellipse(202, 219, 35, 21);
      p5.fill(p5.lerpColor(p5.color(0, 0, 0), col, 0.2));
      p5.ellipse(202, 219, 30, 17);
      p5.push();
      p5.fill(0);
      p5.rect(185, 195, 28, 12, 10);
      p5.ellipse(189, 204, 14, 14);
      p5.fill(p5.lerpColor(p5.color(0, 0, 0), col, 0.6));
      p5.rect(187, 197, 24, 8, 55);
      p5.ellipse(189, 204, 10, 10);
      p5.pop();
      p5.push();
      p5.translate(-67, 438);
      p5.scale(1.2, -1.2);
      p5.rotate(p5.radians(-6));
      p5.fill(110);
      p5.ellipse(200, 195, 7, 7);
      p5.ellipse(206, 195, 7, 7);
      p5.rect(200.5, 195, 5, 10);
      p5.fill(220);
      p5.ellipse(200, 195, 5, 5);
      p5.ellipse(206, 195, 5, 5);
      p5.rect(201.5, 195, 3, 10);
      p5.ellipse(203, 196, 6, 4);
      p5.fill(p5.lerpColor(p5.color(0, 0, 0), col, 0.2));
      p5.ellipse(203, 206, 10, 4);
      p5.pop();
      p5.pop();
    }
    p5.pop();
  };

var drawEngine = function (img, x, y, s) {
  /** Created By: |-VEXCESS-| **/
  img.push();
  img.translate(x, y);
  img.scale(s / 325);
  img.translate(-9, -21);

  //main body
  img.stroke(0, 0, 0);
  img.strokeWeight(2);
  img.rectMode(p5.CORNER);
  img.fill(155, 100, 90);
  img.rect(10, 57, 267, 193);

  img.fill(0, 0, 0);
  img.rect(280, 60, 15, 10);

  img.noStroke();
  img.fill(0, 0, 0);
  img.ellipse(273, 153, 105, 194);
  img.fill(155, 100, 90);
  img.ellipse(271, 153, 105, 193);

  img.fill(205, 165, 155);
  img.rect(64, 79, 195, 14);

  img.noFill();
  img.strokeCap(p5.SQUARE);
  img.strokeWeight(6);
  img.stroke(0, 0, 0);
  img.arc(267, 153, 12, 190, 90, 270);
  img.strokeWeight(4);
  img.stroke(40, 200, 200);
  img.arc(267, 153, 12, 190, 90, 270);
  img.stroke(171, 255, 255);
  img.arc(267, 153, 12, 190, 133, 245);

  img.strokeWeight(1.5);
  img.stroke(0, 0, 0);
  img.arc(275, 153, 12, 190, 90, 270);

  //shadow under bottom rail
  img.noStroke();
  img.fill(0, 0, 0, 70);
  img.rect(90, 213, 185, 36);
  img.arc(275, 213, 71, 71, 0, 90);

  //the box
  img.stroke(35, 55, 55);
  img.strokeWeight(2);
  img.fill(125, 155, 150);
  img.rect(11, 170, 78, 23);
  img.fill(90, 120, 120);
  img.rect(11, 193, 78, 22);
  img.fill(70, 96, 90);
  img.rect(11, 215, 78, 85);
  img.fill(90, 125, 120);
  img.quad(90, 193, 90, 145, 106, 157, 107, 203);
  img.fill(90, 130, 130);
  img.triangle(90, 193, 90, 216, 107, 203);
  img.fill(70, 90, 90);
  img.quad(90, 216, 90, 300, 106, 286, 107, 203);

  //stuff on the box
  img.noFill();
  img.stroke(80, 105, 100);
  img.rect(13, 205, 24, 8);
  img.rect(44, 195, 13, 18);
  img.stroke(40, 50, 50);
  img.rect(63, 205, 22, 8, 2);

  img.stroke(90, 60, 55);
  img.line(75, 211, 76, 261);
  img.line(63, 263, 76, 261);

  img.stroke(25, 90, 30);
  img.line(69, 209, 72, 208);
  img.line(69, 209, 69, 266);
  img.line(63, 267, 69, 266);

  img.stroke(45, 60, 90);
  img.line(78, 208, 81, 212);
  img.line(82, 231, 81, 212);
  img.bezier(82, 230, 80, 235, 95, 261, 62, 258);

  img.fill(130, 150, 150);
  img.stroke(0, 0, 0);
  img.strokeWeight(3);
  img.beginShape();
  img.vertex(19, 239);
  img.vertex(57, 239);
  img.vertex(63, 280);
  img.vertex(26, 280);
  img.vertex(19, 276);
  img.vertex(19, 239);
  img.endShape(p5.CLOSE);
  img.noFill();
  img.strokeWeight(2);
  img.stroke(50, 60, 60);
  img.line(20, 238, 24, 280);
  img.arc(55, 259, 10, 30, 90, 250);
  img.noStroke();
  img.fill(10, 20, 10);
  img.quad(24, 244, 27, 275, 48, 275, 44, 244);
  img.fill(0, 130, 0);
  img.ellipse(29, 254, 3, 3);
  img.ellipse(34, 254, 3, 3);
  img.ellipse(39, 254, 3, 3);
  img.ellipse(30, 259, 3, 3);
  img.ellipse(35, 259, 3, 3);
  img.ellipse(31, 264, 3, 3);
  img.ellipse(36, 264, 3, 3);
  img.ellipse(41, 264, 3, 3);
  img.fill(10, 20, 10);
  img.stroke(125, 125, 125);
  img.ellipse(40, 260, 7, 5);
  img.ellipse(49, 260, 5, 5);

  //outer clamp things
  img.strokeWeight(2);
  img.stroke(55, 35, 35);
  img.fill(120, 70, 70);
  img.beginShape();
  img.curveVertex(265, 81);
  img.curveVertex(266, 80);
  img.curveVertex(282, 83);
  img.curveVertex(292, 91);
  img.curveVertex(291, 98);
  img.curveVertex(278, 95);
  img.curveVertex(247, 98);
  img.curveVertex(241, 93);
  img.curveVertex(246, 84);
  img.curveVertex(264, 80);
  img.endShape(p5.CLOSE);

  img.beginShape();
  img.curveVertex(255, 193);
  img.curveVertex(256, 194);
  img.curveVertex(273, 193);
  img.curveVertex(289, 188);
  img.curveVertex(294, 191);
  img.curveVertex(278, 209);
  img.curveVertex(255, 213);
  img.curveVertex(242, 207);
  img.curveVertex(245, 196);
  img.curveVertex(255, 194);
  img.endShape(p5.CLOSE);

  //inner clamp things
  img.noStroke();
  img.fill(155, 100, 90);
  img.beginShape();
  img.curveVertex(265, 82);
  img.curveVertex(266, 82);
  img.curveVertex(282, 85);
  img.curveVertex(292, 93);
  img.curveVertex(289, 94);
  img.curveVertex(278, 90);
  img.curveVertex(253, 92);
  img.curveVertex(248, 85);
  img.curveVertex(264, 82);
  img.endShape(p5.CLOSE);

  img.beginShape();
  img.curveVertex(255, 195);
  img.curveVertex(256, 196);
  img.curveVertex(273, 195);
  img.curveVertex(289, 190);
  img.curveVertex(292, 191);
  img.curveVertex(278, 200);
  img.curveVertex(255, 205);
  img.curveVertex(247, 202);
  img.curveVertex(248, 197);
  img.curveVertex(255, 196);
  img.endShape(p5.CLOSE);

  //rail outline1
  img.noFill();
  img.stroke(60, 45, 30);
  img.strokeWeight(8);
  img.line(296, 65, 325, 65);
  img.arc(320, 74, 18, 18, -90, 0);
  img.line(329, 70, 329, 254);

  //rails1
  img.stroke(185, 135, 70);
  img.strokeWeight(3);
  img.line(296, 65, 325, 65);
  img.arc(320, 74, 18, 18, -90, 0);
  img.line(329, 70, 329, 254);

  //satellite dish on box
  img.stroke(0, 0, 0);
  img.fill(0, 0, 0);
  img.beginShape();
  img.curveVertex(98, 283);
  img.curveVertex(100, 284);
  img.curveVertex(93, 273);
  img.curveVertex(95, 255);
  img.curveVertex(100, 246);
  img.curveVertex(113, 250);
  img.curveVertex(117, 255);
  img.curveVertex(122, 267);
  img.curveVertex(120, 278);
  img.curveVertex(100, 284);
  img.endShape(p5.CLOSE);
  img.strokeWeight(6);
  img.line(105, 264, 127, 247);
  img.line(112, 272, 127, 247);
  img.strokeWeight(2);
  img.fill(60, 70, 70);
  img.ellipse(130, 244, 7, 7);
  img.fill(35, 40, 50);
  img.ellipse(107, 262, 10, 31);
  img.fill(45, 50, 55);
  img.beginShape();
  img.curveVertex(98, 283);
  img.curveVertex(98, 283);
  img.curveVertex(94, 273);
  img.curveVertex(94, 255);
  img.curveVertex(100, 246);
  img.curveVertex(112, 250);
  img.curveVertex(106, 255);
  img.curveVertex(105, 264);
  img.curveVertex(112, 279);
  img.curveVertex(100, 284);
  img.endShape(p5.CLOSE);
  img.fill(145, 145, 145);
  img.beginShape();
  img.vertex(105, 230);
  img.vertex(117, 224);
  img.vertex(125, 247);
  img.vertex(119, 253);
  img.vertex(112, 249);
  img.vertex(106, 231);
  img.endShape(p5.CLOSE);
  img.fill(33, 33, 33);
  img.stroke(184, 0, 0);
  img.beginShape();
  img.vertex(110, 232);
  img.vertex(115, 230);
  img.vertex(121, 245);
  img.vertex(116, 248);
  img.endShape(p5.CLOSE);
  img.stroke(65, 70, 85);
  img.line(102, 257, 105, 273);
  img.line(102, 257, 107, 249);
  img.line(102, 257, 96, 257);
  img.line(99, 267, 98, 257);
  img.line(102, 251, 98, 257);
  img.line(98, 252, 96, 257);

  //engine front light
  img.strokeWeight(2);
  img.stroke(15, 95, 140);
  img.fill(20, 215, 215);
  img.ellipse(321, 158, 12, 66);
  img.noStroke();
  img.fill(230, 255, 255);
  img.ellipse(322, 146, 7, 35);

  //other lights
  img.strokeWeight(2);
  img.stroke(15, 95, 140);
  img.fill(20, 215, 215);
  img.beginShape();
  img.vertex(289, 71);
  img.vertex(296, 78);
  img.vertex(304, 91);
  img.vertex(311, 113);
  img.vertex(297, 89);
  img.vertex(281, 68);
  img.endShape(p5.CLOSE);

  img.beginShape();
  img.vertex(277, 101);
  img.vertex(288, 104);
  img.vertex(296, 108);
  img.vertex(304, 115);
  img.vertex(311, 127);
  img.vertex(300, 119);
  img.vertex(287, 112);
  img.vertex(277, 109);
  img.endShape(p5.CLOSE);

  img.beginShape();
  img.vertex(276, 138);
  img.vertex(291, 138);
  img.vertex(304, 140);
  img.vertex(308, 142);
  img.vertex(308, 144);
  img.vertex(298, 147);
  img.vertex(276, 147);
  img.endShape(p5.CLOSE);

  img.beginShape();
  img.vertex(277, 176);
  img.vertex(291, 171);
  img.vertex(304, 165);
  img.vertex(312, 163);
  img.vertex(312, 166);
  img.vertex(305, 172);
  img.vertex(288, 182);
  img.vertex(281, 183);
  img.vertex(278, 182);
  img.vertex(276, 179);
  img.endShape(p5.CLOSE);

  img.beginShape();
  img.vertex(285, 223);
  img.vertex(291, 218);
  img.vertex(301, 208);
  img.vertex(313, 192);
  img.vertex(315, 192);
  img.vertex(313, 199);
  img.vertex(301, 223);
  img.vertex(289, 234);
  img.vertex(286, 236);
  img.vertex(283, 232);
  img.endShape(p5.CLOSE);

  img.noStroke();
  img.fill(230, 255, 255);
  img.beginShape();
  img.vertex(289, 73);
  img.vertex(296, 80);
  img.vertex(304, 93);
  img.vertex(311, 111);
  img.vertex(297, 84);
  img.vertex(282, 68);
  img.endShape(p5.CLOSE);

  img.beginShape();
  img.vertex(277, 104);
  img.vertex(288, 107);
  img.vertex(296, 111);
  img.vertex(304, 118);
  img.vertex(311, 127);
  img.vertex(300, 117);
  img.vertex(289, 111);
  img.vertex(279, 108);
  img.endShape(p5.CLOSE);

  img.beginShape();
  img.vertex(277, 141);
  img.vertex(291, 142);
  img.vertex(304, 143);
  img.vertex(308, 143);
  img.vertex(308, 142);
  img.vertex(298, 145);
  img.vertex(277, 146);
  img.endShape(p5.CLOSE);

  img.beginShape();
  img.vertex(277, 177);
  img.vertex(291, 172);
  img.vertex(304, 166);
  img.vertex(312, 164);
  img.vertex(311, 166);
  img.vertex(305, 169);
  img.vertex(288, 179);
  img.vertex(281, 180);
  img.vertex(279, 176);
  img.vertex(277, 179);
  img.endShape(p5.CLOSE);

  img.beginShape();
  img.vertex(285, 225);
  img.vertex(291, 219);
  img.vertex(301, 209);
  img.vertex(313, 193);
  img.vertex(314, 191);
  img.vertex(313, 194);
  img.vertex(301, 217);
  img.vertex(289, 229);
  img.vertex(287, 230);
  img.vertex(284, 230);
  img.endShape(p5.CLOSE);

  //rail outline 2
  img.noFill();
  img.stroke(60, 45, 30);
  img.strokeWeight(8);
  img.line(107, 221, 329, 221);
  for (var i = 0; i < 6; i++) {
    img.line(142 + i * 32.2, 222, 142 + i * 32.2, 254);
  }

  //rails 2
  img.stroke(185, 135, 70);
  img.strokeWeight(3);
  img.line(107, 221, 329, 221);
  for (var i = 0; i < 6; i++) {
    img.line(142 + i * 32.2, 222, 142 + i * 32.2, 254);
  }

  //grate/vent thing
  img.stroke(50, 45, 40);
  img.strokeWeight(2);
  img.fill(85, 105, 95);
  img.arc(106, 110, 8, 69, 100, 260);
  img.line(106, 75, 193, 75);
  img.line(106, 144, 193, 144);

  img.noStroke();
  img.fill(85, 105, 95);
  img.arc(190, 110, 8, 69, 93, 260);
  img.fill(60, 80, 85);
  img.rect(105, 76, 88, 10, 4);
  img.fill(40, 60, 60);
  img.rect(105, 84, 88, 2);
  img.fill(125, 120, 90);
  img.rect(105, 85, 81, 44);
  img.fill(161, 159, 138);
  img.rect(105, 93, 81, 8);
  img.fill(90, 85, 65);
  img.rect(105, 129, 81, 14);

  img.strokeWeight(2);
  img.noFill();
  img.stroke(50, 45, 40);
  img.arc(194, 110, 8, 69, 100, 260);
  img.stroke(70, 55, 40);
  for (var i = 0; i < 7; i++) {
    img.arc(128 + i * 8.5, 110, 8, 69, 112, 225);
  }

  for (var i = 0; i < 5; i++) {
    img.noStroke();
    img.fill(40, 60, 50);
    img.rect(105 - p5.sin(i * 40) * 3, 81 + i * 12.5, 13, 2);
    img.fill(110, 125, 110);
    img.rect(105 - p5.sin(i * 40) * 3, 83 + i * 12.5, 11, 2);
    img.fill(85, 105, 95);
    img.rect(105 - p5.sin(i * 40) * 2, 85 + i * 12, 11, 10);

    img.stroke(15, 95, 140);
    img.fill(230, 255, 255);
    img.ellipse(115 - p5.sin(i * 40) * 2, 88 + i * 12.5, 4, 9);

    img.push();
    img.translate(295, 0);
    img.scale(-1, 1);

    img.noStroke();
    img.fill(40, 60, 50);
    img.rect(104 + p5.sin(i * 40) * 3, 81 + i * 12.5, 13, 2);
    img.fill(110, 125, 110);
    img.rect(105 + p5.sin(i * 40) * 3, 83 + i * 12.5, 11, 2);
    img.fill(85, 105, 95);
    img.rect(105 + p5.sin(i * 40) * 2, 85 + i * 12, 11, 10);

    img.stroke(15, 95, 140);
    img.fill(230, 255, 255);
    img.ellipse(115 + p5.sin(i * 40) * 2, 88 + i * 12.5, 4, 9);
    img.pop();
  }

  //pipe on top of body
  img.noStroke();
  img.fill(30, 30, 30);
  img.rect(81, 54, 150, 18, 10);
  img.rect(81, 59, 150, 13, 1);
  img.rect(81, 49, 30, 18, 10);
  img.fill(90, 80, 70);
  img.rect(83, 56, 146, 10, 10);
  img.rect(83, 50, 26, 20, 10);
  img.fill(70, 60, 50);
  img.rect(83, 64, 146, 6, 1);
  img.rect(108, 60, 2, 7, 2);
  img.rect(128, 58, 2, 9, 2);
  img.rect(159, 58, 2, 9, 2);
  img.rect(197, 60, 2, 9, 2);
  img.fill(30, 30, 30);
  img.rect(99, 54, 10, 2, 2);

  //backbase
  img.strokeWeight(2);
  img.stroke(40, 25, 20);
  img.fill(85, 45, 45);
  img.beginShape();
  img.vertex(11, 22);
  img.vertex(38, 24);
  img.vertex(48, 36);
  img.vertex(63, 47);
  img.vertex(70, 58);
  img.vertex(69, 72);
  img.vertex(66, 86);
  img.vertex(65, 103);
  img.vertex(68, 132);
  img.vertex(66, 170);
  img.vertex(10, 170);
  img.vertex(11, 73);
  img.endShape(p5.CLOSE);
  img.fill(100, 50, 50);
  img.beginShape();
  img.vertex(11, 22);
  img.vertex(38, 24);
  img.vertex(48, 36);
  img.vertex(57, 45);
  img.vertex(54, 58);
  img.vertex(49, 72);
  img.vertex(53, 86);
  img.vertex(42, 103);
  img.vertex(59, 132);
  img.vertex(56, 170);
  img.vertex(10, 170);
  img.vertex(11, 73);
  img.endShape(p5.CLOSE);
  img.noStroke();
  img.fill(115, 70, 70);
  img.rect(10, 65, 40, 59, 10);
  img.fill(85, 45, 45);
  img.stroke(40, 25, 20);
  img.arc(64, 100, 30, 142, 105, 235);

  img.stroke(30, 30, 30);
  img.fill(70, 60, 50);
  img.beginShape();
  img.vertex(11, 23);
  img.vertex(31, 22);
  img.curveVertex(46, 37);
  img.vertex(49, 71);
  img.vertex(30, 73);
  img.vertex(12, 68);
  img.vertex(10, 29);
  img.vertex(13, 22);
  img.vertex(29, 22);
  img.endShape(p5.CLOSE);
  img.noStroke();
  img.fill(90, 80, 70);
  img.beginShape();
  img.vertex(10, 24);
  img.vertex(30, 22);
  img.curveVertex(45, 37);
  img.vertex(49, 68);
  img.vertex(39, 71);
  img.vertex(34, 51);
  img.vertex(15, 34);
  img.vertex(23, 42);
  img.vertex(15, 35);
  img.vertex(14, 30);
  img.vertex(15, 23);
  img.vertex(29, 23);
  img.endShape(p5.CLOSE);
  img.strokeWeight(2);
  img.stroke(70, 60, 50);
  img.line(33, 23, 19, 56);
  img.line(48, 44, 27, 66);

  //pipe on base
  img.stroke(45, 40, 40);
  img.fill(70, 80, 80);
  img.beginShape();
  img.vertex(11, 62);
  img.vertex(23, 62);
  img.vertex(29, 64);
  img.vertex(36, 67);
  img.vertex(38, 72);
  img.vertex(36, 78);
  img.vertex(30, 80);
  img.vertex(11, 78);
  img.endShape(p5.CLOSE);
  img.noStroke();
  img.fill(100, 115, 110);
  img.beginShape();
  img.vertex(11, 63);
  img.vertex(23, 63);
  img.vertex(29, 65);
  img.vertex(36, 68);
  img.vertex(37, 72);
  img.vertex(36, 75);
  img.vertex(30, 75);
  img.vertex(21, 71);
  img.vertex(11, 70);
  img.endShape(p5.CLOSE);
  img.stroke(70, 80, 80);
  img.line(21, 63, 17, 72);
  img.line(35, 67, 30, 77);

  //pipe from back panel to box 2 (grey)
  img.noStroke();
  img.fill(50, 50, 50);
  img.rect(54, 110, 33, 30, 15);
  img.rect(65, 113, 25, 65, 25);
  img.fill(70, 80, 80);
  img.rect(56, 112, 29, 26, 15);
  img.rect(67, 114, 21, 62, 25);
  img.fill(100, 110, 110);
  img.beginShape();
  img.vertex(64, 113);
  img.vertex(74, 113);
  img.vertex(81, 115);
  img.vertex(87, 122);
  img.vertex(87, 128);
  img.vertex(87, 168);
  img.vertex(81, 171);
  img.vertex(75, 170);
  img.vertex(74, 169);
  img.vertex(73, 152);
  img.vertex(74, 137);
  img.vertex(75, 130);
  img.vertex(71, 126);
  img.vertex(65, 126);
  img.vertex(62, 122);
  img.vertex(62, 116);
  img.endShape(p5.CLOSE);
  img.noFill();
  img.stroke(70, 80, 80);
  img.line(69, 165, 80, 165);
  img.arc(77, 153, 27, 15, -120, -60);
  img.arc(78, 149, 27, 15, -120, -50);
  img.line(74, 135, 86, 122);
  img.line(68, 133, 74, 118);

  //pipe from base to box
  img.noStroke();
  img.fill(55, 35, 30);
  img.rect(15, 117, 23, 63, 60);
  img.rect(15, 164, 56, 19, 60);
  img.rect(47, 170, 25, 19, 7);
  img.fill(70, 60, 50);
  img.rect(17, 119, 19, 59, 60);
  img.rect(17, 166, 52, 15, 60);
  img.rect(49, 170, 21, 17, 7);
  img.fill(90, 80, 70);
  img.rect(22, 119, 13, 51, 60);
  img.rect(22, 166, 46, 5, 60);
  img.rect(54, 169, 15, 14, 3);
  img.noFill();
  img.stroke(70, 60, 50);
  img.line(18, 139, 29, 138);
  img.arc(28, 149, 20, 15, 50, 130);
  img.arc(61, 181, 27, 15, -130, -50);

  //pipe on main body
  img.noStroke();
  img.fill(35, 20, 15);
  img.rect(107, 189, 50, 24);
  img.rect(107, 189, 115, 24, 85);
  img.fill(70, 60, 50);
  img.rect(107, 191, 50, 20);
  img.rect(107, 191, 113, 20, 85);
  img.fill(90, 80, 70);
  img.rect(107, 199, 50, 12);
  img.rect(107, 198, 112, 13, 85);
  img.noFill();
  img.stroke(70, 60, 50);
  img.arc(140, 201, 10, 26, -11, 51);
  img.arc(152, 201, 35, 26, -10, 20);
  img.arc(188, 201, 20, 26, -13, 51);

  //pipe of body grey
  img.stroke(50, 50, 50);
  img.fill(65, 75, 75);
  img.beginShape();
  img.curveVertex(109, 180);
  img.curveVertex(139, 184);
  img.curveVertex(168, 181);
  img.curveVertex(172, 168);
  img.curveVertex(183, 164);
  img.curveVertex(196, 164);
  img.curveVertex(237, 165);
  img.curveVertex(242, 169);
  img.curveVertex(241, 172);
  img.curveVertex(232, 173);
  img.curveVertex(194, 173);
  img.curveVertex(186, 174);
  img.curveVertex(181, 180);
  img.curveVertex(176, 189);
  img.curveVertex(146, 193);
  img.curveVertex(111, 195);
  img.curveVertex(107, 188);
  img.curveVertex(110, 185);
  img.curveVertex(140, 184);
  img.endShape(p5.CLOSE);
  img.noStroke();
  img.fill(105, 115, 115);
  img.beginShape();
  img.curveVertex(109, 181);
  img.curveVertex(139, 185);
  img.curveVertex(168, 182);
  img.curveVertex(172, 169);
  img.curveVertex(183, 165);
  img.curveVertex(196, 165);
  img.curveVertex(237, 166);
  img.curveVertex(241, 169);
  img.curveVertex(240, 169);
  img.curveVertex(232, 169);
  img.curveVertex(194, 169);
  img.curveVertex(186, 169);
  img.curveVertex(175, 171);
  img.curveVertex(171, 186);
  img.curveVertex(146, 189);
  img.curveVertex(112, 191);
  img.curveVertex(108, 189);
  img.curveVertex(111, 186);
  img.curveVertex(140, 185);
  img.endShape(p5.CLOSE);
  img.stroke(65, 75, 75);
  img.line(114, 186, 114, 194);
  img.line(137, 186, 138, 193);
  img.line(198, 166, 197, 172);
  img.line(230, 165, 230, 168);
  img.pop();
};//By |-VEXCESS-|

var EngineFloor = function (img, x, y, s, trueOrFalse) {
  /**Author ꘘລԺల ລຟລɎ ッ@FadeAway Edited by The Coding Legend**/
  img.push();
  img.translate(x, y);
  img.scale(s);
  //squares
  for (var i = 0; i < 231; i += 41) {
    for (var f = 0; f < 217; f += 41) {
      img.strokeWeight(2);
      img.stroke(82, 73, 67);
      img.fill(93, 89, 84);
      img.rectMode (p5.CENTER);
      img.rect(x + i, y + f, 40, 40);
      img.noStroke();
      img.fill(80, 77, 69);
      img.rect(x + 11 + i, y + 0 + f, 3, 12);
      img.rect(x + -12 + i, y + 0 + f, 3, 12);
    }

  }
  //takes hides of the squares
  img.noStroke();
  img.fill(0, 0, 0);
  if (trueOrFalse) {
    img.triangle(x + -75, y + 113, x + -16, y + -16, x + 54, y + -17);
  } else {
    img.triangle(-5, 205, 45, 205, -5, 170);
  }
  img.pop();
};//By ꘘລԺల ລຟລɎ ッ


var imgSource = {
  init: function (x, y, s) {
    return p5.get(0, 0, 1, 1);
  },

  cafeteria_room: function (x, y, s) {

    var caffloor = function (img, s) {
      /** Author: Daniel T & Prisha **/
      var msk = p5.createGraphics(img.width, img.height, p5.P2D); // change #1 - moved inside
      msk.background(0);
      msk.fill(255);
      // outline of shape
      msk.push();
      msk.scale(s * 1.5, s * 1.45);
      msk.translate(5, -45);
      msk.fill(255);
      msk.stroke(0);
      msk.strokeWeight(1);
      msk.beginShape();
      msk.vertex(35, 46);
      msk.vertex(169, 45);
      msk.vertex(229, 105);
      msk.vertex(229, 138);
      msk.vertex(230, 139);
      msk.vertex(230, 140);
      msk.vertex(232, 141);
      msk.vertex(232, 162);
      msk.vertex(230, 162);
      msk.vertex(230, 211);
      msk.vertex(176, 266);
      msk.vertex(48, 266);
      msk.vertex(-5, 214);
      msk.vertex(-5, 163);
      msk.vertex(-8, 163);
      msk.vertex(-8, 141);
      msk.vertex(-6, 141);
      msk.vertex(-6, 139);
      msk.vertex(-5, 138);
      msk.vertex(-5, 87);
      msk.endShape(p5.CLOSE);
      msk.pop();

      //And do the same thing for the texture...
      //change #3 woops! Forgot to tell you that you have to create another image, sorry!!
      //So you're basically creating another image whose mask will be msk
      img.push();
      img.scale(1.47);
      img.noStroke();
      img.fill(224, 217, 208);
      img.rect(0, 0, 300, 300); // main floor color

      for (var i = -10; i < 200; i += 50) {
        for (var j = 0; j < 200; j += 50) {
          img.strokeWeight(1);
          img.stroke(201, 192, 181);
          img.line(i + 10, j + 80, i + 90, j);
          img.line(i + 90, j + 80, i + 10, j);
        }
      } // lines

      for (var i = -75; i < 250; i += 50) {
        for (var j = -75; j < 300; j += 50) {
          img.push();
          img.translate(i, j);
          img.scale(0.8);
          img.noStroke();
          img.fill(201, 192, 181);
          img.quad(20, 0, 0, 20, 20, 40, 40, 20);
          img.pop();
        }
      } // big squares 1
      for (var i = -100; i < 250; i += 50) {
        for (var j = -50; j < 300; j += 50) {
          img.push();
          img.translate(i, j);
          img.scale(0.8);
          img.noStroke();
          img.fill(201, 192, 181);
          img.quad(20, 0, 0, 20, 20, 40, 40, 20);
          img.pop();
        }
      } // big squares 2
      for (var i = -94; i < 250; i += 50) {
        for (var j = -70; j < 300; j += 50) {
          img.push();
          img.translate(i, j);
          img.scale(0.5);
          img.noStroke();
          img.fill(201, 192, 181);
          img.quad(20, 0, 0, 20, 20, 40, 40, 20);
          img.pop();
        }
      } // little squares 1
      for (var i = -119; i < 250; i += 50) {
        for (var j = -94; j < 300; j += 50) {
          img.push();
          img.translate(i, j);
          img.scale(0.5);
          img.noStroke();
          img.fill(201, 192, 181);
          img.quad(20, 0, 0, 20, 20, 40, 40, 20);
          img.pop();
        }
      } // little squares 2
      img.pop();
      
      return msk.get(); //change #2 - remember that p5.get() returns an image

    };
    var drawTable = function (img, x, y, s) {
      /**Author: |-VEXCESS-|**/
      img.push();
      img.translate(x + 2, y + 9);
      img.scale(s / 100);
      img.translate(-250, -240);

      img.noStroke();
      img.fill(0, 0, 0, 75);
      img.ellipse(250, 241, 247, 155);
 
      img.noFill();
      img.strokeCap(p5.SQUARE);
      img.stroke(0, 0, 0, 75);
      img.strokeWeight(27);
      img.arc(278, 239, 296, 176, p5.radians(190), p5.radians(250));
      img.arc(131, 237, 469, 202, p5.radians(-51), p5.radians(-9));
      img.strokeWeight(32);
      img.arc(106, 243, 508, 223, p5.radians(-1), p5.radians(47));
      img.arc(298, 247, 328, 179, p5.radians(118), p5.radians(183));

      img.stroke(20, 40, 50);
      img.strokeWeight(20);
      img.arc(278, 232, 296, 176, p5.radians(189), p5.radians(251));
      img.arc(131, 230, 469, 202, p5.radians(-52), p5.radians(-8));
      img.strokeWeight(26);
      img.arc(109, 238, 508, 223, p5.radians(-2), p5.radians(48));
      img.arc(295, 241, 328, 179, p5.radians(117), p5.radians(184));

      img.stroke(65, 120, 160);
      img.strokeWeight(17);
      img.arc(278, 232, 296, 176, p5.radians(190), p5.radians(250));
      img.arc(131, 230, 469, 202, p5.radians(-51), p5.radians(-9));
      img.strokeWeight(22);
      img.arc(109, 238, 508, 223, p5.radians(-1), p5.radians(47));
      img.arc(295, 241, 328, 179, p5.radians(118), p5.radians(183));

      img.strokeWeight(2.5);
      img.stroke(20, 40, 50);
      img.fill(70, 70, 60);
      img.ellipse(247, 226, 195, 149);

      img.fill(65, 120, 160);
      img.ellipse(247, 222, 195, 139);
      img.pop();
    };
    var computer = function (img, x, y, s) {
      /**Author: Wyatt-Matthews(#RavenclawFTW) Edited by The Coding Legend**/
      img.push();
      img.translate(x, y);
      img.scale(s);
      img.strokeCap(p5.PROJECT);
      img.strokeWeight(5);
      img.stroke(0);
      img.fill(161, 180, 196);
      img.quad(-7, -40, 44, -44, 54, 6, 2, 9);
      img.quad(38, 37, 89, 33, 54, 6, 1, 9);
      img.stroke(107, 130, 123);
      img.fill(79, 255, 79);
      img.quad(3, -32, 37, -34, 43, -2, 9, 0);
      img.noStroke();
      img.fill(184, 255, 171);
      img.ellipse(12, -25, 4, 4);
      img.ellipse(18, -26, 4, 4);
      img.ellipse(24, -26, 4, 4);
      img.ellipse(30, -27, 4, 4);
      img.ellipse(13, -19, 4, 4);
      img.ellipse(19, -20, 4, 4);
      img.ellipse(25, -20, 4, 4);
      img.ellipse(31, -21, 4, 4);
      img.ellipse(14, -13, 4, 4);
      img.ellipse(20, -14, 4, 4);
      img.ellipse(26, -14, 4, 4);
      img.ellipse(33, -15, 4, 4);
      img.ellipse(15, -7, 4, 4);
      img.ellipse(21, -8, 4, 4);
      img.ellipse(28, -8, 4, 4);
      img.ellipse(35, -9, 4, 4);
      img.stroke(107, 130, 123);
      img.strokeCap(p5.ROUND);
      img.strokeWeight(5);
      img.line(80, 29, 40, 32);
      img.line(10, 12, 40, 32);
      img.stroke(93, 112, 106);
      img.line(61, 23, 50, 24);
      img.point(26, 15);
      img.point(33, 15);
      img.point(41, 14);
      img.point(50, 14);
      img.point(34, 22);
      img.point(40, 20);
      img.point(47, 19);
      img.point(55, 16);
      img.point(62, 19);
      img.noFill();
      img.stroke(0);
      img.strokeWeight(5);
      img.quad(-7, -40, 44, -44, 54, 6, 2, 9);
      img.quad(38, 37, 89, 33, 54, 6, 1, 9);
      img.pop();
    };
    var emergencyButton = function (img, x, y, s) {
      /**Author: The Coding Legend**/
      img.push();
      img.translate(x, y);
      img.scale(s);
      img.strokeWeight(1);
      img.fill(255, 213, 0);
      img.rect(190, 177, 60, 82);
      img.fill(150, 150, 150);
      img.rect(200, 200, 40, 50);
      img.line(201, 242, 239, 242);
      img.fill(255, 143, 143);
      img.ellipse(220, 223, 25, 25);
      img.fill(255, 66, 66);
      img.ellipse(220, 220, 25, 25);
      img.fill(181, 181, 181);
      img.rect(200, 187, 40, 13);
      img.fill(255, 225, 0);
      img.ellipse(210, 194, 8, 8);
      img.ellipse(228, 194, 8, 8);
      img.strokeWeight(4);
      img.line(192, 195, 198, 195);
      img.translate(0, 12);
      img.line(192, 195, 199, 195);
      img.translate(0, 12);
      img.line(192, 195, 199, 195);
      img.translate(0, 12);
      img.line(192, 195, 199, 195);
      img.translate(0, 12);
      img.line(192, 195, 199, 195);
      img.line(242, 195, 249, 195);
      img.translate(0, -12);
      img.line(242, 195, 249, 195);
      img.translate(0, -12);
      img.line(242, 195, 249, 195);
      img.translate(0, -12);
      img.line(242, 195, 249, 195);
      img.translate(0, -12);
      img.line(242, 195, 248, 195);
      img.line(199, 187, 192, 180);
      img.line(241, 187, 249, 180);
      img.line(199, 251, 192, 258);
      img.line(241, 251, 248, 258);
      img.translate(2, 0);
      img.line(235, 185, 235, 179);
      img.translate(-11, 0);
      img.line(235, 185, 235, 179);
      img.translate(-11, 0);
      img.line(235, 185, 235, 179);
      img.translate(-11, 0);
      img.line(235, 185, 235, 179);
      img.translate(33, 73);
      img.line(235, 185, 235, 179);
      img.translate(-11, 0);
      img.line(235, 185, 235, 179);
      img.translate(-11, 0);
      img.line(235, 185, 235, 179);
      img.translate(-11, 0);
      img.line(235, 185, 235, 179);
      img.pop();
    };

    /**Author: The Coding Legend**/
    var img = p5.createGraphics(355 * s, 330 * s, p5.P2D);
    img.push();
    img.translate(x - 20 * s, y - 40 * s);
    img.scale(s);
    img.background(224, 22, 224);
    //Cafeteria floor
    var myMask = caffloor(img, s);
    //Tables
    drawTable(img, 190, 195, 30);
    drawTable(img, 115, 275, 30);
    drawTable(img, 115, 105, 30);
    drawTable(img, 265, 275, 30);
    drawTable(img, 265, 105, 30);
    //Walls at the top
    img.noStroke();
    img.fill(81, 124, 134);
    img.translate(0, -12);
    img.quad(21, 128, 21, 114, 80, 53, 80, 67);
    img.rect(80, 52, 200, 15);
    img.fill(130, 67, 86);
    img.translate(0, 14);
    img.quad(21, 125, 21, 114, 80, 53, 80, 65);
    img.rect(80, 53, 200, 12);
    img.fill(81, 124, 134);
    img.quad(280, 37, 280, 52, 370, 140, 370, 127);
    img.fill(130, 67, 86);
    img.quad(274, 61, 280, 52, 370, 140, 370, 155);
    img.fill(57, 57, 69);
    img.rect(87, 38, 186, 26, 3);
    img.fill(73, 107, 128);
    img.rect(95, 42, 170, 18, 2);
    img.stroke(57, 57, 69);
    img.strokeWeight(5);
    img.line(120, 40, 120, 60);
    img.translate(28, 0);
    img.line(125, 40, 125, 60);
    img.translate(28, 0);
    img.line(125, 40, 125, 60);
    img.translate(28, 0);
    img.line(125, 40, 125, 60);
    img.translate(33, 0);
    img.line(125, 40, 125, 60);
    img.translate(-117, 0);
    img.strokeWeight(3);
    img.stroke(0, 0, 0);
    img.line(80, 39, 80, 63);
    img.line(80, 65, 20, 127);
    img.line(280, 38, 280, 64);
    img.line(280, 64, 370, 155);
    img.line(80, 65, 280, 64);
    img.strokeWeight(1);
    img.noFill();
    img.quad(45, 80, 45, 90, 52, 82, 52, 72);
    img.fill(173, 173, 173);
    img.translate(162, -75);
    img.scale(0.7);
    img.quad(230, 230, 230, 250, 200, 220, 200, 200);
    img.fill(82, 82, 82);
    img.scale(0.7);
    img.translate(145, 150);
    img.quad(230, 230, 230, 250, 200, 220, 200, 200);
    img.translate(97, 99);
    img.fill(0, 0, 0);
    img.strokeWeight(3);
    img.scale(0.7);
    img.quad(230, 230, 230, 250, 200, 220, 200, 200);
    computer(img, -450, 180, 0.51);
    emergencyButton(img, -390, 290, 0.6);
    img.pop();

    img = img.get();

    img.mask(myMask); //mask it
    return img;
  },

  admin_room: function (x, y, s) {
    p5.rectMode(p5.CORNER);
    var uploadData = function (x, y, s) {
      /** Author: Name@dauntlessStudios **/
      p5.push();
      p5.translate(x, y);
      p5.scale(s);

      // Code
      p5.fill(0);
      p5.rect(0, 0, 25, 20, 4);
      p5.fill(148, 148, 148);
      p5.rect(2, 2, 21, 16, 1);
      p5.fill(71, 71, 71);
      p5.rect(4, 4, 17, 12, 1);
      p5.fill(255, 0, 0);
      p5.rect(17, 14, 2, 4);
      p5.strokeCap(p5.SQUARE);
      p5.fill(148);
      p5.arc(12, 15, 7, 7, p5.radians(231), p5.radians(311));
      p5.noFill();
      p5.stroke(148);
      p5.strokeWeight(2);
      p5.arc(12, 13, 8, 8, p5.radians(219), p5.radians(332));
      p5.arc(12, 10, 11, 8, p5.radians(205), p5.radians(354));

      p5.pop();
    }; // By dauntlessStudios

    var Security = function (x, y, s) {
      /** Author: Dream@DreamWasntTaken **/
      p5.push();
      p5.translate(x, y);
      p5.scale(s);

      //Seperators
      p5.fill(59, 56, 56);
      p5.strokeWeight(0);

      p5.rect(148, 155, 9, 93);
      p5.rect(48, 155, 9, 93);
      p5.rect(248, 155, 9, 93);
      p5.rect(348, 155, 9, 93);
      p5.fill(112, 105, 105);
      p5.rect(150, 155, 5, 93);
      p5.rect(50, 155, 5, 93);
      p5.rect(250, 155, 5, 93);
      p5.rect(350, 155, 5, 93);
      p5.fill(51, 51, 51);
      p5.rect(150, 186, 5, 27, 3);
      p5.rect(50, 186, 5, 27, 3);
      p5.rect(250, 186, 5, 27, 3);
      p5.rect(350, 186, 5, 27, 3);

      //keyborad
      var keybines = function (x, y, s) {
        p5.push();
        p5.translate(x, y);
        p5.scale(s);

        p5.fill(107, 99, 99);
        p5.rect(57, 203, 91, 22, 3);
        p5.fill(71, 68, 68);
        p5.rect(56, 223, 91, 6, 1);
        p5.fill(81, 194, 85);
        p5.ellipse(136, 217, 5, 5);
        p5.ellipse(142, 217, 5, 5);
        p5.ellipse(130, 217, 5, 5);
        p5.fill(191, 168, 168);
        p5.rect(63, 209, 10, 4, 5);
        p5.rect(63, 216, 10, 4, 5);
        p5.fill(51, 71, 50);
        p5.rect(81, 209, 41, 10);
        p5.pop();

      };
      keybines(0, 0, 1);
      keybines(100, 0, 1);
      keybines(199, -4, 1);

      /**{Chairs**/
      var Chairs = function (x, y, s) {

        p5.push();
        p5.translate(x, y);
        p5.scale(s);
        p5.strokeWeight(3);
        p5.fill(227, 102, 102);
        p5.beginShape();

        p5.curveVertex(110, 427);
        p5.curveVertex(128, 255);
        p5.curveVertex(122, 207);
        p5.curveVertex(86, 207);
        p5.curveVertex(81, 255);
        p5.curveVertex(98, 427);

        p5.endShape();

        p5.fill(130, 23, 23);
        p5.strokeWeight(3);
        p5.rect(80, 255, 48, 12, 30);
        p5.beginShape();
        p5.noStroke();
        p5.curveVertex(121, 427);
        p5.curveVertex(128, 255);
        p5.curveVertex(122, 215);
        p5.curveVertex(89, 215);
        p5.curveVertex(82, 255);
        p5.curveVertex(98, 427);

        p5.endShape();
        p5.strokeWeight(3);
        p5.stroke(0, 0, 0);
        p5.pop();
      };

      p5.fill(143, 135, 135);
      p5.rect(57, 155, 91, 50, 3);
      p5.rect(157, 155, 91, 50, 3);
      p5.rect(257, 155, 91, 50, 3);
      p5.fill(54, 50, 50);
      p5.rect(61, 161, 83, 42, 4);
      p5.rect(161, 161, 83, 42, 4);
      p5.rect(261, 161, 83, 42, 4);

      p5.rect(65, 164, 76, 37, 4);
      p5.rect(165, 164, 76, 37, 4);
      p5.rect(265, 164, 76, 37, 4);

      p5.fill(141, 235, 136);
      p5.rect(68, 167, 71, 32, 4);
      p5.rect(168, 167, 71, 32, 4);
      p5.rect(268, 167, 71, 32, 4);

      p5.fill(15, 33, 14);
      p5.textSize(5);
      p5.textAlign(p5.TOP, p5.TOP)
      p5.text("Don't \nRead!", 167, 168, 43, 182);
      p5.text("Task completed", 301, 174, 43, 182);
      p5.noFill();
      p5.rect(274, 170, 20, 4);
      p5.strokeWeight(4);
      p5.point(277, 187);
      p5.point(284, 187);
      p5.point(291, 187);
      Chairs(0, 0, 1);
      Chairs(196, -1, 1);

      p5.pop();
    }; // By Dream

    var AdminTable = function (x, y, s) {
      /** Author: Tiny252112@Tiny252112 **/
      p5.push();
      p5.translate(x, y);
      p5.scale(s);

      var x = 100;
      var y = 100;

      p5.strokeWeight(2);
      p5.fill(174, 173, 184);
      p5.rect(x + 30, y + 50, 175, 71);
      p5.fill(117, 118, 130);
      p5.rect(x + 30, y + 120, 175, 15);
      p5.rect(x + 84, y + 135, 70, 10);

      //p5.LEFT Panel
      p5.line(x + 33, y + 56, x + 53, y + 56);
      p5.line(x + 33, y + 56, x + 29, y + 59);
      p5.line(x + 33, y + 116, x + 53, y + 116);
      p5.line(x + 33, y + 116, x + 29, y + 119);
      p5.line(x + 28, y + 60, x + 28, y + 119);
      p5.line(x + 54, y + 56, x + 54, y + 114);
      p5.line(x + 33, y + 93, x + 53, y + 93);
      p5.line(x + 33, y + 93, x + 29, y + 96);
      p5.noStroke();
      p5.fill(76, 143, 76);
      p5.rect(134, 194, 19, 21);
      p5.rect(131, 207, 1, 10);
      p5.rect(133, 194, 1, 10);
      p5.rect(131, 196, 10, 19);
      p5.fill(143, 143, 143);
      p5.ellipse(145, 163, 4, 4);
      p5.ellipse(145, 168, 4, 4);
      p5.ellipse(145, 173, 4, 4);
      p5.ellipse(145, 178, 4, 4);
      p5.ellipse(145, 183, 4, 4);
      p5.ellipse(136, 176, 4, 21);
      p5.fill(167, 255, 153);
      p5.ellipse(142, 204, 10, 10);
      p5.rect(135, 194, 15, 2);
      p5.rect(135, 195, 2, 4);
      p5.rect(148, 195, 2, 4);
      p5.rect(135, 212, 15, 2);
      p5.rect(135, 209, 2, 4);
      p5.rect(148, 209, 2, 4);
      p5.stroke(0, 0, 0);
      p5.fill(101, 168, 86);
      p5.rect(x + 61, y + 63, 113, 43);

      //Right card swiper
      p5.line(280, 214, 280, 157);
      p5.line(280, 214, 305, 214);
      p5.line(280, 155, 309, 155);
      p5.line(309, 155, 316, 158);
      p5.line(316, 175, 316, 158);
      p5.line(316, 175, 309, 178);
      p5.line(316, 175, 305, 174);
      p5.line(305, 175, 307, 178);
      p5.line(305, 215, 307, 218);
      p5.line(305, 175, 280, 175);
      p5.line(307, 178, 307, 217);
      p5.noStroke();
      p5.fill(168, 168, 168);
      p5.rect(281, 156, 27, 17);
      p5.rect(305, 159, 10, 14);
      p5.rect(306, 157, 8, 6);
      p5.fill(9, 66, 0);
      p5.rect(283, 179, 8, 31);
      p5.rect(297, 157, 4, 15);
      p5.fill(143, 143, 143);
      p5.ellipse(286, 161, 5, 5);
      p5.ellipse(286, 168, 5, 5);
      p5.ellipse(292, 161, 5, 5);
      p5.ellipse(292, 168, 5, 5);

      //Sorry about how messy the p5.map is.
      p5.stroke(131, 173, 123);
      p5.line(x + 113, y + 62, x + 124, y + 62);
      p5.line(x + 113, y + 62, x + 108, y + 69);
      p5.line(x + 133, y + 71, x + 124, y + 62);
      p5.line(x + 133, y + 71, x + 133, y + 75);
      p5.line(x + 133, y + 75, x + 128, y + 82);
      p5.line(x + 128, y + 82, x + 113, y + 82);
      p5.line(x + 108, y + 77, x + 113, y + 82);
      p5.line(x + 108, y + 74, x + 108, y + 69);
      p5.line(x + 106, y + 72, x + 89, y + 72);
      p5.line(x + 89, y + 76, x + 89, y + 65);
      p5.line(x + 89, y + 65, x + 79, y + 65);
      p5.line(x + 75, y + 70, x + 79, y + 65);
      p5.line(x + 75, y + 70, x + 75, y + 76);
      p5.line(x + 89, y + 76, x + 75, y + 76);
      p5.line(x + 83, y + 76, x + 83, y + 86);
      p5.line(x + 78, y + 82, x + 89, y + 82);
      p5.line(x + 78, y + 80, x + 78, y + 86);
      p5.line(x + 78, y + 80, x + 72, y + 74);
      p5.line(x + 66, y + 74, x + 72, y + 74);
      p5.line(x + 66, y + 74, x + 66, y + 90);
      p5.line(x + 66, y + 92, x + 72, y + 92);
      p5.line(x + 79, y + 87, x + 72, y + 92);
      p5.line(x + 78, y + 90, x + 89, y + 90);
      p5.line(x + 78, y + 90, x + 78, y + 95);
      p5.line(x + 80, y + 98, x + 78, y + 95);
      p5.line(x + 80, y + 98, x + 89, y + 98);
      p5.line(x + 90, y + 98, x + 90, y + 90);
      p5.line(x + 92, y + 76, x + 92, y + 88);
      p5.line(x + 92, y + 75, x + 99, y + 75);
      p5.line(x + 92, y + 90, x + 99, y + 90);
      p5.line(x + 100, y + 76, x + 100, y + 88);
      p5.line(x + 101, y + 76, x + 101, y + 88);
      p5.line(x + 110, y + 88, x + 101, y + 88);
      p5.line(x + 111, y + 87, x + 106, y + 80);
      p5.line(x + 106, y + 80, x + 98, y + 76);
      p5.line(x + 91, y + 96, x + 114, y + 97);
      //I cheated a bit and made the medbay and elec the same room
      //Also I couldn't fit in comms
      p5.line(x + 126, y + 93, x + 126, y + 101);
      p5.line(x + 124, y + 91, x + 114, y + 91);
      p5.line(x + 124, y + 100, x + 114, y + 100);
      p5.line(x + 115, y + 91, x + 115, y + 101);
      p5.line(x + 121, y + 84, x + 121, y + 91);
      p5.line(x + 106, y + 89, x + 106, y + 96);
      p5.line(x + 133, y + 73, x + 139, y + 73);
      p5.line(x + 141, y + 80, x + 141, y + 68);
      p5.line(x + 140, y + 67, x + 143, y + 67);
      p5.line(x + 145, y + 67, x + 149, y + 71);
      p5.line(x + 150, y + 80, x + 149, y + 71);
      p5.line(x + 148, y + 80, x + 142, y + 82);
      p5.line(x + 146, y + 82, x + 146, y + 92);
      p5.line(x + 147, y + 89, x + 149, y + 89);
      p5.line(x + 153, y + 92, x + 153, y + 85);
      p5.line(x + 152, y + 84, x + 158, y + 84);
      p5.line(x + 160, y + 84, x + 160, y + 93);
      p5.line(x + 161, y + 93, x + 153, y + 93);
      p5.line(x + 140, y + 93, x + 149, y + 92);
      p5.line(x + 141, y + 93, x + 141, y + 99);
      p5.line(x + 147, y + 92, x + 148, y + 99);
      p5.line(x + 150, y + 99, x + 125, y + 99);
      p5.line(x + 146, y + 89, x + 140, y + 87);
      p5.line(x + 137, y + 84, x + 138, y + 93);
      p5.line(x + 137, y + 84, x + 128, y + 84);
      p5.line(x + 128, y + 90, x + 138, y + 93);
      p5.line(x + 128, y + 90, x + 128, y + 84);

      p5.stroke(158, 204, 149);
      p5.line(x + 113, y + 60, x + 124, y + 60);
      p5.line(x + 113, y + 60, x + 108, y + 67);
      p5.line(x + 133, y + 69, x + 124, y + 60);
      p5.line(x + 133, y + 69, x + 133, y + 73);
      p5.line(x + 133, y + 73, x + 128, y + 80);
      p5.line(x + 128, y + 80, x + 113, y + 80);
      p5.line(x + 108, y + 75, x + 113, y + 80);
      p5.line(x + 108, y + 72, x + 108, y + 67);
      p5.line(x + 106, y + 70, x + 89, y + 70);
      p5.line(x + 89, y + 74, x + 89, y + 63);
      p5.line(x + 89, y + 63, x + 79, y + 63);
      p5.line(x + 75, y + 68, x + 79, y + 63);
      p5.line(x + 75, y + 68, x + 75, y + 74);
      p5.line(x + 89, y + 74, x + 75, y + 74);
      p5.line(x + 83, y + 74, x + 83, y + 84);
      p5.line(x + 78, y + 80, x + 89, y + 80);
      p5.line(x + 78, y + 78, x + 78, y + 84);
      p5.line(x + 78, y + 78, x + 72, y + 72);
      p5.line(x + 66, y + 72, x + 72, y + 72);
      p5.line(x + 66, y + 72, x + 66, y + 88);
      p5.line(x + 66, y + 90, x + 72, y + 90);
      p5.line(x + 79, y + 85, x + 72, y + 90);
      p5.line(x + 78, y + 88, x + 89, y + 88);
      p5.line(x + 78, y + 88, x + 78, y + 93);
      p5.line(x + 80, y + 96, x + 78, y + 93);
      p5.line(x + 80, y + 96, x + 89, y + 96);
      p5.line(x + 90, y + 96, x + 90, y + 88);
      p5.line(x + 92, y + 74, x + 92, y + 86);
      p5.line(x + 92, y + 73, x + 99, y + 73);
      p5.line(x + 92, y + 88, x + 99, y + 88);
      p5.line(x + 100, y + 74, x + 100, y + 86);
      p5.line(x + 101, y + 74, x + 101, y + 86);
      p5.line(x + 110, y + 86, x + 101, y + 86);
      p5.line(x + 111, y + 85, x + 106, y + 78);
      p5.line(x + 106, y + 78, x + 98, y + 74);
      p5.line(x + 91, y + 94, x + 114, y + 95);
      p5.line(x + 126, y + 91, x + 126, y + 99);
      p5.line(x + 124, y + 89, x + 114, y + 89);
      p5.line(x + 124, y + 98, x + 114, y + 98);
      p5.line(x + 115, y + 89, x + 115, y + 99);
      p5.line(x + 121, y + 82, x + 121, y + 89);
      p5.line(x + 106, y + 87, x + 106, y + 94);
      p5.line(x + 133, y + 71, x + 139, y + 71);
      p5.line(x + 141, y + 78, x + 141, y + 66);
      p5.line(x + 140, y + 65, x + 143, y + 65);
      p5.line(x + 145, y + 65, x + 149, y + 69);
      p5.line(x + 150, y + 78, x + 149, y + 69);
      p5.line(x + 148, y + 78, x + 142, y + 80);
      p5.line(x + 146, y + 80, x + 146, y + 90);
      p5.line(x + 147, y + 87, x + 149, y + 87);
      p5.line(x + 153, y + 90, x + 153, y + 83);
      p5.line(x + 152, y + 82, x + 158, y + 82);
      p5.line(x + 160, y + 82, x + 160, y + 91);
      p5.line(x + 161, y + 91, x + 153, y + 91);
      p5.line(x + 140, y + 91, x + 149, y + 90);
      p5.line(x + 141, y + 91, x + 141, y + 97);
      p5.line(x + 147, y + 90, x + 148, y + 97);
      p5.line(x + 150, y + 97, x + 125, y + 97);
      p5.line(x + 146, y + 89, x + 140, y + 87);
      p5.line(x + 137, y + 84, x + 138, y + 93);
      p5.line(x + 137, y + 84, x + 128, y + 84);
      p5.line(x + 128, y + 90, x + 138, y + 93);
      p5.line(x + 128, y + 90, x + 128, y + 84);

      p5.pop();
    }; // By Tiny

    var oxygenDepletion = function (x, y, s) {
      /** Author: Name@dauntlessStudios **/
      p5.push();
      p5.translate(x, y);
      p5.scale(s);

      // Code
      p5.stroke(0);
      p5.fill(120, 120, 120);
      p5.rect(0, -1, 11, 14, 1);

      p5.noStroke();
      p5.fill(182, 195, 196);
      p5.rect(1, 2, 10, 11, 1);

      p5.stroke(182, 195, 196);
      p5.fill(94, 118, 133);
      p5.rect(1, 3, 3, 3, 1);
      p5.rect(4, 3, 3, 3, 1);
      p5.rect(7, 3, 3, 3, 1);
      p5.rect(1, 6, 3, 3, 1);
      p5.rect(4, 6, 3, 3, 1);
      p5.rect(7, 6, 3, 3, 1);
      p5.rect(1, 9, 3, 3, 1);
      p5.rect(4, 9, 3, 3, 1);
      p5.rect(7, 9, 3, 3, 1);

      p5.pop();
    }; // By dauntlessStudios

    var fullAdminRoom = function (x, y, s) {
      p5.push();
      p5.translate(x, y);
      p5.scale(s);

      p5.noStroke();
      p5.fill(102, 57, 59);
      p5.rect(0, 0, s + 400, s + 400);

      // Hexagon{
      p5.stroke(66, 0, 0);
      p5.strokeWeight(3);
      p5.line(57, 228, 57, 296);
      p5.line(70, 243, 70, 290);

      p5.line(57, 298, 105, 349);
      p5.line(70, 292, 116, 339);

      p5.line(105, 349, 291, 349);
      p5.line(116, 338, 285, 338);

      p5.line(287, 337, 330, 289);


      p5.line(292, 349, 344, 289);

      p5.line(330, 287, 330, 245);
      p5.line(344, 287, 344, 229);

      p5.stroke(0);
      p5.strokeWeight(1);
      p5.fill(56, 0, 0);
      p5.quad(72, 249, 72, 242, 109, 198, 112, 202);
      p5.quad(57, 227, 58, 234, 105, 185, 101, 181);

      p5.rect(102, 180, 196, 5);

      p5.rect(109, 197, 184, 5);

      p5.quad(298, 180, 297, 185, 343, 232, 343, 227);
      p5.quad(294, 197, 295, 203, 331, 249, 332, 242);
      //}

      // Objects from Different Graphics Designers{
      p5.stroke(0);
      AdminTable(-40, 46, 1.1);

      p5.stroke(0);
      p5.strokeWeight(1);

      Security(49, -124, 0.8);
      //}

      // Oxygen Depleted{
      p5.fill(114, 139, 150);
      p5.noStroke();
      p5.rect(335, y, 41, 57);

      p5.fill(255, 255, 255);
      p5.textSize(23);
      //!font//p5.textFont(p5.loadFont("Arial Bold"));
      p5.text("0", 347, 22);
      p5.textSize(11);
      p5.text("2", 360, 25);

      oxygenDepletion(348, 31, 1.5);

      p5.fill(171, 195, 214);
      p5.rect(336, 57, 64, 55);

      p5.stroke(71, 93, 97);
      p5.strokeWeight(2);
      p5.fill(118, 148, 150);
      p5.rect(339, 63, 61, 42);

      p5.stroke(0);
      p5.strokeWeight(2);
      p5.fill(128, 208, 214);
      p5.rect(376.4, 0, 15, 72);

      p5.noStroke();
      p5.fill(13, 82, 82);
      p5.rect(392.1, 0, 9, 72);
      //}

      //Upload Data{
      p5.fill(121, 132, 148);
      p5.rect(0, 0, 87, 71);

      p5.stroke(95, 109, 120);
      p5.strokeWeight(2);

      p5.rect(6, 5, 77, 61);

      p5.line(5, 34, 82, 34);

      p5.push();
      p5.rotate(p5.radians(45));
      p5.rect(40, -25, 33, 33);
      p5.pop();

      p5.noStroke();

      uploadData(34, 23, 1.0);

      //}
    };

    fullAdminRoom(0, 0, s);
    return p5.get(0, 0, 400 * s, 400 * s);
  },

  reactor_room: function (x, y, s) {

    /** Author: Daniel T @danieltheurich**/
    var img = p5.createGraphics(200 * s, 200 * s, p5.P2D);
    img.push();
    img.translate(x, y - 256);
    img.scale(s);

    //{

    img.push();
    img.translate(0, 18);
    img.scale(1.0);

    // floor main
    img.fill(84, 66, 102);
    img.stroke(0);
    img.strokeWeight(1);
    img.beginShape();
    img.vertex(90, 70);
    img.vertex(53, 96);
    img.vertex(53, 200);
    img.vertex(90, 224);
    img.vertex(111, 225);
    img.vertex(111, 189);
    img.vertex(144, 189);
    img.vertex(144, 162);
    img.vertex(146, 162);
    img.vertex(146, 137);
    img.vertex(144, 137);
    img.vertex(144, 107);
    img.vertex(111, 106);
    img.vertex(111, 70);
    img.endShape(p5.CLOSE);

    // texture
    img.noFill();
    img.stroke(26);
    img.strokeWeight(1.2);
    img.line(87, 113, 108, 130);
    img.line(86, 117, 104, 132);
    img.strokeWeight(0.8);
    img.beginShape();
    img.vertex(108, 131);
    img.vertex(108, 172);
    img.vertex(85, 192);
    img.vertex(65, 192);
    img.vertex(65, 190);
    img.vertex(84, 190);
    img.vertex(104, 172);
    img.vertex(104, 132);
    img.endShape();
    img.line(104, 138, 108, 138);
    img.line(104, 162, 108, 162);

    // more texture
    img.stroke(51);
    img.strokeWeight(1);
    img.beginShape();
    img.vertex(95, 71);
    img.vertex(95, 118);
    img.vertex(144, 118);
    img.vertex(144, 107);
    img.vertex(120, 106);
    img.vertex(120, 136);
    img.endShape();
    img.line(111, 93, 65, 93);
    img.line(71, 88, 71, 102);
    img.line(119, 164, 120, 188);
    img.line(87, 190, 111, 191);
    img.strokeWeight(1);
    img.beginShape();
    img.vertex(71, 192);
    img.vertex(71, 211);
    img.vertex(111, 211);
    img.endShape();
    img.line(95, 183, 95, 224);
    img.fill(148, 142, 164);

    // enterance
    img.stroke(26);
    img.strokeWeight(0.8);
    img.beginShape();
    img.vertex(108, 136);
    img.vertex(144, 136);
    img.vertex(144, 137);
    img.vertex(146, 137);
    img.vertex(146, 162);
    img.vertex(144, 162);
    img.vertex(144, 164);
    img.vertex(108, 164);
    img.endShape(p5.CLOSE);

    // light texture
    img.noFill();
    img.stroke(255, 255, 255, 70);
    img.strokeWeight(0.3);
    img.beginShape();
    img.vertex(86, 122);
    img.vertex(90, 122);
    img.vertex(90, 121);
    img.endShape();
    img.beginShape();
    img.vertex(86, 124);
    img.vertex(90, 124);
    img.vertex(90, 162);
    img.vertex(83, 162);
    img.endShape();
    img.beginShape();
    img.vertex(92, 122);
    img.vertex(92, 129);
    img.vertex(100, 129);
    img.endShape();
    img.beginShape();
    img.vertex(102, 131);
    img.vertex(92, 131);
    img.vertex(92, 168);
    img.vertex(104, 168);
    img.endShape();
    img.beginShape();
    img.vertex(85, 164);
    img.vertex(90, 164);
    img.vertex(90, 184);
    img.endShape();
    img.beginShape();
    img.vertex(104, 170);
    img.vertex(92, 170);
    img.vertex(92, 183);
    img.endShape();
    img.line(76, 164, 76, 190);
    img.line(74, 161, 74, 190);

    // light shadow
    img.fill(255, 255, 255, 40);
    img.noStroke();
    img.beginShape();
    img.vertex(61, 84);
    img.bezierVertex(61, 84, 120, 101, 123, 149);
    img.bezierVertex(123, 149, 129, 190, 73, 213);
    img.vertex(64, 206);
    img.endShape(p5.CLOSE);

    // floor main overshadow
    img.fill(0, 0, 0, 30);
    img.stroke(0);
    img.strokeWeight(1);
    img.beginShape();
    img.vertex(90, 70);
    img.vertex(53, 96);
    img.vertex(53, 200);
    img.vertex(90, 224);
    img.vertex(111, 225);
    img.vertex(111, 189);
    img.vertex(144, 189);
    img.vertex(144, 162);
    img.vertex(146, 162);
    img.vertex(146, 137);
    img.vertex(144, 137);
    img.vertex(144, 107);
    img.vertex(111, 106);
    img.vertex(111, 70);
    img.endShape(p5.CLOSE);

    img.pop();

    //} floor + floor texture

    //{

    // accept diverted power wall
    img.fill(115, 66, 189);
    img.quad(111, 108, 145, 108, 144, 124, 111, 124);
    //accept diverted power thingy
    img.fill(68, 33, 120);
    img.stroke(23, 11, 40);
    img.strokeWeight(1);
    img.beginShape();
    img.vertex(117, 109);
    img.bezierVertex(117, 109, 111, 119, 117, 124);
    img.vertex(139, 124);
    img.bezierVertex(139, 124, 146, 117, 139, 109);
    img.endShape(p5.CLOSE);
    //accept diverted power thingy
    img.fill(179);
    img.stroke(26);
    img.strokeWeight(0.9);
    img.quad(124, 115, 124, 120, 131, 120, 131, 115);
    //accept diverted power thingy
    img.noFill();
    img.stroke(173, 173, 10);
    img.strokeWeight(1);
    img.beginShape();
    img.vertex(132, 118);
    img.vertex(136, 118);
    img.vertex(136, 109);
    img.endShape();

    // cables
    img.noFill();
    img.stroke(0);
    img.strokeWeight(1);
    img.bezier(137, 108, 137, 108, 144, 127, 144, 109);
    img.strokeWeight(0.7);
    img.bezier(114, 108, 114, 108, 121, 117, 137, 108);
    img.bezier(117, 108, 117, 108, 110, 131, 136, 109);

    //} accept diverted power

    //{

    // reactor meltdown wall
    img.fill(141, 95, 211);
    img.stroke(26);
    img.strokeWeight(1);
    img.quad(90, 72, 90, 88, 111, 88, 111, 72);
    // reactor meltdown thingy
    img.fill(68, 33, 120);
    img.stroke(23, 11, 40);
    img.strokeWeight(1);
    img.beginShape();
    img.vertex(96, 73);
    img.bezierVertex(96, 73, 88, 80, 96, 88);
    img.vertex(106, 88);
    img.bezierVertex(106, 88, 112, 83, 106, 73);
    img.endShape(p5.CLOSE);
    // reactor meltdown thingy
    img.fill(128);
    img.stroke(0);
    img.strokeWeight(0.7);
    img.quad(98, 75, 98, 84, 104, 84, 104, 75);
    // reactor meltdown thingy
    img.fill(0, 255, 255);
    img.noStroke();
    img.quad(99, 79, 103, 79, 103, 83, 99, 83);

    // cable going from reactor meltdown to the reactor
    img.noFill();
    img.stroke(26);
    img.strokeWeight(1);
    img.beginShape();
    img.vertex(101, 84);
    img.vertex(101, 99);
    img.vertex(71, 119);
    img.endShape();

    //} reactor meltdown

    //{

    // another wall
    img.fill(101, 78, 123);
    img.stroke(0);
    img.strokeWeight(1);
    img.quad(53, 97, 90, 72, 90, 88, 53, 114);

    // part of the reactor
    img.fill(166, 193, 230);
    img.stroke(42, 127, 255);
    img.strokeWeight(0.6);
    img.beginShape();
    img.vertex(84, 81);
    img.bezierVertex(84, 81, 89, 81, 88, 86);
    img.vertex(81, 90);
    img.bezierVertex(81, 90, 81, 86, 79, 85);
    img.endShape(p5.CLOSE);
    img.strokeWeight(0.5);
    img.beginShape();
    img.vertex(81, 92);
    img.bezierVertex(81, 92, 86, 92, 83, 97);
    img.vertex(81, 98);
    img.endShape(p5.CLOSE);

    // manifolds box
    img.fill(81, 75, 95);
    img.stroke(11, 11, 40);
    img.strokeWeight(0.8);
    img.beginShape();
    img.vertex(76, 84);
    img.bezierVertex(76, 84, 81, 84, 81, 92);
    img.vertex(81, 101);
    img.vertex(69, 109);
    img.bezierVertex(69, 109, 70, 101, 69, 95);
    img.bezierVertex(69, 95, 69, 91, 64, 91);
    img.endShape(p5.CLOSE);
    // manifolds lock
    img.fill(128);
    img.stroke(0);
    img.beginShape();
    img.vertex(71, 102);
    img.vertex(77, 101);
    img.vertex(77, 103);
    img.vertex(71, 105);
    img.vertex(71, 103);
    img.endShape(p5.CLOSE);
    // manifolds cable
    img.fill(102);
    img.stroke(0);
    img.strokeWeight(0.6);
    img.quad(73, 104, 73, 108, 74, 108, 74, 104);

    // lights
    img.fill(158, 198, 255);
    img.stroke(76, 148, 255);
    img.strokeWeight(0.6);
    img.ellipse(72, 95, 3, 3);
    img.ellipse(75.5, 93.5, 3, 3);
    img.ellipse(79, 92, 3, 3);
    img.ellipse(73, 99, 3, 3);
    img.ellipse(76, 98, 3, 3);
    img.ellipse(79, 96.5, 3, 3);
    // side of manifolds box
    img.fill(35, 35, 67);
    img.stroke(17, 0, 43);
    img.strokeWeight(0.9);
    img.beginShape();
    img.vertex(62, 96);
    img.bezierVertex(62, 96, 62, 92, 64, 91);
    img.bezierVertex(64, 91, 70, 91, 70, 99);
    img.bezierVertex(70, 99, 70, 107, 69, 109);
    img.vertex(67, 109);
    img.bezierVertex(67, 109, 71, 105, 68, 99);
    img.bezierVertex(68, 99, 66, 94, 62, 96);
    img.endShape(p5.CLOSE);

    // top reactor pipe
    img.fill(66, 51, 101);
    img.stroke(19, 14, 27);
    img.beginShape();
    img.vertex(63, 95);
    img.bezierVertex(63, 95, 53, 99, 53, 104);
    img.vertex(53, 128);
    img.bezierVertex(53, 128, 53, 126, 58, 125);
    img.vertex(58, 124);
    img.vertex(65, 120);
    img.vertex(65, 112);
    img.bezierVertex(65, 112, 65, 109, 67, 108);
    img.bezierVertex(67, 108, 70, 103, 68, 99);
    img.bezierVertex(68, 99, 67, 96, 63, 95);
    img.endShape(p5.CLOSE);
    // window in pipe
    img.fill(0, 255, 255);
    img.stroke(0, 147, 242);
    img.beginShape();
    img.vertex(57, 110);
    img.vertex(57, 120);
    img.bezierVertex(57, 120, 61, 119, 63, 121);
    img.bezierVertex(63, 121, 63, 114, 63, 114);
    img.bezierVertex(63, 114, 62, 111, 57, 110);
    img.endShape(p5.CLOSE);

    // cables
    img.noFill();
    img.stroke(0);
    img.strokeWeight(1);
    img.bezier(83, 77, 83, 77, 91, 87, 98, 73);
    img.strokeWeight(0.8);
    img.bezier(104, 73, 104, 73, 104, 85, 109, 72);
    img.bezier(79, 79, 79, 79, 85, 93, 86, 75);

    // top of main reactor construction
    img.fill(89, 89, 171);
    img.stroke(0, 0, 54);
    img.strokeWeight(0.7);
    img.beginShape();
    img.vertex(62, 123);
    img.bezierVertex(62, 123, 70, 114, 79, 123);
    img.bezierVertex(79, 123, 72, 128, 62, 123);
    img.endShape(p5.CLOSE);
    // top edge
    img.fill(72, 34, 79);
    img.stroke(28, 0, 28);
    img.beginShape();
    img.vertex(62, 122);
    img.bezierVertex(62, 122, 60, 123, 58, 123);
    img.bezierVertex(58, 123, 71, 130, 82, 123);
    img.bezierVertex(82, 123, 81, 122, 79, 122);
    img.bezierVertex(79, 122, 70, 128, 62, 122);
    img.endShape(p5.CLOSE);
    // top edge
    img.fill(74, 33, 83);
    img.stroke(49, 5, 49);
    img.beginShape();
    img.vertex(58, 124);
    img.vertex(57, 125);
    img.bezierVertex(57, 125, 67, 132, 83, 126);
    img.vertex(82, 123);
    img.bezierVertex(82, 123, 72, 129, 58, 124);
    img.endShape(p5.CLOSE);
    // top cylinder body
    img.fill(86, 101, 135);
    img.stroke(0, 0, 41);
    img.strokeWeight(0.8);
    img.beginShape();
    img.vertex(57, 125);
    img.bezierVertex(57, 125, 67, 131, 83, 126);
    img.vertex(83, 125);
    img.bezierVertex(83, 125, 85, 125, 85, 129);
    img.vertex(85, 151);
    img.bezierVertex(85, 151, 77, 160, 61, 154);
    img.bezierVertex(61, 154, 58, 154, 53, 152);
    img.vertex(53, 128);
    img.bezierVertex(53, 128, 54, 126, 57, 125);
    img.endShape(p5.CLOSE);
    // cylinder bending out
    img.fill(73, 68, 130);
    img.stroke(1, 0, 33);
    img.beginShape();
    img.vertex(85, 148);
    img.bezierVertex(85, 148, 87, 148, 86, 150);
    img.bezierVertex(86, 150, 89, 152, 87, 154);
    img.bezierVertex(87, 154, 79, 166, 53, 157);
    img.vertex(53, 152);
    img.bezierVertex(53, 152, 72, 162, 85, 151);
    img.endShape(p5.CLOSE);

    // texture crack
    img.noFill();
    img.stroke(21, 21, 44);
    img.bezier(55, 126, 55, 126, 72, 136, 84, 127);

    // glowy things on reactor
    img.fill(219, 255, 255);
    img.stroke(113, 178, 255);
    img.strokeWeight(1);
    img.beginShape();
    img.vertex(57, 125);
    img.bezierVertex(57, 125, 53, 126, 54, 129);
    img.vertex(54, 154);
    img.bezierVertex(54, 154, 56, 156, 58, 154);
    img.vertex(58, 129);
    img.bezierVertex(58, 129, 62, 125, 57, 125);
    img.endShape(p5.CLOSE);
    img.beginShape();
    img.vertex(62, 132);
    img.vertex(62, 156);
    img.bezierVertex(62, 156, 64, 160, 69, 156);
    img.vertex(69, 132);
    img.bezierVertex(69, 132, 69, 123, 62, 132);
    img.endShape(p5.CLOSE);
    img.beginShape();
    img.vertex(76, 130);
    img.vertex(75, 155);
    img.bezierVertex(75, 155, 80, 160, 82, 154);
    img.vertex(82, 131);
    img.bezierVertex(82, 131, 78, 123, 76, 130);
    img.endShape(p5.CLOSE);
    img.beginShape();
    img.vertex(83, 124);
    img.bezierVertex(83, 124, 86, 123, 86, 128);
    img.vertex(86, 149);
    img.bezierVertex(86, 149, 86, 148, 85, 148);
    img.vertex(85, 127);
    img.bezierVertex(85, 127, 84, 125, 83, 124);
    img.endShape(p5.CLOSE);

    // texturing on cylinder body
    img.noFill();
    img.stroke(10);
    img.strokeWeight(1);
    img.line(60, 139, 60, 155);
    img.line(72, 140, 72, 157);
    img.line(84, 136, 84, 152);

    // bottom of cylinder body
    img.fill(110, 104, 158);
    img.stroke(5, 0, 44);
    img.strokeWeight(0.8);
    img.beginShape();
    img.vertex(88, 153);
    img.vertex(88, 171);
    img.bezierVertex(88, 171, 85, 182, 67, 180);
    img.bezierVertex(67, 180, 69, 175, 66, 171);
    img.bezierVertex(66, 171, 58, 163, 53, 171);
    img.vertex(53, 157);
    img.bezierVertex(53, 157, 71, 164, 82, 158);
    img.bezierVertex(82, 158, 86, 156, 88, 153);
    img.endShape(p5.CLOSE);
    // shadow
    img.fill(0, 0, 0, 77);
    img.noStroke();
    img.beginShape();
    img.vertex(61, 159);
    img.vertex(61, 168);
    img.bezierVertex(61, 168, 56, 165, 54, 171);
    img.vertex(53, 157);
    img.bezierVertex(53, 157, 59, 159, 61, 159);
    img.endShape(p5.CLOSE);
    // more glowy things
    img.fill(191, 255, 255);
    img.ellipse(80, 164, 4, 7);
    img.ellipse(68, 166, 4, 7);

    // glowy pipe coming out of cylinder
    img.fill(117, 114, 151);
    img.stroke(63, 61, 93);
    img.strokeWeight(0);
    img.beginShape();
    img.vertex(74, 175);
    img.bezierVertex(74, 175, 74, 169, 79, 169);
    img.bezierVertex(79, 169, 74, 168, 73, 171);
    img.bezierVertex(73, 171, 72, 174, 74, 175);
    img.endShape(p5.CLOSE);
    // glowy pipe coming out of cylinder
    img.fill(198, 255, 255);
    img.stroke(142, 186, 255);
    img.beginShape();
    img.vertex(78, 169);
    img.bezierVertex(78, 169, 86, 170, 85, 183);
    img.bezierVertex(85, 183, 82, 190, 78, 184);
    img.bezierVertex(78, 184, 81, 179, 74, 175);
    img.bezierVertex(74, 175, 73, 170, 78, 169);
    img.endShape(p5.CLOSE);
    // glowy pipe coming out of cylinder
    img.fill(153);
    img.stroke(102);
    img.beginShape();
    img.vertex(78, 184);
    img.bezierVertex(78, 184, 81, 189, 85, 184);
    img.vertex(86, 186);
    img.bezierVertex(86, 186, 82, 191, 78, 186);
    img.endShape(p5.CLOSE);

    // reactor meltdown
    img.fill(102);
    img.stroke(0);
    img.strokeWeight(0.8);
    img.quad(97, 242, 97, 241, 104, 241, 104, 242);
    // cable enterance to reactor
    img.fill(77);
    img.stroke(26);
    img.strokeWeight(0.8);
    img.beginShape();
    img.vertex(69, 180);
    img.vertex(70, 177);
    img.vertex(73, 177);
    img.vertex(74, 180);
    img.bezierVertex(74, 180, 71, 180, 69, 180);
    img.endShape(p5.CLOSE);
    // reactor - reactor meltdown cable
    img.noFill();
    img.strokeWeight(1);
    img.beginShape();
    img.vertex(72, 179);
    img.vertex(71, 214);
    img.vertex(101, 233);
    img.vertex(101, 241);
    img.endShape();

    // bottom pipe of reactor
    img.fill(89, 89, 141);
    img.stroke(0);
    img.strokeWeight(1);
    img.beginShape();
    img.vertex(53, 171);
    img.bezierVertex(53, 171, 57, 164, 63, 169);
    img.bezierVertex(63, 169, 70, 172, 67, 180);
    img.vertex(66, 226);
    img.vertex(53, 218);
    img.endShape(p5.CLOSE);
    // shading
    img.fill(0, 0, 0, 51);
    img.noStroke();
    img.beginShape();
    img.vertex(66, 185);
    img.bezierVertex(66, 185, 66, 167, 56, 172);
    img.vertex(56, 219);
    img.vertex(53, 217);
    img.vertex(54, 171);
    img.bezierVertex(54, 171, 55, 166, 62, 168);
    img.bezierVertex(62, 168, 69, 171, 67, 180);
    img.endShape(p5.CLOSE);
    // windows in pipe
    img.fill(126, 255, 255);
    img.stroke(0, 155, 155);
    img.strokeWeight(0.7);
    img.beginShape();
    img.vertex(59, 181);
    img.vertex(59, 191);
    img.bezierVertex(59, 191, 64, 190, 65, 195);
    img.vertex(65, 186);
    img.bezierVertex(65, 186, 64, 181, 59, 181);
    img.endShape(p5.CLOSE);
    img.beginShape();
    img.vertex(59, 202);
    img.vertex(58, 212);
    img.bezierVertex(58, 212, 64, 211, 65, 216);
    img.vertex(65, 207);
    img.bezierVertex(65, 207, 64, 202, 59, 202);
    img.endShape(p5.CLOSE);

    //} the reactor

    //{

    // side
    img.fill(61, 61, 135);
    img.stroke(25, 25, 42);
    img.strokeWeight(0.6);
    img.quad(84, 167, 94, 171, 94, 175, 85, 175);
    // side
    img.fill(24, 24, 89);
    img.stroke(18, 18, 59);
    img.quad(94, 171, 96, 166, 96, 173, 94, 175);
    // top
    img.fill(114, 114, 174);
    img.stroke(14, 8, 67);
    img.beginShape();
    img.vertex(84, 167);
    img.bezierVertex(84, 167, 87, 165, 87, 163);
    img.vertex(96, 166);
    img.vertex(94, 171);
    img.endShape(p5.CLOSE);
    // keys
    img.fill(26);
    img.stroke(0);
    img.quad(90, 165, 88, 167, 93, 169, 94, 167);

    // outline
    img.noFill();
    img.strokeWeight(0.8);
    img.line(86, 167, 88, 164);
    img.beginShape();
    img.vertex(87, 163);
    img.vertex(96, 166);
    img.vertex(96, 173);
    img.vertex(94, 176);
    img.vertex(85, 175);
    img.vertex(84, 166);
    img.bezierVertex(84, 166, 87, 164, 87, 163);
    img.endShape(p5.CLOSE);

    //} start reactor box

    //{

    // idk
    img.fill(39);
    img.noStroke();
    img.quad(111, 225, 89, 209, 86, 212, 111, 230);
    img.fill(179);
    img.beginShape();
    img.vertex(111, 226);
    img.vertex(91, 211);
    img.vertex(88, 211);
    img.vertex(89, 213);
    img.vertex(111, 229);
    img.endShape(p5.CLOSE);
    img.noFill();
    img.stroke(0, 255, 255);
    img.strokeWeight(1);
    img.line(94, 215, 110, 227);

    // another idk
    img.fill(45);
    img.noStroke();
    img.quad(144, 150, 109, 149, 109, 153, 144, 153);
    img.fill(179);
    img.beginShape();
    img.vertex(144, 150);
    img.vertex(112, 150);
    img.vertex(110, 151);
    img.vertex(111, 152);
    img.vertex(144, 152);
    img.endShape(p5.CLOSE);
    img.noFill();
    img.stroke(0, 255, 255);
    img.strokeWeight(1);
    img.line(115, 151, 144, 151);

    // another idk
    img.stroke(0);
    img.strokeWeight(0.8);
    img.quad(111, 118, 89, 127, 91, 130, 111, 121);
    img.stroke(0, 255, 255);
    img.beginShape();
    img.vertex(91, 128);
    img.vertex(111, 119);
    img.vertex(93, 127);
    img.endShape();
    img.stroke(204);
    img.strokeWeight(1);
    img.line(111, 119, 91, 128);
    img.stroke(0, 255, 255);
    img.strokeWeight(0.6);
    img.line(111, 119, 94, 127);

    // another idk
    img.fill(45);
    img.noStroke();
    img.quad(144, 182, 108, 182, 108, 185, 144, 185);
    img.fill(179);
    img.beginShape();
    img.vertex(144, 183);
    img.vertex(111, 182);
    img.vertex(110, 184);
    img.vertex(111, 185);
    img.vertex(144, 185);
    img.endShape(p5.CLOSE);
    img.noFill();
    img.stroke(0, 255, 255);
    img.strokeWeight(1);
    img.line(115, 184, 144, 184);

    //} idk what these are called

    //{

    // vent lower
    img.fill(153);
    img.stroke(0);
    img.beginShape();
    img.vertex(107, 196);
    img.vertex(115, 196);
    img.bezierVertex(115, 196, 116, 196, 116, 198);
    img.vertex(116, 202);
    img.bezierVertex(116, 202, 117, 203, 114, 203);
    img.vertex(107, 203);
    img.bezierVertex(107, 203, 106, 203, 106, 202);
    img.vertex(106, 197);
    img.bezierVertex(106, 197, 106, 196, 107, 196);
    img.endShape(p5.CLOSE);
    // cracks
    img.noFill();
    img.stroke(75);
    img.strokeWeight(1);
    img.line(108, 197, 114, 197);
    img.line(108, 199, 114, 199);
    img.line(108, 201, 114, 201);

    // vent higher
    img.fill(153);
    img.stroke(0);
    img.strokeWeight(0.7);
    img.beginShape();
    img.vertex(84, 112);
    img.vertex(92, 112);
    img.bezierVertex(92, 112, 94, 112, 94, 114);
    img.vertex(94, 119);
    img.bezierVertex(94, 119, 94, 120, 92, 120);
    img.vertex(85, 120);
    img.bezierVertex(85, 120, 83, 120, 83, 119);
    img.vertex(83, 114);
    img.bezierVertex(83, 114, 83, 112, 84, 112);
    img.endShape(p5.CLOSE);
    // cracks
    img.noFill();
    img.stroke(75);
    img.strokeWeight(1);
    img.line(85, 114, 92, 114);
    img.line(85, 116, 92, 116);
    img.line(85, 118, 92, 118);

    //} vents

    img.pop();

    return img.get(s * 50, s * 70 - 256, s * 100, (s) * 175);

  },

  o2_room: function (x, y, s) {
    /** Author:  ПΣЩПIПJΛ @n3wninja **/
    var img = p5.createGraphics(350 * s, 350 * s, p5.P2D);
    img.background(0, 0);
    img.push();
    img.translate(x, y);
    img.scale(s);

    // Code {
    img.fill(110, 122, 110);
    img.beginShape();
    img.vertex(300, 250);
    img.vertex(300, 350);
    img.vertex(0, 350);
    img.vertex(0, 200);
    img.vertex(100, 50);
    img.vertex(100, 0);
    img.vertex(300, 0);
    img.vertex(300, 50);
    img.endShape();

    img.noStroke();
    img.fill(90, 97, 90);
    img.rect(100, 0, 200, 50);
    img.fill(110, 122, 110);
    img.quad(150, 0, 250, 0, 275, 50, 125, 50);

    img.noFill();
    //outline
    img.beginShape();
    img.vertex(300, 250);
    img.vertex(300, 350);
    img.vertex(0, 350);
    img.vertex(0, 200);
    img.vertex(100, 50);
    img.vertex(100, 0);
    img.vertex(300, 0);
    img.vertex(300, 50);
    img.endShape();

    img.noFill();
    img.strokeWeight(10);
    img.stroke(25);
    img.beginShape();
    img.vertex(300, 250);
    img.vertex(300, 350);
    img.vertex(0, 350);
    img.vertex(0, 200);
    img.vertex(100, 50);
    img.vertex(100, 0);
    img.vertex(300, 0);
    img.vertex(300, 50);
    img.endShape();

    img.noFill();
    img.strokeWeight(4);
    img.stroke(50);
    img.beginShape();
    img.vertex(300, 250);
    img.vertex(300, 350);
    img.vertex(0, 350);
    img.vertex(0, 200);
    img.vertex(100, 50);
    img.vertex(100, 0);
    img.vertex(300, 0);
    img.vertex(300, 50);
    img.endShape();

    img.strokeWeight(2);
    img.stroke(0, 20);
    for (var j = 60; j < 228; j += 6) {
      img.line(155 - j / 1.5, j, 299, j);
    }
    for (var i = 228; i < 345; i += 6) {
      img.line(8, i, 299, i);
    }

    img.stroke(88, 97, 88);
    img.fill(122, 130, 122);
    img.beginShape();
    img.vertex(76, 175);
    img.vertex(125, 175);
    img.vertex(145, 140);
    img.vertex(300, 140);
    img.vertex(300, 100);
    img.vertex(86, 100);
    img.endShape(p5.CLOSE);

    img.beginShape();
    img.vertex(40, 225);
    img.vertex(90, 225);
    img.vertex(50, 300);
    img.vertex(285, 300);
    img.vertex(285, 250);
    img.vertex(295, 250);
    img.vertex(295, 345);
    img.vertex(6, 345);
    img.vertex(6, 276);
    img.endShape(p5.CLOSE);

    img.strokeWeight(1);
    img.stroke(0);
    img.fill(150);
    img.rect(296, 50, 50, 75);
    img.stroke(125);
    img.strokeWeight(2);
    img.rect(316, 55, 20, 65);
    img.rect(324, 70, 5, 35, 3);

    img.noStroke();
    img.rect(318, 76, 10, 12);

    img.fill(100);
    img.rect(106, 50, 190, 37);

    img.fill(125);
    img.beginShape();
    img.vertex(115, 52);
    img.vertex(150, 52);
    img.vertex(152, 65);
    img.vertex(153, 52);
    img.vertex(290, 52);
    img.vertex(290, 80);
    img.vertex(115, 80);
    img.endShape();
    img.arc(116, 66, 15, 27, p5.radians(-270), p5.radians(-90));

    img.fill(75);
    img.rect(106, 87, 190, 45);
    img.fill(63, 92, 71);
    img.rect(136, 93, 150, 30);
    img.fill(65, 107, 77);
    img.rect(146, 98, 50, 25, 20, 20, 0, 0);
    img.rect(224, 98, 60, 25, 20, 20, 0, 0);
    img.fill(81, 125, 94);
    img.rect(165, 112, 10, 5, 20);
    img.rect(157, 105, 5, 3, 20);
    img.rect(256, 101, 10, 5, 20);
    img.rect(255, 101, 5, 8, 20);
    img.rect(270, 111, 5, 5, 20);
    img.rect(256, 117, 5, 2, 20);

    img.fill(112, 112, 112);
    img.arc(215, 120, 75, 30, p5.radians(-360), p5.radians(-180));
    img.rect(177, 80, 75, 40);
    img.fill(140, 140, 140);
    img.arc(215, 120, 65, 30, p5.radians(-360), p5.radians(-180));
    img.rect(182, 80, 65, 40);
    img.fill(74, 130, 171);
    img.rect(178, 40, 75, 40);
    img.fill(94, 161, 209);
    img.rect(180, 40, 70, 35);
    img.fill(63, 121, 163);
    img.ellipse(215, 80, 75, 30);
    img.fill(80, 149, 201);
    img.ellipse(215, 80, 70, 25);
    img.fill(93, 118, 135);
    img.ellipse(215, 80, 45, 15);
    img.fill(46, 124, 179);
    img.ellipse(215, 40, 75, 30);
    img.fill(47, 141, 204);
    img.ellipse(215, 40, 70, 25);

    img.fill(3, 84, 35);
    img.push();
    img.translate(210, 72);
    img.rotate(p5.radians(49));
    img.noStroke();
    img.beginShape();
    img.vertex(0, 0);
    img.vertex(-5, -5);
    img.vertex(-2, -7);
    img.vertex(-2, -10);
    img.vertex(0, -12);
    img.vertex(1, -15);
    img.vertex(0, -20);
    img.vertex(2, -22);
    img.vertex(3, -24);
    img.vertex(4, -30);
    img.vertex(10, -32);
    img.vertex(8, -28);
    img.vertex(9, -25);
    img.vertex(12, -22);
    img.vertex(11, -20);
    img.vertex(15, -15);
    img.vertex(13, -10);
    img.vertex(16, -5);
    img.vertex(10, 0);
    img.vertex(5, 5);
    img.vertex(0, 3);
    img.endShape(p5.CLOSE);
    img.pop();

    img.fill(5, 102, 44);
    img.push();
    img.translate(210, 76);
    img.rotate(p5.radians(-80));
    img.noStroke();
    img.beginShape();
    img.vertex(0, 0);
    img.vertex(-5, -5);
    img.vertex(-2, -7);
    img.vertex(-2, -10);
    img.vertex(0, -12);
    img.vertex(1, -15);
    img.vertex(0, -20);
    img.vertex(2, -22);
    img.vertex(3, -24);
    img.vertex(4, -30);
    img.vertex(10, -32);
    img.vertex(8, -28);
    img.vertex(9, -25);
    img.vertex(12, -22);
    img.vertex(11, -20);
    img.vertex(15, -15);
    img.vertex(13, -10);
    img.vertex(16, -5);
    img.vertex(10, 0);
    img.vertex(5, 5);
    img.vertex(0, 3);
    img.endShape(p5.CLOSE);
    img.pop();

    img.fill(3, 102, 43);
    img.push();
    img.translate(210, 76);
    img.rotate(p5.radians(10));
    img.noStroke();
    img.beginShape();
    img.vertex(0, 0);
    img.vertex(-5, -5);
    img.vertex(-2, -7);
    img.vertex(-2, -10);
    img.vertex(0, -12);
    img.vertex(1, -15);
    img.vertex(0, -20);
    img.vertex(2, -22);
    img.vertex(3, -24);
    img.vertex(4, -30);
    img.vertex(10, -32);
    img.vertex(8, -28);
    img.vertex(9, -25);
    img.vertex(12, -22);
    img.vertex(11, -20);
    img.vertex(15, -15);
    img.vertex(13, -10);
    img.vertex(16, -5);
    img.vertex(10, 0);
    img.vertex(5, 5);
    img.vertex(0, 3);
    img.endShape(p5.CLOSE);
    img.pop();

    img.fill(4, 112, 47);
    img.push();
    img.translate(210, 78);
    img.rotate(p5.radians(-50));
    img.noStroke();
    img.beginShape();
    img.vertex(0, 0);
    img.vertex(-5, -5);
    img.vertex(-2, -7);
    img.vertex(-2, -10);
    img.vertex(0, -12);
    img.vertex(1, -15);
    img.vertex(0, -20);
    img.vertex(2, -22);
    img.vertex(3, -24);
    img.vertex(4, -30);
    img.vertex(10, -32);
    img.vertex(8, -28);
    img.vertex(9, -25);
    img.vertex(12, -22);
    img.vertex(11, -20);
    img.vertex(15, -15);
    img.vertex(13, -10);
    img.vertex(16, -5);
    img.vertex(10, 0);
    img.vertex(5, 5);
    img.vertex(0, 3);
    img.endShape(p5.CLOSE);
    img.pop();

    img.strokeWeight(1);
    img.stroke(54, 54, 54);
    img.fill(115);
    img.beginShape();
    img.vertex(260, 50);
    img.vertex(260, 65);
    img.vertex(268, 75);
    img.vertex(280, 75);
    img.vertex(288, 70);
    img.vertex(288, 45);
    img.endShape();

    img.fill(100);
    img.noStroke();
    img.beginShape();
    img.vertex(287, 50);
    img.vertex(283, 65);
    img.vertex(280, 75);
    img.vertex(280, 75);
    img.vertex(288, 70);
    img.vertex(288, 45);
    img.endShape();

    img.stroke(54, 54, 54);
    img.fill(115);

    img.arc(274, 53, 29, 15, p5.radians(-360), p5.radians(-299));
    img.arc(274, 60, 29, 15, p5.radians(-261), p5.radians(-180));

    img.ellipse(274, 47, 29, 15);

    img.fill(50);
    img.ellipse(274, 47, 25, 9);

    //Oxegen controller {
    img.stroke(100);
    img.fill(161, 161, 161);
    img.rect(210, 105, 16, 20);

    img.strokeWeight(3.5);
    img.point(213, 110);
    img.point(218, 110);
    img.point(223, 110);
    img.point(213, 115);
    img.point(218, 115);
    img.point(223, 115);
    img.point(213, 120);
    img.point(218, 120);
    img.point(223, 120);
    //}

    //wall {

    img.fill(125);
    img.strokeWeight(2);
    img.quad(105, 55, 105, 130, 7, 275, 7, 200);
    img.quad(105, 55, 105, 130, 75, 175, 75, 100);
    img.quad(75, 100, 75, 175, 42, 224, 42, 148);

    img.strokeWeight(1);
    img.noFill();
    img.quad(42, 190, 42, 148, 25, 176, 26, 215);
    img.quad(7, 240, 5, 204, 25, 174, 26, 215);
    img.quad(42, 190, 42, 224, 25, 248, 26, 215);
    img.quad(7, 240, 7, 273, 25, 249, 26, 215);

    img.fill(10, 125, 27);
    img.push();
    img.translate(83, -120);
    img.stroke(50);
    img.arc(16, 212, 13, 15, p5.radians(-450), p5.radians(-270));
    img.arc(17, 212, 10, 15, p5.radians(-270), p5.radians(-90));

    img.line(17, 212, 12, 212);
    img.line(17, 212, 17, 206);
    img.line(17, 212, 22, 212);
    img.line(17, 212, 17, 218);

    img.line(17, 212, 13, 208);
    img.line(17, 212, 21, 208);
    img.line(17, 212, 13, 216);
    img.line(17, 212, 21, 216);
    img.pop();

    img.push();
    img.translate(70, -105);
    img.stroke(50);
    img.arc(16, 212, 13, 15, p5.radians(-450), p5.radians(-270));
    img.arc(17, 212, 10, 15, p5.radians(-270), p5.radians(-90));

    img.line(17, 212, 12, 212);
    img.line(17, 212, 17, 206);
    img.line(17, 212, 22, 212);
    img.line(17, 212, 17, 218);

    img.line(17, 212, 13, 208);
    img.line(17, 212, 21, 208);
    img.line(17, 212, 13, 216);
    img.line(17, 212, 21, 216);
    img.pop();

    img.push();
    img.translate(0, -2);
    img.stroke(50);
    img.arc(16, 212, 13, 15, p5.radians(-450), p5.radians(-270));
    img.arc(17, 212, 10, 15, p5.radians(-270), p5.radians(-90));

    img.line(17, 212, 12, 212);
    img.line(17, 212, 17, 206);
    img.line(17, 212, 22, 212);
    img.line(17, 212, 17, 218);

    img.line(17, 212, 13, 208);
    img.line(17, 212, 21, 208);
    img.line(17, 212, 13, 216);
    img.line(17, 212, 21, 216);
    img.pop();

    img.push();
    img.translate(2, 31);
    img.stroke(50);
    img.arc(16, 212, 13, 15, p5.radians(-450), p5.radians(-270));
    img.arc(17, 212, 10, 15, p5.radians(-270), p5.radians(-90));

    img.line(17, 212, 12, 212);
    img.line(17, 212, 17, 206);
    img.line(17, 212, 22, 212);
    img.line(17, 212, 17, 218);

    img.line(17, 212, 13, 208);
    img.line(17, 212, 21, 208);
    img.line(17, 212, 13, 216);
    img.line(17, 212, 21, 216);
    img.pop();

    img.push();
    img.translate(18, 9);
    img.stroke(50);
    img.arc(16, 212, 13, 15, p5.radians(-450), p5.radians(-270));
    img.arc(17, 212, 10, 15, p5.radians(-270), p5.radians(-90));

    img.line(17, 212, 12, 212);
    img.line(17, 212, 17, 206);
    img.line(17, 212, 22, 212);
    img.line(17, 212, 17, 218);

    img.line(17, 212, 13, 208);
    img.line(17, 212, 21, 208);
    img.line(17, 212, 13, 216);
    img.line(17, 212, 21, 216);
    img.pop();

    img.push();
    img.translate(17, -23);
    img.stroke(50);
    img.arc(16, 212, 13, 15, p5.radians(-450), p5.radians(-270));
    img.arc(17, 212, 10, 15, p5.radians(-270), p5.radians(-90));

    img.line(17, 212, 12, 212);
    img.line(17, 212, 17, 206);
    img.line(17, 212, 22, 212);
    img.line(17, 212, 17, 218);

    img.line(17, 212, 13, 208);
    img.line(17, 212, 21, 208);
    img.line(17, 212, 13, 216);
    img.line(17, 212, 21, 216);
    img.pop();

    img.stroke(0, 55);
    img.strokeWeight(1.5);
    img.line(75, 136, 107, 99);

    img.strokeWeight(1);
    //}///

    //pipe (for cleaning filter task) {

    img.fill(100);

    img.stroke(20);
    img.beginShape();
    img.vertex(95, 130);
    img.vertex(107, 110);
    img.vertex(130, 110);
    img.vertex(130, 135);
    img.vertex(115, 160);
    img.bezierVertex(102, 168, 84, 165, 80, 160);
    img.bezierVertex(76, 155, 74, 128, 95, 130);
    img.endShape();
    img.arc(95, 140, 3, 15, p5.radians(-180), p5.radians(-90));

    img.noStroke();
    img.fill(125);
    img.beginShape();
    img.vertex(95, 160);
    img.bezierVertex(76, 163, 82, 146, 86, 141);
    img.bezierVertex(89, 154, 105, 136, 105, 130);
    img.bezierVertex(131, 143, 114, 152, 113, 158);
    img.endShape();

    img.stroke(50);
    img.fill(115);
    img.beginShape();
    img.vertex(108, 131);
    img.vertex(118, 117);
    img.vertex(127, 117);
    img.vertex(131, 133);
    img.vertex(120, 148);
    img.bezierVertex(120, 135, 117, 135, 108, 131);
    img.endShape();

    img.stroke(75);
    img.line(126, 118, 117, 131);
    img.line(108, 131, 117, 131);
    img.line(120, 141, 117, 131);

    img.stroke(0);
    img.line(123, 141, 121, 131);
    img.line(127, 139, 124, 125);
    img.line(131, 133, 128, 120);

    //}

    // empty chute (lever) {

    img.stroke(50);
    img.quad(51, 170, 69, 150, 71, 161, 53, 180);
    img.strokeWeight(2);
    img.line(58, 167, 55, 157);
    img.line(64, 163, 61, 151);
    img.strokeWeight(5);
    img.line(52, 155, 64, 145);
    img.stroke(100);
    img.point(52, 155);

    //}

    // green grossness (under pipes) {

    img.noStroke();
    img.fill(75);
    img.quad(38, 231, 80, 230, 41, 300, 6, 277);
    img.triangle(6, 277, 26, 277, 6, 300);
    img.rect(6, 310, 289, 36);
    img.fill(100);
    img.rect(6, 315, 70, 31);
    img.rect(80, 315, 85, 31);
    img.rect(170, 315, 60, 31);
    img.rect(235, 315, 45, 31);

    img.quad(40, 236, 70, 235, 47, 275, 15, 275);
    img.quad(13, 280, 46, 280, 33, 300, 7, 297);

    img.fill(60);
    img.rect(246, 315, 45, 31);

    img.fill(63, 92, 71);
    img.rect(6, 320, 70, 27);
    img.rect(80, 320, 85, 27);
    img.rect(170, 320, 60, 27);
    img.rect(235, 320, 45, 27);

    img.quad(45, 241, 69, 240, 47, 275, 20, 275);
    img.quad(12, 283, 43, 283, 33, 300, 7, 297);

    img.fill(65, 107, 77);
    img.rect(6, 325, 70, 22, 10, 5, 0, 0);
    img.rect(80, 330, 85, 17, 0, 10, 0, 0);
    img.rect(170, 325, 60, 22, 10, 5, 0, 0);
    img.rect(235, 328, 45, 19, 0, 10, 0, 0);

    img.quad(45, 245, 63, 245, 47, 275, 26, 275);

    img.fill(81, 125, 94);
    img.rect(45, 250, 5, 5, 10);
    img.rect(45, 253, 10, 5, 10);
    img.rect(40, 264, 5, 2, 10);
    img.rect(42, 263, 4, 4, 10);

    img.rect(53, 339, 10, 5, 10, 5, 10, 0);
    img.rect(67, 329, 5, 3, 10, 5, 10, 0);
    img.rect(53, 333, 2, 3, 10, 5, 10, 0);

    img.rect(101, 329, 8, 10, 10, 2, 10, 10);
    img.rect(88, 340, 2, 3, 10, 2, 10, 10);

    img.rect(178, 332, 8, 5, 10, 2, 10, 10);
    img.rect(184, 335, 8, 2, 0, 10, 10, 10);
    img.rect(208, 331, 8, 8, 5, 2, 10, 10);
    img.rect(194, 339, 4, 3, 10, 2, 10, 10);

    img.rect(237, 332, 3, 4, 10, 2, 10, 10);
    img.rect(239, 332, 2, 7, 10, 2, 10, 10);

    //}

    //pipes {

    img.push();
    img.translate(0, 0);
    img.stroke(50);
    img.strokeWeight(1);
    img.fill(100);
    img.rect(6, 285, 40, 60, 15, 15, 0, 0);
    img.noStroke();
    img.fill(125);
    img.rect(12, 285, 34, 60, 15, 15, 0, 0);
    img.stroke(50);
    img.strokeWeight(1);
    img.arc(35, 318, 20, 5, p5.radians(-103), p5.radians(3));

    img.stroke(75);
    img.fill(100);
    img.ellipse(27, 300, 30, 25);
    img.ellipse(27, 299, 29, 22);
    img.fill(115);
    img.ellipse(27, 298, 23, 18);

    img.fill(100);
    img.ellipse(27, 331, 30, 25);
    img.ellipse(27, 330, 29, 22);
    img.fill(115);
    img.ellipse(27, 329, 23, 18);

    img.stroke(25);
    img.line(19, 325, 35, 325);
    img.line(17, 328, 37, 328);
    img.line(19, 332, 35, 332);

    img.line(19, 294, 35, 294);
    img.line(17, 298, 37, 298);
    img.line(19, 302, 35, 302);

    img.pop();

    img.push();
    img.translate(115, 0);
    img.stroke(50);
    img.strokeWeight(1);
    img.fill(100);
    img.rect(6, 285, 40, 60, 15, 15, 0, 0);
    img.noStroke();
    img.fill(125);
    img.rect(12, 285, 34, 60, 15, 15, 0, 0);
    img.stroke(50);
    img.strokeWeight(1);
    img.arc(35, 318, 20, 5, p5.radians(-103), p5.radians(3));

    img.stroke(75);
    img.fill(100);
    img.ellipse(27, 300, 30, 25);
    img.ellipse(27, 299, 29, 22);
    img.fill(115);
    img.ellipse(27, 298, 23, 18);

    img.fill(100);
    img.ellipse(27, 331, 30, 25);
    img.ellipse(27, 330, 29, 22);
    img.fill(115);
    img.ellipse(27, 329, 23, 18);

    img.stroke(25);
    img.line(19, 325, 35, 325);
    img.line(17, 328, 37, 328);
    img.line(19, 332, 35, 332);

    img.line(19, 294, 35, 294);
    img.line(17, 298, 37, 298);
    img.line(19, 302, 35, 302);
    img.pop();

    img.push();
    img.translate(238, 0);
    img.stroke(50);
    img.strokeWeight(1);
    img.fill(100);
    img.rect(6, 285, 40, 60, 15, 15, 0, 0);
    img.noStroke();
    img.fill(125);
    img.rect(12, 285, 34, 60, 15, 15, 0, 0);
    img.stroke(50);
    img.strokeWeight(1);
    img.arc(35, 318, 20, 5, p5.radians(-103), p5.radians(3));

    img.stroke(75);
    img.fill(100);
    img.ellipse(27, 300, 30, 25);
    img.ellipse(27, 299, 29, 22);
    img.fill(115);
    img.ellipse(27, 298, 23, 18);

    img.fill(100);
    img.ellipse(27, 331, 30, 25);
    img.ellipse(27, 330, 29, 22);
    img.fill(115);
    img.ellipse(27, 329, 23, 18);

    img.stroke(25);
    img.line(19, 325, 35, 325);
    img.line(17, 328, 37, 328);
    img.line(19, 332, 35, 332);

    img.line(19, 294, 35, 294);
    img.line(17, 298, 37, 298);
    img.line(19, 302, 35, 302);
    img.pop();

    //}

    //}

    img.pop();

    return img.get();
  },

  weapons_room: function (x, y, s) {
    p5.background(0, 0);
    p5.push();
    p5.translate(x + 1 + 135 * s, y + 1 + 153 * s);
    p5.scale(s);

    //{

    // p5.floor body
    p5.fill(194, 182, 154);
    p5.stroke(0);
    p5.strokeWeight(1);
    p5.strokeCap(p5.SQUARE);
    p5.strokeJoin(p5.MITER);
    p5.beginShape();
    p5.vertex(-59, -110);
    p5.vertex(9, -110);
    p5.vertex(138, 17);
    p5.vertex(76, 16);
    p5.bezierVertex(76, 16, 78, 45, 56, 69);
    p5.vertex(55, 165);
    p5.vertex(-36, 165);
    p5.vertex(-36, 95);
    p5.bezierVertex(-36, 95, -47, 94, -57, 86);
    p5.vertex(-133, 85);
    p5.vertex(-133, 80);
    p5.vertex(-139, 80);
    p5.vertex(-140, 13);
    p5.vertex(-96, 13);
    p5.bezierVertex(-96, 13, -94, -28, -63, -52);
    p5.vertex(-63, -110);
    p5.endShape(p5.CLOSE);

    // floor texture
    p5.noFill();
    p5.stroke(0, 0, 0, 60);
    p5.strokeWeight(1);
    p5.beginShape();
    p5.vertex(-140, 18);
    p5.vertex(-93, 19);
    p5.bezierVertex(-93, 19, -89, 19, -89, 14);
    p5.bezierVertex(-89, 14, -95, -17, -60, -46);
    p5.bezierVertex(-60, -46, -57, -46, -58, -52);
    p5.vertex(-58, -110);
    p5.endShape();
    p5.beginShape();
    p5.vertex(-133, 80);
    p5.vertex(-58, 79);
    p5.bezierVertex(-58, 79, -55, 79, -54, 80);
    p5.bezierVertex(-54, 80, -43, 89, -37, 88);
    p5.endShape();
    p5.line(131, 12, 74, 12);
    p5.stroke(0, 0, 0, 70);
    p5.strokeWeight(1);
    p5.ellipse(-10, 15, 137, 134);

    //} floor

    //{

    // vent metal
    p5.fill(150);
    p5.stroke(0);
    p5.strokeWeight(1.5);
    p5.beginShape();
    p5.vertex(-46, -94);
    p5.vertex(-46, -80);
    p5.bezierVertex(-46, -80, -46, -77, -42, -77);
    p5.vertex(-21, -77);
    p5.bezierVertex(-21, -77, -16, -76, -16, -81);
    p5.vertex(-16, -93);
    p5.bezierVertex(-16, -93, -16, -98, -21, -98);
    p5.vertex(-40, -98);
    p5.bezierVertex(-40, -97, -46, -99, -46, -94);
    p5.endShape(p5.CLOSE);
    // cracks

    p5.noFill();
    p5.stroke(0, 150);
    p5.strokeWeight(1);
    p5.line(-43, -94, -21, -94);
    p5.line(-43, -90, -20, -90);
    p5.line(-43, -86, -20, -86);
    p5.line(-43, -81, -20, -81);

    //} vent

    //{

    // base top
    p5.fill(99, 108, 136);
    p5.stroke(0);
    p5.strokeWeight(1.5);
    p5.beginShape();
    p5.vertex(26, 34);
    p5.bezierVertex(26, 34, 51, 21, 40, -4);
    p5.bezierVertex(40, -4, 32, -26, -3, -28);
    p5.bezierVertex(-3, -28, -27, -30, -44, -15);
    p5.bezierVertex(-44, -15, -66, 1, -46, 28);
    p5.bezierVertex(-46, 28, -38, 38, -23, 41);
    p5.vertex(-21, 33);
    p5.bezierVertex(-21, 33, 4, 36, 18, 26);
    p5.endShape(p5.CLOSE);
    // base sides
    p5.fill(64, 70, 89);
    p5.beginShape();
    p5.vertex(26, 34);
    p5.vertex(29, 40);
    p5.bezierVertex(29, 40, 40, 33, 42, 24);
    p5.vertex(41, 17);
    p5.bezierVertex(41, 17, 36, 30, 26, 34);
    p5.endShape(p5.CLOSE);
    p5.beginShape();
    p5.vertex(-23, 41);
    p5.vertex(-24, 49);
    p5.bezierVertex(-24, 49, -63, 45, -54, 0);
    p5.bezierVertex(-54, 0, -59, 31, -23, 41);
    p5.endShape(p5.CLOSE);
    // p5.red things (fastening to p5.floor?)
    p5.fill(160, 44, 44);
    p5.stroke(40, 11, 11);
    p5.beginShape();
    p5.vertex(33, 8);
    p5.bezierVertex(33, 8, 53, 1, 50, 28);
    p5.bezierVertex(50, 28, 41, 35, 40, 29);
    p5.bezierVertex(40, 29, 41, 16, 32, 19);
    p5.bezierVertex(32, 19, 25, 16, 33, 8);
    p5.endShape(p5.CLOSE);
    p5.beginShape();
    p5.vertex(15, -21);
    p5.bezierVertex(15, -21, 13, -10, 31, -16);
    p5.vertex(33, -14);
    p5.bezierVertex(33, -14, 38, -23, 25, -29);
    p5.bezierVertex(25, -29, 16, -29, 15, -21);
    p5.endShape(p5.CLOSE);
    p5.beginShape();
    p5.vertex(-50, -15);
    p5.bezierVertex(-50, -15, -56, -10, -55, -5);
    p5.bezierVertex(-55, -5, -54, -2, -50, -5);
    p5.bezierVertex(-50, -5, -44, 0, -39, -7);
    p5.bezierVertex(-39, -7, -36, -19, -50, -15);
    p5.endShape(p5.CLOSE);
    p5.beginShape();
    p5.vertex(-49, 40);
    p5.bezierVertex(-49, 40, -51, 22, -35, 24);
    p5.bezierVertex(-35, 24, -27, 27, -32, 34);
    p5.bezierVertex(-32, 34, -35, 34, -35, 45);
    p5.bezierVertex(-35, 45, -47, 51, -49, 40);
    p5.endShape(p5.CLOSE);
    // p5.red p5.lines on base
    p5.noFill();
    p5.stroke(160, 44, 44);
    p5.line(-51, 8, -37, 7);
    p5.line(-48, 21, -33, 16);
    p5.line(-22, -23, -19, -13);
    p5.line(9, -24, 1, -12);
    p5.line(18, -4, 32, -9);
    p5.line(20, 6, 36, 3);
    p5.line(17, 17, 28, 24);
    // chair swivel base top
    p5.fill(124, 132, 154);
    p5.stroke(0);
    p5.strokeWeight(1.5);
    p5.beginShape();
    p5.vertex(-16, -10);
    p5.bezierVertex(-16, -10, 2, -14, 12, -2);
    p5.bezierVertex(12, -2, 20, 10, 2, 18);
    p5.bezierVertex(2, 18, -26, 26, -24, 4);
    p5.bezierVertex(-24, 1, -23, -7, -16, -10);
    p5.endShape(p5.CLOSE);
    // chair swivel base 
    p5.fill(28, 31, 46);
    p5.beginShape();
    p5.vertex(14, 7);
    p5.bezierVertex(14, 7, 15, 25, -12, 23);
    p5.vertex(-18, 18);
    p5.bezierVertex(-18, 18, 5, 26, 14, 7);
    p5.endShape(p5.CLOSE);
    // chair
    p5.fill(39, 39, 102);
    p5.strokeWeight(1.5);
    p5.beginShape();
    p5.vertex(-19, -9);
    p5.bezierVertex(-19, -9, -17, -12, -11, -7);
    p5.vertex(4, 3);
    p5.bezierVertex(4, 3, 9, 7, 6, 14);
    p5.bezierVertex(6, 14, -4, 21, -20, 25);
    p5.bezierVertex(-20, 25, -36, 15, -36, 10);
    p5.bezierVertex(-36, 10, -37, 1, -40, -6);
    p5.bezierVertex(-40, -6, -31, 1, -24, 3);
    p5.bezierVertex(-24, 3, -38, -2, -40, -6);
    p5.bezierVertex(-40, -6, -47, -14, -39, -20);
    p5.bezierVertex(-39, -20, -31, -21, -29, -16);
    p5.bezierVertex(-29, -16, -21, -8, -16, -7);
    p5.bezierVertex(-16, -7, -12, -4, -14, 4);
    p5.bezierVertex(-14, 4, -14, 9, -13, 11);
    p5.bezierVertex(-13, 11, -15, 7, -13, 3);
    p5.bezierVertex(-13, 3, -11, -5, -19, -9);
    p5.endShape(p5.CLOSE);
    // shadow on chair
    p5.fill(0, 0, 0, 51);
    p5.noStroke();
    p5.beginShape();
    p5.vertex(-43, -14);
    p5.bezierVertex(-43, -14, -25, 2, -14, 2);
    p5.bezierVertex(-14, 2, -15, 16, -11, 22);
    p5.vertex(-20, 25);
    p5.bezierVertex(-20, 25, -35, 15, -36, 11);
    p5.bezierVertex(-36, 11, -42, -11, -43, -14);
    p5.endShape(p5.CLOSE);
    // another shadow
    p5.fill(0, 0, 0, 38);
    p5.beginShape();
    p5.vertex(-13, 12);
    p5.bezierVertex(-13, 12, 4, 8, 5, 4);
    p5.bezierVertex(5, 4, 8, 8, 6, 14);
    p5.bezierVertex(-1, 18, -10, 21, -10, 21);
    p5.bezierVertex(-10, 21, -13, 17, -13, 12);
    p5.endShape(p5.CLOSE);
    //screen
    p5.noStroke();
    p5.fill(88, 201, 88, 130);
    p5.quad(-9, -80, 40, -50, 39, -10, -6, -36);
    // controls
    p5.fill(120, 33, 33);
    p5.stroke(15, 12, 12);
    p5.strokeWeight(2);
    p5.beginShape();
    p5.vertex(-10, -26);
    p5.vertex(-10, -14);
    p5.bezierVertex(-10, -14, -7, -4, -3, -14);
    p5.vertex(-3, -25);
    p5.bezierVertex(-3, -25, -3, -28, -7, -28);
    p5.bezierVertex(-7, -28, -9, -29, -10, -26);
    p5.endShape(p5.CLOSE);
    p5.beginShape();
    p5.vertex(6, -20);
    p5.vertex(6, -8);
    p5.bezierVertex(6, -8, 8, 2, 12, -8);
    p5.vertex(12, -19);
    p5.bezierVertex(12, -19, 12, -22, 8, -22);
    p5.bezierVertex(8, -22, 6, -23, 6, -20);
    p5.endShape(p5.CLOSE);
    // step up to chair top
    p5.fill(100, 112, 139);
    p5.strokeWeight(1);
    p5.beginShape();
    p5.vertex(-21, 33);
    p5.vertex(-23, 41);
    p5.bezierVertex(-23, 41, 18, 40, 23, 31);
    p5.vertex(19, 26);
    p5.bezierVertex(19, 26, 7, 36, -21, 33);
    p5.endShape(p5.CLOSE);
    // step up to chair side
    p5.fill(107, 117, 148);
    p5.beginShape();
    p5.vertex(-23, 41);
    p5.vertex(-23, 47);
    p5.bezierVertex(-23, 47, 20, 49, 28, 38);
    p5.vertex(26, 34);
    p5.vertex(23, 32);
    p5.bezierVertex(23, 32, 20, 39, -23, 41);
    p5.endShape(p5.CLOSE);

    //} clear asteroids task

    //{

    // wall with power thingy
    p5.fill(65, 54, 43);
    p5.stroke(34, 29, 22);
    p5.strokeWeight(2);
    p5.quad(9, -153, 10, -109, 114, -7, 116, -49);
    // window
    p5.fill(139, 172, 188);
    p5.noStroke();
    p5.quad(16, -142, 16, -109, 110, -17, 111, -49);
    // wall part
    p5.fill(83, 67, 35);
    p5.stroke(33, 27, 16);
    p5.strokeWeight(2);
    p5.quad(116, -50, 114, -7, 139, 16, 139, -26);
    // p5.power thing cable
    p5.noFill();
    p5.stroke(147, 120, 0);
    p5.strokeWeight(3);
    p5.line(125, -17, 125, 2);
    // p5.power box edge
    p5.stroke(0);
    p5.strokeWeight(2);
    p5.beginShape();
    p5.vertex(121, -29);
    p5.vertex(133, -20);
    p5.vertex(133, -6);
    p5.vertex(120, -17);
    p5.endShape();
    // p5.power box
    p5.fill(200);
    p5.noStroke();
    p5.quad(121, -28, 120, -17, 132, -7, 132, -19);

    //} wall with power thingy

    //{

    // top wall
    p5.fill(113, 105, 80);
    p5.stroke(0);
    p5.strokeWeight(1);
    p5.beginShape();
    p5.vertex(-135, -153);
    p5.vertex(8, -154);
    p5.vertex(9, -110);
    p5.vertex(-59, -110);
    p5.vertex(-59, -118);
    p5.bezierVertex(-59, -118, -59, -121, -62, -121);
    p5.bezierVertex(-62, -121, -64, -120, -65, -118);
    p5.vertex(-64, -97);
    p5.vertex(-66, -97);
    p5.bezierVertex(-66, -97, -67, -105, -80, -110);
    p5.vertex(-135, -110);
    p5.endShape(p5.CLOSE);
    // box on wall
    p5.fill(114, 112, 128);
    p5.strokeWeight(1);
    p5.quad(-50, -135, -50, -119, -31, -119, -31, -135);
    p5.fill(26);
    p5.noStroke();
    p5.quad(-48, -132, -48, -122, -33, -122, -33, -132);
    p5.fill(113, 106, 81);

    //} top wall

    //{

    // thing that looks like a stove or something xD
    p5.fill(54, 54, 103);
    p5.stroke(0);
    p5.strokeWeight(1.4);
    p5.beginShape();
    p5.vertex(-135, -139);
    p5.bezierVertex(-135, -139, -131, -153, -116, -153);
    p5.bezierVertex(-116, -153, -105, -154, -97, -135);
    p5.bezierVertex(-97, -135, -95, -127, -95, -111);
    p5.vertex(-95, -86);
    p5.bezierVertex(-95, -86, -99, -69, -134, -71);
    p5.vertex(-135, -70);
    p5.endShape(p5.CLOSE);
    // p5.red glowy things
    p5.fill(255, 85, 85);
    p5.stroke(26);
    p5.beginShape();
    p5.vertex(-117, -142);
    p5.vertex(-116, -113);
    p5.bezierVertex(-116, -113, -119, -111, -120, -113);
    p5.bezierVertex(-120, -113, -120, -139, -117, -142);
    p5.endShape(p5.CLOSE);
    p5.beginShape();
    p5.vertex(-113, -144);
    p5.bezierVertex(-113, -144, -106, -124, -107, -115);
    p5.bezierVertex(-107, -115, -105, -114, -103, -118);
    p5.bezierVertex(-103, -118, -105, -136, -113, -144);
    p5.endShape(p5.CLOSE);
    p5.beginShape();
    p5.vertex(-108, -146);
    p5.bezierVertex(-108, -146, -96, -127, -96, -123);
    p5.vertex(-96, -126);
    p5.bezierVertex(-96, -126, -97, -142, -108, -146);
    p5.endShape(p5.CLOSE);
    p5.beginShape();
    p5.vertex(-122, -142);
    p5.bezierVertex(-122, -142, -129, -127, -128, -115);
    p5.bezierVertex(-128, -115, -136, -118, -122, -142);
    p5.endShape(p5.CLOSE);
    p5.beginShape();
    p5.vertex(-134, -126);
    p5.bezierVertex(-134, -126, -132, -139, -124, -145);
    p5.bezierVertex(-124, -145, -138, -138, -134, -126);
    p5.endShape(p5.CLOSE);
    // more cracks things without glow
    p5.fill(26);
    p5.noStroke();
    p5.beginShape();
    p5.vertex(-127, -149);
    p5.bezierVertex(-127, -149, -117, -146, -122, -151);
    p5.bezierVertex(-123, -151, -126, -151, -127, -149);
    p5.endShape(p5.CLOSE);
    p5.beginShape();
    p5.vertex(-117, -152);
    p5.bezierVertex(-117, -152, -117, -146, -114, -152);
    p5.bezierVertex(-114, -152, -114, -152, -117, -152);
    p5.endShape(p5.CLOSE);
    p5.beginShape();
    p5.vertex(-110, -152);
    p5.bezierVertex(-110, -152, -117, -148, -108, -150);
    p5.bezierVertex(-108, -150, -108, -151, -110, -152);
    p5.endShape(p5.CLOSE);

    // p5.texture on p5.blue-ish thingy
    p5.noFill();
    p5.stroke(13);
    p5.beginShape();
    p5.vertex(-135, -117);
    p5.bezierVertex(-135, -117, -128, -105, -108, -110);
    p5.bezierVertex(-108, -110, -98, -113, -95, -125);
    p5.endShape();
    p5.strokeWeight(1);
    p5.beginShape();
    p5.vertex(-135, -113);
    p5.bezierVertex(-135, -113, -127, -103, -110, -107);
    p5.bezierVertex(-110, -107, -100, -108, -95, -119);
    p5.endShape();
    p5.beginShape();
    p5.vertex(-114, -105);
    p5.vertex(-114, -98);
    p5.bezierVertex(-114, -98, -104, -96, -102, -101);
    p5.vertex(-103, -107);
    p5.bezierVertex(-103, -107, -109, -104, -114, -105);
    p5.endShape(p5.CLOSE);
    p5.strokeWeight(1);
    p5.line(-110, -104, -110, -99);
    p5.line(-106, -104, -106, -99);
    // light shading
    p5.fill(255, 255, 255, 26);
    p5.noStroke();
    p5.beginShape();
    p5.vertex(-131, -124);
    p5.bezierVertex(-131, -124, -117, -112, -120, -95);
    p5.bezierVertex(-120, -95, -103, -90, -102, -80);
    p5.vertex(-102, -78);
    p5.bezierVertex(-102, -78, -95, -82, -95, -86);
    p5.vertex(-95, -126);
    p5.bezierVertex(-95, -126, -96, -150, -118, -153);
    p5.bezierVertex(-118, -153, -133, -139, -131, -124);
    p5.endShape(p5.CLOSE);

    // p5.blue p5.green p5.floor in top p5.LEFT section
    p5.fill(31, 107, 107);
    p5.stroke(0);
    p5.beginShape();
    p5.vertex(-94, -86);
    p5.bezierVertex(-94, -86, -98, -79, -101, -78);
    p5.bezierVertex(-101, -78, -101, -60, -101, -58);
    p5.bezierVertex(-101, -58, -95, -43, -78, -38);
    p5.bezierVertex(-78, -38, -69, -49, -63, -52);
    p5.vertex(-63, -97);
    p5.vertex(-66, -97);
    p5.bezierVertex(-66, -97, -63, -84, -69, -81);
    p5.bezierVertex(-69, -81, -73, -79, -84, -79);
    p5.bezierVertex(-84, -79, -87, -79, -88, -84);
    p5.bezierVertex(-88, -84, -88, -88, -93, -87);
    p5.bezierVertex(-93, -87, -94, -87, -94, -86);
    p5.endShape(p5.CLOSE);

    // p5.texture on p5.floor
    p5.fill(255, 255, 255, 26);
    p5.noStroke();
    p5.beginShape();
    p5.vertex(-64, -71);
    p5.vertex(-95, -71);
    p5.bezierVertex(-95, -71, -99, -68, -95, -65);
    p5.vertex(-82, -64);
    p5.vertex(-82, -56);
    p5.vertex(-77, -49);
    p5.vertex(-72, -53);
    p5.vertex(-75, -56);
    p5.vertex(-75, -65);
    p5.vertex(-64, -65);
    p5.endShape(p5.CLOSE);

    // purple pipe on the right
    p5.fill(78, 25, 82);
    p5.strokeWeight(1);
    p5.beginShape();
    p5.vertex(-96, -110);
    p5.vertex(-81, -110);
    p5.bezierVertex(-81, -110, -68, -107, -66, -93);
    p5.bezierVertex(-66, -93, -63, -84, -71, -81);
    p5.bezierVertex(-71, -81, -87, -77, -87, -82);
    p5.bezierVertex(-87, -82, -87, -88, -92, -87);
    p5.vertex(-97, -87);
    p5.bezierVertex(-97, -87, -99, -88, -99, -98);
    p5.bezierVertex(-99, -98, -100, -110, -96, -110);
    p5.endShape(p5.CLOSE);
    // p5.red dots in pipe
    p5.fill(170, 0, 0);
    p5.stroke(85, 0, 0);
    p5.strokeWeight(1);
    p5.ellipse(-92, -104, 4, 4);
    p5.ellipse(-79, -100, 4, 4);
    p5.fill(219, 78, 78);
    p5.stroke(214, 41, 41);
    p5.ellipse(-72, -89, 4, 4);
    // light shading - right pipe
    p5.fill(255, 255, 255, 26);
    p5.noStroke();
    p5.beginShape();
    p5.vertex(-99, -100);
    p5.bezierVertex(-99, -100, -74, -103, -67, -92);
    p5.bezierVertex(-67, -92, -64, -104, -79, -108);
    p5.bezierVertex(-81, -108, -96, -112, -97, -106);
    p5.endShape(p5.CLOSE);

    // purple pipe running top down
    p5.fill(78, 25, 82);
    p5.stroke(0);
    p5.strokeWeight(1);
    p5.beginShape();
    p5.vertex(-135, -87);
    p5.bezierVertex(-135, -87, -130, -94, -120, -94);
    p5.bezierVertex(-120, -94, -104, -95, -101, -78);
    p5.vertex(-101, -58);
    p5.bezierVertex(-101, -58, -97, -44, -78, -38);
    p5.bezierVertex(-78, -38, -93, -15, -94, -1);
    p5.bezierVertex(-94, -1, -102, -5, -106, -8);
    p5.bezierVertex(-106, -8, -108, -19, -112, -25);
    p5.bezierVertex(-112, -25, -106, -12, -106, -8);
    p5.vertex(-106, 12);
    p5.vertex(-135, 12);
    p5.vertex(-135, -26);
    p5.bezierVertex(-135, -26, -130, -31, -125, -31);
    p5.bezierVertex(-125, -31, -130, -32, -135, -26);
    p5.endShape(p5.CLOSE);
    // p5.red dots in pipe
    p5.fill(212, 0, 0);
    p5.stroke(85, 0, 0);
    p5.strokeWeight(1);
    p5.ellipse(-121, -84, 6, 6);
    p5.ellipse(-121, -66, 6, 6);
    p5.fill(219, 78, 78);
    p5.strokeWeight(1);
    p5.ellipse(-121, -48, 6, 6);
    p5.strokeWeight(1);
    p5.ellipse(-103, -38, 6, 6);
    p5.strokeWeight(1);
    p5.ellipse(-121, -31, 6, 6);
    p5.ellipse(-121, -14, 6, 6);
    p5.ellipse(-121, 4, 6, 6);
    // light shading - top down pipe
    p5.fill(255, 255, 255, 26);
    p5.noStroke();
    p5.beginShape();
    p5.vertex(-126, -92);
    p5.bezierVertex(-126, -92, -118, -96, -109, -90);
    p5.vertex(-109, -64);
    p5.bezierVertex(-109, -64, -104, -41, -81, -34);
    p5.vertex(-89, -18);
    p5.bezierVertex(-89, -18, -105, -26, -107, -30);
    p5.bezierVertex(-107, -30, -112, -33, -113, -27);
    p5.vertex(-113, 12);
    p5.vertex(-125, 12);
    p5.endShape(p5.CLOSE);

    //} top p5.LEFT corner stuff

    //{

    // top p5.floor edge
    p5.fill(116, 103, 67);
    p5.stroke(18, 15, 7);
    p5.strokeWeight(1);
    p5.quad(76, 16, 138, 17, 139, 23, 77, 23);
    // wall underneath top p5.floor
    p5.fill(60, 49, 35);
    p5.stroke(19, 16, 10);
    p5.quad(122, 23, 130, 30, 139, 30, 139, 23);
    // top p5.floor edge p5.curved
    p5.fill(88, 77, 54);
    p5.stroke(25, 22, 11);
    p5.strokeWeight(1);
    p5.beginShape();
    p5.vertex(76, 23);
    p5.bezierVertex(76, 23, 72, 57, 56, 69);
    p5.vertex(56, 76);
    p5.bezierVertex(56, 76, 75, 59, 76, 23);
    p5.endShape(p5.CLOSE);
    // p5.blue-ish p5.green p5.floor
    p5.fill(32, 107, 107);
    p5.noStroke();
    p5.beginShape();
    p5.vertex(77, 23);
    p5.vertex(123, 23);
    p5.vertex(129, 30);
    p5.bezierVertex(129, 30, 113, 30, 102, 50);
    p5.bezierVertex(102, 50, 82, 44, 76, 36);
    p5.bezierVertex(76, 36, 77, 28, 77, 23);
    p5.endShape(p5.CLOSE);

    // purple pipe
    p5.fill(77, 25, 81);
    p5.stroke(0);
    p5.beginShape();
    p5.vertex(138, 30);
    p5.bezierVertex(138, 30, 115, 25, 102, 51);
    p5.bezierVertex(102, 51, 116, 56, 139, 55);
    p5.endShape(p5.CLOSE);
    // p5.circles in pipe
    p5.fill(128, 78, 0);
    p5.strokeWeight(1);
    p5.ellipse(132, 37, 3, 3);
    p5.ellipse(123, 39, 3, 3);
    p5.ellipse(113, 47, 4, 5);
    // light shadow
    p5.fill(255, 255, 255, 40);
    p5.noStroke();
    p5.beginShape();
    p5.vertex(138, 32);
    p5.bezierVertex(138, 32, 119, 31, 115, 44);
    p5.bezierVertex(115, 44, 128, 37, 138, 38);
    p5.endShape(p5.CLOSE);

    // another purple pipe
    p5.fill(75, 28, 79);
    p5.stroke(0);
    p5.strokeWeight(1);
    p5.beginShape();
    p5.vertex(76, 36);
    p5.bezierVertex(76, 36, 97, 57, 139, 55);
    p5.vertex(139, 104);
    p5.bezierVertex(139, 104, 85, 115, 56, 84);
    p5.vertex(56, 75);
    p5.bezierVertex(56, 75, 67, 68, 76, 36);
    p5.endShape(p5.CLOSE);
    // another part of the pipe
    p5.fill(101, 46, 106);
    p5.beginShape();
    p5.vertex(97, 91);
    p5.bezierVertex(97, 91, 89, 95, 96, 101);
    p5.bezierVertex(96, 101, 107, 116, 107, 132);
    p5.bezierVertex(107, 132, 107, 154, 112, 153);
    p5.vertex(139, 154);
    p5.vertex(139, 103);
    p5.vertex(139, 93);
    p5.bezierVertex(139, 93, 112, 93, 109, 95);
    p5.bezierVertex(109, 95, 108, 93, 105, 92);
    p5.endShape();
    // more p5.circles
    p5.fill(128, 78, 0);
    p5.strokeWeight(1);
    p5.ellipse(110, 102, 4, 3);
    p5.ellipse(115, 117, 4, 4);
    p5.ellipse(116, 131, 3, 4);
    p5.ellipse(118, 144, 3, 3);
    // p5.texture in pipe
    p5.fill(0, 0, 0, 77);
    p5.noStroke();
    p5.beginShape();
    p5.vertex(138, 100);
    p5.bezierVertex(138, 100, 117, 97, 117, 102);
    p5.bezierVertex(117, 102, 133, 104, 139, 102);
    p5.endShape(p5.CLOSE);
    p5.beginShape();
    p5.vertex(138, 113);
    p5.bezierVertex(138, 113, 121, 109, 122, 118);
    p5.bezierVertex(122, 118, 134, 121, 139, 116);
    p5.endShape(p5.CLOSE);
    p5.beginShape();
    p5.vertex(138, 128);
    p5.bezierVertex(138, 128, 121, 124, 121, 132);
    p5.bezierVertex(121, 132, 134, 134, 139, 131);
    p5.endShape(p5.CLOSE);
    p5.beginShape();
    p5.vertex(138, 140);
    p5.bezierVertex(138, 140, 121, 136, 121, 144);
    p5.bezierVertex(121, 144, 134, 147, 139, 143);
    p5.endShape(p5.CLOSE);
    // more p5.texture
    p5.noFill();
    p5.stroke(0);
    p5.strokeWeight(1.5);
    p5.bezier(119, 101, 119, 101, 110, 104, 139, 103);
    p5.bezier(122, 115, 122, 115, 115, 119, 139, 118);
    p5.bezier(123, 129, 123, 129, 116, 133, 139, 131);
    p5.bezier(123, 142, 123, 142, 116, 145, 139, 144);
    // p5.circles
    p5.strokeWeight(1);
    p5.fill(198, 57, 57);
    p5.stroke(88, 0, 0);
    p5.ellipse(90, 63, 7, 7);
    p5.fill(0, 0, 0, 128);
    p5.stroke(0);
    p5.ellipse(107, 68, 7, 7);
    p5.ellipse(125, 72, 7, 7);
    // light shading
    p5.fill(255, 255, 255, 38);
    p5.noStroke();
    p5.beginShape();
    p5.vertex(138, 61);
    p5.bezierVertex(126, 62, 105, 57, 90, 52);
    p5.bezierVertex(90, 52, 82, 48, 75, 62);
    p5.bezierVertex(75, 62, 64, 76, 91, 79);
    p5.bezierVertex(91, 79, 122, 85, 138, 83);
    p5.endShape();
    // dark shading on pipe
    p5.fill(78, 25, 82);
    p5.beginShape();
    p5.vertex(101, 91);
    p5.bezierVertex(101, 91, 119, 136, 115, 152);
    p5.bezierVertex(115, 152, 108, 156, 108, 142);
    p5.bezierVertex(108, 142, 106, 130, 107, 126);
    p5.bezierVertex(107, 125, 103, 108, 95, 99);
    p5.bezierVertex(95, 99, 91, 94, 97, 92);
    p5.endShape(p5.CLOSE);
    // p5.blue-ish p5.green p5.floor lower
    p5.fill(31, 107, 107);
    p5.stroke(0);
    p5.strokeWeight(1);
    p5.beginShape();
    p5.vertex(56, 84);
    p5.vertex(55, 155);
    p5.vertex(112, 154);
    p5.bezierVertex(112, 154, 108, 151, 107, 141);
    p5.bezierVertex(107, 141, 107, 121, 103, 115);
    p5.bezierVertex(103, 115, 100, 106, 98, 104);
    p5.bezierVertex(98, 104, 72, 102, 56, 84);
    p5.endShape(p5.CLOSE);
    // shadows on the p5.floor
    p5.fill(0, 0, 0, 77);
    p5.noStroke();
    p5.beginShape();
    p5.vertex(56, 85);
    p5.vertex(56, 100);
    p5.bezierVertex(56, 100, 81, 113, 93, 113);
    p5.bezierVertex(93, 113, 103, 125, 99, 135);
    p5.bezierVertex(100, 138, 96, 144, 106, 153);
    p5.vertex(111, 154);
    p5.bezierVertex(111, 154, 105, 149, 107, 132);
    p5.bezierVertex(107, 132, 106, 117, 98, 105);
    p5.bezierVertex(98, 105, 75, 103, 56, 85);
    p5.endShape(p5.CLOSE);
    p5.quad(77, 23, 77, 30, 129, 29, 122, 23);

    //} bottom right corner stuff

    //{

    // edge of top p5.floor
    p5.fill(117, 104, 67);
    p5.stroke(52, 46, 30);
    p5.strokeWeight(1);
    p5.beginShape();
    p5.vertex(-133, 86);
    p5.vertex(-58, 86);
    p5.bezierVertex(-58, 86, -50, 93, -37, 95);
    p5.vertex(-37, 153);
    p5.vertex(-38, 153);
    p5.vertex(-38, 102);
    p5.bezierVertex(-38, 102, -53, 97, -58, 91);
    p5.vertex(-133, 91);
    p5.endShape(p5.CLOSE);
    // end of purple pipe
    p5.fill(77, 25, 82);
    p5.stroke(0);
    p5.strokeWeight(1.5);
    p5.quad(-106, 91, -107, 119, -133, 95, -133, 91);
    // p5.blue-ish p5.green p5.floor
    p5.fill(31, 107, 107);
    p5.noStroke();
    p5.beginShape();
    p5.vertex(-106, 91);
    p5.vertex(-58, 91);
    p5.bezierVertex(-58, 91, -54, 98, -38, 102);
    p5.vertex(-38, 153);
    p5.vertex(-72, 153);
    p5.vertex(-106, 120);
    p5.endShape(p5.CLOSE);
    // p5.floor p5.texture
    p5.noFill();
    p5.stroke(255, 255, 255, 26);
    p5.strokeWeight(1);
    p5.beginShape();
    p5.vertex(-88, 91);
    p5.vertex(-88, 119);
    p5.bezierVertex(-88, 119, -88, 122, -84, 121);
    p5.vertex(-57, 121);
    p5.endShape();
    p5.fill(255, 255, 255, 26);
    p5.noStroke();
    p5.beginShape();
    p5.vertex(-50, 98);
    p5.vertex(-62, 98);
    p5.bezierVertex(-62, 98, -71, 101, -63, 105);
    p5.vertex(-49, 105);
    p5.vertex(-49, 123);
    p5.bezierVertex(-49, 123, -49, 126, -46, 128);
    p5.vertex(-38, 136);
    p5.vertex(-38, 129);
    p5.bezierVertex(-38, 129, -43, 126, -43, 120);
    p5.vertex(-43, 105);
    p5.vertex(-38, 105);
    p5.vertex(-38, 102);
    p5.bezierVertex(-38, 102, -46, 100, -50, 98);
    p5.endShape(p5.CLOSE);

    //} bottom p5.LEFT stuff

    //{

    // bottom right railing posts
    p5.fill(120, 33, 33);
    p5.stroke(40, 11, 11);
    p5.strokeWeight(1.5);
    p5.beginShape();
    p5.vertex(113, 14);
    p5.vertex(113, 3);
    p5.vertex(108, 3);
    p5.vertex(108, 13);
    p5.bezierVertex(108, 13, 110, 16, 113, 14);
    p5.endShape(p5.CLOSE);
    p5.beginShape();
    p5.vertex(82, 3);
    p5.vertex(88, 3);
    p5.vertex(87, 14);
    p5.bezierVertex(87, 14, 85, 16, 82, 14);
    p5.endShape(p5.CLOSE);
    p5.beginShape();
    p5.vertex(69, 38);
    p5.vertex(70, 47);
    p5.bezierVertex(70, 47, 66, 51, 65, 47);
    p5.bezierVertex(65, 47, 69, 41, 69, 38);
    p5.endShape(p5.CLOSE);
    p5.beginShape();
    p5.vertex(60, 54);
    p5.vertex(60, 62);
    p5.bezierVertex(60, 62, 60, 66, 56, 62);
    p5.vertex(55, 58);
    p5.bezierVertex(55, 58, 60, 55, 60, 54);
    p5.endShape(p5.CLOSE);
    p5.beginShape();
    p5.vertex(73, 24);
    p5.vertex(74, 31);
    p5.bezierVertex(74, 31, 72, 35, 71, 32);
    p5.bezierVertex(71, 32, 73, 27, 73, 24);
    p5.endShape(p5.CLOSE);
    // bottom right railing main bar
    p5.fill(153, 42, 42);
    p5.beginShape();
    p5.vertex(50, 164);
    p5.vertex(50, 58);
    p5.bezierVertex(50, 58, 71, 44, 68, 8);
    p5.bezierVertex(68, 8, 68, -1, 80, -1);
    p5.vertex(129, -1);
    p5.bezierVertex(129, -1, 136, -2, 136, 7);
    p5.vertex(137, 14);
    p5.bezierVertex(137, 14, 134, 17, 132, 14);
    p5.vertex(132, 8);
    p5.bezierVertex(132, 8, 133, 3, 127, 3);
    p5.vertex(77, 3);
    p5.bezierVertex(77, 3, 74, 3, 73, 8);
    p5.bezierVertex(73, 8, 78, 40, 55, 59);
    p5.vertex(55, 165);
    p5.endShape(p5.CLOSE);

    // bottom p5.LEFT railing posts
    p5.fill(120, 33, 33);
    p5.stroke(40, 11, 11);
    p5.strokeWeight(1.5);
    p5.beginShape();
    p5.vertex(-114, 72);
    p5.vertex(-110, 72);
    p5.vertex(-110, 82);
    p5.bezierVertex(-110, 82, -112, 84, -114, 82);
    p5.endShape(p5.CLOSE);
    p5.beginShape();
    p5.vertex(-89, 73);
    p5.vertex(-85, 73);
    p5.vertex(-85, 83);
    p5.bezierVertex(-85, 83, -87, 86, -89, 83);
    p5.endShape(p5.CLOSE);
    p5.beginShape();
    p5.vertex(-65, 73);
    p5.vertex(-61, 73);
    p5.vertex(-61, 83);
    p5.bezierVertex(-61, 83, -63, 85, -65, 83);
    p5.endShape(p5.CLOSE);
    p5.beginShape();
    p5.vertex(-49, 80);
    p5.vertex(-46, 82);
    p5.vertex(-45, 89);
    p5.bezierVertex(-45, 89, -47, 92, -50, 89);
    p5.endShape(p5.CLOSE);
    // bottom p5.LEFT railing main bar
    p5.fill(152, 42, 42);
    p5.beginShape();
    p5.vertex(-133, 80);
    p5.vertex(-133, 75);
    p5.bezierVertex(-133, 75, -133, 72, -128, 72);
    p5.vertex(-60, 72);
    p5.bezierVertex(-60, 72, -56, 72, -55, 74);
    p5.bezierVertex(-55, 74, -46, 84, -37, 84);
    p5.bezierVertex(-37, 84, -35, 85, -36, 89);
    p5.vertex(-36, 164);
    p5.vertex(-31, 164);
    p5.vertex(-31, 87);
    p5.bezierVertex(-31, 87, -31, 80, -38, 79);
    p5.bezierVertex(-38, 79, -46, 78, -51, 71);
    p5.bezierVertex(-51, 71, -54, 67, -61, 68);
    p5.vertex(-133, 68);
    p5.bezierVertex(-133, 68, -137, 68, -137, 73);
    p5.vertex(-138, 80);
    p5.endShape(p5.CLOSE);

    // top p5.LEFT railing posts
    p5.stroke(40, 11, 11);
    p5.fill(120, 33, 33);
    p5.strokeWeight(1.5);
    p5.beginShape();
    p5.vertex(-116, 4);
    p5.vertex(-111, 4);
    p5.vertex(-111, 14);
    p5.bezierVertex(-111, 14, -113, 17, -116, 14);
    p5.endShape(p5.CLOSE);
    p5.beginShape();
    p5.vertex(-97, 4);
    p5.vertex(-93, 3);
    p5.vertex(-93, 15);
    p5.bezierVertex(-93, 15, -95, 17, -98, 15);
    p5.endShape(p5.CLOSE);
    p5.beginShape();
    p5.vertex(-86, -29);
    p5.vertex(-82, -35);
    p5.vertex(-82, -24);
    p5.bezierVertex(-82, -24, -84, -23, -86, -24);
    p5.endShape(p5.CLOSE);
    p5.beginShape();
    p5.vertex(-75, -44);
    p5.vertex(-72, -47);
    p5.vertex(-72, -39);
    p5.bezierVertex(-72, -39, -73, -37, -75, -39);
    p5.endShape(p5.CLOSE);
    p5.beginShape();
    p5.vertex(-64, -51);
    p5.vertex(-61, -55);
    p5.vertex(-61, -48);
    p5.bezierVertex(-61, -48, -62, -47, -64, -48);
    p5.endShape(p5.CLOSE);
    // top p5.LEFT railing main bar
    p5.fill(152, 42, 42);
    p5.stroke(40, 11, 11);
    p5.strokeWeight(1.5);
    p5.beginShape();
    p5.vertex(-139, 14);
    p5.vertex(-139, 5);
    p5.bezierVertex(-139, 5, -139, 0, -131, 0);
    p5.vertex(-101, -1);
    p5.bezierVertex(-101, -1, -96, 0, -96, -6);
    p5.bezierVertex(-96, -6, -100, -33, -68, -55);
    p5.bezierVertex(-68, -55, -62, -57, -64, -65);
    p5.vertex(-64, -118);
    p5.bezierVertex(-64, -118, -63, -120, -61, -120);
    p5.bezierVertex(-61, -120, -60, -120, -59, -118);
    p5.vertex(-60, -60);
    p5.bezierVertex(-60, -60, -59, -53, -65, -51);
    p5.bezierVertex(-65, -51, -93, -36, -92, -3);
    p5.bezierVertex(-92, -3, -92, 4, -99, 4);
    p5.vertex(-131, 4);
    p5.bezierVertex(-131, 4, -134, 4, -134, 7);
    p5.vertex(-135, 14);
    p5.bezierVertex(-135, 14, -136, 16, -137, 16);
    p5.bezierVertex(-137, 16, -139, 16, -139, 14);
    p5.endShape(p5.CLOSE);

    //} railing

    p5.pop();
    return p5.get(0, 0, 276 * s, 320 * s);
  },

  kill_button: function (x, y, s) {
    /** Author: Tiny252112@Tiny252112 **/
    var img = p5.createGraphics(70 * s, 70 * s, p5.P2D);
    img.push();
    img.translate(x, y);
    img.scale(s);
    var o = 35;
    var p = 25;

    img.noStroke();
    //De blod
    img.fill(255, 0, 0);
    img.ellipse(o - 19, p + 12, 10, 28);
    img.ellipse(o, p + 4, 49, 41);
    img.ellipse(o - 9, p + 23, 9, 22);
    img.ellipse(o - 1, p + 26, 10, 25);
    img.ellipse(o + 8, p + 8, 19, 49);
    img.ellipse(o + 20, p + 16, 8, 29);
    img.ellipse(o - 26, p + 31, 7, 10);
    img.ellipse(o + 22, p + 37, 7, 10);
    //De skoll outline
    img.stroke(255, 255, 255);
    img.strokeWeight(4);
    img.fill(0, 0, 0);
    img.ellipse(o, p, 64, 45);
    img.fill(0, 0, 0);
    img.ellipse(o, p + 3, 43, 22);
    img.fill(0, 0, 0);
    img.ellipse(o, p, 50, 21);
    img.fill(0, 0, 0);
    img.noStroke();
    //De skoll
    img.noStroke();
    img.fill(215, 218, 224);
    img.ellipse(o, p, 50, 35);
    img.fill(163, 163, 163);
    img.ellipse(o, p + 3, 43, 22);
    img.fill(215, 218, 224);
    img.ellipse(o, p, 42, 21);
    img.fill(215, 218, 224);
    img.strokeWeight(2);
    img.stroke(0, 0, 0);
    img.quad(o - 10, p + 7, o + 10, p + 7, o + 6, p + 25, o - 6, p + 25);
    //The teeth lines
    img.strokeWeight(1);
    img.stroke(0, 0, 0);
    img.line(o - 1, p + 25, o - 2, p + 14);
    img.line(o + 3, p + 25, o + 3, p + 17);
    //Eyes
    img.fill(150, 0, 0);
    img.quad(o - 7, p - 3, o - 6, p + 7, o - 14, p + 2, o - 15, p - 5);
    img.quad(o + 7, p - 3, o + 6, p + 7, o + 14, p + 2, o + 15, p - 5);
    img.noStroke();
    img.fill(255, 255, 255);
    img.ellipse(o + 11, p - 2, 4, 2);
    img.ellipse(o - 11, p - 2, 4, 2);
    //The eyebrow bone lines
    img.strokeWeight(1.5);
    img.stroke(163, 163, 163);
    img.line(o + 5, p - 5, o + 15, p - 9);
    img.line(o - 5, p - 5, o + 15, p - 9);
    img.line(o + 19, p, o + 19, p - 5);
    img.line(o - 19, p, o - 19, p - 5);
    //"KILL"
    img.strokeWeight(6);
    img.stroke(158, 0, 0);
    img.line(o - 23, p + 13, o - 28, p - 14);
    img.line(o - 32, p + 1, o - 14, p - 18);
    img.line(o - 28, p - 3, o - 12, p + 10);
    img.line(o - 6, p + 12, o - 7, p - 13);
    img.line(o + 4, p + 12, o + 1, p - 14);
    img.line(o + 5, p + 12, o + 12, p + 7);
    img.line(o + 18, p + 12, o + 15, p - 14);
    img.line(o + 19, p + 12, o + 26, p + 7);
    img.strokeWeight(4);
    img.stroke(0, 0, 0);
    img.line(o - 23, p + 13, o - 28, p - 14);
    img.line(o - 32, p + 1, o - 14, p - 18);
    img.line(o - 28, p - 3, o - 12, p + 10);
    img.line(o - 6, p + 12, o - 7, p - 13);
    img.line(o + 4, p + 12, o + 1, p - 14);
    img.line(o + 5, p + 12, o + 12, p + 7);
    img.line(o + 18, p + 12, o + 15, p - 14);
    img.line(o + 19, p + 12, o + 26, p + 7);

    img.pop();
    return img.get();
  },

  report_button: function (x, y, s) {
    /** Author: Tiny252112@Tiny252112 **/
    var img = p5.createGraphics(80, 80, p5.P2D);
    img.push();
    img.translate(-157, -104);
    img.scale(0.95 * s);
    var x = 136;
    var y = 28;
    //Red poof background(sorry, it needs to be smoother but I don't know how)
    img.stroke(255, 255, 255);
    img.strokeWeight(5);
    img.triangle(171, 124, 187, 140, 184, 160);
    img.triangle(184, 138, 199, 143, 197, 119);
    img.triangle(193, 138, 231, 124, 208, 154);
    img.triangle(208, 158, 241, 146, 215, 136);
    img.triangle(227, 146, 230, 169, 217, 157);
    img.triangle(182, 142, 186, 159, 169, 152);
    img.triangle(183, 154, 175, 169, 192, 167);
    img.triangle(190, 166, 197, 185, 202, 169);
    img.triangle(198, 170, 225, 157, 220, 179);
    img.noStroke();
    img.fill(255, 0, 0);
    img.triangle(171, 124, 187, 140, 184, 160);
    img.triangle(184, 138, 199, 143, 197, 119);
    img.triangle(193, 138, 231, 124, 208, 154);
    img.triangle(208, 158, 241, 146, 215, 136);
    img.triangle(227, 146, 230, 169, 217, 157);
    img.triangle(182, 142, 186, 159, 169, 152);
    img.triangle(183, 154, 175, 169, 192, 167);
    img.triangle(190, 166, 197, 185, 202, 169);
    img.triangle(198, 170, 225, 157, 220, 179);
    img.ellipse(200, 152, 47, 37);
    img.rotate(p5.radians(20));
    //Megaphone
    img.stroke(77, 77, 77);
    img.strokeWeight(3.25);
    img.fill(219, 219, 219);
    img.ellipse(x + 84, y + 46, 13, 43);
    img.triangle(x + 87, y + 26, x + 122, y + 48, x + 87, y + 66);
    img.rect(x + 108, y + 39, 20, 17);
    img.noStroke();
    img.fill(117, 0, 0);
    img.rect(x + 101, y + 33, 9, 28);
    img.fill(255, 0, 0);
    img.rect(x + 102, y + 35, 7, 16);
    img.stroke(117, 117, 117);
    img.noStroke();
    img.fill(219, 219, 219);
    img.ellipse(x + 84, y + 46, 13, 43);
    img.triangle(x + 87, y + 26, x + 122, y + 48, x + 87, y + 66);
    img.rect(x + 108, y + 39, 20, 17);
    img.fill(117, 0, 0);
    img.rect(x + 101, y + 33, 9, 28);
    img.fill(255, 0, 0);
    img.rect(x + 102, y + 35, 7, 16);
    img.stroke(117, 117, 117);
    img.strokeWeight(1.5);
    img.fill(115, 115, 115);
    img.quad(x + 134, y + 52, x + 133, y + 42, x + 128, y + 38, x + 128, y + 56);
    img.fill(191, 191, 191);
    img.quad(x + 134, y + 49, x + 133, y + 42, x + 128, y + 38, x + 128, y + 49);
    img.noStroke();
    img.fill(158, 158, 158);
    img.ellipse(x + 85, y + 46, 10, 31);
    img.fill(219, 219, 219);
    img.ellipse(x + 89, y + 45, 10, 30);
    img.fill(117, 117, 117);
    img.rect(x + 115, y + 57, 10, 14);
    img.rotate(p5.radians(-20));
    img.stroke(0, 0, 0);
    img.strokeWeight(3);
    img.stroke(255, 255, 255);
    img.strokeWeight(5);
    //var f = p5.loadFont("cursive");
    //!font//p5.textFont(f);
    img.textSize(21);
    img.fill(255, 255, 255);
    img.text("REPORT", x + 31, y + 129, 100, 100);
    img.fill(173, 0, 0);
    img.textSize(19);
    img.text("REPORT", x + 36, y + 130, 100, 100);
    img.fill(0, 0, 0);
    img.textSize(19);
    img.text("REPORT", x + 35, y + 130, 100, 100);

    img.pop();

    return img.get();
  },

  security_room: function (x, y, s) {
    //The security computer area was made by Dream @DreamWasntTaken
    //Idk I tried I guess ¯\_(ツ)_/¯

    p5.background(77, 20, 77);
    var securityComputer = function (img, x, y, s) {
      /** Author: Dream@DreamWasntTaken **/
      img.push();
      img.translate(x, y);
      img.scale(s);
      img.strokeWeight(3);
      img.fill(179, 204, 197);
      img.quad(118, 23, 0, 105, 2, 183, 117, 102);

      img.rect(117, 23, 108, 78);
      img.quad(225, 23, 348, 105, 353, 183, 225, 102);

      img.strokeWeight(2);
      img.fill(107, 128, 125);
      img.quad(250, 38, 308, 67, 320, 133, 258, 94);
      img.quad(109, 87, 66, 109, 73, 65, 119, 36);
      img.quad(233, 26, 222, 84, 128, 84, 116, 27);
      img.fill(210, 250, 239);
      img.quad(255, 46, 302, 70, 314, 125, 263, 93);
      img.quad(104, 86, 72, 102, 79, 68, 114, 44);
      img.quad(226, 39, 218, 79, 132, 79, 122, 38);
      img.stroke(53, 59, 64);
      img.strokeWeight(5);
      img.line(230, 29, 118, 30);

      img.strokeWeight(3);
      img.noFill();
      img.beginShape();
      img.curveVertex(12, -12);
      img.curveVertex(83, 103); //no
      img.curveVertex(108, 116);
      img.curveVertex(126, 114);
      img.curveVertex(123, 69); //dont moove
      img.curveVertex(201, 115);
      img.endShape();

      img.beginShape();
      img.curveVertex(232, -40);
      img.curveVertex(283, 113); //no
      img.curveVertex(293, 145);
      img.curveVertex(258, 136);
      img.curveVertex(230, 54); //dont moove
      img.curveVertex(201, 154);
      img.endShape();

      img.stroke(0, 0, 0);
      img.strokeWeight(2);
      img.fill(128, 106, 87);
      img.beginShape();
      img.curveVertex(128, -68);
      img.curveVertex(221, 86); //no
      img.curveVertex(229, 116);
      img.curveVertex(126, 114);
      img.curveVertex(131, 83); //dont moove
      img.curveVertex(124, 130);
      img.endShape();
      img.fill(207, 185, 166);
      img.strokeWeight(1);
      img.beginShape();
      img.stroke(207, 185, 166);
      img.vertex(134, 85);
      img.vertex(216, 84);
      img.vertex(229, 105);
      img.vertex(221, 112);
      img.vertex(141, 112);
      img.vertex(122, 105);
      img.endShape(p5.CLOSE);
      img.fill(255, 255, 255);
      img.rect(138, 90, 42, 11);
      img.ellipse(204, 94, 10, 12);
      img.stroke(255, 111, 0);
      img.fill(191, 152, 107);
      img.quad(331, 93, 332, 133, 327, 128, 327, 90);
      img.stroke(0, 0, 0);
      img.fill(255, 255, 255);
      img.quad(325, 148, 324, 129, 340, 137, 341, 157);
      img.strokeWeight(3);
      img.fill(112, 111, 111);
      img.quad(11, 115, 12, 193, 59, 160, 57, 83);
      img.fill(56, 47, 47);
      img.quad(-3, 109, -1, 185, 14, 194, 12, 113);
      img.quad(-3, 109, 39, 77, 56, 83, 12, 113);
      img.line(22, 93, 31, 96);
      img.line(31, 96, 37, 175);
      img.line(57, 103, 13, 138);
      img.strokeWeight(5);
      img.stroke(255, 0, 0);
      img.point(27, 136);
      img.point(41, 127);
      img.point(53, 145);
      img.stroke(0, 255, 17);
      img.point(52, 136);
      img.point(22, 166);
      img.point(41, 152);
      img.noFill();
      img.rect(47, 139, 12, 12);
    };
    var restOfSecurity = function (s) {
      /** Author: CaigePrograms **/
      var img = p5.createGraphics(262 * s, 484 * s, p5.P2D);
      img.background(0, 0);
      img.push();
      img.scale(s);
      img.translate(-50, 0);

      img.strokeWeight(3);
      img.noStroke();
      img.fill(58, 105, 94);
      img.rect(57, 62, 57 + 192, 387 + 32);
      img.fill(85, 132, 110);
      img.arc(307 - 141, 50, 270, 250, p5.radians(10), p5.radians(145));

      img.stroke(66, 100, 84);
      img.strokeWeight(2);
      img.line(307 - 31, 387 + 93, 57 + 250 - 31, 62);
      img.line(307 - 93, 387 + 93, 57 + 250 - 93, 62);
      img.line(307 - 155, 387 + 93, 57 + 250 - 155, 62);
      img.line(307 - 217, 387 + 93, 57 + 250 - 217, 62);
      img.line(57, 480 - 31, 57 + 250, 480 - 31);
      img.line(57, 480 - 93, 57 + 250, 480 - 93);
      img.line(57, 480 - 155, 57 + 250, 480 - 155);
      img.line(57, 480 - 217, 57 + 250, 480 - 217);
      img.line(57, 480 - 279, 57 + 250, 480 - 279);
      img.line(57, 480 - 341, 57 + 250, 480 - 341);
      img.line(57, 480 - 403, 57 + 250, 480 - 403);

      img.stroke(0);
      img.fill(35, 40, 49);
      img.rect(57 + 240, 450, 10, 30);
      img.rect(57 + 240, 420, 10, 30);
      img.rect(57, 450, 10, 30);
      img.rect(57, 420, 10, 30);
      img.fill(120, 135, 140);
      img.rect(230, 440, 40, 27, 4);
      img.stroke(61, 75, 87);
      img.line(235, 446, 265, 446);
      img.line(235, 450, 265, 450);
      img.line(235, 454, 265, 454);
      img.line(235, 458, 265, 458);
      img.line(235, 462, 265, 462);

      img.noStroke();
      img.fill(30, 67, 64, 100);
      img.rect(307 - 55, 480 - 115, 55, 20, 0, 0, 0, 10);
      img.rect(307 - 101, 480 - 195, 45, 20, 0, 0, 0, 10);
      img.rect(307 - 96, 387 + 120 - 195, 36, 26, 20);

      img.stroke(41, 36, 28);
      img.fill(91, 76, 58);
      img.rect(307 - 101, 480 - 230, 101, 40, 10, 0, 0, 10);
      img.rect(307 - 55, 480 - 190, 55, 80, 0, 0, 0, 10);
      img.noStroke();
      img.rect(307 - 53, 480 - 191, 53, 10, 0, 0, 0, 10);
      img.stroke(41, 36, 28);
      img.noFill();
      img.strokeWeight(5);
      img.line(307 - 91, 480 - 190, 57 + 193, 387 + 93 - 190);
      img.line(307 - 48, 480 - 110, 57 + 248, 387 + 93 - 110);
      img.arc(307 - 93, 480 - 195, 10, 10, p5.radians(90), p5.radians(180));
      img.arc(307 - 48, 480 - 115, 10, 10, p5.radians(90), p5.radians(180));

      img.strokeWeight(2);
      img.stroke(56, 63, 56);
      img.fill(156, 186, 176);
      img.quad(307 - 38, 480 - 194, 307 - 54, 480 - 199, 307 - 40, 480 - 223, 307 - 26, 480 - 214);
      img.stroke(0);
      img.strokeWeight(1);
      img.line(307 - 39, 480 - 200, 307 - 48, 480 - 205);
      img.line(307 - 37, 480 - 203, 307 - 46, 480 - 208);
      img.line(307 - 35, 480 - 206, 307 - 44, 480 - 211);
      img.line(307 - 33, 480 - 209, 307 - 42, 480 - 214);
      img.strokeWeight(2);
      img.stroke(56, 63, 56);
      img.quad(307 - 46, 480 - 193, 307 - 60, 480 - 200, 307 - 48, 480 - 220, 307 - 34, 480 - 212);
      img.stroke(0);
      img.strokeWeight(1);
      img.line(307 - 46, 480 - 198, 307 - 55, 480 - 203);
      img.line(307 - 44, 480 - 201, 307 - 53, 480 - 206);
      img.line(307 - 42, 480 - 204, 307 - 51, 480 - 209);
      img.line(307 - 40, 480 - 207, 307 - 49, 480 - 212);
      img.strokeWeight(3);
      img.stroke(31, 38, 42);
      img.fill(31, 38, 42);
      img.quad(307 - 43, 480 - 148, 307 - 35, 480 - 139, 307 - 29, 480 - 143, 307 - 38, 480 - 153);
      img.quad(307 - 31, 480 - 151, 307 - 17, 480 - 148, 307 - 16, 480 - 154, 307 - 29, 480 - 159);
      img.fill(103, 106, 118);
      img.ellipse(307 - 39, 480 - 148, 6, 6);
      img.ellipse(307 - 35, 480 - 144, 6, 6);
      img.ellipse(307 - 27, 480 - 154, 6, 6);
      img.ellipse(307 - 20, 480 - 152, 6, 6);
      img.stroke(60, 49, 37);
      img.fill(160, 150, 127);
      img.beginShape();
      img.quad(307 - 38, 480 - 175, 307 - 24, 480 - 162, 307 - 12, 480 - 173, 307 - 29, 480 - 190);
      img.endShape();
      img.noStroke();
      img.fill(48, 55, 75);
      img.rect(307 - 91, 480 - 234, 16, 16, 4);

      img.strokeWeight(2);
      img.fill(78, 89, 90);
      img.stroke(24, 36, 40);
      img.rect(307 - 84, 480 - 161, 10, 10, 20);

      img.fill(98, 115, 91);
      img.stroke(39, 55, 39);
      img.rect(307 - 96, 480 - 183, 36, 26, 20);
      img.noStroke();
      img.fill(60, 82, 60);
      img.rect(307 - 92, 480 - 162, 30, 5, 0, 0, 20, 20);
      img.noFill();
      img.stroke(39, 55, 39);
      img.rect(307 - 96, 480 - 183, 36, 26, 20);

      img.fill(78, 89, 90);
      img.stroke(24, 36, 40);
      img.rect(307 - 138, 480 - 375, 10, 10, 20);
      img.fill(115, 123, 96);
      img.stroke(47, 56, 50);
      img.rect(307 - 151, 480 - 399, 36, 26, 20);
      img.noStroke();
      img.fill(84, 86, 61);
      img.rect(307 - 146, 480 - 378, 26, 6, 20);
      img.noFill();
      img.stroke(47, 56, 50);
      img.rect(307 - 151, 480 - 399, 36, 26, 20);
      img.fill(84, 86, 61);
      img.rect(300 - 151, 480 - 407, 36, 26, 20);
      img.noStroke();
      img.fill(115, 123, 96);
      img.rect(300 - 147, 480 - 407, 27, 7, 20);
      img.noFill();
      img.stroke(47, 56, 50);
      img.rect(300 - 151, 480 - 407, 36, 26, 20);
      img.fill(78, 89, 90);
      img.stroke(24, 36, 40);
      img.rect(307 - 147, 480 - 393, 10, 10, 20);
      img.strokeWeight(5);
      img.line(307 - 138, 480 - 373, 307 - 142, 387 + 93 - 382);

      img.strokeWeight(3);
      img.stroke(0);
      img.line(57, 75, 57, 200);
      img.line(57, 480, 57, 387);
      img.line(57, 480, 57 + 250, 387 + 93);
      img.line(307, 480, 57 + 250, 62);

      img.stroke(0);
      securityComputer(img, 59, -12, 0.71);
      img.pop();
      return img.get();
    };
    return restOfSecurity(s);
  },

  medbay_room: function (x, y, s) {

    //These (i.e. beds boxes by the entrance and the vent) were made entirely by DauntlessStudios {
    var medBayWallCross = function (img, x, y, s) {
      /** Author: Name@dauntlessStudios **/
      img.push();
      img.translate(x, y);
      img.scale(s);

      // Code
      img.noStroke();
      img.fill(184, 68, 101);
      img.rect(1, 0, 5, 14);
      img.rect(-4, 4, 15, 5);
      img.pop();
    };
    var medBayWallLeft = function (img, x, y, s) {
      /** Author: Name@dauntlessStudios **/
      img.push();
      img.translate(x, y);
      img.scale(s);

      // Code
      img.strokeWeight(2);
      img.stroke(41, 41, 41);
      img.fill(167, 209, 207);
      img.rect(0, 0, 100, 60);

      img.noStroke();
      img.fill(116, 191, 214);
      img.rect(1, 41, 98, 10);
      img.fill(63, 165, 196);
      img.rect(1, 47, 98, 12);

      img.strokeWeight(2);
      img.stroke(41, 41, 41);
      img.noFill();
      img.line(44, 0, 44, 58);
      img.line(0, 19, 100, 19);
      img.line(0, 10, 100, 10);

      img.line(37, 14, 40, 14);
      img.line(48, 55, 50, 55);

      medBayWallCross(img, 71, 24, 1);

      img.pop();
    };
    var medBayWallRight = function (img, x, y, s) {
      /** Author: Name@dauntlessStudios **/
      img.push();
      img.translate(x, y);
      img.scale(s);

      // Code
      img.strokeWeight(2);
      img.stroke(41, 41, 41);
      img.fill(167, 209, 207);
      img.rect(0, 0, 100, 60);

      img.noStroke();
      img.fill(116, 191, 214);
      img.rect(1, 41, 98, 10);
      img.fill(63, 165, 196);
      img.rect(1, 47, 98, 12);

      img.strokeWeight(2);
      img.stroke(41, 41, 41);
      img.noFill();
      img.line(63, 0, 63, 58);
      img.line(0, 19, 100, 19);
      img.line(0, 10, 100, 10);

      img.line(68, 14, 70, 14);
      img.line(57, 55, 59, 55);

      medBayWallCross(img, 31, 24, 1);

      img.pop();
    };
    var vent = function (img, x, y, s) {
      /** Author: Name@dauntlessStudios **/
      img.push();
      img.translate(x, y);
      img.scale(s);

      // Code
      img.stroke(61, 61, 61);
      img.strokeWeight(2);
      img.fill(133, 133, 133);
      img.rect(0, 0, 25, 20, 1);

      img.noStroke();
      img.fill(59, 59, 59);
      img.arc(13, 6, 20, 4, p5.radians(180), p5.radians(360));
      img.arc(13, 10, 20, 4, p5.radians(180), p5.radians(360));
      img.arc(13, 14, 20, 4, p5.radians(180), p5.radians(360));
      img.arc(13, 18, 20, 4, p5.radians(180), p5.radians(360));
      img.pop();
    };
    var medBayBedRight = function (img, x, y, s) {
      /** Author: Name@dauntlessStudios **/
      img.push();
      img.translate(x, y);
      img.scale(s);

      // Code
      img.strokeWeight(3);
      img.stroke(133, 133, 133);
      img.fill(214, 214, 214);
      img.rect(11, 14, 42, 33, 1, 1, 1, 15);
      img.rect(0, 8, 52, 33, 1);
      img.stroke(112, 111, 112);
      img.fill(54, 100, 168);
      img.rect(0, 0, 52, 35, 0, 0, 2, 5);
      img.noStroke();
      img.fill(56, 155, 201);
      img.rect(4, 1, 50, 29, 0, 0, 2, 5);

      img.stroke(112, 111, 112);
      img.strokeWeight(2);
      img.fill(140, 176, 194);
      img.bezier(35, -2, 62, -10, 53, 5, 54, 29);
      img.bezier(35, -2, 30, 48, 47, 22, 55, 30);
      img.noStroke();
      img.fill(232, 232, 232);
      img.bezier(35, 1, 55, -8, 49, 5, 50, 26);
      img.bezier(37, -2, 29, 45, 47, 14, 50, 28);

      img.strokeWeight(2);
      img.stroke(133, 133, 133);
      img.fill(204, 202, 204);
      img.beginShape();
      img.vertex(44, 43);
      img.vertex(44, 48);
      img.vertex(49, 52);
      img.vertex(54, 52);
      img.vertex(54, 43);
      img.endShape();

      img.beginShape();
      img.vertex(48, 45);
      img.vertex(48, 48);
      img.vertex(49, 48);
      img.vertex(51, 48);
      img.vertex(51, 46);
      img.endShape();

      img.pop();
    };
    var medBayBedLeft = function (img, x, y, s) {
      /** Author: Name@dauntlessStudios **/
      img.push();
      img.translate(x, y);
      img.scale(s);

      // Code
      img.strokeWeight(3);
      img.stroke(133, 133, 133);
      img.fill(214, 214, 214);
      img.rect(0, 14, 42, 33, 1, 1, 19, 1);
      img.rect(0, 8, 52, 33, 1);
      img.stroke(112, 111, 112);
      img.fill(54, 100, 168);
      img.rect(0, 0, 52, 35, 0, 0, 2, 5);
      img.noStroke();
      img.fill(56, 155, 201);
      img.rect(-2, 1, 50, 29, 0, 0, 6, 5);

      img.stroke(112, 111, 112);
      img.strokeWeight(2);
      img.fill(140, 176, 194);
      img.bezier(15, -2, -15, -16, 2, 35, 0, 29);
      img.bezier(16, -2, 18, 29, 23, 32, -1, 30);
      img.noStroke();
      img.fill(232, 232, 232);
      img.bezier(14, -2, -11, -11, 7, 35, 3, 29);
      img.bezier(13, -2, 16, 9, 21, 32, 4, 26);

      img.strokeWeight(2);
      img.stroke(133, 133, 133);
      img.fill(204, 202, 204);
      img.beginShape();
      img.vertex(12, 43);
      img.vertex(12, 48);
      img.vertex(9, 52);
      img.vertex(0, 52);
      img.vertex(0, 43);
      img.endShape();

      img.beginShape();
      img.vertex(4, 45);
      img.vertex(4, 48);
      img.vertex(6, 48);
      img.vertex(7, 48);
      img.vertex(7, 46);
      img.endShape();

      img.pop();
    };
    //}

    // This (i.e. medbay scanner) was all made by Tiny252112 {

    var Scanner = function (img, x, y, s) {
      /** Tiny252112@Tiny252112 **/
      img.push();
      img.translate(x, y);
      img.scale(s);
      img.stroke(0, 0, 0);
      img.strokeWeight(2);
      img.fill(179, 179, 179);
      //Back bibblybob thing
      img.ellipse(200, 187, 25, 31);
      img.fill(201, 201, 201);
      img.noStroke();
      img.ellipse(202, 181, 18, 17);
      img.stroke(0, 0, 0);
      //Scanning circle
      img.fill(179, 179, 179);
      img.ellipse(200, 214, 74, 36);
      img.fill(201, 201, 201);
      img.ellipse(200, 200, 74, 39);
      img.fill(99, 219, 151);
      img.ellipse(200, 200, 60, 28);
      img.fill(81, 179, 123);
      img.noStroke();
      img.ellipse(216, 199, 22, 9);
      img.ellipse(184, 199, 22, 9);
      img.ellipse(200, 192, 22, 9);
      img.ellipse(200, 207, 22, 9);
      img.stroke(186, 219, 200);
      img.line(200, 192, 200, 189);
      img.line(200, 208, 200, 205);
      img.line(184, 198, 174, 198);
      img.line(224, 198, 214, 198);
      img.line(215, 192, 185, 206);
      img.line(185, 192, 215, 206);
      img.stroke(0, 0, 0);
      //p5.LEFT bibblybob thing
      img.fill(179, 179, 179);
      img.rotate(p5.radians(20));
      img.ellipse(217, 141, 21, 35);
      img.rotate(p5.radians(-20));
      //Right bibblybob thing
      img.fill(179, 179, 179);
      img.rotate(p5.radians(-20));
      img.ellipse(158, 278, 21, 35);
      //Front bibblybob thing
      img.rotate(p5.radians(20));
      img.ellipse(200, 226, 27, 39);
      //Shine for the p5.LEFT, middle, and right
      img.fill(201, 201, 201);
      img.noStroke();
      img.ellipse(201, 222, 22, 29);
      img.ellipse(158, 201, 17, 20);
      img.ellipse(241, 202, 15, 19);
      img.pop();
    };

    //}

    // this (i.e. inspect sample) was made completely by Flora {

    var INSAMP = function (img, x, y, s) {
      /** Author: 🌸 Ŧl๏гค 🌸@ Misty333**/
      img.push();
      img.translate(x, y);
      img.scale(s);

      //start code
      img.strokeWeight(1);
      img.fill(216, 235, 240);
      img.push();
      img.rotate(p5.radians(35));
      img.push();
      img.rotate(p5.radians(-36));
      img.fill(33, 140, 255);
      img.noStroke();
      img.rect(-3, 21, 11, 16, 0);
      img.rect(3, 35, 5, 6, 0);
      img.rect(6, 40, 2, 2, 0);
      img.rect(-7, 16, 10, 18, 0);
      img.stroke(0, 0, 0);

      img.pop();

      img.push();
      img.rotate(0);
      img.noStroke();
      img.fill(0, 174, 255);
      img.arc(32, 31, 65, 44, p5.radians(236), p5.radians(244));
      img.stroke(0, 0, 0);
      img.pop();
      img.fill(216, 235, 240);
      img.quad(18, 14, 8, -14, -28, -14, -18, 14); //Main Moniter body
      img.noStroke();
      img.quad(-18, -16, 14, -16, 8, -14, -28, -14);
      img.stroke(0, 0, 0);
      img.line(11, -16, -18, -16);
      img.line(-18, -16, -28, -14);
      img.line(8, -14, -28, -14);
      img.stroke(0, 0, 0);
      img.pop();
      img.push();
      img.rotate(p5.radians(16));
      img.rect(12, -11, 3, 30, 0);
      img.pop();
      img.push();
      img.rotate(p5.radians(35));
      img.fill(33, 140, 255);
      img.quad(14, 11, 7, -11, -24, -11, -16, 11);
      img.pop();
      img.push();
      img.rotate(p5.radians(36));
      img.noStroke();
      img.arc(18, 25, 85, 17, p5.radians(103), p5.radians(269));
      img.fill(0, 174, 255);
      img.arc(11, 25, 50, 17, p5.radians(31), p5.radians(113));
      img.fill(0, 124, 181);
      img.fill(0, 134, 196);
      img.arc(18, 25, 85, 17, p5.radians(103), p5.radians(269));
      img.fill(0, 116, 240);
      img.arc(-2, 25, 65, 14, p5.radians(59), p5.radians(172));
      img.arc(5, 27, 65, 14, p5.radians(59), p5.radians(172));
      img.fill(0, 174, 255);
      img.arc(18, 14, 55, 39, p5.radians(56), p5.radians(164));
      img.pop();
      img.push();
      img.fill(196, 225, 255);
      img.rotate(p5.radians(36));
      img.quad(0, 29, 17, 14, -18, 14, -33, 27);
      img.stroke(0, 0, 0);
      img.strokeCap(p5.ROUND);
      img.strokeWeight(-81);
      img.line(18, 14, -18, 14);
      img.line(18, 14, 6, 24);
      img.line(-34, 27, -15, 28);
      img.line(-18, 14, -34, 27);
      img.strokeCap(p5.PROJECT);
      img.pop();
      img.push();
      img.rotate(p5.radians(36));
      img.noStroke();
      img.fill(129, 186, 204);
      img.quad(-5, 23, 4, 16, -18, 16, -27, 23);
      img.fill(104, 149, 163);
      img.quad(-24, 25, -4, 25, -3, 23, -27, 23);
      img.quad(4, 16, 3, 19, -4, 25, -5, 23);
      img.pop();
      img.push();
      img.rotate(p5.radians(43));
      img.noStroke();
      img.fill(153, 205, 222);
      img.rect(-16, 18, 3, 2, 1);
      img.rect(-11, 18, 3, 2, 1);
      img.rect(-19, 21, 2, 2, 1);
      img.rect(-16, 21, 3, 2, 1);
      img.rect(-9, 17, 3, 2, 1);
      img.rect(-8, 17, 3, 2, 1);
      img.rect(-5, 17, 3, 2, 1);
      img.rect(0, 16, 3, 2, 1);
      img.rect(-14, 21, 3, 2, 1);
      img.rect(-11, 21, 2, 2, 1);
      img.rect(-14, 18, 6, 2, 1);
      img.rect(-4, 17, 6, 2, 1);
      img.rect(-20, 22, 6, 2, 1);
      img.rect(-11, 20, 6, 2, 1);
      img.rect(-8, 21, 6, 2, 1);
      img.rect(-17, 19, 3, 2, 1);
      img.rect(-5, 19, 3, 2, 1);
      img.rect(-2, 19, 3, 1, 1);
      img.rect(-21, 24, 3, 1, 1);
      img.rect(-16, 23, 3, 1, 1);
      img.rect(-12, 23, 3, 1, 1);

      img.stroke(0, 0, 0);
      img.line(-21, 27, -2, 25);
      img.line(5, 18, -2, 25);
      img.line(-16, 18, -23, 26);
      img.line(-21, 27, -23, 26);
      img.line(5, 18, 6, 16);
      img.line(-16, 18, 6, 16);
      img.pop();

      img.push();
      img.fill(137, 181, 196);

      img.stroke(0, 0, 0);
      img.rotate(p5.radians(-23));
      img.ellipse(-14, 15, 6, 5);

      img.fill(166, 208, 222);
      img.arc(-14, 15, 6, 5, p5.radians(-132), p5.radians(27));

      img.pop();
      img.push();

      img.rotate(p5.radians(11));
      img.fill(216, 235, 240);
      img.quad(-41, -22, -42, -4, -22, -1, -21, -19);
      img.fill(86, 209, 92);
      img.quad(-38, -19, -39, -6, -25, -4, -24, -17);
      img.pop();
      img.push();

      img.rotate(p5.radians(15));
      img.noStroke();
      img.fill(66, 161, 69);
      img.rect(-38, -15, 1, 10, 3);
      img.rect(-28, -14, 1, 10, 3);
      img.rect(-36, -15, 2, 10, 3);
      img.rect(-31, -15, 2, 10, 3);
      img.rect(-33, -15, 1, 10, 3);
      img.pop();

      img.push();
      img.rotate(p5.radians(33));
      img.stroke(212, 225, 255);
      img.line(-2, -6, -3, -7);
      img.line(-4, -6, -3, -7);
      img.line(-4, -6, -5, -7);
      img.line(-6, -6, -5, -7);
      img.line(-6, -6, -7, -7);
      img.line(-8, -6, -7, -7);
      img.line(-8, -6, -9, -7);
      img.line(-10, -6, -9, -7);
      img.line(-10, -6, -11, -7);
      img.line(-12, -6, -11, -7);
      img.line(-12, -6, -13, -7);
      img.line(-14, -6, -13, -7);
      img.line(0, -4, -16, -4);

      img.noFill();

      img.ellipse(-12, 2, 4, 4);
      img.rect(-10, -3, 4, 8, 2);
      img.rect(-3, 0, 1, 1, 2);
      img.rect(-1, 0, 2, 1, 2);
      img.rect(2, 0, 2, 1, 2);
      img.rect(5, 0, 1, 1, 2);

      img.ellipse(-12, 0, 4, 4);

      img.rect(-3, 3, 1, 1, 2);
      img.rect(-1, 3, 2, 1, 2);
      img.rect(4, 3, 2, 1, 2);
      img.rect(2, 3, 1, 1, 2);
      img.pop();

      img.stroke(82, 82, 82);

      img.strokeCap(p5.PROJECT);
      img.line(7, 23, 7, 30);
      img.line(9, 32, 7, 30);

      img.stroke(110, 110, 110);
      img.line(9, 23, 9, 30);
      img.line(6, 35, 9, 30);
      img.line(6, 35, 13, 46);
      img.stroke(82, 82, 82);
      img.line(9, 32, 9, 46);

      img.stroke(0, 0, 0);
      img.line(-22, 0, 6, 21);
      img.line(-20, 2, 6, 21);
      img.line(-21, 1, -7, 12);

      //end code

      img.pop();
    };

    //}

    /** Author:  ПΣЩПIПJΛ @n3wninja **/
    var img = p5.createGraphics(435 * s, 445 * s, p5.P2D);
    img.push();
    img.translate(x, y + s * 45);
    img.scale(s);

    img.rect(0, 0, 10, 12);
    // Code
    img.fill(100);

    //outline
    img.beginShape();
    img.vertex(188, -45);
    img.vertex(188, 0);
    img.vertex(275, 0);
    img.vertex(275, 200);
    img.vertex(425, 340);
    img.vertex(425, 425);
    img.vertex(75, 425);
    img.vertex(0, 350);
    img.vertex(0, 0);
    img.vertex(88, 0);
    img.vertex(88, -45);
    img.endShape();

    //floor
    img.strokeWeight(2);
    img.stroke(66, 63, 63);
    img.fill(164, 169, 184);
    img.rect(0, 0, 91.6, 160);
    img.rect(0, 164, 91.6, 160);
    img.rect(183, 0, 91.6, 160);
    img.rect(183, 164, 91.6, 160);
    img.beginShape();
    img.vertex(277, 200);
    img.vertex(279, 390);
    img.vertex(425, 390);
    img.vertex(425, 345);
    img.endShape();
    img.rect(183, 328, 91.6, 94);
    img.rect(279, 393, 142, 35);
    img.beginShape();
    img.vertex(2, 326);
    img.vertex(92, 326);
    img.vertex(92, 425);
    img.vertex(77, 425);
    img.vertex(2, 345);
    img.endShape(p5.CLOSE);

    //center floor
    img.strokeWeight(1);
    img.fill(143, 148, 161);
    img.stroke(116, 119, 125);
    img.rect(92, 37, 91, 10);
    img.rect(93, 47, 50, 30);
    img.rect(146, 47, 34, 30);
    img.rect(93, 80, 30, 70);
    img.rect(126, 80, 54, 70);
    img.rect(93, 153, 50, 60);
    img.rect(146, 153, 34, 60);
    img.rect(93, 216, 30, 70);
    img.rect(126, 216, 54, 70);
    img.rect(93, 289, 55, 80);
    img.rect(151, 289, 29, 80);
    img.rect(93, 372, 45, 50);
    img.rect(141, 372, 39, 50);

    //shadows
    img.noStroke();
    img.fill(0, 50);
    img.rect(13, 0, 66, 323);
    img.rect(196, 0, 66, 160);
    img.rect(196, 164, 66, 160);
    img.triangle(262, 260, 262, 393, 407, 393);
    img.rect(196, 327, 66, 95);
    img.rect(262, 393, 145, 34);
    img.beginShape();
    img.vertex(13, 326);
    img.vertex(80, 326);
    img.vertex(80, 425);
    img.vertex(65, 425);
    img.vertex(13, 357);
    img.endShape(p5.CLOSE);

    //wall with computer
    img.stroke(0);
    img.strokeWeight(3);
    img.fill(186, 175, 175);
    img.quad(279, 200, 425, 340, 425, 390, 279, 260);
    img.noStroke();
    img.fill(63, 165, 196);
    img.quad(279, 240, 425, 370, 425, 390, 279, 260);
    img.fill(116, 191, 214);
    img.quad(279, 250, 425, 380, 425, 390, 279, 260);
    img.stroke(50, 90, 117);
    img.strokeWeight(1.5);
    img.line(284, 227, 415, 345);
    img.line(284, 235, 415, 353);
    img.noStroke();

    //boxes by the enterance (by DauntlessStudios)
    medBayWallLeft(img, 0, 0, 0.9);
    medBayWallRight(img, 183, 0, 0.9);

    //vent (by DauntlessStudios)
    vent(img, 32, 287);

    //beds (by DauntlessStudios)
    medBayBedRight(img, 205, 140, 1.2);
    medBayBedRight(img, 205, 65, 1.2);
    medBayBedLeft(img, 6, 65, 1.2);
    medBayBedLeft(img, 6, 140, 1.2);

    //outlines [[][[[[

    img.noFill();
    img.strokeWeight(10);
    img.stroke(25);
    img.beginShape();
    img.vertex(188, -45);
    img.vertex(188, 0);
    img.vertex(275, 0);
    img.vertex(275, 200);
    img.vertex(425, 340);
    img.vertex(425, 425);
    img.vertex(75, 425);
    img.vertex(0, 350);
    img.vertex(0, 0);
    img.vertex(88, 0);
    img.vertex(88, -45);
    img.endShape();

    img.noFill();
    img.strokeWeight(2);
    img.stroke(50);
    img.beginShape();
    img.vertex(188, -45);
    img.vertex(188, 0);
    img.vertex(275, 0);
    img.vertex(275, 200);
    img.vertex(425, 340);
    img.vertex(425, 425);
    img.vertex(75, 425);
    img.vertex(0, 350);
    img.vertex(0, 0);
    img.vertex(88, 0);
    img.vertex(88, -45);
    img.endShape();

    //entrance
    img.stroke(40);
    img.strokeWeight(1);
    img.fill(50);
    img.rect(102, 27, 80, 10);
    img.rect(102, 29, 80, 6);

    for (var i = 102; i < 182; i += 5) {
      img.line(i, 29, i, 35);
    }

    img.fill(195, 209, 214);
    img.noStroke();
    img.rect(93, -10, 10, 60, 2, 2, 0, 0);
    img.fill(166, 166, 166);
    img.rect(93, 48, 10, 5);
    img.stroke(132, 144, 181);
    img.noFill();
    img.strokeWeight(1);
    img.line(93, 30, 96, 30);
    img.line(96, 30, 96, 40);
    img.line(93, 40, 96, 40);
    img.line(93, -2, 96, -2);
    img.line(96, -2, 96, 8);
    img.line(93, 8, 96, 8);
    img.fill(208, 220, 224);
    img.arc(103, 19, 20, 20, p5.radians(-260), p5.radians(-90));
    img.fill(186, 200, 204);
    img.arc(103, 19, 13, 13, p5.radians(-260), p5.radians(-90));

    img.push();
    img.translate(276, 42);
    img.rotate(p5.radians(180));
    img.fill(195, 209, 214);
    img.noStroke();
    img.rect(93, -10, 10, 60, 2, 2, 2, 2);
    img.fill(166, 166, 166);
    img.rect(93, -10, 10, 5);
    img.stroke(132, 144, 181);
    img.noFill();
    img.strokeWeight(1);
    img.line(93, 30, 96, 30);
    img.line(96, 30, 96, 40);
    img.line(93, 40, 96, 40);
    img.line(93, -2, 96, -2);
    img.line(96, -2, 96, 8);
    img.line(93, 8, 96, 8);
    img.fill(208, 220, 224);
    img.arc(103, 19, 20, 20, p5.radians(-260), p5.radians(-90));
    img.fill(186, 200, 204);
    img.arc(103, 19, 13, 13, p5.radians(-260), p5.radians(-90));
    img.pop();

    img.stroke(20);
    img.fill(50);
    img.rect(93, -47, 10, 38);
    img.stroke(0);
    img.fill(50);
    img.rect(93, -30, 10, 20);
    img.strokeWeight(1);
    img.fill(148, 172, 214);
    img.arc(100, -30, 6, 25, p5.radians(-180), 0);

    img.stroke(20);
    img.fill(50);
    img.rect(173, -47, 10, 38);
    img.stroke(0);
    img.fill(50);
    img.rect(173, -30, 10, 20);
    img.strokeWeight(1);
    img.fill(148, 172, 214);
    img.arc(177, -30, 6, 25, p5.radians(-180), 0);

    img.push();
    img.translate(106, -44);
    img.stroke(70);
    img.fill(150);
    img.beginShape();
    img.vertex(5, 0);
    img.vertex(60, 0);
    img.vertex(65, 5);
    img.vertex(65, 30);
    img.vertex(60, 35);
    img.vertex(5, 35);
    img.vertex(0, 30);
    img.vertex(0, 5);
    img.vertex(5, 0);
    img.endShape();

    img.fill(130);
    img.noStroke();
    img.rect(5, 3, 55, 3, 10, 10, 0, 0);
    img.rect(3, 8, 59, 3, 10, 10, 0, 0);
    img.rect(3, 13, 59, 3, 10, 10, 0, 0);
    img.rect(3, 18, 59, 3, 10, 10, 0, 0);
    img.rect(3, 23, 59, 3, 10, 10, 0, 0);
    img.rect(5, 28, 55, 3, 10, 10, 0, 0);
    img.pop();

    img.push();
    img.translate(106, -9);
    img.stroke(70);
    img.fill(150);
    img.beginShape();
    img.vertex(5, 0);
    img.vertex(60, 0);
    img.vertex(65, 5);
    img.vertex(65, 30);
    img.vertex(60, 35);
    img.vertex(5, 35);
    img.vertex(0, 30);
    img.vertex(0, 5);
    img.vertex(5, 0);
    img.endShape();

    img.fill(130);
    img.noStroke();
    img.rect(5, 3, 55, 3, 10, 10, 0, 0);
    img.rect(3, 8, 59, 3, 10, 10, 0, 0);
    img.rect(3, 13, 59, 3, 10, 10, 0, 0);
    img.rect(3, 18, 59, 3, 10, 10, 0, 0);
    img.rect(3, 23, 59, 3, 10, 10, 0, 0);
    img.rect(5, 28, 55, 3, 10, 10, 0, 0);
    img.pop();

    // wires
    img.stroke(92, 68, 3);
    img.noFill();
    img.beginShape();
    img.vertex(304, 370);
    img.bezierVertex(324, 340, 350, 375, 375, 350);
    img.vertex(375, 335);
    img.vertex(365, 325);
    img.vertex(365, 330);
    img.vertex(380, 345);
    img.vertex(380, 350);
    img.bezierVertex(324, 381, 350, 352, 300, 375);
    img.endShape();

    //inspect sample (by Flora)
    img.push();
    img.rotate(p5.radians(6));
    INSAMP(img, 392, 265, 0.74);
    img.pop();

    // scanner (by Tiny252112)
    Scanner(img, 125, 225, 0.75);

    img.pop();
    return img.get();

  },

  electrical_room: function (x, y, s) {
    /** Author: Superelectronic12@Superelectronic **/
    /** POV: you entered electrical  ̿̿ ̿̿ ̿̿ ̿'̿'\̵͇̿̿\з= ( ▀ ͜͞ʖ▀) **/
    var img = p5.createGraphics(s * 600, s * 870, p5.P2D);
    img.push();
    img.translate(x, y);
    img.scale(s);

    img.noStroke();
    img.fill(97, 97, 64);
    img.rect(0, 0, 400, 600);
    img.rect(400, 140, 190, 40);
    img.rect(0, 600, 250, 150);
    img.rect(0, 749, 150, 120);
    img.triangle(400, 170, 600, 172, 400, 350);

    img.triangle(249, 600, 400, 600, 249, 750);

    img.fill(117, 117, 81);
    img.strokeWeight(2);
    img.stroke(64, 64, 40);
    img.rect(0, 100, 600, 10);
    img.rect(0, 100, 10, 770);
    img.rect(180, 100, 420, 40);
    img.rect(0, 350, 220, 120);
    img.beginShape();

    img.vertex(600, 130);
    img.vertex(600, 170);
    img.vertex(590, 180);
    img.vertex(590, 130);
    img.endShape();

    img.beginShape();
    img.vertex(399, 350);
    img.vertex(390, 360);
    img.vertex(390, 600);
    img.vertex(399, 600);
    img.vertex(399, 350);

    img.endShape();
    img.noStroke();
    img.rect(0, 100, 600, 9);
    img.rect(181, 100, 419, 39);
    img.rect(0, 100, 9, 500);

    img.fill(79, 79, 55);
    img.strokeWeight(2);
    img.stroke(64, 64, 40);
    img.rect(10, 110, 170, 10);
    img.rect(180, 140, 410, 10);
    img.rect(10, 470, 210, 10);

    img.fill(145, 145, 101);
    img.stroke(20);
    img.rect(0, -5, 600, 105);

    img.noStroke();
    img.fill(69, 69, 48);
    img.rect(20, 130, 50, 40, 10);

    img.fill(99, 99, 70);
    img.rect(25, 40, 40, 30);
    img.rect(130, 45, 30, 20);
    img.noStroke();
    img.fill(0, 0, 0, 30);
    img.rect(170, 60, 70, 50);
    img.rect(170, 100, 70, 10);

    img.rect(250, 60, 70, 50);
    img.rect(250, 100, 70, 10);

    img.rect(330, 60, 70, 50);
    img.rect(330, 100, 70, 10);

    img.fill(124, 140, 143);
    img.strokeWeight(3);
    img.stroke(82, 106, 110);
    img.rect(190, 40, 70, 75);
    img.rect(270, 40, 70, 75);
    img.rect(350, 40, 70, 75);

    img.fill(104, 122, 125);
    img.rect(190, 20, 70, 20);
    img.rect(270, 20, 70, 20);
    img.rect(350, 20, 70, 20);

    img.fill(80);
    img.stroke(91, 101, 102);
    img.rect(245, 70, 8, 16, 5);
    img.rect(355, 70, 8, 16, 5);

    img.fill(184, 184, 184);
    img.noStroke();
    img.rect(215, 50, 20, 15, 2);
    img.rect(375, 50, 20, 15, 2);
    img.fill(79, 77, 107);
    img.rect(215, 50, 20, 5, 2);
    img.rect(375, 50, 20, 5, 2);
    //!font//p5.textFont(p5.loadFont("cursive", 8));

    img.fill(0);
    img.text("010", 217, 62);
    img.text("10 1", 377, 62);
    //!font//p5.textFont(p5.loadFont("Sans-serif"));
    img.fill(119, 141, 145);
    img.stroke(111, 131, 135);
    img.rect(285, 50, 40, 30);

    img.noStroke();
    img.fill(111, 131, 135);
    img.ellipse(290, 55, 3, 3);
    img.ellipse(320, 55, 3, 3);
    img.ellipse(290, 75, 3, 3);
    img.ellipse(320, 75, 3, 3);

    img.rect(285, 85, 40, 25);

    img.strokeWeight(2);
    img.fill(130, 127, 127);
    img.stroke(115, 113, 113);
    img.rect(440, 1, 159, 43);
    img.fill(133, 130, 130);
    img.rect(440, 47, 159, 90);
    img.fill(166, 161, 161);
    img.rect(440, 34, 159, 100);
    img.rect(440, 69, 53, 30);

    img.line(493, 0, 493, 133);
    img.line(546, 0, 546, 133);
    img.line(466, 70, 466, 96);

    img.noStroke();
    img.fill(115, 113, 113);
    img.rect(442, 115, 12, 2, 5);
    img.rect(442, 118, 12, 2, 5);
    img.rect(442, 121, 12, 2, 5);
    img.rect(442, 124, 12, 2, 5);
    img.rect(442, 127, 12, 2, 5);

    img.rect(477, 115, 12, 2, 5);
    img.rect(477, 118, 12, 2, 5);
    img.rect(477, 121, 12, 2, 5);
    img.rect(477, 124, 12, 2, 5);
    img.rect(477, 127, 12, 2, 5);
    img.push();
    img.translate(107, 0);
    img.rect(442, 115, 12, 2, 5);
    img.rect(442, 118, 12, 2, 5);
    img.rect(442, 121, 12, 2, 5);
    img.rect(442, 124, 12, 2, 5);
    img.rect(442, 127, 12, 2, 5);

    img.rect(477, 115, 12, 2, 5);
    img.rect(477, 118, 12, 2, 5);
    img.rect(477, 121, 12, 2, 5);
    img.rect(477, 124, 12, 2, 5);
    img.rect(477, 127, 12, 2, 5);

    img.pop();

    img.rect(500, 115, 12, 2, 5);

    img.fill(0, 0, 0, 50);
    img.rect(500, 50, 40, 50);

    img.fill(140, 140, 140);
    img.rect(570, 60, 25, 2, 5);
    img.rect(560, 110, 20, 2, 5);
    img.rect(570, 86, 2, 24, 5);

    img.fill(255, 255, 255, 50);
    img.rect(445, 45, 5, 10, 5);
    img.rect(445, 47, 5, 6, 5);

    img.fill(80);
    img.stroke(91, 101, 102);
    img.rect(472, 78, 4, 8, 5);
    img.rect(455, 78, 4, 8, 5);

    img.strokeWeight(2);
    img.stroke(168, 3, 3);
    img.fill(0, 0, 0, 0);
    img.bezier(440, 0, 445, 50, 460, 65, 450, 69);

    img.fill(0);
    img.noStroke();
    img.arc(505, 133, 20, -15, 0, p5.radians(180));
    img.strokeWeight(3);
    img.stroke(112, 0, 0);
    img.fill(0, 0, 0, 0);
    img.bezier(510, 130, 445, 270, 250, 270, 200, 370);
    img.stroke(0, 0, 0);
    img.bezier(500, 128, 400, 150, 400, 300, 230, 230);
    img.bezier(0, 200, 400, 150, -100, 300, 228, 230);
    img.stroke(4, 0, 59);
    img.bezier(505, 130, 475, 270, 130, 270, 120, 370);
    img.stroke(4, 0, 59);
    img.bezier(508, 128, 400, 270, 230, 270, 80, 360);
    img.stroke(121, 125, 11);
    img.bezier(506, 130, 300, 240, 320, 200, 420, 330);
    img.stroke(112, 0, 0);
    img.bezier(500, 128, 430, 270, 230, 270, 100, 370);

    img.strokeWeight(3);
    img.stroke(82, 106, 110);
    img.fill(104, 122, 125);
    img.rect(1, 340, 210, 40);
    img.fill(124, 140, 143);
    img.rect(1, 380, 210, 75);
    img.rect(1, 370, 210, 10);
    img.line(70, 380, 70, 455);
    img.line(70, 410, 130, 410);

    img.line(130, 380, 130, 455);

    img.fill(40);
    img.strokeWeight(2);
    img.stroke(60);
    img.rect(103, 420, 4, 8, 5);
    img.rect(93, 420, 4, 8, 5);
    img.fill(255, 255, 255, 20);
    img.noStroke();
    img.rect(75, 415, 10, 5, 5);
    img.rect(76, 415, 6, 5, 5);
    img.rect(77, 415, 1, 5, 5);
    img.fill(0, 0, 0, 50);
    img.rect(7, 385, 58, 65);
    img.fill(25);
    img.rect(138, 383, 23, 67);
    img.rect(178, 383, 23, 67);
    for (var i = 0; i < 6; i++) {
      img.fill(89, 16, 2);
      img.rect(138, 385 + (i * 11), 8, 3, 3);
      img.rect(153, 391 + (i * 11), 8, 3, 3);
      img.fill(38, 46, 6);
      img.rect(138, 391 + (i * 11), 8, 3, 3);
      img.rect(153, 385 + (i * 11), 8, 3, 3);
      img.push();
      img.translate(40, 0);
      img.fill(89, 16, 2);
      img.rect(138, 385 + (i * 11), 8, 3, 3);
      img.rect(153, 391 + (i * 11), 8, 3, 3);
      img.fill(38, 46, 6);
      img.rect(138, 391 + (i * 11), 8, 3, 3);
      img.rect(153, 385 + (i * 11), 8, 3, 3);

      img.pop();
    }

    img.strokeWeight(3);
    img.stroke(8, 4, 66);
    img.line(0, 290, 160, 373);
    img.stroke(0);
    img.line(0, 250, 150, 375);
    img.stroke(120, 0, 0);
    img.line(0, 270, 165, 375);
    img.stroke(0);
    img.fill(0, 0, 0, 0);
    img.bezier(192, 430, 300, 470, 100, 510, 0, 500);
    img.stroke(9, 3, 40);
    img.bezier(188, 435, 150, 490, 350, 510, 397, 500);
    img.stroke(9, 3, 40);
    img.bezier(154, 400, 140, 400, 100, 410, 0, 310);
    img.pop();

    return img.get();
  },

  navigation_room: function (x, y, s) {
    /** Author: VEXCESS@VXS */
    var drawVent = function () { };
    var img = p5.createGraphics(s * 460, s * 525, p5.P2D);
    img.push();
    img.translate(x - 36, y - 12);
    img.scale(s);

    //first wall
    img.noStroke();
    img.push();
    img.translate(-51, 154);
    img.fill(29, 38, 43);
    img.rect(102, 11, 53, 12);
    img.fill(18, 27, 31);
    img.rect(102, 23, 53, 6);
    img.fill(8, 13, 15);
    img.rect(102, 26, 53, 4);
    img.fill(48, 62, 69);
    img.rect(102, 29, 53, 33);
    img.fill(8, 13, 15);
    img.rect(102, 60, 53, 6);
    img.fill(34, 49, 54);
    img.rect(102, 63, 53, 6);
    img.fill(32, 43, 48);
    img.rect(102, 68, 53, 21);
    img.fill(8, 13, 15);
    img.rect(102, 89, 53, 7);
    img.pop();

    //second wall
    img.fill(29, 38, 43);
    img.rect(102, 12, 208, 11);
    img.fill(18, 27, 31);
    img.rect(102, 23, 208, 6);
    img.fill(8, 13, 15);
    img.rect(102, 26, 208, 4);
    img.fill(48, 62, 69);
    img.rect(102, 29, 208, 33);
    img.fill(8, 13, 15);
    img.rect(102, 60, 208, 6);
    img.fill(34, 49, 54);
    img.rect(102, 63, 208, 6);
    img.fill(32, 43, 48);
    img.rect(102, 68, 208, 21);
    img.fill(8, 13, 15);
    img.rect(102, 89, 208, 6);

    img.noFill();
    img.stroke(8, 13, 15);
    img.rect(101, 31, 5, 8, 5);
    img.rect(199, 50, 5, 8, 5);
    img.rect(205, 31, 5, 8, 5);
    img.rect(304, 50, 5, 8, 5);

    img.noStroke();
    img.fill(8, 13, 15);
    img.rect(204, 12, 3, 79);

    //third wall
    img.stroke(10, 15, 15);
    img.strokeWeight(4);
    img.fill(25, 33, 37);
    img.beginShape();
    img.vertex(312, 14);
    img.vertex(491, 163);
    img.vertex(491, 237);
    img.vertex(312, 94);
    img.vertex(312, 14);
    img.endShape();
    img.fill(39, 58, 70);
    img.beginShape();
    img.curveVertex(489, 218);
    img.curveVertex(489, 218);
    img.curveVertex(489, 169);
    img.curveVertex(478, 158);
    img.curveVertex(385, 79);
    img.curveVertex(367, 68);
    img.curveVertex(348, 67);
    img.curveVertex(332, 74);
    img.curveVertex(325, 83);
    img.curveVertex(345, 100);
    img.curveVertex(489, 219);
    img.curveVertex(489, 219);
    img.endShape();
    img.strokeWeight(5);
    img.stroke(10, 15, 15);
    img.line(418, 111, 418, 119);
    img.line(418, 119, 421, 128);
    img.line(422, 128, 423, 142);
    img.line(423, 142, 421, 147);
    img.line(421, 146, 416, 150);
    img.strokeWeight(3);
    img.stroke(41, 50, 56);
    img.line(418, 111, 418, 119);
    img.line(418, 119, 421, 128);
    img.line(422, 128, 423, 142);
    img.line(423, 142, 421, 147);
    img.line(421, 146, 416, 150);

    //stuff on top wall
    img.strokeWeight(2);
    img.stroke(45, 32, 26);
    img.fill(180, 142, 83);
    img.rect(102, 44, 25, 6);
    img.strokeWeight(3);
    img.stroke(0, 0, 0);
    img.fill(138, 151, 156);
    img.rect(125, 33, 40, 24, 2);
    img.noStroke();
    img.fill(179, 179, 179);
    img.beginShape();
    img.vertex(134, 39);
    img.vertex(146, 45);
    img.vertex(158, 39);
    img.vertex(158, 53);
    img.vertex(146, 46);
    img.vertex(134, 53);
    img.vertex(134, 39);
    img.endShape();
    img.fill(0, 0, 0);
    img.strokeWeight(2);
    img.stroke(102, 102, 102);
    img.ellipse(146, 46, 4, 4);

    img.stroke(0, 0, 0);
    img.fill(98, 105, 110);
    img.rect(237, 31, 34, 27, 3);
    img.noStroke();
    img.fill(24, 24, 31);
    img.rect(241, 36, 27, 19, 2);
    img.stroke(73, 76, 87);
    img.beginShape();
    img.curveVertex(234, 66);
    img.curveVertex(249, 43);
    img.curveVertex(255, 40);
    img.curveVertex(261, 43);
    img.curveVertex(261, 59);
    img.endShape();
    img.beginShape();
    img.curveVertex(259, 62);
    img.curveVertex(259, 47);
    img.curveVertex(251, 47);
    img.curveVertex(236, 81);
    img.endShape();
    img.ellipse(255, 50, 1, 1);
    img.noStroke();
    img.fill(172, 12, 12);
    img.ellipse(263, 55, 5, 5);


    //floor
    img.noStroke();
    img.fill(68, 89, 102);
    img.beginShape();
    img.vertex(51, 250);
    img.vertex(103, 250);
    img.vertex(104, 95);
    img.vertex(313, 95);
    img.vertex(493, 241);
    img.vertex(494, 385);
    img.vertex(313, 533);
    img.vertex(103, 533);
    img.vertex(103, 379);
    img.vertex(51, 380);
    img.vertex(51, 250);
    img.endShape();

    img.stroke(64, 84, 92);
    img.fill(71, 93, 105);
    for (var y = 98; y < 535; y += 40) {
      for (var x = 108; x < 296; x += 40) {
        img.rect(x, y, 34, 33);
      }
    }

    //part on top of main floor
    img.strokeWeight(3);
    img.stroke(49, 61, 75);
    img.rect(51, 262, 252, 8);
    img.rect(50, 368, 253, 8);
    img.beginShape();
    img.curveVertex(304, 375);
    img.curveVertex(304, 376);
    img.curveVertex(360, 373);
    img.curveVertex(383, 368);
    img.curveVertex(398, 352);
    img.curveVertex(403, 313);
    img.curveVertex(392, 278);
    img.curveVertex(367, 264);
    img.curveVertex(324, 262);
    img.curveVertex(303, 262);
    img.curveVertex(303, 264);
    img.curveVertex(303, 270);
    img.curveVertex(307, 270);
    img.curveVertex(346, 271);
    img.curveVertex(363, 274);
    img.curveVertex(379, 283);
    img.curveVertex(387, 299);
    img.curveVertex(389, 334);
    img.curveVertex(383, 351);
    img.curveVertex(363, 365);
    img.curveVertex(303, 368);
    img.curveVertex(303, 368);
    img.curveVertex(304, 376);
    img.endShape();
    img.line(304, 376, 304, 263);

    img.fill(95, 119, 133);
    img.rect(51, 270, 251, 98);
    img.beginShape();
    img.curveVertex(304, 273);
    img.curveVertex(304, 270);
    img.curveVertex(352, 272);
    img.curveVertex(375, 281);
    img.curveVertex(386, 297);
    img.curveVertex(389, 331);
    img.curveVertex(385, 348);
    img.curveVertex(374, 360);
    img.curveVertex(360, 365);
    img.curveVertex(309, 367);
    img.curveVertex(304, 363);
    img.curveVertex(304, 365);
    img.curveVertex(304, 310);
    img.endShape();

    img.stroke(82, 104, 122);
    for (var i = 0; i < 8; i++) {
      img.line(78 + i * 30, 361, 78 + i * 30, 277);
    }
    img.stroke(49, 61, 75);
    img.fill(71, 93, 105);
    img.rect(318, 314, 70, 6);

    img.fill(59, 75, 87);
    img.rect(399, 298, 48, 42);

    //panels on floor
    img.stroke(47, 57, 70);
    img.strokeWeight(2);
    img.fill(56, 82, 99);
    img.rect(140, 197, 137, 49);
    img.noStroke();
    img.fill(83, 120, 144);
    img.rect(141, 199, 135, 6);
    img.stroke(47, 57, 70);
    img.fill(100, 129, 146);
    img.rect(205, 198, 5, 47);

    img.push();
    img.translate(0, 196);
    img.stroke(47, 57, 70);
    img.strokeWeight(2);
    img.fill(56, 82, 99);
    img.rect(140, 197, 137, 49);
    img.noStroke();
    img.fill(83, 120, 144);
    img.rect(141, 199, 135, 6);
    img.stroke(47, 57, 70);
    img.fill(100, 129, 146);
    img.rect(205, 198, 5, 47);
    img.pop();

    //red stripes on floor
    img.noStroke();
    img.fill(113, 62, 87);
    img.rect(112, 529, 191, 3);
    img.rect(111, 381, 11, 148, 10);
    img.rect(103, 380, 20, 10, 10);
    img.rect(290, 377, 13, 155);
    img.rect(290, 102, 12, 159);
    img.rect(113, 101, 189, 10, 10);
    img.rect(112, 102, 10, 153, 10);
    img.rect(54, 250, 67, 6, 10);

    drawVent(116, 118);
    drawVent(116, 475);

    //top chair
    img.strokeWeight(3);
    img.stroke(14, 20, 27);
    img.fill(14, 20, 27);
    img.beginShape();
    img.curveVertex(342, 173);
    img.curveVertex(342, 173);
    img.curveVertex(363, 181);
    img.curveVertex(369, 192);
    img.curveVertex(367, 201);
    img.curveVertex(359, 206);
    img.curveVertex(332, 219);
    img.curveVertex(312, 214);
    img.curveVertex(291, 200);
    img.curveVertex(284, 149);
    img.curveVertex(295, 135);
    img.curveVertex(313, 141);
    img.curveVertex(334, 153);
    img.curveVertex(342, 174);
    img.curveVertex(342, 174);
    img.endShape();
    img.noStroke();
    img.fill(57, 77, 90);
    img.beginShape();
    img.curveVertex(321, 161);
    img.curveVertex(321, 161);
    img.curveVertex(325, 156);
    img.curveVertex(330, 153);
    img.curveVertex(323, 147);
    img.curveVertex(303, 138);
    img.curveVertex(293, 137);
    img.curveVertex(287, 144);
    img.curveVertex(295, 150);
    img.curveVertex(321, 161);
    img.endShape();
    img.fill(31, 45, 54);
    img.beginShape();
    img.curveVertex(330, 104);
    img.curveVertex(330, 218);
    img.curveVertex(329, 199);
    img.curveVertex(321, 176);
    img.curveVertex(320, 163);
    img.curveVertex(321, 162);
    img.curveVertex(286, 147);
    img.curveVertex(286, 148);
    img.curveVertex(286, 156);
    img.curveVertex(287, 173);
    img.curveVertex(290, 189);
    img.curveVertex(293, 200);
    img.curveVertex(300, 208);
    img.curveVertex(318, 215);
    img.curveVertex(330, 229);
    img.endShape();
    img.fill(22, 32, 39);
    img.beginShape();
    img.curveVertex(330, 217);
    img.curveVertex(330, 217);
    img.curveVertex(335, 216);
    img.curveVertex(341, 214);
    img.curveVertex(366, 199);
    img.curveVertex(364, 185);
    img.curveVertex(354, 192);
    img.curveVertex(345, 198);
    img.curveVertex(340, 202);
    img.curveVertex(340, 188);
    img.curveVertex(339, 172);
    img.curveVertex(333, 155);
    img.curveVertex(328, 154);
    img.curveVertex(321, 161);
    img.curveVertex(320, 174);
    img.curveVertex(330, 216);
    img.endShape();
    img.fill(55, 74, 87);
    img.beginShape();
    img.curveVertex(326, 186);
    img.curveVertex(361, 186);
    img.curveVertex(360, 182);
    img.curveVertex(343, 175);
    img.curveVertex(342, 180);
    img.curveVertex(342, 189);
    img.curveVertex(341, 201);
    img.curveVertex(351, 194);
    img.curveVertex(369, 187);
    img.endShape();
    img.strokeWeight(2);
    img.stroke(14, 20, 27);
    img.line(342, 188, 352, 181);

    //middle chair
    img.strokeWeight(3);
    img.stroke(14, 20, 27);
    img.fill(14, 20, 27);
    img.beginShape();
    img.curveVertex(411, 330);
    img.curveVertex(411, 330);
    img.curveVertex(414, 323);
    img.curveVertex(419, 295);
    img.curveVertex(414, 281);
    img.curveVertex(400, 279);
    img.curveVertex(375, 280);
    img.curveVertex(374, 269);
    img.curveVertex(370, 240);
    img.curveVertex(358, 231);
    img.curveVertex(345, 235);
    img.curveVertex(329, 256);
    img.curveVertex(329, 276);
    img.curveVertex(345, 329);
    img.curveVertex(359, 334);
    img.curveVertex(373, 333);
    img.curveVertex(400, 333);
    img.curveVertex(411, 331);
    img.curveVertex(411, 331);
    img.endShape();
    img.noStroke();
    img.fill(57, 77, 90);
    img.beginShape();
    img.curveVertex(344, 266);
    img.curveVertex(344, 266);
    img.curveVertex(355, 252);
    img.curveVertex(366, 240);
    img.curveVertex(358, 233);
    img.curveVertex(349, 235);
    img.curveVertex(341, 242);
    img.curveVertex(331, 257);
    img.curveVertex(331, 270);
    img.curveVertex(336, 262);
    img.curveVertex(344, 265);
    img.endShape();
    img.fill(23, 34, 41);
    img.beginShape();
    img.curveVertex(331, 265);
    img.curveVertex(331, 265);
    img.curveVertex(336, 261);
    img.curveVertex(344, 265);
    img.curveVertex(349, 282);
    img.curveVertex(353, 300);
    img.curveVertex(356, 313);
    img.curveVertex(360, 321);
    img.curveVertex(379, 321);
    img.curveVertex(397, 319);
    img.curveVertex(410, 321);
    img.curveVertex(409, 329);
    img.curveVertex(395, 331);
    img.curveVertex(369, 331);
    img.curveVertex(351, 332);
    img.curveVertex(345, 323);
    img.curveVertex(332, 281);
    img.curveVertex(331, 270);
    img.curveVertex(332, 265);
    img.endShape();
    img.fill(31, 45, 53);
    img.beginShape();
    img.curveVertex(357, 316);
    img.curveVertex(357, 316);
    img.curveVertex(373, 284);
    img.curveVertex(373, 283);
    img.curveVertex(372, 267);
    img.curveVertex(370, 247);
    img.curveVertex(364, 241);
    img.curveVertex(344, 266);
    img.curveVertex(345, 268);
    img.curveVertex(348, 277);
    img.curveVertex(351, 289);
    img.curveVertex(357, 315);
    img.endShape();
    img.fill(55, 75, 88);
    img.beginShape();
    img.curveVertex(357, 316);
    img.curveVertex(357, 316);
    img.curveVertex(368, 297);
    img.curveVertex(375, 283);
    img.curveVertex(380, 282);
    img.curveVertex(389, 282);
    img.curveVertex(399, 281);
    img.curveVertex(411, 282);
    img.curveVertex(417, 292);
    img.curveVertex(414, 314);
    img.curveVertex(410, 320);
    img.curveVertex(402, 319);
    img.curveVertex(385, 320);
    img.curveVertex(359, 321);
    img.curveVertex(357, 305);
    img.endShape();
    img.strokeWeight(1.5);
    img.stroke(0);
    img.line(359, 268, 371, 254);
    img.line(371, 288, 366, 276);
    img.line(366, 276, 364, 262);
    img.line(366, 275, 358, 284);
    img.line(352, 276, 357, 285);
    img.line(358, 284, 360, 295);
    img.line(360, 295, 359, 306);
    img.line(369, 311, 386, 309);
    img.line(386, 309, 402, 309);
    img.line(403, 287, 389, 289);
    img.line(390, 289, 377, 288);
    img.line(390, 290, 386, 309);

    //bottom chair
    img.strokeWeight(2);
    img.stroke(14, 20, 27);
    img.fill(14, 20, 27);
    img.beginShape();
    img.curveVertex(374, 480);
    img.curveVertex(374, 483);
    img.curveVertex(364, 474);
    img.curveVertex(361, 442);
    img.curveVertex(363, 434);
    img.curveVertex(357, 422);
    img.curveVertex(339, 420);
    img.curveVertex(309, 427);
    img.curveVertex(300, 437);
    img.curveVertex(301, 457);
    img.curveVertex(305, 474);
    img.curveVertex(306, 494);
    img.curveVertex(321, 511);
    img.curveVertex(334, 517);
    img.curveVertex(336, 514);
    img.curveVertex(375, 514);
    img.endShape();
    img.noStroke();
    img.fill(57, 77, 90);
    img.beginShape();
    img.curveVertex(316, 440);
    img.curveVertex(316, 440);
    img.curveVertex(329, 437);
    img.curveVertex(346, 435);
    img.curveVertex(358, 435);
    img.curveVertex(359, 429);
    img.curveVertex(352, 422);
    img.curveVertex(337, 422);
    img.curveVertex(319, 426);
    img.curveVertex(306, 431);
    img.curveVertex(311, 434);
    img.curveVertex(315, 439);
    img.endShape();
    img.fill(22, 32, 40);
    img.beginShape();
    img.curveVertex(344, 505);
    img.curveVertex(344, 505);
    img.curveVertex(333, 499);
    img.curveVertex(325, 491);
    img.curveVertex(324, 474);
    img.curveVertex(323, 454);
    img.curveVertex(318, 437);
    img.curveVertex(311, 432);
    img.curveVertex(303, 434);
    img.curveVertex(302, 448);
    img.curveVertex(304, 463);
    img.curveVertex(308, 474);
    img.curveVertex(308, 494);
    img.curveVertex(316, 504);
    img.curveVertex(335, 514);
    img.curveVertex(344, 505);
    img.endShape();
    img.fill(33, 46, 54);
    img.beginShape();
    img.curveVertex(344, 441);
    img.curveVertex(319, 440);
    img.curveVertex(326, 437);
    img.curveVertex(352, 433);
    img.curveVertex(360, 435);
    img.curveVertex(357, 441);
    img.curveVertex(348, 443);
    img.curveVertex(328, 447);
    img.curveVertex(350, 447);
    img.curveVertex(358, 445);
    img.curveVertex(359, 449);
    img.curveVertex(361, 471);
    img.curveVertex(358, 476);
    img.curveVertex(336, 485);
    img.curveVertex(324, 491);
    img.curveVertex(323, 486);
    img.curveVertex(322, 450);
    img.curveVertex(315, 441);
    img.endShape();
    img.fill(52, 71, 83);
    img.beginShape();
    img.curveVertex(344, 505);
    img.curveVertex(345, 506);
    img.curveVertex(359, 495);
    img.curveVertex(373, 485);
    img.curveVertex(369, 482);
    img.curveVertex(360, 477);
    img.curveVertex(333, 488);
    img.curveVertex(337, 485);
    img.curveVertex(324, 491);
    img.curveVertex(329, 497);
    img.curveVertex(342, 505);
    img.endShape();
    img.strokeWeight(1.5);
    img.stroke(0);
    img.line(333, 477, 333, 465);
    img.line(333, 465, 328, 453);
    img.line(333, 465, 351, 460);
    img.line(351, 460, 350, 449);
    img.line(351, 460, 354, 473);
    img.line(354, 497, 347, 493);
    img.line(347, 493, 340, 490);
    img.line(367, 488, 359, 481);

    //main dashboard
    img.stroke(0, 0, 0);
    img.fill(61, 64, 76);
    img.rect(423, 255, 11, 17, 100);
    img.fill(0, 0, 0);
    img.beginShape();
    img.curveVertex(491, 367);
    img.curveVertex(491, 367);
    img.curveVertex(452, 398);
    img.curveVertex(439, 404);
    img.curveVertex(424, 394);
    img.curveVertex(422, 383);
    img.curveVertex(418, 371);
    img.curveVertex(408, 362);
    img.curveVertex(407, 352);
    img.curveVertex(413, 346);
    img.curveVertex(437, 332);
    img.curveVertex(437, 331);
    img.curveVertex(438, 319);
    img.curveVertex(437, 262);
    img.curveVertex(424, 259);
    img.curveVertex(409, 256);
    img.curveVertex(403, 249);
    img.curveVertex(404, 239);
    img.curveVertex(407, 226);
    img.curveVertex(416, 215);
    img.curveVertex(437, 216);
    img.curveVertex(471, 219);
    img.curveVertex(489, 225);
    img.curveVertex(493, 238);
    img.curveVertex(493, 367);
    img.curveVertex(491, 367);
    img.endShape();
    img.noStroke();
    img.fill(69, 76, 90);
    img.beginShape();
    img.curveVertex(439, 399);
    img.curveVertex(439, 402);
    img.curveVertex(440, 365);
    img.curveVertex(428, 351);
    img.curveVertex(417, 349);
    img.curveVertex(410, 353);
    img.curveVertex(411, 361);
    img.curveVertex(420, 369);
    img.curveVertex(424, 377);
    img.curveVertex(426, 391);
    img.curveVertex(433, 398);
    img.curveVertex(439, 399);
    img.endShape();
    img.fill(46, 50, 59);
    img.beginShape();
    img.vertex(443, 401);
    img.vertex(471, 379);
    img.vertex(489, 365);
    img.vertex(490, 330);
    img.vertex(479, 341);
    img.vertex(459, 356);
    img.vertex(444, 364);
    img.vertex(444, 384);
    img.endShape();
    img.fill(82, 89, 99);
    img.beginShape();
    img.curveVertex(436, 360);
    img.curveVertex(442, 362);
    img.curveVertex(468, 346);
    img.curveVertex(488, 328);
    img.curveVertex(489, 306);
    img.curveVertex(489, 245);
    img.curveVertex(483, 225);
    img.curveVertex(441, 218);
    img.curveVertex(416, 218);
    img.curveVertex(407, 232);
    img.curveVertex(406, 251);
    img.curveVertex(420, 256);
    img.curveVertex(437, 256);
    img.curveVertex(441, 272);
    img.curveVertex(441, 328);
    img.curveVertex(428, 340);
    img.curveVertex(415, 347);
    img.curveVertex(426, 348);
    img.curveVertex(435, 353);
    img.curveVertex(441, 360);
    img.endShape();
    img.fill(93, 99, 107);
    img.beginShape();
    img.curveVertex(440, 331);
    img.curveVertex(440, 331);
    img.curveVertex(458, 319);
    img.curveVertex(479, 312);
    img.curveVertex(486, 313);
    img.curveVertex(489, 309);
    img.curveVertex(489, 242);
    img.curveVertex(489, 242);
    img.curveVertex(485, 239);
    img.curveVertex(472, 241);
    img.curveVertex(457, 248);
    img.curveVertex(440, 258);
    img.curveVertex(441, 265);
    img.curveVertex(440, 331);
    img.endShape();
    img.stroke(0, 0, 0);
    img.strokeWeight(1);
    img.fill(72, 71, 80);
    img.ellipse(434, 343, 6, 2);
    img.ellipse(442, 339, 6, 2);
    img.ellipse(450, 334, 6, 2);
    img.ellipse(456, 328, 6, 2);
    img.ellipse(450, 315, 6, 4);
    img.ellipse(450, 307, 6, 4);
    img.ellipse(459, 304, 6, 4);
    img.ellipse(459, 312, 6, 4);
    img.fill(57, 107, 142);
    img.beginShape();
    img.curveVertex(469, 310);
    img.curveVertex(469, 310);
    img.curveVertex(475, 308);
    img.curveVertex(482, 306);
    img.curveVertex(482, 298);
    img.curveVertex(482, 287);
    img.curveVertex(479, 287);
    img.curveVertex(477, 293);
    img.curveVertex(469, 298);
    img.curveVertex(469, 309);
    img.curveVertex(469, 309);
    img.endShape();
    img.beginShape();
    img.curveVertex(451, 284);
    img.curveVertex(451, 284);
    img.curveVertex(452, 294);
    img.curveVertex(463, 294);
    img.curveVertex(476, 284);
    img.curveVertex(481, 270);
    img.curveVertex(478, 261);
    img.curveVertex(469, 260);
    img.curveVertex(460, 265);
    img.curveVertex(453, 276);
    img.curveVertex(450, 289);
    img.curveVertex(451, 285);
    img.endShape();
    img.beginShape();
    img.curveVertex(482, 257);
    img.curveVertex(482, 257);
    img.curveVertex(481, 242);
    img.curveVertex(472, 243);
    img.curveVertex(466, 247);
    img.curveVertex(466, 253);
    img.curveVertex(468, 255);
    img.curveVertex(474, 255);
    img.curveVertex(481, 257);
    img.curveVertex(481, 257);
    img.endShape();
    img.stroke(0, 0, 0);
    img.line(441, 252, 442, 244);
    img.line(442, 244, 445, 237);
    img.line(433, 248, 434, 242);
    img.line(434, 242, 436, 237);
    img.line(425, 246, 425, 241);
    img.line(425, 241, 428, 235);
    img.line(416, 249, 417, 242);
    img.line(417, 242, 420, 236);
    img.fill(181, 0, 0);
    img.ellipse(441, 247, 6, 2);
    img.ellipse(435, 239, 6, 2);
    img.ellipse(426, 241, 6, 2);
    img.ellipse(420, 236, 6, 2);
    img.fill(143, 141, 122);
    img.rect(442, 258, 4, 9, 100);
    img.rect(450, 254, 4, 10, 100);
    img.rect(457, 249, 4, 11, 100);
    img.fill(57, 107, 142);
    img.beginShape();
    img.curveVertex(457, 235);
    img.curveVertex(457, 235);
    img.curveVertex(462, 226);
    img.curveVertex(453, 224);
    img.curveVertex(426, 222);
    img.curveVertex(422, 223);
    img.curveVertex(419, 226);
    img.curveVertex(421, 229);
    img.curveVertex(457, 235);
    img.curveVertex(457, 235);
    img.endShape();
    //steering wheel
    img.fill(29, 39, 46);
    img.stroke(0, 0, 0);
    img.strokeWeight(2);
    img.beginShape();
    img.curveVertex(430, 320);
    img.curveVertex(430, 320);
    img.curveVertex(436, 313);
    img.curveVertex(434, 291);
    img.curveVertex(426, 280);
    img.curveVertex(422, 283);
    img.curveVertex(425, 295);
    img.curveVertex(429, 318);
    img.curveVertex(429, 318);
    img.endShape();
    img.beginShape();
    img.curveVertex(436, 287);
    img.curveVertex(436, 287);
    img.curveVertex(438, 267);
    img.curveVertex(434, 253);
    img.curveVertex(428, 248);
    img.curveVertex(425, 252);
    img.curveVertex(428, 259);
    img.curveVertex(432, 271);
    img.curveVertex(432, 282);
    img.curveVertex(434, 286);
    img.curveVertex(434, 286);
    img.endShape();
    img.beginShape();
    img.curveVertex(432, 284);
    img.curveVertex(432, 284);
    img.curveVertex(447, 294);
    img.curveVertex(445, 298);
    img.curveVertex(440, 300);
    img.curveVertex(435, 297);
    img.curveVertex(432, 288);
    img.endShape();
    img.noStroke();
    img.fill(45, 61, 74);
    img.beginShape();
    img.curveVertex(431, 295);
    img.curveVertex(431, 295);
    img.curveVertex(431, 288);
    img.curveVertex(426, 282);
    img.curveVertex(424, 287);
    img.curveVertex(430, 295);
    img.endShape();
    img.beginShape();
    img.curveVertex(435, 267);
    img.curveVertex(435, 267);
    img.curveVertex(433, 254);
    img.curveVertex(428, 250);
    img.curveVertex(427, 256);
    img.curveVertex(430, 259);
    img.curveVertex(434, 265);
    img.endShape();

    //mini dashboard
    img.noStroke();
    img.fill(0, 0, 0);
    img.beginShape();
    img.curveVertex(422, 195);
    img.curveVertex(422, 195);
    img.curveVertex(421, 159);
    img.curveVertex(401, 138);
    img.curveVertex(355, 103);
    img.curveVertex(340, 104);
    img.curveVertex(327, 114);
    img.curveVertex(323, 123);
    img.curveVertex(325, 130);
    img.curveVertex(338, 140);
    img.curveVertex(381, 168);
    img.curveVertex(387, 181);
    img.curveVertex(389, 191);
    img.curveVertex(399, 194);
    img.curveVertex(408, 198);
    img.curveVertex(414, 201);
    img.curveVertex(421, 197);
    img.endShape();
    img.fill(68, 75, 89);
    img.beginShape();
    img.curveVertex(395, 192);
    img.curveVertex(394, 191);
    img.curveVertex(409, 184);
    img.curveVertex(420, 177);
    img.curveVertex(420, 193);
    img.curveVertex(420, 193);
    img.curveVertex(414, 199);
    img.curveVertex(407, 196);
    img.curveVertex(396, 193);
    img.endShape();
    img.fill(100, 110, 117);
    img.beginShape();
    img.curveVertex(391, 180);
    img.curveVertex(391, 190);
    img.curveVertex(407, 183);
    img.curveVertex(419, 172);
    img.curveVertex(417, 157);
    img.curveVertex(402, 142);
    img.curveVertex(356, 106);
    img.curveVertex(344, 104);
    img.curveVertex(328, 117);
    img.curveVertex(326, 127);
    img.curveVertex(341, 139);
    img.curveVertex(382, 165);
    img.curveVertex(389, 177);
    img.curveVertex(391, 187);
    img.endShape();
    img.stroke(0, 0, 0);
    img.fill(57, 110, 151);
    img.beginShape();
    img.vertex(393, 182);
    img.vertex(413, 169);
    img.vertex(409, 158);
    img.vertex(391, 172);
    img.vertex(393, 181);
    img.endShape();
    img.beginShape();
    img.vertex(386, 164);
    img.vertex(390, 160);
    img.vertex(390, 156);
    img.vertex(387, 152);
    img.vertex(381, 151);
    img.vertex(375, 154);
    img.vertex(385, 163);
    img.endShape();
    img.beginShape();
    img.vertex(395, 154);
    img.vertex(399, 151);
    img.vertex(400, 146);
    img.vertex(396, 142);
    img.vertex(390, 141);
    img.vertex(385, 144);
    img.vertex(396, 154);
    img.endShape();
    img.beginShape();
    img.vertex(369, 148);
    img.vertex(383, 137);
    img.vertex(362, 119);
    img.vertex(356, 123);
    img.vertex(350, 129);
    img.vertex(348, 134);
    img.vertex(369, 147);
    img.endShape();
    img.ellipse(339, 127, 4, 4);
    img.ellipse(332, 122, 4, 4);
    img.ellipse(344, 119, 4, 4);
    img.ellipse(338, 114, 4, 4);
    img.ellipse(345, 108, 4, 4);
    img.ellipse(352, 113, 4, 4);

    //entrance
    img.strokeWeight(2);
    img.stroke(37, 55, 57);
    img.fill(76, 114, 125);
    img.rect(38, 260, 12, 110, 3);
    for (var i = 0; i < 20; i++) {
      img.line(40, 275 + i * 5, 48, 275 + i * 5);
    }

    img.noStroke();
    img.fill(0, 0, 0);
    img.beginShape();
    img.curveVertex(36, 182);
    img.curveVertex(36, 182);
    img.curveVertex(36, 254);
    img.curveVertex(40, 268);
    img.curveVertex(49, 270);
    img.curveVertex(54, 255);
    img.curveVertex(54, 193);
    img.curveVertex(52, 181);
    img.curveVertex(36, 180);
    img.endShape();

    img.stroke(0, 0, 0);
    img.fill(87, 122, 131);
    img.rect(37, 181, 15, 15);
    img.fill(131, 168, 180);
    img.rect(37, 196, 15, 52);
    img.fill(176, 213, 225);
    img.beginShape();
    img.curveVertex(45, 249);
    img.curveVertex(38, 249);
    img.curveVertex(40, 265);
    img.curveVertex(46, 268);
    img.curveVertex(50, 266);
    img.curveVertex(52, 258);
    img.curveVertex(51, 249);
    img.curveVertex(38, 258);
    img.endShape();
    img.pop();
    return img.get();
  },

  shields_room: function (x, y, size) {

    var img = p5.createGraphics(320, 360, p5.P2D);


    var vent = function (x, y, size) { };
    var higherTask = function (x, y, size) {

      img.push();
      img.translate(x, y);
      img.scale(size);

      img.strokeWeight(2);
      img.stroke(0, 0, 0);
      img.fill(191, 166, 4);
      img.beginShape();
      img.curveVertex(247, 26);
      img.curveVertex(272, 61);
      img.curveVertex(276, 54);
      img.curveVertex(276, 42);
      img.curveVertex(280, 44);
      img.curveVertex(279, 64);
      img.curveVertex(269, 67);
      img.curveVertex(248, 71);
      img.endShape();

      img.fill(173, 173, 173);
      img.rect(250, 59, 22, 14, 2);

      img.noStroke();
      img.fill(56, 56, 56);
      img.ellipse(262, 66, 2, 2);

      img.fill(214, 214, 214);
      img.triangle(267, 71, 263, 66, 267, 61);
      img.triangle(257, 71, 261, 66, 257, 61);

      img.pop();

    };
    var lowerTask = function (x, y, size) {

      img.push();
      img.translate(x, y);
      img.scale(size);

      img.stroke(0, 0, 0);
      img.fill(143, 143, 143);
      img.beginShape();
      img.curveVertex(6, 274);
      img.curveVertex(8, 335);
      img.curveVertex(26, 343);
      img.curveVertex(29, 339);
      img.curveVertex(29, 321);
      img.curveVertex(34, 321);
      img.curveVertex(35, 321);
      img.curveVertex(35, 342);
      img.curveVertex(32, 348);
      img.curveVertex(12, 349);
      img.curveVertex(3, 355);
      img.endShape();

      img.fill(173, 173, 173);
      img.rect(22, 309, 22, 21, 2);

      img.fill(212, 212, 212);
      img.ellipse(33, 322, 10, 10);

      img.noStroke();
      img.fill(143, 143, 143);
      img.rect(24, 310, 19, 5, 2);

      img.fill(0, 0, 0);
      img.ellipse(36, 322, 1, 1);
      img.ellipse(35, 320, 1, 1);
      img.ellipse(32, 320, 1, 1);
      img.ellipse(30, 322, 1, 1);
      img.ellipse(33, 322, 1, 1);
      img.ellipse(32, 324, 1, 1);
      img.ellipse(35, 324, 1, 1);

      img.pop();

    };
    var shields = function (x, y, size) {

      img.push();
      img.translate(x, y - 40 * size);
      img.scale(size);

      //ground
      {

        img.noStroke();
        img.fill(117, 117, 117);
        img.beginShape();
        img.vertex(65, 83);
        img.vertex(2, 136);
        img.vertex(2, 399);
        img.vertex(168, 399);
        img.vertex(320, 249);
        img.vertex(318, 82);
        img.endShape();

        img.stroke(87, 87, 87);
        img.rect(261, 164, 15, 10, 2);
        img.rect(272, 176, 9, 6, 2);
        img.rect(269, 144, 9, 6, 2);

        img.noStroke();
        img.fill(255, 213, 0);
        img.rect(222, 155, 92, 6);
        img.rect(266, 152, 48, 1);
        img.rect(266, 141, 1, 11);
        img.rect(216, 140, 51, 1);
        img.rect(277, 195, 38, 6);
        img.rect(277, 195, 6, 22);
        img.rect(253, 211, 28, 6);
        img.rect(273, 193, 42, 1);
        img.rect(273, 194, 1, 8);
        img.rect(249, 201, 24, 1);
        img.rect(285, 202, 29, 1);
        img.rect(285, 203, 1, 28);
        img.rect(245, 230, 41, 1);
        img.rect(250, 238, 35, 6);
        img.rect(279, 238, 6, 45);
        img.rect(250, 266, 44, 6);
        img.rect(291, 237, 6, 35);
        img.rect(291, 237, 26, 6);
        img.rect(256, 236, 33, 1);
        img.rect(288, 233, 1, 4);
        img.rect(288, 233, 33, 1);
        img.rect(267, 273, 27, 1);
        img.rect(267, 273, 1, 11);
        img.rect(247, 283, 20, 1);
        img.rect(274, 255, 1, 38);
        img.rect(268, 255, 7, 1);
        img.rect(268, 249, 1, 7);
        img.rect(259, 249, 9, 1);
        img.rect(91, 136, 43, 6);
        img.rect(73, 153, 56, 6);
        img.rect(56, 170, 56, 6);
        img.rect(29, 188, 56, 6);
        img.rect(29, 274, 6, 73);
        img.rect(55, 304, 6, 40);
        img.rect(55, 298, 59, 6);
        img.rect(89, 304, 6, 19);
        img.rect(89, 318, 29, 6);
        img.rect(81, 316, 1, 22);
        img.rect(81, 316, 6, 1);
        img.rect(86, 303, 1, 13);
        img.rect(52, 295, 41, 1);
        img.rect(52, 295, 1, 30);
        img.rect(27, 307, 1, 38);
        img.rect(21, 307, 6, 1);
        img.rect(21, 277, 1, 30);
        img.rect(49, 284, 1, 38);
        img.rect(91, 132, 43, 1);

        img.triangle(286, 283, 279, 291, 279, 283);

        img.fill(0, 50);
        img.ellipse(167, 271, 188, 152);

        img.rect(3, 271, 70, 20);
        img.rect(214, 125, 103, 20);
        img.rect(84, 108, 103, 20);

        img.triangle(73, 278, 73, 291, 76, 291);

      }

      //raised floor part
      {

        img.strokeWeight(2);
        img.stroke(138, 136, 110);
        img.fill(171, 169, 142);
        img.beginShape();
        img.vertex(78, 277);
        img.vertex(3, 277);
        img.vertex(3, 200);
        img.vertex(79, 200);
        img.vertex(85, 184);
        img.vertex(92, 173);
        img.vertex(112, 156);
        img.vertex(122, 152);
        img.vertex(124, 150);
        img.vertex(124, 83);
        img.vertex(316, 83);
        img.vertex(317, 137);
        img.vertex(219, 137);
        img.vertex(219, 166);
        img.vertex(223, 169);
        img.vertex(231, 179);
        img.vertex(239, 193);
        img.vertex(244, 213);
        img.vertex(261, 249);
        img.vertex(254, 279);
        img.vertex(246, 294);
        img.vertex(238, 303);
        img.vertex(219, 347);
        img.vertex(167, 388);
        img.vertex(3, 388);
        img.vertex(3, 336);
        img.vertex(124, 336);
        img.vertex(124, 326);
        img.vertex(108, 319);
        img.vertex(93, 308);
        img.vertex(83, 292);
        img.vertex(80, 282);
        img.endShape();

        img.strokeWeight(2);
        img.stroke(138, 136, 110);
        img.fill(219, 216, 178);
        img.beginShape();
        img.vertex(79, 271);
        img.vertex(3, 271);
        img.vertex(3, 200);
        img.vertex(79, 200);
        img.vertex(85, 184);
        img.vertex(92, 173);
        img.vertex(112, 156);
        img.vertex(122, 152);
        img.vertex(124, 150);
        img.vertex(124, 83);
        img.vertex(317, 83);
        img.vertex(317, 130);
        img.vertex(223, 130);
        img.vertex(223, 166);
        img.vertex(227, 169);
        img.vertex(235, 179);
        img.vertex(244, 193);
        img.vertex(250, 213);
        img.vertex(250, 246);
        img.vertex(243, 270);
        img.vertex(231, 287);
        img.vertex(224, 297);
        img.vertex(225, 343);
        img.vertex(167, 398);
        img.vertex(3, 397);
        img.vertex(3, 336);
        img.vertex(124, 336);
        img.vertex(124, 319);
        img.vertex(108, 314);
        img.vertex(93, 302);
        img.vertex(83, 283);
        img.vertex(79, 272);
        img.endShape();

        img.stroke(148, 145, 117);
        img.fill(199, 196, 167);
        img.beginShape();
        img.vertex(82, 208);
        img.vertex(3, 208);
        img.vertex(3, 200);
        img.vertex(79, 200);
        img.vertex(85, 184);
        img.vertex(92, 173);
        img.vertex(112, 156);
        img.vertex(122, 152);
        img.vertex(124, 150);
        img.vertex(124, 83);
        img.vertex(132, 83);
        img.vertex(132, 155);
        img.vertex(128, 159);
        img.vertex(113, 164);
        img.vertex(102, 174);
        img.vertex(92, 190);
        img.vertex(86, 206);
        img.vertex(83, 208);
        img.endShape();

        img.beginShape();
        img.vertex(222, 121);
        img.vertex(317, 121);
        img.vertex(316, 130);
        img.vertex(232, 130);
        img.vertex(232, 166);
        img.vertex(235, 169);
        img.vertex(248, 192);
        img.vertex(259, 212);
        img.vertex(259, 248);
        img.vertex(253, 270);
        img.vertex(245, 287);
        img.vertex(235, 297);
        img.vertex(234, 333);
        img.vertex(223, 344);
        img.vertex(223, 294);
        img.vertex(229, 286);
        img.vertex(242, 270);
        img.vertex(249, 252);
        img.vertex(248, 212);
        img.vertex(242, 195);
        img.vertex(230, 177);
        img.vertex(224, 172);
        img.vertex(222, 170);
        img.vertex(221, 121);
        img.endShape();

        img.beginShape();
        img.vertex(79, 271);
        img.vertex(3, 271);
        img.vertex(3, 263);
        img.vertex(79, 263);
        img.vertex(85, 264);
        img.vertex(92, 282);
        img.vertex(105, 300);
        img.vertex(122, 310);
        img.vertex(133, 314);
        img.vertex(132, 343);
        img.vertex(3, 343);
        img.vertex(3, 336);
        img.vertex(124, 336);
        img.vertex(124, 319);
        img.vertex(108, 314);
        img.vertex(93, 302);
        img.vertex(83, 283);
        img.vertex(79, 272);
        img.endShape();

        img.strokeWeight(3);
        img.stroke(196, 193, 171);
        img.fill(219, 216, 178);
        img.ellipse(165, 234, 145, 149);

        img.push();
        img.translate(6, -3);

        img.strokeWeight(4);
        img.line(198, 266, 198, 210);
        img.line(118, 262, 118, 210);
        img.line(159, 180, 197, 208);
        img.line(157, 180, 118, 209);
        img.line(197, 266, 159, 292);
        img.line(118, 262, 157, 293);
        img.line(185, 241, 170, 254);
        img.line(185, 239, 172, 226);
        img.line(148, 254, 169, 254);
        img.line(148, 225, 170, 225);
        img.line(145, 254, 132, 242);
        img.line(145, 225, 132, 240);

        img.strokeWeight(2);
        img.line(158, 287, 147, 260);
        img.line(158, 287, 168, 260);
        img.line(158, 188, 147, 219);
        img.line(158, 189, 168, 219);
        img.line(193, 214, 188, 235);
        img.line(193, 263, 188, 245);
        img.line(123, 260, 128, 243);
        img.line(123, 214, 128, 236);

        img.pop();

        img.noStroke();
        img.fill(196, 193, 171);
        img.triangle(4, 247, 4, 245, 83, 244);
        img.triangle(4, 238, 4, 236, 83, 236);
        img.triangle(4, 226, 4, 228, 96, 227);
        img.triangle(4, 218, 4, 216, 102, 218);
        img.triangle(144, 84, 143, 160, 142, 84);
        img.triangle(156, 84, 154, 154, 154, 84);
        img.triangle(169, 84, 167, 154, 167, 84);
        img.triangle(179, 84, 178, 153, 181, 84);
        img.triangle(189, 84, 188, 156, 191, 84);

        img.triangle(202, 98, 200, 165, 200, 98);
        img.triangle(212, 105, 209, 177, 210, 106);
        img.triangle(214, 351, 211, 302, 212, 353);
        img.triangle(204, 360, 201, 309, 202, 364);
        img.triangle(191, 374, 191, 315, 193, 372);
        img.triangle(180, 385, 180, 315, 182, 381);
        img.triangle(170, 388, 168, 315, 168, 388);
        img.triangle(160, 375, 158, 315, 158, 375);
        img.triangle(149, 363, 148, 315, 147, 363);
        img.triangle(141, 354, 141, 315, 139, 353);

        img.rect(200, 97, 116, 2);
        img.rect(210, 105, 106, 2);
        img.rect(3, 387, 167, 2);
        img.rect(3, 374, 157, 2);
        img.rect(3, 363, 146, 2);
        img.rect(3, 352, 137, 2);

        vent(-14, -35, 1.1);

      }

      //walls
      {

        img.strokeWeight(2);
        img.stroke(0, 0, 0);
        img.fill(128, 115, 89);
        img.rect(233, 41, 84, 48, 1);
        img.rect(79, 44, 43, 73, 1);
        img.rect(3, 124, 8, 74);

        img.quad(80, 45, 80, 117, 11, 184, 11, 102);

        img.strokeWeight(1);
        img.stroke(115, 102, 77);
        img.rect(237, 45, 36, 19, 1);
        img.rect(276, 45, 36, 19, 1);
        img.rect(237, 66, 36, 19, 1);
        img.rect(276, 66, 36, 19, 1);
        img.rect(239, 47, 3, 3, 1);
        img.rect(278, 59, 3, 3, 1);
        img.rect(83, 89, 36, 24, 1);
        img.rect(83, 48, 16, 39, 1);
        img.rect(102, 48, 16, 39, 1);
        img.rect(115, 49, 2, 2, 1);
        img.rect(84, 49, 2, 2, 1);
        img.rect(115, 91, 2, 2, 1);

        img.line(243, 81, 238, 85);

        img.quad(64, 64, 75, 54, 75, 68, 63, 115);
        img.quad(50, 75, 61, 66, 61, 118, 50, 115);
        img.quad(33, 89, 46, 78, 47, 106, 33, 115);
        img.quad(15, 105, 30, 92, 31, 121, 15, 151);


        img.noStroke();
        img.fill(0, 30);
        img.quad(316, 89, 317, 41, 304, 68, 305, 89);
        img.quad(299, 41, 317, 41, 304, 68, 305, 68);
        img.quad(111, 103, 110, 115, 127, 120, 124, 97);
        img.quad(111, 103, 110, 116, 97, 117, 98, 105);
        img.quad(82, 103, 87, 115, 97, 115, 98, 104);

        higherTask();

      }

      //p5.LEFT light bulb generators
      {

        img.push();
        img.translate(-13, 1);
        img.scale(1.1);

        img.push();
        img.translate(14, -13);

        img.strokeWeight(2);
        img.stroke(89, 89, 89);
        img.fill(173, 173, 173);
        img.beginShape();
        img.curveVertex(70, 63);
        img.curveVertex(60, 137);
        img.curveVertex(82, 143);
        img.curveVertex(82, 126);
        img.curveVertex(72, 123);
        img.curveVertex(60, 134);
        img.curveVertex(81, 218);
        img.endShape();

        img.fill(143, 143, 143);
        img.beginShape();
        img.curveVertex(69, 63);
        img.curveVertex(60, 129);
        img.curveVertex(82, 134);
        img.curveVertex(80, 123);
        img.curveVertex(72, 123);
        img.curveVertex(60, 134);
        img.curveVertex(81, 218);
        img.endShape();

        img.stroke(240, 222, 132);
        img.fill(255, 247, 207);
        img.beginShape();
        img.curveVertex(81, 200);
        img.curveVertex(63, 128);
        img.curveVertex(64, 79);
        img.curveVertex(75, 71);
        img.curveVertex(80, 79);
        img.curveVertex(81, 97);
        img.curveVertex(79, 127);
        img.curveVertex(64, 129);
        img.curveVertex(57, 110);
        img.endShape();

        img.pop();

        img.strokeWeight(2);
        img.stroke(89, 89, 89);
        img.fill(173, 173, 173);
        img.beginShape();
        img.curveVertex(70, 63);
        img.curveVertex(60, 137);
        img.curveVertex(82, 143);
        img.curveVertex(82, 126);
        img.curveVertex(72, 123);
        img.curveVertex(60, 134);
        img.curveVertex(81, 218);
        img.endShape();

        img.fill(143, 143, 143);
        img.beginShape();
        img.curveVertex(69, 63);
        img.curveVertex(60, 129);
        img.curveVertex(82, 134);
        img.curveVertex(80, 123);
        img.curveVertex(72, 123);
        img.curveVertex(60, 134);
        img.curveVertex(81, 218);
        img.endShape();

        img.stroke(240, 222, 132);
        img.fill(255, 247, 207);
        img.beginShape();
        img.curveVertex(81, 200);
        img.curveVertex(63, 128);
        img.curveVertex(64, 79);
        img.curveVertex(75, 71);
        img.curveVertex(80, 79);
        img.curveVertex(81, 97);
        img.curveVertex(79, 127);
        img.curveVertex(64, 129);
        img.curveVertex(57, 110);
        img.endShape();
        img.push();
        img.translate(-15, 15);

        img.stroke(89, 89, 89);
        img.fill(173, 173, 173);
        img.beginShape();
        img.curveVertex(70, 63);
        img.curveVertex(60, 137);
        img.curveVertex(82, 143);
        img.curveVertex(82, 126);
        img.curveVertex(72, 123);
        img.curveVertex(60, 134);
        img.curveVertex(81, 218);
        img.endShape();

        img.fill(143, 143, 143);
        img.beginShape();
        img.curveVertex(69, 63);
        img.curveVertex(60, 129);
        img.curveVertex(82, 134);
        img.curveVertex(80, 123);
        img.curveVertex(72, 123);
        img.curveVertex(60, 134);
        img.curveVertex(81, 218);
        img.endShape();

        img.stroke(240, 222, 132);
        img.fill(255, 247, 207);
        img.beginShape();
        img.curveVertex(81, 200);
        img.curveVertex(63, 128);
        img.curveVertex(64, 79);
        img.curveVertex(75, 71);
        img.curveVertex(80, 79);
        img.curveVertex(81, 97);
        img.curveVertex(79, 127);
        img.curveVertex(64, 129);
        img.curveVertex(57, 110);
        img.endShape();
        img.pop();

        img.push();
        img.translate(-32, 32);

        img.stroke(89, 89, 89);
        img.fill(173, 173, 173);
        img.beginShape();
        img.curveVertex(70, 63);
        img.curveVertex(60, 137);
        img.curveVertex(82, 143);
        img.curveVertex(82, 126);
        img.curveVertex(72, 123);
        img.curveVertex(60, 134);
        img.curveVertex(81, 218);
        img.endShape();

        img.quad(127, 98, 126, 93, 120, 95, 121, 100);
        img.quad(104, 108, 111, 107, 112, 112, 105, 113);
        img.quad(88, 123, 89, 128, 97, 127, 95, 122);
        img.quad(72, 138, 72, 145, 81, 143, 77, 135);

        img.fill(143, 143, 143);
        img.beginShape();
        img.curveVertex(69, 63);
        img.curveVertex(60, 129);
        img.curveVertex(82, 134);
        img.curveVertex(80, 123);
        img.curveVertex(72, 123);
        img.curveVertex(60, 134);
        img.curveVertex(81, 218);
        img.endShape();

        img.stroke(240, 222, 132);
        img.fill(255, 247, 207);
        img.beginShape();
        img.curveVertex(81, 200);
        img.curveVertex(63, 128);
        img.curveVertex(64, 79);
        img.curveVertex(75, 71);
        img.curveVertex(80, 79);
        img.curveVertex(81, 97);
        img.curveVertex(79, 127);
        img.curveVertex(64, 129);
        img.curveVertex(57, 110);
        img.endShape();

        img.pop();

        img.stroke(255);
        img.arc(39, 133, 5, 29, -302, 75);
        img.arc(39, 159, 7, 29, -186, 5);
        img.arc(57, 116, 5, 29, -302, 75);
        img.arc(57, 142, 7, 29, -186, 5);
        img.arc(72, 99, 5, 29, -302, 75);
        img.arc(72, 127, 7, 29, -186, 5);
        img.arc(87, 86, 5, 29, -302, 75);
        img.arc(87, 114, 7, 29, -186, 5);


        img.pop();

      }

      //rails
      {

        img.strokeWeight(2);
        img.stroke(0, 0, 0);
        img.fill(153, 42, 42);
        img.rect(25, 250, 5, 16);
        img.rect(62, 250, 5, 16);
        img.rect(84, 263, 5, 16);
        img.rect(97, 284, 5, 16);
        img.rect(113, 296, 5, 16);
        img.rect(124, 324, 5, 16);
        img.rect(98, 324, 5, 16);
        img.rect(66, 324, 5, 16);
        img.rect(32, 324, 5, 16);

        img.rect(25, 189, 5, 16);
        img.rect(61, 189, 5, 16);
        img.rect(82, 177, 5, 16);
        img.rect(96, 157, 5, 16);
        img.rect(109, 146, 5, 16);
        img.rect(125, 138, 5, 16);

        img.arc(27, 248, 20, 39, 74, 100);
        img.arc(64, 248, 20, 39, 74, 100);
        img.arc(86, 261, 20, 39, 74, 100);
        img.arc(99, 282, 20, 39, 74, 100);
        img.arc(115, 294, 20, 39, 74, 100);
        img.arc(126, 322, 20, 39, 74, 100);
        img.arc(100, 322, 20, 39, 74, 100);
        img.arc(68, 322, 20, 39, 74, 100);
        img.arc(34, 322, 20, 39, 74, 100);

        img.arc(127, 136, 20, 39, 74, 100);
        img.arc(111, 144, 20, 39, 74, 100);
        img.arc(98, 155, 20, 39, 74, 100);
        img.arc(84, 175, 20, 39, 74, 100);
        img.arc(63, 187, 20, 39, 74, 100);
        img.arc(27, 187, 20, 39, 74, 100);
        img.arc(7, 188, 20, 39, 74, 100);

        img.beginShape();
        img.curveVertex(29, 252);
        img.curveVertex(9, 267);
        img.curveVertex(6, 264);
        img.curveVertex(8, 248);
        img.curveVertex(25, 246);
        img.curveVertex(73, 246);
        img.curveVertex(82, 250);
        img.curveVertex(93, 269);
        img.curveVertex(105, 285);
        img.curveVertex(128, 301);
        img.curveVertex(132, 307);
        img.curveVertex(130, 324);
        img.curveVertex(114, 326);
        img.curveVertex(87, 326);
        img.curveVertex(19, 326);
        img.curveVertex(11, 333);
        img.curveVertex(12, 343);
        img.curveVertex(5, 338);
        img.curveVertex(10, 321);
        img.curveVertex(46, 320);
        img.curveVertex(118, 320);
        img.curveVertex(126, 312);
        img.curveVertex(124, 306);
        img.curveVertex(118, 302);
        img.curveVertex(100, 288);
        img.curveVertex(81, 259);
        img.curveVertex(73, 252);
        img.curveVertex(41, 251);
        img.curveVertex(28, 251);
        img.curveVertex(13, 252);
        img.curveVertex(10, 266);
        img.curveVertex(15, 312);
        img.endShape();

        img.beginShape();
        img.curveVertex(6, 252);
        img.curveVertex(10, 206);
        img.curveVertex(10, 193);
        img.curveVertex(18, 189);
        img.curveVertex(65, 190);
        img.curveVertex(82, 188);
        img.curveVertex(87, 175);
        img.curveVertex(99, 157);
        img.curveVertex(117, 145);
        img.curveVertex(126, 141);
        img.curveVertex(130, 134);
        img.curveVertex(130, 88);
        img.curveVertex(128, 84);
        img.curveVertex(125, 85);
        img.curveVertex(125, 89);
        img.curveVertex(125, 129);
        img.curveVertex(120, 137);
        img.curveVertex(94, 154);
        img.curveVertex(80, 177);
        img.curveVertex(70, 185);
        img.curveVertex(20, 185);
        img.curveVertex(6, 188);
        img.curveVertex(5, 207);
        img.curveVertex(3, 246);
        img.endShape();

        img.push();
        img.translate(15, 0);

        img.rect(221, 269, 5, 16);
        img.rect(233, 248, 5, 16);
        img.rect(235, 197, 5, 16);
        img.rect(228, 173, 5, 16);
        img.rect(214, 154, 5, 16);
        img.rect(222, 109, 5, 16);
        img.rect(246, 109, 5, 16);
        img.rect(273, 109, 5, 16);

        img.arc(223, 267, 20, 39, 74, 100);
        img.arc(235, 245, 20, 39, 74, 100);
        img.arc(237, 195, 20, 39, 74, 100);
        img.arc(230, 171, 20, 39, 74, 100);
        img.arc(216, 152, 20, 39, 74, 100);
        img.arc(224, 107, 20, 39, 74, 100);
        img.arc(248, 107, 20, 39, 74, 100);
        img.arc(275, 107, 20, 39, 74, 100);

        img.beginShape();
        img.curveVertex(209, 527);
        img.curveVertex(217, 335);
        img.curveVertex(218, 290);
        img.curveVertex(228, 268);
        img.curveVertex(241, 242);
        img.curveVertex(244, 210);
        img.curveVertex(236, 180);
        img.curveVertex(227, 161);
        img.curveVertex(217, 149);
        img.curveVertex(217, 116);
        img.curveVertex(226, 111);
        img.curveVertex(252, 110);
        img.curveVertex(290, 112);
        img.curveVertex(295, 126);
        img.curveVertex(300, 124);
        img.curveVertex(296, 107);
        img.curveVertex(271, 105);
        img.curveVertex(224, 106);
        img.curveVertex(212, 111);
        img.curveVertex(211, 130);
        img.curveVertex(211, 147);
        img.curveVertex(213, 155);
        img.curveVertex(226, 169);
        img.curveVertex(239, 211);
        img.curveVertex(235, 243);
        img.curveVertex(222, 267);
        img.curveVertex(214, 284);
        img.curveVertex(213, 319);
        img.curveVertex(213, 338);
        img.curveVertex(214, 493);
        img.endShape();

        img.pop();


      }

      //right light bulb generators
      {

        img.push();
        img.translate(-34, -23);
        img.scale(1.1);

        img.strokeWeight(2);
        img.stroke(89, 89, 89);
        img.fill(173, 173, 173);
        img.beginShape();
        img.curveVertex(287, 256);
        img.curveVertex(312, 254);
        img.curveVertex(309, 255);
        img.curveVertex(301, 252);
        img.curveVertex(301, 237);
        img.curveVertex(311, 236);
        img.curveVertex(320, 236);
        img.curveVertex(320, 248);
        img.curveVertex(314, 218);
        img.endShape();

        img.fill(156, 156, 156);
        img.beginShape();
        img.curveVertex(287, 256);
        img.curveVertex(319, 248);
        img.curveVertex(309, 248);
        img.curveVertex(302, 245);
        img.curveVertex(302, 237);
        img.curveVertex(311, 236);
        img.curveVertex(320, 236);
        img.curveVertex(320, 248);
        img.curveVertex(314, 218);
        img.endShape();

        img.stroke(240, 222, 132);
        img.fill(255, 247, 207);
        img.beginShape();
        img.curveVertex(304, 200);
        img.curveVertex(319, 189);
        img.curveVertex(318, 139);
        img.curveVertex(305, 137);
        img.curveVertex(302, 167);
        img.curveVertex(304, 238);
        img.curveVertex(318, 230);
        img.curveVertex(291, 218);
        img.endShape();

        img.stroke(255);
        img.arc(311, 156, 5, 29, -302, 75);

        img.stroke(240, 222, 132);
        img.fill(255, 247, 207);
        img.beginShape();
        img.curveVertex(304, 200);
        img.curveVertex(319, 239);
        img.curveVertex(318, 162);
        img.curveVertex(304, 157);
        img.curveVertex(302, 193);
        img.curveVertex(304, 238);
        img.curveVertex(318, 230);
        img.curveVertex(291, 218);
        img.endShape();

        img.stroke(255);
        img.arc(311, 177, 5, 29, -302, 75);

        img.stroke(240, 222, 132);
        img.fill(255, 247, 207);
        img.beginShape();
        img.curveVertex(304, 200);
        img.curveVertex(319, 239);
        img.curveVertex(318, 182);
        img.curveVertex(304, 179);
        img.curveVertex(302, 210);
        img.curveVertex(304, 238);
        img.curveVertex(318, 238);
        img.curveVertex(291, 218);
        img.endShape();

        img.stroke(255);
        img.arc(311, 207, 5, 29, -302, 75);
        img.arc(311, 235, 7, 29, -186, 5);

        img.pop();

      }

      //control table
      {

        lowerTask(0, -37, 1.1);

        img.stroke(0, 0, 0);
        img.fill(173, 173, 173);
        img.beginShape();
        img.curveVertex(-44, 347);
        img.curveVertex(3, 331);
        img.curveVertex(14, 338);
        img.curveVertex(15, 351);
        img.curveVertex(16, 378);
        img.curveVertex(18, 384);
        img.curveVertex(30, 384);
        img.curveVertex(72, 384);
        img.curveVertex(94, 384);
        img.vertex(101, 386);
        img.vertex(102, 390);
        img.curveVertex(102, 397);
        img.curveVertex(93, 398);
        img.curveVertex(12, 398);
        img.curveVertex(3, 397);
        img.curveVertex(3, 391);
        img.curveVertex(3, 331);
        img.curveVertex(7, 375);
        img.endShape();

        img.noStroke();
        img.fill(143, 143, 143);
        img.beginShape();
        img.curveVertex(-44, 347);
        img.curveVertex(3, 331);
        img.curveVertex(9, 338);
        img.curveVertex(9, 351);
        img.curveVertex(10, 378);
        img.curveVertex(11, 389);
        img.curveVertex(30, 390);
        img.curveVertex(72, 390);
        img.curveVertex(94, 390);
        img.vertex(101, 390);
        img.vertex(101, 390);
        img.curveVertex(101, 395);
        img.curveVertex(93, 397);
        img.curveVertex(12, 397);
        img.curveVertex(4, 397);
        img.curveVertex(4, 391);
        img.curveVertex(4, 331);
        img.curveVertex(7, 375);
        img.endShape();

        img.fill(0, 0, 0);
        img.quad(11, 337, 11, 340, 15, 350, 14, 343);
        img.quad(11, 343, 11, 346, 15, 354, 14, 348);
        img.quad(11, 349, 11, 352, 15, 358, 14, 353);
        img.quad(11, 357, 11, 367, 14, 368, 14, 359);
        img.quad(11, 374, 11, 378, 14, 379, 14, 374);

        img.rect(91, 385, 2, 1);
        img.rect(81, 385, 4, 1);
        img.rect(75, 385, 1, 1);
        img.rect(71, 385, 2, 1);
        img.rect(58, 385, 9, 1);
        img.rect(44, 385, 9, 1);
        img.rect(39, 385, 2, 1);
        img.rect(34, 385, 2, 1);
        img.rect(29, 385, 2, 1);

      }

      img.pop();

    };

    shields(0, 0, size);


    return img.get();
  },
  "upper_engine_room": function (x, y, s) {

    var img = p5.createGraphics(400 * s, 400 * s, p5.P2D);
    /**Author: The Coding Legend**/
    img.push();
    img.translate(x, y);
    img.scale(s);
    img.background(0, 0, 0);
    //Engine floor
    EngineFloor(img, 10, 10, 1.9, true);
    //Tubes
    img.fill(171, 124, 52);
    img.rect(180, 305, 460, 15, 10);
    img.rect(180, 135, 460, 15, 10);
    //Bottom set
    img.fill(147, 133, 115);
    img.rect(100, 305, 7, 15);
    img.translate(30, 0);
    img.rect(100, 305, 7, 15);
    img.translate(30, 0);
    img.rect(100, 305, 7, 15);
    img.translate(30, 0);
    img.rect(100, 305, 7, 15);
    img.translate(30, 0);
    img.rect(100, 305, 7, 15);
    img.translate(30, 0);
    img.rect(100, 305, 7, 15);
    img.translate(30, 0);
    img.rect(100, 305, 7, 15);
    img.translate(30, 0);
    img.rect(100, 305, 7, 15);
    img.translate(30, 0);
    img.rect(100, 305, 7, 15);
    img.translate(30, 0);
    img.rect(100, 305, 7, 15);
    img.translate(-270, -170);
    //Top set
    img.rect(100, 305, 7, 15);
    img.translate(30, 0);
    img.rect(100, 305, 7, 15);
    img.translate(30, 0);
    img.rect(100, 305, 7, 15);
    img.translate(30, 0);
    img.rect(100, 305, 7, 15);
    img.translate(30, 0);
    img.rect(100, 305, 7, 15);
    img.translate(30, 0);
    img.rect(100, 305, 7, 15);
    img.translate(30, 0);
    img.rect(100, 305, 7, 15);
    img.translate(30, 0);
    img.rect(100, 305, 7, 15);
    img.translate(30, 0);
    img.rect(100, 305, 7, 15);
    img.translate(30, 0);
    img.rect(100, 305, 7, 15);
    img.translate(-270, 170);
    //Vent
    img.scale(0.5);
    img.translate(380, 100);
    img.fill(179, 179, 179);
    img.stroke(0, 0, 0);
    img.strokeWeight(3);
    img.rect(350, 50, 60, 50, 15);
    img.stroke(135, 135, 135);
    img.translate(0, -3);
    img.line(329, 38, 371, 38);
    img.translate(0, 10);
    img.line(329, 38, 371, 38);
    img.translate(0, 10);
    img.line(329, 38, 371, 38);
    img.translate(0, 10);
    img.line(329, 38, 371, 38);
    img.translate(-380, -100);
    img.scale(2);
    //Walls
    img.stroke(0, 0, 0);
    img.fill(115, 111, 102);
    img.strokeWeight(1.5);
    img.rect(250, 0, 300, 70);
    img.quad(100, -13, 100, 35, 16, 111, -13, 90);
    //Small shadow in the corner
    img.fill(81, 78, 68);
    img.noStroke();
    img.rect(393, 29, 17, 10);
    //Metal thing
    img.strokeWeight(10);
    img.stroke(60, 64, 63);
    img.line(300, 30, 300, -13);
    img.line(300, 5, 320, 5);
    img.line(320, 5, 320, -13);
    //Wires (I think)
    img.strokeWeight(5);
    img.stroke(31, 28, 22);
    img.line(340, -13, 343, 15);
    img.line(356, -13, 353, 7);
    //Mop
    img.strokeWeight(8);
    img.stroke(84, 83, 76);
    img.line(260, -13, 265, 23);
    img.rotate(-15);
    img.stroke(175, 172, 163);
    img.ellipse(240, 97, 20, 8);
    img.rotate(15);
    img.triangle(245, 34, 248, 37, 242, 38);
    //Other Wires
    img.stroke(0, 0, 0);
    img.noFill();
    img.beginShape();
    img.curveVertex(97, 52);
    img.curveVertex(26, 79);
    img.curveVertex(100, 144);
    img.curveVertex(497, 227);
    img.endShape();
    img.translate(12, 2);
    img.beginShape();
    img.curveVertex(-78, 52);
    img.curveVertex(15, 79);
    img.curveVertex(100, 144);
    img.curveVertex(497, 227);
    img.endShape();
    img.translate(-12, -15);
    //Ellipse thing
    img.stroke(0, 0, 0);
    img.strokeWeight(1);
    img.fill(173, 173, 173);
    img.ellipse(62, 57, 15, 25);
    //Wires attached to box
    img.stroke(255, 213, 0);
    img.strokeWeight(3);
    img.line(200, 30, 210, 30);
    img.line(226, -13, 210, 30);
    //Box
    img.stroke(0, 0, 0);
    img.rect(190, 30, 20, 20);
    //Drawing engine
    drawEngine(img, 0, 100, 270);
    img.pop();
    return img.get();
  },

  "lower_engine_room": function (x, y, s) {
    var img = p5.createGraphics(400 * s, 400 * s, p5.P2D);
    /**Author: The Coding Legend**/
    img.push();
    img.translate(x, y);
    img.scale(s);
    img.background(0, 0, 0);
    //Engine floor
    EngineFloor(img, 10, 10, 1.9, false);
    //Tubes
    img.fill(171, 124, 52);
    img.rect(180, 305, 460, 15, 10);
    img.rect(180, 135, 460, 15, 10);
    //Bottom set
    img.fill(147, 133, 115);
    img.rect(100, 305, 7, 15);
    img.translate(30, 0);
    img.rect(100, 305, 7, 15);
    img.translate(30, 0);
    img.rect(100, 305, 7, 15);
    img.translate(30, 0);
    img.rect(100, 305, 7, 15);
    img.translate(30, 0);
    img.rect(100, 305, 7, 15);
    img.translate(30, 0);
    img.rect(100, 305, 7, 15);
    img.translate(30, 0);
    img.rect(100, 305, 7, 15);
    img.translate(30, 0);
    img.rect(100, 305, 7, 15);
    img.translate(30, 0);
    img.rect(100, 305, 7, 15);
    img.translate(30, 0);
    img.rect(100, 305, 7, 15);
    img.translate(-270, -170);
    //Top set
    img.rect(100, 305, 7, 15);
    img.translate(30, 0);
    img.rect(100, 305, 7, 15);
    img.translate(30, 0);
    img.rect(100, 305, 7, 15);
    img.translate(30, 0);
    img.rect(100, 305, 7, 15);
    img.translate(30, 0);
    img.rect(100, 305, 7, 15);
    img.translate(30, 0);
    img.rect(100, 305, 7, 15);
    img.translate(30, 0);
    img.rect(100, 305, 7, 15);
    img.translate(30, 0);
    img.rect(100, 305, 7, 15);
    img.translate(30, 0);
    img.rect(100, 305, 7, 15);
    img.translate(30, 0);
    img.rect(100, 305, 7, 15);
    img.translate(-270, 170);
    //Vent
    img.scale(0.5);
    img.translate(380, 690);
    img.fill(179, 179, 179);
    img.stroke(0, 0, 0);
    img.strokeWeight(3);
    img.rect(350, 50, 60, 50, 15);
    img.stroke(135, 135, 135);
    img.translate(0, -3);
    img.line(329, 38, 371, 38);
    img.translate(0, 10);
    img.line(329, 38, 371, 38);
    img.translate(0, 10);
    img.line(329, 38, 371, 38);
    img.translate(0, 10);
    img.line(329, 38, 371, 38);
    img.translate(-380, -690);
    img.scale(2);
    //Walls
    img.stroke(0, 0, 0);
    img.fill(115, 111, 102);
    img.strokeWeight(1.5);
    img.rect(76, 0, 150, 70);
    img.rect(325, 0, 150, 70);
    //Box
    img.fill(153, 153, 153);
    img.rect(130, 20, 15, 12);
    //Black wire
    img.strokeWeight(4);
    img.line(270, -13, 273, 20);
    //IKD What. Ladder?
    img.fill(78, 76, 63);
    img.stroke(78, 76, 63);
    img.rect(315, -13, 20, 89);
    img.stroke(95, 94, 82);
    img.strokeWeight(6);
    img.beginShape();
    img.vertex(325, -13);
    img.vertex(300, 0);
    img.vertex(325, 10);
    img.vertex(300, 28);
    img.endShape();
    img.strokeWeight(7);
    img.stroke(78, 74, 53);
    img.line(300, -13, 300, 30);
    img.line(330, -13, 330, 30);
    img.translate(-240, 0);
    img.fill(78, 76, 63);
    img.stroke(78, 76, 63);
    img.rect(315, -13, 20, 85);
    img.stroke(95, 94, 82);
    img.strokeWeight(6);
    img.beginShape();
    img.vertex(325, -13);
    img.vertex(300, 0);
    img.vertex(325, 10);
    img.vertex(300, 28);
    img.endShape();
    img.strokeWeight(8);
    img.stroke(78, 74, 53);
    img.line(300, -13, 300, 30);
    img.line(330, -13, 330, 30);
    img.translate(240, -10);
    //Lines
    img.stroke(122, 122, 122);
    img.strokeWeight(5);
    for (var i = 0; i < 5; i++) {
      img.stroke(94, 108, 115);
      img.line(345 + i * 3, -13, 345 + i * 3, 40);
      img.stroke(102, 102, 102);
      img.line(345 + i * 6, -13, 345 + i * 6, 41);
      img.stroke(54, 52, 54);
      img.line(345 + i * 7, -13, 345 + i * 7, 41);
    }
    img.noStroke();
    img.fill(92, 89, 83);
    img.rect(29, -13, 54, 112.5);
    //Drawing engine
    drawEngine(img, 0, 100, 270);
    img.pop();

    return img.get();
  },

  "hallway_2": function (x, y, s) {

    /**Created By astronaut321 @openPodBayDoorsHal **/
    var img = p5.createGraphics(500 * s, 257 * s, p5.P2D);
    img.scale(s);
    img.translate(105, -70);
    img.fill(127, 173, 199);
    img.noStroke();
    img.rect(-105, 79, 339 + 139, 74);
    img.fill(132, 201, 209);
    img.arc(123, 79, 71, 145, 0, 180);
    img.arc(290, 79, 71, 145, 0, 180);
    img.arc(9, 79, 71, 145, 0, 180);

    img.stroke(127, 199, 199);
    img.line(191, 80, 191, 146);
    img.line(-81, 80, -81, 146);
    img.line(350, 80, 350, 146);


    img.noStroke();

    img.fill(232, 232, 232);

    img.rect(369, 79, 26, 74);
    img.fill(196, 196, 196);
    img.rect(-105, 153, 499, 84);
    img.rect(150, 236, 120, 88);
    img.fill(130, 130, 130);
    img.rect(4, 153, 13, 85);
    img.rect(117, 153, 13, 85);
    img.rect(283, 153, 13, 85);
    img.rect(381, 153, 13, 85);
    img.rect(-105, 153, 13, 85);
    img.rect(-105, 153, 500, 6);

    img.fill(199, 234, 255);
    img.rect(113, 79, 20, 73, 0, 0, 10, 10);
    img.rect(280, 79, 20, 73, 0, 0, 10, 10);

    //floor plating
    img.stroke(115, 115, 115);
    img.noFill();



    img.rect(21, 159, 41, 73, 10);
    img.rect(70, 159, 41, 73, 10);
    img.rect(136, 159, 41, 73, 10);
    img.rect(186, 159, 41, 73, 10);
    img.rect(235, 159, 41, 73, 10);
    img.rect(301, 159, 35, 73, 10);
    img.rect(341, 159, 35, 73, 10);
    img.rect(153, 239, 112, 37, 10);
    img.rect(153, 281, 112, 37, 10);

    img.rect(-42, 159, 41, 73, 10);
    img.rect(-87, 159, 41, 73, 10);

    for (var l = 21; l < 59; l += 6) {
      img.line(l, 225, l, 166);

    }

    for (var l = 76; l < 108; l += 6) {
      img.line(l, 225, l, 166);

    }

    for (var l = 141; l < 172; l += 6) {
      img.line(l, 225, l, 166);

    }
    for (var l = 192; l < 227; l += 6) {
      img.line(l, 225, l, 166);

    }

    for (var l = 241; l < 273; l += 6) {
      img.line(l, 225, l, 166);

    }
    for (var l = 307; l < 333; l += 6) {
      img.line(l, 225, l, 166);

    }

    for (var l = 347; l < 373; l += 6) {
      img.line(l, 225, l, 166);

    }
    for (var l = 244; l < 277; l += 7) {
      img.line(160, l, 258, l);

    }

    for (var l = 286; l < 316; l += 7) {
      img.line(160, l, 258, l);

    }

    for (var l = -36; l < -1; l += 6) {
      img.line(l, 225, l, 166);

    }

    for (var l = -81; l < -46; l += 6) {
      img.line(l, 225, l, 166);

    }
    img.stroke(0, 242, 255);
    img.line(-104, 156, 392, 156);

    //!font//p5.textFont(p5.loadFont("monospace"));
    img.fill(255, 196, 0);
    img.text("CAFETERIA", 200, 98);
    img.stroke(255, 196, 0);
    img.line(367, 103, 200, 103);

    img.fill(255, 0, 0);
    img.text("ENGINE", 146, 124);
    img.stroke(255, 0, 0);
    img.line(185, 129, -103, 129);


    img.noStroke();
    img.fill(199, 234, 255);
    img.rect(113, 79, 20, 73, 0, 0, 10, 10);
    img.rect(280, 79, 20, 73, 0, 0, 10, 10);
    img.rect(0, 79, 20, 73, 0, 0, 10, 10);
    img.strokeWeight(4);
    img.stroke(133, 133, 133);
    img.fill(0, 234, 255);
    img.rect(264, 84, 10, 28, 5);
    img.rect(306, 84, 10, 28, 5);
    img.rect(138, 84, 10, 28, 5);
    img.rect(98, 84, 10, 28, 5);
    img.rect(25, 84, 10, 28, 5);
    img.rect(-17, 84, 10, 28, 5);

    img.strokeWeight(6);

    img.fill(74, 74, 74);
    img.noStroke();
    img.rect(56, 79, 8, 74);
    img.rect(68, 79, 8, 74);
    img.stroke(74, 74, 74);
    img.line(50, 82, 50, 133);
    img.line(82, 82, 82, 136);
    img.noFill();
    img.stroke(74, 74, 74);

    img.arc(27, 136, 45, 28, 0, 90);
    img.arc(105, 136, 45, 28, 90, 180);
    img.line(105, 150, 391, 150);
    img.line(-103, 150, 32, 150);

    img.fill(232, 232, 232);
    img.strokeWeight(1);
    img.stroke(0, 0, 0);
    img.line(113, 142, 133, 142);
    img.line(-1, 142, 19, 142);
    img.line(280, 142, 300, 142);
    img.noStroke();

    img.fill(94, 94, 94);
    img.rect(-105, 70, 498, 10);
    img.rect(-105, 237, 255, 10);
    img.rect(270, 237, 123, 10);
    img.rect(270, 237, 10, 86);
    img.rect(140, 237, 10, 86);
    return img.get();

  },


};
return { imgSource, drawCharacter, drawCharacterBody, joffreyText, pixelText}

}

export default Loader