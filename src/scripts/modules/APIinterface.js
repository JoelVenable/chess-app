import {
  API
} from "./API";
import {
  placePieces
} from "./placePieces";
import {
  makeNewGameData
} from "./newGame";

//  Game id is stored in the board's 'data-gameid' attribute

API.games.read(1)
  .then(placePieces);