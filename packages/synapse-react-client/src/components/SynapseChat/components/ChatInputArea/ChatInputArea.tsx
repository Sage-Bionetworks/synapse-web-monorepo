import { Add } from '@mui/icons-material'
import ArrowUpward from '@mui/icons-material/ArrowUpward'
import {
  Box,
  Button,
  IconButton,
  TextareaAutosize,
  Tooltip,
} from '@mui/material'
import {
  FormEventHandler,
  KeyboardEventHandler,
  useMemo,
  useState,
} from 'react'
import {
  AddFilesDialog,
  ALLOWED_FILE_TYPES_LABEL,
} from '../AddFilesDialog/AddFilesDialog'
import {
  AttachmentStripItem,
  ChatAttachmentStrip,
} from '../ChatAttachmentStrip/ChatAttachmentStrip'
import styles from './ChatInputArea.module.scss'
import { ChatAttachment } from '../../utils/types'

/** Max number of visible rows the textarea grows to before it scrolls internally. */
export const MAX_CHAT_INPUT_ROWS = 6

export type ChatInputAreaProps = {
  value: string
  onValueChange: (value: string) => void
  onSend: (message: string, attachments: ChatAttachment[]) => void
  placeholder?: string
  /** No session yet, or a response is in flight. */
  disabled?: boolean
  /** @default false */
  allowAttachments?: boolean
  /** Optional text label for the attachment action. Falls back to icon-only when unset. */
  attachmentButtonLabel?: string
}

const actionButtonSx = {
  height: '36px',
  px: '12px',
  border: '1px solid',
  borderColor: 'grey.300',
  borderRadius: '1px',
}

const attachmentTextButtonSx = {
  ...actionButtonSx,
  color: 'var(--synapse-gray-800)',
  fontWeight: 700,
  lineHeight: '20px',
}

/**
 * The chat composer: a bordered card containing a conditional attachment strip, an
 * auto-growing borderless text input, and a right-aligned row of actions (attach + send).
 * Owns attachment upload state end-to-end; the message text itself is controlled by the
 * caller since it can also be set from outside the card (e.g. suggested-prompt pills).
 */
export function ChatInputArea({
  value,
  onValueChange,
  onSend,
  placeholder,
  disabled = false,
  allowAttachments = false,
  attachmentButtonLabel,
}: ChatInputAreaProps) {
  const [pendingAttachments, setPendingAttachments] = useState<
    ChatAttachment[]
  >([])
  const [isAddFilesDialogOpen, setIsAddFilesDialogOpen] = useState(false)
  const [isUploadingAttachments, setIsUploadingAttachments] = useState(false)

  const isSendDisabled = disabled || !value.trim() || isUploadingAttachments

  const submit = () => {
    if (isSendDisabled) {
      return
    }
    onSend(value.trim(), pendingAttachments)
    setPendingAttachments([])
  }

  const handleFormSubmit: FormEventHandler<HTMLFormElement> = event => {
    event.preventDefault()
    submit()
  }

  const handleTextareaKeyDown: KeyboardEventHandler<
    HTMLTextAreaElement
  > = event => {
    if (event.key === 'Enter' && !event.shiftKey) {
      event.preventDefault()
      submit()
    }
  }

  const attachmentItems: AttachmentStripItem[] = useMemo(
    () =>
      pendingAttachments.map(attachment => ({
        fileHandleId: attachment.fileHandleId,
        label: attachment.fileName,
        contentType: attachment.contentType,
      })),
    [pendingAttachments],
  )

  return (
    <>
      <Box component="form" className={styles.card} onSubmit={handleFormSubmit}>
        {allowAttachments && (
          <ChatAttachmentStrip
            items={attachmentItems}
            onRemove={fileHandleId =>
              setPendingAttachments(prev =>
                prev.filter(a => a.fileHandleId !== fileHandleId),
              )
            }
          />
        )}
        <TextareaAutosize
          className={styles.textarea}
          minRows={1}
          maxRows={MAX_CHAT_INPUT_ROWS}
          value={value}
          onChange={e => onValueChange(e.target.value)}
          onKeyDown={handleTextareaKeyDown}
          placeholder={placeholder}
        />
        <div className={styles.actions}>
          {allowAttachments && (
            <Tooltip
              title={`Upload files (${ALLOWED_FILE_TYPES_LABEL})`}
              placement="left"
            >
              {attachmentButtonLabel ? (
                <Button
                  type="button"
                  variant="outlined"
                  disabled={disabled}
                  onClick={() => setIsAddFilesDialogOpen(true)}
                  sx={attachmentTextButtonSx}
                >
                  {attachmentButtonLabel}
                </Button>
              ) : (
                <IconButton
                  type="button"
                  aria-label="Add files"
                  disabled={disabled}
                  onClick={() => setIsAddFilesDialogOpen(true)}
                  sx={actionButtonSx}
                >
                  <Add />
                </IconButton>
              )}
            </Tooltip>
          )}
          <IconButton
            type="submit"
            aria-label="Send message"
            disabled={isSendDisabled}
            sx={actionButtonSx}
          >
            <ArrowUpward />
          </IconButton>
        </div>
      </Box>
      {allowAttachments && (
        <AddFilesDialog
          open={isAddFilesDialogOpen}
          onClose={() => setIsAddFilesDialogOpen(false)}
          currentAttachmentCount={pendingAttachments.length}
          onAttachmentUploaded={attachment =>
            setPendingAttachments(prev => [...prev, attachment])
          }
          onUploadStateChange={state =>
            setIsUploadingAttachments(state === 'UPLOADING')
          }
        />
      )}
    </>
  )
}

export default ChatInputArea
