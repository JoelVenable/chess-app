module.exports.showLegalMoves = function (squareClicked) {
  //  TODO: see if king is checked
  //  if so, can current piece kill or shadow the checking piece

  //checkHandler(squareClicked)
  let pieceData = getPieceData(squareClicked);
  pieceSwitchboard(pieceData);
};






function getPieceData(squareId) {
  let square = document.getElementById(squareId);
  let data = square.getAttribute("data-piece").split("--");
  let hasMoved = square.getAttribute("data-hasMoved");
  let idSplit = squareId.split("--");
  return {
    square: square, // DOM element
    x: parseInt(idSplit[1]),
    y: parseInt(idSplit[2]),
    color: data[0],
    moved: hasMoved,
    index: parseInt(data[1]),
    type: data[2]
  };

}



function showAvailbleMovesOnDOM(movesArray) {
  //  MovesArray is an array of objects containing [x] and [y] keys with values from 0 to 7.
  movesArray.forEach(move => {
    if (move !== null) move.classList.add("available");
  });

}




function pieceSwitchboard(pieceData) {
  let outputArray;
  switch (pieceData.type) {
    case "pn":
      outputArray = pawnMoves(pieceData);
      break;

    case "kn":
      outputArray = knightMoves(pieceData);
      break;

    case "bi":
      outputArray = bishopMoves(pieceData);
      break;

    case "rk":
      outputArray = rookMoves(pieceData);
      break;

    case "qn":
      outputArray = queenMoves(pieceData);
      break;

    case "kg":
      outputArray = kingMoves(pieceData);
      break;
  }
  showAvailbleMovesOnDOM(outputArray);
}


function pawnMoves(pieceData) {
  // Set direction of movement
  let direction = 1;
  if (pieceData.color = "white") direction = -1;
  let x = pieceData.x,
    y = pieceData.y;

  let outputArray = [];
  let square = getSquare(x, y);
  let squareOne = getSquare(x + direction, y);
  let squareTwo = getSquare(x + (direction * 2), y);
  let diagOne = getSquare(x + direction, y + 1);
  let diagTwo = getSquare(x + direction, y - 1);

  if (!isOccupied(squareOne)) {
    // can move forward, add square to array
    outputArray.push(squareOne);

    //  Check for second square
    if (!pieceData.hasMoved) {
      if (!isOccupied(squareTwo)) outputArray.push(squareTwo);
    }
  }

  if (isOccupied(diagOne) && isEnemy(diagOne)) outputArray.push(diagOne);
  if (isOccupied(diagTwo) && isEnemy(diagTwo)) outputArray.push(diagTwo);


  return outputArray;
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

function getSquare(x, y) {
  if (x < 0 || x > 7) return null;
  if (y < 0 || y > 7) return null;
  return document.getElementById(`square--${x}--${y}`);
}