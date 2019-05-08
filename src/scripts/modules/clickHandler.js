import {
  setActivePiece
} from "./setActivePiece";
import {
  showLegalMoves
} from "./showLegalMoves";
import {
  movePiece
} from "./moveHandler/movePiece";

const chessboard = document.getElementById("board");
chessboard.addEventListener("click", clickHandler);


function clickHandler(event) {
  let targetSquare = event.target.id;
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