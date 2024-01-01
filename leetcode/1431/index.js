/**
 * @param {number[]} candies
 * @param {number} extraCandies
 * @return {boolean[]}
 */
var kidsWithCandies = function(candies, extraCandies) {
  let max = 0;
  const result = []
  for (let i = 0; i < candies.length; i++) {
    if (candies[i] >= max) {
      max = candies[i]
    }
  }

  candies.forEach(elem => {
    if (elem + extraCandies >= max) {
      result.push(true)
    }
    else {
      result.push(false)
    }
  })

  return result
};

console.log(kidsWithCandies([1, 12, 13, 2, 3], 3));