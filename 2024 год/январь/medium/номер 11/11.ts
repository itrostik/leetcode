/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {
  let left = 0;
  let right = height.length - 1;
  let area = 0;
  while (left < right) {
    const min = Math.min(height[left], height[right])
    const currentArea = (right - left) * min
    if (currentArea > area) {
      area = (right - left) * min
    }

    if (height[left] < height[right]) left++
    else right--
  }
  return area
};

console.log(maxArea([1, 1]));