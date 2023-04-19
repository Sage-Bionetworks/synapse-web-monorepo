import { addons } from '@storybook/manager-api'
import { create } from '@storybook/theming/create'
import palettes from '../src/lib/utils/theme/palette/Palettes'

addons.setConfig({
  theme: create({
    base: 'light',
    fontBase: '"Lato", sans-serif',
    brandImage:
      'https://s3.amazonaws.com/static.synapse.org/images/synapse-logo-blue.svg',
  }),

  colorPrimary: palettes.primary[500],
  colorSecondary: palettes.secondary[500],
})
