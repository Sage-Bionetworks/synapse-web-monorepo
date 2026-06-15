import { IsEditingStore } from '@/utils/context/GlobalIsEditingContext'

/**
 * Creates a functional, in-memory {@link IsEditingStore} for use in tests.
 *
 * This store holds real state and **notifies its subscribers when the value
 * changes** — mirroring the behavior of the GlobalApplicationState-backed
 * store used in the Synapse Web Client (SWC).
 *
 * This is essential for reproducing editing-state-driven re-renders in tests.
 */
export function createTestIsEditingStore(initialValue = false): IsEditingStore {
  let value = initialValue
  const listeners = new Set<() => void>()

  return {
    subscribe: callback => {
      listeners.add(callback)
      return () => {
        listeners.delete(callback)
      }
    },
    getSnapshot: () => value,
    setIsEditing: (next: boolean) => {
      // Match GlobalApplicationStateImpl: only notify subscribers on a change.
      if (next !== value) {
        value = next
        listeners.forEach(listener => listener())
      }
    },
  }
}
