import { Collapse as MockCollapse } from '@mui/material'
import { act, render, screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import React, { Suspense } from 'react'
import { RangeFacetFilter, RangeFacetFilterProps } from './RangeFacetFilter'
import { RangeValues } from '../Range'
import RangeSlider from '../RangeSlider/RangeSlider'
import {
  DEFAULT_PAGE_SIZE,
  VALUE_NOT_SET,
} from '../../../utils/SynapseConstants'
import {
  ColumnModel,
  ColumnTypeEnum,
  FacetColumnResultRange,
  QueryBundleRequest,
  QueryResultBundle,
} from '@sage-bionetworks/synapse-types'
import { server } from '../../../mocks/msw/server'
import { QueryContextType, QueryWrapper, useQueryContext } from '../../../index'
import { MOCK_TABLE_ENTITY_ID } from '../../../mocks/entity/mockTableEntity'
import mockQueryResponseData from '../../../mocks/mockQueryResponseData'
import { QueryVisualizationWrapper } from '../../QueryVisualizationWrapper'
import { cloneDeep } from 'lodash-es'
import { createWrapper } from '../../../testutils/TestingLibraryUtils'
import { registerTableQueryResult } from '../../../mocks/msw/handlers/tableQueryService'

let capturedOnApplyClicked: ((values: RangeValues) => void) | undefined

jest.mock('../RangeSlider/RangeSlider', () => ({
  __esModule: true,
  default: jest.fn((props: any) => {
    capturedOnApplyClicked = props.onApplyClicked
    return <div data-testid="RangeSlider"></div>
  }),
}))

const mockedRangeSlider = jest.mocked(RangeSlider)

jest.mock('@mui/material', () => {
  const actual = jest.requireActual('@mui/material')
  return {
    ...actual,
    Collapse: jest.fn(props => (
      <div data-testid="Collapse">{props.children}</div>
    )),
  }
})

const intFacetResult: FacetColumnResultRange = {
  columnMax: '1999',
  columnMin: '1996',
  columnName: 'Year',
  concreteType: 'org.sagebionetworks.repo.model.table.FacetColumnResultRange',
  facetType: 'range',
}

const notSetFacetResult: FacetColumnResultRange = {
  columnMax: '1999',
  columnMin: '1996',
  columnName: 'Year',
  selectedMax: VALUE_NOT_SET,
  selectedMin: VALUE_NOT_SET,
  concreteType: 'org.sagebionetworks.repo.model.table.FacetColumnResultRange',
  facetType: 'range',
}

const rangeFacetResult = {
  ...notSetFacetResult,
  selectedMin: '1997',
  selectedMax: '1998',
}

const integerColumnModel: ColumnModel = {
  columnType: 'INTEGER',
  facetType: 'range',
  id: '86423',
  name: 'Year',
}

const dateColumnModel: ColumnModel = {
  ...integerColumnModel,
  columnType: ColumnTypeEnum.DATE,
}

const doubleColumnModel: ColumnModel = {
  ...integerColumnModel,
  columnType: ColumnTypeEnum.DOUBLE,
}

const queryRequest: QueryBundleRequest = {
  partMask: 255,
  concreteType: 'org.sagebionetworks.repo.model.table.QueryBundleRequest',
  entityId: MOCK_TABLE_ENTITY_ID,
  query: {
    sql: `SELECT * FROM ${MOCK_TABLE_ENTITY_ID}`,
    selectedFacets: [
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

let currentQueryContext: QueryContextType | undefined = undefined

function ContextReceiver() {
  currentQueryContext = useQueryContext()
  return <></>
}

function createTestProps(
  overrides?: RangeFacetFilterProps,
): RangeFacetFilterProps {
  return {
    facetResult: intFacetResult,
    ...overrides,
  }
}

describe('RangeFacetFilter tests', () => {
  beforeAll(() => server.listen())
  beforeEach(() => {
    currentQueryContext = undefined
    capturedOnApplyClicked = undefined
    registerTableQueryResult(queryRequest.query, mockQueryResponseData)
  })
  afterEach(() => server.restoreHandlers())
  afterAll(() => server.close())

  let props: RangeFacetFilterProps
  function init(overrides?: RangeFacetFilterProps) {
    props = createTestProps(overrides)
    return render(
      <QueryWrapper initQueryRequest={queryRequest}>
        <QueryVisualizationWrapper>
          <ContextReceiver />
          <Suspense fallback={<div>Loading...</div>}>
            <RangeFacetFilter {...props} />
          </Suspense>
        </QueryVisualizationWrapper>
      </QueryWrapper>,
      { wrapper: createWrapper() },
    )
  }
  describe('setting correct range value', () => {
    it('should set for any', async () => {
      init()
      const radios = await screen.findAllByRole('radio')
      expect(radios).toHaveLength(3)
      const anyOption = screen.getByLabelText<HTMLInputElement>('Any')
      expect(anyOption.checked).toBe(true)
    })

    it('should set for Unannotated', async () => {
      init({ ...props, facetResult: notSetFacetResult })
      const notAssignedOption = await screen.findByLabelText<HTMLInputElement>(
        'Not Assigned',
      )
      expect(notAssignedOption.checked).toBe(true)
    })

    it('interval', async () => {
      init({ ...props, facetResult: rangeFacetResult })
      const rangeOption = await screen.findByLabelText<HTMLInputElement>(
        'Range',
      )
      expect(rangeOption.checked).toBe(true)
    })
  })

  it('should hide content when collapsible toggled', async () => {
    init({ ...props })

    await waitFor(() => {
      expect(MockCollapse).toHaveBeenLastCalledWith(
        expect.objectContaining({
          in: true,
        }),
        expect.anything(),
      )
    })

    // toggle collapse via button
    await userEvent.click(
      await screen.findByRole('button', { name: 'Collapse Menu' }),
    )

    expect(MockCollapse).toHaveBeenLastCalledWith(
      expect.objectContaining({
        in: false,
      }),
      expect.anything(),
    )
  })

  describe('displaying correct range control', () => {
    it('should set for integer', async () => {
      const mockQueryResponseDataWithIntegerColumnModel =
        cloneDeep<QueryResultBundle>(mockQueryResponseData)
      mockQueryResponseDataWithIntegerColumnModel.columnModels = [
        integerColumnModel,
      ]

      registerTableQueryResult(
        queryRequest.query,
        mockQueryResponseDataWithIntegerColumnModel,
      )

      init({ ...props, facetResult: rangeFacetResult })

      const rangeOption = await screen.findByLabelText('Range')
      await userEvent.click(rangeOption)
      await screen.findByTestId('RangeSlider')
    })

    it('should set for date', async () => {
      const mockQueryResponseDataWithDateColumnModel =
        cloneDeep<QueryResultBundle>(mockQueryResponseData)
      mockQueryResponseDataWithDateColumnModel.columnModels = [dateColumnModel]

      registerTableQueryResult(
        queryRequest.query,
        mockQueryResponseDataWithDateColumnModel,
      )

      init({
        ...props,
        facetResult: rangeFacetResult,
      })

      const rangeOption = await screen.findByLabelText('Range')
      await userEvent.click(rangeOption)
      const minInput = await screen.findByLabelText<HTMLInputElement>('min')
      const maxInput = await screen.findByLabelText<HTMLInputElement>('max')
      expect(minInput.type).toBe('date')
      expect(maxInput.type).toBe('date')
    })

    it('should set for double', async () => {
      const mockQueryResponseDataWithDoubleColumnModel =
        cloneDeep<QueryResultBundle>(mockQueryResponseData)
      mockQueryResponseDataWithDoubleColumnModel.columnModels = [
        doubleColumnModel,
      ]
      registerTableQueryResult(
        queryRequest.query,
        mockQueryResponseDataWithDoubleColumnModel,
      )

      init({
        ...props,
        facetResult: rangeFacetResult,
      })
      const rangeOption = await screen.findByLabelText('Range')
      await userEvent.click(rangeOption)
      const minInput = await screen.findByLabelText<HTMLInputElement>('min')
      const maxInput = await screen.findByLabelText<HTMLInputElement>('max')
      expect(minInput.type).toBe('number')
      expect(maxInput.type).toBe('number')
    })
  })

  describe('communicating the change correctly', () => {
    it('should update from enum', async () => {
      registerTableQueryResult(
        {
          sql: queryRequest.query.sql,
        },
        mockQueryResponseData,
      )
      registerTableQueryResult(
        {
          ...queryRequest.query,
          selectedFacets: [
            {
              concreteType:
                'org.sagebionetworks.repo.model.table.FacetColumnRangeRequest',
              columnName: 'Year',
              min: VALUE_NOT_SET,
              max: VALUE_NOT_SET,
            },
          ],
        },
        mockQueryResponseData,
      )

      init()
      // "Any" should be checked at the beginning
      const anyOption = await screen.findByLabelText<HTMLInputElement>('Any')
      expect(anyOption.checked).toBe(true)

      // Click "Not Assigned"
      const notAssignedOption =
        screen.getByLabelText<HTMLInputElement>('Not Assigned')
      await userEvent.click(notAssignedOption)
      expect(
        currentQueryContext?.getCurrentQueryRequest().query.selectedFacets,
      ).toContainEqual({
        concreteType:
          'org.sagebionetworks.repo.model.table.FacetColumnRangeRequest',
        columnName: 'Year',
        min: VALUE_NOT_SET,
        max: VALUE_NOT_SET,
      })

      //get updated wrapper and clear mocks
      await waitFor(() => {
        expect(anyOption.checked).toBe(false)
        expect(notAssignedOption.checked).toBe(true)
      })

      // Click "Range"
      const rangeOption = screen.getByLabelText<HTMLInputElement>('Range')
      await userEvent.click(rangeOption)
      await screen.findByTestId('RangeSlider')

      //get updated wrapper and clear mocks
      expect(anyOption.checked).toBe(false)
      expect(notAssignedOption.checked).toBe(false)
      expect(rangeOption.checked).toBe(true)

      // Click "Any"
      await userEvent.click(anyOption)
      await waitFor(() => {
        expect(
          currentQueryContext?.nextQueryRequest.query.selectedFacets,
        ).toBeUndefined()
        expect(screen.queryByTestId('RangeSlider')).not.toBeInTheDocument()
        expect(anyOption.checked).toBe(true)
        expect(notAssignedOption.checked).toBe(false)
        expect(rangeOption.checked).toBe(false)
      })
    })

    it('should update from a range control', async () => {
      const mockQueryResponseDataWithDoubleColumnModel =
        cloneDeep<QueryResultBundle>(mockQueryResponseData)
      mockQueryResponseDataWithDoubleColumnModel.columnModels = [
        doubleColumnModel,
      ]
      registerTableQueryResult(
        queryRequest.query,
        mockQueryResponseDataWithDoubleColumnModel,
      )
      registerTableQueryResult(
        {
          ...queryRequest.query,
          selectedFacets: [
            {
              concreteType:
                'org.sagebionetworks.repo.model.table.FacetColumnRangeRequest',
              columnName: 'Year',
              min: '22',
              max: '23',
            },
          ],
        },
        mockQueryResponseDataWithDoubleColumnModel,
      )

      init()

      // Click "Range"
      const rangeOption = await screen.findByLabelText<HTMLInputElement>(
        'Range',
      )
      await userEvent.click(rangeOption)

      // Type into the min/max text boxes
      const minInput = await screen.findByLabelText('min')
      const maxInput = await screen.findByLabelText('max')
      await userEvent.clear(minInput)
      await userEvent.type(minInput, '22')
      await userEvent.clear(maxInput)
      await userEvent.type(maxInput, '23')
      await userEvent.click(screen.getByRole('button', { name: 'Apply' }))
      await waitFor(() => {
        expect(
          currentQueryContext?.nextQueryRequest.query.selectedFacets,
        ).toEqual([
          {
            concreteType:
              'org.sagebionetworks.repo.model.table.FacetColumnRangeRequest',
            columnName: 'Year',
            min: '22',
            max: '23',
          },
        ])
      })
    })

    it('should update from a range slider control', async () => {
      init({ facetResult: rangeFacetResult })
      await waitFor(() => expect(mockedRangeSlider).toHaveBeenCalled())
      await waitFor(() => expect(capturedOnApplyClicked).toBeDefined())

      act(() => {
        capturedOnApplyClicked!({ min: '22', max: '23' })
      })

      await waitFor(() => {
        expect(
          currentQueryContext?.getCurrentQueryRequest().query.selectedFacets,
        ).toEqual([
          {
            concreteType:
              'org.sagebionetworks.repo.model.table.FacetColumnRangeRequest',
            columnName: 'Year',
            min: '22',
            max: '23',
          },
        ])
      })
    })
  })
})
