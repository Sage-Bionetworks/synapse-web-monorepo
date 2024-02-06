module.exports = {
  root: true,
  parser: "@typescript-eslint/parser",
  plugins: [
    "react",
    "react-hooks",
    "testing-library",
    "jest",
    "jest-dom",
    "@typescript-eslint",
  ],
    ignorePatterns: ["apps/portals/src/tests/*"],
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:jest/recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:@typescript-eslint/recommended-requiring-type-checking",
    "plugin:storybook/recommended",
  ],
  parserOptions: {
    tsconfigRootDir: __dirname,
    project: [
      "./tsconfig.json",
      "./packages/**/tsconfig.json",
      "./apps/**/tsconfig.json",
    ],
  },
  rules: {
    "react/prop-types": [0],
    "react/no-unstable-nested-components": "warn",
    "react-hooks/rules-of-hooks": "error",
    "react-hooks/exhaustive-deps": [
      "warn",
      {
        additionalHooks: "useDebouncedEffect",
      },
    ],
    "react/no-object-type-as-default-prop": "error",
    "no-extra-semi": "off",
    "prefer-const": "warn",
    "jest/expect-expect": "off",
    "@typescript-eslint/restrict-template-expressions": [
      "warn",
      { allowBoolean: true },
    ],
    "@typescript-eslint/unbound-method": "warn",
    "@typescript-eslint/no-inferrable-types": "off",
    "@typescript-eslint/ban-ts-comment": "warn",
    "@typescript-eslint/no-empty-interface": "warn",
    "@typescript-eslint/no-floating-promises": "off",
    "@typescript-eslint/no-unsafe-argument": "warn",
    "@typescript-eslint/no-unsafe-assignment": "warn",
    "@typescript-eslint/no-unsafe-member-access": "warn",
    "@typescript-eslint/no-unsafe-call": "warn",
    "@typescript-eslint/no-unsafe-return": "warn",
    "@typescript-eslint/no-unnecessary-type-assertion": "warn",
    "@typescript-eslint/no-non-null-assertion": "off",
    "@typescript-eslint/no-non-null-asserted-optional-chain": "off",
    "@typescript-eslint/explicit-module-boundary-types": "off",
    "@typescript-eslint/no-empty-function": "off",
    "@typescript-eslint/no-extra-semi": "warn",
  },
  overrides: [
    {
      files: ["apps/portals/e2e/*.ts"],
      rules: {
        "@typescript-eslint/no-floating-promises": "error",
      },
    },
  ],
  settings: {
    react: {
      version: "detect",
    },
  },
  globals: {
    JSX: true,
  },
};
