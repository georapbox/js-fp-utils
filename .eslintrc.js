module.exports = {
  env: {
    browser: true,
    node: true,
    es2020: true,
    jest: true
  },
  extends: [
    'eslint:recommended'
  ],
  rules: {
    // Possible Errors
    'no-console': 'off',
    'no-empty': ['error', { 'allowEmptyCatch': true }],

    // Stylistic Issues
    'semi': ['warn'],
    'indent': ['warn', 2, { 'SwitchCase': 1, 'ignoredNodes': ['TemplateLiteral'] }],
    'quotes': ['warn', 'single', { 'allowTemplateLiterals': true }],
    'brace-style': ['warn'],
    'no-multiple-empty-lines': ['warn', { 'max': 1 }],
    'no-trailing-spaces': ['warn'],
    'no-unneeded-ternary': ['warn'],
    'comma-spacing': ['warn'],
    'comma-style': ['warn'],
    'comma-dangle': ['warn'],
    'eol-last': ['warn'],
    'jsx-quotes': ['warn', 'prefer-double'],

    // Best Practices
    'eqeqeq': ['error', 'always', { 'null': 'ignore' }],
    'no-multi-spaces': ['warn', { 'ignoreEOLComments': true }],
    'curly': ['warn']
  }
};
