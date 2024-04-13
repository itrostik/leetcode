function productExceptSelf(nums: number[]): number[] {
  const result = [];
  let firstElem = 1;
  for (let i = 1; i < nums.length; i++) {
    firstElem *= nums[i];
  }
  result.push(firstElem);

  for (let i = 1; i < nums.length; i++) {
    if (nums[i] === 0) {
      let res = 1;
      for (let j = 0; j < nums.length; j++) {
        if (j !== i && nums[j] === 0) {
          res = 0;
          break;
        } else if (j !== i) res *= nums[j];
      }
      result.push(res);
      continue;
    }
    let res = (result[i - 1] / nums[i]) * nums[i - 1];
    result.push(res);
  }
  return result;
}
