import { renderHook, act } from '@testing-library/react'
import { vi } from 'vitest'
import {
  GridAction,
  SingleGridAction,
  CompositeGridAction,
  useGridUndoRedo,
  batchGridActions,
} from './useGridUndoRedo'
import { convertActionToModelChange } from '../utils/convertActionToModelChange'

describe('Composite undo/redo functionality', () => {
  const mockOnApplyModelChange = vi.fn()

  beforeEach(() => {
    mockOnApplyModelChange.mockClear()
  })

  it('should batch actions using batchGridActions helper', () => {
    const actions: SingleGridAction[] = [
      { type: 'CREATE', rowIndex: 0, newValue: { id: '1' } },
      {
        type: 'UPDATE',
        rowIndex: 0,
        previousValue: { id: '1' },
        newValue: { id: '1-updated' },
      },
    ]
    const composite = batchGridActions(actions)
    expect(composite.type).toBe('COMPOSITE')
    expect(composite.actions).toEqual(actions)
  })

  it('should push and undo a composite action', () => {
    const { result } = renderHook(() => useGridUndoRedo(mockOnApplyModelChange))
    const actions: SingleGridAction[] = [
      { type: 'CREATE', rowIndex: 0, newValue: { id: '1' } },
      {
        type: 'UPDATE',
        rowIndex: 0,
        previousValue: { id: '1' },
        newValue: { id: '1-updated' },
      },
    ]
    const composite: CompositeGridAction = batchGridActions(actions)

    act(() => {
      result.current.addToUndoStack(composite)
    })
    expect(result.current.undoPreview?.totalActions).toBe(1)
    expect(result.current.undoPreview?.lastType).toBe('COMPOSITE')

    act(() => {
      result.current.handleUndo()
    })
    expect(result.current.undoPreview).toBeNull()
    // Should call onApplyModelChange for each child action in reverse order
    expect(mockOnApplyModelChange).toHaveBeenCalledTimes(2)
    expect(convertActionToModelChange).toHaveBeenNthCalledWith(
      1,
      actions[1],
      'undo',
    )
    expect(convertActionToModelChange).toHaveBeenNthCalledWith(
      2,
      actions[0],
      'undo',
    )
  })

  it('should redo a composite action', () => {
    const { result } = renderHook(() => useGridUndoRedo(mockOnApplyModelChange))
    const actions: SingleGridAction[] = [
      { type: 'CREATE', rowIndex: 0, newValue: { id: '1' } },
      {
        type: 'UPDATE',
        rowIndex: 0,
        previousValue: { id: '1' },
        newValue: { id: '1-updated' },
      },
    ]
    const composite: CompositeGridAction = batchGridActions(actions)
    act(() => {
      result.current.addToUndoStack(composite)
    })
    // Undo the composite action (move it to redo stack)
    act(() => {
      result.current.handleUndo()
    })
    // After one undo, redoPreview should show the composite action
    expect(result.current.redoPreview).toEqual({
      lastType: 'COMPOSITE',
      sameTypeCount: 1,
      totalActions: 1,
    })

    // Redo the composite action (move it back to undo stack)
    act(() => {
      result.current.handleRedo()
    })
    // After redo, redoPreview should be null and undoPreview should show the composite action
    expect(result.current.redoPreview).toBeNull()
    expect(result.current.undoPreview).not.toBeNull()
    expect(result.current.undoPreview?.lastType).toBe('COMPOSITE')
    expect(result.current.undoPreview?.totalActions).toBe(1)
    // Should call onApplyModelChange for each child action in order
    expect(mockOnApplyModelChange).toHaveBeenCalledTimes(4)
  })
})

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
      expect(result.current.redoTotalActions).toBe(0)
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

      expect(result.current.redoTotalActions).toBe(1)
      expect(result.current.undoTotalActions).toBe(0)

      act(() => result.current.handleRedo())

      // After redo, the action should be removed from the redo stack and added back to the undo stack
      expect(result.current.redoTotalActions).toBe(0)
      expect(result.current.redoPreview).toBeNull()
      expect(result.current.undoTotalActions).toBe(1)
      expect(result.current.undoPreview?.lastType).toBe('CREATE')

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
      expect(result.current.undoPreview?.totalActions).toBe(1)
      expect(result.current.undoPreview?.lastType).toBe('CREATE')

      act(() => result.current.handleRedo()) // Redo Update
      expect(result.current.redoPreview).toBeNull()
      expect(result.current.redoTotalActions).toBe(0)
      expect(result.current.undoPreview?.totalActions).toBe(2)
      expect(result.current.undoPreview?.lastType).toBe('UPDATE')

      expect(mockOnApplyModelChange).toHaveBeenCalledTimes(4)
    })
  })
})
