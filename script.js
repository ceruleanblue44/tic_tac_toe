// let gameBoard = (function () {
//   let board = [];



// })();

let squareArr = Array.from((document.querySelectorAll('.square')));
squareArr.forEach(sq => sq.addEventListener('click', handleSquareClick));

let currentPlayer = 'X';
let gameState = squareArr.map(sq => sq.innerText);
console.log(gameState);

function handleSquareClick(evt) {

  const clickedSquare = evt.target;
  const clickedSquareIndex = clickedSquare.dataset.squareIndex;
  console.log(clickedSquareIndex);

  if (!(clickedSquare.textContent === '')) {
    return;
  } else {
    clickedSquare.textContent = currentPlayer;
    console.log(clickedSquare.textContent); //currentPlayer, X or O
  }

  // Update game state, put the value of 
  gameState[clickedSquareIndex] = currentPlayer;

  console.log(gameState);

  currentPlayerChange();
  gameStatusMsg();
}

function currentPlayerChange() {
  currentPlayer = currentPlayer === 'X' ? 'O' : 'X'
}

function gameStatusMsg() {
  const gameStatus = document.querySelector('.game-status');
  gameStatus.textContent = `${currentPlayer}'s turn!`
}

function gameStateUpdate() {

}
