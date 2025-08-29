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

        // Reverse so the newest action is undone first
        actionsToUndo = consecutiveActions.reverse()
        setUndoStack(newUndoStack)
        break
      }
      case 'allActions':
        // Later changes depend on earlier ones so undo from newest to oldest, then clear the stack
        actionsToUndo = [...undoStack].reverse()
        setUndoStack([])
        break
    }

    // Apply undo operations to the current model
    const model = modelRef.current
    if (!model) return console.error('No model available for undo')

    // Build a map of rows to undo updates for.
    // This handles the "undo consecutive actions of the same type" use case:
    //   - Ensure each row is restored once to its oldest state in the group,
    //     avoiding intermediate overwrites
    const updateMap = new Map<number, UndoableAction>()

    actionsToUndo.forEach(action => {
      if (action.type === 'UPDATE') {
        // Only keep the first (oldest) update for each row
        if (!updateMap.has(action.rowIndex)) {
          updateMap.set(action.rowIndex, action)
        }
      }
    })

    // Undo DELETEs from lowest to highest rowIndex to safely restore original positions
    const deleteActions = actionsToUndo
      .filter(action => action.type === 'DELETE')
      .sort((a, b) => a.rowIndex - b.rowIndex)

    // Undo CREATEs from highest to lowest rowIndex to safely remove rows without shifting indices
    const createActions = actionsToUndo
      .filter(action => action.type === 'CREATE')
      .sort((a, b) => b.rowIndex - a.rowIndex)

    // Doesn't change row order, keep the same
    const updateActions = actionsToUndo.filter(
      action => action.type === 'UPDATE',
    )

    // Process actions in the correct order
    // 1. Restoring deleted rows first ensures all original positions exist before applying updates or deletes.
    // 2. Applying updates next ensures row values are restored correctly while all rows are at their proper indices.
    // 3. Removing newly created rows last prevents shifting indices that would break updates or deletions.
    const orderedActions = [
      ...deleteActions,
      ...updateActions,
      ...createActions,
    ]

    orderedActions.forEach(action => {
      const rowsArr = model.api.arr(['rows'])

      if (action.type === 'CREATE') {
        // Remove the created row
        rowsArr?.del(action.rowIndex, 1)
        createdRowIds.delete(action.rowId)
      }

      if (action.type === 'UPDATE') {
        // Only process if this is the action we kept in the map (the oldest one)
        const keptAction = updateMap.get(action.rowIndex)
        if (keptAction === action) {
          // Restore the oldest previous value
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
      }

      if (action.type === 'DELETE') {
        // Re-insert the deleted row
        if (action.previousValue) {
          const { columnNames } = model.api.getSnapshot()

          // Create the row data for the model
          const rowData = columnNames.map(
            colName => action.previousValue![colName] || '',
          )

          // Insert the row into the model
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
