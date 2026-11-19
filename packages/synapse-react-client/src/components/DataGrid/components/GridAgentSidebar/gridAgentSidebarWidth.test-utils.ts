import { GRID_AGENT_SIDEBAR_WIDTH_LOCALSTORAGE_KEY } from '@/utils/SynapseConstants'

/** The sidebar width saved in localStorage, or `null` if none is saved */
export function getStoredWidth() {
  const stored = localStorage.getItem(GRID_AGENT_SIDEBAR_WIDTH_LOCALSTORAGE_KEY)
  return stored === null ? null : (JSON.parse(stored) as number)
}

export function storeWidth(width: number) {
  localStorage.setItem(GRID_AGENT_SIDEBAR_WIDTH_LOCALSTORAGE_KEY, String(width))
}
