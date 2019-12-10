/**
 * Creates a function that invokes the original function with its parameters reversed.
 *
 * @module flip
 * @param {function} func The function to invoke with its parameters reversed.
 * @returns {function} Returns the new flipped function.
 * @example
 *
 * const flipped = flip((...args) => args);
 *
 * flipped(1, 2, 3, 4); // => [4, 3, 2, 1]
 */
// const flip = func => (...args) => func(...[...args].reverse());

const flip = func => (...args) => func(...args.reverse());

module.exports = flip;
