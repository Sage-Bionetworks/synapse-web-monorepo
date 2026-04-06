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

export const TableView: Story = {
  args: {
    searchIndexId: 'syn123',
    name: 'Search Results',
    unitDescription: 'file',
    tableConfiguration: {
      columnLinks: [],
    },
    facetsToPlot: ['consortium', 'diagnosis', 'organ'],
    availableFacets: ['consortium', 'diagnosis', 'organ', 'tissue'],
  },
}

export const CardView: Story = {
  args: {
    searchIndexId: 'syn123',
    name: 'Search Results',
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

export const TableWithFacetsOnly: Story = {
  args: {
    searchIndexId: 'syn123',
    name: 'Search Results',
    unitDescription: 'result',
    tableConfiguration: {},
    availableFacets: ['consortium', 'diagnosis', 'organ', 'tissue'],
    defaultShowPlots: false,
    hideTopLevelControls: false,
    hideQueryCount: false,
  },
}
