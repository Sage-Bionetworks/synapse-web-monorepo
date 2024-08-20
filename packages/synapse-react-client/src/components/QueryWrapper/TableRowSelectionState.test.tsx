import { act, renderHook } from '@testing-library/react'
import { mockQueryResultBundle } from '../../mocks/mockFileViewQuery'
import { Row } from '@sage-bionetworks/synapse-types'
import { cloneDeep } from 'lodash-es'
import {
  hasSelectedRowsAtom,
  isRowSelectedAtom,
  isRowSelectionVisibleAtom,
  rowSelectionPrimaryKeyAtom,
  selectedRowsAtom,
} from './TableRowSelectionState'
import { Provider, useAtomValue, useSetAtom } from 'jotai'

function useTableRowSelectionState() {
  const isRowSelectionVisible = useAtomValue(isRowSelectionVisibleAtom)
  const setIsRowSelectionVisible = useSetAtom(isRowSelectionVisibleAtom)
  const rowSelectionPrimaryKey = useAtomValue(rowSelectionPrimaryKeyAtom)
  const setRowSelectionPrimaryKey = useSetAtom(rowSelectionPrimaryKeyAtom)
  const selectedRows = useAtomValue(selectedRowsAtom)
  const setSelectedRows = useSetAtom(selectedRowsAtom)
  const isRowSelected = useAtomValue(isRowSelectedAtom)
  const hasSelectedRows = useAtomValue(hasSelectedRowsAtom)
  return {
    isRowSelectionVisible,
    setIsRowSelectionVisible,
    rowSelectionPrimaryKey,
    setRowSelectionPrimaryKey,
    selectedRows,
    setSelectedRows,
    isRowSelected,
    hasSelectedRows,
  }
}

function renderTableRowSelectionStateHook() {
  return renderHook(() => useTableRowSelectionState(), {
    // Wrap the hook in a Jotai provider to ensure state is isolated
    wrapper: Provider,
  })
}

describe('TableRowSelectionState tests', () => {
  it('hides rowSelection by default', () => {
    const { result } = renderTableRowSelectionStateHook()
    expect(result.current.isRowSelectionVisible).toBe(false)
    expect(result.current.hasSelectedRows).toBe(false)
  })

  it('allows selecting and unselecting rows', () => {
    const { result } = renderTableRowSelectionStateHook()

    act(() => {
      result.current.setIsRowSelectionVisible(true)
    })

    expect(result.current.isRowSelectionVisible).toBe(true)
    expect(result.current.selectedRows).toEqual([])
    expect(result.current.hasSelectedRows).toBe(false)

    // Select a row
    act(() => {
      result.current.setSelectedRows([
        mockQueryResultBundle.queryResult?.queryResults.rows[0]!,
      ])
    })

    expect(result.current.selectedRows).toEqual([
      mockQueryResultBundle.queryResult?.queryResults.rows[0]!,
    ])
    expect(result.current.hasSelectedRows).toBe(true)
    expect(
      result.current.isRowSelected(
        mockQueryResultBundle.queryResult?.queryResults.rows[0]!,
        mockQueryResultBundle.columnModels!,
      ),
    ).toBe(true)
    // Unselect the row / reset the selection
    act(() => {
      result.current.setSelectedRows([])
    })

    expect(result.current.selectedRows).toEqual([])
    expect(result.current.hasSelectedRows).toBe(false)
    expect(
      result.current.isRowSelected(
        mockQueryResultBundle.queryResult?.queryResults.rows[0]!,
        mockQueryResultBundle.columnModels!,
      ),
    ).toBe(false)
  })

  it('uses primary key comparison when specified', () => {
    const primaryKey = ['id', 'name']
    // Make sure the mock data has the primary key columns
    primaryKey.forEach(k => {
      expect(
        mockQueryResultBundle.columnModels!.find(cm => cm.name === k),
      ).toBeDefined()
    })
    const { result } = renderTableRowSelectionStateHook()
    act(() => {
      result.current.setIsRowSelectionVisible(true)
      result.current.setRowSelectionPrimaryKey(primaryKey)
    })

    expect(result.current.isRowSelectionVisible).toBe(true)
    expect(result.current.selectedRows).toEqual([])
    expect(result.current.hasSelectedRows).toBe(false)

    // Select a row
    act(() => {
      result.current.setSelectedRows([
        mockQueryResultBundle.queryResult?.queryResults.rows[0]!,
      ])
    })

    expect(result.current.selectedRows).toEqual([
      mockQueryResultBundle.queryResult?.queryResults.rows[0]!,
    ])
    expect(result.current.hasSelectedRows).toBe(true)

    const numColumns = mockQueryResultBundle.columnModels!.length
    const rowToCompare: Row = { values: new Array(numColumns) }
    // None of the data matches, so this row is not selected
    expect(
      result.current.isRowSelected(
        rowToCompare,
        mockQueryResultBundle.columnModels!,
      ),
    ).toBe(false)

    // Set the 'id' cell to match. This is only a partial key match, so the row should not be selected
    const idColumnIndex = mockQueryResultBundle.columnModels!.findIndex(
      col => col.name === 'id',
    )
    rowToCompare.values[idColumnIndex] =
      result.current.selectedRows[0].values[idColumnIndex]
    expect(
      result.current.isRowSelected(
        rowToCompare,
        mockQueryResultBundle.columnModels!,
      ),
    ).toBe(false)

    // Set the name. Since the full primary key matches, isRowSelected should be true
    const nameColumnIndex = mockQueryResultBundle.columnModels!.findIndex(
      col => col.name === 'name',
    )
    rowToCompare.values[nameColumnIndex] =
      result.current.selectedRows[0].values[nameColumnIndex]
    expect(
      result.current.isRowSelected(
        rowToCompare,
        mockQueryResultBundle.columnModels!,
      ),
    ).toBe(true)

    // Clear the selection
    act(() => {
      result.current.setSelectedRows([])
    })

    expect(result.current.selectedRows).toEqual([])
    expect(
      result.current.isRowSelected(
        rowToCompare,
        mockQueryResultBundle.columnModels!,
      ),
    ).toBe(false)
  })

  it('uses rowId comparison if no primary key is specified', () => {
    // Make sure the mock data has row IDs
    expect(
      mockQueryResultBundle.queryResult?.queryResults.rows[0].rowId,
    ).toBeDefined()
    const { result } = renderTableRowSelectionStateHook()
    act(() => {
      result.current.setIsRowSelectionVisible(true)
    })
    expect(result.current.isRowSelectionVisible).toBe(true)
    expect(result.current.selectedRows).toEqual([])
    expect(result.current.hasSelectedRows).toBe(false)

    // Select a row
    act(() => {
      result.current.setSelectedRows([
        mockQueryResultBundle.queryResult?.queryResults.rows[0]!,
      ])
    })

    const numColumns = mockQueryResultBundle.columnModels!.length
    const rowWithMatchingRowId: Row = {
      rowId: mockQueryResultBundle.queryResult?.queryResults.rows[0].rowId,
      values: new Array(numColumns),
    }
    expect(
      result.current.isRowSelected(
        rowWithMatchingRowId,
        mockQueryResultBundle.columnModels!,
      ),
    ).toBe(true)

    // Clear the selection
    act(() => {
      result.current.setSelectedRows([])
    })

    expect(result.current.selectedRows).toEqual([])
    expect(
      result.current.isRowSelected(
        rowWithMatchingRowId,
        mockQueryResultBundle.columnModels!,
      ),
    ).toBe(false)
  })

  it('uses deep equality comparison if no primary key is specified and no rowId exists', () => {
    // Make sure the mock data does not have row IDs
    const mockQueryResultBundleWithRowIdsRemoved = cloneDeep(
      mockQueryResultBundle,
    )
    mockQueryResultBundleWithRowIdsRemoved.queryResult?.queryResults.rows.forEach(
      (row: Row) => {
        delete row.rowId
      },
    )

    const { result } = renderTableRowSelectionStateHook()
    act(() => {
      result.current.setIsRowSelectionVisible(true)
    })
    expect(result.current.isRowSelectionVisible).toBe(true)
    expect(result.current.selectedRows).toEqual([])
    expect(result.current.hasSelectedRows).toBe(false)

    // Select a row
    act(() => {
      result.current.setSelectedRows([
        mockQueryResultBundleWithRowIdsRemoved.queryResult?.queryResults
          .rows[0]!,
      ])
    })

    const numColumns =
      mockQueryResultBundleWithRowIdsRemoved.columnModels!.length
    // Since we're using deep equality, changing one value will cause the row to not be considered 'selected`
    const rowWithAllButOneValueMatching = cloneDeep(
      mockQueryResultBundleWithRowIdsRemoved.queryResult!.queryResults.rows[0],
    )
    rowWithAllButOneValueMatching.values[numColumns - 1] = 'different value'
    expect(
      result.current.isRowSelected(
        rowWithAllButOneValueMatching,
        mockQueryResultBundle.columnModels!,
      ),
    ).toBe(false)
  })
})
