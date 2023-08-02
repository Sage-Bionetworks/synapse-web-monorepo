import { Collapse as MockCollapse } from '@mui/material'
import { render, screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import React from 'react'
import {
  ColumnModel,
  ColumnTypeEnum,
  FacetColumnResultRange,
} from '@sage-bionetworks/synapse-types'
import {
  CombinedRangeFacetFilter,
  CombinedRangeFacetFilterProps,
} from './CombinedRangeFacetFilter'
import { VALUE_NOT_SET } from '../../../utils/SynapseConstants'
import RangeSlider from '../RangeSlider/RangeSlider'
import { QueryVisualizationContextProvider } from '../../QueryVisualizationWrapper'

let capturedOnChange:
  | ((range: { min: string | number; max: string | number }) => void)
  | undefined

jest.mock('../Range', () => ({
  Range: jest.fn((props: any) => {
    capturedOnChange = props.onChange
    return <div data-testid="Range"></div>
  }),
}))
jest.mock('../RangeSlider/RangeSlider', () => ({
  RangeSlider: jest.fn((props: any) => {
    capturedOnChange = props.onChange
    return <div data-testid="RangeSlider"></div>
  }),
}))

jest.mock('@mui/material', () => ({
  Collapse: jest.fn(props => (
    <div data-testid="Collapse">{props.children}</div>
  )),
}))

const mockCallback = jest.fn(() => null)
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

const columnModel: ColumnModel = {
  columnType: 'INTEGER',
  facetType: 'range',
  id: '86423',
  name: 'Year',
}

function createTestProps(
  overrides?: CombinedRangeFacetFilterProps,
): CombinedRangeFacetFilterProps {
  return {
    facetResults: [intFacetResult, intFacetResult],
    columnType: columnModel.columnType,
    label: columnModel.name,
    onChange: mockCallback,
    ...overrides,
  }
}

describe('RangeFacetFilter tests', () => {
  let props: CombinedRangeFacetFilterProps
  function init(overrides?: CombinedRangeFacetFilterProps) {
    props = createTestProps(overrides)
    return render(
      <QueryVisualizationContextProvider
        queryVisualizationContext={{
          getColumnDisplayName: jest.fn(col => col),
        }}
      >
        <CombinedRangeFacetFilter {...props} />
      </QueryVisualizationContextProvider>,
    )
  }
  describe('setting correct range value', () => {
    it('should set for any', () => {
      init()
      const radios = screen.getAllByRole('radio')
      expect(radios).toHaveLength(3)
      const anyOption = screen.getByLabelText<HTMLInputElement>('Any')
      expect(anyOption.checked).toBe(true)
    })

    it('should set for Unannotated', () => {
      init({ ...props, facetResults: [notSetFacetResult, notSetFacetResult] })
      const notAssignedOption =
        screen.getByLabelText<HTMLInputElement>('Not Assigned')
      expect(notAssignedOption.checked).toBe(true)
    })

    it('interval', () => {
      init({ ...props, facetResults: [rangeFacetResult, rangeFacetResult] })
      const rangeOption = screen.getByLabelText<HTMLInputElement>('Range')
      expect(rangeOption.checked).toBe(true)
    })
  })

  describe('collapsible', () => {
    it('should hide content when toggled', async () => {
      init({ ...props, collapsed: false })

      expect(MockCollapse).toHaveBeenLastCalledWith(
        expect.objectContaining({
          in: true,
        }),
        expect.anything(),
      )

      // toggle collapse via button
      await userEvent.click(
        screen.getByRole('button', { name: 'Collapse Menu' }),
      )

      expect(MockCollapse).toHaveBeenLastCalledWith(
        expect.objectContaining({
          in: false,
        }),
        expect.anything(),
      )
    })

    it('should start collapsed when specified via prop', async () => {
      init({ ...props, collapsed: true })
      expect(MockCollapse).toHaveBeenLastCalledWith(
        expect.objectContaining({
          in: false,
        }),
        expect.anything(),
      )

      // toggle collapse via button
      await userEvent.click(screen.getByRole('button', { name: 'Expand Menu' }))

      expect(MockCollapse).toHaveBeenLastCalledWith(
        expect.objectContaining({
          in: true,
        }),
        expect.anything(),
      )
    })
  })

  describe('displaying  correct range control', () => {
    const dateColumnModel: ColumnModel = {
      ...columnModel,
      columnType: ColumnTypeEnum.DATE,
    }
    const doubleColumnModel: ColumnModel = {
      ...columnModel,
      columnType: ColumnTypeEnum.DOUBLE,
    }
    it('should set for integer', () => {
      init({ ...props, facetResults: [rangeFacetResult, rangeFacetResult] })
      screen.getByTestId('RangeSlider')
    })

    it('should set for date', () => {
      init({
        ...props,
        facetResults: [rangeFacetResult, rangeFacetResult],
        columnType: dateColumnModel.columnType,
        label: dateColumnModel.name,
      })
      screen.getByTestId('Range')

      expect(Range).toHaveBeenLastCalledWith(
        expect.objectContaining({
          type: 'date',
        }),
        {},
      )
    })

    it('should set for double', () => {
      init({
        ...props,
        facetResults: [rangeFacetResult, rangeFacetResult],
        columnType: doubleColumnModel.columnType,
        label: doubleColumnModel.name,
      })
      screen.getByTestId('Range')

      expect(Range).toHaveBeenLastCalledWith(
        expect.objectContaining({
          type: 'number',
        }),
        {},
      )
    })
  })

  describe('communicating the change corectly', () => {
    it('should update from enum', async () => {
      init()
      // "Any" should be checked at the beginning
      const anyOption = await screen.findByLabelText<HTMLInputElement>('Any')
      expect(anyOption.checked).toBe(true)
      mockCallback.mockClear()

      // Click "Not Assigned"
      const notAssignedOption =
        screen.getByLabelText<HTMLInputElement>('Not Assigned')
      await userEvent.click(notAssignedOption)
      expect(mockCallback).toHaveBeenCalledWith([
        VALUE_NOT_SET,
        VALUE_NOT_SET,
        VALUE_NOT_SET,
        VALUE_NOT_SET,
      ])
      expect(mockCallback).toBeCalledTimes(1)

      //get updated wrapper and clear mocks
      mockCallback.mockClear()
      expect(anyOption.checked).toBe(false)
      expect(notAssignedOption.checked).toBe(true)

      // Click "Range"
      const rangeOption = screen.getByLabelText<HTMLInputElement>('Range')
      await userEvent.click(rangeOption)
      expect(mockCallback).not.toHaveBeenCalled()
      screen.getByTestId('RangeSlider')

      //get updated wrapper and clear mocks
      mockCallback.mockClear()
      expect(anyOption.checked).toBe(false)
      expect(notAssignedOption.checked).toBe(false)
      expect(rangeOption.checked).toBe(true)

      // Click "Any"
      await userEvent.click(anyOption)
      expect(mockCallback).toHaveBeenCalledWith(['', ''])
      expect(screen.queryByTestId('RangeSlider')).not.toBeInTheDocument()
      expect(anyOption.checked).toBe(true)
      expect(notAssignedOption.checked).toBe(false)
      expect(rangeOption.checked).toBe(false)
    })

    it('should update from a range control', async () => {
      capturedOnChange = undefined
      const dateColumnModel: ColumnModel = {
        ...columnModel,
        columnType: ColumnTypeEnum.DATE,
      }

      const updatedProps = {
        ...props,
        facetResult: rangeFacetResult,
        columnType: dateColumnModel.columnType,
        label: dateColumnModel.name,
      }
      init(updatedProps)
      await waitFor(() => expect(Range).toHaveBeenCalled())
      await waitFor(() => expect(capturedOnChange).toBeDefined())
      capturedOnChange!({ min: '22', max: '23' })
      expect(mockCallback).toHaveBeenCalledWith(['22', '23'])
    })

    it('should update from a range slider control', async () => {
      capturedOnChange = undefined
      init({
        facetResults: [rangeFacetResult, rangeFacetResult],
        columnType: ColumnTypeEnum.INTEGER,
        label: '',
        onChange: mockCallback,
      })
      await waitFor(() => expect(RangeSlider).toHaveBeenCalled())
      await waitFor(() => expect(capturedOnChange).toBeDefined())
      capturedOnChange!({ min: '22', max: '23' })
      expect(mockCallback).toHaveBeenCalledWith(['22', '23'])
    })
  })
})
