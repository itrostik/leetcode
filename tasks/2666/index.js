/**
 * @param {Function} fn
 * @return {Function}
 */
var once = function(fn) {
  let bool = true
  return function(...args){
    if (bool) {
      bool = false
      return fn(...args)
    }
    else {
      return undefined
    }
  }
};

let fn = (a,b,c) => a + b + c

let onceFn = once(fn)

onceFn(1, 2, 3);