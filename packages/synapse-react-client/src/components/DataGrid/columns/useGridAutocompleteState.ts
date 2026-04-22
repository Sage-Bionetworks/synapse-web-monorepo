import { useCallback, useEffect, useRef, useState } from 'react'

export type UseGridAutocompleteStateProps = {
  active: boolean
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
  /**
   * Set to `true` on listbox mousedown and back to `false` inside onChange.
   * Prevents the active→false useEffect from closing the menu before the
   * portal click's onChange can fire.
   */
  optionMouseDownRef: React.RefObject<boolean>
  /** Pass to `slotProps.listbox.onMouseDown` on the MUI Autocomplete. */
  handleListboxMouseDown: (event: React.MouseEvent) => void
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
  onDeactivate,
}: UseGridAutocompleteStateProps): UseGridAutocompleteStateReturn {
  const inputRef = useRef<HTMLInputElement>(null)
  const [menuIsOpen, setMenuIsOpen] = useState(false)
  const optionMouseDownRef = useRef(false)

  // Always reflects the latest `active` value — safe to read in closures.
  const activeRef = useRef(active)
  activeRef.current = active

  // Ref-stabilize onDeactivate so the useEffect below never needs it in its
  // deps array, yet always calls the latest version (avoiding stale closures).
  const onDeactivateRef = useRef(onDeactivate)
  onDeactivateRef.current = onDeactivate

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
    // Prevent the input from blurring when clicking an option. MUI's internal
    // listbox onMouseDown does the same, but our slotProps replaces it, so we
    // must call preventDefault() here to preserve that behavior.
    event.preventDefault()
    // Signal that an option click is in progress so the active→false useEffect
    // doesn't close the menu before onClick→onChange can fire.
    optionMouseDownRef.current = true
  }, [])

  return {
    menuIsOpen,
    setMenuIsOpen,
    inputRef,
    activeRef,
    optionMouseDownRef,
    handleListboxMouseDown,
  }
}
