import { COL_RESIZING_BODY_CLASS } from '@/components/DataGrid/hooks/useColumnResizeHandles'
import { GRID_AGENT_SIDEBAR_WIDTH_LOCALSTORAGE_KEY } from '@/utils/SynapseConstants'
import { useLocalStorageValue } from '@react-hookz/web'
import { useEffect, useRef, useState } from 'react'

export const GRID_AGENT_SIDEBAR_DEFAULT_WIDTH = 400
export const GRID_AGENT_SIDEBAR_MIN_WIDTH = 360
/** The fraction of the docking layout's width that the sidebar may take, unless the minimum is larger */
const GRID_AGENT_SIDEBAR_MAX_WIDTH_FRACTION = 0.5

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

/**
 * The larger of the minimum width and half of `layoutWidth`. A `layoutWidth` of 0 means the layout
 * has not been measured, so there is no maximum.
 */
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
  pointerId: number
  startPointerX: number
  startWidth: number
  width: number
}

/**
 * Resizing for the GridAgentSidebar, whose resize handle is its left edge. A drag or a keyboard
 * step resizes the sidebar between a minimum width and half of `layoutWidth`, the width of the
 * layout it docks in, or the minimum if that is larger. A `layoutWidth` of 0 means the layout is
 * unmeasured, which sets no maximum. The chosen width persists in localStorage. A stored width that
 * the current layout clamps is kept until the user resizes the sidebar, so it comes back once the
 * layout is wide enough again.
 */
export function useGridAgentSidebarResize(layoutWidth: number) {
  const { value: storedWidth, set: setStoredWidth } =
    useLocalStorageValue<number>(
      GRID_AGENT_SIDEBAR_WIDTH_LOCALSTORAGE_KEY,
      storedWidthOptions,
    )

  // The live width while dragging is kept out of localStorage so the value is written once per drag
  const [drag, setDrag] = useState<Drag | null>(null)
  // The drag functions read the drag from here, because a browser can end a drag before React has
  // rendered its last move
  const dragRef = useRef<Drag | null>(null)
  const updateDrag = (newDrag: Drag | null) => {
    dragRef.current = newDrag
    setDrag(newDrag)
  }
  const isDragging = drag !== null

  const width = clampSidebarWidth(
    drag?.width ?? storedWidth ?? GRID_AGENT_SIDEBAR_DEFAULT_WIDTH,
    layoutWidth,
  )

  useEffect(() => {
    if (!isDragging) {
      return
    }
    // Keeps the resize cursor, and no text selection, while the pointer is over other content
    document.body.classList.add(COL_RESIZING_BODY_CLASS)
    return () => {
      document.body.classList.remove(COL_RESIZING_BODY_CLASS)
    }
  }, [isDragging])

  // Saving only a changed width keeps a stored width that this layout clamps, such as one chosen in
  // a wider window. At a limit, a resize changes nothing.
  function saveChangedWidth(previousWidth: number, newWidth: number) {
    if (newWidth !== previousWidth) {
      setStoredWidth(newWidth)
    }
  }

  /** Starts a drag by the pointer `pointerId` at `clientX`, unless another pointer is dragging */
  function startDrag(pointerId: number, clientX: number) {
    if (dragRef.current) {
      return
    }
    updateDrag({ pointerId, startPointerX: clientX, startWidth: width, width })
  }

  /** Resizes the sidebar to follow `pointerId` to `clientX`, if that pointer started the drag */
  function dragTo(pointerId: number, clientX: number) {
    const current = dragRef.current
    if (current?.pointerId !== pointerId) {
      return
    }
    // The handle is on the left edge, so moving the pointer left widens the sidebar
    updateDrag({
      ...current,
      width: clampSidebarWidth(
        current.startWidth + current.startPointerX - clientX,
        layoutWidth,
      ),
    })
  }

  /** Ends the drag by `pointerId`, if that pointer started it, and saves the new width */
  function endDrag(pointerId: number) {
    const current = dragRef.current
    if (current?.pointerId !== pointerId) {
      return
    }
    // Ended first, because saving throws when localStorage is full
    updateDrag(null)
    saveChangedWidth(current.startWidth, current.width)
  }

  /**
   * Resizes the sidebar by `delta` pixels, positive to widen it, and saves the new width. Does
   * nothing during a drag, whose width is the one on screen.
   */
  function resizeBy(delta: number) {
    if (dragRef.current) {
      return
    }
    saveChangedWidth(width, clampSidebarWidth(width + delta, layoutWidth))
  }

  const maxWidth = getMaxSidebarWidth(layoutWidth)

  return {
    width,
    minWidth: GRID_AGENT_SIDEBAR_MIN_WIDTH,
    /** `undefined` until the layout has been measured */
    maxWidth: Number.isFinite(maxWidth) ? maxWidth : undefined,
    isDragging,
    startDrag,
    dragTo,
    endDrag,
    resizeBy,
  }
}

export type GridAgentSidebarResize = ReturnType<
  typeof useGridAgentSidebarResize
>

export default useGridAgentSidebarResize
