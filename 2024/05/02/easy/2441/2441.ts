function findMaxK(nums: number[]): number {

  let numbers = new Map()

  for (let i = 0; i < nums.length; i++) {
    if (!numbers.has(nums[i])) numbers.set(nums[i], true)
  }

  let max = -1

  for (let key of numbers.keys()) {
    if (key > max && numbers.has(-key)) max = key
  }

  return max

}