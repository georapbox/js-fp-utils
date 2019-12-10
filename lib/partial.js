"use strict";

/**
 * Apply partially a function `f` to its arguments by returning a function `g`.
 * When applied, `g` returns the result of applying `f` to the arguments provided initially followed by the arguments provided to `g`.
 *
 * @module partial
 * @param {function} f The initial function to be partially applied.
 * @param {*} [...args] Initially provided arguments to `f`.
 * @returns {function} A function `g` that invokes the original `f` with the remaining arguments.
 * @example
 *
 * const add = (a, b, c) => a + b + c;
 * const p1 = partial(add, 1);
 * p1(2, 3); // => 6
 *
 * const p2 = partial(add, 10, 20);
 * p2(30); // => 60
 *
 * const p3 = partial(add, 100, 200, 300);
 * p3(); // => 600
 *
 * const p4 = partial(add);
 * p4(5, 10, 15); // => 30
 */
var partial = function partial(f) {
  for (var _len = arguments.length, args_a = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    args_a[_key - 1] = arguments[_key];
  }

  return function () {
    for (var _len2 = arguments.length, args_b = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      args_b[_key2] = arguments[_key2];
    }

    return f.apply(void 0, args_a.concat(args_b));
  };
};

module.exports = partial;