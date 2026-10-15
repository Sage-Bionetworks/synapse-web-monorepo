import { server } from '@/mocks/msw/server'
import { createWrapper } from '@/testutils/TestingLibraryUtils'
import { render, screen, waitFor, within } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import CitationPopover from './CitationPopover'
import { createLinkAndDownload } from './CitationPopoverUtils'
import { delay, http, HttpResponse } from 'msw'
import MarkdownSynapse from '../Markdown/MarkdownSynapse'

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

const CITATION_URL = 'https://citation.doi.org/format'
const onCitationRequest = vi.fn()

function renderComponent() {
  return render(<CitationPopover {...mockProps} />, {
    wrapper: createWrapper(),
  })
}

describe('CitationPopover tests', () => {
  beforeAll(() => server.listen())
  afterEach(() => server.resetHandlers())
  afterAll(() => server.close())

  beforeEach(() => {
    vi.clearAllMocks()
    server.use(
      http.get(CITATION_URL, ({ request }) => {
        const url = new URL(request.url)
        onCitationRequest(
          url.searchParams.get('doi'),
          url.searchParams.get('style'),
        )
        return HttpResponse.text(data)
      }),
    )
  })

  it('renders button', async () => {
    renderComponent()
    await screen.findByRole('button', { name: /Cite As/i })
  })

  it('opens popover when button is clicked and fetches citation', async () => {
    renderComponent()
    await openPopover()

    await screen.findByRole('dialog', {
      name: /Citation options/i,
    })

    await waitFor(() => {
      expect(onCitationRequest).toHaveBeenCalledWith(
        '10.1234/abcd1234',
        'bibtex',
      )
    })

    await screen.findByText(content => content.includes('Some BibTeX Entry'))
  })

  it('shows menu options when select button is clicked with bibtex as default', async () => {
    renderComponent()
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
    renderComponent()
    await openPopover()

    await screen.findByText(content =>
      content.includes('Some boilerplate text'),
    )
  })

  it('copies citation to clipboard', async () => {
    renderComponent()
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
    renderComponent()
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
    server.use(http.get(CITATION_URL, () => delay('infinite')))

    renderComponent()
    await openPopover()

    await screen.findByRole('dialog', {
      name: /Citation options/i,
    })

    expect(screen.getByText('Loading citation...')).toBeInTheDocument()
  })

  it('displays error message', async () => {
    server.use(
      http.get(
        CITATION_URL,
        () => new HttpResponse(null, { status: 500, statusText: 'Boom' }),
      ),
    )

    renderComponent()
    await openPopover()

    await screen.findByRole('dialog', {
      name: /Citation options/i,
    })

    const alert = await screen.findByRole('alert')
    within(alert).getByText('Failed to fetch citation: 500: Boom')
  })
})
