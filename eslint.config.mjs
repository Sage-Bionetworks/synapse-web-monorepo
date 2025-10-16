import react from 'eslint-plugin-react'
import reactHooks from 'eslint-plugin-react-hooks'
import testingLibrary from 'eslint-plugin-testing-library'
import vitest from '@vitest/eslint-plugin'
import jestDom from 'eslint-plugin-jest-dom'
import barrel from 'eslint-plugin-barrel-files'
import eslint from '@eslint/js'
import tseslint from 'typescript-eslint'
import storybook from 'eslint-plugin-storybook'
import { readdirSync } from 'fs'

const getDirectories = source =>
  readdirSync(source, { withFileTypes: true })
    .filter(dirent => dirent.isDirectory())
    .map(dirent => dirent.name)

// TODO: Use Nx API to retrieve project directories
const appDirs = getDirectories(`${import.meta.dirname}/apps`).map(
  app => `apps/${app}`,
)
const portalDirs = getDirectories(`${import.meta.dirname}/apps/portals`).map(
  app => `apps/portals/${app}`,
)
const packageDirs = getDirectories(`${import.meta.dirname}/packages`).map(
  pkg => `packages/${pkg}`,
)
const allProjectDirs = [...appDirs, ...portalDirs, ...packageDirs]

export default tseslint.config(
  eslint.configs.recommended,
  ...tseslint.configs.recommendedTypeChecked,
  ...storybook.configs['flat/recommended'],
  {
    plugins: {
      react,
      'react-hooks': reactHooks,
      vitest,
      testingLibrary,
      jestDom,
      barrel,
    },
    settings: {
      react: {
        version: '18',
      },
    },
    languageOptions: {
      parserOptions: {
        projectService: {
          // We must enumerate each file that we want to lint that is not explicitly captured by a project-specific tsconfig
          // allowDefaultProject does not allow `**` globs.
          // https://github.com/typescript-eslint/typescript-eslint/issues/9739
          allowDefaultProject: [
            ...allProjectDirs.map(dir => `${dir}/*.ts`),
            `packages/synapse-react-client/.storybook/*.ts`,
            `packages/synapse-react-client/.storybook/*.tsx`,
            'scripts/*.js',
          ],
        },
        project: [
          './tsconfig.json',
          './packages/**/*/tsconfig.json',
          './apps/**/*/tsconfig.json',
        ],
        tsconfigRootDir: import.meta.dirname,
      },
      globals: {
        JSX: true,
      },
    },
    rules: {
      ...vitest.configs.recommended.rules,
      'react/prop-types': [0],
      'react/no-unstable-nested-components': 'error',
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
      'vitest/expect-expect': 'off',
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
    files: ['scripts/*.js'],
    languageOptions: {
      parserOptions: {
        project: null,
      },
      globals: {
        console: 'readonly',
        process: 'readonly',
      },
    },
    rules: {
      '@typescript-eslint/no-require-imports': 'off',
      '@typescript-eslint/no-unsafe-assignment': 'off',
      '@typescript-eslint/no-unsafe-call': 'off',
      '@typescript-eslint/no-unsafe-member-access': 'off',
      '@typescript-eslint/no-unsafe-return': 'off',
      'no-undef': 'off',
    },
  },
  {
    ignores: [
      '.nx/',
      '**/generated/',
      '**/build/',
      '**/dist/',
      '**/playwright-report/',
    ],
  },
)
