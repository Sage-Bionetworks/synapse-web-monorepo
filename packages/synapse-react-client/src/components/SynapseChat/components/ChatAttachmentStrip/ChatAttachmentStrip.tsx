import classNames from 'classnames'
import {
  AttachmentChip,
  AttachmentChipStatus,
} from '../AttachmentChip/AttachmentChip'
import styles from './ChatAttachmentStrip.module.scss'

export type AttachmentStripItem = {
  fileHandleId: string
  label: string
  contentType?: string
  status?: AttachmentChipStatus
  errorMessage?: string
}

export type ChatAttachmentStripProps = {
  items: AttachmentStripItem[]
  /** Wrap to multiple rows instead of overflowing horizontally. @default false */
  wrap?: boolean
  /** If provided, each chip gets a remove badge. Invoked with the fileHandleId of the attachment to remove. */
  onRemove?: (fileHandleId: string) => void
}

/**
 * A strip of attachment chips. Used both above the chat text input for attachments pending
 * send (horizontally-scrolling, with a remove control on each chip) and below a sent message
 * in the chat transcript (wrapping, read-only).
 */
export function ChatAttachmentStrip({
  items,
  wrap = false,
  onRemove,
}: ChatAttachmentStripProps) {
  if (items.length === 0) {
    return null
  }

  return (
    <div className={classNames(styles.strip, wrap && styles.wrap)}>
      {items.map(item => (
        <div key={item.fileHandleId} className={styles.item}>
          <AttachmentChip
            label={item.label}
            contentType={item.contentType}
            status={item.status}
            errorMessage={item.errorMessage}
            onRemove={onRemove ? () => onRemove(item.fileHandleId) : undefined}
          />
        </div>
      ))}
    </div>
  )
}

export default ChatAttachmentStrip
