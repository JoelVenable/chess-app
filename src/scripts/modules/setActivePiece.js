module.exports.setActivePiece = function (squareClicked) {
  //  first clear the board if another piece was active
  clearBoard();
  setActiveSquare(squareClicked);
};


function clearBoard() {
  let squares = document.querySelectorAll(".square");
  squares.forEach(square => {
    if (square.classList.contains("active")) {
      square.classList.remove("active");
    };
    if (square.classList.contains("available")) {
      square.classList.remove("available");
    }
  });
}

function setActiveSquare(squareClicked) {
  let chessboard = document.getElementById("board");
  let square = document.getElementById(squareClicked);
  chessboard.setAttribute("data-activesquare-id", squareClicked);
  square.classList.add("active");
}