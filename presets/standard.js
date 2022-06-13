var OFF = 'off'
var WARN = 'warn'
// var ERROR = 'error'

module.exports = {
  env: {
    browser: true,
    node: true,
  },
  extends: [
    'eslint:recommended',
    'prettier/react',
    'prettier/@typescript-eslint',
    'plugin:prettier/recommended',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'plugin:tailwindcss/recommended',
    'plugin:@next/next/recommended',
    'plugin:@typescript-eslint/recommended',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
  },
  plugins: [
    'simple-import-sort',
    'import',
    'sort-destructure-keys',
    'sort-keys-fix',
    'react',
    'react-hooks',
    'tailwindcss',
    '@typescript-eslint',
    'typescript-sort-keys',
  ],
  rules: {
    '@typescript-eslint/ban-types': OFF,
    '@typescript-eslint/explicit-module-boundary-types': OFF,
    'import/first': WARN,
    'import/newline-after-import': WARN,
    'import/no-duplicates': WARN,
    'react-hooks/exhaustive-deps': WARN,
    'react-hooks/rules-of-hooks': WARN,
    'react/display-name': OFF,
    'react/jsx-sort-props': [
      WARN,
      {
        callbacksLast: true,
        ignoreCase: true,
        reservedFirst: true,
        shorthandFirst: true,
      },
    ],
    'react/prop-types': OFF,
    'react/react-in-jsx-scope': OFF,
    'react/self-closing-comp': [
      WARN,
      {
        component: true,
        html: true,
      },
    ],
    'simple-import-sort/exports': WARN,
    'simple-import-sort/imports': WARN,
    'sort-destructure-keys/sort-destructure-keys': WARN,
    'sort-imports': OFF,
    'sort-keys-fix/sort-keys-fix': WARN,
    'tailwindcss/no-contradicting-classname': WARN,
    'typescript-sort-keys/interface': WARN,
    'typescript-sort-keys/string-enum': WARN,
  },
}
