import type { StorybookConfig } from '@storybook/react-vite'
import { defineConfig, mergeConfig } from 'vite'

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
      strictMode: true,
      builder: {
        viteConfigPath: './.storybook/storybook-vite.config.mts',
      },
    },
  },

  typescript: {
    // These options are from https://storybook.js.org/recipes/@mui/material
    reactDocgen: 'react-docgen-typescript',
    reactDocgenTypescriptOptions: {
      // Speeds up Storybook build time
      compilerOptions: {
        allowSyntheticDefaultImports: false,
        esModuleInterop: false,
      },
      // Makes union prop types like variant and size appear as select controls
      shouldExtractLiteralValuesFromEnum: true,
      // Makes string and boolean types that can be undefined appear as inputs and switches
      shouldRemoveUndefinedFromOptional: true,
      // Filter out third-party props from node_modules except @mui packages
      propFilter: prop =>
        prop.parent
          ? !/node_modules\/(?!@mui)/.test(prop.parent.fileName)
          : true,
    },
  },

  staticDirs: ['../public'],

  async viteFinal(config, { configType }) {
    let base,
      plugins = undefined
    // Fix deployment to github pages
    if (configType === 'PRODUCTION') {
      base = './'
    }
    const customStorybookConfig = defineConfig({
      base,
      plugins,
    })

    // return the customized config

    return mergeConfig(config, customStorybookConfig)
  },
}

export default config
