## flip

`flip(func: Function) => (...: [...Any]) => Function`

Creates a function that invokes the original function with its parameters reversed.

**Returns**: <code>function</code> - Returns the new flipped function.

| Param | Type | Description |
| --- | --- | --- |
| func | <code>function</code> | The function to invoke with its parameters reversed. |

**Example**
```js
const flipped = flip((...args) => args);

flipped(1, 2, 3, 4); // => [4, 3, 2, 1]
```
