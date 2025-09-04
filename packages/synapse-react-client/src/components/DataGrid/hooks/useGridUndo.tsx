import { DataGridRow, Operation } from '../DataGridTypes'
import { useCallback, useEffect, useState } from 'react'
import { ModelChange } from '../utils/applyModelChange'
import { Button, Menu, MenuItem } from '@mui/material'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'
import { getInverseOperation } from '../utils/getInverseOperation'
import { useStack } from './useStack'

/**
 * Represents a single undoable action in the grid
 */
export type UndoableAction = {
  type: 'CREATE' | 'DELETE' | 'UPDATE'
  rowIndex: number
  previousValue?: DataGridRow
  newValue?: DataGridRow
}

const MAX_UNDO_STEPS = 100
/**
 * Hook to manage undo functionality for a grid backed by a CRDT model.
 *
 * @param onApplyModelChange - Function to apply model changes and commit
 */
export function useGridUndo(onApplyModelChange: (change: ModelChange) => void) {
  // Tracks the stack of undoable actions in LIFO order
  const undoStack = useStack<UndoableAction>([], MAX_UNDO_STEPS)

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
  const handleUndo = useCallback(
    (handleClose?: () => void) => {
      if (undoStack.isEmpty()) return

      const actionToUndo = undoStack.pop()

      if (actionToUndo) {
        const inverseOperation = getInverseOperation(actionToUndo)

        if (!inverseOperation) return

        onApplyModelChange(inverseOperation)
      }

      handleClose?.()
    },
    [onApplyModelChange, undoStack],
  )

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (
        (event.ctrlKey && event.key === 'z') ||
        (event.metaKey && event.key === 'z')
      ) {
        event.preventDefault()
        handleUndo()
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => {
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [handleUndo, undoStack])

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
  ) => {
    for (const operation of operations) {
      const start = operation.fromRowIndex
      const end = operation.toRowIndex

      if (operation.type === 'CREATE') {
        for (let i = start; i < end; i++) {
          const newRow = newValue[i]
          addToUndoStack({
            type: 'CREATE',
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
