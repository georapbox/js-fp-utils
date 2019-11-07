## compose => <code>function</code>

Performs right-to-left function composition.
The rightmost function may have any arity; the remaining functions must be unary.

**Returns**: <code>function</code> - A new function as the result of the composition

**Throws**:

- <code>Error</code> if invoked with no functions as arguments


| Param | Type | Description |
| --- | --- | --- |
| [...fns] | <code>function</code> | The functions to compose |

**Example**
```js
const inc = x => x + 1;
const double = x => x * 2;

compose(inc, double)(3); // => 7
compose(double, inc)(3); // => 8

const capitalize = a => a.toUpperCase();
const greeting = (firstName, lastName) => `Hello, my name is ${firstName} ${lastName}.`;
const shoutGreeting = compose(capitalize, greeting);
shoutGreeting('John', 'Doe'); // => 'HELLO, MY NAME IS JOHN DOE.'
```

> ES5 compiled version on [Babel Repl](https://babeljs.io/repl#?babili=false&browsers=&build=&builtIns=false&spec=false&loose=false&code_lz=PQKhCgAIUgFBTATgMwPaILYGdKIJYDmAFgC4C0JqZANvMiZMgK4B2AxiXqi5G6hgAdUWPJ24A6KDAAqReLkKkMwhs3ZieGAIYBPSES0A3eVpZ6t-EjoDckEnNzxteFi4KNWHLixwYmWBgAjeVYLHUloKUgAAWUAEyZaXn4hLHgo6IELLQxIAG81L24AX0gAbXFK5B8AXUhZeUKNHEpkwWF06Bj7RFQAdxw8gFFEXsRS2V6ByAADEbGZyDxkWeqsRdoWAnslnBmABhmImGjEeBImRB98pu9SgEFIFng-j3VvSC0WhzOsRIZUCt7PI-O0RBoMvAAB45AS0KRRPg-BguNiQAC8kChGIAfFjIABqSAARmsiO4AUgcVQTECSUx2PReOxMAATGTIl1Qal4AAKVEAGipNLp8AAlLyAMxi2zAYC4yAAdnJYL51NptCFqIl0tl8qZkAAHAiuRSGGwtAJRFpqHgAF7yTFaBVacSUACqAgESAAwl8-TLycjIAQzuc3BjILzkHhEAEAHI5eBC6hfEiJjDihUzAAS8Go1FQQowehYSd2kAAJAVYwmk6Vq6m65niuIZhyYEjKVgiDSSABxMOcLaR7kdXkWq0kG325MhoduQNdHt9wfwcNbXkAcgAUqgiCwt0KtwARVDwLcyyByhVbnNDAAyD4A8kKALIATUg8fub6GkAASQAZUgHdnxzeNIBPZ8hnELcpGAcAu3NFIOkjXlKnENYxQVDDKgsAgsBwg08igJYVmjHxxE2bYiAxdFMX2HDSMgVi7CIKYnheSB5nQbcxzSRwAEcmFjeAcC0BhaDTSBuBMRACCYTMWBIS8OUgYoyLOC4rkYKizgSNh4AAJUUEheV5AB9IVqmIvFeQInBMTKao8PERyxRqIVHLKfYajFbyFKIslijJcB4kSeBxGhIREBIJy2h5MkgA&debug=false&forceAllTransforms=false&shippedProposals=false&circleciRepo=&evaluate=false&fileSize=false&timeTravel=false&sourceType=module&lineWrap=false&presets=env&prettier=false&targets=&version=7.7.1&externalPlugins=)

### Related

- [pipe](https://github.com/georapbox/js-fp-utils/tree/master/pipe)
