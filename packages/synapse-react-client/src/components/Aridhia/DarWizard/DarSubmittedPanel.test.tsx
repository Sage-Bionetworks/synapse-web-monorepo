import { render, screen } from '@testing-library/react'
import {
  getAridhiaAuthenticateHandler,
  getAridhiaDarMessageHandler,
  MOCK_ARIDHIA_AUTHENTICATION_REQUEST,
  MOCK_ARIDHIA_DAR_MESSAGE,
  MOCK_ARIDHIA_GATEWAY,
} from '@/mocks/msw/handlers/aridhiaHandlers'
import { server } from '@/mocks/msw/server'
import { createWrapper } from '@/testutils/TestingLibraryUtils'
import { AridhiaContextProvider } from '@/utils/context/AridhiaContext'
import { DarSubmittedPanel, DarSubmittedPanelProps } from './DarSubmittedPanel'

const REQUEST_CODE = 'ampals-sdtm_als1003-abc12345'

const FALLBACK_TEXT = /could not load the details about what happens next/

function renderPanel(props: Partial<DarSubmittedPanelProps> = {}) {
  const Wrapper = createWrapper()
  return render(
    <Wrapper>
      <AridhiaContextProvider
        apiBasePath={MOCK_ARIDHIA_GATEWAY}
        authenticationRequest={MOCK_ARIDHIA_AUTHENTICATION_REQUEST}
      >
        <DarSubmittedPanel requestCode={REQUEST_CODE} {...props} />
      </AridhiaContextProvider>
    </Wrapper>,
  )
}

describe('DarSubmittedPanel', () => {
  beforeAll(() => server.listen())
  beforeEach(() => {
    server.use(getAridhiaAuthenticateHandler())
  })
  afterEach(() => server.resetHandlers())
  afterAll(() => server.close())

  it('renders the vocabulary term from the FAIR API as markdown', async () => {
    server.use(
      getAridhiaDarMessageHandler({
        ...MOCK_ARIDHIA_DAR_MESSAGE,
        value: 'Reviews take **two weeks**.\n\nContact the administrator.',
      }),
    )
    renderPanel()

    const emphasized = await screen.findByText('two weeks')
    expect(emphasized.tagName).toBe('STRONG')
    expect(screen.getByText('Contact the administrator.')).toBeInTheDocument()
    expect(screen.queryByText(FALLBACK_TEXT)).not.toBeInTheDocument()
  })

  it('shows the request code and status alongside the message', async () => {
    server.use(getAridhiaDarMessageHandler())
    renderPanel({ status: 'pending' })

    await screen.findByText(/usually completed within 2-3 business weeks/)
    expect(screen.getByText(REQUEST_CODE)).toBeInTheDocument()
    expect(screen.getByText(/status: pending/)).toBeInTheDocument()
  })

  it.each([
    ['the request fails', { error: { status: 500, message: 'boom' } }, 500],
    ['the request is not authorized', { error: 'invalid_token' }, 401],
    [
      'the term has an empty value',
      { ...MOCK_ARIDHIA_DAR_MESSAGE, value: '' },
      200,
    ],
  ])(
    'falls back to a pointer to RDCA-DAP, keeping the submission confirmation, when %s',
    async (_description, body, status) => {
      server.use(getAridhiaDarMessageHandler(body, status))
      renderPanel()

      await screen.findByText(FALLBACK_TEXT)
      expect(
        screen.getByText('Your data access request was submitted.'),
      ).toBeInTheDocument()
      expect(screen.getByText(REQUEST_CODE)).toBeInTheDocument()
      expect(screen.getByRole('link', { name: 'RDCA-DAP' })).toHaveAttribute(
        'href',
        'https://portal.rdca.c-path.org/',
      )
      expect(
        screen.queryByText(/usually completed within 2-3 business weeks/),
      ).not.toBeInTheDocument()
    },
  )
})
