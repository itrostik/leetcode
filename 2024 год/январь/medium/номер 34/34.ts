function searchRange(nums: number[], target: number): number[] {
  let resultIndex1 = -1;
  let resultIndex2 = -1;
  let start = 0
  let end = nums.length - 1
  while (start <= end) {
    let mid = Math.floor((start + end) / 2)
    if (target < nums[mid]) {
      end = mid - 1
    }
    else if (target > nums[mid]) {
      start = mid + 1
    } else {
      resultIndex1 = mid
      resultIndex2 = mid
      let buffer = mid - 1
      while (nums[buffer] === target) {
        resultIndex1 = buffer
        buffer--
      }
      buffer = mid + 1
      while (nums[buffer] === target) {
        resultIndex2 = buffer
        buffer++
      }
      break;
    }
  }
  return [resultIndex1, resultIndex2]
};