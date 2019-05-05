import {
  API
} from "./API";


API.games.create(makeNewGameData())
  .then(game => console.log(game));

function makeNewGameData(id) {
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
      y: i
    });
    newGame.blackPieces.push({
      type: "pn",
      x: 1,
      y: i
    });
  }
  newGame.whitePieces.push(...backRowPieces(7));
  newGame.blackPieces.push(...backRowPieces(0));
  return newGame;
}





function backRowPieces(x) {
  return [{
      type: "rk",
      moved: false,
      x: x,
      y: 0
    },
    {
      type: "kn",
      x: x,
      y: 1
    },
    {
      type: "bi",
      x: x,
      y: 2
    },
    {
      type: "qn",
      x: x,
      y: 3
    },
    {
      type: "ki",
      x: x,
      y: 4,
      moved: false
    },
    {
      type: "bi",
      x: x,
      y: 5
    },
    {
      type: "kn",
      x: x,
      y: 6
    }, {
      type: "rk",
      moved: false,
      x: x,
      y: 7
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