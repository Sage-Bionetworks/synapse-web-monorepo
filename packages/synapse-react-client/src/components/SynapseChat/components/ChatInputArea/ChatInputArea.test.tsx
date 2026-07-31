import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { useState } from 'react'
import {
  AddFilesDialog,
  AddFilesDialogProps,
} from '../AddFilesDialog/AddFilesDialog'
import { ChatInputArea, ChatInputAreaProps } from './ChatInputArea'

vi.mock('./AddFilesDialog', () => ({
  AddFilesDialog: vi.fn(),
  ALLOWED_FILE_TYPES_LABEL: 'pdf, csv, txt, json',
}))

const mockAddFilesDialog = vi.mocked(AddFilesDialog)

const mockUploadedAttachment = {
  fileHandleId: '9999991',
  fileName: 'report.pdf',
  contentType: 'application/pdf',
  sizeBytes: 1024,
}

function renderChatInputArea(
  props: Partial<Omit<ChatInputAreaProps, 'value' | 'onValueChange'>> & {
    initialValue?: string
  } = {},
) {
  const user = userEvent.setup()
  const onSend = props.onSend ?? vi.fn()

  function Harness() {
    const [value, setValue] = useState(props.initialValue ?? '')
    return (
      <ChatInputArea
        value={value}
        onValueChange={setValue}
        onSend={onSend}
        placeholder={props.placeholder}
        disabled={props.disabled}
        allowAttachments={props.allowAttachments}
      />
    )
  }

  render(<Harness />)
  return { user, onSend }
}

describe('ChatInputArea', () => {
  beforeEach(() => {
    vi.clearAllMocks()
    mockAddFilesDialog.mockImplementation(
      ({
        open,
        onAttachmentUploaded,
        onUploadStateChange,
      }: AddFilesDialogProps) => (
        <>
          {open && (
            <div>
              <span>Add files dialog</span>
              <button
                onClick={() => onAttachmentUploaded(mockUploadedAttachment)}
              >
                Simulate attachment uploaded
              </button>
              <button onClick={() => onUploadStateChange?.('UPLOADING')}>
                Simulate upload starting
              </button>
            </div>
          )}
        </>
      ),
    )
  })

  it('sends the trimmed message when Enter is pressed without Shift', async () => {
    const { user, onSend } = renderChatInputArea()

    await user.type(screen.getByRole('textbox'), '  hello  {Enter}')

    expect(onSend).toHaveBeenCalledExactlyOnceWith('hello', [])
  })

  it('does not send when Shift+Enter is pressed', async () => {
    const { user, onSend } = renderChatInputArea()

    await user.type(screen.getByRole('textbox'), 'hello')
    await user.keyboard('{Shift>}{Enter}{/Shift}')

    expect(onSend).not.toHaveBeenCalled()
  })

  it('disables the send button when the input is empty or whitespace-only', () => {
    renderChatInputArea({ initialValue: '   ' })

    expect(screen.getByRole('button', { name: 'Send message' })).toBeDisabled()
  })

  it('disables the send button when disabled', () => {
    renderChatInputArea({ initialValue: 'hello', disabled: true })

    expect(screen.getByRole('button', { name: 'Send message' })).toBeDisabled()
  })

  it('disables the send button while an attachment is uploading', async () => {
    const { user } = renderChatInputArea({
      initialValue: 'hello',
      allowAttachments: true,
    })

    await user.click(screen.getByRole('button', { name: 'Add files' }))
    await user.click(
      screen.getByRole('button', { name: 'Simulate upload starting' }),
    )

    expect(screen.getByRole('button', { name: 'Send message' })).toBeDisabled()
  })

  it('prevents the default form submission when the send button is clicked', async () => {
    const { user, onSend } = renderChatInputArea({ initialValue: 'hello' })
    const form = screen.getByRole('textbox').closest('form')!
    let capturedEvent: Event | undefined
    form.addEventListener('submit', event => {
      capturedEvent = event
    })

    await user.click(screen.getByRole('button', { name: 'Send message' }))

    expect(capturedEvent?.defaultPrevented).toBe(true)
    expect(onSend).toHaveBeenCalledTimes(1)
  })

  it('hides the attachment strip and the add-files button, and never renders the dialog, when allowAttachments is false', () => {
    renderChatInputArea({ allowAttachments: false })

    expect(
      screen.queryByRole('button', { name: 'Add files' }),
    ).not.toBeInTheDocument()
    expect(mockAddFilesDialog).not.toHaveBeenCalled()
  })

  it('sends attachments alongside the message, then clears them', async () => {
    const { user, onSend } = renderChatInputArea({
      initialValue: 'hello',
      allowAttachments: true,
    })

    await user.click(screen.getByRole('button', { name: 'Add files' }))
    await user.click(
      screen.getByRole('button', { name: 'Simulate attachment uploaded' }),
    )
    expect(screen.getByText('report.pdf')).toBeInTheDocument()

    await user.click(screen.getByRole('button', { name: 'Send message' }))

    expect(onSend).toHaveBeenCalledExactlyOnceWith('hello', [
      mockUploadedAttachment,
    ])
    expect(screen.queryByText('report.pdf')).not.toBeInTheDocument()
  })

  it('removing an attachment chip does not submit the message, even with text present', async () => {
    const { user, onSend } = renderChatInputArea({
      initialValue: 'hello',
      allowAttachments: true,
    })

    await user.click(screen.getByRole('button', { name: 'Add files' }))
    await user.click(
      screen.getByRole('button', { name: 'Simulate attachment uploaded' }),
    )

    await user.click(screen.getByRole('button', { name: 'Remove report.pdf' }))

    expect(screen.queryByText('report.pdf')).not.toBeInTheDocument()
    expect(onSend).not.toHaveBeenCalled()
  })
})
