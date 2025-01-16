import { useCallback, useState } from 'react'

export interface UseSetReturn<T> {
  set: Omit<Set<T>, 'add' | 'delete' | 'clear'>
  add: (...items: T[]) => void
  remove: (item: T) => void
  clear: () => void
}

/**
 * Hook for storing an ES6 set in React state. Methods that mutate the set have been hidden via TypeScript,
 * so if you adhere to the type definitions, the set is essentially immutable.
 * Modifications to the set should only be done via the functions returned by the hook, which will create a new object to trigger rerendering.
 * @param initialState
 * @returns
 */
export function useSet<T>(initialState?: T[] | Set<T>): UseSetReturn<T> {
  const [set, setSet] = useState(new Set(initialState))

  const add = useCallback(
    (...items: T[]) => {
      const newSet = new Set(set)
      for (const item of items) {
        newSet.add(item)
      }
      setSet(newSet)
    },
    [set],
  )

  const remove = useCallback(
    (item: T) => {
      const newSet = new Set(set)
      newSet.delete(item)
      setSet(newSet)
    },
    [set],
  )

  const clear = useCallback(() => {
    setSet(new Set())
  }, [])

  return {
    set,
    add,
    remove,
    clear,
  }
}
