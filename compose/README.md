<a name="compose"></a>

## compose() ⇒ <code>function</code>
Chains together functions to create a new function following the mathematical model of function composition.
In mathematics f ∘ g (pronounced "f composed with g") is the function that given x, returns f(g(x)).
Following the mathematical model `compose(f, g)(x)` should equal `f(g(x))`.
Thus it is made clear that function passed as arguments should be read from right to left.

**Returns**: <code>function</code> - A new function as the result of the composition.  

| Param | Type | Description |
| --- | --- | --- |
| [...fns] | <code>function</code> | One or more functions to compose. |

**Example**  
```js
const capitalize = a => a.toUpperCase();
const head = a => a[0];
const reverse = a => a.split('').reverse().join('');

// Example 1: First reverse then capitalize
compose(capitalize, reverse)('hello'); // -> "OLLEH"

// Example 2: First reverse, then get the first character and finally capitalize
compose(capitalize, head, reverse)('hello'); // -> "O"

// Example 3: Same as above but combining compositions
const reverseAndHead = compose(head, reverse);
const reverseHeadAndCapitalize = compose(capitalize, reverseAndHead);
reverseHeadAndCapitalize('hello'); // -> "O"
```

## ES5 version

https://babeljs.io/repl#?babili=false&browsers=&build=&builtIns=false&spec=false&loose=false&code_lz=MYewdgzgLgBKC2AHEECmMC8MAUA6fAZpAJSYB8MAHuTERLgE6oAmArsKgEoCWA5gBZRs2AJ4AaWqQwUCo4hMrEA3EA&debug=false&forceAllTransforms=false&shippedProposals=false&circleciRepo=&evaluate=false&fileSize=false&timeTravel=false&sourceType=module&lineWrap=false&presets=es2015&prettier=false&targets=&version=7.6.4&externalPlugins=
