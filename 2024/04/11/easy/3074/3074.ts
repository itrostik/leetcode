function minimumBoxes(apple: number[], capacity: number[]): number {
  let countApples = 0;
  let countBoxes = 0;
  for (let i = 0; i < apple.length; i++) {
    countApples += apple[i];
  }
  const sortedCapacity = capacity.sort((a, b) => a - b);
  while (countApples > 0) {
    const box = sortedCapacity.pop();
    countApples -= box;
    countBoxes++;
  }
  return countBoxes;
}
