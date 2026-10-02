import { useEffect, useLayoutEffect, useRef } from 'react'
import { useLocation } from 'react-router'

/**
 * Remembers the window's scroll offset for each pathname the router visits and restores it when that
 * pathname is revisited, so leaving a long list for a sibling route and coming back returns the user
 * to where they were. A pathname reached for the first time scrolls to the top instead.
 *
 * The initial render does not scroll, and neither does navigation that only changes search params
 * (e.g. applying a filter).
 *
 * Call this from a layout route's element so that it stays mounted across the navigations it governs.
 * Only appropriate for routers whose scroll container is the window.
 */
export function useRestoreScrollOnRouteChange() {
  const { pathname } = useLocation()
  const currentPathname = useRef(pathname)
  const offsetByPathname = useRef(new Map<string, number>())

  // The offset has to be sampled while the route is still on screen. Reading it during a navigation
  // is too late: the outgoing content is already gone from the DOM, and a shorter incoming route
  // makes the browser clamp `scrollY` before we could record it.
  useEffect(() => {
    function recordOffset() {
      offsetByPathname.current.set(currentPathname.current, window.scrollY)
    }

    window.addEventListener('scroll', recordOffset, { passive: true })
    return () => {
      window.removeEventListener('scroll', recordOffset)
    }
  }, [])

  useLayoutEffect(() => {
    if (pathname === currentPathname.current) {
      return
    }
    currentPathname.current = pathname
    // Sibling routes swap into a shared outlet without changing the window's scroll offset, so a
    // route entered from a scrolled-down list would otherwise be rendered above the viewport.
    window.scrollTo(0, offsetByPathname.current.get(pathname) ?? 0)
  }, [pathname])
}
