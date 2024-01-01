/**
 * @param {number[]} piles
 * @return {number}
 */
var maxCoins = function(piles) {
  piles = piles.sort((a, b) => a - b)
  let count = 0;
  while (piles.length) {
    piles.shift()
    piles.pop()
    count += piles.pop()
  }
  return count
};

maxCoins([4,4,17,7,16,16,16,15,2,3,1,17,6,12,9]);