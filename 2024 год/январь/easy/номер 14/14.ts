function longestCommonPrefix(strs: string[]): string {
  strs.sort((a, b) => a.length - b.length)
  let firstWord = strs[0]
  for (let i = 0; i < strs.length; i++) {
    let currentIndex = firstWord.length
    while (strs[i] !== firstWord) {
      strs[i] = strs[i].slice(0, currentIndex);
      firstWord = firstWord.slice(0, currentIndex)
      currentIndex--
    }
  }
  return firstWord
}

