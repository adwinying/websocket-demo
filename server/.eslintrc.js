module.exports = {
  env: {
    node: true,
    commonjs: true,
    browser: true,
    es6: true,
  },
  extends: [
    'airbnb-base',
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaVersion: 2018,
  },
  rules: {
    semi: ['error', 'never'],
    'no-console': ['off'],
  },
};
