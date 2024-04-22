function findMissingAndRepeatedValues(grid: number[][]): number[] {
  const map = new Map()
  const n = grid.length
  const result = []
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      if (map.has(grid[i][j])) {
        result.push(grid[i][j])
      }
      else map.set(grid[i][j], 1)
    }
  }

  for (let i = 1; i <= n * n; i++) {
    if (!map.has(i)) result.push(i)
  }

  return result

};