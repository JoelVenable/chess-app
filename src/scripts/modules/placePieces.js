import {
  getFontChar
} from "./font";

module.exports.placePieces = function (game) {
  clearBoard();
  let chessboard = document.getElementById("board");
  chessboard.setAttribute("data-turnColor", game.turnColor);
  chessboard.setAttribute("data-gameID", game.id);
  game.whitePieces.forEach(piece => module.exports.placePiece(piece, "white"));
  game.blackPieces.forEach(piece => module.exports.placePiece(piece, "black"));
};




module.exports.getSquareColor = function (squareID) {
  let square = document.getElementById(squareID);
  if (square.classList.contains("square-white")) return "white";
  else return "black";
};

function clearBoard() {
  let squares = document.querySelectorAll(".square");
  squares.forEach(square => {
    square.classList.remove("occupied", "occupied--white", "occupied--black");
    square.removeAttribute("data-piece");
    square.removeAttribute("data-hasmoved");
  });
}

module.exports.placePiece = function (piece, color) {
  const targetSquare = `square--${piece.x}--${piece.y}`;
  const square = document.getElementById(targetSquare);
  let squareColor = module.exports.getSquareColor(targetSquare);
  square.innerHTML = getFontChar(piece, color, squareColor);
  square.classList.add("occupied", `occupied--${color}`);
  square.setAttribute("data-piece", `${color}--${piece.id}--${piece.type}`);
  square.setAttribute("data-hasMoved", piece.moved);
};