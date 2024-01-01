function solution(str) {
  const result = []
  let currentString = ''
  for (let i = 0; i < str.length; i++) {
    if (currentString.length === 0) {
      currentString += str[i]
      if (i + 1 === str.length) {
        result.push(currentString + "_")
      }
    }
    else if (currentString.length === 1) {
      currentString += str[i]
      if (i + 1 === str.length) {
        result.push(currentString)
      }
    }
    else {
      result.push(currentString)
      currentString = str[i]
      if (i + 1 === str.length) {
        result.push(currentString + "_")
        break;
      }
    }
  }
  return result
}

console.log(solution(''));