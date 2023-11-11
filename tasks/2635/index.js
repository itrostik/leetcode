/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var map = function(arr, fn) {
  const returnedArray = []
  for (let i = 0; i < arr.length; i++) {
    returnedArray.push(fn(arr[i], i))
  }
  return returnedArray
};

console.log(map([1, 2, 3, 4], (n, i) => n + i));