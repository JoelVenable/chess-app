import {
  getPieceData
} from "../getPieceData";
import {
  fetchGameData,
  updateMove
} from "../API/APIinterface";
import {
  isOccupied
} from "../possibleMoves/helpers";


module.exports.movePiece = function (targetSquare) {
  fetchGameData(getGameID())
    .then(gameObject => {
      updateMove(updateGameObject(gameObject, targetSquare));
    });
};





function updateGameObject(gameObject, targetSquare) {
  const myColor = getActiveColor(),
    myPieces = gameObject[`${myColor}Pieces`],
    enemyColor = getEnemyColor(),
    enemyPieces = gameObject[`${enemyColor}Pieces`],
    targetElement = document.getElementById(targetSquare);


  // Build new object for database
  let newGameObject = {
    turnColor: enemyColor,
    turnNumber: gameObject.turnNumber
  };
  if (myColor === "black") newGameObject.turnNumber++;


  if (isOccupied(targetElement)) {
    newGameObject[`${enemyColor}Pieces`] = takeEnemyPiece(targetSquare, enemyPieces);
  }

  newGameObject[`${myColor}Pieces`] = updateMyPieces(targetSquare, myPieces);

  return newGameObject;
}



function updateMyPieces(targetSquare, myPieces) {

  let newPieceObject = pieceObjectFactory(targetSquare);
  //  find piece to update

  // remove existing piece from array
  let newPieces = myPieces
    .filter(piece => piece.id !== newPieceObject.id);
  newPieces.push(newPieceObject);

  return newPieces;
}



function takeEnemyPiece(targetID, enemyPieces) {
  let pieceToRemove = getPieceData(targetID);
  return enemyPieces
    .filter(piece => piece.id !== pieceToRemove.id);
  //  Return the modified array
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

function getEnemyColor() {
  let activeColor = getActiveColor();
  if (activeColor === "white") return "black";
  else return "white";
}

function getGameID() {
  return parseInt(document.getElementById("board").getAttribute("data-gameID"));
}