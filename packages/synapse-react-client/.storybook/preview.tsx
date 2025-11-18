import { faker } from '@faker-js/faker'
import { Preview } from '@storybook/react-vite'
import whyDidYouRender from '@welldone-software/why-did-you-render'
import { Buffer } from 'buffer'
import isChromatic from 'chromatic/isChromatic'
import { initialize, mswLoader } from 'msw-storybook-addon'
import * as React from 'react'
import { StorybookComponentWrapper } from '../src/components/StorybookComponentWrapper'
import { getHandlers } from '../src/mocks/msw/handlers'
import '../src/stories/DemoStyle.scss'
import { MOCK_REPO_ORIGIN } from '../src/utils/functions/getEndpoint'
import storybookThemeDecorator from '../src/react-ui/utils/StorybookThemeDecorator'

// KaTeX CSS is not included in the SRC style bundle since it includes many large font files.
import 'katex/dist/katex.css'

faker.seed(12345)

globalThis.Buffer = Buffer
globalThis.process = {
  browser: true,
  env: {
    NODE_ENV: 'development',
    NODE_DEBUG: undefined,
  },
}

if (process.env.NODE_ENV === 'development') {
  // whyDidYouRender is a dev/debugging tool that logs to the console with information about why a component rendered
  // It won't track most components by default. Follow these instructions to track a component
  // https://github.com/welldone-software/why-did-you-render#tracking-components
  whyDidYouRender(React, {
    trackAllPureComponents: true,
  })
}

// Initialize MSW
initialize({
  onUnhandledRequest: 'bypass',
  serviceWorker: {
    url: `${
      location.hostname.endsWith('.github.io') ? '/synapse-web-monorepo' : ''
    }/mockServiceWorker.js`,
  },
})

const fontLoader = async () => ({
  fonts: await Promise.all([document.fonts.load('700 1em "DM Sans"')]),
})

export const loaders = [mswLoader]

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
    msw: {
      handlers: [
        // Only return mocked data when making requests to our mock stack
        ...getHandlers(MOCK_REPO_ORIGIN),
      ],
    },
  },
  decorators: [
    (Story, context) => {
      return (
        <StorybookComponentWrapper storybookContext={context}>
          <Story />
        </StorybookComponentWrapper>
      )
    },
    // Adds global styles and theme switching support.
    storybookThemeDecorator,
  ],
  loaders,
  globalTypes: {
    showReactQueryDevtools: {
      name: 'React Query Devtools',
      toolbar: {
        icon: 'wrench',
        showName: true,
        items: [
          { value: false, title: 'Hide React Query Devtools' },
          { value: true, title: 'Show React Query Devtools' },
        ],
      },
    },
    stack: {
      name: 'Stack',
      title: 'Stack Changer',
      description:
        'Choose the stack that Synapse should point to. You may need to re-authenticate after changing stacks.',
      toolbar: {
        icon: 'database',
        dynamicTitle: true,
        showName: true,
        items: [
          { value: null, title: 'default (usually production)' },
          { value: 'production', title: 'Production' },
          { value: 'staging', title: 'Staging' },
          { value: 'development', title: 'Development' },
          { value: 'mock', title: 'Mocked Data' },
          { value: 'local', title: 'Local Instance of Synapse' },
        ],
      },
    },
  },
  initialGlobals: {
    showReactQueryDevtools: false,
    stack: null,
  },
}

export default preview
