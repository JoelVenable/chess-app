import {
  pieceSwitchboard
} from "./possibleMoves/switchboard";


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





function getPieceData(squareId) {
  let square = document.getElementById(squareId);
  let data = square.getAttribute("data-piece").split("--");
  let hasMoved = square.getAttribute("data-hasMoved");
  let idSplit = squareId.split("--");
  return {
    square: square, // DOM element
    x: parseInt(idSplit[1]),
    y: parseInt(idSplit[2]),
    color: data[0],
    moved: hasMoved === "true",
    index: parseInt(data[1]),
    type: data[2]
  };

}



function showAvailiableMovesOnDOM(movesArray) {
  //  MovesArray is an array of objects containing [x] and [y] keys with values from 0 to 7.
  movesArray.forEach(move => {
    if (move !== null) move.classList.add("available");
  });

}