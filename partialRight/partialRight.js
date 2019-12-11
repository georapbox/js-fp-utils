/**
 * Creates a new function that invokes the provided function `f` with `partials` appended to the arguments it receives.
 *
 * @param {function} f The function to partially apply arguments to.
 * @param {*} [...args] The arguments to be partially applied.
 * @returns {function} Returns the new partially applied function.
 * @example
 *
 * const greet = (greeting, title, fname, lname) => `${greeting}, ${title} ${fname} ${lname}.`;
 * const greetMrJoeBlack = partialRight(greet, 'Mr.', 'Joe', 'Black');
 *
 * greetMrJoeBlack('Hello'); //=> Hello, Mr. Joe Black.
 */
const partialRight = (f, ...args_a) => (...args_b) => f(...args_b, ...args_a);

module.exports = partialRight;
