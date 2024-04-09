function removeElement(nums: number[], val: number): number {
  let count = 0;
  let start = 0;
  let end = nums.length - 1;

  if (nums.length === 1) {
    if (nums[0] === val) return 0;
    return 1;
  }
  if (nums.length === 0) return 0;

  while (start !== end) {
    const first = nums[start];
    if (first === val) {
      const last = nums[end];
      if (last === val) {
        end--;
      } else {
        nums[start] = last;
        nums[end] = first;
      }
    } else {
      start++;
    }
  }

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === val) break;
    else count++;
  }

  return count;
}
