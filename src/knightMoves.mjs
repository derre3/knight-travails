import gameBoard from './gameBoard.mjs';
import visited from './visited.mjs';

export default function knightMoves(start, goal) {
  const knightMovement = {
    x: [2, 2, -2, -2, -1, 1, -1, 1],
    y: [-1, 1, -1, 1, -2, -2, 2, 2],
  };
  const board = gameBoard();
  const visitedArr = visited();
  const queue = [];

  queue.push(start);
  board[start[0]][start[1]] = true;
  while (queue.length > 0) {
    const current = queue.shift();
    if ([current[0], current[1]].toString() === goal.toString()) {
      break;
    }

    for (let i = 0; i < 8; i++) {
      const newPos = {
        x: current[0] + knightMovement.x[i],
        y: current[1] + knightMovement.y[i],
      };
      if (newPos.x < 8 && newPos.x > -1 && newPos.y < 8 && newPos.y > -1) {
        if (!board[newPos.x][newPos.y]) {
          board[newPos.x][newPos.y] = true;
          visitedArr[newPos.x][newPos.y] = i;
          queue.push([newPos.x, newPos.y]);
        }
      }
    }
  }

  const backTrack = {
    x: goal[0],
    y: goal[1],
  };
  const path = [];
  while (visitedArr[backTrack.x][backTrack.y] !== -1) {
    path.unshift([backTrack.x, backTrack.y]);
    const kPos = visitedArr[backTrack.x][backTrack.y];
    backTrack.x -= knightMovement.x[kPos];
    backTrack.y -= knightMovement.y[kPos];
  }
  path.unshift(start);

  console.log(
    `made it from [${path[0]}] to [${path[path.length - 1]}] in ${
      path.length
    } moves`
  );
  console.log({ path });
}
