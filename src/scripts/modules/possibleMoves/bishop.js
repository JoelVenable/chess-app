import {
  makeDiagonals
} from "./helpers";

module.exports.bishopMoves = function (pieceData) {
  return makeDiagonals(pieceData);
};