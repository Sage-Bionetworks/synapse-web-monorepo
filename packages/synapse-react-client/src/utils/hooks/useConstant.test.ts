import { renderHook } from '@testing-library/react'
import { useConstant } from './useConstant'

describe('useConstant', () => {
  it('creates the value once and returns the same instance on every render', () => {
    const init = vi.fn(() => ({ created: true }))
    const { result, rerender } = renderHook(() => useConstant(init))
    const firstValue = result.current

    rerender()
    rerender()

    expect(result.current).toBe(firstValue)
    expect(init).toHaveBeenCalledTimes(1)
  })
})
