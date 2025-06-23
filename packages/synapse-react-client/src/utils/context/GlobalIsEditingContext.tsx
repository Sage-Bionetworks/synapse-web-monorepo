import noop from 'lodash-es/noop'
import {
  createContext,
  PropsWithChildren,
  useContext,
  useSyncExternalStore,
} from 'react'

type GlobalIsEditingContextType = {
  /** If true, the user is editing a resource and should be presented with a warning before navigating away or performing
   * some other action that will destroy the unsaved changes */
  isEditing: boolean
  /** Function to set the editing state. This should be called when the user starts or stops editing a resource */
  setIsEditing: (value: boolean) => void
}

const GlobalIsEditingContext = createContext<GlobalIsEditingContextType>({
  isEditing: false,
  setIsEditing: noop,
})

type UnsubscribeFn = () => void
type SubscribeFn = (callback: () => void) => UnsubscribeFn
export type IsEditingStore = {
  subscribe: SubscribeFn
  getSnapshot: () => boolean
  setIsEditing: (value: boolean) => void
}
type GlobalIsEditingContextProviderProps = PropsWithChildren<IsEditingStore>

/**
 * Provider for context that tracks whether the user is currently editing a resource, to be used to prevent the user from
 * navigating away before changes are saved.
 *
 * This context provider does not itself implement the logic to prevent navigation, but provides an interface for
 * synchronizing with the editing state tracked in the application.
 */
export function GlobalIsEditingContextProvider(
  props: GlobalIsEditingContextProviderProps,
) {
  const { subscribe, getSnapshot, setIsEditing, children } = props

  const isEditing = useSyncExternalStore(subscribe, getSnapshot, () => false)

  return (
    <GlobalIsEditingContext.Provider value={{ isEditing, setIsEditing }}>
      {children}
    </GlobalIsEditingContext.Provider>
  )
}

/**
 * Hook to access the global editing context so the application can prevent navigation away from a page if a resource is being edited.
 */
export function useGlobalIsEditingContext(): GlobalIsEditingContextType {
  const context = useContext(GlobalIsEditingContext)
  if (context === undefined) {
    console.warn(
      'useGlobalIsEditingContext should be used within a GlobalIsEditingContextProvider. Editing state will not be tracked!',
    )
    return {
      isEditing: false,
      setIsEditing: () => {
        console.warn(
          'setIsEditing called outside of a GlobalIsEditingContextProvider. Editing state will not be tracked!',
        )
      },
    }
  }
  return context
}
