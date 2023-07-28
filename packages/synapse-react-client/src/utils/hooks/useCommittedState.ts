import React, { useEffect, useState } from 'react'

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
 * @param onCommit
 */
export default function useCommittedState<T>(
  initialCommittedState: T,
  onCommit?: (newCommittedValue: T) => void,
): UseCommittedStateReturn<T> {
  const [committedState, setCommittedState] = useState<T>(initialCommittedState)
  const [uncommittedState, setUncommittedState] = useState<T>(
    initialCommittedState,
  )

  const [shouldCommit, setShouldCommit] = useState(false)

  const commit = React.useCallback(() => {
    setShouldCommit(true)
  }, [])

  // We must synchronize state on commit in a `useEffect` hook to ensure updates to `setUncommittedState` are completed
  // before we commit
  useEffect(() => {
    if (shouldCommit) {
      setCommittedState(uncommittedState)
      setShouldCommit(false)
      if (onCommit) {
        onCommit(uncommittedState)
      }
    }
  }, [shouldCommit, uncommittedState])

  return {
    committedState,
    uncommittedState,
    commit,
    setUncommittedState,
    isDirty: committedState !== uncommittedState,
  }
}
