function isPalindrome(s: string): boolean {
  let left = 0
  let right = s.length - 1
  while (left < right) {
    let l = s[left].toLowerCase()
    let r = s[right].toLowerCase()
    if (("0" > l || "9" < l) && ("a" > l || "z" < l)) {
      left++
      continue
    }
    if (("0" > r || "9" < r) && ("a" > r || "z" < r)) {
      right--
      continue
    }
    if (l !== r) return false
    left++
    right--
  }
  return true
};