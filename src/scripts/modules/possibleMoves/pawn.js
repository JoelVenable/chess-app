import {
  getSquare,
  isEnemy,
  isOccupied
} from "./helpers";


module.exports.pawnMoves = function (pieceData) {
  // Set direction of movement
  let direction = 1;
  if (pieceData.color === "white") direction = -1;
  let x = pieceData.x,
    y = pieceData.y;

  let outputArray = [];
  let squares = [
    getSquare(x + direction, y),
    getSquare(x + (direction * 2), y),
    getSquare(x + direction, y + 1),
    getSquare(x + direction, y - 1)
  ];
  if (!isOccupied(squares[0])) {
    // can move forward, add square to array
    outputArray.push(squares[0]);

    //  Check for second square
    if (!pieceData.moved) {
      if (!isOccupied(squares[1])) outputArray.push(squares[1]);
    }
  }
  for (let i = 2; i < 4; i++) {
    if (isOccupied(squares[i]) && isEnemy(squares[i])) outputArray.push(squares[i]);
  }
  return outputArray;
};