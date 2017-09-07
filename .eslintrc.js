const OFF = 0;
const WARN = 1;
const ERROR = 2;

module.exports = {
  root: true,
  parserOptions: {
    ecmaVersion: 2017,
    sourceType: 'module'
  },
  extends: 'eslint:recommended',
  env: {
    browser: true
  },
  rules: {
    "no-unused-vars": WARN,
    "no-console": WARN,
    "no-warning-comments": [ WARN, {
      "terms": [ "TODO", "FIXME", "HACK" ],
      "location": "start"
    }]
  }
};
