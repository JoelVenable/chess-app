import {
  getSquare,
  checkSquares
} from "./helpers";


module.exports.kingMoves = function (pieceData) {

  // TODO: castling behavior, reducing available moves for spaces covered by enemy.


  const x = pieceData.x,
    y = pieceData.y;
  let moves = [
    getSquare(x, y + 1),
    getSquare(x, y - 1),
    getSquare(x + 1, y),
    getSquare(x - 1, y),
    getSquare(x + 1, y + 1),
    getSquare(x + 1, y - 1),
    getSquare(x - 1, y + 1),
    getSquare(x - 1, y - 1)
  ];

  return checkSquares(moves);

};