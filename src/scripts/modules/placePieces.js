module.exports.placePieces = function (game) {
  document.getElementById("board").setAttribute("data-turnColor", game.turnColor);
  game.whitePieces.forEach((piece, index) => placePiece(piece, index, "white"));
  game.blackPieces.forEach((piece, index) => placePiece(piece, index, "black"));
};


function placePiece(piece, index, color) {
  const targetSquare = `square--${piece.x}--${piece.y}`;
  const square = document.getElementById(targetSquare);
  const innerDiv = square.querySelector("div");
  square.classList.add("occupied", `occupied--${color}`);
  square.setAttribute("data-piece", `${color}--${index}--${piece.type}`);
  innerDiv.innerHTML = `${piece.type}<br>${color}`;
}

module.exports.placePiece = placePiece;