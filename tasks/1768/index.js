/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
var mergeAlternately = function(word1, word2) {
  let result = ''
  function getStringWithoutSpaces(string) {
    let stroke = ''
    for (const symbol of string) {
      if (symbol !== " ") stroke += symbol
    }
    return stroke
  }
  word1 = getStringWithoutSpaces(word1)
  word2 = getStringWithoutSpaces(word2)

  for (let i = 0; i < Math.max(word1.length, word2.length); i++) {
    if (word1[i]) result += word1[i]
    if (word2[i]) result += word2[i]
  }
  return result
};

console.log(mergeAlternately("a  b  c  ", "  ab c  d  "));