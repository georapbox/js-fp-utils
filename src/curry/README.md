## curry

`curry(f: Function, arity?: Number) => (...: [...Any]) => Any`

Transforms a function of N arguments in such a way that it can be called as a chain of N functions each with a single argument (arity: 1).

**Returns**: <code>function</code> - A curried equivalent of the provided function

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| f | <code>function</code> |  | The initial function to be curried. |
| [arity] | <code>Number</code> | <code>f.length</code> | The arity of the provided function. Useful in cases that arity cannot be determined by `f.length`. As of ES2015 when a function has a rest parameter or at least one parameter with default value, the `f.length` is not properly calculated. |

**Example**  
```js
const add = curry((a, b) => a + b);
const addOne = add(1);
addOne(2); // => 3

// Provide arity as second argument in cases that it cannot be determined. 
const add = curry((a = 0, ...args) => a + args[0] + args[1], 3);
const addOne = add(1);
const addTwo = addOne(2);
addTwo(3); // => 6
```

### Related

- [partial](https://github.com/georapbox/js-fp-utils/tree/master/src/partial)
