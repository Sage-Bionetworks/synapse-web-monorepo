import classNames from 'classnames'
import { extractValidationFieldNames } from './parseValidationColumns'
import { DataGridRow } from '../DataGridTypes'

export function getCellClassName(params: {
  rowData: DataGridRow
  rowIndex: number
  columnId?: string
  selectedRowIndex: number | null
}): string | undefined {
  const { rowData, rowIndex, columnId, selectedRowIndex } = params
  const validationMessages = rowData.__validationResults?.allValidationMessages
  if (!validationMessages) return undefined

  const invalidFields = extractValidationFieldNames(validationMessages) || []
  if (!invalidFields.length) return undefined
  if (!columnId) return undefined

  const invalidSet = new Set(invalidFields.map(f => f.toLowerCase()))
  if (!invalidSet.has(columnId.toLowerCase())) return undefined

  const safe = columnId.replace(/[^a-zA-Z0-9_-]/g, '-')
  return classNames('cell-invalid', `cell-invalid-field-${safe}`, {
    'cell-row-selected': selectedRowIndex === rowIndex,
  })
}
