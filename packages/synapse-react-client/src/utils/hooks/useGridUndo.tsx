import {
  DataGridRow,
  GridModel,
  Operation,
} from '@/components/DataGrid/DataGridTypes'
import { useMemo, useState } from 'react'
import { DataGridWebSocket } from '@/components/DataGrid/DataGridWebSocket'
import { applyModelChange } from '../functions/applyModelChange'

/**
 * Represents a single undoable action in the grid
 */
export type UndoableAction = {
  type: 'CREATE' | 'DELETE' | 'UPDATE'
  rowId: string | number | boolean | null | undefined
  rowIndex: number
  previousValue?: DataGridRow
  newValue?: DataGridRow
}

/**
 * Hook to manage undo functionality for a grid backed by a CRDT model.
 *
 * @param modelRef - Ref to the current GridModel instance
 * @param websocketInstance - WebSocket to sync changes with server
 * @param modelRowsToGrid - Function to convert model snapshot to UI row array
 * @param handleChange - Optional callback invoked after undoing changes
 */
export function useGridUndo(
  model: GridModel | null,
  websocketInstance: DataGridWebSocket | null,
  modelRowsToGrid: (modelSnapshot: any) => DataGridRow[],
  handleChange?: (
    rows: DataGridRow[],
    operations: Operation[],
    isUndoing?: boolean,
  ) => void,
) {
  // Tracks the stack of undoable actions in LIFO order
  const [undoStack, setUndoStack] = useState<UndoableAction[]>([])

  // Track row IDs by type of operation for quick reference
  const createdRowIds = useMemo(() => new Set(), [])
  const deletedRowIds = useMemo(() => new Set(), [])
  const updatedRowIds = useMemo(() => new Set(), [])

  // Generate preview information for the undo menu to show users exactly what will be undone
  // Returns: lastType (CREATE/UPDATE/DELETE), sameTypeCount (consecutive actions of same type),
  // totalActions (all actions in stack).
  const getUndoPreview = () => {
    if (undoStack.length === 0) return null

    const lastAction = undoStack[undoStack.length - 1]
    const lastType = lastAction.type

    // Count consecutive actions of same type from the end
    let sameTypeCount = 0
    for (let i = undoStack.length - 1; i >= 0; i--) {
      if (undoStack[i].type === lastType) {
        sameTypeCount++
      } else {
        break
      }
    }

    return {
      lastType,
      sameTypeCount,
      totalActions: undoStack.length,
    }
  }

  const undoPreview = getUndoPreview()

  /**
   * Undo one or more actions based on the chosen type:
   * - 'lastAction': undo only the most recent action
   * - 'consecutiveActions': undo all consecutive actions of the same type as the last one
   * - 'allActions': undo everything in the undo stack
   */
  const handleUndo = (
    undoType: 'lastAction' | 'consecutiveActions' | 'allActions',
    handleClose?: () => void,
  ) => {
    if (undoStack.length === 0) return

    let actionsToUndo: UndoableAction[] = []

    switch (undoType) {
      case 'lastAction': {
        const newUndoStack = [...undoStack]
        actionsToUndo = [newUndoStack.pop()!]
        setUndoStack(newUndoStack)
        break
      }
      case 'consecutiveActions': {
        // Undo all consecutive actions of the same type as the last action
        const newUndoStack = [...undoStack]
        const lastType = newUndoStack.at(-1)?.type
        const consecutiveActions: typeof actionsToUndo = []

        while (newUndoStack.at(-1)?.type === lastType) {
          consecutiveActions.push(newUndoStack.pop()!)
        }

        actionsToUndo = consecutiveActions
        setUndoStack(newUndoStack)
        break
      }
      case 'allActions':
        // Undo all actions from newest to oldest
        actionsToUndo = [...undoStack].reverse()
        setUndoStack([])
        break
    }

    // Access the current model to apply undo operations
    if (!model) return console.error('No model available for undo')

    // Process each action in LIFO order
    actionsToUndo.forEach(action => {
      if (action.type === 'CREATE') {
        // Undo CREATE by deleting the row
        applyModelChange(model, {
          type: 'DELETE',
          rowIndex: action.rowIndex,
        })
        createdRowIds.delete(action.rowId)
      }

      if (action.type === 'UPDATE') {
        // Undo UPDATE by restoring the previous row values
        if (action.previousValue) {
          applyModelChange(model, {
            type: 'UPDATE',
            rowIndex: action.rowIndex,
            updatedData: action.previousValue,
          })
        }
        updatedRowIds.delete(action.rowId)
      }

      if (action.type === 'DELETE') {
        // Undo DELETE by recreating the row with previous values
        if (action.previousValue) {
          applyModelChange(model, {
            type: 'CREATE',
            rowIndex: action.rowIndex,
            rowData: action.previousValue,
          })
        }
        deletedRowIds.delete(action.rowId)
      }
    })

    // Send the undo changes to server
    websocketInstance?.sendPatch()

    // Update UI to reflect the undo
    const updatedRows = modelRowsToGrid(model.api.getSnapshot())
    handleChange?.(updatedRows, [], true)

    handleClose?.()
  }

  /**
   * Push a new action to the undo stack
   */
  const addToUndoStack = (action: UndoableAction) => {
    setUndoStack(prev => [...prev, action])
  }

  /**
   * Clear all undoable actions
   */
  const clearUndoStack = () => {
    setUndoStack([])
  }

  return {
    undoPreview,
    handleUndo,
    addToUndoStack,
    clearUndoStack,
    createdRowIds,
    deletedRowIds,
    updatedRowIds,
  }
}
