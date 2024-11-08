import { render, screen } from '@testing-library/react'
import React from 'react'
import SynapseChatInteraction, {
  SynapseChatInteractionProps,
} from './SynapseChatInteraction'

const defaultProps: SynapseChatInteractionProps = {
  userMessage: 'hello world',
}

function renderComponent(props?: Partial<SynapseChatInteractionProps>) {
  render(<SynapseChatInteraction {...defaultProps} {...props} />)
}
describe('SynapseChatInteraction tests', () => {
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
})
