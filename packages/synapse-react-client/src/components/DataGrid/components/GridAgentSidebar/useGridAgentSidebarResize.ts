import { GRID_AGENT_SIDEBAR_WIDTH_LOCALSTORAGE_KEY } from '@/utils/SynapseConstants'
import { useLocalStorageValue, useResizeObserver } from '@react-hookz/web'
import {
  KeyboardEvent,
  PointerEvent as ReactPointerEvent,
  useEffect,
  useState,
} from 'react'

export const GRID_AGENT_SIDEBAR_DEFAULT_WIDTH = 400
export const GRID_AGENT_SIDEBAR_MIN_WIDTH = 360
/** The largest fraction of the docking layout's width that the sidebar may take */
const GRID_AGENT_SIDEBAR_MAX_WIDTH_FRACTION = 0.5
export const GRID_AGENT_SIDEBAR_KEYBOARD_RESIZE_STEP = 16
// The resize handle is on the left edge, so ArrowLeft widens the sidebar
const KEYBOARD_RESIZE_DELTAS: Partial<Record<string, number>> = {
  ArrowLeft: GRID_AGENT_SIDEBAR_KEYBOARD_RESIZE_STEP,
  ArrowRight: -GRID_AGENT_SIDEBAR_KEYBOARD_RESIZE_STEP,
}

// localStorage can hold anything. Only widths the sidebar could have saved count; anything else,
// such as "" or "0", falls back to the default
const storedWidthOptions = {
  parse: (stored: string | null) => {
    const width = stored === null ? Number.NaN : Number(stored)
    return Number.isFinite(width) && width >= GRID_AGENT_SIDEBAR_MIN_WIDTH
      ? width
      : null
  },
}

/** A `layoutWidth` of 0 means the layout has not been measured, so there is no maximum. */
function getMaxSidebarWidth(layoutWidth: number) {
  return layoutWidth
    ? Math.max(
        GRID_AGENT_SIDEBAR_MIN_WIDTH,
        layoutWidth * GRID_AGENT_SIDEBAR_MAX_WIDTH_FRACTION,
      )
    : Infinity
}

/** Clamps a sidebar width to the allowed range for a docking layout of the given width. */
export function clampSidebarWidth(width: number, layoutWidth: number) {
  return Math.min(
    Math.max(width, GRID_AGENT_SIDEBAR_MIN_WIDTH),
    getMaxSidebarWidth(layoutWidth),
  )
}

type Drag = {
  startPointerX: number
  startWidth: number
  width: number
}

/**
 * Resizing for the GridAgentSidebar, whose resize handle is its left edge. Dragging the handle, or
 * pressing the arrow keys while it is focused, resizes the sidebar between a minimum width and half
 * of `layoutElement`'s width. The chosen width persists in localStorage. A stored width that the
 * current layout clamps is kept until the user resizes the sidebar.
 *
 * Spread `handleProps` onto the resize handle.
 */
export function useGridAgentSidebarResize(layoutElement: HTMLElement | null) {
  const [layoutWidth, setLayoutWidth] = useState(0)
  useResizeObserver(layoutElement, entry =>
    setLayoutWidth(entry.contentRect.width),
  )

  const { value: storedWidth, set: setStoredWidth } =
    useLocalStorageValue<number>(
      GRID_AGENT_SIDEBAR_WIDTH_LOCALSTORAGE_KEY,
      storedWidthOptions,
    )

  // The live width while dragging is kept out of localStorage so the value is written once per drag
  const [drag, setDrag] = useState<Drag | null>(null)
  const isDragging = drag !== null

  const width = clampSidebarWidth(
    drag?.width ?? storedWidth ?? GRID_AGENT_SIDEBAR_DEFAULT_WIDTH,
    layoutWidth,
  )

  useEffect(() => {
    if (!isDragging) {
      return
    }
    // Keep the resize cursor and suppress text selection while the pointer is over other content
    const { cursor, userSelect } = document.body.style
    document.body.style.cursor = 'col-resize'
    document.body.style.userSelect = 'none'
    return () => {
      document.body.style.cursor = cursor
      document.body.style.userSelect = userSelect
    }
  }, [isDragging])

  function onPointerDown(e: ReactPointerEvent<HTMLElement>) {
    if (e.button !== 0) {
      return
    }
    // Prevents text selection and the compatibility mousedown, which the grid treats as a click outside of it
    e.preventDefault()
    // Captured, the rest of the drag's pointer events go to the handle wherever the pointer moves
    e.currentTarget.setPointerCapture(e.pointerId)
    setDrag({ startPointerX: e.clientX, startWidth: width, width })
  }

  function onPointerMove(e: ReactPointerEvent<HTMLElement>) {
    if (!drag) {
      return
    }
    // The handle is on the left edge, so moving the pointer left widens the sidebar
    setDrag({
      ...drag,
      width: clampSidebarWidth(
        drag.startWidth + drag.startPointerX - e.clientX,
        layoutWidth,
      ),
    })
  }

  // The browser releases the capture when the pointer is released or cancelled, which ends the drag
  function onLostPointerCapture() {
    if (!drag) {
      return
    }
    // Saving only a changed width keeps a stored width that this layout clamps, such as one chosen
    // in a wider window, so it comes back once the window is wide enough again
    if (drag.width !== drag.startWidth) {
      setStoredWidth(drag.width)
    }
    setDrag(null)
  }

  function onKeyDown(e: KeyboardEvent<HTMLElement>) {
    const delta = KEYBOARD_RESIZE_DELTAS[e.key]
    if (delta === undefined) {
      return
    }
    e.preventDefault()
    const newWidth = clampSidebarWidth(width + delta, layoutWidth)
    // At a limit the width does not change, and saving it would replace a clamped stored width
    if (newWidth !== width) {
      setStoredWidth(newWidth)
    }
  }

  return {
    width,
    minWidth: GRID_AGENT_SIDEBAR_MIN_WIDTH,
    /** `undefined` until the layout has been measured */
    maxWidth: layoutWidth ? getMaxSidebarWidth(layoutWidth) : undefined,
    isDragging,
    handleProps: {
      onPointerDown,
      onPointerMove,
      onLostPointerCapture,
      onKeyDown,
    },
  }
}

export default useGridAgentSidebarResize
