function addBinary(a: string, b: string): string {
  let result = []
  let i = a.length;
  let j = b.length;
  let currentValue = 0;
  while (i > 0 || j > 0) {
    let first = i > 0 ? +a[i - 1] : 0
    let second = j > 0 ? +b[j - 1] : 0

    if (currentValue === 1) currentValue = first + second + 1
    else currentValue = first + second


    if (currentValue === 0) {
      result.push('0')
    } else if (currentValue === 1) {
      result.push('1')
      currentValue = 0
    } else if (currentValue === 2) {
      result.push('0')
      currentValue = 1
    } else {
      result.push('1')
      currentValue = 1
    }
    i--
    j--
  }
  if (currentValue === 1) result.push('1')
  return result.reverse().join("")
}