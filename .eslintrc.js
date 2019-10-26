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
    'indent': ['warn', 2, { 'SwitchCase': 1 }],
    'eqeqeq': ['error', 'always', { 'null': 'ignore' }],
    'semi': ['warn', 'always']
  }
};
