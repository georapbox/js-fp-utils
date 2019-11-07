## pipe => <code>function</code>

Performs left-to-right function composition.
The leftmost function may have any arity; the remaining functions must be unary.

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

pipe(inc, double)(3); // => 8
pipe(double, inc)(3); // => 7

const capitalize = a => a.toUpperCase();
const greeting = (firstName, lastName) => `Hello, my name is ${firstName} ${lastName}.`;
const shoutGreeting = pipe(greeting, capitalize);
shoutGreeting('John', 'Doe'); // => 'HELLO, MY NAME IS JOHN DOE.'
```

> ES5 compiled version on [Babel Repl](https://babeljs.io/repl#?babili=false&browsers=&build=&builtIns=false&spec=false&loose=false&code_lz=PQKhCgAIUgFBTATgMwPaILYGdIBt7IAuAtIasYgJYDmAFoZMgK4B2AxoZai5G6hgAdUWSp24A6KDAAqteHgKEMwhs3ZieGAIYBPSLS0A3eVpZ6tVQjoDckQnMiJ42yi1fVGrDlxY4MTLAYAI3lWCx1JaClIAAFlABMmfEgBSgF4aJiBCy0MSABvNW9uAF9IAG1xKuRfAF1IWXkijRwyXn4hLAzoWPtEVAB3HHyAUUR-xDLKZEhXQ1QAa3h4yAHRWkgWVE91HxwtfcRqJgx4FkIsTKdCJkRfAuafMoBBTfgBneKeA7sHJywkgxUDN7PI-IJhKIfJl4AAPXICfBSaJ8XwMVxsSAAXkgsOxAD5cZAANSQACM1hR3ECkHiqCYQWSOLxWMJeJgACZKVEeql0gAKDEAGlp9MZ8AAlPyAMwS2zAYAEyAADmifPg_LpDPwIoxUtl8sVrMgAHZkT1UTS2FpUoQtLhKAAveQ4rRKrTiMgAVQE6UQAGEDhq5VS0ZBqE54JwWB4cfzkJREIEAHK5eAi3AHQip04SpUAAwAEvBcLhUCKMHoWGnZjgACSFRMptNlBuZ5unErifPcmCWhhYWj0wgAcUj0djKTSGoj8Cj7hF1tt9qdkt7kEHw7Hc4n_IA5AApVC0Fh7kV7gAiqHge7lkAVSr3hZGABkXwB5EUAWQAmpBk88X4jJAACSADKkAHu-hbJpAF7viM4h7lIwDgP2U7pNikD8lU4g1FgebGvkUCzDM8a-OI-AxvY2JYjiAAMebEZALG_P0HwsO8kBjBM-7qo48AAI5MIm8D7Aw-BZpA3AmEcJxnIQt7cpAJTgCR1y3DwOFVBY1AEUq-HiE4iRsBq_IAPoijUhGEvyuk4Di5Q1Np4j2RKtQivZ5T0bUEqeUcBGUiUlLgAkSTwOIcJCIgFxYeqlJAA&debug=false&forceAllTransforms=false&shippedProposals=false&circleciRepo=&evaluate=false&fileSize=false&timeTravel=false&sourceType=module&lineWrap=false&presets=env&prettier=false&targets=&version=7.7.2&externalPlugins=)

### Related

- [compose](compose)
