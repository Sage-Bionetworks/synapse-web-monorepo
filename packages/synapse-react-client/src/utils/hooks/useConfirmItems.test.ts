import { renderHook, act } from '@testing-library/react'
import useConfirmItems from './useConfirmItems'

describe('useConfirmItems', () => {
  it('should initialize with empty pending and confirmed items', () => {
    const { result } = renderHook(() => useConfirmItems())

    expect(result.current.pendingItems).toEqual([])
    expect(result.current.confirmedItems).toEqual([])
  })

  it('should add items to pending list', () => {
    const { result } = renderHook(() => useConfirmItems())

    act(() => {
      result.current.addItemsPendingConfirmation('item1', 'item2')
    })

    expect(result.current.pendingItems).toEqual(['item1', 'item2'])
  })

  it('should confirm items and move them to confirmed list', () => {
    const { result } = renderHook(() => useConfirmItems())

    let confirmedItemsResult: {
      confirmedItems: unknown[]
      pendingItems: unknown[]
    } | null = null
    act(() => {
      result.current.addItemsPendingConfirmation('item1', 'item2')
    })
    act(() => {
      confirmedItemsResult = result.current.confirmItem('item1')
    })

    expect(confirmedItemsResult).toEqual({
      pendingItems: ['item2'],
      confirmedItems: ['item1'],
    })
    expect(result.current.pendingItems).toEqual(['item2'])
    expect(result.current.confirmedItems).toEqual(['item1'])
  })

  it('should remove pending items', () => {
    const { result } = renderHook(() => useConfirmItems())

    let removePendingItemsResult: {
      confirmedItems: unknown[]
      pendingItems: unknown[]
    } | null = null
    act(() => {
      result.current.addItemsPendingConfirmation('item1', 'item2')
    })
    act(() => {
      removePendingItemsResult = result.current.removePendingItems('item1')
    })

    expect(removePendingItemsResult).toEqual({
      pendingItems: ['item2'],
      confirmedItems: [],
    })
    expect(result.current.pendingItems).toEqual(['item2'])
    expect(result.current.confirmedItems).toEqual([])
  })

  it('should clear all items', () => {
    const { result } = renderHook(() => useConfirmItems())

    act(() => {
      result.current.addItemsPendingConfirmation('item1', 'item2')
      result.current.confirmItem('item1')
      result.current.clear()
    })

    expect(result.current.pendingItems).toEqual([])
    expect(result.current.confirmedItems).toEqual([])
  })
})
