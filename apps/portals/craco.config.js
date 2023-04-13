const { ProvidePlugin } = require('webpack')

module.exports = {
  webpack: {
    configure: (webpackConfig) => {
      const scopePluginIndex = webpackConfig.resolve.plugins.findIndex(
        ({ constructor }) =>
          constructor && constructor.name === 'ModuleScopePlugin',
      )

      webpackConfig.resolve.plugins.splice(scopePluginIndex, 1)

      webpackConfig.resolve.fallback = {
        ...webpackConfig.resolve.fallback,
        path: require.resolve('path-browserify'),
        timers: require.resolve('timers-browserify'),
        fs: require.resolve('memfs'),
        https: require.resolve('https-browserify'),
        stream: require.resolve('stream-browserify'),
        http: require.resolve('stream-http'),
        events: require.resolve('events'),
      }
      webpackConfig.ignoreWarnings = [/Failed to parse source map/]
      return webpackConfig
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
  eslint: {
    enable: false,
  },
  jest: {
    configure: {
      silent: true,
      testEnvironment: 'jsdom',
      setupFilesAfterEnv: './src/tests/setupTests.ts',
      moduleNameMapper: {
        '\\.(css|less)$': 'identity-obj-proxy',
      },
      reporters: [
        'default',
        [
          './node_modules/jest-html-reporter',
          {
            pageTitle: 'portals Test Report',
            outputPath: './coverage/test-report.html',
            includeFailureMsg: true,
            includeSuiteFailure: true,
          },
        ],
      ],
    },
  },
}
