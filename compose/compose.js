/**
 * Performs right-to-left function composition.
 * The rightmost function may have any arity; the remaining functions must be unary.
 *
 * @module compose
 * @param {function} [...fns] The functions to compose
 * @throws {Error} Throws `Error` if `fns` length is `0`.
 * @returns {function} A new function as the result of the composition
 * @example
 *
 * const inc = x => x + 1;
 * const double = x => x * 2;
 *
 * compose(inc, double)(3); // => 7
 * compose(double, inc)(3); // => 8
 *
 * const capitalize = a => a.toUpperCase();
 * const greeting = (firstName, lastName) => `Hello, my name is ${firstName} ${lastName}.`;
 * const shoutGreeting = compose(capitalize, greeting);
 * shoutGreeting('John', 'Doe'); // => 'HELLO, MY NAME IS JOHN DOE.'
 */
const compose = (...fns) => {
  if (fns.length === 0) {
    throw new Error('compose requires at least one argument');
  }

  return (...args) => fns.reduceRight((_, fn) => (args = [fn(...args)], args[0]), args);
};

module.exports = compose;
