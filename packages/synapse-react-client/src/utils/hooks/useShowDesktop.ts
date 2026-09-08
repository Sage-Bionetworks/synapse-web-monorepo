import { useEffect, useState } from 'react'
export type UseShowDesktopProps = number

// This should match $breakpoints.medium in _variables.scss
const MOBILE_VIEWPORT_MAX_WIDTH_PX = 768

export default function useShowDesktop(breakpoint?: UseShowDesktopProps) {
  const usedBreakpoint = breakpoint ?? MOBILE_VIEWPORT_MAX_WIDTH_PX

  // Match SSR output on the first client render.
  // This will trigger a flash on mobile, but avoids hydration errors.
  // If the flash is unacceptable, use CSS media queries to conditionally style identical markup on the first render.
  const [showDesktop, setShowDesktop] = useState(true)

  useEffect(() => {
    const update = () => setShowDesktop(window.innerWidth > usedBreakpoint)
    update() // sync to the real viewport after hydration
    window.addEventListener('resize', update)
    return () => window.removeEventListener('resize', update)
  }, [usedBreakpoint])

  return showDesktop
}
