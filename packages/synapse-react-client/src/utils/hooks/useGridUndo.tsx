import {
  DataGridRow,
  GridModel,
  Operation,
} from '@/components/DataGrid/DataGridTypes'
import { useMemo, useState } from 'react'
import { s } from 'json-joy/lib/json-crdt-patch'
import { DataGridWebSocket } from '@/components/DataGrid/DataGridWebSocket'

export type UndoableAction = {
  type: 'CREATE' | 'DELETE' | 'UPDATE'
  rowId: string | number | boolean | null | undefined
  rowIndex: number
  previousValue?: DataGridRow
  newValue?: DataGridRow
}

export function useGridUndo(
  modelRef: React.MutableRefObject<GridModel | null>,
  websocketInstance?: DataGridWebSocket | null,
  setRowValues?: (rows: DataGridRow[]) => void,
  modelRowsToGrid?: (modelSnapshot: any) => DataGridRow[],
  handleChange?: (
    rows: DataGridRow[],
    operations: Operation[],
    isUndoing?: boolean,
  ) => void,
) {
  const [undoStack, setUndoStack] = useState<UndoableAction[]>([])

  // Grid editing state sets
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

        // Keep in LIFO order (most recent first)
        actionsToUndo = consecutiveActions
        setUndoStack(newUndoStack)
        break
      }
      case 'allActions':
        // Process from newest to oldest (LIFO order)
        actionsToUndo = [...undoStack].reverse()
        setUndoStack([])
        break
    }

    // Apply undo operations to the current model
    const model = modelRef.current
    if (!model) return console.error('No model available for undo')

    // Process each action in LIFO order
    actionsToUndo.forEach(action => {
      const rowsArr = model.api.arr(['rows'])

      if (action.type === 'CREATE') {
        rowsArr?.del(action.rowIndex, 1)
        createdRowIds.delete(action.rowId)
      }

      if (action.type === 'UPDATE') {
        // Restore the previous value
        if (action.previousValue) {
          const { columnNames } = model.api.getSnapshot()

          Object.entries(action.previousValue).forEach(([key, value]) => {
            if (key.startsWith('_')) return // Skip metadata fields
            const columnIndex = columnNames.indexOf(key)
            if (columnIndex !== -1) {
              const rowVec = model.api.vec([
                'rows',
                String(action.rowIndex),
                'data',
              ])
              rowVec?.set([[columnIndex, s.con(value)]])
            }
          })
        }
        updatedRowIds.delete(action.rowId)
      }

      if (action.type === 'DELETE') {
        // Re-insert the deleted row at its original position
        if (action.previousValue) {
          const { columnNames } = model.api.getSnapshot()

          // Create the row data for the model
          const rowData = columnNames.map(
            colName => action.previousValue![colName] || '',
          )

          // Insert the row into the model at its original position
          rowsArr?.ins(action.rowIndex, [
            { data: s.vec(...rowData.map(s.con)) },
          ])
        }
        deletedRowIds.delete(action.rowId)
      }
    })

    // Send the undo changes to server
    websocketInstance?.sendPatch()

    // Update UI to reflect the undo
    if (setRowValues && modelRowsToGrid) {
      const updatedRows = modelRowsToGrid(model.api.getSnapshot())
      handleChange?.(updatedRows, [], true)
    }

    handleClose?.()
  }

  const addToUndoStack = (action: UndoableAction) => {
    setUndoStack(prev => [...prev, action])
  }

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
