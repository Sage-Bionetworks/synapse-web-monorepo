import classNames from 'classnames'
import { DataGridRow } from '../DataGridTypes'
import { SelectionWithId } from 'react-datasheet-grid/dist/types'
import { Column } from 'react-datasheet-grid'

export function getCellClassName(params: {
  rowData: DataGridRow
  rowIndex: number
  columnId?: string
  selectedRowIndex: number | null
  lastSelection?: SelectionWithId | null
  colValues?: Column[]
}): string | undefined {
  const {
    rowData,
    rowIndex,
    columnId,
    selectedRowIndex,
    lastSelection,
    colValues,
  } = params

  const isSelected = selectedRowIndex === rowIndex
  const cellValidationResults = rowData.__cellValidationResults
  const isInvalid =
    cellValidationResults && columnId && cellValidationResults.has(columnId)

  const classList: string[] = []

  if (isSelected) {
    classList.push('cell-row-selected')
  }

  // Add selection styling based on lastSelection
  let isInSelection = false
  if (lastSelection && columnId && colValues) {
    isInSelection =
      rowIndex >= lastSelection.min.row &&
      rowIndex <= lastSelection.max.row &&
      colValues.findIndex(col => col.id === columnId) >=
        lastSelection.min.col &&
      colValues.findIndex(col => col.id === columnId) <= lastSelection.max.col

    if (isInSelection) {
      classList.push('cell-selected')
    }
  }

  if (isInvalid) {
    classList.push('cell-invalid')
  }

  return classList.length ? classNames(classList) : undefined
}
