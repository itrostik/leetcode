/**
 * @param {number} n
 * @return {Function} 2620
 */
var createCounter = function (n) {
  return function () {
    return n++
  };
};


const counter = createCounter(10)
console.log(counter()); // 10
console.log(counter()); // 11
console.log(counter()); // 12
