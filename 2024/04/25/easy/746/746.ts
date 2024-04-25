function minCostClimbingStairs(cost: number[]): number {
  const min = [cost[0], cost[1]]

  for (let i = 2; i < cost.length; i++) {
    let minValue = Math.min(min[i - 2], min[i - 1])
    min.push(minValue + cost[i])
  }

  return min[min.length - 1] < min[min.length - 2] ? min[min.length - 1] : min[min.length - 2]

};