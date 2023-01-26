import { useEffect, useState } from 'react'
export type UseShowDesktopProps = number

// This should match $breakpoints.medium in _variables.scss
const MOBILE_VIEWPORT_MAX_WIDTH_PX = 768

export default function useShowDesktop(breakpoint?: UseShowDesktopProps) {
  let usedBreakpoint = breakpoint ?? MOBILE_VIEWPORT_MAX_WIDTH_PX
  const [showDesktop, setShowDesktop] = useState(
    window.innerWidth > usedBreakpoint,
  )
  useEffect(() => {
    const listener = () => {
      const updatedValue = window.innerWidth > usedBreakpoint
      if (updatedValue !== showDesktop) {
        setShowDesktop(updatedValue)
      }
    }
    window.addEventListener('resize', listener)
    return () => {
      window.removeEventListener('resize', listener)
    }
  })

  return showDesktop
}
