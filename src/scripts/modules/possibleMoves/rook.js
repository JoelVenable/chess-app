import {
  makeRectangles
} from "./helpers";

module.exports.rookMoves = function (pieceData) {

  if (pieceData.moved) {
    //  TODO: check for castling

  }
  return makeRectangles(pieceData);
};