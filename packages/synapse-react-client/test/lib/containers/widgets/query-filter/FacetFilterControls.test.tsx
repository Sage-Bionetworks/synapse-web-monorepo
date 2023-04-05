import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import _ from 'lodash-es'
import * as React from 'react'
import { act } from '@testing-library/react'
import {
  QueryContextProvider,
  QueryContextType,
} from '../../../../../src/lib/containers/QueryContext'
import {
  QueryVisualizationContextProvider,
  QueryVisualizationContextType,
} from '../../../../../src/lib/containers/QueryVisualizationWrapper'
import FacetFilterControls, {
  FacetFilterControlsProps,
  getDefaultShownFacetFilters,
} from '../../../../../src/lib/containers/widgets/query-filter/FacetFilterControls'
import { SynapseContextProvider } from '../../../../../src/lib/utils/SynapseContext'
import { QueryResultBundle } from '../../../../../src/lib/utils/synapseTypes'
import mockQueryResponseData from '../../../../../mocks/mockQueryResponseData'
import { MOCK_CONTEXT_VALUE } from '../../../../../mocks/MockSynapseContext'
import { DEFAULT_PAGE_SIZE } from '../../../../../src/lib/utils/SynapseConstants'
import FullContextProvider from '../../../../../src/lib/utils/FullContextProvider'

let capturedOnChange: Function | undefined
let capturedOnClear: Function | undefined

const captureHandlers = async (facetFilterElement: HTMLElement) => {
  await userEvent.click(facetFilterElement)
}

const MockFacetFilter = props => {
  return (
    <div
      data-testid={props.testid}
      data-collapsed={props.collapsed}
      onClick={() => {
        // There's no good way to capture passed callbacks passed to a component when the same mock could appear multiple times on one page.
        // So we'll capture the callbacks via a click handler.
        capturedOnChange = props.onChange
        capturedOnClear = props.onClear
      }}
    ></div>
  )
}

jest.mock(
  '../../../../../src/lib/containers/widgets/query-filter/EnumFacetFilter',
  () => ({
    EnumFacetFilter: jest.fn(props => (
      <MockFacetFilter {...props} testid="EnumFacetFilter" />
    )),
  }),
)

jest.mock(
  '../../../../../src/lib/containers/widgets/query-filter/RangeFacetFilter',
  () => ({
    RangeFacetFilter: jest.fn(props => (
      <MockFacetFilter {...props} testid="RangeFacetFilter" />
    )),
  }),
)

const lastQueryRequestResult = {
  partMask: 53,
  concreteType: 'org.sagebionetworks.repo.model.table.QueryBundleRequest',
  entityId: 'syn16787123',
  query: {
    sql: 'SELECT * FROM syn21450294',
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
        min: 1997,
        max: 1999,
      },
    ],
    limit: DEFAULT_PAGE_SIZE,
    offset: 0,
  },
}

const mockExecuteQueryRequest = jest.fn(_selectedFacets => null)
const mockGetQueryRequest = jest.fn(() => _.cloneDeep(lastQueryRequestResult))

function createTestProps(
  overrides?: FacetFilterControlsProps,
): FacetFilterControlsProps {
  return {
    ...overrides,
  }
}

const defaultQueryContext: Partial<QueryContextType> = {
  data: mockQueryResponseData as QueryResultBundle,
  getLastQueryRequest: mockGetQueryRequest,
  executeQueryRequest: mockExecuteQueryRequest,
  isLoadingNewBundle: false,
}

const defaultQueryVisualizationContext: Partial<QueryVisualizationContextType> =
  {
    topLevelControlsState: {
      showColumnFilter: true,
      showFacetFilter: true,
      showFacetVisualization: true,
      showSearchBar: false,
      showDownloadConfirmation: false,
      showColumnSelectDropdown: false,
      showSqlEditor: false,
    },
    getColumnDisplayName: jest.fn(col => col),
  }

let props: FacetFilterControlsProps
function init(overrides?: FacetFilterControlsProps) {
  jest.clearAllMocks()
  props = createTestProps(overrides)
  return render(<FacetFilterControls {...props} />, {
    wrapper: ({ children }) => {
      return (
        <FullContextProvider synapseContext={MOCK_CONTEXT_VALUE}>
          <QueryContextProvider queryContext={defaultQueryContext}>
            <QueryVisualizationContextProvider
              queryVisualizationContext={defaultQueryVisualizationContext}
            >
              {children}
            </QueryVisualizationContextProvider>
          </QueryContextProvider>
        </FullContextProvider>
      )
    },
  })
}

describe('FacetFilterControls tests', () => {
  it('should only show three facets and be expanded', () => {
    init()
    const facetFilters = screen.getAllByTestId(/(Enum|Range)FacetFilter/)
    expect(facetFilters).toHaveLength(3)

    facetFilters.forEach(facet => {
      expect(facet.getAttribute('data-collapsed')).toBe('false')
    })
  })

  it('should respect availableFacets', async () => {
    // set availableFacets to make the component only show a filter for Year (a range type facet) and not Make (a values/enum type)
    init({ availableFacets: ['Year'] })
    expect(screen.queryByTestId('EnumFacetFilter')).not.toBeInTheDocument()
    expect(screen.queryByTestId('RangeFacetFilter')).toBeInTheDocument()
    // expects the facet chips to only show facets within facetToFilter
    expect(
      await screen.findByRole('button', { name: 'Year' }),
    ).toBeInTheDocument()
    expect(await screen.findAllByRole('button')).toHaveLength(1)
  })

  describe('handling child component callbacks', () => {
    it('should propagate enum update correctly', async () => {
      init()

      const expectedResult = [
        {
          columnName: 'Make',
          concreteType:
            'org.sagebionetworks.repo.model.table.FacetColumnValuesRequest',
          facetValues: ['Honda', 'Chevy', 'Ford'],
        },
        {
          columnName: 'Year',
          concreteType:
            'org.sagebionetworks.repo.model.table.FacetColumnRangeRequest',
          max: 1999,
          min: 1997,
        },
      ]
      const enumFacetFilter = screen.getAllByTestId('EnumFacetFilter')[0]
      await captureHandlers(enumFacetFilter)
      act(() => {
        capturedOnChange!({ Ford: true })
      })
      const expected = _.cloneDeep(lastQueryRequestResult)
      expected.query = { ...expected.query, selectedFacets: expectedResult }
      expect(mockExecuteQueryRequest).toHaveBeenCalledWith(expected)
    })

    it('should propagate enum clear correctly', async () => {
      init()

      const expectedResult = [
        {
          columnName: 'Year',
          concreteType:
            'org.sagebionetworks.repo.model.table.FacetColumnRangeRequest',
          max: 1999,
          min: 1997,
        },
      ]

      const enumFacetFilter = screen.getAllByTestId('EnumFacetFilter')[0]
      await captureHandlers(enumFacetFilter)
      act(() => {
        capturedOnClear!()
      })
      const expected = _.cloneDeep(lastQueryRequestResult)
      expected.query = { ...expected.query, selectedFacets: expectedResult }
      expect(mockExecuteQueryRequest).toHaveBeenCalledWith(expected)
    })

    it('should propagate range correctly', async () => {
      init()

      const expectedResult = [
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
      const rangeFacetFilter = screen.getAllByTestId('RangeFacetFilter')[0]
      await captureHandlers(rangeFacetFilter)
      act(() => {
        capturedOnChange!(['1997', '1998'])
      })
      const expected = _.cloneDeep(lastQueryRequestResult)
      expected.query = { ...expected.query, selectedFacets: expectedResult }
      expect(mockExecuteQueryRequest).toHaveBeenCalledWith(expected)
    })

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
