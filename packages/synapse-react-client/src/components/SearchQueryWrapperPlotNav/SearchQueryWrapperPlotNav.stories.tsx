import { GENERIC_CARD } from '@/utils/SynapseConstants'
import { Meta, StoryObj } from '@storybook/react-vite'
import SearchQueryWrapperPlotNav, {
  SearchQueryWrapperPlotNavProps,
} from './SearchQueryWrapperPlotNav'

const meta: Meta<SearchQueryWrapperPlotNavProps> = {
  title: 'Explore/SearchQueryWrapperPlotNav',
  component: SearchQueryWrapperPlotNav,
} satisfies Meta<SearchQueryWrapperPlotNavProps>

export default meta
type Story = StoryObj<typeof meta>

/**
 * Table view with faceted filtering.
 * Uses mock data from the SearchQueryServicesApi (not yet functional).
 */
export const TableView: Story = {
  args: {
    name: 'Search Results',
    unitDescription: 'file',
    tableConfiguration: {
      columnLinks: [],
    },
    facetsToPlot: ['consortium', 'diagnosis', 'organ'],
    availableFacets: ['consortium', 'diagnosis', 'organ', 'tissue'],
  },
}

/**
 * Card view with faceted filtering.
 * Uses mock data from the SearchQueryServicesApi (not yet functional).
 */
export const CardView: Story = {
  args: {
    name: 'Search Results',
    unitDescription: 'dataset',
    cardConfiguration: {
      type: GENERIC_CARD,
      genericCardSchema: {
        type: 'Dataset',
        title: 'name',
        description: 'description',
        secondaryLabels: ['consortium', 'diagnosis', 'organ', 'tissue'],
      },
    },
    facetsToPlot: ['consortium', 'diagnosis', 'organ'],
    availableFacets: ['consortium', 'diagnosis', 'organ', 'tissue'],
    defaultShowPlots: true,
  },
}

/**
 * Table view with only facet filter controls (no plots).
 */
export const TableWithFacetsOnly: Story = {
  args: {
    name: 'Search Results',
    unitDescription: 'result',
    tableConfiguration: {},
    availableFacets: ['consortium', 'diagnosis', 'organ', 'tissue'],
    defaultShowPlots: false,
    hideTopLevelControls: false,
    hideDownload: true,
    hideQueryCount: false,
  },
}
