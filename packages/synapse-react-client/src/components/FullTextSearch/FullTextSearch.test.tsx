import {
  mockQueryBundleRequest,
  mockQueryResultBundle,
} from '@/mocks/mockFileViewQuery'
import { registerTableQueryResult } from '@/mocks/msw/handlers/tableQueryService'
import { server } from '@/mocks/msw/server'
import { createWrapper } from '@/testutils/TestingLibraryUtils'
import {
  ColumnSingleValueFilterOperator,
  QueryBundleRequest,
  TextMatchesQueryFilter,
} from '@sage-bionetworks/synapse-types'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import {
  QueryContextProvider,
  QueryContextType,
} from '../QueryContext/QueryContext'
import {
  QueryVisualizationContextProvider,
  QueryVisualizationContextType,
} from '../QueryVisualizationWrapper'
import { FullTextSearch } from './FullTextSearch'
import { updateQueryUsingSearchTerm } from './FullTextSearchUtils'
import { FTSConfig } from '../SynapseTable/SearchV2'

const initialQueryRequest = mockQueryBundleRequest

const renderComponent = (
  queryContext: Partial<QueryContextType>,
  queryVisualizationContext: Partial<QueryVisualizationContextType>,
  ftsConfig?: FTSConfig,
) => {
  return render(
    <QueryContextProvider queryContext={queryContext as QueryContextType}>
      <QueryVisualizationContextProvider
        queryVisualizationContext={
          queryVisualizationContext as QueryVisualizationContextType
        }
      >
        <FullTextSearch ftsConfig={ftsConfig} />
      </QueryVisualizationContextProvider>
    </QueryContextProvider>,
    {
      wrapper: createWrapper(),
    },
  )
}

const mockExecuteQueryRequest = vi.fn()
const mockGetLastQueryRequest = vi.fn()

const queryContext: Partial<QueryContextType> = {
  executeQueryRequest: mockExecuteQueryRequest,
  queryMetadataQueryOptions: {
    queryKey: ['queryMetadataQueryOptions'],
    queryFn: vi.fn().mockResolvedValue(mockQueryResultBundle),
  },
}

const queryVisualizationContext: Partial<QueryVisualizationContextType> = {
  showSearchBar: true,
  showFacetFilter: true,
}

describe('FullTextSearch tests', () => {
  beforeAll(() => {
    server.listen()
    registerTableQueryResult(initialQueryRequest.query, mockQueryResultBundle)
  })
  beforeEach(() => {
    vi.clearAllMocks()
    mockGetLastQueryRequest.mockReturnValue({
      query: {},
    })
  })
  afterEach(() => server.restoreHandlers())
  afterAll(() => server.close())

  it('shows/hides the search bar based on prop', () => {
    const component = renderComponent(queryContext, queryVisualizationContext)

    component.container.querySelector('.MuiCollapse-entered')

    renderComponent(queryContext, {
      showSearchBar: false, // call under test
      showFacetFilter: true,
    })

    component.container.querySelector('.MuiCollapse-hidden')
  })

  it('Updates teh query when searching', async () => {
    renderComponent(queryContext, queryVisualizationContext)

    const searchBox = screen.getByRole('textbox')

    const searchQuery = 'NF1'
    await userEvent.type(searchBox, searchQuery + '{enter}')

    expect(mockExecuteQueryRequest).toHaveBeenCalled()
  })

  it('enforces a minimum character requirement', async () => {
    renderComponent(queryContext, queryVisualizationContext)

    const searchBox = screen.getByRole('textbox')

    const searchQuery = 'NF'
    await userEvent.type(searchBox, searchQuery + '{enter}')

    expect(mockExecuteQueryRequest).not.toHaveBeenCalled()
  })

  it('respects a custom minSearchQueryLength from ftsConfig', async () => {
    const ftsConfig: FTSConfig = {
      textMatchesMode: 'NATURAL_LANGUAGE',
      minSearchQueryLength: 1,
    }
    renderComponent(queryContext, queryVisualizationContext, ftsConfig)

    const searchBox = screen.getByRole('textbox')

    // A single character would normally be rejected by the default minimum of 3
    await userEvent.type(searchBox, 'N{enter}')

    expect(mockExecuteQueryRequest).toHaveBeenCalled()
  })

  describe('updateQueryUsingSearchTerm', () => {
    it('adds the appropriate filter when searching', () => {
      const columnModels = mockQueryResultBundle.columnModels
      const searchQuery = 'NF1'
      const initialRequest: QueryBundleRequest = {
        entityId: 'syn123',
        query: {
          sql: 'SELECT * FROM syn123',
        },
        partMask: 255,
        concreteType: 'org.sagebionetworks.repo.model.table.QueryBundleRequest',
      }

      const updatedRequest = updateQueryUsingSearchTerm(
        initialRequest,
        columnModels,
        searchQuery,
      )

      expect(updatedRequest).toEqual({
        ...initialRequest,
        query: {
          ...initialRequest.query,
          additionalFilters: [
            {
              concreteType:
                'org.sagebionetworks.repo.model.table.TextMatchesQueryFilter',
              searchExpression: searchQuery,
              searchMode: 'NATURAL_LANGUAGE',
            },
          ],
        },
      })
    })

    it('adds the appropriate filter when searching in BOOLEAN mode', () => {
      const columnModels = mockQueryResultBundle.columnModels
      const searchQuery = 'nf "drug resistence"'
      const booleanModeDistance = 10
      const ftsConfig: FTSConfig = {
        textMatchesMode: 'BOOLEAN',
        distance: booleanModeDistance,
      }
      const initialRequest: QueryBundleRequest = {
        entityId: 'syn123',
        query: {
          sql: 'SELECT * FROM syn123',
        },
        partMask: 255,
        concreteType: 'org.sagebionetworks.repo.model.table.QueryBundleRequest',
      }

      const updatedRequest = updateQueryUsingSearchTerm(
        initialRequest,
        columnModels,
        searchQuery,
        ftsConfig,
      )

      expect(updatedRequest).toEqual({
        ...initialRequest,
        query: {
          ...initialRequest.query,
          additionalFilters: [
            {
              concreteType:
                'org.sagebionetworks.repo.model.table.TextMatchesQueryFilter',
              // verify double quotes are removed, and boolean query syntax is used (with distance)
              searchExpression: `"nf drug resistence" @10`,
              searchMode: 'BOOLEAN',
            },
          ],
        },
      })
    })
    it('adds the appropriate filter when searching in BOOLEAN mode where the search term word length is larger than distance', () => {
      const columnModels = mockQueryResultBundle.columnModels
      const searchQuery =
        '    a long search-term sentence  that exceeds the     distance set (by the config)       '
      const booleanModeDistance = 3
      const ftsConfig: FTSConfig = {
        textMatchesMode: 'BOOLEAN',
        distance: booleanModeDistance,
      }
      const initialRequest: QueryBundleRequest = {
        entityId: 'syn123',
        query: {
          sql: 'SELECT * FROM syn123',
        },
        partMask: 255,
        concreteType: 'org.sagebionetworks.repo.model.table.QueryBundleRequest',
      }

      const updatedRequest = updateQueryUsingSearchTerm(
        initialRequest,
        columnModels,
        searchQuery,
        ftsConfig,
      )

      expect(updatedRequest).toEqual({
        ...initialRequest,
        query: {
          ...initialRequest.query,
          additionalFilters: [
            {
              concreteType:
                'org.sagebionetworks.repo.model.table.TextMatchesQueryFilter',
              // verify distance of 13 (wordcount as split by non-word characters) is used
              searchExpression: `"${searchQuery}" @13`,
              searchMode: 'BOOLEAN',
            },
          ],
        },
      })
    })
    it('appends a new filter by default (replaceExistingFilter not set)', () => {
      const columnModels = mockQueryResultBundle.columnModels
      const ftsConfig: FTSConfig = { textMatchesMode: 'NATURAL_LANGUAGE' }
      const existingFilter: TextMatchesQueryFilter = {
        concreteType:
          'org.sagebionetworks.repo.model.table.TextMatchesQueryFilter',
        searchExpression: 'old search',
        searchMode: 'NATURAL_LANGUAGE',
      }
      const initialRequest: QueryBundleRequest = {
        entityId: 'syn123',
        query: {
          sql: 'SELECT * FROM syn123',
          additionalFilters: [existingFilter],
        },
        partMask: 255,
        concreteType: 'org.sagebionetworks.repo.model.table.QueryBundleRequest',
      }

      const updatedRequest = updateQueryUsingSearchTerm(
        initialRequest,
        columnModels,
        'new search',
        ftsConfig,
      )

      expect(updatedRequest.query.additionalFilters).toHaveLength(2)
    })

    it('replaces all existing TextMatchesQueryFilters when replaceExistingFilter is true', () => {
      const columnModels = mockQueryResultBundle.columnModels
      const ftsConfig: FTSConfig = {
        textMatchesMode: 'NATURAL_LANGUAGE',
        replaceExistingFilter: true,
      }
      const existingFilters: TextMatchesQueryFilter[] = [
        {
          concreteType:
            'org.sagebionetworks.repo.model.table.TextMatchesQueryFilter',
          searchExpression: 'old search one',
          searchMode: 'NATURAL_LANGUAGE',
        },
        {
          concreteType:
            'org.sagebionetworks.repo.model.table.TextMatchesQueryFilter',
          searchExpression: 'old search two',
          searchMode: 'NATURAL_LANGUAGE',
        },
      ]
      const initialRequest: QueryBundleRequest = {
        entityId: 'syn123',
        query: {
          sql: 'SELECT * FROM syn123',
          additionalFilters: existingFilters,
        },
        partMask: 255,
        concreteType: 'org.sagebionetworks.repo.model.table.QueryBundleRequest',
      }

      const updatedRequest = updateQueryUsingSearchTerm(
        initialRequest,
        columnModels,
        'new search',
        ftsConfig,
      )

      expect(updatedRequest.query.additionalFilters).toEqual([
        {
          concreteType:
            'org.sagebionetworks.repo.model.table.TextMatchesQueryFilter',
          searchExpression: 'new search',
          searchMode: 'NATURAL_LANGUAGE',
        },
      ])
    })

    it('adds the appropriate QueryFilter when searching for Synapse ID', () => {
      const columnModels = mockQueryResultBundle.columnModels
      const searchQuery = 'syn123'
      const initialRequest: QueryBundleRequest = {
        entityId: 'syn123',
        query: {
          sql: 'SELECT * FROM syn123',
        },
        partMask: 255,
        concreteType: 'org.sagebionetworks.repo.model.table.QueryBundleRequest',
      }

      const updatedRequest = updateQueryUsingSearchTerm(
        initialRequest,
        columnModels,
        searchQuery,
      )

      expect(updatedRequest).toEqual({
        ...initialRequest,
        query: {
          ...initialRequest.query,
          additionalFilters: [
            {
              concreteType:
                'org.sagebionetworks.repo.model.table.ColumnSingleValueQueryFilter',
              columnName: 'id',
              operator: ColumnSingleValueFilterOperator.IN,
              values: [searchQuery],
            },
          ],
        },
      })
    })
  })
})
