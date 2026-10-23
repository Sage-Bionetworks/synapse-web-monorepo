import DragIndicatorIcon from '@mui/icons-material/DragIndicator'
import { IconButton, Tooltip } from '@mui/material'
import { Ref } from 'react'
import styles from './queryBuilderDrag.module.scss'

export type QBDragHandleProps = {
  /** `handleRef` from `useSortable`, which binds the drag sensor here. */
  handleRef: Ref<HTMLButtonElement>
  /** Names the drag for both the tooltip and the accessible name. */
  label: string
}

/** The grip that starts a drag on a condition or a condition group. */
export function QBDragHandle(props: QBDragHandleProps) {
  const { handleRef, label } = props
  return (
    <Tooltip title={label}>
      <IconButton
        ref={handleRef}
        size="small"
        className={styles.dragHandle}
        aria-label={label}
      >
        <DragIndicatorIcon fontSize="small" />
      </IconButton>
    </Tooltip>
  )
}
