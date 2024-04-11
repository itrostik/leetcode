function sumOfEncryptedInt(nums: number[]): number {
  let result = 0;

  function encrypt(number: number): number {
    let str = number.toString();
    let max = 0;
    let result = "";
    for (let i = 0; i < str.length; i++) {
      if (+str[i] > max) max = +str[i];
    }

    for (let i = 0; i < str.length; i++) {
      result += max;
    }
    return +result;
  }

  for (let i = 0; i < nums.length; i++) {
    result += encrypt(nums[i]);
  }
  return result;
}
