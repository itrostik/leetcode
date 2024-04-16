function getRow(rowIndex: number): number[] {
  const arr = new Array(rowIndex + 1).fill(0);
  arr[0] = 1;
  for (let i = 1; i < rowIndex + 1; i++) {
    let j = i;
    while (j > 0) {
      arr[j] += arr[j - 1];
      j--;
    }
  }
  return arr;
}
