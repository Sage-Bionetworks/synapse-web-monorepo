import React from 'react'
import { MOCK_TABLE_ENTITY_ID } from '@/mocks/entity/mockTableEntity'
import mockQueryResponseData from '@/mocks/mockQueryResponseData'
import { registerTableQueryResult } from '@/mocks/msw/handlers/tableQueryService'
import { server } from '@/mocks/msw/server'
import { createWrapper } from '@/testutils/TestingLibraryUtils'
import { DEFAULT_PAGE_SIZE } from '@/utils/SynapseConstants'
import { QueryBundleRequest } from '@sage-bionetworks/synapse-types'
import { render, screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { QueryVisualizationWrapper } from '../../QueryVisualizationWrapper'
import QueryWrapper from '../../QueryWrapper'
import FacetFilterControls, {
  FacetFilterControlsProps,
} from './FacetFilterControls'
import { getDefaultShownFacetFilters } from './FacetFilterUtils'

const MockFacetFilter = (props: { testid: string }): React.ReactNode => {
  return <div data-testid={props.testid}></div>
}

vi.mock(
  '../../../../src/components/widgets/query-filter/EnumFacetFilter/EnumFacetFilter',
  () => ({
    EnumFacetFilter: vi.fn(props => (
      <MockFacetFilter {...props} testid="EnumFacetFilter" />
    )),
  }),
)

vi.mock(
  '../../../../src/components/widgets/query-filter/RangeFacetFilter',
  () => ({
    RangeFacetFilter: vi.fn(props => (
      <MockFacetFilter {...props} testid="RangeFacetFilter" />
    )),
  }),
)

const queryRequest: QueryBundleRequest = {
  partMask: 255,
  concreteType: 'org.sagebionetworks.repo.model.table.QueryBundleRequest',
  entityId: MOCK_TABLE_ENTITY_ID,
  query: {
    sql: `SELECT * FROM ${MOCK_TABLE_ENTITY_ID}`,
    selectedFacets: [
      {
        concreteType:
          'org.sagebionetworks.repo.model.table.FacetColumnValuesRequest',
        columnName: 'Make',
        facetValues: ['Honda', 'Chevy'],
      },
      {
        concreteType:
          'org.sagebionetworks.repo.model.table.FacetColumnRangeRequest',
        columnName: 'Year',
        min: '1997',
        max: '1999',
      },
    ],
    limit: DEFAULT_PAGE_SIZE,
    offset: 0,
  },
}

function init(overrides?: FacetFilterControlsProps) {
  return render(
    <QueryWrapper initQueryRequest={queryRequest}>
      <QueryVisualizationWrapper>
        <FacetFilterControls {...overrides} />
      </QueryVisualizationWrapper>
    </QueryWrapper>,
    {
      wrapper: createWrapper(),
    },
  )
}

describe('FacetFilterControls tests', () => {
  beforeAll(() => server.listen())
  beforeEach(() => {
    vi.clearAllMocks()
    registerTableQueryResult(queryRequest.query, mockQueryResponseData)
  })
  afterEach(() => server.restoreHandlers())
  afterAll(() => server.close())

  it('should only show three facets', async () => {
    init()
    const facetFilters = await screen.findAllByTestId(/(Enum|Range)FacetFilter/)
    expect(facetFilters).toHaveLength(3)
  })

  it('should respect availableFacets', async () => {
    // set availableFacets to make the component only show a filter for Year (a range type facet) and not Make (a values/enum type)
    init({ availableFacets: ['Year'] })
    await waitFor(() => {
      expect(screen.queryByTestId('EnumFacetFilter')).not.toBeInTheDocument()
      expect(screen.queryByTestId('RangeFacetFilter')).toBeInTheDocument()
    })
    // expects the facet chips to only show facets within facetToFilter
    expect(
      await screen.findByRole('button', { name: 'Year' }),
    ).toBeInTheDocument()
    expect(await screen.findAllByRole('button')).toHaveLength(1)
  })

  describe('handling child component callbacks', () => {
    it('renders all available facet chips', async () => {
      init()
      expect(await screen.findAllByRole('button')).toHaveLength(
        mockQueryResponseData.facets.length,
      )
    })

    it('facet chip changes color onClick', async () => {
      init()
      const facetChip = await screen.findByRole('button', {
        name: mockQueryResponseData.facets[0].columnName,
      })
      expect(facetChip.className).toEqual('Chip Checked')
      await userEvent.click(facetChip)
      expect(facetChip.className).toEqual('Chip ')
    })
  })

  describe('getDefaultShownFacetFilters', () => {
    const allFacetColumnNames = mockQueryResponseData.facets.map(
      f => f.columnName,
    )
    it('return the first three facet column names', () => {
      expect(getDefaultShownFacetFilters(allFacetColumnNames)).toEqual(
        new Set(['Year', 'Make', 'Model']),
      )
    })
    it('returns the first three facet column names plus any selected facets', () => {
      expect(
        getDefaultShownFacetFilters(allFacetColumnNames, [
          {
            concreteType:
              'org.sagebionetworks.repo.model.table.FacetColumnValuesRequest',
            columnName: 'Lemon',
            facetValues: ['true'],
          },
        ]),
      ).toEqual(new Set(['Year', 'Make', 'Model', 'Lemon']))
    })
    it('handles 0 facets', () => {
      expect(getDefaultShownFacetFilters([])).toEqual(new Set())
    })
    it('handles case where one of first three facets is selected', () => {
      expect(
        getDefaultShownFacetFilters(allFacetColumnNames, [
          {
            concreteType:
              'org.sagebionetworks.repo.model.table.FacetColumnValuesRequest',
            columnName: 'Make',
            facetValues: ['Honda', 'Ford'],
          },
        ]),
      ).toEqual(new Set(['Year', 'Make', 'Model']))
    })

    it('includes initialExpandedFacetControlsSet if columns are available', () => {
      expect(
        getDefaultShownFacetFilters(
          allFacetColumnNames,
          [
            {
              concreteType:
                'org.sagebionetworks.repo.model.table.FacetColumnValuesRequest',
              columnName: 'Make',
              facetValues: ['Honda', 'Ford'],
            },
          ],
          ['Price', 'EnteredBy', 'Lemon'],
        ),
        // Make is included because a value was selected.
        // Default columns 'Year' and 'Model' (from top 3 columns) not included
      ).toEqual(new Set(['Make', 'Price', 'EnteredBy', 'Lemon']))
    })
    it('if initialExpandedFacetControlsSet is small, initializes with default columns', () => {
      expect(
        // user expanded column that is no longer available in the current query result facets
        getDefaultShownFacetFilters(
          allFacetColumnNames,
          [],
          ['UnavailableColumn1', 'Lemon'],
        ),
        // first three facet column names should be included
      ).toEqual(new Set(['Year', 'Make', 'Model', 'Lemon']))
    })
  })
})
