import { renderHook, act } from '@testing-library/react'
import { vi } from 'vitest'
import { UndoableAction, useGridUndo } from './useGridUndo'
import { getInverseOperation } from '../utils/getInverseOperation'

vi.mock('../utils/getInverseOperation', () => ({
  getInverseOperation: vi.fn((action: UndoableAction) => ({ inverse: action })),
}))

describe('useGridUndo', () => {
  const mockOnApplyModelChange = vi.fn()

  beforeEach(() => {
    mockOnApplyModelChange.mockClear()
  })

  it('should initialize with empty undo stack', () => {
    const { result } = renderHook(() => useGridUndo(mockOnApplyModelChange))
    expect(result.current.undoPreview).toBeNull()
  })

  it('should add action to undo stack', () => {
    const { result } = renderHook(() => useGridUndo(mockOnApplyModelChange))
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
    const { result } = renderHook(() => useGridUndo(mockOnApplyModelChange))
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
    const { result } = renderHook(() => useGridUndo(mockOnApplyModelChange))
    act(() => {
      result.current.handleUndo()
    })
    expect(mockOnApplyModelChange).not.toHaveBeenCalled()
  })

  it('should count consecutive actions of same type', () => {
    const { result } = renderHook(() => useGridUndo(mockOnApplyModelChange))
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
    const { result } = renderHook(() => useGridUndo(mockOnApplyModelChange))

    const action: UndoableAction = {
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
    expect(getInverseOperation).toHaveBeenCalledWith(action)
  })

  it('should undo multiple actions one by one', () => {
    const { result } = renderHook(() => useGridUndo(mockOnApplyModelChange))

    const actions: UndoableAction[] = [
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
