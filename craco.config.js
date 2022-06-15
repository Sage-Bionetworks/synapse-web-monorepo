const { ProvidePlugin } = require('webpack')

module.exports = {
  webpack: {
    configure: {
      resolve: {
      fallback: {
          path: require.resolve('path-browserify'),
          timers: require.resolve('timers-browserify'),
          fs: require.resolve('browserify-fs'),
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
  eslint: {
    enable: false,
  },
}
