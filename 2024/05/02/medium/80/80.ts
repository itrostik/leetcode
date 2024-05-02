function removeDuplicates2(nums: number[]): number {
  let j = 2;

  for (let i = 2; i < nums.length; i++) {
    if (nums[i] !== nums[j - 2]) {
      nums[j++] = nums[i];
    }
  }

  return j;
}