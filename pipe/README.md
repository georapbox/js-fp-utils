## pipe => <code>function</code>

Performs left-to-right function composition.
The leftmost function may have any arity; the remaining functions must be unary.

**Returns**: <code>function</code> - A new function as the result of the composition

| Param | Type | Description |
| --- | --- | --- |
| [...fns] | <code>function</code> | The functions to compose |

**Example**
```js
const inc = x => x + 1;
const double = x => x * 2;

pipe(inc, double)(3); // => 8
pipe(double, inc)(3); // => 7

const capitalize = a => a.toUpperCase();
const greeting = (firstName, lastName) => `Hello, my name is ${firstName} ${lastName}.`;
const shoutGreeting = pipe(greeting, capitalize);
shoutGreeting('John', 'Doe'); // => 'HELLO, MY NAME IS JOHN DOE.'
```

> ES5 compiled version on [Babel Repl](https://babeljs.io/repl#?babili=false&browsers=&build=&builtIns=false&spec=false&loose=false&code_lz=MYewdgzgLgBADgSzgUxgXhgCgHS4GaQCU6AfDAN4BQMMCeWBE2ANsmAOZQAW6aGADMSo0aAJ2RQArqLAwCpOWADc1GAF9Kqug0gs2nHnwwBGIarETpsxgG1-AXRU0Nq8VJmKm4gCaTgyACUEdi4oTEwAQwAaGAAjYjQyHFwI0XYIBLIIzFjk7FT0wiKVNSUgA&debug=false&forceAllTransforms=false&shippedProposals=false&circleciRepo=&evaluate=false&fileSize=false&timeTravel=false&sourceType=module&lineWrap=false&presets=env&prettier=false&targets=&version=7.7.1&externalPlugins=)

### Related

- [compose](https://github.com/georapbox/js-fp-utils/tree/master/compose)
