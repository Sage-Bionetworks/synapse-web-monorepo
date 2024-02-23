import React from 'react'
import '../demo/style/DemoStyle.scss'
import whyDidYouRender from '@welldone-software/why-did-you-render'
import { Buffer } from 'buffer'
import { StorybookComponentWrapper } from '../src/components/StorybookComponentWrapper'
import { initialize, mswLoader } from 'msw-storybook-addon'
import { getHandlers } from '../src/mocks/msw/handlers'
import { MOCK_REPO_ORIGIN } from '../src/utils/functions/getEndpoint'
import isChromatic from 'chromatic/isChromatic'
import { faker } from '@faker-js/faker'
import { ThemeProvider } from '@mui/material'
import { withThemeFromJSXProvider } from '@storybook/addon-themes'
import {
  adKnowledgePortalPalette,
  arkPortalPalette,
  bsmnPortalPalette,
  cancerComplexityPortalPalette,
  crcResearcherPortalPalette,
  digitalHealthPortalPalette,
  elPortalPalette,
  mtbPalette,
  nfPortalPalette,
  psychEncodePortalPalette,
  sageBionetworksPalette,
  stopAdPortalPalette,
} from '../src/theme/palette/Palettes'
import { createTheme } from '@mui/material/styles'
import defaultMuiThemeOptions from '../src/theme/DefaultTheme'

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

export const parameters = {
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
}

export const globalTypes = {
  showReactQueryDevtools: {
    name: 'React Query Devtools',
    defaultValue: false,
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
    defaultValue: null,
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
      ],
    },
  },
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

export const decorators = [
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
      ['PsychENCODE Portal']: createTheme(defaultMuiThemeOptions, {
        palette: psychEncodePortalPalette,
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
    },
    defaultTheme: 'Synapse',
  }),
]

export default {
  parameters,
  decorators,
  loaders,
}
