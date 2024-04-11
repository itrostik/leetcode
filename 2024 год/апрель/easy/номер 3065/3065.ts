function minOperations(nums: number[], k: number): number {
  let result = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] < k) {
      nums.splice(i, 1);
      i--;
      result++;
    }
  }
  return result;
}
