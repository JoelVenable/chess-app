module.exports.getFontChar = function (piece, color, squareColor) {
  let lookup = `${color}${piece.type}`;
  let char = values[lookup];

  console.log(char);
  if (squareColor === "black") char = char.toUpperCase();
  return char;
};



const values = {
  whitepn: "p",
  blackpn: "o",
  whitekn: "n",
  blackkn: "m",
  whitebi: "b",
  blackbi: "v",
  whiterk: "r",
  blackrk: "t",
  whiteqn: "q",
  blackqn: "w",
  whiteki: "k",
  blackki: "l"
};