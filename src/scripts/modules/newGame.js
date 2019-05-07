import {
  API
} from "./API";
import {
  placePieces
} from "./placePieces";


module.exports.makeNewGameData = function () {
  //  Place white pieces
  let newGame = {
    "turnColor": "white",
    "turnNumber": 1,
    "whitePieces": [],
    "blackPieces": []
  };
  for (let i = 0; i < 8; i++) {
    newGame.whitePieces.push({
      type: "pn",
      x: 6,
      y: i,
      moved: false,
      id: i
    });
    newGame.blackPieces.push({
      type: "pn",
      x: 1,
      y: i,
      moved: false,
      id: i
    });
  }
  newGame.whitePieces.push(...backRowPieces(7));
  newGame.blackPieces.push(...backRowPieces(0));
  return newGame;
};





function backRowPieces(x) {
  return [{
      type: "rk",
      moved: false,
      x: x,
      y: 0,
      id: 8
    },
    {
      type: "kn",
      moved: false,
      x: x,
      y: 1,
      id: 9
    },
    {
      type: "bi",
      moved: false,
      x: x,
      y: 2,
      id: 10
    },
    {
      type: "qn",
      moved: false,
      x: x,
      y: 3,
      id: 11
    },
    {
      type: "ki",
      x: x,
      y: 4,
      moved: false,
      id: 12
    },
    {
      type: "bi",
      moved: false,
      x: x,
      y: 5,
      id: 13
    },
    {
      type: "kn",
      moved: false,
      x: x,
      y: 6,
      id: 14
    }, {
      type: "rk",
      moved: false,
      x: x,
      y: 7,
      id: 15
    }
  ];
}


// {
//   "games": [{
//     "id": 1,
//     "turnColor": "white",
//     "turnNumber": 22,
//     "whitePieces": [],
//     "blackPieces": []
//   }]
// }