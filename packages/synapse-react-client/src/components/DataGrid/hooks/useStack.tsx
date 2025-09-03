import { useCallback, useState } from 'react'

/**
 * Hook for managing a stack data structure
 * @param stack - Initial stack items
 * @param maxSize - Optional maximum stack size. When exceeded, oldest items are removed
 */ export function useStack<T>(stack: T[] = [], maxSize?: number) {
  const [currentStack, setCurrentStack] = useState<T[]>(stack)

  const push = useCallback(
    (item: T) => {
      setCurrentStack(prev => {
        //  Push a new item onto the top of the stack
        const newStack = [...prev, item]

        // Enforce maximum stack size by removing oldest element (bottom of stack)
        if (maxSize && newStack.length > maxSize) {
          newStack.shift()
        }

        return newStack
      })
    },
    [maxSize],
  )

  const pop = useCallback(() => {
    let popped: T | undefined
    setCurrentStack(prev => {
      if (prev.length === 0) {
        return prev
      }

      // preserve the popped item
      popped = prev[prev.length - 1]

      // Return a new array without the last element
      return prev.slice(0, -1)
    })
    return popped
  }, [])

  const peek = useCallback(() => {
    return currentStack[currentStack.length - 1]
  }, [currentStack])

  const clear = useCallback(() => {
    setCurrentStack([])
  }, [])

  const isEmpty = useCallback(() => currentStack.length === 0, [currentStack])

  return {
    stack: currentStack,
    push,
    pop,
    clear,
    peek,
    size: currentStack.length,
    isEmpty,
  }
}
