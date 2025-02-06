import { cleanup, render, screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { UseQueryResult } from '@tanstack/react-query'
import CitationPopover from './CitationPopover'
import { useCitation } from './useCitation'
import { createLinkAndDownload } from './CitationPopoverUtils'

jest.mock('./useCitation', () => ({
  useCitation: jest.fn(),
}))

jest.mock('./CitationPopoverUtils', () => ({
  createLinkAndDownload: jest.fn(),
}))

const mockUseCitation = jest.mocked(useCitation)
const mockCreateLinkAndDownload = jest.mocked(createLinkAndDownload)

const openPopover = async () => {
  const button = screen.getByTestId('CiteAsButton')
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
    jest.clearAllMocks()
    mockUseCitation.mockReturnValue({
      isLoading: false,
      data: data,
      error: null,
      isError: false,
      isSuccess: true,
    } as UseQueryResult<string, Error>)
  })
  afterEach(() => {
    cleanup()
  })

  it('renders button', () => {
    render(<CitationPopover {...mockProps} />)
    const button = screen.queryByTestId('CiteAsButton')
    expect(button).toBeInTheDocument()
  })

  it('opens popover when button is clicked and fetches citation', async () => {
    render(<CitationPopover {...mockProps} />)
    openPopover()

    await waitFor(() => {
      expect(screen.getByTestId('CiteAsPopover')).toBeInTheDocument()
    })

    await waitFor(() => {
      expect(mockUseCitation).toHaveBeenCalledWith(
        mockProps.doi,
        'bibtex',
        true,
      )
    })

    await waitFor(() => {
      expect(
        screen.getByText(content => content.includes('Some BibTeX Entry')),
      ).toBeInTheDocument()
    })
  })

  it('shows menu options when select button is clicked with bibtex as default', async () => {
    render(<CitationPopover {...mockProps} />)
    openPopover()

    await waitFor(() => {
      expect(screen.getByTestId('CiteAsPopover')).toBeInTheDocument()
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
    openPopover()

    await waitFor(() => {
      expect(
        screen.getByText(content => content.includes('Some boilerplate text')),
      ).toBeInTheDocument()
    })
  })

  it('copies citation to clipboard', async () => {
    render(<CitationPopover {...mockProps} />)
    const mockWriteText = jest.fn().mockResolvedValue('copied')
    Object.assign(navigator, {
      clipboard: { writeText: mockWriteText },
    })
    openPopover()

    await waitFor(() => {
      expect(screen.getByTestId('CiteAsPopover')).toBeInTheDocument()
    })

    await waitFor(() => {
      expect(
        screen.getByText(content => content.includes('Some BibTeX Entry')),
      ).toBeInTheDocument()
    })

    const copyButton = screen.getByTestId('CopyButton')
    await userEvent.click(copyButton)

    await waitFor(() => {
      expect(mockWriteText).toHaveBeenCalledWith(data)
    })
  })

  it('downloads citation', async () => {
    render(<CitationPopover {...mockProps} />)
    const { title } = mockProps
    openPopover()

    await waitFor(() => {
      expect(screen.getByTestId('CiteAsPopover')).toBeInTheDocument()
    })

    await waitFor(() => {
      expect(
        screen.getByText(content => content.includes('Some BibTeX Entry')),
      ).toBeInTheDocument()
    })

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
    mockUseCitation.mockReturnValue({
      isLoading: true,
      data: undefined,
      error: null,
      isError: false,
      isSuccess: false,
    } as UseQueryResult<string, Error>)

    render(<CitationPopover {...mockProps} />)
    openPopover()

    await waitFor(() =>
      expect(screen.getByTestId('CiteAsPopover')).toBeInTheDocument(),
    )

    expect(screen.getByText('Loading citation...')).toBeInTheDocument()
  })
})
