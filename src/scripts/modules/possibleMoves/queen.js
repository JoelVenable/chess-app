import {
  makeRectangles,
  makeDiagonals
} from "./helpers";

module.exports.queenMoves = function (pieceData) {
  let array = [
    ...makeRectangles(pieceData),
    ...makeDiagonals(pieceData)
  ];
  return array;
};