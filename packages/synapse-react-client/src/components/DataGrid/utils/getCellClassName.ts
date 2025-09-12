import classNames from 'classnames'
import { DataGridRow } from '../DataGridTypes'

export function getCellClassName(params: {
  rowData: DataGridRow
  rowIndex: number
  columnId?: string
  selectedRowIndex: number | null
}): string | undefined {
  const { rowData, rowIndex, columnId, selectedRowIndex } = params

  const isSelected = selectedRowIndex === rowIndex
  const cellValidationResults = rowData.__cellValidationResults

  const classList: string[] = []
  if (isSelected) {
    classList.push('cell-row-selected')
  }

  if (cellValidationResults && columnId) {
    if (cellValidationResults.has(columnId)) {
      classList.push('cell-invalid')
    }
  }

  return classList.length ? classNames(classList) : undefined
}
