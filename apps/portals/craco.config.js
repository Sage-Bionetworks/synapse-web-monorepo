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

  // babel: {
  //   presets: ['@babel/preset-react'],
  //   plugins: [
  //     [
  //       '@babel/plugin-transform-react-jsx',
  //       {
  //         runtime: 'classic', // defaults to classic
  //       },
  //     ],
  //   ],
  // },
}
