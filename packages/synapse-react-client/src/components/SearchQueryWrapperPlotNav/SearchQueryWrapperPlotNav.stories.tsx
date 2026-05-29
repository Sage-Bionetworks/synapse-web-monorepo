import { getEntityBundleHandler } from '@/mocks/msw/handlers/entityHandlers'
import { getHandlersForSearchQuery } from '@/mocks/msw/handlers/searchQueryHandlers'
import { getHandlers } from '@/mocks/msw/handlers'
import {
  mockSearchQueryResultBundle,
  MOCK_SEARCH_INDEX_ENTITY_ID,
} from '@/mocks/mockSearchQueryData'
import { MOCK_REPO_ORIGIN } from '@/utils/functions/getEndpoint'
import { GENERIC_CARD } from '@/utils/SynapseConstants'
import { Meta, StoryObj } from '@storybook/react-vite'
import { fn } from 'storybook/test'
import SearchQueryWrapperPlotNav, {
  SearchQueryWrapperPlotNavProps,
} from './SearchQueryWrapperPlotNav'

const meta: Meta<SearchQueryWrapperPlotNavProps> = {
  title: 'Explore/SearchQueryWrapperPlotNav',
  component: SearchQueryWrapperPlotNav,
  parameters: {
    stack: 'mock',
    msw: {
      handlers: [
        // Entity bundle handler for the underlying table — provides column models
        getEntityBundleHandler(MOCK_REPO_ORIGIN, {
          tableBundle: {
            columnModels: mockSearchQueryResultBundle.columnModels!,
            maxRowsPerPage: 25,
          },
        }),
        ...getHandlers(MOCK_REPO_ORIGIN),
        // Includes the SearchIndex entity GET handler and async search API handlers
        ...getHandlersForSearchQuery(MOCK_REPO_ORIGIN),
      ],
    },
  },
  args: {
    searchIndexId: MOCK_SEARCH_INDEX_ENTITY_ID,
    onQueryResultBundleChange: fn(),
  },
} satisfies Meta<SearchQueryWrapperPlotNavProps>

export default meta
type Story = StoryObj<typeof meta>

export const TableView: Story = {
  args: {
    name: 'Search Results',
    unitDescription: 'result',
    tableConfiguration: {
      columnLinks: [],
    },
    facetsToPlot: ['category', 'collections', 'topic'],
    availableFacets: [
      'category',
      'collections',
      'topic',
      'dataTypes',
      'isOpen',
      'mature',
      'registration',
    ],
  },
}

export const CardView: Story = {
  args: {
    name: 'Search Results',
    cardConfiguration: {
      type: GENERIC_CARD,
      genericCardSchema: {
        type: 'Standard',
        title: 'name',
        subTitle: 'acronym',
        secondaryLabels: ['category', 'collections', 'topic', 'isOpen'],
      },
    },
    facetsToPlot: ['category', 'collections', 'topic'],
    availableFacets: [
      'category',
      'collections',
      'topic',
      'dataTypes',
      'isOpen',
      'mature',
      'registration',
    ],
    defaultShowPlots: true,
  },
}

export const TableWithFacetsOnly: Story = {
  args: {
    name: 'Search Results',
    unitDescription: 'result',
    tableConfiguration: {},
    availableFacets: [
      'category',
      'collections',
      'topic',
      'dataTypes',
      'isOpen',
      'mature',
      'registration',
    ],
    defaultShowPlots: false,
    hideTopLevelControls: false,
    hideQueryCount: false,
  },
}
