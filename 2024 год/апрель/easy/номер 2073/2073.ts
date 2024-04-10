function timeRequiredToBuy(tickets: number[], k: number): number {
  let result = 0;
  while (tickets[k] !== 0) {
    for (let i = 0; i < tickets.length; i++) {
      if (tickets[i] !== 0) {
        tickets[i] = tickets[i] - 1;
        result++;
      }
      if (tickets[k] === 0) break;
    }
  }
  return result;
}
