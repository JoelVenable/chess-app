import {
  pawnMoves
} from "./pawn";
import {
  knightMoves
} from "./knight";
import {
  bishopMoves
} from "./bishop";
import {
  rookMoves
} from "./rook";
import {
  queenMoves
} from "./queen";
import {
  kingMoves
} from "./king";







module.exports.pieceSwitchboard = function (pieceData) {
  switch (pieceData.type) {
    case "pn":
      return pawnMoves(pieceData);
    case "kn":
      return knightMoves(pieceData); // Bob Seger anyone??
    case "bi":
      return bishopMoves(pieceData);
    case "rk":
      return rookMoves(pieceData);
    case "qn":
      return queenMoves(pieceData);
    case "ki":
      return kingMoves(pieceData);
  }
};