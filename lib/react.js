var OFF = 'off'
var WARN = 'warn'
var ERROR = 'error'

module.exports = {
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
  },
  plugins: ['react', 'react-hooks'],
  extends: ['plugin:react/recommended', 'plugin:react-hooks/recommended'],
  rules: {
    'react/prop-types': OFF,
    'react-hooks/rules-of-hooks': ERROR,
    'react-hooks/exhaustive-deps': WARN,
    'react/self-closing-comp': [
      ERROR,
      {
        component: true,
        html: true,
      },
    ],
    'react/react-in-jsx-scope': OFF,
  },
}
