import Add from '@mui/icons-material/Add'
import ArrowUpward from '@mui/icons-material/ArrowUpward'
import { Box, IconButton, TextareaAutosize, Tooltip } from '@mui/material'
import {
  Dispatch,
  FormEventHandler,
  KeyboardEventHandler,
  SetStateAction,
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
  attachments: ChatAttachment[]
  onAttachmentsChange: Dispatch<SetStateAction<ChatAttachment[]>>
  /** The caller clears `value` and `attachments` once the message has been sent. */
  onSend: (message: string, attachments: ChatAttachment[]) => void
  placeholder?: string
  /** A session is being created, or a response is in flight. */
  disabled?: boolean
  /** @default false */
  allowAttachments?: boolean
}

const actionButtonSx = {
  height: '36px',
  px: '12px',
  border: '1px solid',
  borderColor: 'grey.300',
  borderRadius: '1px',
}

/**
 * The chat composer: a bordered card containing a conditional attachment strip, an
 * auto-growing borderless text input, and a right-aligned row of actions (attach + send).
 * Owns attachment upload progress. The message text and attachments are controlled by the caller,
 * which sets the text from outside the card (e.g. suggested-prompt pills) and clears both only
 * once a send goes through, so a failed send keeps them.
 */
export function ChatInputArea({
  value,
  onValueChange,
  attachments,
  onAttachmentsChange,
  onSend,
  placeholder,
  disabled = false,
  allowAttachments = false,
}: ChatInputAreaProps) {
  const [isAddFilesDialogOpen, setIsAddFilesDialogOpen] = useState(false)
  const [isUploadingAttachments, setIsUploadingAttachments] = useState(false)

  const isSendDisabled = disabled || !value.trim() || isUploadingAttachments

  const submit = () => {
    if (isSendDisabled) {
      return
    }
    onSend(value.trim(), attachments)
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
      attachments.map(attachment => ({
        fileHandleId: attachment.fileHandleId,
        label: attachment.fileName,
        contentType: attachment.contentType,
      })),
    [attachments],
  )

  return (
    <>
      <Box component="form" className={styles.card} onSubmit={handleFormSubmit}>
        {allowAttachments && (
          <ChatAttachmentStrip
            items={attachmentItems}
            // While disabled, the attachments may already be on their way with a message
            onRemove={
              disabled
                ? undefined
                : fileHandleId =>
                    onAttachmentsChange(prev =>
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
              <IconButton
                type="button"
                aria-label="Add files"
                disabled={disabled}
                onClick={() => setIsAddFilesDialogOpen(true)}
                sx={actionButtonSx}
              >
                <Add />
              </IconButton>
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
          currentAttachmentCount={attachments.length}
          onAttachmentUploaded={attachment =>
            onAttachmentsChange(prev => [...prev, attachment])
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
