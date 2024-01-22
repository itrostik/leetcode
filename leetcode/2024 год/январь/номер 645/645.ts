function findErrorNums(nums: number[]): number[] {
  if (nums.length <= 2) {
    if (nums[0] !== 1) {
      return [2, 1]
    } else if (nums[0] === 1) {
      return [1, 2]
    }
  }


  const map = new Map()
  let number = -1;

  for (let i = 0; i < nums.length; i++) {
    if (map.has(nums[i])) {
      map.set(nums[i], map.get(nums[i]) + 1)
    } else {
      map.set(nums[i], 1)
    }
  }

  for (let i = 1; i <= nums.length; i++) {
    if (!map.has(i)) {
      number = i
      break
    }
  }
  for (let i = 1; i <= nums.length; i++) {
    const count = map.get(i)
    if (count === 2) {
      return [i, number]
    }
  }
}

