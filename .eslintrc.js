module.exports = {
  env: {
    browser: true,
    es6: true,
    node: true,
    jest: true,
    commonjs: true,
  },
  extends: ['airbnb'],
  parser: '@typescript-eslint/parser',
  rules: {
    'no-unused-vars': 'error',
    'no-var-requires': 'off',
    'no-var': 'error',
  },
};
