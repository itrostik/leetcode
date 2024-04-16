function modifiedMatrix(matrix: number[][]): number[][] {
  const replace = matrix;

  const maxes = new Map();

  function getMax(columnIndex: number) {
    let max = -1;
    for (let i = 0; i < replace.length; i++) {
      if (replace[i][columnIndex] > max) max = replace[i][columnIndex];
    }
    maxes.set(columnIndex, max);
    return max;
  }

  for (let i = 0; i < replace.length; i++) {
    for (let j = 0; j < replace[i].length; j++) {
      if (replace[i][j] === -1) {
        if (maxes.has(j)) replace[i][j] = maxes.get(j);
        else replace[i][j] = getMax(j);
      }
    }
  }

  return replace;
}
