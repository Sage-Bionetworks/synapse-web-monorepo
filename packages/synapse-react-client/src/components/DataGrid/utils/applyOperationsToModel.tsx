import { DataGridRow, GridModel, Operation } from '../DataGridTypes'
import { applyModelChange } from './applyModelChange'

export function applyOperationsToModel(
  operations: Operation[],
  newValue: DataGridRow[],
  oldValue: DataGridRow[],
  model: GridModel,
) {
  if (!model) return

  for (const operation of operations) {
    if (operation.type === 'CREATE') {
      // Add new rows to the model
      for (let i = operation.fromRowIndex; i < operation.toRowIndex; i++) {
        applyModelChange(model, {
          type: 'CREATE',
          rowIndex: i,
          rowData: newValue[i],
        })
      }
    }

    if (operation.type === 'UPDATE') {
      // Only update the specific rows and cells that changed
      for (
        let rowIndex = operation.fromRowIndex;
        rowIndex < operation.toRowIndex;
        rowIndex++
      ) {
        applyModelChange(model, {
          type: 'UPDATE',
          rowIndex: operation.fromRowIndex,
          updatedData: newValue[operation.fromRowIndex],
        })
      }
    }

    if (operation.type === 'DELETE') {
      applyModelChange(model, {
        type: 'DELETE',
        rowIndex: operation.fromRowIndex,
        count: operation.toRowIndex - operation.fromRowIndex,
      })
    }
  }
}
