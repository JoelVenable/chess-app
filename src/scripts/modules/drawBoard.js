import {
  buildDOMElement
} from "./buildDOMElement";
import {
  getSquareColor
} from "./placePieces";


drawBoard();


function drawBoard() {

  let fragment = document.createDocumentFragment();
  const board = document.getElementById("board");

  //  Add rows from top down
  for (let i = 0; i < 8; i++) {
    let row = buildDOMElement("div", fragment, null, ["row"]);


    // Add columns from left to right
    for (let j = 0; j < 8; j++) {
      makeSquare(i, j, row);
    }
  }
  board.appendChild(fragment);
}






function makeSquare(i, j, parentRow) {
  let letters = "abcdefgh".split("");
  let squareColor;
  let notation = `${letters[j]}${8-i}`;
  //  Assign board colors
  if ((i + j) % 2 === 0) squareColor = "white";
  else squareColor = "black";

  let square = buildDOMElement(
    "div",
    parentRow,
    `square--${i}--${j}`,
    ["square", `square-${squareColor}`], {
      "data-algebraicNotation": notation
    });
  if (squareColor === "white") square.innerHTML = "&nbsp;";
  else square.textContent = "+";
  //`x: ${i}<br>y: ${j}`;



  return square;
}

module.exports.clearSquare = function (squareID) {
  let square = document.getElementById(squareID);
  let squareColor = getSquareColor(squareID);
  if (squareColor === "white") square.innerHTML = "&nbsp;";
  else square.innerHTML = "+";
};