import {
  API
} from "./API";
import {
  placePieces
} from "../placePieces";
import {
  makeNewGameData
} from "../newGame";

//  Game id is stored in the board's 'data-gameid' attribute

// API.games.read(1)
//   .then(placePieces);
makeNewGame();

function makeNewGame() {
  API.games.create(makeNewGameData())
    .then(placePieces);
}

function fetchGameData(gameID) {
  return API.games.read(gameID);
}


function updateMove(newPieceObject) {
  let gameID = parseInt(document.getElementById("board").getAttribute("data-gameid"));
  API.games.update(gameID, newPieceObject)
  .then(placePieces);
}


module.exports = {
  fetchGameData: fetchGameData,
  updateMove: updateMove,
  makeNewGame: makeNewGame
};