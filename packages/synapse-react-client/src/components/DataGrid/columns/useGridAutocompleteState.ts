import {
  useCallback,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
} from 'react'

export type UseGridAutocompleteStateProps = {
  active: boolean
  focus: boolean
  /**
   * `stopEditing` from react-datasheet-grid's CellProps. The hook ref-stabilizes
   * this internally, so callers can pass it directly without memoizing.
   */
  stopEditing?: (opts?: { nextRow: boolean }) => void
  /**
   * Called when the cell transitions from active to inactive and there is no
   * pending option click in progress (i.e. the portal-click guard is not set).
   * Store any free-text commit logic here. The callback is ref-stabilized inside
   * the hook, so it may freely capture local state without becoming a stale closure.
   */
  onDeactivate?: () => void
}

export type UseGridAutocompleteStateReturn = {
  menuIsOpen: boolean
  setMenuIsOpen: (open: boolean) => void
  /** Ref to attach to the focusable input element for programmatic focus/blur. */
  inputRef: React.RefObject<HTMLInputElement | null>
  /**
   * Always reflects the current `active` value. Safe to read inside event
   * handler closures (e.g. onChange) without a stale capture.
   */
  activeRef: React.RefObject<boolean>
  /** Pass to `slotProps.listbox.onMouseDown` on the MUI Autocomplete. */
  handleListboxMouseDown: (event: React.MouseEvent) => void
  /**
   * Call at the top of every `onChange` handler to signal that a pending
   * option click has been committed. Clears the portal-click guard so that
   * subsequent active→false transitions can proceed normally.
   */
  notifyOptionCommitted: () => void
  /** Pass to the Autocomplete `onOpen` prop. */
  handleMenuOpen: () => void
  /**
   * Pass to the Autocomplete `onClose` prop. Clears the portal-click guard and
   * closes the menu, then stops editing without advancing to the next row.
   */
  handleClose: () => void
  /** Pass to `slotProps.popupIndicator.onMouseDown` on the MUI Autocomplete. */
  handlePopupIndicatorMouseDown: () => void
}

/**
 * Manages the shared focus/blur/menu state needed by grid autocomplete cell
 * components that are built on top of react-datasheet-grid.
 *
 * Grid cell state is two-tiered: `active` is set on first click (cell is
 * selected, but not editing), `focus` is set on second click (cell is in edit
 * mode). This hook keeps browser focus and dropdown visibility tied to `focus`
 * so the active-but-not-focused state doesn't show a caret or open the menu —
 * Backspace/Delete and type-to-edit then fall through to the grid's defaults.
 *
 *  1. When `focus` becomes true → focus the input + open the menu.
 *  2. When `focus` becomes false → blur + close the menu.
 *  3. When `active` becomes false with no pending option click → run
 *     `onDeactivate` to commit any uncommitted free-text. This is separate
 *     from focus because Escape clears `focus` but keeps `active`, and we
 *     should not commit on Escape.
 *  4. The dropdown renders in a portal outside the grid cell. react-datasheet-grid
 *     sees the mousedown as an outside click and fires active=false before onClick
 *     → onChange. The `optionMouseDownRef` guard defers steps 2 and 3 until the
 *     click completes and onChange resets the ref.
 */
export function useGridAutocompleteState({
  active,
  focus,
  stopEditing,
  onDeactivate,
}: UseGridAutocompleteStateProps): UseGridAutocompleteStateReturn {
  const inputRef = useRef<HTMLInputElement>(null)
  const [menuIsOpen, setMenuIsOpen] = useState(false)
  const optionMouseDownRef = useRef(false)

  // Always reflects the latest `active` value — safe to read in closures.
  const activeRef = useRef(active)
  useLayoutEffect(() => {
    activeRef.current = active
  })

  // Ref-stabilize callbacks so effects/handlers never need them in deps arrays,
  // yet always call the latest versions (avoiding stale closures).
  const onDeactivateRef = useRef(onDeactivate)
  useLayoutEffect(() => {
    onDeactivateRef.current = onDeactivate
  })
  const stopEditingRef = useRef(stopEditing)
  useLayoutEffect(() => {
    stopEditingRef.current = stopEditing
  })

  // Tracks an in-flight popup-indicator click so the focus effect skips its
  // auto-open. Without this, the indicator click both (a) promotes the cell to
  // grid focus (our effect would open the menu) and (b) toggles via MUI's
  // own onClick (which would then close because we just opened it) — flicker.
  // Letting MUI handle the open via its onOpen avoids the dueling state.
  const popupClickInProgressRef = useRef(false)
  const handlePopupIndicatorMouseDown = useCallback(() => {
    popupClickInProgressRef.current = true
    // Clear on the next macro task — after MUI's click handler has run.
    window.setTimeout(() => {
      popupClickInProgressRef.current = false
    }, 0)
  }, [])

  useEffect(() => {
    if (focus) {
      inputRef.current?.focus()
      if (!popupClickInProgressRef.current) {
        setMenuIsOpen(true)
      }
    } else if (!optionMouseDownRef.current) {
      // Only close when there is no pending option click; if there is one,
      // onChange will reset optionMouseDownRef and handle cleanup itself.
      setMenuIsOpen(false)
      inputRef.current?.blur()
    }
  }, [focus])

  // Defense in depth for the caret: when grid focus is false, MUI may still
  // route browser focus to the <input> (e.g. multi-mode chip-area clicks,
  // popup indicator clicks). Intercept any focus that lands on the input
  // while we're not in edit mode and blur it, so no caret blinks after the
  // last chip or inside the input.
  useEffect(() => {
    if (focus) return
    const input = inputRef.current
    if (!input) return
    const handleFocus = () => {
      input.blur()
    }
    input.addEventListener('focus', handleFocus)
    return () => {
      input.removeEventListener('focus', handleFocus)
    }
  }, [focus])

  useEffect(() => {
    if (!active && !optionMouseDownRef.current) {
      // Menus can be opened with grid focus=false (e.g. clicking the popup
      // indicator on a freshly-activated cell), so the focus effect alone is
      // not enough — close on deactivation too. Otherwise a deactivated cell
      // can leave a stale menu open that re-anchors and "moves" as the user
      // scrolls the grid, or stack up alongside the next cell's menu.
      setMenuIsOpen(false)
      inputRef.current?.blur()
      onDeactivateRef.current?.()
    }
  }, [active])

  const handleListboxMouseDown = useCallback((event: React.MouseEvent) => {
    // Prevent the input from blurring when clicking inside the listbox. MUI's
    // internal listbox onMouseDown does the same, but our slotProps replaces it,
    // so we must call preventDefault() here to preserve that behavior.
    event.preventDefault()
    // Only signal a pending option click when the mousedown actually targets an
    // option element. Clicks on scrollbars or listbox padding would otherwise
    // leave the guard stuck true (onChange never fires for non-selections),
    // causing later active→false transitions to skip blur/onDeactivate cleanup.
    if ((event.target as Element).closest('[role="option"]')) {
      optionMouseDownRef.current = true
    }
  }, [])

  const notifyOptionCommitted = useCallback(() => {
    optionMouseDownRef.current = false
  }, [])

  const handleMenuOpen = useCallback(() => {
    setMenuIsOpen(true)
  }, [])

  const handleClose = useCallback(() => {
    // Clear the guard in case a mousedown on an option was abandoned before
    // onChange could fire (e.g. drag-off).
    optionMouseDownRef.current = false
    setMenuIsOpen(false)
    stopEditingRef.current?.({ nextRow: false })
  }, [])

  return {
    menuIsOpen,
    setMenuIsOpen,
    inputRef,
    activeRef,
    handleListboxMouseDown,
    notifyOptionCommitted,
    handleMenuOpen,
    handleClose,
    handlePopupIndicatorMouseDown,
  }
}
