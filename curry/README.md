## curry(f, [arity]) => <code>function</code>

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

> ES5 compiled version on [Babel Repl](https://babeljs.io/repl#?browsers=&build=&builtIns=false&spec=false&loose=false&code_lz=PQKhCgAIUgVAnAhgOwM4DMD28C2rKKToCuyAxgC4CWmykm6kAcgfAObE4CmyF-VdVMTIALApADuiAJ6QKIxBUhUlZFFBgAjLpDUAbPVwAmBfIVGIB9RixLlqtfF0SjJKsYVQC2h1h268kAAUiPAq0gBckACMAJQAdBoakAACAA6hiDiQAN52lDTIAL5EcCI6AipUiHpEpAW0cpiQ2rrE8GHGidCpGUjZOUyc2vAlANqh4QC86PGGyGzyALplOpMUsgxy5ZBp8JgAblRGxnX2hd0wAKqoXCS1Vmq3-PKKrOG6KMiYSq0nFFxcAJTppZAADWbzRYiMGXSAAQXwWwAogBlABMAAZogBWSTlOiEfIOOgKMyQeBcVBKPpZLgA-D0RlvQyIan0ZBcZK07gMtzySAndCIYh6JQHGrELgAGm2Oghcx40LBynw3xp-zSgL0sn0ZFFii6yRSlIo7TQuWJhRK8LaHSopy4AEdiFQJfMlFt5Do9odjqcrbRjVwAB5ZNKGJI9MiOJSIIwmKZ2-DSIIhWWaWKQKYAPnEAGoWrEANzJGNoOMJgDynOzBATQTipZ68aMNa4QXRJcgwGA2bzAGYozBe5AAAr7I4nd4bUyQW7lkyhfw8JSPNlU7ZvFSfZDqlo6f6AnDAoxw8vs1t1_UdVMhOuY2XxZ_L1BZ3MFvyoMaYlaF19jNESyygOJZlrG9ZtrWSato2YHRhBrawBIzQwdWnKdvBMBIShQSgcWPZ9h-ABsGjAOAF6qO0KZ1kE6Cyus0jvnmORQBS9LmmcDR0DenRGEEz7xK-AD6iBZqxkCSexZrwIS7CoKJioLAKOZJiEYSzgAPppRBKdCsRsVJkAAPxEAJL7yaJBlGZJUTmUJlmZv2yYOvxgkiYgT4WWwCmZs2kBFKWgXgOAOCYEYopcPEoZpNgfDXtR0ilkAA&debug=false&forceAllTransforms=false&shippedProposals=false&circleciRepo=&evaluate=false&fileSize=false&timeTravel=false&sourceType=module&lineWrap=false&presets=env&prettier=false&targets=&version=7.7.1&externalPlugins=)

### Related

- [partial](https://github.com/georapbox/js-fp-utils/tree/master/partial)
