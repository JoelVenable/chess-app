module.exports = {
  getSquare: getSquare,
  checkSquares: checkSquares,
  isOccupied: isOccupied,
  isEnemy: isEnemy,
  makeDiagonals: makeDiagonals,
  makeRectangles: makeRectangles
};

function getSquare(x, y) {
  if (x < 0 || x > 7) return null;
  if (y < 0 || y > 7) return null;
  return document.getElementById(`square--${x}--${y}`);
}

function makeRectangles(pieceData) {
  let output = [],
    x = pieceData.x,
    y = pieceData.y;
  for (let i = 0; i < 7; i++) {
    output.push(getSquare(x + i, y));
    output.push(getSquare(x - i, y));
    output.push(getSquare(x, y + i));
    output.push(getSquare(x, y - i));
  }
  return checkSquares(output);
}



function makeDiagonals(pieceData) {
  let output = [];
  let x = pieceData.x;
  let y = pieceData.y;
  for (let i = 0; i < 7; i++) {
    output.push(getSquare(x + i, y + i));
    output.push(getSquare(x + i, y - i));
    output.push(getSquare(x - i, y + i));
    output.push(getSquare(x - i, y - i));
  }
  return checkSquares(output);
}



function checkSquares(arrayOfSquares) {
  //  Dont' use this for pawns!!
  return arrayOfSquares.filter(square => {
    if (square === null) return false;
    if (isOccupied(square) && !isEnemy(square)) return false;
    else return true;
  });
}

function isOccupied(squareElement) {
  if (squareElement === null) return null;
  return squareElement.classList.contains("occupied");
}

function isEnemy(squareElement) {
  if (squareElement === null) return null;
  let turnColor = document.getElementById("board").getAttribute("data-turncolor");
  if (isOccupied(squareElement)) {
    let targetColor = squareElement.getAttribute("data-piece").split("--")[0];
    if (targetColor !== turnColor) return true;
  }
  return false;
}