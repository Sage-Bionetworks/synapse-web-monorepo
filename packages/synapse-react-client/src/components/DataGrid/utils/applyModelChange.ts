import { DataGridRow, GridModel } from '@/components/DataGrid/DataGridTypes'
import { s } from 'json-joy/lib/json-crdt-patch'

/**
 * Represents a change operation on the GridModel.
 */
export type ModelChange =
  | { type: 'CREATE'; rowIndex: number; rowData: DataGridRow }
  | { type: 'DELETE'; rowIndex: number; count?: number }
  | { type: 'UPDATE'; rowIndex: number; updatedData: DataGridRow }

/**
 * Applies a single change operation (create, delete, or update) to the GridModel.
 *
 * @param model - The grid model to modify
 * @param change - The change to apply
 */
export function applyModelChange(model: GridModel, change: ModelChange) {
  const rowsArr = model.api.arr(['rows'])
  const { columnNames } = model.api.getSnapshot()

  switch (change.type) {
    case 'CREATE': {
      // Convert rowData object into a CRDT vector
      const rowData = columnNames.map(name => s.con(change.rowData[name] ?? ''))
      // Insert a new row object at the specified index
      rowsArr?.ins(change.rowIndex, [{ data: s.vec(...rowData) }])
      break
    }

    case 'DELETE':
      rowsArr?.del(change.rowIndex, change.count ?? 1)
      break

    case 'UPDATE': {
      Object.entries(change.updatedData).forEach(([key, value]) => {
        if (key.startsWith('_')) return // Skip internal properties like _rowId
        const colIndex = columnNames.indexOf(key)
        if (colIndex !== -1) {
          // Get the CRDT array of cell values for this row
          const rowVec = model.api.vec([
            'rows',
            String(change.rowIndex),
            'data',
          ])
          // Update the specific column with the new value
          rowVec?.set([[colIndex, s.con(value)]])
        }
      })
      break
    }
  }
}
