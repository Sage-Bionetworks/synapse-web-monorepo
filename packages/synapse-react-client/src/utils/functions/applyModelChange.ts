import { DataGridRow, GridModel } from '@/components/DataGrid/DataGridTypes'
import { s } from 'json-joy/lib/json-crdt-patch'

type ModelChange =
  | { type: 'CREATE'; rowIndex: number; rowData: DataGridRow }
  | { type: 'DELETE'; rowIndex: number; count?: number }
  | { type: 'UPDATE'; rowIndex: number; updatedData: DataGridRow }

export function applyModelChange(model: GridModel, change: ModelChange) {
  const rowsArr = model.api.arr(['rows'])
  const { columnNames } = model.api.getSnapshot()

  switch (change.type) {
    case 'CREATE': {
      const rowData = columnNames.map(name => s.con(change.rowData[name] ?? ''))
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
          const rowVec = model.api.vec([
            'rows',
            String(change.rowIndex),
            'data',
          ])
          rowVec?.set([[colIndex, s.con(value)]])
        }
      })
      break
    }
  }
}
