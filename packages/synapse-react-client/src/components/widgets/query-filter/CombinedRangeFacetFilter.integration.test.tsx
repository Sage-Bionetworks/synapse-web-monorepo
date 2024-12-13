import { Collapse as MockCollapse } from '@mui/material'
import { render, screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import {
  ColumnModel,
  ColumnTypeEnum,
  FacetColumnResultRange,
  QueryBundleRequest,
  QueryResultBundle,
} from '@sage-bionetworks/synapse-types'
import {
  CombinedRangeFacetFilter,
  CombinedRangeFacetFilterProps,
} from './CombinedRangeFacetFilter'
import {
  DEFAULT_PAGE_SIZE,
  VALUE_NOT_SET,
} from '../../../utils/SynapseConstants'
import { RangeSliderProps } from '../RangeSlider/RangeSlider'
import { QueryVisualizationWrapper } from '../../QueryVisualizationWrapper'
import QueryWrapper from '../../QueryWrapper'
import { MOCK_TABLE_ENTITY_ID } from '../../../mocks/entity/mockTableEntity'
import { createWrapper } from '../../../testutils/TestingLibraryUtils'
import { server } from '../../../mocks/msw/server'
import { cloneDeep } from 'lodash-es'
import {
  QueryContextType,
  useQueryContext,
} from '../../QueryContext/QueryContext'
import { registerTableQueryResult } from '../../../mocks/msw/handlers/tableQueryService'

let capturedOnApplyClicked:
  | ((range: { min: string | number; max: string | number }) => void)
  | undefined

jest.mock('../RangeSlider/RangeSlider', () => ({
  __esModule: true,
  default: jest.fn((props: RangeSliderProps) => {
    capturedOnApplyClicked = props.onApplyClicked
    return <div data-testid="RangeSlider"></div>
  }),
}))

const mockQueryResponseData: QueryResultBundle = {
  concreteType: 'org.sagebionetworks.repo.model.table.QueryResultBundle',
  facets: [
    {
      concreteType:
        'org.sagebionetworks.repo.model.table.FacetColumnResultRange',
      columnName: 'minYear',
      facetType: 'range',
      columnMin: '1970',
      columnMax: '2000',
    },
    {
      concreteType:
        'org.sagebionetworks.repo.model.table.FacetColumnResultRange',
      columnName: 'maxYear',
      facetType: 'range',
      columnMin: '1970',
      columnMax: '2000',
    },
    {
      concreteType:
        'org.sagebionetworks.repo.model.table.FacetColumnResultRange',
      columnName: 'minValue',
      facetType: 'range',
      columnMin: '1',
      columnMax: '111',
    },
    {
      concreteType:
        'org.sagebionetworks.repo.model.table.FacetColumnResultRange',
      columnName: 'maxValue',
      facetType: 'range',
      columnMin: '1',
      columnMax: '111',
    },
  ],
}

jest.mock('@mui/material', () => {
  const actual = jest.requireActual('@mui/material')
  return {
    ...actual,
    Collapse: jest.fn(props => (
      <div data-testid="Collapse">{props.children}</div>
    )),
  }
})

const queryRequest: QueryBundleRequest = {
  partMask: 255,
  concreteType: 'org.sagebionetworks.repo.model.table.QueryBundleRequest',
  entityId: MOCK_TABLE_ENTITY_ID,
  query: {
    sql: `SELECT * FROM ${MOCK_TABLE_ENTITY_ID}`,
    selectedFacets: [],
    limit: DEFAULT_PAGE_SIZE,
    offset: 0,
  },
}
const minIntFacetResult: FacetColumnResultRange = {
  columnMax: '1999',
  columnMin: '1996',
  columnName: 'minYear',
  concreteType: 'org.sagebionetworks.repo.model.table.FacetColumnResultRange',
  facetType: 'range',
}

const maxIntFacetResult: FacetColumnResultRange = {
  columnMax: '1999',
  columnMin: '1996',
  columnName: 'maxYear',
  concreteType: 'org.sagebionetworks.repo.model.table.FacetColumnResultRange',
  facetType: 'range',
}

const minColumnNotSetFacetResult: FacetColumnResultRange = {
  columnMax: '50',
  columnMin: '10',
  columnName: 'minValue',
  selectedMax: VALUE_NOT_SET,
  selectedMin: VALUE_NOT_SET,
  concreteType: 'org.sagebionetworks.repo.model.table.FacetColumnResultRange',
  facetType: 'range',
}

const minRangeFacetResult = {
  ...minColumnNotSetFacetResult,
  selectedMin: '10',
  selectedMax: '40',
}

const maxColumnNotSetFacetResult: FacetColumnResultRange = {
  columnMax: '70',
  columnMin: '30',
  columnName: 'maxValue',
  selectedMax: VALUE_NOT_SET,
  selectedMin: VALUE_NOT_SET,
  concreteType: 'org.sagebionetworks.repo.model.table.FacetColumnResultRange',
  facetType: 'range',
}

const maxRangeFacetResult = {
  ...maxColumnNotSetFacetResult,
  selectedMin: '35',
  selectedMax: '60',
}

const columnModel: ColumnModel = {
  columnType: 'INTEGER',
  facetType: 'range',
  id: '86423',
  name: 'Year',
}

const dateColumnModel: ColumnModel = {
  ...columnModel,
  columnType: ColumnTypeEnum.DATE,
}

const doubleColumnModel: ColumnModel = {
  ...columnModel,
  columnType: ColumnTypeEnum.DOUBLE,
}

function createTestProps(
  overrides?: CombinedRangeFacetFilterProps,
): CombinedRangeFacetFilterProps {
  return {
    facetResults: [minIntFacetResult, maxIntFacetResult],
    columnType: columnModel.columnType,
    label: columnModel.name,
    ...overrides,
  }
}

let currentQueryContext: QueryContextType | undefined = undefined

function ContextReceiver() {
  currentQueryContext = useQueryContext()
  return <></>
}

describe('CombinedRangeFacetFilter tests', () => {
  beforeAll(() => server.listen())
  beforeEach(() => {
    currentQueryContext = undefined
    capturedOnApplyClicked = undefined
    jest.clearAllMocks()
    registerTableQueryResult(
      { sql: queryRequest.query.sql },
      mockQueryResponseData,
    )
    registerTableQueryResult(queryRequest.query, mockQueryResponseData)
  })
  afterEach(() => server.restoreHandlers())
  afterAll(() => server.close())

  let props: CombinedRangeFacetFilterProps
  async function init(overrides?: CombinedRangeFacetFilterProps) {
    props = createTestProps(overrides)
    render(
      <QueryWrapper initQueryRequest={queryRequest}>
        <QueryVisualizationWrapper>
          <ContextReceiver />
          <CombinedRangeFacetFilter {...props} />
        </QueryVisualizationWrapper>
      </QueryWrapper>,
      {
        wrapper: createWrapper(),
      },
    )
    await screen.findAllByRole('radio')
  }
  describe('setting correct range value', () => {
    it('should set for any', async () => {
      await init()
      const radios = await screen.findAllByRole('radio')
      expect(radios).toHaveLength(3)
      const anyOption = screen.getByLabelText<HTMLInputElement>('Any')
      expect(anyOption.checked).toBe(true)
    })

    it('should set for Unannotated', async () => {
      await init({
        ...props,
        facetResults: [minColumnNotSetFacetResult, maxColumnNotSetFacetResult],
      })
      const notAssignedOption = await screen.findByLabelText<HTMLInputElement>(
        'Not Assigned',
      )
      expect(notAssignedOption.checked).toBe(true)
    })

    it('interval', async () => {
      await init({
        ...props,
        facetResults: [minRangeFacetResult, maxRangeFacetResult],
      })
      const rangeOption = await screen.findByLabelText<HTMLInputElement>(
        'Range',
      )
      expect(rangeOption.checked).toBe(true)
    })
  })

  it('should collapse content when toggled', async () => {
    await init({ ...props })

    expect(MockCollapse).toHaveBeenLastCalledWith(
      expect.objectContaining({
        in: true,
      }),
      expect.anything(),
    )

    // toggle collapse via button
    await userEvent.click(screen.getByRole('button', { name: 'Collapse Menu' }))

    expect(MockCollapse).toHaveBeenLastCalledWith(
      expect.objectContaining({
        in: false,
      }),
      expect.anything(),
    )
  })

  describe('displaying correct range control', () => {
    it('should set for integer', async () => {
      await init({
        ...props,
        facetResults: [minRangeFacetResult, maxRangeFacetResult],
      })
      screen.getByTestId('RangeSlider')
    })

    it('should set for date', async () => {
      const mockQueryResponseDataWithDateColumnModel = cloneDeep(
        mockQueryResponseData,
      )
      mockQueryResponseDataWithDateColumnModel.columnModels = [dateColumnModel]
      registerTableQueryResult(
        queryRequest.query,
        mockQueryResponseDataWithDateColumnModel,
      )

      await init({
        ...props,
        facetResults: [minRangeFacetResult, maxRangeFacetResult],
        columnType: dateColumnModel.columnType,
        label: dateColumnModel.name,
      })

      const rangeOption = await screen.findByLabelText('Range')
      await userEvent.click(rangeOption)
      const minInput = await screen.findByLabelText<HTMLInputElement>('min')
      const maxInput = await screen.findByLabelText<HTMLInputElement>('max')
      expect(minInput.type).toBe('date')
      expect(maxInput.type).toBe('date')
    })

    it('should set for double', async () => {
      const mockQueryResponseDataWithDoubleColumnModel = cloneDeep(
        mockQueryResponseData,
      )
      mockQueryResponseDataWithDoubleColumnModel.columnModels = [
        doubleColumnModel,
      ]
      registerTableQueryResult(
        queryRequest.query,
        mockQueryResponseDataWithDoubleColumnModel,
      )

      await init({
        ...props,
        facetResults: [minRangeFacetResult, maxRangeFacetResult],
        columnType: doubleColumnModel.columnType,
        label: doubleColumnModel.name,
      })
      const rangeOption = await screen.findByLabelText('Range')
      await userEvent.click(rangeOption)
      const minInput = await screen.findByLabelText<HTMLInputElement>('min')
      const maxInput = await screen.findByLabelText<HTMLInputElement>('max')
      expect(minInput.type).toBe('number')
      expect(maxInput.type).toBe('number')
    })
  })

  describe('communicating the change corectly', () => {
    it('should update from enum', async () => {
      await init()
      // "Any" should be checked at the beginning
      const anyOption = await screen.findByLabelText<HTMLInputElement>('Any')
      expect(anyOption.checked).toBe(true)

      // Click "Not Assigned"
      const notAssignedOption =
        screen.getByLabelText<HTMLInputElement>('Not Assigned')
      await userEvent.click(notAssignedOption)
      await waitFor(() => {
        expect(
          currentQueryContext?.getCurrentQueryRequest().query.selectedFacets,
        ).toContainEqual({
          concreteType:
            'org.sagebionetworks.repo.model.table.FacetColumnRangeRequest',
          columnName: 'minYear',
          min: VALUE_NOT_SET,
          max: VALUE_NOT_SET,
        })
        expect(
          currentQueryContext?.getCurrentQueryRequest().query.selectedFacets,
        ).toContainEqual({
          concreteType:
            'org.sagebionetworks.repo.model.table.FacetColumnRangeRequest',
          columnName: 'maxYear',
          min: VALUE_NOT_SET,
          max: VALUE_NOT_SET,
        })
      })

      //get updated wrapper and clear mocks
      expect(anyOption.checked).toBe(false)
      expect(notAssignedOption.checked).toBe(true)

      // Click "Range"
      const rangeOption = screen.getByLabelText<HTMLInputElement>('Range')
      await userEvent.click(rangeOption)
      screen.getByTestId('RangeSlider')

      //get updated wrapper and clear mocks
      expect(anyOption.checked).toBe(false)
      expect(notAssignedOption.checked).toBe(false)
      expect(rangeOption.checked).toBe(true)

      // Click "Any"
      await userEvent.click(anyOption)
      await waitFor(() => {
        expect(
          currentQueryContext?.getCurrentQueryRequest().query.selectedFacets,
        ).toBeUndefined()
      })

      expect(screen.queryByTestId('RangeSlider')).not.toBeInTheDocument()
      expect(anyOption.checked).toBe(true)
      expect(notAssignedOption.checked).toBe(false)
      expect(rangeOption.checked).toBe(false)
    })

    it('should update from a range control', async () => {
      const mockQueryResponseDataWithDoubleColumnModel = cloneDeep(
        mockQueryResponseData,
      )
      mockQueryResponseDataWithDoubleColumnModel.columnModels = [
        doubleColumnModel,
      ]
      registerTableQueryResult(
        queryRequest.query,
        mockQueryResponseDataWithDoubleColumnModel,
      )

      const updatedProps = {
        ...props,
        facetResults: [minRangeFacetResult, maxRangeFacetResult],
        columnType: doubleColumnModel.columnType,
        label: doubleColumnModel.name,
      }
      await init(updatedProps)

      // Type into the min/max text boxes
      const minInput = await screen.findByLabelText('min')
      const maxInput = await screen.findByLabelText('max')
      await userEvent.clear(minInput)
      await userEvent.type(minInput, '40')
      await userEvent.clear(maxInput)
      await userEvent.type(maxInput, '50')
      await userEvent.click(screen.getByRole('button', { name: 'Apply' }))

      // Call back with column1 min to range selector max, and range selector min to column2 max.
      await waitFor(() => {
        expect(
          currentQueryContext?.getCurrentQueryRequest().query.selectedFacets,
        ).toContainEqual({
          concreteType:
            'org.sagebionetworks.repo.model.table.FacetColumnRangeRequest',
          columnName: 'minValue',
          min: '1',
          max: '50',
        })
        expect(
          currentQueryContext?.getCurrentQueryRequest().query.selectedFacets,
        ).toContainEqual({
          concreteType:
            'org.sagebionetworks.repo.model.table.FacetColumnRangeRequest',
          columnName: 'maxValue',
          min: '40',
          max: '111',
        })
      })
    })

    it('should update from a range slider control', async () => {
      await init({
        facetResults: [minRangeFacetResult, maxRangeFacetResult],
        columnType: ColumnTypeEnum.INTEGER,
        label: 'A',
      })
      await waitFor(() => expect(capturedOnApplyClicked).toBeDefined())
      capturedOnApplyClicked!({ min: '40', max: '50' })
      // Call back with column1 min to range selector max, and range selector min to column2 max.
      await waitFor(() => {
        expect(
          currentQueryContext?.getCurrentQueryRequest().query.selectedFacets,
        ).toContainEqual({
          concreteType:
            'org.sagebionetworks.repo.model.table.FacetColumnRangeRequest',
          columnName: 'minValue',
          min: '1',
          max: '50',
        })
        expect(
          currentQueryContext?.getCurrentQueryRequest().query.selectedFacets,
        ).toContainEqual({
          concreteType:
            'org.sagebionetworks.repo.model.table.FacetColumnRangeRequest',
          columnName: 'maxValue',
          min: '40',
          max: '111',
        })
      })
    })
  })
})
