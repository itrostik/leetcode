function areaOfMaxDiagonal(dimensions: number[][]): number {
  let diagonal = 0;
  let square = 0;
  for (let i = 0; i < dimensions.length; i++) {
    const l = dimensions[i][0];
    const w = dimensions[i][1];
    const d = Math.sqrt(l ** 2 + w ** 2);
    if (d > diagonal) {
      diagonal = d;
      square = l * w;
    } else if (d === diagonal) {
      const s = l * w;
      if (s > square) square = s;
    }
  }
  return square;
}
