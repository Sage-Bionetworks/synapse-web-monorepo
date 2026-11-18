import classNames from 'classnames'
import { KeyboardEvent, PointerEvent } from 'react'
import styles from './GridAgentSidebar.module.scss'
import { GridAgentSidebarResize } from './useGridAgentSidebarResize'

export const GRID_AGENT_SIDEBAR_KEYBOARD_RESIZE_STEP = 16
// The handle is on the left edge, so ArrowLeft widens the sidebar
const KEYBOARD_RESIZE_DELTAS: Partial<Record<string, number>> = {
  ArrowLeft: GRID_AGENT_SIDEBAR_KEYBOARD_RESIZE_STEP,
  ArrowRight: -GRID_AGENT_SIDEBAR_KEYBOARD_RESIZE_STEP,
}

export type GridAgentSidebarResizeHandleProps = {
  resize: GridAgentSidebarResize
  /** The ID of the sidebar's visible title, which names the handle */
  titleId: string
  /** The ID of the sidebar that the handle resizes */
  sidebarId: string
}

/**
 * The GridAgentSidebar's left edge: a focusable window splitter that resizes the sidebar when it is
 * dragged, or when the arrow keys are pressed while it is focused.
 */
export function GridAgentSidebarResizeHandle({
  resize,
  titleId,
  sidebarId,
}: GridAgentSidebarResizeHandleProps) {
  const { width, minWidth, maxWidth, isDragging } = resize

  function handlePointerDown(e: PointerEvent<HTMLElement>) {
    if (e.button !== 0) {
      return
    }
    // Prevents text selection and the compatibility mousedown, which the grid treats as a click outside of it
    e.preventDefault()
    // Captured, the rest of the drag's pointer events go to the handle wherever the pointer moves
    e.currentTarget.setPointerCapture(e.pointerId)
    resize.startDrag(e.pointerId, e.clientX)
  }

  function handleKeyDown(e: KeyboardEvent<HTMLElement>) {
    const delta = KEYBOARD_RESIZE_DELTAS[e.key]
    if (delta === undefined) {
      return
    }
    e.preventDefault()
    resize.resizeBy(delta)
  }

  return (
    <div
      // oxlint-disable-next-line jsx-a11y/prefer-tag-over-role -- a focusable separator is the ARIA window splitter pattern, which a static <hr> cannot express
      role="separator"
      aria-orientation="vertical"
      aria-labelledby={titleId}
      aria-controls={sidebarId}
      aria-valuenow={width}
      aria-valuemin={minWidth}
      aria-valuemax={maxWidth}
      tabIndex={0}
      className={classNames(styles.resizeHandle, {
        [styles.dragging]: isDragging,
      })}
      onPointerDown={handlePointerDown}
      onPointerMove={e => resize.dragTo(e.pointerId, e.clientX)}
      // The browser releases the capture when the pointer is released or cancelled, which ends the drag
      onLostPointerCapture={e => resize.endDrag(e.pointerId)}
      onKeyDown={handleKeyDown}
    />
  )
}

export default GridAgentSidebarResizeHandle
