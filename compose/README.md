## compose => <code>function</code>

Performs right-to-left function composition.
The rightmost function may have any arity; the remaining functions must be unary.

**Returns**: <code>function</code> - A new function as the result of the composition

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

> ES5 compiled version on [Babel Repl](https://babeljs.io/repl#?babili=false&browsers=&build=&builtIns=false&spec=false&loose=false&code_lz=MYewdgzgLgBKC2AHEECmMC8MAUA6fAZpAJSYB8MA3gFAwwCWBOREuANqmAOZQAWmGLAAZSNOnQBOqKAFcJYGEXKKwAblowAvtQ2Nmkdpx79BWAIyiNk6XIUsA2kIC66uto1TZ8laykATGWBUbGwAQwAaGAAjUgwKPHxQiS4IWIpQ7CiE3CSU4nz1TVUgA&debug=false&forceAllTransforms=false&shippedProposals=false&circleciRepo=&evaluate=false&fileSize=false&timeTravel=false&sourceType=module&lineWrap=false&presets=env&prettier=false&targets=&version=7.7.1&externalPlugins=)

### Related

- [pipe](https://github.com/georapbox/js-fp-utils/tree/master/pipe)
