## partial

`partial(f: Function, ...args?: [...Any]) => (...: [...Any]) => Any`

Takes a function `f` and a list of arguments, and returns a function `g`.
When applied, `g` returns the result of applying `f` to the arguments provided initially followed by the arguments provided to `g`.

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
