export default function visited(boardSize = 8) {
  const path = [];
  for (let i = 0; i < boardSize; i++) {
    path[i] = [];
    for (let j = 0; j < boardSize; j++) {
      path[i][j] = -1;
    }
  }
  return path;
}
