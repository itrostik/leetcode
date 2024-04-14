function generate(numRows: number): number[][] {
  const result = [];
  for (let i = 0; i < numRows; i++) {
    if (i === 0) result.push([1]);
    if (i === 1) result.push([1, 1]);
    if (i >= 2) {
      const res = [1];
      for (let j = 0; j < i - 1; j++) {
        res.push(result[i - 1][j] + result[i - 1][j + 1]);
      }
      res.push(1);
      result.push(res);
    }
  }
  return result;
}
