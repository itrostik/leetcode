/**
 * @param {Promise} promise1
 * @param {Promise} promise2
 * @return {Promise}
 */
var addTwoPromises = async function(promise1, promise2) {
  return new Promise(resolve => {
    promise1
      .then(number => {
        promise2
          .then(number2 => {
            resolve(number + number2)
          })
      })
  })
};



/**
 * addTwoPromises(Promise.resolve(2), Promise.resolve(2))
 *   .then(console.log); // 4
 */