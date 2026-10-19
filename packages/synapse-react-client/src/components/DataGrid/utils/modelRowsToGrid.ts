import {
  DataGridRow,
  GridModel,
  GridModelSnapshot,
} from '@/components/DataGrid/DataGridTypes'
import { isValidationUpToDateForRow } from '@/components/DataGrid/utils/isValidationUpToDateForRow'
import { ValidationResults } from '@sage-bionetworks/synapse-types'
import { GRID_ROW_REACT_KEY_PROPERTY } from './DataGridUtils'
import logicalTimestampToString from '@/components/DataGrid/utils/logicalTimestampToString'
import { extractColumnValidationMessages } from './extractColumnValidationMessages'
import { getRemovedColumnIndices } from './getRemovedColumnIndices'

/**
 * Derives the validation state shown in the grid for a row. Messages attributed to removed columns are
 * omitted because those columns are not displayed; they reappear once the column is restored.
 */
function getDisplayedRowValidation(
  validationResults: ValidationResults,
  removedColumnNames: ReadonlySet<string>,
): Pick<DataGridRow, '__validationStatus' | '__cellValidationResults'> {
  const { isValid, allValidationMessages } = validationResults
  if (!allValidationMessages) {
    return { __validationStatus: isValid ? 'valid' : 'invalid' }
  }

  const displayedColumnMessages = new Map<string, string[]>()
  let removedColumnMessageCount = 0
  extractColumnValidationMessages(allValidationMessages).forEach(
    (messages, columnName) => {
      if (removedColumnNames.has(columnName)) {
        removedColumnMessageCount += messages.length
      } else {
        displayedColumnMessages.set(columnName, messages)
      }
    },
  )

  // Show the row as valid only when every one of its errors belongs to a removed column. Errors that
  // could not be attributed to any column still mark the row invalid.
  const allErrorsAreInRemovedColumns =
    removedColumnMessageCount > 0 &&
    removedColumnMessageCount === allValidationMessages.length

  return {
    __validationStatus:
      isValid || allErrorsAreInRemovedColumns ? 'valid' : 'invalid',
    __cellValidationResults: displayedColumnMessages,
  }
}

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
  const removedColumnNames = new Set(
    getRemovedColumnIndices(columnNames, columnOrder).map(
      index => columnNames[index],
    ),
  )
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
      Object.assign(
        rowObj,
        getDisplayedRowValidation(
          rowObj.__validationResults,
          removedColumnNames,
        ),
      )
    }

    if (!isValidationUpToDateForRow(model, rowIndex)) {
      rowObj.__validationStatus = 'pending'
    }

    return rowObj
  })
  return gridRows
}
