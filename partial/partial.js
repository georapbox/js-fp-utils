/**
 * Takes a function `f` and a list of arguments, and returns a function `g`.
 * When applied, `g` returns the result of applying `f` to the arguments provided initially followed by the arguments provided to `g`.
 *
 * @param {function} f The function to partially apply arguments to.
 * @param {*} [...args] The arguments to be partially applied.
 * @returns {function} Returns the new partially applied function.
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
const partial = (f, ...args_a) => (...args_b) => f(...args_a, ...args_b);

module.exports = partial;
