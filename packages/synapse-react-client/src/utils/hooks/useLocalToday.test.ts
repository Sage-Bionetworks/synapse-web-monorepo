import { act, renderHook } from '@testing-library/react'
import { useLocalToday } from './useLocalToday'

describe('useLocalToday', () => {
  beforeEach(() => {
    vi.useFakeTimers({ toFake: ['Date', 'setTimeout', 'clearTimeout'] })
  })
  afterEach(() => {
    vi.useRealTimers()
  })

  it('returns the local date, and moves to the next day at local midnight', () => {
    vi.setSystemTime(new Date(2027, 0, 15, 23, 59, 59))
    const { result } = renderHook(() => useLocalToday())
    expect(result.current).toBe('2027-01-15')

    act(() => {
      vi.advanceTimersByTime(999)
    })
    expect(result.current).toBe('2027-01-15')

    act(() => {
      vi.advanceTimersByTime(1)
    })
    expect(result.current).toBe('2027-01-16')

    act(() => {
      vi.advanceTimersByTime(24 * 60 * 60 * 1000)
    })
    expect(result.current).toBe('2027-01-17')
  })
})
