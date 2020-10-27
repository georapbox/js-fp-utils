## partialRight

`partialRight(f: Function, ...args?: [...Any]) => (...: [...Any]) => Any`

Creates a new function that invokes the provided function `f` with `partials` **appended** to the arguments it receives.

**Returns**: <code>function</code> - Returns the new partially applied function.

| Param | Type | Description |
| --- | --- | --- |
| f | <code>function</code> | The function to partially apply arguments to. |
| [...args] | <code>\*</code> | The arguments to be partially applied. |

**Example**
```js
const greet = (greeting, title, fname, lname) => `${greeting}, ${title} ${fname} ${lname}.`;
const greetMrJoeBlack = partialRight(greet, 'Mr.', 'Joe', 'Black');

greetMrJoeBlack('Hello'); //=> Hello, Mr. Joe Black.
```

### Related

- [partial](https://github.com/georapbox/js-fp-utils/tree/master/packages/partial)
- [curry](https://github.com/georapbox/js-fp-utils/tree/master/packages/curry)
