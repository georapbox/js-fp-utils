/**
 * Chains together functions to create a new function following the mathematical model of function composition.
 * In mathematics f ∘ g (pronounced "f composed with g") is the function that given x, returns f(g(x)).
 * Following the mathematical model `compose(f, g)(x)` should equal `f(g(x))`.
 * Thus it is made clear that function passed as arguments should be read from right to left.
 *
 * @param {function} [fns...] One or more functions to compose.
 * @returns {function} A new function as the result of the composition.
 * @example
 *
 * const capitalize = a => a.toUpperCase();
 * const head = a => a[0];
 * const reverse = a => a.split('').reverse().join('');
 *
 * // Example 1: First reverse then capitalize
 * compose(capitalize, reverse)('hello'); // -> "OLLEH"
 *
 * // Example 2: First reverse, then get the first character and finally capitalize
 * compose(capitalize, head, reverse)('hello'); // -> "O"
 *
 * // Example 3: Same as above but combining compositions
 * const reverseAndHead = compose(head, reverse);
 * const reverseHeadAndCapitalize = compose(capitalize, reverseAndHead);
 * reverseHeadAndCapitalize('hello'); // -> "O"
 */
const compose = (...fns) => x => fns.reduceRight((y, f) => f(y), x);

module.exports = compose;
