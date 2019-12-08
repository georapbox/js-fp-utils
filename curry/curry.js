/**
 * Transforms a function of N arguments in such a way that it can
 * be called as a chain of N functions each with a single argument (arity: 1).
 *
 * @param {function} func The initial function to be curried.
 * @param {Number} [arity=func.lenght] The arity of the provided function.
 * Useful in cases that arity cannot be determined by `func.length`.
 * As of ES2015 when a function has a rest parameter or at least one
 * parameter with default value, the `func.length` is not properly calculated.
 * @returns {function} A curried equivalent of the provided function
 * @example
 *
 * const add = curry((a, b) => a + b);
 * const addOne = add(1);
 * addOne(2); // => 3
 *
 * // Provide arity as second argument in cases that it cannot be determined.
 * const add = curry((a = 0, ...args) => a + args[0] + args[1], 3);
 * const addOne = add(1);
 * const addTwo = addOne(2);
 * addTwo(3); // => 6
 */
const curry = (func, arity) => {
  return function curried(...args1) {
    return args1.length >= (arity || func.length)
      ? func(...args1)
      : (...args2) => curried(...[...args1, ...args2]);
  };
};

module.exports = curry;
