import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { AttachmentChip } from './AttachmentChip'

describe('AttachmentChip', () => {
  it('renders the filename and a type label derived from contentType', () => {
    render(<AttachmentChip label="report.pdf" contentType="application/pdf" />)

    expect(screen.getByText('report.pdf')).toBeInTheDocument()
    expect(screen.getByText('PDF')).toBeInTheDocument()
  })

  it('renders a generic "FILE" type label when contentType is omitted', () => {
    render(<AttachmentChip label="9999999" />)

    expect(screen.getByText('9999999')).toBeInTheDocument()
    expect(screen.getByText('FILE')).toBeInTheDocument()
  })

  it('does not render a remove button when onRemove is omitted', () => {
    render(<AttachmentChip label="report.pdf" contentType="application/pdf" />)

    expect(screen.queryByRole('button')).not.toBeInTheDocument()
  })

  it('renders an accessible remove button that invokes onRemove when clicked', async () => {
    const user = userEvent.setup()
    const onRemove = vi.fn()
    render(
      <AttachmentChip
        label="report.pdf"
        contentType="application/pdf"
        onRemove={onRemove}
      />,
    )

    await user.click(screen.getByRole('button', { name: 'Remove report.pdf' }))

    expect(onRemove).toHaveBeenCalledTimes(1)
  })

  it('supports a custom accessible label for the remove button', () => {
    render(
      <AttachmentChip
        label="report.pdf"
        onRemove={vi.fn()}
        removeButtonLabel="Remove attachment report.pdf"
      />,
    )

    expect(
      screen.getByRole('button', { name: 'Remove attachment report.pdf' }),
    ).toBeInTheDocument()
  })

  it('shows a "Failed" label instead of the content type label when status is failed', () => {
    render(
      <AttachmentChip
        label="report.pdf"
        contentType="application/pdf"
        status="failed"
      />,
    )

    expect(screen.getByText('Failed')).toBeInTheDocument()
    expect(screen.queryByText('PDF')).not.toBeInTheDocument()
  })

  it('shows the failure message in a tooltip when status is failed', async () => {
    const user = userEvent.setup()
    render(
      <AttachmentChip
        label="report.pdf"
        status="failed"
        errorMessage="The file could not be found."
      />,
    )

    await user.hover(screen.getByText('report.pdf'))

    expect(
      await screen.findByText('The file could not be found.'),
    ).toBeInTheDocument()
  })
})
