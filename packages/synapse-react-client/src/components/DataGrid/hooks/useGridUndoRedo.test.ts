import { renderHook, act } from '@testing-library/react'
import { vi } from 'vitest'
import { GridAction, useGridUndoRedo } from './useGridUndoRedo'
import { convertActionToModelChange } from '../utils/convertActionToModelChange'

vi.mock('../utils/convertActionToModelChange', () => ({
  convertActionToModelChange: vi.fn(
    (action: GridAction, direction: 'undo' | 'redo' = 'undo') => ({
      inverse: action,
      direction,
    }),
  ),
}))

describe('useGridUndoRedo', () => {
  const mockOnApplyModelChange = vi.fn()

  beforeEach(() => {
    mockOnApplyModelChange.mockClear()
  })

  describe('Undo functionality', () => {
    it('should initialize with empty undo stack', () => {
      const { result } = renderHook(() =>
        useGridUndoRedo(mockOnApplyModelChange),
      )
      expect(result.current.undoPreview).toBeNull()
    })

    it('should add action to undo stack', () => {
      const { result } = renderHook(() =>
        useGridUndoRedo(mockOnApplyModelChange),
      )
      const action = {
        type: 'CREATE' as const,
        rowIndex: 0,
        newValue: { id: '1' },
      }

      act(() => {
        result.current.addToUndoStack(action)
      })

      expect(result.current.undoPreview).toEqual({
        lastType: 'CREATE',
        sameTypeCount: 1,
        totalActions: 1,
      })
    })

    it('should clear undo stack', () => {
      const { result } = renderHook(() =>
        useGridUndoRedo(mockOnApplyModelChange),
      )
      act(() => {
        result.current.addToUndoStack({
          type: 'CREATE' as const,
          rowIndex: 0,
          newValue: { id: '1' },
        })
        result.current.clearUndoStack()
      })

      expect(result.current.undoPreview).toBeNull()
    })

    it('should handle undo when stack is empty', () => {
      const { result } = renderHook(() =>
        useGridUndoRedo(mockOnApplyModelChange),
      )
      act(() => {
        result.current.handleUndo()
      })
      expect(mockOnApplyModelChange).not.toHaveBeenCalled()
    })

    it('should count consecutive actions of same type', () => {
      const { result } = renderHook(() =>
        useGridUndoRedo(mockOnApplyModelChange),
      )
      act(() => {
        result.current.addToUndoStack({
          type: 'CREATE' as const,
          rowIndex: 0,
          newValue: { id: '1' },
        })
        result.current.addToUndoStack({
          type: 'CREATE' as const,
          rowIndex: 1,
          newValue: { id: '2' },
        })
        result.current.addToUndoStack({
          type: 'UPDATE' as const,
          rowIndex: 0,
          previousValue: { id: '1' },
          newValue: { id: '1-updated' },
        })
      })

      expect(result.current.undoPreview).toEqual({
        lastType: 'UPDATE',
        sameTypeCount: 1,
        totalActions: 3,
      })
    })

    it('should remove the last action from the undo stack when handleUndo is called', () => {
      const { result } = renderHook(() =>
        useGridUndoRedo(mockOnApplyModelChange),
      )

      const action: GridAction = {
        type: 'CREATE',
        rowIndex: 0,
        newValue: { id: '1' },
      }

      act(() => {
        result.current.addToUndoStack(action)
      })

      // Confirm the action is in the stack
      expect(result.current.undoPreview?.totalActions).toBe(1)
      expect(result.current.undoPreview?.lastType).toBe('CREATE')

      // Perform undo
      act(() => {
        result.current.handleUndo()
      })

      // The action should be removed from the stack
      expect(result.current.undoPreview).toBeNull()

      // onApplyModelChange should still have been called with the inverse
      expect(mockOnApplyModelChange).toHaveBeenCalled()
      // Update this line to expect both parameters
      expect(convertActionToModelChange).toHaveBeenCalledWith(action, 'undo')
    })

    it('should undo multiple actions one by one', () => {
      const { result } = renderHook(() =>
        useGridUndoRedo(mockOnApplyModelChange),
      )

      const actions: GridAction[] = [
        { type: 'CREATE', rowIndex: 0, newValue: { id: '1' } },
        {
          type: 'UPDATE',
          rowIndex: 0,
          previousValue: { id: '1' },
          newValue: { id: '1-updated' },
        },
      ]

      act(() => {
        actions.forEach(action => result.current.addToUndoStack(action))
      })

      expect(result.current.undoPreview?.totalActions).toBe(2)

      act(() => result.current.handleUndo())
      expect(result.current.undoPreview?.totalActions).toBe(1)

      act(() => result.current.handleUndo())
      expect(result.current.undoPreview).toBeNull()

      expect(mockOnApplyModelChange).toHaveBeenCalledTimes(2)
    })
  })

  describe('Redo functionality', () => {
    it('should initialize with empty redo stack', () => {
      const { result } = renderHook(() =>
        useGridUndoRedo(mockOnApplyModelChange),
      )
      expect(result.current.redoPreview).toBeNull()
    })

    it('should move action from redo stack to undo stack when handleRedo is called', () => {
      const { result } = renderHook(() =>
        useGridUndoRedo(mockOnApplyModelChange),
      )

      const action: GridAction = {
        type: 'CREATE',
        rowIndex: 0,
        newValue: { id: '1' },
      }

      // Add action to undo stack and then undo it to move it to redo stack
      act(() => result.current.addToUndoStack(action))
      act(() => result.current.handleUndo())

      expect(result.current.redoPreview?.totalActions).toBe(1)

      act(() => result.current.handleRedo())

      // After redo, the action should be removed from the redo stack and added back to the undo stack
      expect(result.current.redoPreview).toBeNull()
      expect(result.current.undoPreview?.totalActions).toBe(1)

      expect(mockOnApplyModelChange).toHaveBeenCalledTimes(2)
      expect(convertActionToModelChange).toHaveBeenCalledWith(action, 'redo')
    })

    it('should redo multiple actions one by one', () => {
      const { result } = renderHook(() =>
        useGridUndoRedo(mockOnApplyModelChange),
      )

      const actions: GridAction[] = [
        { type: 'CREATE', rowIndex: 0, newValue: { id: '1' } },
        {
          type: 'UPDATE',
          rowIndex: 0,
          previousValue: { id: '1' },
          newValue: { id: '1-updated' },
        },
      ]

      act(() => {
        actions.forEach(action => result.current.addToUndoStack(action))
      })

      expect(result.current.undoPreview?.totalActions).toBe(2)

      act(() => result.current.handleUndo())
      expect(result.current.undoPreview?.totalActions).toBe(1)

      act(() => result.current.handleUndo())
      expect(result.current.undoPreview).toBeNull()

      act(() => result.current.handleRedo()) // Redo CREATE
      expect(result.current.redoPreview?.totalActions).toBe(1)

      act(() => result.current.handleRedo()) // Redo Update
      expect(result.current.redoPreview).toBeNull()

      expect(mockOnApplyModelChange).toHaveBeenCalledTimes(4)
    })
  })
})
