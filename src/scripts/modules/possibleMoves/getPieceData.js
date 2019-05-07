/*
pieceData object is passed to the various pieces as they are selected to potentially move.

It contains the following properties:
square:   The DOM element the square is located in
x:        The x position component of the square id, expressed as a number
y:        The y position component of the square id, expressed as a number
color:    "white" or "black" denoting the color piece that is selected
moved:    Checks whether the piece has moved.  This is important only for pawns, rooks, and kings.
index:    The array position of the piece in the JSON database.
type:     "pn", "kn", "rk", "bi", "kn", "qn", or "ki", denoting the kind of piece targeted.

*/

module.exports.getPieceData = function (squareId) {
  let square = document.getElementById(squareId);
  let data = square.getAttribute("data-piece").split("--");
  let hasMoved = square.getAttribute("data-hasMoved");
  let idSplit = squareId.split("--");
  return {
    square: square, // DOM element
    x: parseInt(idSplit[1]),
    y: parseInt(idSplit[2]),
    color: data[0],
    moved: hasMoved === "true",
    index: parseInt(data[1]),
    type: data[2]
  };

};