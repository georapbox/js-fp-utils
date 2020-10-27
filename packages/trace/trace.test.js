const trace = require('./trace.js');

describe('trace', () => {
  it('inspects the values between functions', () => {
    const compose = (...fns) => fns.reduce((a, b) => (...args) => a(b(...args)));
    const outputs = [];
    const fakeLog = x => outputs.push(x);

    const inc = n => n + 1;
    const double = n => n * 2;
    const process = compose(
      trace('after double again', fakeLog),
      double,
      trace('after inc', fakeLog),
      inc,
      trace('after double', fakeLog),
      double
    );

    process(6);

    expect(outputs).toEqual(['after double: 12', 'after inc: 13', 'after double again: 26']);
  });
});
