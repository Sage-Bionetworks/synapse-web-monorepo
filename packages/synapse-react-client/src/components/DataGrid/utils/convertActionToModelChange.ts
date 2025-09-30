import { GridAction } from '../hooks/useGridUndoRedo'
import { ModelChange } from '../utils/applyModelChange'

/**
 * Converts an GridAction to a ModelChange for either undo or redo operations.
 * @param action - The action to convert
 * @param direction - 'undo' applies the inverse, 'redo' applies the original
 */
export function convertActionToModelChange(
  action: GridAction,
  direction: 'undo' | 'redo',
): ModelChange | null {
  switch (action.type) {
    case 'CREATE':
      if (direction === 'undo') {
        // Undo CREATE => DELETE the row
        return { type: 'DELETE', rowIndex: action.rowIndex }
      } else {
        // Redo CREATE => recreate the row
        if (!action.newValue) return null
        return {
          type: 'CREATE',
          rowIndex: action.rowIndex,
          rowData: action.newValue,
        }
      }

    case 'UPDATE': {
      // Undo UPDATE => restore previous value
      const value =
        direction === 'undo' ? action.previousValue : action.newValue
      if (!value) return null

      return {
        type: 'UPDATE',
        rowIndex: action.rowIndex,
        updatedData: value,
      }
    }

    case 'DELETE':
      if (direction === 'undo') {
        // Undo DELETE => recreate row
        if (!action.previousValue) return null
        return {
          type: 'CREATE',
          rowIndex: action.rowIndex,
          rowData: action.previousValue,
        }
      } else {
        // Redo DELETE => delete the row again
        return { type: 'DELETE', rowIndex: action.rowIndex }
      }

    default:
      return null
  }
}
