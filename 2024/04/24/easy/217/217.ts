function containsDuplicate(nums: number[]): boolean {
  const map = new Map()
  for (let i = 0; i < nums.length; i++) {
    if (map.has(nums[i])) return true
    else map.set(nums[i], true)
  }
  return false
};