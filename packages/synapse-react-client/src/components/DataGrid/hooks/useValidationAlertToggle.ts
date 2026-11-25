import { useCallback, useRef, useState } from 'react'

/**
 * Whether the validation errors banner is hidden, with stable handlers to hide and show it.
 * Attach `toggleLinkRef` to both the Hide and the Show link: each handler unmounts the link that
 * called it, and the link that replaces it takes focus when it mounts.
 */
export function useValidationAlertToggle() {
  const [isHidden, setIsHidden] = useState(false)
  // Set only by the handlers, so a Hide or Show link that mounts for any other reason
  // (the banner switching between its no-errors and errors forms) leaves focus alone
  const shouldFocusToggleLinkRef = useRef(false)

  const toggleLinkRef = useCallback((link: HTMLElement | null) => {
    if (link && shouldFocusToggleLinkRef.current) {
      shouldFocusToggleLinkRef.current = false
      link.focus()
    }
  }, [])

  const hide = useCallback(() => {
    shouldFocusToggleLinkRef.current = true
    setIsHidden(true)
  }, [])

  const show = useCallback(() => {
    shouldFocusToggleLinkRef.current = true
    setIsHidden(false)
  }, [])

  return { isHidden, hide, show, toggleLinkRef }
}
