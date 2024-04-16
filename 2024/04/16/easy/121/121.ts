function maxProfit(prices: number[]): number {
  let min = prices[0]
  let diff = 0
  for (let i = 1; i < prices.length; i++) {
    if (min > prices[i]) min = prices[i]
    else {
      if (diff < prices[i] - min) diff = prices[i] - min
    }
  }
  return diff
}