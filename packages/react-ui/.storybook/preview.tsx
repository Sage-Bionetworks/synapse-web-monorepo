import { Loader, Preview } from '@storybook/react'
import isChromatic from 'chromatic/isChromatic'
import storybookThemeDecorator from '../src/utils/StorybookThemeDecorator'

const fontLoader = async () => ({
  fonts: await Promise.all([document.fonts.load('700 1em "DM Sans"')]),
})

export const loaders: Loader[] = []

if (isChromatic() && document.fonts) {
  loaders.push(fontLoader)
}

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      expanded: true,
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
  decorators: [storybookThemeDecorator],
  loaders,
}

export default preview
