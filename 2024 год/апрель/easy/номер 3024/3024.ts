function triangleType(nums: number[]): string {
  let f = nums[0];
  let s = nums[1];
  let t = nums[2];
  if (f === s && f === t) return "equilateral";
  else if (f + s > t && f + t > s && s + t > f) {
    if ((f === s && f !== t) || (f === t && f !== s) || (s === t && s !== f))
      return "isosceles";
    else return "scalene";
  } else return "none";
}
