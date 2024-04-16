function plusOne(digits: number[]): number[] {
  for (let i = digits.length - 1; i >= 0; i--) {
    if (digits[i] + 1 === 10) {
      digits[i] = 0
    } else {
      digits[i]++
      break
    }

    if (i === 0) {
      digits = [1, ...digits]
    }
  }
  return digits
}