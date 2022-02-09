[![Build Status](https://travis-ci.com/georapbox/js-fp-utils.svg?branch=master)](https://travis-ci.com/georapbox/js-fp-utils)
[![Coverage Status](https://coveralls.io/repos/github/georapbox/js-fp-utils/badge.svg?branch=master)](https://coveralls.io/github/georapbox/js-fp-utils?branch=master)

# js-fp-utils

Javascript functional programming utilities

## Utilities

| Name | Description |
|------|-------------|
| [curry](https://github.com/georapbox/js-fp-utils/tree/master/packages/curry) | Returns a curried equivalent of the provided function. |
| [compose](https://github.com/georapbox/js-fp-utils/tree/master/packages/compose) | Performs right-to-left function composition. |
| [flip](https://github.com/georapbox/js-fp-utils/tree/master/packages/flip) | Creates a function that invokes the original function with its parameters reversed. |
| [partial](https://github.com/georapbox/js-fp-utils/tree/master/packages/partial) | Creates a new function that invokes the provided function with `partials` **prepended** to the arguments it receives. |
| [partialRight](https://github.com/georapbox/js-fp-utils/tree/master/packages/partialRight) | Creates a new function that invokes the provided function with `partials` **appended** to the arguments it receives. |
| [pipe](https://github.com/georapbox/js-fp-utils/tree/master/packages/pipe) | Performs left-to-right function composition. |
| [trace](https://github.com/georapbox/js-fp-utils/tree/master/packages/trace) | Inspect the values between functions in a point-free style when using function composition. |

## Tests

```sh
$ npm run test
```

## License

[The MIT License (MIT)](https://georapbox.mit-license.org/@2019)
