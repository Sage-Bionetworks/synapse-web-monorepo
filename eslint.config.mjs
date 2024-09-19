import { fixupConfigRules, fixupPluginRules } from '@eslint/compat'
import react from 'eslint-plugin-react'
import reactHooks from 'eslint-plugin-react-hooks'
import testingLibrary from 'eslint-plugin-testing-library'
import jest from 'eslint-plugin-jest'
import jestDom from 'eslint-plugin-jest-dom'
import typescriptEslint from '@typescript-eslint/eslint-plugin'
import tsParser from '@typescript-eslint/parser'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import js from '@eslint/js'
import { FlatCompat } from '@eslint/eslintrc'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const compat = new FlatCompat({
  baseDirectory: __dirname,
  recommendedConfig: js.configs.recommended,
  allConfig: js.configs.all,
})

export default [
  ...fixupConfigRules(
    compat.extends(
      'eslint:recommended',
      'plugin:react/recommended',
      'plugin:jest/recommended',
      'plugin:@typescript-eslint/recommended-type-checked',
      'plugin:storybook/recommended',
    ),
  ),
  {
    plugins: {
      react: fixupPluginRules(react),
      'react-hooks': fixupPluginRules(reactHooks),
      'testing-library': testingLibrary,
      jest: fixupPluginRules(jest),
      'jest-dom': jestDom,
      '@typescript-eslint': fixupPluginRules(typescriptEslint),
    },
    languageOptions: {
      globals: {
        JSX: true,
      },
      parser: tsParser,
      ecmaVersion: 5,
      sourceType: 'script',
      parserOptions: {
        project: [
          './tsconfig.json',
          './packages/**/tsconfig.json',
          './apps/**/tsconfig.json',
        ],
      },
    },
    settings: {
      react: {
        version: 'detect',
      },
    },
    rules: {
      'react/prop-types': [0],
      'react/no-unstable-nested-components': 'warn',
      'react-hooks/rules-of-hooks': 'error',
      'react-hooks/exhaustive-deps': [
        'warn',
        {
          additionalHooks: 'useDebouncedEffect',
        },
      ],
      'react/no-object-type-as-default-prop': 'error',
      'no-extra-semi': 'off',
      'prefer-const': 'warn',
      'jest/expect-expect': 'off',
      '@typescript-eslint/restrict-template-expressions': [
        'warn',
        {
          allowBoolean: true,
        },
      ],
      '@typescript-eslint/no-explicit-any': 'warn',
      '@typescript-eslint/unbound-method': 'warn',
      '@typescript-eslint/no-inferrable-types': 'off',
      '@typescript-eslint/ban-ts-comment': 'warn',
      '@typescript-eslint/no-empty-interface': 'warn',
      '@typescript-eslint/no-floating-promises': 'off',
      '@typescript-eslint/no-unsafe-argument': 'warn',
      '@typescript-eslint/no-unsafe-assignment': 'warn',
      '@typescript-eslint/no-unsafe-member-access': 'warn',
      '@typescript-eslint/no-unsafe-call': 'warn',
      '@typescript-eslint/no-unsafe-return': 'warn',
      '@typescript-eslint/no-unnecessary-type-assertion': 'warn',
      '@typescript-eslint/no-non-null-assertion': 'off',
      '@typescript-eslint/no-non-null-asserted-optional-chain': 'off',
      '@typescript-eslint/explicit-module-boundary-types': 'off',
      '@typescript-eslint/no-empty-function': 'off',
      '@typescript-eslint/no-extra-semi': 'warn',
      'no-unused-vars': 'off',
      '@typescript-eslint/no-unused-vars': [
        'warn',
        {
          argsIgnorePattern: '^_',
          varsIgnorePattern: '^_',
          caughtErrorsIgnorePattern: '^_',
        },
      ],
      '@typescript-eslint/no-redundant-type-constituents': 'warn',
    },
  },
  {
    files: ['apps/portals-e2e/*.ts'],
    rules: {
      '@typescript-eslint/no-floating-promises': 'error',
    },
  },
  {
    ignores: ['synapse-client/src/generated/'],
  },
]
