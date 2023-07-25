import { act, renderHook } from '@testing-library/react'
import useCommittedState from '../../../src/utils/hooks/useCommittedState'

describe('useCommittedState', () => {
  it('tracks two versions of state and updates on commit', () => {
    const initialState = {
      foo: 'bar',
    }

    const hook = renderHook(() => useCommittedState(initialState))

    expect(hook.result.current.committedState).toEqual(initialState)
    expect(hook.result.current.uncommittedState).toBe(
      hook.result.current.committedState,
    )
    expect(hook.result.current.isDirty).toBe(false)

    const newState = {
      foo: 'baz',
    }

    // Update the uncommitted state
    act(() => {
      hook.result.current.setUncommittedState(newState)
    })

    expect(hook.result.current.uncommittedState).not.toBe(
      hook.result.current.committedState,
    )
    expect(hook.result.current.committedState).toEqual(initialState)
    expect(hook.result.current.uncommittedState).toEqual(newState)
    expect(hook.result.current.isDirty).toBe(true)

    // Commit the state update transaction
    act(() => {
      hook.result.current.commit()
    })

    expect(hook.result.current.uncommittedState).toBe(
      hook.result.current.committedState,
    )
    expect(hook.result.current.committedState).toEqual(newState)
    expect(hook.result.current.uncommittedState).toEqual(newState)
    expect(hook.result.current.isDirty).toBe(false)
  })
})
