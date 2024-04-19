function pivotIndex(nums: number[]): number {
  let sumLeft = [0]
  let sumRight = [0]
  for (let i = 1; i < nums.length; i++) {
    sumLeft.push(sumLeft[i - 1] + nums[i - 1])
  }

  for (let i = nums.length - 1; i > 0; i--) {
    sumRight.push(nums[i] + sumRight[nums.length - i - 1])
  }

  sumRight = sumRight.reverse()

  for (let i = 0; i < nums.length; i++) {
    if (sumLeft[i] === sumRight[i]) return i
  }

  return -1
};