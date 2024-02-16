import { mergeConfig, defineConfig } from 'vite'
import { StorybookConfig } from '@storybook/react-vite'
import turbosnap from 'vite-plugin-turbosnap'

const config: StorybookConfig = {
  stories: ['../**/*.stories.mdx', '../**/*.stories.@(js|jsx|ts|tsx)'],

  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
    {
      name: '@storybook/addon-themes',
      options: {},
    },
    '@storybook/addon-designs',
  ],

  framework: {
    name: '@storybook/react-vite',
    options: {
      strictMode: false,
      builder: {
        viteConfigPath: './.storybook/storybook-vite.config.ts',
      },
    },
  },

  typescript: {
    // These options are from https://storybook.js.org/blog/material-ui-in-storybook/
    check: false,
    checkOptions: {},
    reactDocgen: 'react-docgen-typescript',
    reactDocgenTypescriptOptions: {
      // @ts-ignore - speeds up storybook build time
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
    let base,
      plugins = undefined
    // Fix deployment to github pages
    if (configType === 'PRODUCTION') {
      base = './'
      plugins = [turbosnap({ rootDir: config.root ?? process.cwd() })]
    }
    const customStorybookConfig = defineConfig({
      base,
      plugins,
    })

    // return the customized config

    return mergeConfig(config, customStorybookConfig)
  },

  docs: {
    autodocs: false,
  },
}
module.exports = config
