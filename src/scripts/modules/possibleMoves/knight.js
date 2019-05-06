import {
  getSquare,
  checkSquares
} from "./helpers";

module.exports.knightMoves = function (pieceData) {
  let x = pieceData.x;
  let y = pieceData.y;
  let possibles = [
    getSquare(x + 2, y + 1),
    getSquare(x + 2, y - 1),
    getSquare(x - 2, y + 1),
    getSquare(x - 2, y - 1),
    getSquare(x + 1, y + 2),
    getSquare(x + 1, y - 2),
    getSquare(x - 1, y + 2),
    getSquare(x - 1, y - 2),
  ];
  return checkSquares(possibles);
};