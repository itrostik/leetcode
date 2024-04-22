function numberGame(nums: number[]): number[] {
  const nums1 = nums.sort((a, b) => b - a)
  const arr = []
  while (nums1.length > 0) {
    const alica = nums1.pop()
    const bob = nums1.pop()
    arr.push(bob)
    arr.push(alica)
  }
  return arr
};