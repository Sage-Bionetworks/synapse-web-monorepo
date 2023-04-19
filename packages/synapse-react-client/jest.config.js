const esModules = [
  '@juggle/resize-observer',
  '@react-hook',
  'lodash-es',
  'nanoid',
]

/** @type {import('jest').Config} */
module.exports = {
  testMatch: ['<rootDir>/test/**/*.test.[jt]s?(x)'],
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
  reporters: [
    '<rootDir>/test/logForFailedTestsOnlyReporter.ts',
    'summary',
    'github-actions',
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
  resetMocks: false,
}
