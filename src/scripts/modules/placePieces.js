module.exports.placePieces = function (game) {
  document.getElementById("board").setAttribute("data-turnColor", game.turnColor);
  game.whitePieces.forEach(piece => placePiece(piece, "white"));
  game.blackPieces.forEach(piece => placePiece(piece, "black"));
};


function placePiece(piece, color) {
  const targetSquare = `square--${piece.x}--${piece.y}`;
  const square = document.getElementById(targetSquare);
  const innerDiv = square.querySelector("div");
  square.classList.add("occupied", `occupied--${color}`);
  square.setAttribute("data-piece", `${color}--${piece.type}`);
  innerDiv.innerHTML = `${piece.type}<br>${color}`;
}

module.exports.placePiece = placePiece;