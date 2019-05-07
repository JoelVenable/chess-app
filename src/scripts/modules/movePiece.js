import {
  getPieceData
} from "./getPieceData";
import {
  fetchGameData,
  updateMove
} from "./APIinterface";

module.exports.movePiece = function (targetSquare) {
  fetchGameData(getGameID())
    .then(gameObject => {
      updateMove(updateGameObject(gameObject, targetSquare));
    });
};





function updateGameObject(gameObject, targetSquare) {
  let activeColor = getActiveColor();
  let newPieceObject = pieceObjectFactory(targetSquare);
  //  find piece to update
  let colorPieces = gameObject[`${activeColor}Pieces`];
  let pieceIndex = colorPieces
    .findIndex(piece => piece.id === newPieceObject.id);
  let newData = {};
  colorPieces.splice(pieceIndex, 1, newPieceObject);
  newData[`${activeColor}Pieces`] = colorPieces;
  if (activeColor === "white") {
    newData.turnColor = "black";
  } else {
    newData.turnColor = "white";
    newData.turnNumber = ++gameObject.turnNumber;
  }
  return newData;
}






function pieceObjectFactory(targetSquare) {
  let chessboard = document.getElementById("board"),
    activeSquareID = chessboard.getAttribute("data-activesquare-id"),
    pieceToMove = getPieceData(activeSquareID),
    newSquare = targetSquare.split("--");
  //  TODO: Check for pawn on last row

  return {
    type: pieceToMove.type,
    x: parseInt(newSquare[1]),
    y: parseInt(newSquare[2]),
    moved: true,
    id: pieceToMove.id
  };

}


function getActiveColor() {
  return document.getElementById("board").getAttribute("data-turncolor");
}

function getGameID() {
  return parseInt(document.getElementById("board").getAttribute("data-gameID"));
}