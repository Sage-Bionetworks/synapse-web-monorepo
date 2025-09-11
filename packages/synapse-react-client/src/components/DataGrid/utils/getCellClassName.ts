import classNames from 'classnames'
import { extractUniqueValidationFieldNames } from './parseValidationColumns'
import { DataGridRow } from '../DataGridTypes'

export function getCellClassName(params: {
  rowData: DataGridRow
  rowIndex: number
  columnId?: string
  selectedRowIndex: number | null
}): string | undefined {
  const { rowData, rowIndex, columnId, selectedRowIndex } = params

  const isSelected = selectedRowIndex === rowIndex
  const validationMessages = rowData.__validationResults?.allValidationMessages

  const classList: string[] = []
  if (isSelected) {
    classList.push('cell-row-selected')
  }

  if (validationMessages && columnId) {
    const invalidFields =
      extractUniqueValidationFieldNames(validationMessages) || []
    if (invalidFields.length) {
      const invalidSet = new Set(invalidFields.map(f => f.toLowerCase()))
      if (invalidSet.has(columnId.toLowerCase())) {
        classList.push('cell-invalid')
      }
    }
  }

  return classList.length ? classNames(classList) : undefined
}
