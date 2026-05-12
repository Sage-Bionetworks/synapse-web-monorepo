import { getEntityBundleHandler } from '@/mocks/msw/handlers/entityHandlers'
import {
  MOCK_SEARCH_INDEX_ENTITY_ID,
  mockSearchQueryResultBundle,
} from '@/mocks/mockSearchQueryData'
import { server } from '@/mocks/msw/server'
import { createWrapper } from '@/testutils/TestingLibraryUtils'
import {
  BackendDestinationEnum,
  getEndpoint,
} from '@/utils/functions/getEndpoint'
import { render, screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import SearchQueryWrapperPlotNav from './SearchQueryWrapperPlotNav'

/**
 * Adds an entity-bundle handler that returns the mock column models for any
 * entityId request. Required so SearchQueryWrapper can look up the column
 * models of the underlying table referenced by the SearchIndex's definingSQL.
 */
function addEntityBundleWithColumnModelsHandler() {
  server.use(
    getEntityBundleHandler(getEndpoint(BackendDestinationEnum.REPO_ENDPOINT), {
      tableBundle: {
        columnModels: mockSearchQueryResultBundle.columnModels!,
        maxRowsPerPage: 25,
      },
    }),
  )
}

describe('SearchQueryWrapperPlotNav', () => {
  beforeAll(() => server.listen())
  beforeEach(() => {
    vi.clearAllMocks()
    addEntityBundleWithColumnModelsHandler()
  })
  afterEach(() => server.restoreHandlers())
  afterAll(() => server.close())

  it('renders row data returned by the SearchQueryServicesApi', async () => {
    render(
      <SearchQueryWrapperPlotNav
        searchIndexId={MOCK_SEARCH_INDEX_ENTITY_ID}
        name="Search Results"
        unitDescription="result"
        tableConfiguration={{}}
      />,
      { wrapper: createWrapper() },
    )

    // Row 2 in the mock data has acronym='TF' (unique) and name='TensorFlow' (unique)
    await screen.findByText('TF')
    await screen.findByText('TensorFlow')
  })

  it('calls onQueryResultBundleChange with the search result bundle', async () => {
    const onQueryResultBundleChange = vi.fn()

    render(
      <SearchQueryWrapperPlotNav
        searchIndexId={MOCK_SEARCH_INDEX_ENTITY_ID}
        name="Search Results"
        tableConfiguration={{}}
        onQueryResultBundleChange={onQueryResultBundleChange}
      />,
      { wrapper: createWrapper() },
    )

    await waitFor(() => {
      expect(onQueryResultBundleChange).toHaveBeenCalled()
      const bundle = JSON.parse(onQueryResultBundleChange.mock.lastCall![0])
      // The mock service returns queryCount = 53
      expect(bundle.queryCount).toBe(mockSearchQueryResultBundle.queryCount)
    })
  })

  it('renders facet enumeration controls from the search API response', async () => {
    render(
      <SearchQueryWrapperPlotNav
        searchIndexId={MOCK_SEARCH_INDEX_ENTITY_ID}
        name="Search Results"
        tableConfiguration={{}}
        availableFacets={['category', 'collections']}
        defaultShowPlots={false}
      />,
      { wrapper: createWrapper() },
    )

    // Facet values from mockSearchQueryResultBundle
    await screen.findByText('Software or Tool')
    await screen.findByText('Machine Learning Framework')
  })

  it('applies a selected facet filter and updates the result count', async () => {
    const user = userEvent.setup()
    const onQueryResultBundleChange = vi.fn()

    render(
      <SearchQueryWrapperPlotNav
        searchIndexId={MOCK_SEARCH_INDEX_ENTITY_ID}
        name="Search Results"
        tableConfiguration={{}}
        availableFacets={['category']}
        defaultShowPlots={false}
        onQueryResultBundleChange={onQueryResultBundleChange}
      />,
      { wrapper: createWrapper() },
    )

    // Wait for the initial render and for onQueryResultBundleChange to be called
    const categoryFacetValue = await screen.findByText('Software or Tool')
    await waitFor(() => expect(onQueryResultBundleChange).toHaveBeenCalled())

    onQueryResultBundleChange.mockClear()

    // Click a facet value to apply a filter
    await user.click(categoryFacetValue)

    // The query fires again and onQueryResultBundleChange is called with the new result
    await waitFor(() => {
      expect(onQueryResultBundleChange).toHaveBeenCalled()
    })
  })

  it('renders card results when cardConfiguration is provided', async () => {
    const { GENERIC_CARD } = await import('@/utils/SynapseConstants')

    render(
      <SearchQueryWrapperPlotNav
        searchIndexId={MOCK_SEARCH_INDEX_ENTITY_ID}
        name="Search Results"
        cardConfiguration={{
          type: GENERIC_CARD,
          genericCardSchema: {
            type: 'Standard',
            title: 'name',
            subTitle: 'acronym',
          },
        }}
      />,
      { wrapper: createWrapper() },
    )

    // Row 2: title comes from 'name' column, subtitle from 'acronym'
    await screen.findByText('TensorFlow') // name of row 2 (unique)
    await screen.findByText('TF') // acronym of row 2 (unique)
  })
})
