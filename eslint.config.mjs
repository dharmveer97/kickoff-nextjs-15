import js from '@eslint/js';
import react from "eslint-plugin-react";
import eslintImport from "eslint-plugin-import";
import nextEslintPlugin from "@next/eslint-plugin-next";
import { FlatCompat } from "@eslint/eslintrc";
import { dirname } from "path";
import { fileURLToPath } from "url";
import prettierPlugin from 'eslint-plugin-prettier';
import globals from 'globals';
import tseslint from 'typescript-eslint';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
  recommendedConfig: js.configs.recommended,
});

// Define your custom rules here
const customRules = {
  'react/no-unused-prop-types': 'error',
  'react/self-closing-comp': 'error',
  'no-console': ['warn', { allow: ['warn', 'error'] }],
  'prettier/prettier': 'error',
};

// TypeScript-specific rules that catch common issues
const typescriptRules = {
  '@typescript-eslint/no-unused-vars': 'error',
  '@typescript-eslint/no-floating-promises': 'error',
  '@typescript-eslint/await-thenable': 'error',
  '@typescript-eslint/no-misused-promises': 'error',
  '@typescript-eslint/no-explicit-any': 'warn',
  '@typescript-eslint/explicit-function-return-type': 'off',
  '@typescript-eslint/explicit-module-boundary-types': 'off',
  // Required rules from eslint-plugin-import for TypeScript
  'import/no-unresolved': 'off', // TypeScript handles this
  'import/named': 'error',
  'import/namespace': 'error',
  'import/default': 'error',
  'import/export': 'error',
};

const eslintConfig = [
  // Base JS configuration
  js.configs.recommended,

  // Add globals
  {
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,
        ...globals.es2021,
      },
    },
  },

  // Register all plugins
  {
    plugins: {
      react,
      prettier: prettierPlugin,
      next: nextEslintPlugin,
      import: eslintImport,
    },
  },

  // Next.js configuration (includes React rules)
  ...compat.extends('next/core-web-vitals'),

  // Apply custom rules to all files
  {
    files: ['**/*.{js,jsx,ts,tsx}'],
    ignores: [
      "node_modules/**",
      ".next/**",
      "dist/**",
      "out/**",
      "*.config.{js,mjs,cjs}",
      "./sanity.types.ts",
    ],
    rules: {
      ...customRules,
    },
  },

  {
    files: ['**/*.{ts,tsx,js}'],
    languageOptions: {
      parser: tseslint.parser,
      parserOptions: {
        project: './tsconfig.json',
        ecmaVersion: 'latest',
        sourceType: 'module',
        ecmaFeatures: {
          jsx: true,
        },
      },
    },
    rules: {
      ...typescriptRules,
    },
  },

  // Apply TypeScript ESLint recommended configs
  ...tseslint.configs.recommended,
  ...tseslint.configs.recommendedTypeChecked,
  ...tseslint.configs.stylistic,
  ...tseslint.configs.stylisticTypeChecked,
];

export default eslintConfig;