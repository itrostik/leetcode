function numberOfSpecialChars(word: string): number {
  const map = new Map()
  let count = 0
  for (let i = 0; i < word.length; i++) {
    map.set(word[i], 1)
  }

  for (let i = 0; i < word.length; i++) {
    if (map.has(word[i].toLowerCase()) && map.has(word[i].toUpperCase())) {
      map.delete(word[i])
      count++
    }
  }

  return count
}