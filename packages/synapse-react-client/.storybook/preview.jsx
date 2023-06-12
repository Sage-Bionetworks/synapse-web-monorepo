import React from 'react'
import '../demo/style/DemoStyle.scss'
import whyDidYouRender from '@welldone-software/why-did-you-render'
import { Buffer } from 'buffer'
import { StorybookComponentWrapper } from '../src/components/StorybookComponentWrapper'
import { initialize, mswLoader } from 'msw-storybook-addon'
import { getHandlers } from '../mocks/msw/handlers'
import { MOCK_REPO_ORIGIN } from '../src/utils/functions/getEndpoint'
import isChromatic from 'chromatic/isChromatic'
import { faker } from '@faker-js/faker'

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
  palette: {
    name: 'Theme',
    title: 'Theme',
    description: 'Choose the theme to apply.',
    defaultValue: 'default',
    toolbar: {
      icon: 'paintbrush',
      dynamicTitle: true,
      showName: true,
      items: [
        { value: 'default', title: 'Default (Synapse.org)' },
        { value: 'sageBionetworks', title: 'Sage Bionetworks' },
        { value: 'mtb', title: 'MTB' },
        { value: 'arkPortal', title: 'ARK Portal' },
        { value: 'adKnowledgePortal', title: 'AD Knowledge Portal' },
        { value: 'nfPortal', title: 'NF Portal' },
        { value: 'bsmnPortal', title: 'BSMN Portal' },
        { value: 'psychEncodePortal', title: 'PsychENCODE Portal' },
        { value: 'stopAdPortal', title: 'STOP AD Portal' },
        { value: 'digitalHealthPortal', title: 'Digital Health Portal' },
        { value: 'crcResearcherPortal', title: 'CRC Researcher Portal' },
        {
          value: 'cancerComplexityPortal',
          title: 'Cancer Complexity Portal',
        },
        { value: 'elPortal', title: 'Exceptional Longevity Portal' },
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
  fonts: await Promise.all([document.fonts.load('700 1em Lato')]),
})

export const loaders = [mswLoader]

if (isChromatic && document.fonts) {
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
]

export default {
  parameters,
  decorators,
  loaders,
}
