"use strict";

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

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
var flip = function flip(func) {
  return function () {
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return func.apply(void 0, _toConsumableArray(args.reverse()));
  };
};

module.exports = flip;