function missingInteger(nums: number[]): number {
  let sum = nums[0];
  let max = 0;
  for (let i = 1; i < nums.length; i++) {
    if (nums[i - 1] + 1 === nums[i]) sum += nums[i];
    else break;
  }

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > max) max = nums[i];
  }

  if (sum > max) return sum;
  while (nums.includes(sum)) {
    sum++;
  }
  return sum;
}
