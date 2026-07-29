import { createWrapper } from '@/testutils/TestingLibraryUtils'
import { render, screen, waitFor } from '@testing-library/react'
import SynapseChatInteraction, {
  SynapseChatInteractionProps,
} from './SynapseChatInteraction'

const defaultProps: SynapseChatInteractionProps = {
  userMessage: 'hello world',
  agentAvatar: <div />,
  userAvatar: <div />,
}

function renderComponent(props?: Partial<SynapseChatInteractionProps>) {
  return render(<SynapseChatInteraction {...defaultProps} {...props} />, {
    wrapper: createWrapper(),
  })
}

describe('SynapseChatInteraction tests', () => {
  const scrollIntoViewMock = vi.fn()

  beforeEach(() => {
    scrollIntoViewMock.mockClear()
    window.HTMLElement.prototype.scrollIntoView = scrollIntoViewMock
  })

  it('Chat response is rendered', async () => {
    renderComponent({
      chatResponseText: 'here is a response',
    })

    const text = await screen.findByText('here is a response')
    expect(text).toBeInTheDocument()
  })

  it('Custom LLM ML elements are removed, and tool_name content is deleted', async () => {
    renderComponent({
      chatResponseText:
        '<function_results>\n<result>\n<tool_name><REDACTED>tool-name</tool_name>\n<stdout>  Content is cleaned up \n</stdout>\n</result>\n',
    })

    const text = await screen.findByText('Content is cleaned up')
    expect(text).toBeInTheDocument()
    expect(screen.queryByText('tool-name')).not.toBeInTheDocument()
    // html should be removed in 2 ways (by the DOMParser cleanup in SynapseChatInteraction as well as the xss html sanitizer in MarkdownSynapse)
    expect(screen.queryByText('<result>')).not.toBeInTheDocument()
    expect(screen.queryByRole('alert')).not.toBeInTheDocument()
  })

  it('Error is shown in an alert', async () => {
    const errorMessage =
      'Sorry, AI has become uncontrollable and superintelligent leading to human existential risk'
    renderComponent({
      chatErrorReason: errorMessage,
    })

    const alertElement = await screen.findByRole('alert')
    expect(alertElement).toBeInTheDocument()
    expect(screen.queryByText(errorMessage)).toBeInTheDocument()
  })

  it('scrolls to the bottom once the response arrives', async () => {
    const { rerender } = renderComponent({
      scrollIntoView: true,
      chatResponseText: '',
    })

    // on mount, while still "Thinking...", the new interaction is scrolled into view
    expect(scrollIntoViewMock).toHaveBeenCalledTimes(1)

    rerender(
      <SynapseChatInteraction
        {...defaultProps}
        scrollIntoView
        chatResponseText="here is the full answer, which may be taller than the viewport"
      />,
    )

    // once the response lands, it scrolls again - this time to the bottom of the response, since
    // the answer may have grown taller than what the mount-time scroll originally brought into view
    await waitFor(() => expect(scrollIntoViewMock).toHaveBeenCalledTimes(2))
    expect(scrollIntoViewMock).toHaveBeenLastCalledWith({
      behavior: 'smooth',
      block: 'end',
    })
  })

  it('does not scroll again on response arrival when scrollIntoView is false', async () => {
    const { rerender } = renderComponent({
      scrollIntoView: false,
      chatResponseText: '',
    })

    expect(scrollIntoViewMock).not.toHaveBeenCalled()

    rerender(
      <SynapseChatInteraction
        {...defaultProps}
        scrollIntoView={false}
        chatResponseText="here is the full answer"
      />,
    )

    await screen.findByText('here is the full answer')
    expect(scrollIntoViewMock).not.toHaveBeenCalled()
  })
})
