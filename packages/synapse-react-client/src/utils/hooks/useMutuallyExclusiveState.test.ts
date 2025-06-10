import { act, renderHook } from '@testing-library/react'
import useMutuallyExclusiveState from './useMutuallyExclusiveState'

describe('useMutuallyExclusiveState', () => {
  it('throws error if both initial state values are true', () => {
    const consoleErrorSpy = vi
      .spyOn(console, 'error')
      .mockImplementation(() => {})

    expect(() =>
      renderHook(() => useMutuallyExclusiveState(true, true)),
    ).toThrow()

    consoleErrorSpy.mockRestore()
  })
  it('allows both values to be false', () => {
    const hookReturn = renderHook(() => useMutuallyExclusiveState(false, false))
    // call setValue1(false)
    act(() => {
      hookReturn.result.current[1](false)
    })
    expect(hookReturn.result.current[0]).toEqual(false)
    expect(hookReturn.result.current[2]).toEqual(false)

    // call setValue2(false)
    act(() => {
      hookReturn.result.current[1](false)
    })
    expect(hookReturn.result.current[0]).toEqual(false)
    expect(hookReturn.result.current[2]).toEqual(false)
  })
  it('if value1 is true, value2 becomes false', () => {
    const hookReturn = renderHook(() => useMutuallyExclusiveState(false, true))
    // call setValue1(true)
    act(() => {
      hookReturn.result.current[1](true)
    })
    expect(hookReturn.result.current[0]).toEqual(true)
    expect(hookReturn.result.current[2]).toEqual(false)
  })
  it('if value2 is true, value1 becomes false', () => {
    const hookReturn = renderHook(() => useMutuallyExclusiveState(true, false))
    // call setValue2(true)
    act(() => {
      hookReturn.result.current[3](true)
    })
    expect(hookReturn.result.current[0]).toEqual(false)
    expect(hookReturn.result.current[2]).toEqual(true)
  })

  it('works with dispatcher', () => {
    const hookReturn = renderHook(() => useMutuallyExclusiveState(false, true))
    // flip value1
    act(() => {
      hookReturn.result.current[1](currentValue => !currentValue)
    })
    expect(hookReturn.result.current[0]).toEqual(true)
    expect(hookReturn.result.current[2]).toEqual(false)
  })
})
