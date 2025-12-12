import {
  getUseQueryErrorMock,
  getUseQueryLoadingMock,
  getUseQuerySuccessMock,
} from '@/testutils/ReactQueryMockUtils'
import { render, screen, waitFor, within } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import CitationPopover from './CitationPopover'
import { createLinkAndDownload } from './CitationPopoverUtils'
import { useCitation } from './useCitation'
import MarkdownSynapse from '../Markdown/MarkdownSynapse/MarkdownSynapse'

vi.mock('./useCitation', () => ({
  useCitation: vi.fn(),
}))

vi.mock('./CitationPopoverUtils', () => ({
  createLinkAndDownload: vi.fn(),
}))

vi.mock('../Markdown/MarkdownSynapse', () => ({
  default: vi.fn(),
}))
const mockMarkdownSynapse = vi.mocked(MarkdownSynapse)
mockMarkdownSynapse.mockImplementation(
  props =>
    (<div data-testid={'MarkdownSynapseContent'}>{props.markdown}</div>) as any,
)
const mockUseCitation = vi.mocked(useCitation)
const mockCreateLinkAndDownload = vi.mocked(createLinkAndDownload)

const openPopover = async () => {
  const button = screen.getByRole('button', { name: /Cite As/i })
  await userEvent.click(button)
}

const data =
  '@misc{test2025,\n  title = {Some BibTeX Entry},\n  year = {2025}\n}'

const mockProps = {
  doi: 'https://doi.org/10.1234/abcd1234',
  title: 'Some Article',
  boilerplateText: 'Some boilerplate text',
}

describe('CitationPopover tests', () => {
  beforeEach(() => {
    vi.clearAllMocks()
    mockUseCitation.mockReturnValue(getUseQuerySuccessMock(data))
  })

  it('renders button', async () => {
    render(<CitationPopover {...mockProps} />)
    await screen.findByRole('button', { name: /Cite As/i })
  })

  it('opens popover when button is clicked and fetches citation', async () => {
    render(<CitationPopover {...mockProps} />)
    await openPopover()

    await screen.findByRole('dialog', {
      name: /Citation options/i,
    })

    await waitFor(() => {
      expect(mockUseCitation).toHaveBeenCalledWith(
        mockProps.doi,
        'bibtex',
        true,
      )
    })

    await screen.findByText(content => content.includes('Some BibTeX Entry'))
  })

  it('shows menu options when select button is clicked with bibtex as default', async () => {
    render(<CitationPopover {...mockProps} />)
    await openPopover()

    await screen.findByRole('dialog', {
      name: /Citation options/i,
    })

    const select = screen.getByRole('combobox')
    await userEvent.click(select)

    await waitFor(() => {
      const bibtexItems = screen.getAllByText('bibtex')
      expect(bibtexItems.length).toBeGreaterThan(0)
      expect(screen.getByText('apa')).toBeInTheDocument()
      expect(screen.getByText('science')).toBeInTheDocument()
      expect(screen.getByText('nature')).toBeInTheDocument()
      expect(screen.getByText('ieee')).toBeInTheDocument()
    })
  })

  it('displays boilerplate text when available', async () => {
    render(<CitationPopover {...mockProps} />)
    await openPopover()

    await screen.findByText(content =>
      content.includes('Some boilerplate text'),
    )
  })

  it('copies citation to clipboard', async () => {
    render(<CitationPopover {...mockProps} />)
    const mockWriteText = vi.fn().mockResolvedValue('copied')
    Object.assign(navigator, {
      clipboard: { writeText: mockWriteText },
    })
    await openPopover()

    await screen.findByRole('dialog', {
      name: /Citation options/i,
    })

    await screen.findByText(content => content.includes('Some BibTeX Entry'))

    const copyButton = screen.getByRole('button', {
      name: /Copy to clipboard/i,
    })
    await userEvent.click(copyButton)

    await waitFor(() => {
      expect(mockWriteText).toHaveBeenCalledWith(data)
    })
  })

  it('downloads citation', async () => {
    render(<CitationPopover {...mockProps} />)
    const { title } = mockProps
    await openPopover()

    await screen.findByRole('dialog', {
      name: /Citation options/i,
    })

    await screen.findByText(content => content.includes('Some BibTeX Entry'))

    const downloadButton = screen.getByRole('button', {
      name: 'Download Citation',
    })

    await userEvent.click(downloadButton)

    await waitFor(() => {
      expect(mockCreateLinkAndDownload).toHaveBeenCalledWith(
        title,
        'bib',
        expect.any(String),
      )
    })
  })

  it('displays loading text while fetching citation', async () => {
    mockUseCitation.mockReturnValue(getUseQueryLoadingMock())

    render(<CitationPopover {...mockProps} />)
    await openPopover()

    await screen.findByRole('dialog', {
      name: /Citation options/i,
    })

    expect(screen.getByText('Loading citation...')).toBeInTheDocument()
  })

  it('displays error message', async () => {
    const mockError = new Error('Failed to fetch citation.')

    mockUseCitation.mockReturnValue(getUseQueryErrorMock(mockError))

    render(<CitationPopover {...mockProps} />)
    await openPopover()

    await screen.findByRole('dialog', {
      name: /Citation options/i,
    })

    const alert = await screen.findByRole('alert')
    within(alert).getByText('Failed to fetch citation.')
  })
})
