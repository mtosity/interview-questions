/**
 * @param {character[][]} grid
 * @return {number}
 */

function dfs(grid, i, j) {
    let s = [{ i, j }];
    while (s.length > 0) {
      let {i as nexti, nextj} = s.pop();
      grid[nexti][nextj] = "0";
  
      if (
        nexti >= 0 &&
        nextj >= 0 &&
        nexti+1 < grid.length &&
        nextj < grid[0].length &&
        grid[nexti+1][nextj] === "1"
      ) {
        s.push({ i: nexti + 1, j: nextj });
      }
  
      if (
        nexti-1 >= 0 &&
        nextj >= 0 &&
        nexti < grid.length &&
        nextj < grid[0].length &&
        grid[nexti-1][nextj] === "1"
      ) {
        s.push({ i: nexti - 1, j: nextj });
      }
  
      if (
        nexti >= 0 &&
        nextj >= 0 &&
        nexti < grid.length &&
        nextj+1 < grid[0].length &&
        grid[nexti][nextj+1] === "1"
      ) {
        s.push({ i: nexti, j: nextj + 1 });
      }
  
      if (
        nexti >= 0 &&
        nextj-1 >= 0 &&
        nexti < grid.length &&
        nextj < grid[0].length &&
        grid[nexti][nextj-1] === "1"
      ) {
        s.push({ i: nexti, j: nextj - 1 });
      }
    }
  }
  
  var numIslands = function (grid) {
    if (!grid || grid.length === 0 || grid[0].length === 0) {
      return 0;
    }
  
    let re = 0;
  
    for (let i = 0; i < grid.length; i++) {
      for (let j = 0; j < grid[0].length; j++) {
        if (grid[i][j] === "1") {
          re++;
          dfs(grid, i, j);
          console.log(grid);
        }
      }
    }
    return re;
  };
  
  numIslands([
    ["1", "1", "0", "0", "0"],
    ["1", "1", "0", "0", "0"],
    ["0", "0", "1", "0", "0"],
    ["0", "0", "0", "1", "1"],
  ]);
  