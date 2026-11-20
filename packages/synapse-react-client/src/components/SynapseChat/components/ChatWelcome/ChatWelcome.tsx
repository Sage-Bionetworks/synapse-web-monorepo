import { ButtonBase, Typography } from '@mui/material'
import { ReactNode } from 'react'
import {
  ALLOWED_FILE_TYPES_LABEL,
  ATTACHMENT_COUNT_AND_SIZE_LIMIT_LABEL,
} from '../../utils/attachmentLabels'
import styles from './ChatWelcome.module.scss'

export const UPLOAD_SUPPORTING_DOCUMENTS_LABEL = 'Upload supporting documents'

export type ChatWelcomeContent = {
  avatar: ReactNode
  title: string
  description: string
}

export type ChatWelcomeProps = ChatWelcomeContent & {
  /** Shows a card that starts a file upload when clicked. Omit to hide the card. */
  onUploadClick?: () => void
  disabled?: boolean
}

/**
 * The introduction shown in an empty conversation: the agent's avatar and title, an optional
 * card for uploading supporting documents with the attachment limits, and a description.
 */
export function ChatWelcome({
  avatar,
  title,
  description,
  onUploadClick,
  disabled = false,
}: ChatWelcomeProps) {
  return (
    <div className={styles.welcome}>
      {avatar}
      <Typography variant="headline3" component="p">
        {title}
      </Typography>
      {onUploadClick && (
        <ButtonBase
          className={styles.uploadCard}
          onClick={onUploadClick}
          disabled={disabled}
        >
          <Typography className={styles.uploadCardTitle} variant="body1">
            {UPLOAD_SUPPORTING_DOCUMENTS_LABEL}
          </Typography>
          <Typography variant="smallText1">
            {ATTACHMENT_COUNT_AND_SIZE_LIMIT_LABEL}
            <br />
            Allowed file types: {ALLOWED_FILE_TYPES_LABEL}
          </Typography>
        </ButtonBase>
      )}
      <Typography variant="smallText1">{description}</Typography>
    </div>
  )
}

export default ChatWelcome
