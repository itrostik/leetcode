function maxFrequencyElements(nums: number[]): number {
  const map = new Map();
  let max = 0;
  let count = 0;
  for (let i = 0; i < nums.length; i++) {
    if (map.has(nums[i])) map.set(nums[i], map.get(nums[i]) + 1);
    else map.set(nums[i], 1);
  }

  for (let value of map.values()) {
    if (value > max) max = value;
  }

  for (let key of map.keys()) {
    if (map.get(key) === max) count += max;
  }

  return count;
}
