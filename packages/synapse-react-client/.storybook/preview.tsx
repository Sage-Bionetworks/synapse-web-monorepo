import { faker } from '@faker-js/faker'
import { ThemeProvider } from '@mui/material'
import { createTheme } from '@mui/material/styles'
import { withThemeFromJSXProvider } from '@storybook/addon-themes'
import { Preview } from '@storybook/react'
import whyDidYouRender from '@welldone-software/why-did-you-render'
import { Buffer } from 'buffer'
import isChromatic from 'chromatic/isChromatic'
import { initialize, mswLoader } from 'msw-storybook-addon'
import '../src/stories/DemoStyle.scss'
import * as React from 'react'
import { StorybookComponentWrapper } from '../src/components/StorybookComponentWrapper'
import { getHandlers } from '../src/mocks/msw/handlers'
import defaultMuiThemeOptions from '../src/theme/DefaultTheme'
import {
  adKnowledgePortalPalette,
  arkPortalPalette,
  bsmnPortalPalette,
  cancerComplexityPortalPalette,
  crcResearcherPortalPalette,
  digitalHealthPortalPalette,
  elPortalPalette,
  geniePalette,
  mtbPalette,
  nfPortalPalette,
  sageBionetworksPalette,
  stopAdPortalPalette,
  standardsPortalPalette,
} from '../src/theme/palette/Palettes'
import { MOCK_REPO_ORIGIN } from '../src/utils/functions/getEndpoint'

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
    withThemeFromJSXProvider({
      Provider: ThemeProvider,
      themes: {
        ['Synapse']: createTheme(defaultMuiThemeOptions),
        ['Sage Bionetworks']: createTheme(defaultMuiThemeOptions, {
          palette: sageBionetworksPalette,
        }),
        ['MTB']: createTheme(defaultMuiThemeOptions, { palette: mtbPalette }),
        ['ARK Portal']: createTheme(defaultMuiThemeOptions, {
          palette: arkPortalPalette,
        }),
        ['NF Portal']: createTheme(defaultMuiThemeOptions, {
          palette: nfPortalPalette,
        }),
        ['BSMN Portal']: createTheme(defaultMuiThemeOptions, {
          palette: bsmnPortalPalette,
        }),
        ['STOP AD Portal']: createTheme(defaultMuiThemeOptions, {
          palette: stopAdPortalPalette,
        }),
        ['dhealth Portal']: createTheme(defaultMuiThemeOptions, {
          palette: digitalHealthPortalPalette,
        }),
        ['CRC Researcher Portal']: createTheme(defaultMuiThemeOptions, {
          palette: crcResearcherPortalPalette,
        }),
        ['Cancer Complexity Portal']: createTheme(defaultMuiThemeOptions, {
          palette: cancerComplexityPortalPalette,
        }),

        ['AD Knowledge Portal']: createTheme(defaultMuiThemeOptions, {
          palette: adKnowledgePortalPalette,
        }),
        ['EL Portal']: createTheme(defaultMuiThemeOptions, {
          palette: elPortalPalette,
        }),
        ['GENIE Portal']: createTheme(defaultMuiThemeOptions, {
          palette: geniePalette,
        }),
        ['Standards Explorer']: createTheme(defaultMuiThemeOptions, {
          palette: standardsPortalPalette,
        }),
      },
      defaultTheme: 'Synapse',
    }),
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
