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
  let quad = [true, true, true, true];

  for (let i = 1; i < 8; i++) {
    if (quad[0]) {
      let square = getSquare(x + i, y);
      quad[0] = !isOccupied(square);
      output.push(square);
    }
    if (quad[1]) {
      let square = getSquare(x - i, y);
      quad[1] = !isOccupied(square);
      output.push(square);
    }
    if (quad[2]) {
      let square = getSquare(x, y + i);
      quad[2] = !isOccupied(square);
      output.push(square);
    }
    if (quad[3]) {
      let square = getSquare(x, y - i);
      quad[3] = !isOccupied(square);
      output.push(square);
    }
  }
  return checkSquares(output);
}


function checkStop(square) {

}



function makeDiagonals(pieceData) {
  let output = [];
  let x = pieceData.x;
  let y = pieceData.y;
  let quad = [true, true, true, true];
  for (let i = 1; i < 8; i++) {
    if (quad[0]) {
      let square = getSquare(x + i, y + i);
      quad[0] = !isOccupied(square);
      output.push(square);
    }
    if (quad[1]) {
      let square = getSquare(x + i, y - i);

      quad[1] = !isOccupied(square);
      output.push(square);
    }
    if (quad[2]) {
      let square = getSquare(x - i, y + i);

      quad[2] = !isOccupied(square);
      output.push(square);
    }
    if (quad[3]) {
      let square = getSquare(x - i, y - i);

      quad[3] = !isOccupied(square);
      output.push(square);
    }
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