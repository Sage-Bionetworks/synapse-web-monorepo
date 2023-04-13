const { ProvidePlugin } = require('webpack')

const esModules = ['synapse-react-client', 'lodash-es']

module.exports = {
  webpack: {
    configure: {
      resolve: {
        fallback: {
          path: require.resolve('path-browserify'),
          timers: require.resolve('timers-browserify'),
          fs: require.resolve('memfs'),
          https: require.resolve('https-browserify'),
          stream: require.resolve('stream-browserify'),
          http: require.resolve('stream-http'),
          events: require.resolve('events'),
        },
      },
      ignoreWarnings: [/Failed to parse source map/],
    },
    plugins: {
      add: [
        new ProvidePlugin({
          process: 'process/browser',
          Buffer: ['buffer', 'Buffer'],
        }),
      ],
    },
  },
  jest: {
    configure: {
      silent: true,
      testEnvironment: 'jsdom',
      setupFilesAfterEnv: './src/setupTests.ts',
      moduleNameMapper: {
        '\\.(css|less)$': 'identity-obj-proxy',
      },
      reporters: [
        'default',
        [
          './node_modules/jest-html-reporter',
          {
            pageTitle: 'synapse-oauth-signin Test Report',
            outputPath: './coverage/test-report.html',
            includeFailureMsg: true,
            includeSuiteFailure: true,
          },
        ],
      ],
    },
  },
  eslint: {
    enable: false,
  },
}
