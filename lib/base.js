var OFF = 'off'
// var WARN = 'warn'
var ERROR = 'error'

module.exports = {
  env: {
    browser: true,
    node: true,
  },
  plugins: ['simple-import-sort', 'import', 'sort-destructure-keys'],
  extends: ['eslint:recommended'],
  rules: {
    'simple-import-sort/imports': ERROR,
    'simple-import-sort/exports': ERROR,
    'sort-imports': OFF,
    'import/first': ERROR,
    'import/newline-after-import': ERROR,
    'import/no-duplicates': ERROR,
    'sort-destructure-keys/sort-destructure-keys': 2,
  },
}
