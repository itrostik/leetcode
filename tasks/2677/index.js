/**
 * @param {Array} arr
 * @param {number} size
 * @return {Array}
 */
var chunk = function(arr, size) {
  const newArray = []
  for (let i = 0; i < arr.length; i += size) {
    const oneArray = []
    for (let j = 0; j < size; j++) {
      if (arr[i + j] !== undefined) {
        oneArray.push(arr[i + j])
      }
    }
    newArray.push(oneArray)
  }
  return newArray
};

console.log(chunk([1, 2, 3, 4, 0], 3));