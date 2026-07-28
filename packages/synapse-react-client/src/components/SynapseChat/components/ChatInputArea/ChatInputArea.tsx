import ArrowUpward from '@mui/icons-material/ArrowUpward'
import { Box, IconButton, TextareaAutosize } from '@mui/material'
import { FormEventHandler, KeyboardEventHandler } from 'react'
import styles from './ChatInputArea.module.scss'

/** Max number of visible rows the textarea grows to before it scrolls internally. */
export const MAX_CHAT_INPUT_ROWS = 6

export type ChatInputAreaProps = {
  value: string
  onValueChange: (value: string) => void
  onSend: (message: string) => void
  placeholder?: string
  /** No session yet, or a response is in flight. */
  disabled?: boolean
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
 * Owns attachment upload state end-to-end; the message text itself is controlled by the
 * caller since it can also be set from outside the card (e.g. suggested-prompt pills).
 */
export function ChatInputArea({
  value,
  onValueChange,
  onSend,
  placeholder,
  disabled = false,
}: ChatInputAreaProps) {
  const isSendDisabled = disabled || !value.trim()

  const submit = () => {
    if (isSendDisabled) {
      return
    }
    onSend(value.trim())
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

  return (
    <>
      <Box component="form" className={styles.card} onSubmit={handleFormSubmit}>
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
    </>
  )
}

export default ChatInputArea
