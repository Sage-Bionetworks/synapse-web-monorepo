import { render, screen } from '@testing-library/react'
import {
  getAridhiaAuthenticateHandler,
  getAridhiaDarMessageHandler,
  MOCK_ARIDHIA_AUTHENTICATION_REQUEST,
  MOCK_ARIDHIA_GATEWAY,
} from '@/mocks/msw/handlers/aridhiaHandlers'
import { server } from '@/mocks/msw/server'
import { createWrapper } from '@/testutils/TestingLibraryUtils'
import { AridhiaContextProvider } from '@/utils/context/AridhiaContext'
import { DarSubmittedPanel, DarSubmittedPanelProps } from './DarSubmittedPanel'

const REQUEST_CODE = 'ampals-sdtm_als1003-abc12345'

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
        code: 'data-access-request-message',
        grouping: 'markdown',
        value: 'Reviews take **two weeks**.\n\nContact the administrator.',
      }),
    )
    renderPanel()

    const emphasized = await screen.findByText('two weeks')
    expect(emphasized.tagName).toBe('STRONG')
    expect(screen.getByText('Contact the administrator.')).toBeInTheDocument()
  })

  it('shows the request code and status alongside the message', async () => {
    server.use(getAridhiaDarMessageHandler())
    renderPanel({ status: 'pending' })

    expect(screen.getByText(REQUEST_CODE)).toBeInTheDocument()
    expect(screen.getByText(/status: pending/)).toBeInTheDocument()
    await screen.findByText(/usually completed within 2-3 business weeks/)
  })

  it('falls back to a pointer to RDCA-DAP when the message cannot be loaded, keeping the submission confirmation', async () => {
    server.use(
      getAridhiaDarMessageHandler(
        { error: { status: 500, message: 'boom' } },
        500,
      ),
    )
    renderPanel()

    await screen.findByText(
      /could not load the details about what happens next/,
    )
    expect(
      screen.getByText('Your data access request was submitted.'),
    ).toBeInTheDocument()
    expect(screen.getByText(REQUEST_CODE)).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'RDCA-DAP' })).toHaveAttribute(
      'href',
      'https://portal.rdca.c-path.org/',
    )
  })
})
