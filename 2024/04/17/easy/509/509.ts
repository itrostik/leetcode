// @ts-ignore
let memo = [0, 1]

function fib(n: number): number {
  if (n === 0 || n === 1) return memo[n]
  if (memo[n - 1] && memo[n - 2]) {
    memo.push(memo[n - 1] + memo[n - 2])
    return memo[n - 1] + memo[n - 2]
  } else return fib(n - 1) + fib(n - 2)
};