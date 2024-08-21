import { Meta, StoryObj } from '@storybook/react'
import { SynapseHomepageV2 } from './SynapseHomepageV2'
import { getHandlersForTableQuery } from '../../mocks/msw/handlers/tableQueryHandlers'
import { MOCK_REPO_ORIGIN } from '../../utils/functions/getEndpoint'
import { getFileHandlers } from '../../mocks/msw/handlers/fileHandlers'
import { registerSynapseHomepageMockQueries } from '../../mocks/query/mockHomepageQueryResultData'

const meta = {
  title: 'Synapse/HomePage',
  component: SynapseHomepageV2,
  parameters: {
    chromatic: { viewports: [600, 1200] },
  },
} satisfies Meta
export default meta
type Story = StoryObj<typeof meta>

export const DemoVersion2: Story = {
  args: {
    gotoPlace: (href: string) => {
      window.alert(`SynapseHomepageV2 calling back to change route to ${href}`)
    },
  },
  loaders: [
    () => {
      registerSynapseHomepageMockQueries()
    },
  ],
  parameters: {
    stack: 'production',
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/z2pi8sF6E2he3Q0ncey1S0/Synapse-Homepage-Refresh-(Copy)?node-id=2097-64422&t=lbZKhHAaWWC5JfDB-0',
    },
    msw: {
      handlers: [
        ...getFileHandlers(MOCK_REPO_ORIGIN),
        ...getHandlersForTableQuery(MOCK_REPO_ORIGIN),
      ],
    },
  },
}
