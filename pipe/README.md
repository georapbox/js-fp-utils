## pipe

`pipe(...fns: [...Function]) => Function`

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

> ES5 compiled version on [Babel Repl](https://babeljs.io/repl#?browsers=&build=&builtIns=false&spec=false&loose=false&code_lz=PQKhCgAIUgFBTATgMwPaILYGdIBt7IAuAtIasYgJYDmAFoZMgK4B2AxoZai5G6hgAdUWSp24A6KDAAqteHgKEMwhs3ZieGAIYBPSLS0A3eVpZ6tVQjoDckQnMiJ42yi1fVGrDlxY4MTLAYAI3lWCx1JaClIAAFlABMmfEgBSgF4aJiBCy0MSABvNW9uAF9IAG1xKuRfAF1IWXkijRwyXn4hLAzoWKdCJkRfAuafMoBBSBZ4AHdPdR9ILVaHJywkhlRkOwc-QWFRH0z4AA9cgXwpaL5fBlc2SABeSGPHgD5nyABqSABGayvuIFIPFUEwgskni8Hu8XjAAEz_KI9VLpAAUdwANMDQeD4ABKVEAZjxtmAwDekAAHNEUfBUSCwfgsXcCcTSeToZAAOyXHrXIFsLSpQhaXCUABe8ieWgpWnEZAAqgJ0ogAMJLOkkgE3SDUJzwTgsDxPVHISiIQIAOVy8CxuCWhGtGHxFIABgAJeC4XCoLEYPQsG2QSg4AAkhXNVptZXD9qjzpK4ldiJg_IYWFooMIAHF9YbjSk0nS9fADe4sYLhaKJfiU5AM1nc6X86iAOQAKVQtBYraxrYAIqh4K2SZAyRTW-6AKIAGRnAHksQBZACakEtYyXU8gAEkAMqQdvz92WyD9-dT8StqTAcBpwvpR6QVFVcQ1LB4in5KDBram3ziPgRr2I8DxPAADJ-36QDBjgGgMPA1BSNSIpAJTgD-lB_u-gHwMBtCgU8PxQT-MF9AhjC-OU4G1Kh6E_uRgyUVg4hOIkbDwAASjQ9CoqiWhYkEn6ci-VQWNQH6yqiQSieI4kfniWolP84AJEk8DiCcQiIIQOBPLS_xAA&debug=false&forceAllTransforms=false&shippedProposals=false&circleciRepo=&evaluate=false&fileSize=false&timeTravel=false&sourceType=module&lineWrap=false&presets=env&prettier=false&targets=&version=7.7.1&externalPlugins=)

### Related

- [compose](https://github.com/georapbox/js-fp-utils/tree/master/compose)
