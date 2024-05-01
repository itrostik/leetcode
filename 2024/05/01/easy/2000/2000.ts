function reversePrefix(word: string, ch: string): string {
  let index = 0
  let result = ""
  for (let i = 0; i < word.length; i++) {
    if (word[i] === ch) {
      index = i
      break
    }
  }

  let l = word.slice(index + 1, word.length)

  while (index >= 0) {
    result += word[index]
    index--
  }

  return result + l;
};