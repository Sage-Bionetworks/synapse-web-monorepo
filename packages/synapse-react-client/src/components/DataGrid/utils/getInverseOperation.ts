import { UndoableAction } from '../hooks/useGridUndo'
import { ModelChange } from '../utils/applyModelChange'

/**
 * Converts an UndoableAction into its inverse ModelChange
 * that can be applied to revert the change.
 */
export function getInverseOperation(
  action: UndoableAction,
): ModelChange | null {
  switch (action.type) {
    case 'CREATE':
      // Undo CREATE => DELETE the row
      return { type: 'DELETE', rowIndex: action.rowIndex }

    case 'UPDATE':
      // Undo UPDATE => restore previous value
      if (!action.previousValue) return null
      return {
        type: 'UPDATE',
        rowIndex: action.rowIndex,
        updatedData: action.previousValue,
      }

    case 'DELETE':
      // Undo DELETE => recreate row
      if (!action.previousValue) return null
      return {
        type: 'CREATE',
        rowIndex: action.rowIndex,
        rowData: action.previousValue,
      }

    default:
      return null
  }
}
