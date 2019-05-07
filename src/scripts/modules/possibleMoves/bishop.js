import {
  makeDiagonals
} from "./helpers";

module.exports.bishopMoves = function (pieceData) {
  console.log("Hello from bishopMoves");
  return makeDiagonals(pieceData);
};