function merge(nums1: number[], m: number, nums2: number[], n: number): void {
  let start1 = 0;
  let start2 = 0;
  const nums3 = [];
  while (start1 !== m && start2 !== n) {
    if (nums1[start1] < nums2[start2]) {
      nums3.push(nums1[start1]);
      start1++;
    } else {
      nums3.push(nums2[start2]);
      start2++;
    }
  }

  if (start1 !== m) {
    for (let i = start1; i < m; i++) {
      nums3.push(nums1[i]);
    }
  }
  if (start2 !== n) {
    for (let i = start2; i < n; i++) {
      nums3.push(nums2[i]);
    }
  }
  for (let i = 0; i < nums3.length; i++) {
    nums1[i] = nums3[i];
  }
}
