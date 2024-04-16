function checkValidString(s: string): boolean {

  let min = 0
  let max = 0

  for (let i = 0; i < s.length; i++) {
    if (s[i] === '(') {
      min++
      max++
    }
    if (s[i] === ')') {
      min--
      max--
    }
    if (s[i] === '*') {
      min--
      max++
    }
    if (min < 0) min = 0
    if (max < 0) return false
  }
  return min === 0
}