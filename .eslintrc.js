module.exports = {
  env: {
    browser: true,
    es2021: true,
    jest: true,
    node: true,
  },

  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'plugin:prettier/recommended',
    'prettier',
    'next/core-web-vitals',
  ],

  globals: {
    Atomics: 'readonly',

    SharedArrayBuffer: 'readonly',
  },

  parser: '@babel/eslint-parser',

  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['react', 'prettier', 'react-hooks'],
  settings: {
    react: {
      version: 'detect',
    },
  },
  rules: {
    'react/react-in-jsx-scope': 'off',
    'no-unused-vars': 1,
    'import/no-anonymous-default-export': 0,
    'prettier/prettier': 1,
  },
};
