import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { AttachmentStripItem, ChatAttachmentStrip } from './ChatAttachmentStrip'

describe('ChatAttachmentStrip', () => {
  it('renders nothing when there are no items', () => {
    const { container } = render(<ChatAttachmentStrip items={[]} />)

    expect(container).toBeEmptyDOMElement()
  })

  it('renders a chip for each item', () => {
    const items: AttachmentStripItem[] = [
      { fileHandleId: '1', label: 'a.txt', contentType: 'text/plain' },
      { fileHandleId: '2', label: 'b.pdf', contentType: 'application/pdf' },
    ]

    render(<ChatAttachmentStrip items={items} />)

    expect(screen.getByText('a.txt')).toBeInTheDocument()
    expect(screen.getByText('b.pdf')).toBeInTheDocument()
  })

  it('does not render a remove button on any chip when onRemove is omitted', () => {
    render(
      <ChatAttachmentStrip items={[{ fileHandleId: '1', label: 'a.txt' }]} />,
    )

    expect(screen.queryByRole('button')).not.toBeInTheDocument()
  })

  it('invokes onRemove with the fileHandleId when a chip is removed', async () => {
    const user = userEvent.setup()
    const onRemove = vi.fn()

    render(
      <ChatAttachmentStrip
        items={[{ fileHandleId: '1', label: 'a.txt' }]}
        onRemove={onRemove}
      />,
    )

    await user.click(screen.getByRole('button', { name: 'Remove a.txt' }))

    expect(onRemove).toHaveBeenCalledExactlyOnceWith('1')
  })

  it('shows a failed chip with its error message in a tooltip', async () => {
    const user = userEvent.setup()
    render(
      <ChatAttachmentStrip
        items={[
          {
            fileHandleId: '1',
            label: 'a.txt',
            status: 'failed',
            errorMessage: 'The file could not be found.',
          },
        ]}
      />,
    )

    await user.hover(screen.getByText('a.txt'))

    expect(
      await screen.findByText('The file could not be found.'),
    ).toBeInTheDocument()
  })
})
