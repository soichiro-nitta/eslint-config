var OFF = 'off'
var WARN = 'warn'
// var ERROR = 'error'

module.exports = {
  extends: ['plugin:@typescript-eslint/recommended'],
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint', 'typescript-sort-keys'],
  rules: {
    '@typescript-eslint/ban-types': OFF,
    '@typescript-eslint/explicit-module-boundary-types': OFF,
    'typescript-sort-keys/interface': WARN,
    'typescript-sort-keys/string-enum': WARN,
  },
}
