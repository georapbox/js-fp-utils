## curry(func, [arity]) ⇒ <code>function</code>

Transforms a function of N arguments in such a way that it can be called as a chain of N functions each with a single argument (arity: 1).

**Returns**: <code>function</code> - A curried equivalent of the provided function

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| func | <code>function</code> |  | The initial function to be curried. |
| [arity] | <code>Number</code> | <code>func.lenght</code> | The arity of the provided function. Useful in cases that arity cannot be determined by `func.length`. As of ES2015 when a function has a rest parameter or at least one parameter with default value, the `func.length` is not properly calculated. |

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

> ES5 compiled version on [Babel Repl](https://babeljs.io/repl#?browsers=&build=&builtIns=false&spec=false&loose=false&code_lz=PQKhCgAIUgVAnAhgOwM4DMD28C2rKKToCuyAxgC4CWmykm6kAcgfAObE4CmyF-VdVMTIALApADuiAJ6QKIxBUhUlZFFBgAjLpDUAbPVwAmBfIVGIB9RixLlqtfF0SjJKsYVQC2h1h268kAAUiPAq0gBckACMAJQAdBoakAACAA6hiDiQAN52lDTIAL5EpGRwIjoCKlSIeqX2hXKYkNq6xPBhxonQqRlI2TlMnNrwJQDaoeEAvPnxhshsIhQAuhU6UxSyDHKVkGnwmABuVEbGDQW0PTAAqqhcJPVWavf48oqs4booyJhKbWcKFxcAJzppZAADOYLNjyCHXSAAQXwOwAogBlABMAAZogBWSSVOiEfIOOgKMyQeBcVBKfpZLhA-D0ZkfQyIWn0ZBcZL07hMtzySBndCIYh6JRHOrELgAGl2OihZXmPFhIghynwvzphzSwL0sn0ZHFim6yRS1IoHTQuVJhRKiPanSo5y4AEdiFQpQslDt5DoDsdTuc7bRzVwAB5ZNKGJK9MiOJSIIwmaZO-DSIIheWaWKQaYAPnEAGpWrEANzJBNoJMpgDy3PzBBTQTild6yaMDa4QUxFcgwGA-aLAGY4zBB5AAAqHE5nT5bUyQe7Vkyhfw8JTPDk03YfFTfZDa1o6QHAnCgowI6ucztN42dTMhJvY-Xxd_r1B5wslvyocbYmspafuM0QrPKI4VlWibNl2jZpp2rZQfGMGdrAEgtAh9bcr2yEwGhGFBJB5YDkOP4AGwaMA4A3qoHQZk2QT5PKmzSN-RY5FAVKMtaFxkumLpGEE77xJ-cS5FxkDcVa8DEuwqDRCqixCgWaYhGEi4AD6aRcSlqrEklSZAAD8FzCR-8lxIZUlROZonyX2w4CcYdnjCJYlvhZbCoJiKzIZARSVoF4DgDgmBGOKXDxJGaTYHw970dIlZAA&debug=false&forceAllTransforms=false&shippedProposals=false&circleciRepo=&evaluate=false&fileSize=false&timeTravel=false&sourceType=module&lineWrap=false&presets=env&prettier=false&targets=&version=7.7.1&externalPlugins=)
