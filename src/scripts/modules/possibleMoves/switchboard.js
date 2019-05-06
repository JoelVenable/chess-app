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
  let outputArray;
  switch (pieceData.type) {
    case "pn":
      outputArray = pawnMoves(pieceData);
      break;

    case "kn":
      outputArray = knightMoves(pieceData); // Bob Seger anyone??
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
  return outputArray;
};