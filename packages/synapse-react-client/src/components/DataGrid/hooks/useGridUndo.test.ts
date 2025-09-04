import { renderHook, act } from '@testing-library/react'
import { vi } from 'vitest'
import { useGridUndo } from './useGridUndo'

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
})
