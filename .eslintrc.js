module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'plugin:react/recommended',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: [
    'react',
    "react-hooks",
    '@typescript-eslint',
    'eslint-plugin-import-helpers',
    'prettier',
    'import-helpers',
  ],
  rules: {
    'react/prop-types': 'off',
    'semi': [2, 'never'],
    'quotes': ['error', 'single'],
    'no-console': 'warn',
    'no-shadow': 'off',
    'prettier/prettier': 'error',
    'import-helpers/order-imports': [
      'warn',
      {
        newlinesBetween: 'always',
        groups: [
          '/^react/',
          'module',
          '/^~/',
          ['parent', 'sibling', 'index'],
        ],
        alphabetize: { order: 'asc', ignoreCase: true },
      },
    ],
    'react/jsx-uses-react': 'error',   
    'react/jsx-uses-vars': 'error',
    '@typescript-eslint/no-empty-interface': 1,
    '@typescript-eslint/indent': ['error', 2],
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/explicit-function-return-type': ['off'],
    "@typescript-eslint/no-unused-vars": ["error"],
    '@typescript-eslint/naming-convention': [
      'error',
      {
        selector: 'interface',
        format: ['PascalCase'],
        custom: {
          regex: '^I[A-Z]',
          match: true
        }
      },
      {
        selector: 'typeParameter',
        format: ['PascalCase'],
        prefix: ['T']
      },
      {
        selector: 'typeAlias',
        format: ['PascalCase'],
        custom: {
          regex: '^T[A-Z]',
          match: true
        }
      },
      {
        selector: 'enum',
        format: ['PascalCase'],
        custom: {
          regex: '^E[A-Z]',
          match: true
        }
      }
    ]
  },
};
