function climbStairs(n) {
  const memo = [0, 1, 2]
  function counter(n) {
    if (n === 1) {
      return 1
    }
    else if (n === 2) {
      return 2
    }
    else {
      if (memo[n - 1] && memo[n - 2]) {
        if (!memo[n]) memo.push(memo[n - 1] + memo[n - 2])
        return memo[n - 1] + memo[n - 2]
      } else {
        return counter(n - 2) + counter(n - 1)
      }
    }
  }
  return counter(n)
}

console.log('Ответ',climbStairs(1000));