import {
  useCallback,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
} from 'react'

export type UseGridAutocompleteStateProps = {
  active: boolean
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
}

/**
 * Manages the shared focus/blur/menu state needed by grid autocomplete cell
 * components that are built on top of react-datasheet-grid.
 *
 * Both AutocompleteColumn and AutocompleteMultipleEnumColumn use the same
 * three-part pattern:
 *  1. When `active` becomes true → focus the input.
 *  2. When `active` becomes false with no pending option click → blur + close menu.
 *  3. The dropdown renders in a portal outside the grid cell. react-datasheet-grid
 *     sees the mousedown as an outside click and fires active=false before onClick
 *     → onChange. The `optionMouseDownRef` guard defers step 2 until the click
 *     completes and onChange resets the ref.
 */
export function useGridAutocompleteState({
  active,
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

  useEffect(() => {
    if (active) {
      inputRef.current?.focus()
    } else if (!optionMouseDownRef.current) {
      // Only close when there is no pending option click; if there is one,
      // onChange will reset optionMouseDownRef and handle cleanup itself.
      setMenuIsOpen(false)
      inputRef.current?.blur()
      onDeactivateRef.current?.()
    }
    // Intentionally only re-runs when `active` changes.
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
  }
}
