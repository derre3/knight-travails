export default function gameBoard(boardSize = 8) {
  const board = [];
  for (let i = 0; i < boardSize; i++) {
    board[i] = [];
    for (let j = 0; j < boardSize; j++) {
      board[i][j] = false;
    }
  }
  return board;
}
