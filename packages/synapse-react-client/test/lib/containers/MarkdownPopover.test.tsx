import { render, screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import React from 'react'
import {
  MarkdownPopover,
  MarkdownPopoverProps,
} from '../../../src/lib/containers/MarkdownPopover'
import { createWrapper } from '../../testutils/TestingLibraryUtils'
import { SynapseContextType } from '../../../src/lib/utils/SynapseContext'

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
    const component = renderComponent()

    const showPopoverButton = screen.getByRole('button')

    // Should not be shown initially
    expect(
      component.container.querySelector('.Tooltip'),
    ).not.toBeInTheDocument()

    // Click to show
    await userEvent.click(showPopoverButton)

    await screen.findByText(markdownText)

    // Click to hide
    await userEvent.click(showPopoverButton)

    // We hide using SCSS that @testing-library doesn't know about.
    // Get the DOM node and check for the class that applies "display: none"
    const tooltip = component.container.querySelector('.Tooltip')

    await waitFor(() => expect(tooltip).toHaveClass('fade-in-out-exit-done'))
  })
})
