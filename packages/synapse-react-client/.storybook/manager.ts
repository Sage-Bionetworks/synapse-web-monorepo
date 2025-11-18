import { addons } from 'storybook/manager-api'
import { create } from 'storybook/theming/create'

addons.setConfig({
  theme: create({
    base: 'light',
    fontBase: '"DM Sans", sans-serif',
    brandImage:
      'https://s3.amazonaws.com/static.synapse.org/images/synapse-logo-blue.svg',
  }),
})
