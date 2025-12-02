import { MOCK_CONTEXT_VALUE } from '@/mocks/MockSynapseContext'
import { mockEntityWikiPage } from '@/mocks/mockWiki'
import {
  useGetWikiAttachments,
  useGetWikiPage,
} from '@/synapse-queries/wiki/useWiki'
import {
  getUseQueryIdleMock,
  getUseQuerySuccessMock,
} from '@/testutils/ReactQueryMockUtils'
import { createWrapper } from '@/testutils/TestingLibraryUtils'
import { SynapseContextType } from '@/stores/SynapseContext/SynapseContext'
import { render, screen, waitFor, within } from '@testing-library/react'
import { describe, it, vi } from 'vitest'
import MarkdownSynapse, {
  MarkdownSynapseProps,
  NO_WIKI_CONTENT,
} from './MarkdownSynapse'
import MarkdownProvenanceGraph from '../widget/MarkdownProvenanceGraph'
import MarkdownSynapseImage from '../widget/MarkdownSynapseImage'
import MarkdownSynapsePlot from '../widget/MarkdownSynapsePlot'
import { MemoryRouter } from 'react-router'
import * as MarkdownUtils from '../MarkdownUtils'

vi.mock('./widget/MarkdownSynapseImage', () => ({
  default: vi
    .fn()
    .mockReturnValue(<img data-testid={'MarkdownSynapseImage'}></img>),
}))
vi.mock('./widget/MarkdownSynapsePlot', () => ({
  default: vi
    .fn()
    .mockReturnValue(<figure data-testid={'MarkdownSynapsePlot'}></figure>),
}))
vi.mock('./widget/MarkdownProvenanceGraph', () => ({
  default: vi
    .fn()
    .mockReturnValue(<figure data-testid={'MarkdownProvenanceGraph'}></figure>),
}))
vi.mock('@/synapse-queries/wiki/useWiki')

const mockMarkdownSynapseImage = vi.mocked(MarkdownSynapseImage)
const mockMarkdownSynapsePlot = vi.mocked(MarkdownSynapsePlot)
const mockMarkdownProvenanceGraph = vi.mocked(MarkdownProvenanceGraph)
const mockUseGetWikiPage = vi.mocked(useGetWikiPage)
const mockUseGetWikiAttachments = vi.mocked(useGetWikiAttachments)
function getComponent(props: MarkdownSynapseProps) {
  return <MarkdownSynapse {...props} />
}

const renderComponent = (
  props: MarkdownSynapseProps,
  synapseContext?: SynapseContextType,
) => {
  return render(getComponent(props), { wrapper: createWrapper(synapseContext) })
}

const processMathSpy = vi.spyOn(MarkdownUtils, 'processMath')

describe('MarkdownSynapse tests', () => {
  beforeEach(() => {
    processMathSpy.mockReset()
    vi.clearAllMocks()

    // Reset the useGetWikiPage` mock
    mockUseGetWikiPage.mockReturnValue(getUseQueryIdleMock())
    mockUseGetWikiAttachments.mockReturnValue(getUseQueryIdleMock())
  })

  describe('renders with basic functionality', () => {
    it('mounts correctly with markdown already loaded', () => {
      const val = 'loremipsum....'
      const markdownPlaceholder = `# ${val}`
      const props: MarkdownSynapseProps = {
        markdown: markdownPlaceholder,
      }
      renderComponent(props)

      screen.getByRole('heading')
      screen.getByText(val)
    })

    it('reprocesses markdown when markdown prop changes', () => {
      const firstVal = 'loremipsum....'
      const secondVal = 'dolorsit....'
      const { rerender } = renderComponent({
        markdown: firstVal,
      })
      screen.getByText(firstVal)

      rerender(getComponent({ markdown: secondVal }))
      screen.getByText(secondVal)
    })

    it('mounts correctly with markdown NOT already loaded', async () => {
      const props = {
        wikiId: 'xxx', // placeholder
        ownerId: 'xxx', // placeholder
      }

      const text = 'text'
      const markdownPlaceholder = `## ${text}`
      mockUseGetWikiPage.mockReturnValue(
        getUseQuerySuccessMock({
          ...mockEntityWikiPage,
          markdown: markdownPlaceholder,
        }),
      )

      // we only care to mock these functions and ensure they're called
      // Full functionality will get tested in the specific widget tests
      // mount the component
      renderComponent(props)
      // verify functions were called
      const heading = await screen.findByRole('heading')
      within(heading).getByText(text)
    })

    it('renders correctly inline', async () => {
      const markdownPlaceholder = `[linkname](synapse.org)`
      const props: MarkdownSynapseProps = {
        markdown: markdownPlaceholder,
        renderInline: true,
      }
      renderComponent(props)
      await screen.findByRole('link')
    })
  })

  describe('it conditionally renders no content placeholder', () => {
    it('by default, displays nothing when markdown is undefined', async () => {
      const props: MarkdownSynapseProps = {
        ownerId: undefined,
        wikiId: undefined,
        objectType: undefined,
        markdown: undefined,
      }
      renderComponent(props)

      await waitFor(() => {
        expect(screen.getByTestId('markdown')).toBeEmptyDOMElement()
      })
    })

    it('by default, displays empty string when wiki markdown is empty string', () => {
      const props: MarkdownSynapseProps = {
        wikiId: 'xxx', // placeholder
        ownerId: 'xxx', // placeholder
      }

      mockUseGetWikiPage.mockReturnValue(
        getUseQuerySuccessMock({
          ...mockEntityWikiPage,
          markdown: '',
        }),
      )

      renderComponent(props)

      const markdownField = screen.getByTestId('markdown')
      expect(markdownField).toHaveTextContent('')
    })

    it('when specified, displays no content placeholder when wiki markdown is undefined', async () => {
      const props: MarkdownSynapseProps = {
        markdown: undefined,
        showPlaceholderIfNoWikiContent: true,
      }
      renderComponent(props)
      await screen.findByText(NO_WIKI_CONTENT)
    })

    it('when specified, displays no content placeholder when wiki markdown is empty string', async () => {
      const props: MarkdownSynapseProps = {
        wikiId: 'xxx', // placeholder
        ownerId: 'xxx', // placeholder
        showPlaceholderIfNoWikiContent: true,
      }

      mockUseGetWikiPage.mockReturnValue(
        getUseQuerySuccessMock({
          ...mockEntityWikiPage,
          markdown: '',
        }),
      )
      renderComponent(props)
      await screen.findByText(NO_WIKI_CONTENT)
    })
  })

  describe('it renders a video widget', () => {
    it('do not render a video widget without token', () => {
      mockUseGetWikiPage.mockReturnValue(
        getUseQuerySuccessMock({
          ...mockEntityWikiPage,
          markdown: '${video?mp4SynapseId=syn21714374}',
        }),
      )

      const props: MarkdownSynapseProps = {
        ownerId: '_',
      }
      renderComponent(props, { ...MOCK_CONTEXT_VALUE, accessToken: undefined })
      expect(() => screen.getByTestId('video-login')).toBeDefined()
    })

    it('renders a video widget with a given height and width', async () => {
      const height = 300
      const width = 400
      const givenMarkdown = '${youtube?videoId=Bey4XXJAqS8&height='
        .concat(`${height}`)
        .concat('&width=')
        .concat(`${width}`)
        .concat('}')

      mockUseGetWikiPage.mockReturnValue(
        getUseQuerySuccessMock({
          ...mockEntityWikiPage,
          markdown: givenMarkdown,
        }),
      )

      const props: MarkdownSynapseProps = {
        ownerId: '_',
      }

      renderComponent(props)
      const frame = await screen.findByTitle('video frame')
      expect(frame.getAttribute('width')).toBe(`${width}`)
      expect(frame.getAttribute('height')).toBe(`${height}`)
    })
  })

  describe('it renders an image widget', () => {
    it('renders an image from a synapseId', async () => {
      mockUseGetWikiPage.mockReturnValue(
        getUseQuerySuccessMock({
          ...mockEntityWikiPage,
          markdown:
            '${image?synapseId=syn7809125&version=2&align=None&responsive=true}',
        }),
      )

      const props: MarkdownSynapseProps = {
        ownerId: '_',
        wikiId: '_',
      }
      renderComponent(props)
      await screen.findByRole('img')
      expect(mockMarkdownSynapseImage).toHaveBeenRenderedWithProps({
        align: 'None',
        responsive: 'true',
        synapseId: 'syn7809125',
        version: '2',
      })
    })

    it('renders an image from a file handleId', async () => {
      mockUseGetWikiPage.mockReturnValue(
        getUseQuerySuccessMock({
          ...mockEntityWikiPage,
          markdown:
            '${image?fileName=joy%2Esvg&align=None&scale=100&responsive=true&altText=}',
        }),
      )

      const props: MarkdownSynapseProps = {
        ownerId: '_',
        wikiId: '_',
      }
      renderComponent(props)
      await screen.findByRole('img')
      expect(mockMarkdownSynapseImage).toHaveBeenRenderedWithProps({
        align: 'None',
        altText: '',
        fileName: 'joy.svg',
        responsive: 'true',
        scale: '100',
      })
    })
  })

  it('renders the SynapsePlot component', async () => {
    mockUseGetWikiPage.mockReturnValue(
      getUseQuerySuccessMock({
        ...mockEntityWikiPage,
        markdown:
          '${plot?query=select "Age"%2C "Insol" from syn9872596&title=&type=BAR&barmode=GROUP&horizontal=false&showlegend=true}',
      }),
    )

    const props: MarkdownSynapseProps = {
      ownerId: '_',
      wikiId: '_',
    }
    renderComponent(props)
    await screen.findByRole('figure')
    expect(mockMarkdownSynapsePlot).toHaveBeenCalled()
  })

  it('renders the ProvenanceGraph component', async () => {
    mockUseGetWikiPage.mockReturnValue(
      getUseQuerySuccessMock({
        ...mockEntityWikiPage,
        markdown:
          '${provenance?entityList=syn12548902%2Csyn33344762&depth=3&displayHeightPx=800&showExpand=false}',
      }),
    )

    const props: MarkdownSynapseProps = {
      ownerId: '_',
      wikiId: '_',
    }
    renderComponent(props)
    await screen.findByTestId('MarkdownProvenanceGraph')
    expect(mockMarkdownProvenanceGraph).toHaveBeenCalled()
  })
  it('renders the ProvenanceGraph component when pointing to a specific entity version', async () => {
    mockUseGetWikiPage.mockReturnValue(
      getUseQuerySuccessMock({
        ...mockEntityWikiPage,
        markdown:
          '${provenance?entityList=syn12548902%2Fversion%2F34&depth=1&displayHeightPx=500&showExpand=true}',
      }),
    )
    const props: MarkdownSynapseProps = {
      ownerId: '_',
      wikiId: '_',
    }
    renderComponent(props)
    await screen.findByTestId('MarkdownProvenanceGraph')
    expect(mockMarkdownProvenanceGraph).toHaveBeenCalled()
  })

  it('renders a synapse reference', async () => {
    // note- a reference is the anchor tag inside the text that links to the bookmark down below,
    // its an inline link
    mockUseGetWikiPage.mockReturnValue(
      getUseQuerySuccessMock({
        ...mockEntityWikiPage,
        markdown: '${reference?params}',
      }),
    )

    const { container } = renderComponent({})
    await waitFor(() =>
      expect(container.querySelector('a#ref1')).toBeInTheDocument(),
    )
  })

  it('renders a bookmark', async () => {
    // note - a bookmark is a corresponding citation for an inline reference, it provides a URL for
    // the reference.
    mockUseGetWikiPage.mockReturnValue(
      getUseQuerySuccessMock({
        ...mockEntityWikiPage,
        markdown: '${reference?text=google.com}',
      }),
    )
    const props: MarkdownSynapseProps = {
      ownerId: '_',
      wikiId: '_',
    }

    renderComponent(props)
    await screen.findByRole('button')
  })

  describe('Snapshot tests', () => {
    it('works with header and a link', () => {
      const { container } = renderComponent({
        markdown: '# header [text](https://synapse.org)',
      })
      expect(container).toMatchSnapshot()
    })
    it('works with a br statement and loose text', () => {
      const { container } = renderComponent({
        markdown: 'some more free \n# header\nloose text',
      })
      expect(container).toMatchSnapshot()
    })
    it('works with two inline widgets', async () => {
      const { container } = renderComponent({
        markdown:
          '${buttonlink?text=sometext&url=#/Help/How%20It%20Works&highlight=true}${buttonlink?text=APPLY&url=#/Apply&highlight=true} ',
      })

      await screen.findByText('APPLY')
      expect(container).toMatchSnapshot()
    })
    it('works with two inline widgets inside Router', () => {
      const component = getComponent({
        markdown:
          '${buttonlink?text=sometext&url=#/Help/How%20It%20Works&highlight=true}${buttonlink?text=APPLY&url=#/Apply&highlight=true} ',
      })
      const { container } = render(<MemoryRouter>{component}</MemoryRouter>, {
        wrapper: createWrapper(),
      })
      expect(container).toMatchSnapshot()
    })
    it('supports bootstrap rows and columns', () => {
      const { container } = renderComponent({
        markdown:
          '{row}\n' +
          ' {column width=4}\n' +
          'Left\n' +
          '{column}\n' +
          ' {column width=4} \n' +
          'Center\n' +
          '{column}\n' +
          ' {column width=4} \n' +
          'Right\n' +
          ' {column}\n' +
          '{row}',
      })
      expect(container).toMatchSnapshot()
    })
  })
})
