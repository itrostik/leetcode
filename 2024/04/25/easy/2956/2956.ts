function findIntersectionValues(nums1: number[], nums2: number[]): number[] {
  const map1 = new Map()
  const map2 = new Map()

  for (let i = 0; i < nums1.length; i++) {
    if (!map1.has(nums1[i])) map1.set(nums1[i], i)
  }

  for (let i = 0; i < nums2.length; i++) {
    if (!map2.has(nums2[i])) map2.set(nums2[i], i)
  }

  let count1 = 0
  for (let i = 0; i < nums1.length; i++) {
    if (map2.has(nums1[i])) count1++
  }

  let count2 = 0
  for (let i = 0; i < nums2.length; i++) {
    if (map1.has(nums2[i])) count2++
  }

  return [count1, count2]

};