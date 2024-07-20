import { Meta, StoryObj } from '@storybook/react'
import {
  featuredDatasetsTable,
  generalStatsMetricsTable,
  past30DaysDownloadMetricsTable,
  searchAutocompleteTable,
  SynapseHomepageV2,
  synapseInActionTable,
} from './SynapseHomepageV2'
import { getHandlersForTableQuery } from '../../mocks/msw/handlers/tableQueryHandlers'
import {
  mockHomepageFeaturedDatasetsQueryResultBundle,
  mockHomepageGeneralStatsQueryResultBundle,
  mockHomepageSearchAutocompleteQueryResultBundle,
  mockHomepageSynapseInActionQueryResultBundle,
  mockHomepageTrendingQueryResultBundle,
} from '../../mocks/query/mockHomepageQueryResultData'
import { MOCK_REPO_ORIGIN } from '../../utils/functions/getEndpoint'
import { getFileHandlers } from '../../mocks/msw/handlers/fileHandlers'

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
  parameters: {
    stack: 'production',
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/z2pi8sF6E2he3Q0ncey1S0/Synapse-Homepage-Refresh-(Copy)?node-id=2097-64422&t=lbZKhHAaWWC5JfDB-0',
    },
    msw: {
      handlers: [
        ...getFileHandlers(MOCK_REPO_ORIGIN),
        ...getHandlersForTableQuery(
          mockHomepageTrendingQueryResultBundle,
          MOCK_REPO_ORIGIN,
          past30DaysDownloadMetricsTable,
        ),
        ...getHandlersForTableQuery(
          mockHomepageGeneralStatsQueryResultBundle,
          MOCK_REPO_ORIGIN,
          generalStatsMetricsTable,
        ),
        ...getHandlersForTableQuery(
          mockHomepageSynapseInActionQueryResultBundle,
          MOCK_REPO_ORIGIN,
          synapseInActionTable,
        ),
        ...getHandlersForTableQuery(
          mockHomepageFeaturedDatasetsQueryResultBundle,
          MOCK_REPO_ORIGIN,
          featuredDatasetsTable,
        ),
        ...getHandlersForTableQuery(
          mockHomepageSearchAutocompleteQueryResultBundle,
          MOCK_REPO_ORIGIN,
          searchAutocompleteTable,
        ),
      ],
    },
  },
}
