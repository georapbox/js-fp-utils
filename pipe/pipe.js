/**
 * Performs left-to-right function composition.
 * The leftmost function may have any arity; the remaining functions must be unary.
 *
 * @module pipe
 * @param {function} [...fns] The functions to compose
 * @throws {Error} if invoked with no functions as arguments
 * @returns {function} A new function as the result of the composition
 * @example
 *
 * const inc = x => x + 1;
 * const double = x => x * 2;
 *
 * pipe(inc, double)(3); // => 8
 * pipe(double, inc)(3); // => 7
 *
 * const capitalize = a => a.toUpperCase();
 * const greeting = (firstName, lastName) => `Hello, my name is ${firstName} ${lastName}.`;
 * const shoutGreeting = pipe(greeting, capitalize);
 * shoutGreeting('John', 'Doe'); // => 'HELLO, MY NAME IS JOHN DOE.'
 */
const pipe = (...fns) => {
  if (fns.length === 0) {
    throw new Error('pipe requires at least one argument');
  }

  return (...args) => fns.reduce((_, fn) => (args = [fn(...args)], args[0]), args);
};

module.exports = pipe;
