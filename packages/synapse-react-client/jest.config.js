const esModules = [
  '@juggle/resize-observer',
  '@react-hook',
  'lodash-es',
  'nanoid',
].join('|')

/** @type {import('jest').Config} */
module.exports = {
  testEnvironment: 'jsdom',
  moduleNameMapper: {
    '\\.(css|less|scss)$': 'identity-obj-proxy',
    // Mock SVGs, loaded by SVGR https://react-svgr.com/docs/jest/
    '\\.svg$': '<rootDir>/src/mocks/svg.js',
  },
  transformIgnorePatterns: [`/node_modules/(?!${esModules})`],
  setupFilesAfterEnv: ['<rootDir>/src/setupTests.js'],
  resetMocks: false,
}
