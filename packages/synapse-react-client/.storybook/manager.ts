import { addons } from '@storybook/manager-api'
import { create } from '@storybook/theming/create'
import { palette } from '../src/theme/palette/Palettes'

addons.setConfig({
  theme: create({
    base: 'light',
    fontBase: '"Lato", sans-serif',
    brandImage:
      'https://s3.amazonaws.com/static.synapse.org/images/synapse-logo-blue.svg',
  }),
  colorPrimary:
    palette.primary && 'main' in palette.primary
      ? palette.primary.main
      : undefined,
  colorSecondary:
    palette.secondary && 'main' in palette.secondary
      ? palette.secondary.main
      : undefined,
})
