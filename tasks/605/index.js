/**
 * @param {number[]} flowerbed
 * @param {number} n
 * @return {boolean}
 */
var canPlaceFlowers = function(flowerbed, n) {
  if (n === 0) return true
  for (let j = 0; j < flowerbed.length; j++) {
    if (flowerbed[j] === 0 && (flowerbed[j - 1] === 0 || flowerbed[j - 1] === undefined) && (flowerbed[j + 1] === 0 || flowerbed[j + 1] === undefined)) {
      if (n > 0) {
        flowerbed[j] = 1
        n--
        if (n === 0) break
      }
    }
  }
  if (n === 0) return true
  return false
};

console.log(canPlaceFlowers([1, 0, 0, 0, 1], 1));