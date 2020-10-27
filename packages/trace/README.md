## trace

`trace(label: String, log?: Function) => Any => Any`

Inspect the values between functions in a point-free style when using function composition.

**Returns**: <code>function</code> - Returns a function that when invoked, prints the value along with the label provided and returns the value itself.

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| label | <code>String</code> |  | The label to use in order to inspect the value. |
| [log] | <code>function</code> | <code>console.log</code> | (Optional) The logging method to use instead. |

**Example**
```js
const inc = n => n + 1;
const double = n => n * 2;
const process = compose(
  trace('after double again'),
  double,
  trace('after inc'), 
  inc, 
  trace('after double'), 
  double
);

process(10);
// => "after double: 12"
// => "after inc: 13"
// => "after double again: 26"
```
