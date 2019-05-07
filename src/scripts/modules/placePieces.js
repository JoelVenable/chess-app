module.exports.placePieces = function (game) {
  clearBoard();
  let chessboard = document.getElementById("board");
  chessboard.setAttribute("data-turnColor", game.turnColor);
  chessboard.setAttribute("data-gameID", game.id);
  game.whitePieces.forEach(piece => module.exports.placePiece(piece, "white"));
  game.blackPieces.forEach(piece => module.exports.placePiece(piece, "black"));
};


module.exports.placePiece = function (piece, color) {
  const targetSquare = `square--${piece.x}--${piece.y}`;
  const square = document.getElementById(targetSquare);
  const innerDiv = square.querySelector("div");
  square.classList.add("occupied", `occupied--${color}`);
  square.setAttribute("data-piece", `${color}--${piece.id}--${piece.type}`);
  square.setAttribute("data-hasMoved", piece.moved);
  innerDiv.innerHTML = `${piece.type}<br>${color}`;
};

function clearBoard() {
  let squares = document.querySelectorAll(".square");
  squares.forEach(square => {
    square.classList.remove("occupied", "occupied--white", "occupied--black");
    square.removeAttribute("data-piece");
    square.removeAttribute("data-hasmoved");
  });
}