import { useMemo } from 'react'
import * as React from 'react'

/**
 * Given a React state setter and a "mutually exclusive" setter, return a state setter that will always
 * set the mutually exclusive state value to `false` when the new state value is `true`.
 * @param setState
 * @param setMutuallyExclusiveState
 */
function mutuallyExclusiveSetterFactory(
  setState: React.Dispatch<React.SetStateAction<boolean>>,
  setMutuallyExclusiveState: React.Dispatch<React.SetStateAction<boolean>>,
): React.Dispatch<React.SetStateAction<boolean>> {
  return arg => {
    if (typeof arg === 'function') {
      setState(prev => {
        const next = arg(prev)
        if (next) {
          setMutuallyExclusiveState(false)
        }
        return next
      })
    } else {
      if (arg) {
        setState(true)
        setMutuallyExclusiveState(false)
      } else {
        setState(false)
      }
    }
  }
}

/**
 * Wrapper for two `useState` hooks where only one of the values can be true at a time.
 * @param initialValue1
 * @param initialValue2
 */
export function useMutuallyExclusiveState(
  initialValue1: boolean,
  initialValue2: boolean,
): [
  value1: boolean,
  setValue1: React.Dispatch<React.SetStateAction<boolean>>,
  value2: boolean,
  setValue2: React.Dispatch<React.SetStateAction<boolean>>,
] {
  if (initialValue1 && initialValue2) {
    throw new Error('initialValue1 and initialValue2 cannot both be true')
  }

  const [value1, _setValue1] = React.useState(initialValue1)
  const [value2, _setValue2] = React.useState(initialValue2)

  const setValue1 = useMemo(
    () => mutuallyExclusiveSetterFactory(_setValue1, _setValue2),
    [],
  )

  const setValue2 = useMemo(
    () => mutuallyExclusiveSetterFactory(_setValue2, _setValue1),
    [],
  )

  return [value1, setValue1, value2, setValue2]
}

export default useMutuallyExclusiveState
