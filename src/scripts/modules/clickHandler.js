import {
  setActivePiece
} from "./setActivePiece";
import {
  showLegalMoves
} from "./showLegalMoves";
import {
  movePiece
} from "./movePiece";

const chessboard = document.getElementById("board");
chessboard.addEventListener("click", clickHandler);


function clickHandler(event) {
  let targetSquare = getTargetSquare(event);
  if (containsActiveColorPiece(targetSquare)) {
    setActivePiece(targetSquare);
    showLegalMoves(targetSquare);
  } else if (containsAvailableMove(targetSquare)) {
    movePiece(targetSquare);
  } else {
    console.log("Invalid move");
    // invalidMove(targetSquare);
  }
}





function getTargetSquare(event) {
  let squareClicked = event.target;
  //  get square clicked, finding the parent if the square-inner is target
  if (squareClicked.classList.contains("square-inner")) {
    squareClicked = squareClicked.parentNode;
  }
  return squareClicked.id;
}

function containsActiveColorPiece(square) {
  let activeColor = chessboard.getAttribute("data-turnColor");
  let target = document.getElementById(square);
  if (!target.classList.contains("occupied")) return false;
  let color = target.getAttribute("data-piece").split("--")[0];
  return (color === activeColor);
}

function containsAvailableMove(targetSquare) {
  let square = document.getElementById(targetSquare);
  return square.classList.contains("available");
}