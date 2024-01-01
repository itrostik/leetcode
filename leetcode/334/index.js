/**
 * @param {number[]} nums
 * @return {boolean}
 */
var increasingTriplet = function(nums) {
  if (nums.length > 100000) {
    const set = new Set(nums)
    nums = Array.from(set)
  }
  for (let i = 0; i < nums.length; i++) {
    let count = 0
    let number2 = -1
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] < nums[j]) {
        if (nums[j] < number2) {
          number2 = nums[j]
          count = 1
        }
        if (number2 < nums[j] && count === 1) return true
        if (number2 < nums[j]) {
          number2 = nums[j]
          count++;
        }
      }
    }
  }
  return false
};