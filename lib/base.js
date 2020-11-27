var OFF = 'off'
var WARN = 'warn'
// var ERROR = 'error'

module.exports = {
  env: {
    browser: true,
    node: true,
  },
  extends: ['eslint:recommended'],
  plugins: [
    'simple-import-sort',
    'import',
    'sort-destructure-keys',
    'sort-keys-fix',
  ],
  rules: {
    'import/first': WARN,
    'import/newline-after-import': WARN,
    'import/no-duplicates': WARN,
    'simple-import-sort/exports': WARN,
    'simple-import-sort/imports': WARN,
    'sort-destructure-keys/sort-destructure-keys': WARN,
    'sort-imports': OFF,
    'sort-keys-fix/sort-keys-fix': WARN,
  },
}
