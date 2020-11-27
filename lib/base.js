module.exports = {
  env: {
    browser: true,
    node: true,
  },
  plugins: ['simple-import-sort'],
  extends: ['eslint:recommended'],
  rules: {
    'simple-import-sort/imports': 'error',
    'simple-import-sort/exports': 'error',
  },
}
