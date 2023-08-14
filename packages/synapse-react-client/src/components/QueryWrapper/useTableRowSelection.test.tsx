import useTableRowSelection from './useTableRowSelection'
import { act, renderHook } from '@testing-library/react'
import { mockTableEntity } from '../../mocks/entity/mockTableEntity'
import { mockQueryResultBundle } from '../../mocks/mockFileViewQuery'
import { mockFileViewEntity } from '../../mocks/entity/mockEntity'
import { QueryResultBundle, Row } from '@sage-bionetworks/synapse-types'
import { cloneDeep } from 'lodash-es'

describe('useTableRowSelection tests', () => {
  it('hides rowSelection by default', () => {
    const { result } = renderHook(() =>
      useTableRowSelection({
        isRowSelectionVisible: undefined, // !
        entity: mockTableEntity,
        columnModels: mockQueryResultBundle.columnModels,
      }),
    )

    expect(result.current.isRowSelectionVisible).toBe(false)
    expect(result.current.hasSelectedRows).toBe(false)
  })

  it('allows selecting and unselecting rows', () => {
    const { result } = renderHook(() =>
      useTableRowSelection({
        isRowSelectionVisible: true,
        entity: mockTableEntity,
        columnModels: mockQueryResultBundle.columnModels,
      }),
    )

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
      result.current.getIsRowSelected(
        mockQueryResultBundle.queryResult?.queryResults.rows[0]!,
      ),
    ).toBe(true)
    // Unselect the row / reset the selection
    act(() => {
      result.current.setSelectedRows([])
    })

    expect(result.current.selectedRows).toEqual([])
    expect(result.current.hasSelectedRows).toBe(false)
    expect(
      result.current.getIsRowSelected(
        mockQueryResultBundle.queryResult?.queryResults.rows[0]!,
      ),
    ).toBe(false)
  })

  it('uses primary key comparison for file views and datasets with `id` column, even when unspecified', () => {
    // Make sure the mock data has an `id` column
    expect(
      mockQueryResultBundle.columnModels!.find(cm => cm.name === 'id'),
    ).toBeDefined()

    const { result } = renderHook(() =>
      useTableRowSelection({
        isRowSelectionVisible: true,
        entity: mockFileViewEntity,
        columnModels: mockQueryResultBundle.columnModels,
      }),
    )

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
    const idColumnIndex = mockQueryResultBundle.columnModels!.findIndex(
      col => col.name === 'id',
    )
    const rowWithMatchingPK: Row = { values: new Array(numColumns) }
    // Make sure the ID matches
    rowWithMatchingPK.values[idColumnIndex] =
      result.current.selectedRows[0].values[idColumnIndex]
    // The row data ONLY matches on the ID column, but since that's the primary key, getIsRowSelected should be true
    expect(result.current.getIsRowSelected(rowWithMatchingPK)).toBe(true)

    // Clear the selection
    act(() => {
      result.current.setSelectedRows([])
    })

    expect(result.current.selectedRows).toEqual([])
    expect(result.current.getIsRowSelected(rowWithMatchingPK)).toBe(false)
  })

  it('uses primary key comparison when specified', () => {
    const primaryKey = ['id', 'name']
    // Make sure the mock data has the primary key columns
    primaryKey.forEach(k => {
      expect(
        mockQueryResultBundle.columnModels!.find(cm => cm.name === k),
      ).toBeDefined()
    })

    const { result } = renderHook(() =>
      useTableRowSelection({
        isRowSelectionVisible: true,
        entity: mockFileViewEntity,
        columnModels: mockQueryResultBundle.columnModels,
        rowSelectionPrimaryKey: primaryKey,
      }),
    )

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
    expect(result.current.getIsRowSelected(rowToCompare)).toBe(false)

    // Set the 'id' cell to match. This is only a partial key match, so the row should not be selected
    const idColumnIndex = mockQueryResultBundle.columnModels!.findIndex(
      col => col.name === 'id',
    )
    rowToCompare.values[idColumnIndex] =
      result.current.selectedRows[0].values[idColumnIndex]
    expect(result.current.getIsRowSelected(rowToCompare)).toBe(false)

    // Set the name. Since the full primary key matches, getIsRowSelected should be true
    const nameColumnIndex = mockQueryResultBundle.columnModels!.findIndex(
      col => col.name === 'name',
    )
    rowToCompare.values[nameColumnIndex] =
      result.current.selectedRows[0].values[nameColumnIndex]
    expect(result.current.getIsRowSelected(rowToCompare)).toBe(true)

    // Clear the selection
    act(() => {
      result.current.setSelectedRows([])
    })

    expect(result.current.selectedRows).toEqual([])
    expect(result.current.getIsRowSelected(rowToCompare)).toBe(false)
  })

  it('uses rowId comparison if no primary key is specified', () => {
    // Make sure the mock data has row IDs
    expect(
      mockQueryResultBundle.queryResult?.queryResults.rows[0].rowId,
    ).toBeDefined()

    const { result } = renderHook(() =>
      useTableRowSelection({
        isRowSelectionVisible: true,
        entity: mockTableEntity, // must not use file view or dataset
        columnModels: mockQueryResultBundle.columnModels,
      }),
    )

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
    expect(result.current.getIsRowSelected(rowWithMatchingRowId)).toBe(true)

    // Clear the selection
    act(() => {
      result.current.setSelectedRows([])
    })

    expect(result.current.selectedRows).toEqual([])
    expect(result.current.getIsRowSelected(rowWithMatchingRowId)).toBe(false)
  })

  it('uses deep equality comparison if no primary key is specified and no rowId exists', () => {
    // Make sure the mock data does not have row IDs
    const mockQueryResultBundleWithRowIdsRemoved = cloneDeep(
      mockQueryResultBundle,
    ) as QueryResultBundle
    mockQueryResultBundleWithRowIdsRemoved.queryResult?.queryResults.rows.forEach(
      row => {
        delete row.rowId
      },
    )

    const { result } = renderHook(() =>
      useTableRowSelection({
        isRowSelectionVisible: true,
        entity: mockTableEntity, // must not use file view or dataset
        columnModels: mockQueryResultBundleWithRowIdsRemoved.columnModels,
      }),
    )

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
    ) as Row
    rowWithAllButOneValueMatching.values[numColumns - 1] = 'different value'
    expect(result.current.getIsRowSelected(rowWithAllButOneValueMatching)).toBe(
      false,
    )
  })
})
