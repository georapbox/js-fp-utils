## partial

`partial(f: Function, ...args?: [...Any]) => (...: [...Any]) => Any`

Creates a new function that invokes the provided function `f` with `partials` **prepended** to the arguments it receives.

**Returns**: <code>function</code> - Returns the new partially applied function.

| Param | Type | Description |
| --- | --- | --- |
| f | <code>function</code> | The function to partially apply arguments to. |
| [...args] | <code>\*</code> | The arguments to be partially applied. |

**Example**
```js
const add = (a, b, c) => a + b + c;
const p1 = partial(add, 1);
p1(2, 3); // => 6

const p2 = partial(add, 10, 20);
p2(30); // => 60

const p3 = partial(add, 100, 200, 300);
p3(); // => 600

const p4 = partial(add);
p4(5, 10, 15); // => 30
```

### Related

- [partialRight](https://github.com/georapbox/js-fp-utils/tree/master/partialRight)
- [curry](https://github.com/georapbox/js-fp-utils/tree/master/curry)
