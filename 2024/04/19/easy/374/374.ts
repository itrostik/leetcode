
 /* Forward declaration of guess API.
 * @param {number} num   your guess
 * @return       -1 if num is higher than the picked number
 *            1 if num is lower than the picked number
 otherwise return 0
  */
 var guess = function(num) {
   return -1 //описание функции выше, я просто заглушку поставил
 }



function guessNumber(n: number): number {

  let left = 0
  let right = n

  function binarySearch() {
    const mid = Math.floor((left + right) / 2)
    if (guess(mid) === 0) return mid
    if (guess(mid) === -1) {
      right = mid - 1
      return binarySearch()
    }
    if (guess(mid) === 1) {
      left = mid + 1
      return binarySearch()
    }
  }

  return binarySearch()
};