import { dirname } from 'path'
import { fileURLToPath } from 'url'

import { FlatCompat } from '@eslint/eslintrc'
import js from '@eslint/js'
import nextEslintPlugin from '@next/eslint-plugin-next'
import eslintImport from 'eslint-plugin-import'
import prettierPlugin from 'eslint-plugin-prettier'
import react from 'eslint-plugin-react'
import globals from 'globals'
import tseslint from 'typescript-eslint'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

const compat = new FlatCompat({
  baseDirectory: __dirname,
})

// Custom shared rules
const sharedRules = {
  'react/no-unused-prop-types': 'error',
  'react/self-closing-comp': 'error',
  'no-console': ['warn', { allow: ['warn', 'error'] }],
  'prettier/prettier': [
    'error',
    {
      trailingComma: 'all',
      semi: false,
      tabWidth: 2,
      singleQuote: true,
      printWidth: 80,
      endOfLine: 'auto',
      arrowParens: 'always',
    },
  ],
  'import/order': [
    'error',
    {
      groups: ['builtin', 'external', 'internal', 'parent', 'sibling', 'index'],
      'newlines-between': 'always',
      alphabetize: { order: 'asc', caseInsensitive: true },
      pathGroups: [
        { pattern: 'react', group: 'external', position: 'before' },
        { pattern: '@/**', group: 'internal', position: 'after' },
      ],
      pathGroupsExcludedImportTypes: ['react'],
    },
  ],
}

// TypeScript-specific rules
const typescriptRules = {
  '@typescript-eslint/no-unused-vars': 'error',
  '@typescript-eslint/no-floating-promises': 'error',
  '@typescript-eslint/await-thenable': 'error',
  '@typescript-eslint/no-misused-promises': 'error',
  '@typescript-eslint/no-explicit-any': 'warn',
  '@typescript-eslint/explicit-function-return-type': 'off',
  '@typescript-eslint/explicit-module-boundary-types': 'off',
  '@typescript-eslint/no-empty-function': 'warn',
  '@typescript-eslint/no-non-null-assertion': 'warn',
  '@typescript-eslint/typedef': [
    'error',
    {
      variableDeclaration: true,      // enforce type annotation on variables (const, let)
    variableDeclarationIgnoreFunction: false,
    arrayDestructuring: false,
    objectDestructuring: false,
    parameter: false,
    propertyDeclaration: false,
    memberVariableDeclaration: false,
    arrowParameter: false,
    },
  ],
  'import/no-unresolved': 'error',
  'import/named': 'error',
  'import/namespace': 'error',
  'import/default': 'error',
  'import/export': 'error',
}

export default tseslint.config(
  js.configs.recommended,

  {
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,
        ...globals.es2021,
      },
      parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
        ecmaFeatures: {
          jsx: true,
          impliedStrict: true,
        },
      },
    },
  },

  {
    plugins: {
      react,
      prettier: prettierPlugin,
      next: nextEslintPlugin,
      import: eslintImport,
      '@typescript-eslint': tseslint.plugin,
    },
  },

  // Add Next.js configurations here
  ...compat.extends('next', 'next/core-web-vitals', 'next/typescript'),

  {
    files: ['**/*.{js,ts,tsx,mjs,cjs}', '*.config.{js,ts,mjs,cjs}'],

    ignores: [
      'node_modules',
      'public',
      'bun.lock',
      'package-lock.json',
      '.next',
      'dist',
    ],
    rules: {
      ...sharedRules,
      // Add Next.js specific rules from the provided example
      'react/no-unescaped-entities': 'off',
      '@next/next/no-page-custom-font': 'off',
    },
  },

  {
    files: ['**/*.{ts,tsx}'],
    languageOptions: {
      parser: tseslint.parser,
      parserOptions: {
        project: './tsconfig.json',
        tsconfigRootDir: __dirname,
        ecmaVersion: 'latest',
        sourceType: 'module',
        ecmaFeatures: {
          jsx: true,
          impliedStrict: true,
        },
      },
    },
    rules: {
      ...typescriptRules,
    },
  },

  ...tseslint.configs.recommended,
  ...tseslint.configs.recommendedTypeChecked,
  ...tseslint.configs.stylistic,
  ...tseslint.configs.stylisticTypeChecked,

  {
    settings: {
      'import/resolver': {
        typescript: {
          alwaysTryTypes: true,
          project: './tsconfig.json',
        },
      },
    },
  },
)
