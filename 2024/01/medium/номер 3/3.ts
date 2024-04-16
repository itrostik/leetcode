


function lengthOfLongestSubstring(s: string): number {

  let result = 0

  for (let i = 0; i < s.length; i++) {
    const arr: string[] = [s[i]]
    let currentResult = arr.length
    for (let j = i + 1; j < s.length; j++) {
      if (arr.indexOf(s[j]) === -1) {
        arr.push(s[j])
        currentResult++
      }
      else {
        break;
      }
    }
    if (currentResult > result) result = currentResult;
  }
  return result
}