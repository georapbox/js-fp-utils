/**
 * Inspect the values between functions in a point-free style when using function composition.
 *
 * @param {String} label The label to use in order to inspect the value.
 * @param {function} [log=console.log] (Optional) The logging method to use instead.
 * @returns {function} Returns a function that when invoked, prints the value along with the label provided and returns the value itself.
 * @example
 *
 * const inc = n => n + 1;
 * const double = n => n * 2;
 * const process = compose(
 *   trace('after double again'),
 *   double,
 *   trace('after inc'),
 *   inc,
 *   trace('after double'),
 *   double
 * );
 *
 * process(10);
 * // => "after double: 12"
 * // => "after inc: 13"
 * // => "after double again: 26"
 */
const trace = (label, log = console.log.bind(console)) => value => {
  log(`${label}: ${value}`);
  return value;
};

module.exports = trace;
