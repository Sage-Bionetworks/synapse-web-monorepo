import { useEffect, useLayoutEffect, useRef } from 'react'
import { ScrollRestoration, useLocation } from 'react-router'

const HASH_TARGET_SETTLE_MS = 3000

/**
 * Scroll behavior for a portal: scroll reset and back/forward position restore,
 * plus smooth scrolling for in-page hash links.
 */
export function PortalScrollRestoration() {
  return (
    <>
      <SmoothHashScroll />
      <ScrollRestoration />
    </>
  )
}

function SmoothHashScroll() {
  const { pathname, hash, key } = useLocation()
  const previousPathnameRef = useRef<string | null>(null)

  // Toggle 'data-smooth-scroll' on the root element ONLY during in-page hash
  // jumps (same pathname), preventing smooth scroll on full page navigations.
  useLayoutEffect(() => {
    const isInPageJump = !!hash && previousPathnameRef.current === pathname
    previousPathnameRef.current = pathname
    document.documentElement.toggleAttribute('data-smooth-scroll', isInPageJump)
  }, [pathname, hash, key])

  // Delays scrolling to the hash anchor by HASH_TARGET_SETTLE_MS to ensure
  // the DOM has fully rendered before calling scrollIntoView().
  useEffect(() => {
    if (!hash) {
      return
    }
    const id = decodeURIComponent(hash.replace('#', ''))
    const timeout = setTimeout(() => {
      document.getElementById(id)?.scrollIntoView()
    }, HASH_TARGET_SETTLE_MS)

    return () => clearTimeout(timeout)
  }, [pathname, hash, key])

  return null
}
