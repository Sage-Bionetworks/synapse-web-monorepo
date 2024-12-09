import { render, screen, waitFor, within } from '@testing-library/react'
import * as MarkdownSynapseImageModule from '../../../src/components/Markdown/widget/MarkdownSynapseImage'
import * as MarkdownPlotModule from '../../../src/components/Markdown/widget/MarkdownSynapsePlot'
import MarkdownSynapse, {
  MarkdownSynapseProps,
  NO_WIKI_CONTENT,
} from '../../../src/components/Markdown/MarkdownSynapse'
import { createWrapper } from '../../../src/testutils/TestingLibraryUtils'
import SynapseClient from '../../../src/synapse-client'
import {
  BackendDestinationEnum,
  getEndpoint,
} from '../../../src/utils/functions/getEndpoint'
import { SynapseContextType } from '../../../src/utils/context/SynapseContext'
import { WikiPage } from '@sage-bionetworks/synapse-types'
import { rest, server } from '../../../src/mocks/msw/server'
import * as MarkdownProvenanceModule from '../../../src/components/Markdown/widget/MarkdownProvenanceGraph'

jest.mock('../../../src/components/Plot/SynapsePlot', () => {
  return {
    __esModule: true,
    default: function MockSynapsePlot() {
      return <span role="figure"></span>
    },
  }
})

jest.mock('../../../src/components/widgets/SynapseImage', () => {
  return {
    __esModule: true,
    default: function MockSynapseImage() {
      return <img role="img"></img>
    },
  }
})

jest.mock('../../../src/components/ProvenanceGraph/ProvenanceGraph', () => {
  return {
    __esModule: true,
    default: function MockSynapseProvenanceGraph() {
      return <div data-testid="mockProvenanceGraph"></div>
    },
  }
})

const renderComponent = (
  props: MarkdownSynapseProps,
  synapseContext?: SynapseContextType,
) => {
  return render(
    <MarkdownSynapse
      ownerId="mock_owner_id"
      wikiId="mock_wiki_id"
      {...props}
    />,
    { wrapper: createWrapper(synapseContext) },
  )
}

function mockGetEntityWiki(markdown: string) {
  server.use(
    rest.get(
      `${getEndpoint(
        BackendDestinationEnum.REPO_ENDPOINT,
      )}/repo/v1/entity/:id/wiki/:wikiId`,
      async (req, res, ctx) => {
        const response: WikiPage = {
          markdown,
        }
        return res(ctx.status(200), ctx.json(response))
      },
    ),
  )
}

describe('MarkdownSynapse tests', () => {
  beforeAll(() => server.listen())
  afterEach(() => server.restoreHandlers())
  afterAll(() => server.close())

  const mockGetWikiAttachments = jest.spyOn(
    SynapseClient,
    'getWikiAttachmentsFromEntity',
  )

  beforeEach(() => {
    mockGetWikiAttachments.mockClear()
  })

  describe('renders with basic functionality', () => {
    // test basic rendering capabilities
    //  - initial render
    //  - componentDidMount
    //  - componentDidUpdate
    const spyOnMath = jest.spyOn(MarkdownSynapse.prototype, 'processMath')
    beforeEach(() => {
      spyOnMath.mockReset()
      mockGetWikiAttachments.mockClear()
    })

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

    it('mounts correctly with markdown NOT already loaded', async () => {
      const props = {
        wikiId: 'xxx', // placeholder
        ownerId: 'xxx', // placeholder
      }

      const text = 'text'
      const markdownPlaceholder = `## ${text}`
      mockGetEntityWiki(markdownPlaceholder)
      // we only care to mock these functions and ensure they're called
      // Full functionality will get tested in the specific widget tests
      const getEntityWiki = jest.spyOn(SynapseClient, 'getEntityWiki')
      // mount the component
      renderComponent(props)
      // verify functions were called
      within(await screen.findByRole('heading')).getByText(text)
      expect(getEntityWiki).toHaveBeenCalledTimes(1)
      expect(mockGetWikiAttachments).toHaveBeenCalledTimes(1)
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

  describe('it conditonally renders no content placeholder', () => {
    it('by default, displays empty string when wiki markdown is undefined', () => {
      const props: MarkdownSynapseProps = {
        markdown: undefined,
      }
      renderComponent(props)

      const markdownField = screen.getByTestId('markdown')
      expect(markdownField).toHaveTextContent('')
    })

    it('by default, displays empty string when wiki markdown is empty string', () => {
      const props: MarkdownSynapseProps = {
        wikiId: 'xxx', // placeholder
        ownerId: 'xxx', // placeholder
      }
      mockGetEntityWiki('')
      renderComponent(props)

      const markdownField = screen.getByTestId('markdown')
      expect(markdownField).toHaveTextContent('')
    })

    it('when specified, displays no content placeholder when wiki markdown is undefined', () => {
      const props: MarkdownSynapseProps = {
        markdown: undefined,
        showPlaceholderIfNoWikiContent: true,
      }
      renderComponent(props)
      screen.getByText(NO_WIKI_CONTENT)
    })

    it('when specified, displays no content placeholder when wiki markdown is empty string', () => {
      const props: MarkdownSynapseProps = {
        wikiId: 'xxx', // placeholder
        ownerId: 'xxx', // placeholder
        showPlaceholderIfNoWikiContent: true,
      }
      mockGetEntityWiki('')
      renderComponent(props)
      screen.getByText(NO_WIKI_CONTENT)
    })
  })

  describe('it renders a video widget', () => {
    it('do not render a video widget without token', async () => {
      mockGetEntityWiki('${video?mp4SynapseId=syn21714374}')
      const props: MarkdownSynapseProps = {
        ownerId: '_',
      }
      renderComponent(props, { accessToken: undefined })
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

      mockGetEntityWiki(givenMarkdown)

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
    jest.spyOn(SynapseClient, 'getEntity').mockResolvedValue({})
    jest.spyOn(SynapseClient, 'getFiles').mockResolvedValue({})
    jest
      .spyOn(SynapseClient, 'getWikiAttachmentsFromEntity')
      .mockResolvedValue({})

    it('renders an image from a synapseId', async () => {
      mockGetEntityWiki(
        '${image?synapseId=syn7809125&align=None&responsive=true}',
      )

      const props: MarkdownSynapseProps = {
        ownerId: '_',
        wikiId: '_',
      }
      renderComponent(props)
      await screen.findByRole('img')
    })

    it('renders an image from a file handleId', async () => {
      mockGetEntityWiki(
        '${image?fileName=joy%2Esvg&align=None&scale=100&responsive=true&altText=}',
      )

      const spyOnRenderImage = jest.spyOn(MarkdownSynapseImageModule, 'default')
      const props: MarkdownSynapseProps = {
        ownerId: '_',
        wikiId: '_',
      }
      renderComponent(props)
      await screen.findByRole('img')
      expect(spyOnRenderImage).toHaveBeenCalled()
    })
  })

  it('renders the SynapsePlot component', async () => {
    mockGetEntityWiki(
      '${plot?query=select "Age"%2C "Insol" from syn9872596&title=&type=BAR&barmode=GROUP&horizontal=false&showlegend=true}',
    )

    const spyOnRenderPlot = jest.spyOn(MarkdownPlotModule, 'default')
    const props: MarkdownSynapseProps = {
      ownerId: '_',
      wikiId: '_',
    }
    renderComponent(props)
    await screen.findByRole('figure')
    expect(spyOnRenderPlot).toHaveBeenCalled()
  })

  it('renders the ProvenanceGraph component', async () => {
    mockGetEntityWiki(
      '${provenance?entityList=syn12548902%2Csyn33344762&depth=3&displayHeightPx=800&showExpand=false}',
    )

    const spyOnRender = jest.spyOn(MarkdownProvenanceModule, 'default')
    const props: MarkdownSynapseProps = {
      ownerId: '_',
      wikiId: '_',
    }
    renderComponent(props)
    await screen.findByTestId('mockProvenanceGraph')
    expect(spyOnRender).toHaveBeenCalled()
  })
  it('renders the ProvenanceGraph component when pointing to a specific entity version', async () => {
    mockGetEntityWiki(
      '${provenance?entityList=syn12548902%2Fversion%2F34&depth=1&displayHeightPx=500&showExpand=true}',
    )

    const spyOnRender = jest.spyOn(MarkdownProvenanceModule, 'default')
    const props: MarkdownSynapseProps = {
      ownerId: '_',
      wikiId: '_',
    }
    renderComponent(props)
    await screen.findByTestId('mockProvenanceGraph')
    expect(spyOnRender).toHaveBeenCalled()
  })

  it('renders a synapse reference', async () => {
    // note- a reference is the anchor tag inside the text that links to the bookmark down below,
    // its an inline link
    mockGetEntityWiki('${reference?params}')

    const { container } = renderComponent({})
    await waitFor(() =>
      expect(container.querySelector('a#ref1')).toBeInTheDocument(),
    )
  })

  it('renders a bookmark', async () => {
    // note - a bookmark is a corresponding citation for an inline reference, it provides a URL for
    // the reference.
    mockGetEntityWiki('${reference?text=google.com}')

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
    it('works with two inline widgets', () => {
      const { container } = renderComponent({
        markdown:
          '${buttonlink?text=sometext&url=#/Help/How%20It%20Works&highlight=true}${buttonlink?text=APPLY&url=#/Apply&highlight=true} ',
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
