import { act, render, screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import _ from 'lodash-es'
import React from 'react'
import { QueryVisualizationWrapper } from '../../QueryVisualizationWrapper/QueryVisualizationWrapper'
import FacetFilterControls, {
  FacetFilterControlsProps,
  getDefaultShownFacetFilters,
} from './FacetFilterControls'
import {
  FacetColumnRequest,
  QueryBundleRequest,
} from '@sage-bionetworks/synapse-types'
import mockQueryResponseData from '../../../mocks/mockQueryResponseData'
import { DEFAULT_PAGE_SIZE } from '../../../utils/SynapseConstants'
import { createWrapper } from '../../../testutils/TestingLibraryUtils'
import QueryWrapper from '../../QueryWrapper'
import { server } from '../../../mocks/msw/server'
import { getHandlersForTableQuery } from '../../../mocks/msw/handlers/tableQueryHandlers'
import { MOCK_TABLE_ENTITY_ID } from '../../../mocks/entity/mockTableEntity'
import { QueryContextConsumer, QueryContextType } from '../../QueryContext'
import { RangeFacetFilterProps } from './RangeFacetFilter'

let capturedOnChange: RangeFacetFilterProps['onChange'] | undefined

const captureHandlers = async (facetFilterElement: HTMLElement) => {
  await userEvent.click(facetFilterElement)
}

const MockFacetFilter = (props: {
  onChange: RangeFacetFilterProps['onChange']
  testid: string
  collapsed: boolean
}) => {
  return (
    <div
      data-testid={props.testid}
      data-collapsed={props.collapsed}
      onClick={() => {
        // There's no good way to capture passed callbacks passed to a component when the same mock could appear multiple times on one page.
        // So we'll capture the callbacks via a click handler.
        capturedOnChange = props.onChange
      }}
    ></div>
  )
}

jest.mock(
  '../../../../src/components/widgets/query-filter/EnumFacetFilter',
  () => ({
    EnumFacetFilter: jest.fn(props => (
      <MockFacetFilter {...props} testid="EnumFacetFilter" />
    )),
  }),
)

jest.mock(
  '../../../../src/components/widgets/query-filter/RangeFacetFilter',
  () => ({
    RangeFacetFilter: jest.fn(props => (
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

let capturedQueryContext: QueryContextType | undefined = undefined

function init(overrides?: FacetFilterControlsProps) {
  return render(
    <QueryWrapper initQueryRequest={queryRequest}>
      <QueryContextConsumer>
        {queryContext => {
          capturedQueryContext = queryContext
          return (
            <QueryVisualizationWrapper>
              <FacetFilterControls {...overrides} />
            </QueryVisualizationWrapper>
          )
        }}
      </QueryContextConsumer>
    </QueryWrapper>,
    {
      wrapper: createWrapper(),
    },
  )
}

describe('FacetFilterControls tests', () => {
  beforeAll(() => server.listen())
  beforeEach(() => {
    jest.clearAllMocks()
    server.use(...getHandlersForTableQuery(mockQueryResponseData))
  })
  afterEach(() => server.restoreHandlers())
  afterAll(() => server.close())

  it('should only show three facets and be expanded', async () => {
    init()
    const facetFilters = await screen.findAllByTestId(/(Enum|Range)FacetFilter/)
    expect(facetFilters).toHaveLength(3)

    facetFilters.forEach(facet => {
      expect(facet.getAttribute('data-collapsed')).toBe('false')
    })
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
    it('should propagate range correctly', async () => {
      init()

      const expectedResult: FacetColumnRequest[] = [
        {
          columnName: 'Make',
          concreteType:
            'org.sagebionetworks.repo.model.table.FacetColumnValuesRequest',
          facetValues: ['Honda', 'Chevy'],
        },
        {
          columnName: 'Year',
          concreteType:
            'org.sagebionetworks.repo.model.table.FacetColumnRangeRequest',
          max: '1998',
          min: '1997',
        },
      ]
      const rangeFacetFilter = (
        await screen.findAllByTestId('RangeFacetFilter')
      )[0]
      await captureHandlers(rangeFacetFilter)
      expect(capturedOnChange).toBeDefined()
      act(() => {
        capturedOnChange!(['1997', '1998'])
      })
      const expected = _.cloneDeep(queryRequest)
      expected.query = { ...expected.query, selectedFacets: expectedResult }
      await waitFor(() => {
        expect(capturedQueryContext?.nextQueryRequest.query).toEqual(
          expected.query,
        )
      })
    })

    it('renders all available facet chips', async () => {
      init()
      expect(await screen.findAllByRole('button')).toHaveLength(
        mockQueryResponseData.facets!.length,
      )
    })

    it('facet chip changes color onClick', async () => {
      init()
      const facetChip = await screen.findByRole('button', {
        name: mockQueryResponseData.facets![0].columnName,
      })
      expect(facetChip.className).toEqual('Chip Checked')
      await userEvent.click(facetChip)
      expect(facetChip.className).toEqual('Chip ')
    })
  })

  describe('getDefaultShownFacetFilters', () => {
    it('return the first three facet column names', () => {
      expect(
        getDefaultShownFacetFilters(mockQueryResponseData.facets!),
      ).toEqual(new Set(['Year', 'Make', 'Model']))
    })
    it('returns the first three facet column names plus any selected facets', () => {
      expect(
        getDefaultShownFacetFilters(mockQueryResponseData.facets!, [
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
        getDefaultShownFacetFilters(mockQueryResponseData.facets!, [
          {
            concreteType:
              'org.sagebionetworks.repo.model.table.FacetColumnValuesRequest',
            columnName: 'Make',
            facetValues: ['Honda', 'Ford'],
          },
        ]),
      ).toEqual(new Set(['Year', 'Make', 'Model']))
    })
  })
})
