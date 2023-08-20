// var OFF = 'off'
var WARN = 'warn'
// var ERROR = 'error'

module.exports = {
  extends: ['plugin:svelte/recommended', 'plugin:tailwindcss/recommended'],
  overrides: [
    {
      files: ['*.svelte'],
      parser: 'svelte-eslint-parser',
    },
  ],
  plugins: ['svelte', 'tailwindcss'],
  rules: {
    'svelte/indent': WARN,
    'tailwindcss/no-contradicting-classname': WARN,
  },
  settings: {
    tailwindcss: {
      groupByResponsive: true,
    },
  },
}
