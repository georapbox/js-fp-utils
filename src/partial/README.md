## partial

`partial(f: Function, ...args?: [...Any]) => (...: [...Any]) => Any`

Apply partially a function `f` to its arguments by returning a function `g`.
When applied, `g` returns the result of applying `f` to the arguments provided initially followed by the arguments provided to `g`.

**Returns**: <code>function</code> - A function `g` that invokes the original `f` with the remaining arguments.

| Param | Type | Description |
| --- | --- | --- |
| f | <code>function</code> | The initial function to be partially applied. |
| [...args] | <code>\*</code> | Initially provided arguments to `f`. |

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

- [curry](https://github.com/georapbox/js-fp-utils/tree/master/src/curry)
