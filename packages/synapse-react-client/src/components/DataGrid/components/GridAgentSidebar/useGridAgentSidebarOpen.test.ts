import { GRID_AGENT_SIDEBAR_OPEN_LOCALSTORAGE_KEY } from '@/utils/SynapseConstants'
import { act, renderHook } from '@testing-library/react'
import { useGridAgentSidebarOpen } from './useGridAgentSidebarOpen'

describe('useGridAgentSidebarOpen', () => {
  beforeEach(() => {
    localStorage.clear()
  })

  it('is open when the user has never chosen', () => {
    const { result } = renderHook(() => useGridAgentSidebarOpen())

    expect(result.current.isOpen).toBe(true)
  })

  it('stays closed in a new grid after being closed', () => {
    const { result, unmount } = renderHook(() => useGridAgentSidebarOpen())
    act(() => result.current.closeSidebar())
    expect(result.current.isOpen).toBe(false)
    unmount()

    const { result: nextGrid } = renderHook(() => useGridAgentSidebarOpen())

    expect(nextGrid.current.isOpen).toBe(false)
  })

  it('stays open in a new grid after being reopened', () => {
    localStorage.setItem(
      GRID_AGENT_SIDEBAR_OPEN_LOCALSTORAGE_KEY,
      JSON.stringify(false),
    )
    const { result, unmount } = renderHook(() => useGridAgentSidebarOpen())
    expect(result.current.isOpen).toBe(false)
    act(() => result.current.openSidebar())
    unmount()

    const { result: nextGrid } = renderHook(() => useGridAgentSidebarOpen())

    expect(nextGrid.current.isOpen).toBe(true)
  })

  // A stored value that isn't a boolean, such as the string "false", must not be read as a choice
  it.each(['"false"', '0', 'not json'])(
    'is open when the stored value is %s',
    stored => {
      localStorage.setItem(GRID_AGENT_SIDEBAR_OPEN_LOCALSTORAGE_KEY, stored)

      const { result } = renderHook(() => useGridAgentSidebarOpen())

      expect(result.current.isOpen).toBe(true)
    },
  )
})
