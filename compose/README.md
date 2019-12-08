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

> ES5 compiled version on [Babel Repl](https://babeljs.io/repl#?browsers=&build=&builtIns=false&spec=false&loose=false&code_lz=PQKhCgAIUgFBTATgMwPaILYGdKIJYDmAFgC4C0JqZANvMiZMgK4B2AxiXqi5G6hgAdUWPJ24A6KDAAqReLkKkMwhs3ZieGAIYBPSES0A3eVpZ6t-EjoDckEnNzxteFi4KNWHLixwYmWBgAjeVYLHUloKUgAAWUAEyZaXn4hLHgo6IELLQxIAG81L24AX0gAbXFK5B8AXUhZeUKNHEpkwWF06BjEeBImRB98pu9SgEFIFngAdw91b0gtFocerESGVGQ7Bz52kQ0M-AAPHIFaKSi-HwYXNkgAXkhD-4A-R8gAakgARmsL7gDIHFUExAkkHk87q8njAAEy_SJdHapeAAChuABpAcDQfAAJQogDMuNswGAL0gAHY_rtUUCQbRMTd8USSWTIZAABznRH_BhsLQCURaah4ABe8geWnJWnElAAqgIBEgAMKLVHEv5XSAEHq9Nz3SAo5B4RABAByOXgmOoixIFowePJAAMABLwajUVCYjB6FiWyB4HAAEgKJvNltKIZt4YdxXETvhMEuAKwRGBJAA4rrOCx3A8kR0UfzBSRhWKrdrs24NV1U-ms_A9bmUQByABSqCILBbmJbABFUPAW8TIKTyS2XQBRAAy04A8piALIATUgZtGi8nkAAkgBlSBtucus2QPtzyfiFtSYDgZN8lIdA0oyriapYXHkvJQAObI0-cS0Lm9j3HcDwAAwfl-kDQY4fQDIwPDstU8KQMU4Dfngv5vgB8BAUQIEPF8kHftBPRwTwb5lGBNQoWh35kf0FH_j0CRsKiKJaJigQfuyz6VBYBDvtKKKBHx4gCe-uIasUvzgPEiTwOIRxCIgJA4PmD5pL8QA&debug=false&forceAllTransforms=false&shippedProposals=false&circleciRepo=&evaluate=false&fileSize=false&timeTravel=false&sourceType=module&lineWrap=false&presets=env&prettier=false&targets=&version=7.7.1&externalPlugins=)

### Related

- [pipe](https://github.com/georapbox/js-fp-utils/tree/master/pipe)
