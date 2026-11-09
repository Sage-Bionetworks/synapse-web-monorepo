import { ReactNode, useState } from 'react'
import styles from './GridCellDisplay.module.scss'

type LazyCellEditorProps = {
  /** Whether the grid has made this cell the active cell */
  active: boolean
  /** Lightweight markup that shows the cell's value until the editor mounts */
  display: ReactNode
  renderEditor: () => ReactNode
}

/**
 * Shows a cell's value with lightweight markup, and mounts the cell's editor
 * once the user activates the cell or moves the pointer over it. The editor
 * then stays mounted until the grid unmounts the cell.
 */
export function LazyCellEditor({
  active,
  display,
  renderEditor,
}: LazyCellEditorProps) {
  // Mounting an MUI editor for every cell that scrolls into view is what made
  // scrolling slow, so a cell only gets one when the user reaches it. Mounting
  // on hover, not just on activation, keeps the editor's hover affordances and
  // one-click actions (clear, open the menu, delete a chip) working as they do
  // on a cell that already has its editor.
  const [isEditorMounted, setIsEditorMounted] = useState(active)
  if (active && !isEditorMounted) {
    setIsEditorMounted(true)
  }

  // Once mounted, the editor is kept: deactivation is when it commits typed
  // text, and it finishes an option click that the grid saw as a click outside
  // the cell.
  if (isEditorMounted) {
    return renderEditor()
  }

  return (
    <div
      className={styles.display}
      // Scrolling fires pointerover on the cells that move under a stationary
      // pointer, but not pointermove, so scrolling never mounts an editor.
      onPointerMove={() => setIsEditorMounted(true)}
    >
      {display}
    </div>
  )
}
