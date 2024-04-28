function addedInteger(nums1: number[], nums2: number[]): number {
  const numsA = nums1.sort((a, b) => a - b)
  const numsB = nums2.sort((a, b) => a - b)
  return numsB[0] - numsA[0]
};