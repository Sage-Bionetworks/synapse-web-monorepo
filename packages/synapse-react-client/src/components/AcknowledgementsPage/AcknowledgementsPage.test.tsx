import { render, screen } from '@testing-library/react'
import AcknowledgementPage from './AcknowledgementsPage'
import userEvent from '@testing-library/user-event'

// Mock child components
vi.mock('../ComponentCollapse', () => ({
  default: ({ children }: any) => (
    <div data-testid="ComponentCollapse">{children}</div>
  ),
}))
vi.mock('./AcknowledgementsDialog', () => ({
  default: (props: any) => (
    <div data-testid="AcknowledgementsDialog">
      {props.open ? 'Dialog Open' : 'Dialog Closed'}
    </div>
  ),
}))
vi.mock('./StudyAcknowledgements', () => ({
  StudyAcknowledgements: ({ onSelectChange }: any) => (
    <button
      data-testid="StudyAcknowledgements"
      onClick={() =>
        onSelectChange({ title: 'Study 1', statement: 'Statement 1' }, true)
      }
    >
      Select Study
    </button>
  ),
}))
vi.mock('../Markdown/MarkdownCollapse', () => ({
  default: () => <div data-testid="MarkdownCollapse" />,
}))

describe('AcknowledgementPage', () => {
  const defaultProps = {
    portalName: 'Test Portal',
    createDoiHelpUrl: 'https://example.com/doihelp',
    portalAcknowledgementProps: { ownerId: 'syn1', wikiId: '1' },
    dataAvailabilityProps: { ownerId: 'syn1', wikiId: '2' },
    studyAcknowledgementSql: 'SELECT * FROM synTable',
  }

  it('renders headings', () => {
    render(<AcknowledgementPage {...defaultProps} />)
    expect(
      screen.getByText(/How to acknowledge data from this portal/i),
    ).toBeInTheDocument()
    expect(screen.getByText(/How to use this page/i)).toBeInTheDocument()
  })

  it('renders the StudyAcknowledgements component', () => {
    render(<AcknowledgementPage {...defaultProps} />)
    expect(screen.getByTestId('StudyAcknowledgements')).toBeInTheDocument()
  })

  it('adds an acknowledgement item when a study is selected', async () => {
    render(<AcknowledgementPage {...defaultProps} />)
    const selectButton = screen.getByTestId('StudyAcknowledgements')
    await userEvent.click(selectButton)
    // Open the dialog to check if the item is included
    const generateButton = screen.getByRole('button', {
      name: /Generate Data Acknowledgements/i,
    })
    await userEvent.click(generateButton)
    expect(screen.getByTestId('AcknowledgementsDialog')).toHaveTextContent(
      'Dialog Open',
    )
  })

  it('opens and closes the acknowledgements dialog', async () => {
    render(<AcknowledgementPage {...defaultProps} />)
    const generateButton = screen.getByRole('button', {
      name: /Generate Data Acknowledgements/i,
    })
    await userEvent.click(generateButton)
    expect(screen.getByTestId('AcknowledgementsDialog')).toHaveTextContent(
      'Dialog Open',
    )
  })

  it('renders ComponentCollapse with portal and data availability statements', () => {
    render(<AcknowledgementPage {...defaultProps} />)
    expect(
      screen.getAllByTestId('MarkdownCollapse').length,
    ).toBeGreaterThanOrEqual(2)
    expect(screen.getByTestId('ComponentCollapse')).toBeInTheDocument()
  })

  it('renders the DOI help link', () => {
    render(<AcknowledgementPage {...defaultProps} />)
    const link = screen.getByRole('link', { name: /How do I generate a DOI/i })
    expect(link).toHaveAttribute('href', defaultProps.createDoiHelpUrl)
    expect(link).toHaveAttribute('target', '_blank')
  })
})
