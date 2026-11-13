import { ReactNode, useEffect, useRef, useState } from 'react'
import styles from './GridCellDisplay.module.scss'

// How long the pointer must stay on a cell it has not moved over before the
// cell mounts its editor. A cell that passes under the pointer while the grid
// scrolls stays there for a few frames, well under this, so scrolling does not
// mount editors. Users take longer than this to click after a scroll stops.
export const POINTER_REST_MS = 150

type LazyCellEditorProps = {
  /** Whether the grid has made this cell the active cell */
  active: boolean
  /** Lightweight markup that shows the cell's value until the editor mounts */
  display: ReactNode
  /** The cell's editor, mounted only once the user reaches the cell */
  editor: ReactNode
}

/**
 * Shows a cell's value with lightweight markup, and mounts the cell's editor
 * once the user activates the cell, moves the pointer over it, or rests the
 * pointer on it for {@link POINTER_REST_MS}. The editor then stays mounted
 * until the grid unmounts the cell.
 */
export function LazyCellEditor({
  active,
  display,
  editor,
}: LazyCellEditorProps) {
  // Each MUI editor is costly to mount, so a cell mounts one only when the user
  // reaches it. Mounting on hover, not just on activation, keeps the editor's
  // hover affordances and one-click actions (open the menu, clear, open the
  // date picker) working as they do on a cell that already has its editor.
  const [isEditorMounted, setIsEditorMounted] = useState(active)
  if (active && !isEditorMounted) {
    setIsEditorMounted(true)
  }

  const restTimeout = useRef<ReturnType<typeof setTimeout>>(undefined)
  useEffect(() => () => clearTimeout(restTimeout.current), [])

  // Once mounted, the editor is kept: deactivation is when it commits typed
  // text, and it finishes an option click that the grid saw as a click outside
  // the cell.
  if (isEditorMounted) {
    return editor
  }

  return (
    <div
      className={styles.display}
      onPointerMove={() => setIsEditorMounted(true)}
      // Scrolling fires pointerover on the cells that move under a stationary
      // pointer, but not pointermove. A cell that stops under the pointer still
      // needs its editor before the next click, because the grid activates the
      // cell on mousedown and the click would otherwise land on the display.
      onPointerEnter={() => {
        clearTimeout(restTimeout.current)
        restTimeout.current = setTimeout(
          () => setIsEditorMounted(true),
          POINTER_REST_MS,
        )
      }}
      onPointerLeave={() => clearTimeout(restTimeout.current)}
    >
      {display}
    </div>
  )
}
