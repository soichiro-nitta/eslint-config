var OFF = 'off'
var WARN = 'warn'
// var ERROR = 'error'

module.exports = {
  extends: [
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'plugin:tailwindcss/recommended',
    'plugin:@next/next/recommended',
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
  },
  plugins: ['react', 'react-hooks', 'tailwindcss'],
  rules: {
    '@next/next/link-passhref': OFF,
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
    'tailwindcss/no-contradicting-classname': WARN,
  },
  settings: {
    tailwindcss: {
      groupByResponsive: true,
    },
  },
}
