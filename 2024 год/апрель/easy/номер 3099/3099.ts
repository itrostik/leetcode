function sumOfTheDigitsOfHarshadNumber(x: number): number {
  const str = x.toString();
  let sum = 0;
  for (let i = 0; i < str.length; i++) {
    sum += +str[i];
  }
  return x % sum === 0 ? sum : -1;
}
