import {
  CLOSE_GRID_AGENT_SIDEBAR_LABEL,
  GRID_AGENT_SIDEBAR_TITLE,
  OPEN_GRID_AGENT_SIDEBAR_LABEL,
} from '@/components/DataGrid/components/GridAgentSidebar/GridAgentSidebar'
import createTestModel from '@/components/DataGrid/utils/createTestModel'
import { mockAgentSession } from '@/mocks/chat/mockChat'
import { getChatbotHandlers } from '@/mocks/msw/handlers/chatHandlers'
import { getFeatureFlagsOverride } from '@/mocks/msw/handlers/featureFlagHandlers'
import { getCurrentUserCertifiedValidatedHandler } from '@/mocks/msw/handlers/userProfileHandlers'
import { server } from '@/mocks/msw/server'
import { createWrapper } from '@/testutils/TestingLibraryUtils'
import { AGENT_SESSION } from '@/utils/APIConstants'
import { FeatureFlagEnum } from '@/utils/featureflag/FeatureFlags'
import {
  BackendDestinationEnum,
  getEndpoint,
} from '@/utils/functions/getEndpoint'
import { GRID_AGENT_SIDEBAR_OPEN_LOCALSTORAGE_KEY } from '@/utils/SynapseConstants'
import {
  CreateReplicaResponse,
  GridSession,
  ListGridReplicasResponse,
} from '@sage-bionetworks/synapse-client'
import { act, render, screen, waitFor, within } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { http, HttpResponse } from 'msw'
import { createRef, ReactNode } from 'react'
import SynapseGrid, { SynapseGridHandle, SynapseGridProps } from './SynapseGrid'
import { useDataGridWebSocket } from './useDataGridWebsocket'

// The websocket hook owns a live socket connection; replace it with a connected socket holding a real model.
vi.mock('./useDataGridWebsocket', () => ({ useDataGridWebSocket: vi.fn() }))

const mockUseDataGridWebSocket = vi.mocked(useDataGridWebSocket)

const repoOrigin = getEndpoint(BackendDestinationEnum.REPO_ENDPOINT)
const portalOrigin = getEndpoint(BackendDestinationEnum.PORTAL_ENDPOINT)

const SESSION_ID = 'test-grid-session'
const REPLICA_ID = 7
const HEADER_TEXT = 'Working Copy'
const CONTENT_CLASS_NAME = 'test-grid-content'
const GRID_ERROR = 'The grid connection failed'
const HEADER_ERROR = 'The page title failed'
const MESSAGE = 'Which fields are missing?'
const RESPONSE = /This is the only response this agent is told/
const DRAFT = 'And which are optional'

const mockGridSession: GridSession = {
  sessionId: SESSION_ID,
  startedBy: '1',
  startedOn: '2026-01-01T00:00:00.000Z',
  modifiedOn: '2026-01-01T00:00:00.000Z',
}

function registerGridSessionHandlers() {
  server.use(
    http.get(`${repoOrigin}/repo/v1/grid/session/:sessionId`, () =>
      HttpResponse.json(mockGridSession, { status: 200 }),
    ),
    http.post(`${repoOrigin}/repo/v1/grid/session/:sessionId/replica`, () =>
      HttpResponse.json(
        {
          replica: {
            gridSessionId: SESSION_ID,
            replicaId: REPLICA_ID,
            createdBy: '1',
          },
        } satisfies CreateReplicaResponse,
        { status: 201 },
      ),
    ),
    http.post(
      `${repoOrigin}/repo/v1/grid/session/:sessionId/replica/list`,
      () =>
        HttpResponse.json({ page: [] } satisfies ListGridReplicasResponse, {
          status: 200,
        }),
    ),
  )
}

/** Registers the chat handlers, counting how many agent sessions are created */
function registerChatHandlers() {
  const agentSessionCreation = { count: 0 }
  server.use(
    http.post(`${repoOrigin}${AGENT_SESSION}`, () => {
      agentSessionCreation.count++
      return HttpResponse.json(mockAgentSession, { status: 201 })
    }),
    ...getChatbotHandlers(repoOrigin),
  )
  return agentSessionCreation
}

function getSidebar() {
  return screen.getByRole('complementary', { name: GRID_AGENT_SIDEBAR_TITLE })
}

/** The sidebar appears once the feature flags have loaded */
function findSidebar() {
  return screen.findByRole('complementary', { name: GRID_AGENT_SIDEBAR_TITLE })
}

function querySidebar() {
  return screen.queryByRole('complementary', { name: GRID_AGENT_SIDEBAR_TITLE })
}

function queryOpenSidebarButton() {
  return screen.queryByRole('button', { name: OPEN_GRID_AGENT_SIDEBAR_LABEL })
}

/** Renders SynapseGrid in a fresh context and loads the mocked session, resolving once the grid has loaded */
async function renderGridWithSession(props: SynapseGridProps = {}) {
  const user = userEvent.setup()
  const ref = createRef<SynapseGridHandle>()
  const result = render(<SynapseGrid ref={ref} {...props} />, {
    wrapper: createWrapper(),
  })

  act(() => {
    ref.current!.loadExistingSession(SESSION_ID)
  })

  // The toolbar renders with the loaded grid
  await screen.findByRole('link', { name: 'Help and Instructions' })

  return { user, ...result }
}

/** Mocks a websocket that is connected to a grid with a real model */
function mockConnectedWebSocket(
  overrides: Partial<ReturnType<typeof useDataGridWebSocket>> = {},
) {
  const model = createTestModel(2, 2, REPLICA_ID)
  mockUseDataGridWebSocket.mockReturnValue({
    isConnected: true,
    websocketInstance: null,
    hasCompletedInitialSync: true,
    hasCompletedInitialLoad: true,
    isSyncing: false,
    model,
    modelSnapshot: model.api.getSnapshot(),
    connect: vi.fn(),
    presignedUrl: null,
    errorEstablishingWebsocketConnection: null,
    websocketError: null,
    ...overrides,
  })
}

function renderWithHeader(header: ReactNode = <h1>{HEADER_TEXT}</h1>) {
  return render(
    <SynapseGrid header={header} contentClassName={CONTENT_CLASS_NAME} />,
    { wrapper: createWrapper() },
  )
}

function getHeader() {
  return screen.getByRole('heading', { name: HEADER_TEXT })
}

describe('SynapseGrid', () => {
  beforeEach(() => {
    vi.spyOn(console, 'log').mockImplementation(() => {})
    vi.spyOn(console, 'debug').mockImplementation(() => {})

    mockConnectedWebSocket()
    // Only certified users see the grid
    server.use(getCurrentUserCertifiedValidatedHandler(repoOrigin, true, true))
    registerGridSessionHandlers()
  })

  afterEach(() => {
    vi.restoreAllMocks()
  })

  it('renders the header above the grid content, outside the content container', async () => {
    await renderGridWithSession({
      header: <h1>{HEADER_TEXT}</h1>,
      contentClassName: CONTENT_CLASS_NAME,
    })

    const header = getHeader()
    const toolbarLink = screen.getByRole('link', {
      name: 'Help and Instructions',
    })
    expect(toolbarLink.closest(`.${CONTENT_CLASS_NAME}`)).not.toBeNull()
    expect(header.closest(`.${CONTENT_CLASS_NAME}`)).toBeNull()
    expect(header.compareDocumentPosition(toolbarLink)).toBe(
      Node.DOCUMENT_POSITION_FOLLOWING,
    )
  })

  it('renders the header and the certification requirement for users who are not certified', async () => {
    server.use(getCurrentUserCertifiedValidatedHandler(repoOrigin, false, true))

    renderWithHeader()

    const requirement = await screen.findByText(/You must first become a/)
    expect(screen.getAllByRole('heading', { name: HEADER_TEXT })).toHaveLength(
      1,
    )
    expect(getHeader().closest(`.${CONTENT_CLASS_NAME}`)).toBeNull()
    expect(requirement.closest(`.${CONTENT_CLASS_NAME}`)).not.toBeNull()
  })

  describe('errors', () => {
    beforeEach(() => {
      // React logs the errors that error boundaries catch
      vi.spyOn(console, 'error').mockImplementation(() => {})
    })

    it('keeps the header when the grid fails, and shows the error in place of the grid', async () => {
      mockConnectedWebSocket({ websocketError: new Error(GRID_ERROR) })

      renderWithHeader()

      const error = await screen.findByText(GRID_ERROR)
      expect(error.closest(`.${CONTENT_CLASS_NAME}`)).not.toBeNull()
      expect(
        screen.getAllByRole('heading', { name: HEADER_TEXT }),
      ).toHaveLength(1)
      expect(getHeader().closest(`.${CONTENT_CLASS_NAME}`)).toBeNull()
    })

    it('keeps the grid when the header fails', async () => {
      function FailingHeader(): ReactNode {
        throw new Error(HEADER_ERROR)
      }

      await renderGridWithSession({
        header: <FailingHeader />,
        contentClassName: CONTENT_CLASS_NAME,
      })

      const error = screen.getByText(HEADER_ERROR)
      expect(error.closest(`.${CONTENT_CLASS_NAME}`)).toBeNull()
      expect(
        screen.getByRole('link', { name: 'Help and Instructions' }),
      ).toBeVisible()
    })
  })

  describe('with the AI Assistant sidebar feature flag on', () => {
    beforeAll(() => {
      window.HTMLElement.prototype.scrollIntoView = vi.fn()
    })

    beforeEach(() => {
      localStorage.clear()
      server.use(
        getFeatureFlagsOverride({
          portalOrigin,
          overrides: { [FeatureFlagEnum.GRID_AGENT_SIDEBAR]: true },
        }),
      )
    })

    it('is open by default instead of the Open Curie button, without creating an agent session', async () => {
      const agentSessionCreation = registerChatHandlers()
      await renderGridWithSession()

      const sidebar = await findSidebar()

      expect(within(sidebar).getByRole('textbox')).toBeEnabled()
      expect(queryOpenSidebarButton()).not.toBeInTheDocument()
      expect(
        screen.queryByRole('button', { name: 'Open Curie' }),
      ).not.toBeInTheDocument()
      expect(agentSessionCreation.count).toBe(0)
    })

    it('starts closed, with the open button, when the user closed it before', async () => {
      localStorage.setItem(GRID_AGENT_SIDEBAR_OPEN_LOCALSTORAGE_KEY, 'false')
      registerChatHandlers()
      await renderGridWithSession()

      expect(
        await screen.findByRole('button', {
          name: OPEN_GRID_AGENT_SIDEBAR_LABEL,
        }),
      ).toBeInTheDocument()
      expect(querySidebar()).not.toBeInTheDocument()
    })

    it('closes from its close button and reopens from the open button', async () => {
      registerChatHandlers()
      const { user } = await renderGridWithSession()
      await findSidebar()

      await user.click(
        screen.getByRole('button', { name: CLOSE_GRID_AGENT_SIDEBAR_LABEL }),
      )

      expect(querySidebar()).not.toBeInTheDocument()

      await user.click(
        screen.getByRole('button', { name: OPEN_GRID_AGENT_SIDEBAR_LABEL }),
      )

      expect(getSidebar()).toBeInTheDocument()
      expect(queryOpenSidebarButton()).not.toBeInTheDocument()
    })

    it('keeps the conversation and an unsent draft when closed and reopened', async () => {
      const agentSessionCreation = registerChatHandlers()
      const { user } = await renderGridWithSession()
      const sidebar = await findSidebar()

      await user.type(within(sidebar).getByRole('textbox'), MESSAGE)
      await user.click(
        within(sidebar).getByRole('button', { name: 'Send message' }),
      )
      expect(await within(sidebar).findByText(RESPONSE)).toBeInTheDocument()
      // The composer is enabled again once the response has finished
      await waitFor(() =>
        expect(within(sidebar).getByRole('textbox')).toBeEnabled(),
      )
      await user.type(within(sidebar).getByRole('textbox'), DRAFT)

      await user.click(
        screen.getByRole('button', { name: CLOSE_GRID_AGENT_SIDEBAR_LABEL }),
      )
      await user.click(
        screen.getByRole('button', { name: OPEN_GRID_AGENT_SIDEBAR_LABEL }),
      )

      expect(within(getSidebar()).getByText(MESSAGE)).toBeInTheDocument()
      expect(within(getSidebar()).getByText(RESPONSE)).toBeInTheDocument()
      expect(within(getSidebar()).getByRole('textbox')).toHaveValue(DRAFT)
      expect(agentSessionCreation.count).toBe(1)
    })

    // jsdom renders no grid cells to edit. A modal would block the page and hide it from assistive
    // technology, so check that the sidebar is not one and the grid's toolbar stays reachable.
    it('does not block the grid while open', async () => {
      registerChatHandlers()
      await renderGridWithSession()
      await findSidebar()

      expect(screen.queryByRole('dialog')).not.toBeInTheDocument()
      expect(
        screen.getByRole('link', { name: 'Help and Instructions' }),
      ).toBeVisible()
    })
  })

  describe('with the AI Assistant sidebar feature flag off', () => {
    it('opens the chat in a dialog from the Open Curie button, with no sidebar', async () => {
      const agentSessionCreation = registerChatHandlers()
      const { user } = await renderGridWithSession()

      await user.click(screen.getByRole('button', { name: 'Open Curie' }))

      expect(
        await screen.findByPlaceholderText('Message Curie'),
      ).toBeInTheDocument()
      expect(querySidebar()).not.toBeInTheDocument()
      expect(queryOpenSidebarButton()).not.toBeInTheDocument()
      expect(agentSessionCreation.count).toBe(0)
    })
  })
})
