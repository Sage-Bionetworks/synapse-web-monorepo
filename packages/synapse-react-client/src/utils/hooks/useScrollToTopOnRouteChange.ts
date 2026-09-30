import { useEffect, useRef } from 'react'
import { useLocation } from 'react-router'

/**
 * Scrolls the window to the top when the router navigates to a different pathname. The initial render
 * does not scroll, and neither does navigation that only changes search params (e.g. applying a filter).
 *
 * Call this from a layout route's element so that it stays mounted across the navigations it governs.
 * Only appropriate for routers whose scroll container is the window.
 */
export function useScrollToTopOnRouteChange() {
  const { pathname } = useLocation()
  const previousPathname = useRef(pathname)

  useEffect(() => {
    if (pathname === previousPathname.current) {
      return
    }
    previousPathname.current = pathname
    // Sibling routes swap into a shared outlet without changing the window's scroll offset, so a
    // route entered from a scrolled-down list would otherwise be rendered above the viewport.
    window.scrollTo(0, 0)
  }, [pathname])
}
