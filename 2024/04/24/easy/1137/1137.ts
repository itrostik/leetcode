// @ts-ignore
const memo = [0, 1, 1]

function tribonacci(n: number): number {

  if (n < 3) return memo[n]

  if (!memo[n - 3]) {
    memo[n - 3] = tribonacci(n - 3)
  }

  if (!memo[n - 2]) {
    memo[n - 2] = tribonacci(n - 2)
  }

  if (!memo[n - 1]) {
    memo[n - 1] = tribonacci(n - 1)
  }

  memo[n] = memo[n - 3] + memo[n - 2] + memo[n - 1]
  return memo[n]
};