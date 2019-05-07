import {
  pieceSwitchboard
} from "./possibleMoves/switchboard";
import {
  getPieceData
} from "./getPieceData";



module.exports.showLegalMoves = function (squareClicked) {
  //  TODO: see if king is checked
  //  See if moving the piece can reveal a check
  //  if so, can current piece kill or shadow the checking piece
  //checkHandler(squareClicked)
  let pieceData = getPieceData(squareClicked);
  showAvailiableMovesOnDOM(
    pieceSwitchboard(pieceData)
  );
};






function showAvailiableMovesOnDOM(movesArray) {
  //  MovesArray is an array of objects containing [x] and [y] keys with values from 0 to 7.
  movesArray.forEach(move => {
    if (move !== null) move.classList.add("available");
  });

}