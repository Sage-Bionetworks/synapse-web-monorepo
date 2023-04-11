const esModules = [
  'synapse-react-client',
  '@juggle/resize-observer',
  '@react-hook',
  'lodash-es',
  'nanoid',
]

/** @type {import('jest').Config} */
module.exports = {
  testMatch: ['<rootDir>/src/test/**/*.test.[jt]s?(x)'],
  collectCoverage: false,
  testEnvironment: 'jsdom',
  moduleNameMapper: {
    '\\.(css|less|scss)$': 'identity-obj-proxy',
    '\\.svg$': '<rootDir>/src/mocks/svg.js',
  },
  transformIgnorePatterns: [
    `node_modules/(?!(?:.pnpm/)?(${esModules.join('|')}))`,
  ],
  setupFilesAfterEnv: ['<rootDir>/src/test/setupTests.ts'],
  resetMocks: false,
}
