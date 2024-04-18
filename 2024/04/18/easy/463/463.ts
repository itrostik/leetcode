function islandPerimeter(grid: number[][]): number {
  let p = 0
  grid.unshift([...new Array(grid.length).fill(0)])
  grid.push([...new Array(grid.length).fill(0)])
  for (let i = 1; i < grid.length - 1; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      if (grid[i][j] === 1) {
        if (!grid[i][j - 1] || grid[i][j - 1] === 0) p++
        if (!grid[i - 1][j] || grid[i - 1][j] === 0) p++
        if (!grid[i][j + 1] || grid[i][j + 1] === 0) p++
        if (!grid[i + 1][j] || grid[i + 1][j] === 0) p++
      }
    }
  }
  return p
}