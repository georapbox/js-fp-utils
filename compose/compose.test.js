const compose = require('./compose.js');

describe('compose', () => {
  const capitalize = a => a.toUpperCase();
  const head = a => a[0];
  const reverse = a => a.split('').reverse().join('');

  it('should compose function to a new one', function () {
    expect(compose(capitalize, reverse)('hello')).toEqual('OLLEH');
    expect(compose(capitalize, head, reverse)('hello')).toEqual('O');
    expect(compose(capitalize, reverse, head)('hello')).toEqual('H');
    expect(compose(capitalize)('hello')).toEqual('HELLO');
    expect(compose()('hello')).toEqual('hello');

    const reverseAndHead = compose(head, reverse);
    const reverseHeadAndCapitalize = compose(capitalize, reverseAndHead);
    expect(reverseHeadAndCapitalize('hello')).toEqual('O');
  });
});
