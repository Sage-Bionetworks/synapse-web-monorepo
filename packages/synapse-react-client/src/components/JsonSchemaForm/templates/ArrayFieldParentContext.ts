import { createContext, useContext } from 'react'

export type ArrayFieldParentContextType = {
  /**
   * Set when the array is the value of an additional property (a custom annotation), whose last item removes the
   * whole property rather than leaving an empty array.
   */
  removeProperty?: () => void
}

/**
 * Passes what an `ArrayFieldTemplate` knows about its array down to the `ArrayFieldItemTemplate` of each item, which
 * RJSF renders itself and hands only the item's own props.
 */
export const ArrayFieldParentContext =
  createContext<ArrayFieldParentContextType>({})

export function useArrayFieldParentContext(): ArrayFieldParentContextType {
  return useContext(ArrayFieldParentContext)
}
