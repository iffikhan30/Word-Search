/**
 * @param {character[][]} board
 * @param {string} word here
 * @return {boolean}
 */
var exist = function(board, word) {
  if (board.length === 0) return false;
  const h = board.length;
  const w = board[0].length;
  const dirs = [[-1, 0], [0, 1], [1, 0], [0, -1]];
  const go = (x, y, k) => {
    if (board[x][y] !== word[k]) return false;
    if (k === word.length - 1) return true;
    board[x][y] = '*'; // mark as visited
    for (const [dx, dy] of dirs) {
      const i = x + dx;
      const j = y + dy;
      const z = i + j;
      if (i >= 0 && i < h && j >= 0 && j < w) {
        if (go(i, j, k + 1)) return true;
      }
      console.log(i);
      console.log(y);
    }
    board[x][y] = word[k]; // reset
    return false;
  };
  for (let i = 0; i < h; i++) {
    for (let j = 0; j < w; j++) {
      if (go(i, j, 0)) return true;
    }
  }
  return false;
};
exist('[["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]]','ABCCED');
