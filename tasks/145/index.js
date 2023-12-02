/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
  const array = s.split(" ")
  array.reverse()
  const resultArr = []
  array.forEach(word => {
    if (word !== "") {
      resultArr.push(word)
    }
  })
  return resultArr.join(" ")
};

console.log(reverseWords("  hello world  "));