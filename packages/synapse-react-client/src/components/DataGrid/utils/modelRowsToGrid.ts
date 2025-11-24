import {
  DataGridRow,
  GridModel,
  GridModelSnapshot,
} from '@/components/DataGrid/DataGridTypes'
import { isValidationUpToDateForRow } from '@/components/DataGrid/utils/isValidationUpToDateForRow'
import { GRID_ROW_REACT_KEY_PROPERTY } from './DataGridUtils'
import logicalTimestampToString from '@/components/DataGrid/utils/logicalTimestampToString'
import { extractColumnValidationMessages } from './extractColumnValidationMessages'

/**
 * Convert model rows to a format suitable for DataSheetGrid
 * @param model
 * @param modelSnapshot
 */
export default function modelRowsToGrid(
  model: GridModel | null,
  modelSnapshot: GridModelSnapshot,
): DataGridRow[] {
  if (!model || !modelSnapshot) return []
  const { columnNames, columnOrder, rows } = modelSnapshot
  const gridRows = rows.map((row, rowIndex): DataGridRow => {
    const rowObj: DataGridRow = {}
    columnOrder.forEach((index: number) => {
      const columnName = columnNames[index]
      if (columnName) {
        rowObj[columnName] = row.data[index]
      }
    })

    // Embed the logical timestamp as a string for use as the React key (a stable value unique to each row)
    rowObj[GRID_ROW_REACT_KEY_PROPERTY] = logicalTimestampToString(
      model.api.obj(['rows', String(rowIndex)]).node.id,
    )

    rowObj.__validationResults = row.metadata?.rowValidation
    if (rowObj.__validationResults) {
      rowObj.__validationStatus = rowObj.__validationResults?.isValid
        ? 'valid'
        : 'invalid'
    }

    if (!isValidationUpToDateForRow(model, rowIndex)) {
      rowObj.__validationStatus = 'pending'
    }

    // Parse the validation messages into a Map of column name to messages
    if (rowObj.__validationResults?.allValidationMessages) {
      rowObj.__cellValidationResults = extractColumnValidationMessages(
        rowObj.__validationResults.allValidationMessages,
      )
    }

    return rowObj
  })
  return gridRows
}
