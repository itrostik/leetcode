function maxOperations(nums: number[]): number {
  if (nums.length < 2) return 0;
  let count = 1;
  let n1 = nums.shift();
  let n2 = nums.shift();
  const sum = n1 + n2;
  while (nums.length >= 2) {
    n1 = nums.shift();
    n2 = nums.shift();
    if (n1 + n2 !== sum) break;
    count++;
  }
  return count;
}
