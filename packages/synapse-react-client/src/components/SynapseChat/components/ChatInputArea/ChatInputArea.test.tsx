import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { useState } from 'react'
import { ChatInputArea, ChatInputAreaProps } from './ChatInputArea'

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
      />
    )
  }

  render(<Harness />)
  return { user, onSend }
}

describe('ChatInputArea', () => {
  beforeEach(() => {
    vi.clearAllMocks()
  })

  it('sends the trimmed message when Enter is pressed without Shift', async () => {
    const { user, onSend } = renderChatInputArea()

    await user.type(screen.getByRole('textbox'), '  hello  {Enter}')

    expect(onSend).toHaveBeenCalledExactlyOnceWith('hello')
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
})
