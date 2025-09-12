import { renderHook, act } from '@testing-library/react'
import { useStack } from './useStack'

describe('useStack', () => {
  it('should initialize with an empty stack', () => {
    const { result } = renderHook(() => useStack())
    expect(result.current.stack).toEqual([])
  })

  it('should push items onto the stack', () => {
    const { result } = renderHook(() => useStack())
    act(() => {
      result.current.push(1)
    })
    expect(result.current.stack).toEqual([1])
  })

  it('should return the correct size of the stack', () => {
    const { result } = renderHook(() => useStack())
    act(() => {
      result.current.push(1)
      result.current.push(2)
    })
    expect(result.current.size).toBe(2)
  })

  it('should handle max stack size', () => {
    const { result } = renderHook(() => useStack<number>([], 2))
    act(() => {
      result.current.push(1)
      result.current.push(2)
      result.current.push(3)
    })
    expect(result.current.stack).toEqual([2, 3])
  })

  it('should pop items off the stack', () => {
    const { result } = renderHook(() => useStack())
    let popped
    act(() => {
      result.current.push(1)
      result.current.push(2)
    })
    act(() => {
      popped = result.current.pop()
    })
    expect(popped).toBe(2)
    expect(result.current.stack).toEqual([1])
  })

  it('should clear the stack', () => {
    const { result } = renderHook(() => useStack())
    act(() => {
      result.current.push(1)
      result.current.push(2)
      result.current.clear()
    })
    expect(result.current.stack).toEqual([])
  })

  it('should peek at the top item without removing it', () => {
    const { result } = renderHook(() => useStack())
    act(() => {
      result.current.push(1)
      result.current.push(2)
    })
    expect(result.current.peek()).toBe(2)
    expect(result.current.stack).toEqual([1, 2])
  })

  it('isEmpty should return true for an empty stack', () => {
    const { result } = renderHook(() => useStack())
    expect(result.current.isEmpty()).toBe(true)
  })

  it('isEmpty should return false for a non-empty stack', () => {
    const { result } = renderHook(() => useStack())
    act(() => {
      result.current.push(1)
    })
    expect(result.current.isEmpty()).toBe(false)
  })
})
