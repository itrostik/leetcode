function longestMonotonicSubarray(nums: number[]): number {
  let countMax = 0;
  let countMin = 0;
  let currentMax = 1;
  let currentMin = 1;
  for (let i = 0; i < nums.length - 1; i++) {
    if (nums[i] > nums[i + 1]) {
      currentMax++;
    } else {
      if (currentMax > countMax) countMax = currentMax;
      currentMax = 1;
    }
  }
  for (let i = 0; i < nums.length - 1; i++) {
    if (nums[i] < nums[i + 1]) {
      currentMin++;
    } else {
      if (currentMin > countMin) countMin = currentMin;
      currentMin = 1;
    }
  }

  if (currentMin > countMin) countMin = currentMin;
  if (currentMax > countMax) countMax = currentMax;

  return countMax > countMin ? countMax : countMin;
}
