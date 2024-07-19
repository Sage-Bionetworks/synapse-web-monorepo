import { useState, useEffect } from 'react'

type UseFadeTransitionOpts<T = unknown> = {
  state: T | unknown
  fadeInTimeoutMs?: number
}

export function useFadeTransition<T = unknown>(opts: UseFadeTransitionOpts) {
  const { state, fadeInTimeoutMs = 0 } = opts
  const [delayedState, setDelayedState] = useState<T | unknown>(state)
  const [visible, setVisible] = useState(true)

  useEffect(() => {
    // Trigger fade out
    setVisible(false)

    // Wait for the fade out duration and then change content and fade in
    const timeoutId = setTimeout(() => {
      setDelayedState(state)
      setVisible(true)
    }, fadeInTimeoutMs)

    // Cleanup timeout if the component unmounts or if state changes again before timeout
    return () => clearTimeout(timeoutId)
  }, [state])

  return { delayedState, visible }
}
