import GridMenuButton from '@/components/DataGrid/components/GridMenuButton/GridMenuButton'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'
import { Menu, MenuItem } from '@mui/material'
import { useCallback, useEffect, useState } from 'react'
import { DataGridRow, Operation } from '../DataGridTypes'
import { ModelChange } from '../utils/applyModelChange'
import { convertActionToModelChange } from '../utils/convertActionToModelChange'
import { useStack } from './useStack'

/**
 * Represents a single action in the grid that can be undone or redone
 */
export type SingleGridAction = {
  type: 'CREATE' | 'DELETE' | 'UPDATE'
  rowIndex: number
  previousValue?: DataGridRow
  newValue?: DataGridRow
}

/**
 * Composite action for batch undo/redo
 */
export type CompositeGridAction = {
  type: 'COMPOSITE'
  actions: SingleGridAction[]
}

/**
 * GridAction can be a single or composite action
 */
export type GridAction = SingleGridAction | CompositeGridAction

/**
 * Helper to batch multiple single actions into a composite action
 */
export function batchGridActions(
  actions: SingleGridAction[],
): CompositeGridAction {
  return {
    type: 'COMPOSITE',
    actions,
  }
}

const MAX_UNDO_STEPS = 100
const MAX_REDO_STEPS = 100

/**
 * Hook to manage undo/redo functionality for a grid backed by a CRDT model.
 *
 * @param onApplyModelChange - Function to apply model changes and commit
 */
export function useGridUndoRedo(
  onApplyModelChange: (change: ModelChange) => void,
) {
  // Tracks the stack of undoable actions in LIFO order
  const undoStack = useStack<GridAction>([], MAX_UNDO_STEPS)
  const redoStack = useStack<GridAction>([], MAX_REDO_STEPS)

  // Separate state for undo and redo menus
  const [undoAnchorEl, setUndoAnchorEl] = useState<null | HTMLElement>(null)
  const [redoAnchorEl, setRedoAnchorEl] = useState<null | HTMLElement>(null)
  const undoOpen = Boolean(undoAnchorEl)
  const redoOpen = Boolean(redoAnchorEl)

  const handleUndoClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setUndoAnchorEl(event.currentTarget)
  }

  const handleRedoClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setRedoAnchorEl(event.currentTarget)
  }

  const handleUndoClose = () => setUndoAnchorEl(null)
  const handleRedoClose = () => setRedoAnchorEl(null)

  // Generate preview information for the undo menu
  const getUndoPreview = useCallback(() => {
    if (undoStack.isEmpty()) return null

    const lastAction = undoStack.peek()
    let lastType: string
    let sameTypeCount = 0

    if (lastAction.type === 'COMPOSITE') {
      lastType = 'COMPOSITE'
      // Count consecutive composites from the end
      for (let i = undoStack.stack.length - 1; i >= 0; i--) {
        if (undoStack.stack[i].type === 'COMPOSITE') {
          sameTypeCount++
        } else {
          break
        }
      }
    } else {
      lastType = lastAction.type
      for (let i = undoStack.stack.length - 1; i >= 0; i--) {
        if (undoStack.stack[i].type === lastType) {
          sameTypeCount++
        } else {
          break
        }
      }
    }

    return {
      lastType,
      sameTypeCount,
      totalActions: undoStack.size,
    }
  }, [undoStack])

  // Generate preview information for the redo menu
  const getRedoPreview = useCallback(() => {
    if (redoStack.isEmpty()) return null

    const lastAction = redoStack.peek()
    let lastType: string
    let sameTypeCount = 0

    if (lastAction.type === 'COMPOSITE') {
      lastType = 'COMPOSITE'
      // Always treat composite as a single atomic action for preview
      sameTypeCount = 1
    } else {
      lastType = lastAction.type
      for (let i = redoStack.stack.length - 1; i >= 0; i--) {
        if (redoStack.stack[i].type === lastType) {
          sameTypeCount++
        } else {
          break
        }
      }
    }

    return {
      lastType,
      sameTypeCount,
      totalActions: redoStack.size,
    }
  }, [redoStack])

  const undoPreview = getUndoPreview()
  const redoPreview = getRedoPreview()

  /**
   * Undo the most recent action
   */
  const handleUndo = useCallback(() => {
    if (undoStack.isEmpty()) return
    const actionToUndo = undoStack.pop()
    if (actionToUndo) {
      // If composite, undo all child actions in reverse order
      if (actionToUndo.type === 'COMPOSITE') {
        for (let i = actionToUndo.actions.length - 1; i >= 0; i--) {
          const child = actionToUndo.actions[i]
          const inverseOp = convertActionToModelChange(child, 'undo')
          if (inverseOp) {
            onApplyModelChange(inverseOp)
          }
        }
        // Push the composite action itself to the redo stack
        redoStack.push(actionToUndo)
      } else {
        const inverseOperation = convertActionToModelChange(
          actionToUndo,
          'undo',
        )
        if (!inverseOperation) return
        onApplyModelChange(inverseOperation)
        // Push the single action to the redo stack
        redoStack.push(actionToUndo)
      }
    }
    handleUndoClose()
  }, [onApplyModelChange, undoStack, redoStack])

  /**
   * Redo the most recent undone action
   */
  const handleRedo = useCallback(() => {
    if (redoStack.isEmpty()) return

    const actionToRedo = redoStack.pop()

    if (actionToRedo) {
      // If composite, redo all child actions in order
      if (actionToRedo.type === 'COMPOSITE') {
        for (let i = 0; i < actionToRedo.actions.length; i++) {
          const child = actionToRedo.actions[i]
          const originalOp = convertActionToModelChange(child, 'redo')
          if (originalOp) {
            onApplyModelChange(originalOp)
          }
        }
        // Push the composite action itself back to the undo stack
        undoStack.push(actionToRedo)
      } else {
        const originalOperation = convertActionToModelChange(
          actionToRedo,
          'redo',
        )
        if (!originalOperation) return
        onApplyModelChange(originalOperation)
        // Push the single action back to the undo stack
        undoStack.push(actionToRedo)
      }
    }
    handleRedoClose()
  }, [redoStack, undoStack, onApplyModelChange])

  // Keyboard shortcuts for both undo and redo
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (
        (event.ctrlKey && event.key === 'z' && !event.shiftKey) ||
        (event.metaKey && event.key === 'z' && !event.shiftKey)
      ) {
        event.preventDefault()
        handleUndo()
      } else if (
        (event.ctrlKey && event.key === 'y') ||
        (event.ctrlKey && event.shiftKey && event.key === 'z') ||
        (event.metaKey && event.shiftKey && event.key === 'z')
      ) {
        event.preventDefault()
        handleRedo()
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => {
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [handleUndo, handleRedo])

  const addToUndoStack = (action: GridAction) => {
    undoStack.push(action)
  }

  const clearUndoStack = () => undoStack.clear()

  const clearRedoStack = () => redoStack.clear()

  const addOperationsToUndoStack = (
    operations: Operation[],
    rowValues: DataGridRow[],
    newValue: DataGridRow[],
  ) => {
    // Clear redo stack since new changes invalidate redo history
    clearRedoStack()

    const batch: SingleGridAction[] = []

    for (const operation of operations) {
      const start = operation.fromRowIndex
      const end = operation.toRowIndex

      if (operation.type === 'CREATE') {
        for (let i = start; i < end; i++) {
          const newRow = newValue[i]
          batch.push({
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
          batch.push({
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
          batch.push({
            type: 'DELETE',
            rowIndex: start + idx,
            previousValue: row,
          })
        })
      }
    }
    console.log('Adding to undo stack:', batch)
    if (batch.length === 1) {
      addToUndoStack(batch[0])
    } else if (batch.length > 1) {
      addToUndoStack(batchGridActions(batch))
    }
  }

  const undoUI = (
    <>
      <GridMenuButton
        variant={'outlined'}
        aria-controls={undoOpen ? 'undo-menu' : undefined}
        aria-haspopup="true"
        onClick={handleUndoClick}
        disabled={!undoPreview}
        endIcon={<KeyboardArrowDownIcon />}
      >
        Undo {undoPreview && `(${undoPreview.totalActions})`}
      </GridMenuButton>
      <Menu
        id="undo-menu"
        anchorEl={undoAnchorEl}
        open={undoOpen}
        onClose={handleUndoClose}
      >
        {undoPreview ? (
          <MenuItem key="lastAction" onClick={handleUndo}>
            Undo last {undoPreview.lastType.toLowerCase()} action
          </MenuItem>
        ) : (
          <MenuItem disabled>No actions to undo</MenuItem>
        )}
      </Menu>
    </>
  )

  const redoUI = (
    <>
      <GridMenuButton
        variant={'outlined'}
        aria-controls={redoOpen ? 'redo-menu' : undefined}
        aria-haspopup="true"
        onClick={handleRedoClick}
        disabled={!redoPreview}
        endIcon={<KeyboardArrowDownIcon />}
      >
        Redo {redoPreview && `(${redoPreview.totalActions})`}
      </GridMenuButton>
      <Menu
        id="redo-menu"
        anchorEl={redoAnchorEl}
        open={redoOpen}
        onClose={handleRedoClose}
      >
        {redoPreview ? (
          <MenuItem key="lastAction" onClick={handleRedo}>
            Redo last {redoPreview.lastType.toLowerCase()} action
          </MenuItem>
        ) : (
          <MenuItem disabled>No actions to redo</MenuItem>
        )}
      </Menu>
    </>
  )

  return {
    // Undo
    undoPreview,
    handleUndo,
    addToUndoStack,
    clearUndoStack,
    addOperationsToUndoStack,
    undoUI,
    undoTotalActions: undoPreview ? undoPreview.totalActions : 0,

    // Redo
    redoPreview,
    redoUI,
    redoTotalActions: redoPreview ? redoPreview.totalActions : 0,
    handleRedo,
    clearRedoStack,
  }
}
