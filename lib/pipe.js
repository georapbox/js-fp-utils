"use strict";

/**
 * Performs left-to-right function composition.
 * The leftmost function may have any arity; the remaining functions must be unary.
 *
 * @module pipe
 * @param {function} [...fns] The functions to compose
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
var pipe = function pipe() {
  for (var _len = arguments.length, fns = new Array(_len), _key = 0; _key < _len; _key++) {
    fns[_key] = arguments[_key];
  }

  if (fns.length === 0) {
    return function (fn) {
      return fn;
    };
  }

  if (fns.length === 1) {
    return fns[0];
  }

  return fns.reduceRight(function (a, b) {
    return function () {
      return a(b.apply(void 0, arguments));
    };
  });
};

module.exports = pipe;