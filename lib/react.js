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
    'raect/display-name': OFF,
    'react-hooks/exhaustive-deps': WARN,
    'react-hooks/rules-of-hooks': WARN,
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
