const esModules = [
  '@juggle/resize-observer',
  '@react-hook',
  'lodash-es',
  'nanoid',
  'mui-one-time-password-input',
  'p-limit',
  'yocto-queue',
]

/** @type {import('jest').Config} */
module.exports = {
  projects: [
    {
      displayName: 'synapse-react-client tests',
      testMatch: ['<rootDir>/**/*.test.[jt]s?(x)'],
      testPathIgnorePatterns: ['/node_modules/'],
      testEnvironment: 'jsdom',
      moduleNameMapper: {
        '@/(.*)': '<rootDir>/src/$1',
        '\\.(css|less|scss)$': 'identity-obj-proxy',
        // Mock SVGs, loaded by SVGR https://react-svgr.com/docs/jest/
        '\\.svg$': '<rootDir>/src/testutils/MockSvg.js',
      },
      transformIgnorePatterns: [
        `node_modules/(?!(?:.pnpm/)?(${esModules.join('|')}))`,
      ],
      setupFilesAfterEnv: ['<rootDir>/src/testutils/setupTests.ts'],
      resetMocks: false,
    },
  ],
  reporters: [
    '<rootDir>/src/testutils/LogForFailedTestsOnlyReporter.cjs',
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
