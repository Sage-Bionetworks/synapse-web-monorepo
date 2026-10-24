import {
  DataGridRow,
  GridModel,
  GridModelSnapshot,
} from '@/components/DataGrid/DataGridTypes'
import { isValidationUpToDateForRow } from '@/components/DataGrid/utils/isValidationUpToDateForRow'
import { GRID_ROW_REACT_KEY_PROPERTY } from './DataGridUtils'
import logicalTimestampToString from '@/components/DataGrid/utils/logicalTimestampToString'
import { getDisplayedRowValidation } from './getDisplayedRowValidation'
import { getRemovedColumnIndices } from './getRemovedColumnIndices'

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
  const allColumnNames = new Set(columnNames.filter(Boolean))
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
    Object.assign(
      rowObj,
      getDisplayedRowValidation({
        validationResults: rowObj.__validationResults,
        isValidationUpToDate: isValidationUpToDateForRow(model, rowIndex),
        columnNames: allColumnNames,
        removedColumnNames,
      }),
    )

    return rowObj
  })
  return gridRows
}
