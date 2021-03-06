var OFF = 'off'
var WARN = 'warn'
// var ERROR = 'error'

module.exports = {
  extends: [
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'plugin:tailwind/recommended',
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
  },
  plugins: ['react', 'react-hooks'],
  rules: {
    'react-hooks/exhaustive-deps': WARN,
    'react-hooks/rules-of-hooks': WARN,
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
  },
}
