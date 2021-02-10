/**
 * @param {character[][]} grid
 * @return {number}
 */

function dfs(grid, i, j) {
    if (
      i < 0 ||
      j < 0 ||
      i >= grid.length ||
      j >= grid[0].length ||
      grid[i][j] === "0"
    ) {
      return;
    }
    grid[i][j] = "0";
    dfs(grid, i + 1, j);
    dfs(grid, i - 1, j);
    dfs(grid, i, j + 1);
    dfs(grid, i, j - 1);
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
  