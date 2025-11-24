import { DataGridRow, Operation } from '../DataGridTypes'
import { ModelChange } from './applyModelChange'

export function mapOperationsToModelChanges(
  operations: Operation[],
  newValue: DataGridRow[],
): ModelChange[] {
  const modelChanges: ModelChange[] = []

  operations.forEach(operation => {
    if (operation.type === 'CREATE') {
      // Add new rows to the model
      for (let i = operation.fromRowIndex; i < operation.toRowIndex; i++) {
        modelChanges.push({
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
        modelChanges.push({
          type: 'UPDATE',
          rowIndex: rowIndex,
          updatedData: newValue[rowIndex],
        })
      }
    }
    if (operation.type === 'DELETE') {
      modelChanges.push({
        type: 'DELETE',
        rowIndex: operation.fromRowIndex,
        count: operation.toRowIndex - operation.fromRowIndex,
      })
    }
  })
  return modelChanges
}
