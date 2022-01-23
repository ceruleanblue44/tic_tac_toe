// let gameBoard = (function () {
//   let board = [];



// })();

let squareArr = Array.from((document.querySelectorAll('.square')));
squareArr.forEach(sq => sq.addEventListener('click', handleSquareClick));

let currentPlayer = 'X';
let gameState = squareArr.map(sq => sq.innerText);
console.log(gameState);

let restartBtn = document.getElementById('restart');
restartBtn.addEventListener('click', gameRestart);

function handleSquareClick(evt) {

  const clickedSquare = evt.target;
  const clickedSquareIndex = clickedSquare.dataset.squareIndex;
  console.log(clickedSquareIndex);

  if (!(clickedSquare.textContent === '')) {
    return;
  } else {
    clickedSquare.textContent = currentPlayer;
    // console.log(clickedSquare.textContent); //currentPlayer, X or O
  }

  // Update game state, put the value of clicked square into the gameState array
  gameState[clickedSquareIndex] = currentPlayer;

  console.log(gameState);

  // checkGameStatus(currentPlayer);
  currentPlayerChange();
  gameStatusMsg();
}

function currentPlayerChange() {
  currentPlayer = currentPlayer === 'X' ? 'O' : 'X'
}

function gameStatusMsg() {
  const gameStatus = document.querySelector('.game-status');
  gameStatus.textContent = `${currentPlayer}'s turn!`;
  if (gameState.every(sq => !(sq === ''))) gameStatus.textContent = `Game over!`
}

function gameStateUpdate() {
  // gameState[clickedSquareIndex] = currentPlayer;
}

function checkGameStatus(currentPlayer) {
  const winCombos = [
    [0, 1, 2], 
    [0, 3, 6], 
    [0, 4, 8], 
    [1, 4, 7], 
    [2, 4, 6], 
    [2, 5, 8], 
    [3, 4, 5], 
  ];
  // const case1 = gameState[0] === currentPlayer && gameState[1] === currentPlayer && gameState[2] === currentPlayer;


  // if (gameState[0] === currentPlayer && gameState[1] === currentPlayer && gameState[2] === currentPlayer) console.log('Got one!')

  // if (case1) console.log('Got one too!')

  // We need to check if indices of currentPlayer in gameState are equal to any of the winCombos
  gameState[winCombos[0][0]] === currentPlayer;
  gameState[winCombos[0][1]] === currentPlayer;
  gameState[winCombos[0][2]] === currentPlayer;

  let checkWin = gameState.reduce((a, el, i) => {
    if (el === currentPlayer) 
    a.push(i);
    return a;
  }, []);

  // Checks if the checkWin array if equal to winCombos[0] array
  checkWin.every(el => winCombos[0].includes(el))
}

function gameRestart() {
  console.log('Kitty loves you!')
}

const winCombos = [
  [0, 1, 2], 
  [0, 3, 6], 
  [0, 4, 8], 
  [1, 4, 7], 
  [2, 4, 6], 
  [2, 5, 8], 
  [3, 4, 5], 
];
