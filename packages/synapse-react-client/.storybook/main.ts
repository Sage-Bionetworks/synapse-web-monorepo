import { mergeConfig, defineConfig } from 'vite'
import svgr from 'vite-plugin-svgr'

module.exports = {
  stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
  ],
  framework: '@storybook/react',
  core: {
    builder: '@storybook/builder-vite',
  },
  typescript: {
    // These options are from https://storybook.js.org/blog/material-ui-in-storybook/
    check: false,
    checkOptions: {},
    reactDocgen: 'react-docgen-typescript',
    reactDocgenTypescriptOptions: {
      // speeds up storybook build time
      allowSyntheticDefaultImports: false,
      // speeds up storybook build time
      esModuleInterop: false,
      // makes union prop types like variant and size appear as select controls
      shouldExtractLiteralValuesFromEnum: true,
      // makes string and boolean types that can be undefined appear as inputs and switches
      shouldRemoveUndefinedFromOptional: true,
      // Filter out third-party props from node_modules except @mui packages
      propFilter: prop =>
        prop.parent
          ? !/node_modules\/(?!@mui)/.test(prop.parent.fileName)
          : true,
    },
  },
  features: {
    storyStoreV7: true,
  },
  staticDirs: ['../public'],
  async viteFinal(config, { configType }) {
    let base = undefined
    // Fix deployment to github pages
    if (configType === 'PRODUCTION') {
      base = './'
    }

    const customStorybookConfig = defineConfig({
      base,
      plugins: [svgr()],
      resolve: {
        alias: {
          stream: 'stream-browserify',
          buffer: 'buffer/',
          timers: 'timers-browserify',
          path: 'path-browserify',
          fs: 'memfs',
          util: 'util/',
        },
      },
      optimizeDeps: {
        include: [
          '@storybook/react/dist/esm/client/docs/config',
          '@storybook/react/dist/esm/client/preview/config',
          '@storybook/addon-links/preview.js',
          '@storybook/addon-docs/preview.js',
          '@storybook/addon-actions/preview.js',
          '@welldone-software/why-did-you-render',
          '@storybook/addon-backgrounds/preview.js',
          '@storybook/addon-measure/preview.js',
          '@storybook/addon-outline/preview.js',
          '@storybook/addon-interactions/preview.js',
          'buffer/',
          'msw-storybook-addon',
        ],
      },
      build: {
        sourcemap: false,
      },
    })

    // return the customized config

    return mergeConfig(config, customStorybookConfig)
  },
}
