const esModules = [
  '@juggle/resize-observer',
  '@react-hook',
  'lodash-es',
  'nanoid',
]

/** @type {import('jest').Config} */
const shared = {
  testEnvironment: 'jsdom',
  moduleNameMapper: {
    '\\.(css|less|scss)$': 'identity-obj-proxy',
    // Mock SVGs, loaded by SVGR https://react-svgr.com/docs/jest/
    '\\.svg$': '<rootDir>/mocks/svg.js',
  },
  transformIgnorePatterns: [
    `node_modules/(?!(?:.pnpm/)?(${esModules.join('|')}))`,
  ],
  setupFilesAfterEnv: ['<rootDir>/test/setupTests.ts'],
  resetMocks: false,
}

/** @type {import('jest').Config} */
module.exports = {
  projects: [
    {
      displayName: 'synapse-react-client unit tests',
      testMatch: ['<rootDir>/test/**/*.test.[jt]s?(x)'],
      testPathIgnorePatterns: ['/node_modules/', 'integration.test\\.'],
      ...shared,
    },
    {
      displayName: 'synapse-react-client integration tests',
      testMatch: ['<rootDir>/test/**/*.integration.test.[jt]s?(x)'],
      // Use jest-serial-runner since these integration tests use a shared mock server
      runner: 'jest-serial-runner',
      ...shared,
    },
  ],
  reporters: [
    '<rootDir>/test/testutils/LogForFailedTestsOnlyReporter.ts',
    'summary',
    [
      './node_modules/jest-html-reporter',
      {
        pageTitle: 'synapse-react-client Test Report',
        outputPath: './coverage/test-report.html',
        includeFailureMsg: true,
        includeSuiteFailure: true,
      },
    ],
  ],
  coverageReporters: ['text-summary', 'html'],
}
