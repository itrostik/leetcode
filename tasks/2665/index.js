/**
 * @param {integer} init
 * @return { increment: Function, decrement: Function, reset: Function }
 */
var createCounter = function(init) {
  const currentInit = init
  return {
    increment() {
      return ++init
    },
    decrement() {
      return --init
    },
    reset() {
      init = currentInit
      return init
    }
  }
};


const counter = createCounter(5)
console.log(counter.increment()); // 6
console.log(counter.reset()); // 5
console.log(counter.decrement()); // 4
