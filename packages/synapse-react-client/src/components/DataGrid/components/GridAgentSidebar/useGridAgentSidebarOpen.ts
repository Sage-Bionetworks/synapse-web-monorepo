import { GRID_AGENT_SIDEBAR_OPEN_LOCALSTORAGE_KEY } from '@/utils/SynapseConstants'
import { useLocalStorageValue } from '@react-hookz/web'
import { useCallback } from 'react'

// localStorage can hold anything, so only a stored boolean counts; anything else means "never chosen"
const storedOpenOptions = {
  parse: (stored: string | null) =>
    stored === 'true' ? true : stored === 'false' ? false : null,
}

/**
 * Whether the GridAgentSidebar is open. It is open until the user closes it, and the user's
 * choice persists in localStorage across grids and page loads.
 */
export function useGridAgentSidebarOpen() {
  const { value: storedOpen, set: setStoredOpen } =
    useLocalStorageValue<boolean>(
      GRID_AGENT_SIDEBAR_OPEN_LOCALSTORAGE_KEY,
      storedOpenOptions,
    )
  const openSidebar = useCallback(() => setStoredOpen(true), [setStoredOpen])
  const closeSidebar = useCallback(() => setStoredOpen(false), [setStoredOpen])

  return { isOpen: storedOpen ?? true, openSidebar, closeSidebar }
}

export default useGridAgentSidebarOpen
