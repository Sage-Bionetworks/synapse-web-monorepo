import { GRID_AGENT_SIDEBAR_WIDTH_LOCALSTORAGE_KEY } from '@/utils/SynapseConstants'
import CloseIcon from '@mui/icons-material/Close'
import { IconButton, Typography } from '@mui/material'
import { useLocalStorageValue, useResizeObserver } from '@react-hookz/web'
import {
  KeyboardEvent,
  PointerEvent as ReactPointerEvent,
  ReactNode,
  useEffect,
  useId,
  useRef,
  useState,
} from 'react'
import styles from './GridAgentSidebar.module.scss'

export const GRID_AGENT_SIDEBAR_TITLE = 'AI Assistant'
export const GRID_AGENT_SIDEBAR_DEFAULT_WIDTH = 400
export const GRID_AGENT_SIDEBAR_MIN_WIDTH = 360
/** The largest fraction of the docking layout's width that the sidebar may take */
export const GRID_AGENT_SIDEBAR_MAX_WIDTH_FRACTION = 0.5
export const GRID_AGENT_SIDEBAR_KEYBOARD_RESIZE_STEP = 16

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

type DragState = {
  startPointerX: number
  startWidth: number
  layoutWidth: number
  width: number
}

export type GridAgentSidebarProps = {
  open: boolean
  onClose: () => void
  children: ReactNode
}

/**
 * A right-hand sidebar that docks beside its siblings in a flex row layout, taking its own
 * horizontal space. Its left edge can be dragged (or moved with the arrow keys when focused) to
 * resize it, and the chosen width persists in localStorage. Renders nothing when closed.
 */
export function GridAgentSidebar({
  open,
  onClose,
  children,
}: GridAgentSidebarProps) {
  const titleId = useId()
  const [sidebarElement, setSidebarElement] = useState<HTMLElement | null>(null)
  const [layoutWidth, setLayoutWidth] = useState(0)
  useResizeObserver(sidebarElement?.parentElement ?? null, entry =>
    setLayoutWidth(entry.contentRect.width),
  )

  const { value: storedWidth, set: setStoredWidth } =
    useLocalStorageValue<number>(GRID_AGENT_SIDEBAR_WIDTH_LOCALSTORAGE_KEY)

  // The live width while dragging is kept out of localStorage so the value is written once per drag
  const [dragWidth, setDragWidth] = useState<number | null>(null)
  const dragStateRef = useRef<DragState | null>(null)
  const isDragging = dragWidth !== null

  const width = clampSidebarWidth(
    dragWidth ?? storedWidth ?? GRID_AGENT_SIDEBAR_DEFAULT_WIDTH,
    layoutWidth,
  )

  useEffect(() => {
    if (!isDragging) {
      return
    }

    function handlePointerMove(e: PointerEvent) {
      const dragState = dragStateRef.current
      if (!dragState) {
        return
      }
      // The handle is on the left edge, so moving the pointer left widens the sidebar
      dragState.width = clampSidebarWidth(
        dragState.startWidth + dragState.startPointerX - e.clientX,
        dragState.layoutWidth,
      )
      setDragWidth(dragState.width)
    }

    function handlePointerUp() {
      if (dragStateRef.current) {
        setStoredWidth(dragStateRef.current.width)
      }
      dragStateRef.current = null
      setDragWidth(null)
    }

    // Keep the resize cursor and suppress text selection while the pointer is over other content
    const { cursor, userSelect } = document.body.style
    document.body.style.cursor = 'col-resize'
    document.body.style.userSelect = 'none'
    window.addEventListener('pointermove', handlePointerMove)
    window.addEventListener('pointerup', handlePointerUp)
    window.addEventListener('pointercancel', handlePointerUp)
    return () => {
      document.body.style.cursor = cursor
      document.body.style.userSelect = userSelect
      window.removeEventListener('pointermove', handlePointerMove)
      window.removeEventListener('pointerup', handlePointerUp)
      window.removeEventListener('pointercancel', handlePointerUp)
    }
  }, [isDragging, setStoredWidth])

  function handleResizeStart(e: ReactPointerEvent<HTMLDivElement>) {
    if (e.button !== 0) {
      return
    }
    // Prevents text selection and the compatibility mousedown, which the grid treats as a click outside of it
    e.preventDefault()
    dragStateRef.current = {
      startPointerX: e.clientX,
      startWidth: width,
      layoutWidth,
      width,
    }
    setDragWidth(width)
  }

  function handleResizeKeyDown(e: KeyboardEvent<HTMLDivElement>) {
    const step = GRID_AGENT_SIDEBAR_KEYBOARD_RESIZE_STEP
    const delta =
      e.key === 'ArrowLeft' ? step : e.key === 'ArrowRight' ? -step : 0
    if (delta === 0) {
      return
    }
    e.preventDefault()
    setStoredWidth(clampSidebarWidth(width + delta, layoutWidth))
  }

  if (!open) {
    return null
  }

  return (
    <aside
      ref={setSidebarElement}
      className={styles.sidebar}
      style={{ width }}
      aria-labelledby={titleId}
    >
      <div
        role="separator"
        aria-orientation="vertical"
        aria-label={`Resize ${GRID_AGENT_SIDEBAR_TITLE}`}
        aria-valuenow={width}
        aria-valuemin={GRID_AGENT_SIDEBAR_MIN_WIDTH}
        aria-valuemax={
          layoutWidth ? getMaxSidebarWidth(layoutWidth) : undefined
        }
        tabIndex={0}
        className={`${styles.resizeHandle} ${isDragging ? styles.dragging : ''}`}
        onPointerDown={handleResizeStart}
        onKeyDown={handleResizeKeyDown}
      />
      <div className={styles.header}>
        <Typography id={titleId} variant="headline3" component="h2">
          {GRID_AGENT_SIDEBAR_TITLE}
        </Typography>
        <IconButton
          aria-label={`Close ${GRID_AGENT_SIDEBAR_TITLE}`}
          size="small"
          onClick={onClose}
        >
          <CloseIcon fontSize="small" />
        </IconButton>
      </div>
      <div className={styles.body}>{children}</div>
    </aside>
  )
}

export default GridAgentSidebar
