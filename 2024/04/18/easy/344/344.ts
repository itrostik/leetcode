function reverseString(s: string[]): void {
  let i = 0
  while (i < Math.floor(s.length / 2)) {
    const cur = s[i]
    s[i] = s[s.length - 1 - i]
    s[s.length - 1 - i] = cur
    i++
  }
}