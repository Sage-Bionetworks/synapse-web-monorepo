import { DataGridRow, GridModel, Operation } from '../DataGridTypes'
import { useState } from 'react'
import { DataGridWebSocket } from '@/components/DataGrid/DataGridWebSocket'
import { applyModelChange } from '../utils/applyModelChange'
import { Button, Menu, MenuItem } from '@mui/material'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'
import { getInverseOperation } from '../utils/getInverseOperation'
import { useStack } from './useStack'

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
 * @param model - current GridModel instance
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
  // const [undoStack, setUndoStack] = useState<UndoableAction[]>([])
  const undoStack = useStack<UndoableAction>([], 100) // 100 = max undo steps

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)
  const open = Boolean(anchorEl)

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = () => setAnchorEl(null)

  // Generate preview information for the undo menu to show users exactly what will be undone
  // Returns: lastType (CREATE/UPDATE/DELETE), sameTypeCount (consecutive actions of same type),
  // totalActions (all actions in stack).
  const getUndoPreview = () => {
    if (undoStack.isEmpty()) return null

    const lastAction = undoStack.peek()
    const lastType = lastAction.type

    // Count consecutive actions of same type from the end
    let sameTypeCount = 0
    for (let i = undoStack.stack.length - 1; i >= 0; i--) {
      if (undoStack.stack[i].type === lastType) {
        sameTypeCount++
      } else {
        break
      }
    }

    return {
      lastType,
      sameTypeCount,
      totalActions: undoStack.size,
    }
  }

  const undoPreview = getUndoPreview()

  /**
   * Undo one or more actions based on the chosen type:
   * - 'lastAction': undo only the most recent action
   */
  const handleUndo = (handleClose?: () => void) => {
    if (undoStack.isEmpty()) return

    const actionsToUndo: UndoableAction[] = []

    const last = undoStack.pop()
    if (last) actionsToUndo.push(last)

    if (!model) return console.error('No model available for undo')

    actionsToUndo.forEach(action => {
      const inverseOperation = getInverseOperation(action)
      if (!inverseOperation) return

      applyModelChange(model, inverseOperation)
    })

    // Send changes to server
    websocketInstance?.sendPatch()

    // Update UI
    const updatedRows = modelRowsToGrid(model.api.getSnapshot())
    handleChange?.(updatedRows, [], true)

    handleClose?.()
  }

  const addToUndoStack = (action: UndoableAction) => undoStack.push(action)

  const clearUndoStack = () => undoStack.clear()

  const undoUI = (
    <>
      <Button
        aria-controls={open ? 'undo-menu' : undefined}
        aria-haspopup="true"
        onClick={handleClick}
        disabled={!undoPreview}
        endIcon={<KeyboardArrowDownIcon />}
      >
        Undo {undoPreview && `(${undoPreview.totalActions})`}
      </Button>
      <Menu
        id="undo-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
      >
        {undoPreview ? (
          [
            <MenuItem key="lastAction" onClick={() => handleUndo(handleClose)}>
              Undo last {undoPreview.lastType.toLowerCase()} action
            </MenuItem>,
          ]
        ) : (
          <MenuItem disabled>No actions to undo</MenuItem>
        )}
      </Menu>
    </>
  )

  const addOperationsToUndoStack = (
    operations: Operation[],
    rowValues: DataGridRow[],
    newValue: DataGridRow[],
    genId: () => string | number = () => Math.random().toString(36).slice(2),
  ) => {
    for (const operation of operations) {
      const start = operation.fromRowIndex
      const end = operation.toRowIndex

      if (operation.type === 'CREATE') {
        for (let i = start; i < end; i++) {
          const newRow = newValue[i]
          const rowId = newRow?._rowId || genId()
          addToUndoStack({
            type: 'CREATE',
            rowId,
            rowIndex: i,
            newValue: newRow,
          })
        }
      }

      if (operation.type === 'UPDATE') {
        const oldVal = rowValues.slice(start, end)
        const newVal = newValue.slice(start, end)

        newVal.forEach((newRow: DataGridRow, idx: number) => {
          const oldRow = oldVal[idx]
          const rowIndex = start + idx
          addToUndoStack({
            type: 'UPDATE',
            rowId: newRow._rowId || undefined,
            rowIndex,
            previousValue: oldRow,
            newValue: newRow,
          })
        })
      }

      if (operation.type === 'DELETE') {
        const deletedRows = rowValues.slice(start, end)
        deletedRows.forEach((row, idx) => {
          addToUndoStack({
            type: 'DELETE',
            rowId: row._rowId,
            rowIndex: start + idx,
            previousValue: row,
          })
        })
      }
    }
  }

  return {
    undoPreview,
    handleUndo,
    addToUndoStack,
    clearUndoStack,
    addOperationsToUndoStack,
    undoUI,
  }
}
