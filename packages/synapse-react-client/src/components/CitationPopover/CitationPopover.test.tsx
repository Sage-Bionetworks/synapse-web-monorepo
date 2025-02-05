import { act, fireEvent, render, screen, waitFor } from '@testing-library/react'
import { UseQueryResult, useQuery } from '@tanstack/react-query'
import CitationPopover from './CitationPopover'

jest.mock('@tanstack/react-query', () => ({
  useQuery: jest.fn(),
}))

const mockUseQuery = useQuery as jest.MockedFunction<typeof useQuery>

global.fetch = jest.fn(() =>
  Promise.resolve({
    ok: true,
    status: 200,
    statusText: 'OK',
    text: () =>
      Promise.resolve(
        '@misc{test2025,\n  title = {Some BibTeX Entry},\n  year = {2025}\n}',
      ),
  }),
) as jest.Mock

const openPopover = () => {
  const button = screen.getByText('Cite As')
  fireEvent.click(button)
}

const data =
  '@misc{test2025,\n  title = {Some BibTeX Entry},\n  year = {2025}\n}'

describe('CitationPopover tests', () => {
  beforeEach(() => {
    jest.clearAllMocks()
    mockUseQuery.mockReturnValue({
      isLoading: false,
      data: data,
      error: null,
      isError: false,
      isSuccess: true,
    } as UseQueryResult<unknown, unknown>)
  })

  const mockProps = {
    doi: 'https://doi.org/10.1234/abcd1234',
    title: 'Some Article',
    boilerplateText: 'Some boilerplate text',
  }

  it('renders button', () => {
    render(<CitationPopover {...mockProps} />)
    const button = screen.getByText('Cite As')
    expect(button).toBeInTheDocument()
  })

  it('opens popover when button is clicked', async () => {
    render(<CitationPopover {...mockProps} />)
    openPopover()

    await waitFor(() => {
      expect(screen.getByTestId('CiteAsPopover')).toBeInTheDocument()
    })
  })

  it('shows menu options when select button is clicked with bibtex as default', async () => {
    render(<CitationPopover {...mockProps} />)
    openPopover()

    const select = screen.getByRole('combobox')
    act(() => fireEvent.mouseDown(select))

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
      expect(
        screen.getByText(content => content.includes('Some BibTeX Entry')),
      ).toBeInTheDocument()
      expect(
        screen.getByText(content => content.includes('2025')),
      ).toBeInTheDocument()
    })

    const copyButton = screen.getByTestId('CopyButton')
    act(() => fireEvent.click(copyButton))

    expect(mockWriteText).toHaveBeenCalledWith(
      '@misc{test2025,\n  title = {Some BibTeX Entry},\n  year = {2025}\n}',
    )
  })

  it('downloads citation', async () => {
    render(<CitationPopover {...mockProps} />)
    openPopover()

    await waitFor(() => {
      expect(
        screen.getByText(content => content.includes('Some BibTeX Entry')),
      ).toBeInTheDocument()
    })

    const createElementSpy = jest
      .spyOn(document, 'createElement')
      .mockReturnValue(document.createElement('a'))

    const appendChildSpy = jest.spyOn(document.body, 'appendChild')

    const mockLink = document.createElement('a')
    mockLink.setAttribute = jest.fn()
    mockLink.click = jest.fn()

    const downloadButton = screen.getByRole('button', {
      name: 'Download Citation',
    })

    act(() => fireEvent.click(downloadButton))

    const clickSpy = jest.spyOn(mockLink, 'click')

    expect(clickSpy).toHaveBeenCalled()
    expect(appendChildSpy).toHaveBeenCalledWith(mockLink)

    createElementSpy.mockRestore()
    appendChildSpy.mockRestore()
  })

  it('displays loading text while fetching citation', () => {
    mockUseQuery.mockReturnValue({
      isLoading: true,
      data: undefined,
      error: null,
      isError: false,
      isSuccess: false,
    } as UseQueryResult<unknown, unknown>)

    render(<CitationPopover {...mockProps} />)
    openPopover()

    expect(screen.getByText('Loading citation...')).toBeInTheDocument()
  })
})
