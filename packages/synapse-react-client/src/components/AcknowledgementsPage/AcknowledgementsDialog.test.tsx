import { render, screen, fireEvent } from '@testing-library/react'
import { vi } from 'vitest'
import AcknowledgementsDialog, {
  AcknowledgementsDialogProps,
} from './AcknowledgementsDialog'

// Mock DialogBase and utility functions
vi.mock('../DialogBase', () => ({
  DialogBase: ({ title, open, onCancel, content, actions }: any) => (
    <div data-testid="DialogBase">
      <div>{title}</div>
      <div>{open ? 'Open' : 'Closed'}</div>
      <div data-testid="dialog-content">{content}</div>
      <div data-testid="dialog-actions">{actions}</div>
      <button onClick={onCancel}>Close</button>
    </div>
  ),
}))
vi.mock('@/utils/functions/StringUtils', () => ({
  copyStringToClipboard: vi.fn(() => Promise.resolve()),
}))
vi.mock('../ToastMessage', () => ({
  displayToast: vi.fn(),
}))

describe('AcknowledgementsDialog', () => {
  const baseProps: AcknowledgementsDialogProps = {
    open: true,
    onClose: vi.fn(),
    createDoiHelpUrl: 'https://example.com/doi',
    portalAcknowledgement: 'Portal acknowledgement statement.',
    dataAvailabilityStatement: 'Data availability statement.',
    studyAcknowledgements: [
      { title: 'Study 1', statement: 'Statement 1' },
      { title: 'Study 2', statement: 'Statement 2' },
    ],
  }

  afterEach(() => {
    vi.clearAllMocks()
  })

  it('renders the dialog with all sections', () => {
    render(<AcknowledgementsDialog {...baseProps} />)
    expect(screen.getByTestId('DialogBase')).toBeInTheDocument()
    expect(screen.getByText('Acknowledgement Text')).toBeInTheDocument()
    expect(screen.getByText('Open')).toBeInTheDocument()
    expect(screen.getByText(/You must customize the text/i)).toBeInTheDocument()
    expect(
      screen.getByRole('link', { name: /How do I generate a DOI/i }),
    ).toHaveAttribute('href', baseProps.createDoiHelpUrl)
    // Should show all acknowledgement text content
    expect(
      screen.getByText(/PORTAL ACKNOWLEDGEMENT STATEMENT/i),
    ).toBeInTheDocument()
    expect(
      screen.getByText(/STUDY-SPECIFIC ACKNOWLEDGEMENT STATEMENTS/i),
    ).toBeInTheDocument()
    expect(
      screen.getByText(/Portal acknowledgement statement./i),
    ).toBeInTheDocument()
    expect(screen.getByText(/Study 1/)).toBeInTheDocument()
    expect(screen.getByText(/Statement 1/)).toBeInTheDocument()
    expect(screen.getByText(/Study 2/)).toBeInTheDocument()
    expect(screen.getByText(/Statement 2/)).toBeInTheDocument()
  })

  it('renders only available sections if some props are missing', () => {
    render(
      <AcknowledgementsDialog
        open={true}
        onClose={vi.fn()}
        createDoiHelpUrl="https://example.com/doi"
        portalAcknowledgement={undefined}
        dataAvailabilityStatement={undefined}
        studyAcknowledgements={undefined}
      />,
    )
    expect(
      screen.queryByText(/PORTAL ACKNOWLEDGEMENT STATEMENT/i),
    ).not.toBeInTheDocument()
    expect(
      screen.queryByText(/STUDY-SPECIFIC ACKNOWLEDGEMENT STATEMENTS/i),
    ).not.toBeInTheDocument()
  })

  it('calls onClose when the close button is clicked', () => {
    const onClose = vi.fn()
    render(<AcknowledgementsDialog {...baseProps} onClose={onClose} />)
    await userEvent.click(screen.getByText('Close'))
    expect(onClose).toHaveBeenCalled()
  })

  it('copies text to clipboard and shows toast when Copy to Clipboard is clicked', async () => {
    const { copyStringToClipboard } = await import(
      '@/utils/functions/StringUtils'
    )
    const { displayToast } = await import('../ToastMessage')
    render(<AcknowledgementsDialog {...baseProps} />)
    const copyButton = screen.getByRole('button', {
      name: /Copy to Clipboard/i,
    })
    fireEvent.click(copyButton)
    // Wait for the promise to resolve
    expect(copyStringToClipboard).toHaveBeenCalled()
    // Simulate promise resolution
    await Promise.resolve()
    expect(displayToast).toHaveBeenCalledWith(
      'Successfully copied to clipboard',
      'success',
    )
  })

  it('renders dialog as closed when open is false', () => {
    render(<AcknowledgementsDialog {...baseProps} open={false} />)
    expect(screen.getByText('Closed')).toBeInTheDocument()
  })
})
