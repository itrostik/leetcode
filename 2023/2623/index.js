/**
 * @param {Function} fn
 * @return {Function}
 */
function memoize(fn) {
  const mapCalls = new Map();
  return function (...args) {
    const stringJoin = args.join(' ')
    if (mapCalls.has(stringJoin)) {
      return mapCalls.get(stringJoin)
    } else {
      const returnedValue = fn(...args)
      mapCalls.set(stringJoin, returnedValue)
      return returnedValue;
    }
  }
}


let callCount = 0;
const memoizedFn = memoize(function (a, b) {
  callCount += 1;
  return a + b;
})
console.log(memoizedFn(2, 3)); // 5
console.log(memoizedFn(2, 3)); // 5
console.log(callCount) // 1
