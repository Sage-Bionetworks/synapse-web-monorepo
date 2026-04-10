import { renderHook, act } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { useCellChangeTracker, cellChangeKey } from './useCellChangeTracker'

describe('cellChangeKey', () => {
  it('encodes row and column as "rowIndex:colName"', () => {
    expect(cellChangeKey(0, 'myCol')).toBe('0:myCol')
    expect(cellChangeKey(5, 'status')).toBe('5:status')
    expect(cellChangeKey(99, 'col_with_underscores')).toBe(
      '99:col_with_underscores',
    )
  })
})

describe('useCellChangeTracker', () => {
  it('starts with an empty map', () => {
    const { result } = renderHook(() => useCellChangeTracker())
    expect(result.current.cellChanges.size).toBe(0)
  })

  it('sets a map entry keyed by cellChangeKey when recordChanges is called with isService: false', () => {
    const { result } = renderHook(() => useCellChangeTracker())

    act(() => {
      result.current.recordChanges(
        42,
        [{ rowIndex: 1, colName: 'name' }],
        false,
      )
    })

    expect(result.current.cellChanges.get(cellChangeKey(1, 'name'))).toBe(42)
  })

  it('deletes an existing entry when recordChanges is called with isService: true', () => {
    const { result } = renderHook(() => useCellChangeTracker())

    act(() => {
      result.current.recordChanges(
        42,
        [{ rowIndex: 1, colName: 'name' }],
        false,
      )
    })
    act(() => {
      result.current.recordChanges(0, [{ rowIndex: 1, colName: 'name' }], true)
    })

    expect(result.current.cellChanges.has(cellChangeKey(1, 'name'))).toBe(false)
  })

  it('does not crash and leaves the map unchanged when isService: true targets a cell not already in the map', () => {
    const { result } = renderHook(() => useCellChangeTracker())

    act(() => {
      result.current.recordChanges(
        42,
        [{ rowIndex: 0, colName: 'col1' }],
        false,
      )
    })
    const sizeBefore = result.current.cellChanges.size

    act(() => {
      result.current.recordChanges(
        0,
        [{ rowIndex: 5, colName: 'nonexistent' }],
        true,
      )
    })

    // Existing entries are untouched; the missing key is simply a no-op delete
    expect(result.current.cellChanges.size).toBe(sizeBefore)
    expect(result.current.cellChanges.get(cellChangeKey(0, 'col1'))).toBe(42)
  })

  it('returns early without updating state when the changes array is empty', () => {
    const { result } = renderHook(() => useCellChangeTracker())
    const mapBefore = result.current.cellChanges

    act(() => {
      result.current.recordChanges(1, [], false)
    })

    // Same reference means no setState call was triggered
    expect(result.current.cellChanges).toBe(mapBefore)
  })

  it('applies last-writer-wins: a second recordChanges call for the same cell overwrites the authorSid', () => {
    const { result } = renderHook(() => useCellChangeTracker())

    act(() => {
      result.current.recordChanges(
        10,
        [{ rowIndex: 0, colName: 'col1' }],
        false,
      )
    })
    act(() => {
      result.current.recordChanges(
        20,
        [{ rowIndex: 0, colName: 'col1' }],
        false,
      )
    })

    expect(result.current.cellChanges.get(cellChangeKey(0, 'col1'))).toBe(20)
  })

  it('produces a new Map reference on each recordChanges call so downstream useCallback deps detect the change', () => {
    const { result } = renderHook(() => useCellChangeTracker())

    act(() => {
      result.current.recordChanges(1, [{ rowIndex: 0, colName: 'a' }], false)
    })
    const ref1 = result.current.cellChanges

    act(() => {
      result.current.recordChanges(2, [{ rowIndex: 0, colName: 'b' }], false)
    })

    expect(result.current.cellChanges).not.toBe(ref1)
  })

  it('clears all entries and exposes an empty map after clearChanges', () => {
    const { result } = renderHook(() => useCellChangeTracker())

    act(() => {
      result.current.recordChanges(
        1,
        [
          { rowIndex: 0, colName: 'a' },
          { rowIndex: 1, colName: 'b' },
        ],
        false,
      )
    })
    expect(result.current.cellChanges.size).toBe(2)

    act(() => {
      result.current.clearChanges()
    })

    expect(result.current.cellChanges.size).toBe(0)
  })
})
