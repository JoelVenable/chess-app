const chessboard = document.getElementById("board");

chessboard.addEventListener("click", (event => {
  let turnColor = chessboard.getAttribute("data-turnColor");
  let squareClicked = event.target;
  //  get square clicked, finding the parent if the square-inner is target
  if (squareClicked.classList.contains("square-inner")) {
    squareClicked = squareClicked.parentNode;
  }
  console.log(squareClicked);
}));