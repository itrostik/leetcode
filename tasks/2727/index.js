/**
 * @param {Object|Array} obj
 * @return {boolean}
 */
var isEmpty = function(obj) {
  const jsonObj = JSON.stringify(obj).length
  console.log(jsonObj)
  if (jsonObj === 2) return true
  return false
};

console.log(isEmpty([]));