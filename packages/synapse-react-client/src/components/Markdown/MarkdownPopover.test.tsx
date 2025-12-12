import { createWrapper } from '@/testutils/TestingLibraryUtils'
import { SynapseContextType } from '@/stores/SynapseContext/SynapseContext'
import {
  render,
  screen,
  waitForElementToBeRemoved,
} from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { MarkdownPopover, MarkdownPopoverProps } from './MarkdownPopover'

const markdownText = 'This is markdown text.'

const defaultProps: MarkdownPopoverProps = {
  children: <div>Click Me</div>,
  contentProps: {
    markdown: markdownText,
  },
}

function renderComponent(wrapperProps?: SynapseContextType) {
  return render(<MarkdownPopover {...defaultProps} />, {
    wrapper: createWrapper(wrapperProps),
  })
}

describe('MarkdownPopover tests', () => {
  it('Appears and disappears on click', async () => {
    const user = userEvent.setup()
    const component = renderComponent()

    const showPopoverButton = screen.getByRole('button')

    // Should not be shown initially
    expect(
      component.container.querySelector('.Tooltip'),
    ).not.toBeInTheDocument()

    // Click to show
    await user.click(showPopoverButton)

    const tooltip = screen.getByRole('tooltip')
    expect(tooltip).toHaveTextContent(markdownText)

    // Click to hide
    await user.click(showPopoverButton)

    waitForElementToBeRemoved(tooltip)
  })
})
