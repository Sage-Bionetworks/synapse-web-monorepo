import { useState } from 'react'

/** Returns a value created once on mount and kept stable for the component's lifetime. */
export function useConstant<T>(init: () => T): T {
  // oxlint-disable-next-line react/hook-use-state -- intentionally no setter; the value never changes
  const [value] = useState(init)
  return value
}
