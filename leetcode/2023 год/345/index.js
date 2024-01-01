/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function(s) {
  const vowels = ['a', 'e', 'u', 'i', 'o', 'A', 'E', 'U', 'I', 'O']
  const vowelsInString = []
  let result = ""
  for (let symbol of s) {
    if (vowels.includes(symbol)) {
      vowelsInString.push(symbol)
    }
  }
  for (let symbol of s) {
    if (vowels.includes(symbol)) {
      result += vowelsInString.pop()
    }
    else {
      result += symbol
    }
  }
  return result
};

console.log(reverseVowels('leetcode'));