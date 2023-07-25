import React from 'react'

type UseCommittedStateReturn<T> = {
  committedState: T
  uncommittedState: T
  commit: () => void
  setUncommittedState: React.Dispatch<React.SetStateAction<T>>
  isDirty: boolean
}

/**
 * A hook that allows you to track an 'uncommitted' version of a state variable, and batch all state updates into
 * one transaction.
 * @param initialCommittedState
 */
export default function useCommittedState<T>(
  initialCommittedState: T,
): UseCommittedStateReturn<T> {
  const [committedState, setCommittedState] = React.useState<T>(
    initialCommittedState,
  )
  const [uncommittedState, setUncommittedState] = React.useState<T>(
    initialCommittedState,
  )

  const isDirty = committedState !== uncommittedState

  const commit = React.useCallback(() => {
    if (isDirty) {
      setCommittedState(uncommittedState)
    }
  }, [isDirty, uncommittedState])

  return {
    committedState,
    uncommittedState,
    commit,
    setUncommittedState,
    isDirty: committedState !== uncommittedState,
  }
}
