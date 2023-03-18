const esModules = [
  'synapse-react-client',
  '@juggle/resize-observer',
  '@react-hook',
  'lodash-es',
  'nanoid',
]

/** @type {import('jest').Config} */
module.exports = {
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
