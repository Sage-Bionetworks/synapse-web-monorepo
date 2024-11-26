import react from 'eslint-plugin-react'
import reactHooks from 'eslint-plugin-react-hooks'
import testingLibrary from 'eslint-plugin-testing-library'
import jest from 'eslint-plugin-jest'
import jestDom from 'eslint-plugin-jest-dom'
import barrel from 'eslint-plugin-barrel-files'
import eslint from '@eslint/js'
import tseslint from 'typescript-eslint'
import storybook from 'eslint-plugin-storybook'

export default tseslint.config(
  eslint.configs.recommended,
  ...tseslint.configs.recommendedTypeChecked,
  ...storybook.configs['flat/recommended'],
  {
    plugins: {
      react,
      'react-hooks': reactHooks,
      jest,
      jestDom,
      testingLibrary,
      barrel,
    },
    settings: {
      react: {
        version: '18',
      },
    },
    languageOptions: {
      parserOptions: {
        projectService: true,
      },
      globals: {
        JSX: true,
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
      'no-unused-vars': 'off',
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
      '@typescript-eslint/no-unused-vars': [
        'warn',
        {
          argsIgnorePattern: '^_',
          varsIgnorePattern: '^_',
          caughtErrorsIgnorePattern: '^_',
        },
      ],
      '@typescript-eslint/no-redundant-type-constituents': 'warn',
      'barrel/avoid-barrel-files': 'warn',
    },
  },
  {
    ignores: ['synapse-client/src/generated/'],
  },
)
