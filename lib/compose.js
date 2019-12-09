"use strict";

/**
 * Performs right-to-left function composition.
 * The rightmost function may have any arity; the remaining functions must be unary.
 *
 * @module compose
 * @param {function} [...fns] The functions to compose
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
var compose = function compose() {
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

  return fns.reduce(function (a, b) {
    return function () {
      return a(b.apply(void 0, arguments));
    };
  });
};

module.exports = compose;