function moveZeroes(nums: number[]): void {
  let i = 0;
  while (i < nums.length) {
    if (nums[i] === 0) {
      let j = i;
      j++;
      while (j < nums.length) {
        if (nums[j] !== 0) {
          let cur = nums[j];
          nums[j] = nums[i];
          nums[i] = cur;
          break;
        }
        j++;
      }
    }
    i++;
  }
}
