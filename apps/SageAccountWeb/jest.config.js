const esModules = [
  'synapse-react-client',
  '@juggle/resize-observer',
  '@react-hook',
  'lodash-es',
  'nanoid',
]

/** @type {import('jest').Config} */
module.exports = {
  silent: true,
  reporters: [
    'default',
    [
      './node_modules/jest-html-reporter',
      {
        pageTitle: 'SageAccountWeb Test Report',
        outputPath: './coverage/test-report.html',
        includeFailureMsg: true,
        includeSuiteFailure: true,
      },
    ],
  ],
  testMatch: ['<rootDir>/src/tests/**/*.test.[jt]s?(x)'],
  collectCoverage: false,
  testEnvironment: 'jsdom',
  moduleNameMapper: {
    '\\.(css|less|scss)$': 'identity-obj-proxy',
    '\\.svg$': '<rootDir>/src/mocks/svg.js',
    '\\.png$': '<rootDir>/src/mocks/png.js',
  },
  transformIgnorePatterns: [
    `node_modules/(?!(?:.pnpm/)?(${esModules.join('|')}))`,
  ],
  setupFilesAfterEnv: ['<rootDir>/src/tests/setupTests.ts'],
  resetMocks: false,
}
