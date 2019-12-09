## partial

`partial(f: Function, ...args?: [...Any]) => (...: [...Any]) => Any`

Apply partially a function `f` to its arguments by returning a function `g`.
When applied, `g` returns the result of applying `f` to the arguments provided initially followed by the arguments provided to `g`.

**Returns**: <code>function</code> - A function `g` that invokes the original `f` with the remaining arguments.

| Param | Type | Description |
| --- | --- | --- |
| f | <code>function</code> | The initial function to be partially applied. |
| [...args] | <code>\*</code> | Initially provided arguments to `f`. |

**Example**
```js
const add = (a, b, c) => a + b + c;
const p1 = partial(add, 1);
p1(2, 3); // => 6

const p2 = partial(add, 10, 20);
p2(30); // => 60

const p3 = partial(add, 100, 200, 300);
p3(); // => 600

const p4 = partial(add);
p4(5, 10, 15); // => 30
```

> ES5 compiled version on [Babel Repl](https://babeljs.io/repl#?browsers=&build=&builtIns=false&spec=false&loose=false&code_lz=PQKhCgAIUhBAHeAbAnpeBDATgFwJYZKqQaQBmArgHYDG-A9lZAAZnOQ72R44DOJWAOYUAtgFMqfSACM0WMTgpYqeKoJLlqdPIxaDmAOigwA6gAsJJREjxiAJgBo97eYuX8cFyPN4UkOSHoyK2QUVXVWdk4OL2xhcUl-eCx6ADc8O3tuFXxCYjJ6InoAdyzZGLEBeIkpZLSMrOjmfSNoY0gAAUwsDBFIAG9KWgYqAF9ySAAVL1UeAiRNYZ0maOlK7tyiNAxrWztWmC7sXoGQcYBtAyu43gBdSABJHPniOvTMuyrRGo8uSIPOq4lFR-IMtCNxrBFtpdM0omYMAFVKl6ABrMQeLz0LB4QSqQgsNiQYo8MwVbxiEQYWZqL4JPgAjpiAAevWQYmM7RojF4AQwdk-AF5IAAKDBOaROGgASkggoAfBoANQySAqmgAbi5PIC8AAjHL0NhNmKBU49dKtdB0HqRQAmJwAZktkGAwDlioAbJzrdyQbq7YaNvNTY5IHqAAxOO0Ry3teB2kWO2Ma13uhWQT0Rn0wP289COoPGkP8sORqOQGMV5Mp-OOkUut0ezMR7NtX069AAFiLuBLArj1vgXZFAFZzRW9aPG-nFcnjMBwHndcWCcKRWQnFcDDcAPoYWUZkXbvfSQ-KsjH65CXj7rfXwS3s9a8Aieh2PxiAws-DYqTC4NCC1IA&debug=false&forceAllTransforms=false&shippedProposals=false&circleciRepo=&evaluate=false&fileSize=false&timeTravel=false&sourceType=module&lineWrap=false&presets=env&prettier=false&targets=&version=7.7.1&externalPlugins=)

### Related

- [curry](https://github.com/georapbox/js-fp-utils/tree/master/curry)
