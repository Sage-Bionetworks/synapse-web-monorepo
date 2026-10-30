import { GRID_AGENT_SIDEBAR_TITLE } from '@/components/DataGrid/components/GridAgentSidebar/GridAgentSidebar'
import createTestModel from '@/components/DataGrid/utils/createTestModel'
import { mockAgentSession } from '@/mocks/chat/mockChat'
import { getChatbotHandlers } from '@/mocks/msw/handlers/chatHandlers'
import { server } from '@/mocks/msw/server'
import { createWrapper } from '@/testutils/TestingLibraryUtils'
import { AGENT_SESSION } from '@/utils/APIConstants'
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
import { createRef } from 'react'
import SynapseGrid, { SynapseGridHandle } from './SynapseGrid'
import { useDataGridWebSocket } from './useDataGridWebsocket'

// The websocket hook owns a live socket connection; replace it with a connected socket holding a real model.
vi.mock('./useDataGridWebsocket', () => ({ useDataGridWebSocket: vi.fn() }))

const mockUseDataGridWebSocket = vi.mocked(useDataGridWebSocket)

const repoOrigin = getEndpoint(BackendDestinationEnum.REPO_ENDPOINT)

const SESSION_ID = 'test-grid-session'
const REPLICA_ID = 7

const mockGridSession: GridSession = {
  sessionId: SESSION_ID,
  startedBy: '1',
  startedOn: '2026-01-01T00:00:00.000Z',
  modifiedOn: '2026-01-01T00:00:00.000Z',
}

const OPEN_SIDEBAR_BUTTON_NAME = `Open ${GRID_AGENT_SIDEBAR_TITLE}`
const CLOSE_SIDEBAR_BUTTON_NAME = `Close ${GRID_AGENT_SIDEBAR_TITLE}`

function getSidebar() {
  return screen.getByRole('complementary', { name: GRID_AGENT_SIDEBAR_TITLE })
}

function querySidebar() {
  return screen.queryByRole('complementary', { name: GRID_AGENT_SIDEBAR_TITLE })
}

function queryOpenSidebarButton() {
  return screen.queryByRole('button', { name: OPEN_SIDEBAR_BUTTON_NAME })
}

/** The chat input is enabled once the agent session exists and no response is pending */
async function waitForChatReady() {
  await waitFor(() =>
    expect(within(getSidebar()).getByRole('textbox')).toBeEnabled(),
  )
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

/** Renders SynapseGrid in a fresh context and loads the mocked session, resolving once the grid has loaded */
async function renderGridWithSession() {
  const user = userEvent.setup()
  const ref = createRef<SynapseGridHandle>()
  const result = render(<SynapseGrid ref={ref} />, {
    wrapper: createWrapper(),
  })

  act(() => {
    ref.current!.loadExistingSession(SESSION_ID)
  })

  // The toolbar renders with the loaded grid
  await screen.findByRole('link', { name: 'Help and Instructions' })
  if (querySidebar()) {
    await waitForChatReady()
  }

  return { user, ...result }
}

describe('SynapseGrid AI Assistant sidebar', () => {
  beforeAll(() => {
    window.HTMLElement.prototype.scrollIntoView = vi.fn()
  })

  beforeEach(() => {
    localStorage.clear()
    vi.spyOn(console, 'log').mockImplementation(() => {})
    vi.spyOn(console, 'debug').mockImplementation(() => {})

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
    })

    registerGridSessionHandlers()
  })

  afterEach(() => {
    vi.restoreAllMocks()
  })

  it('is open by default once the grid has loaded', async () => {
    registerChatHandlers()
    await renderGridWithSession()

    expect(getSidebar()).toBeInTheDocument()
    expect(queryOpenSidebarButton()).not.toBeInTheDocument()
    expect(
      screen.queryByRole('button', { name: 'Open Curie' }),
    ).not.toBeInTheDocument()
  })

  it('closes from its close button and reopens from the open button', async () => {
    registerChatHandlers()
    const { user } = await renderGridWithSession()

    await user.click(
      screen.getByRole('button', { name: CLOSE_SIDEBAR_BUTTON_NAME }),
    )

    expect(querySidebar()).not.toBeInTheDocument()
    const openButton = screen.getByRole('button', {
      name: OPEN_SIDEBAR_BUTTON_NAME,
    })

    await user.click(openButton)

    expect(getSidebar()).toBeInTheDocument()
    expect(queryOpenSidebarButton()).not.toBeInTheDocument()
  })

  it('stays closed in a new grid after being closed', async () => {
    registerChatHandlers()
    const { user, unmount } = await renderGridWithSession()

    await user.click(
      screen.getByRole('button', { name: CLOSE_SIDEBAR_BUTTON_NAME }),
    )
    unmount()

    await renderGridWithSession()

    expect(querySidebar()).not.toBeInTheDocument()
    expect(
      screen.getByRole('button', { name: OPEN_SIDEBAR_BUTTON_NAME }),
    ).toBeInTheDocument()
  })

  it('stays open in a new grid after being reopened', async () => {
    registerChatHandlers()
    localStorage.setItem(
      GRID_AGENT_SIDEBAR_OPEN_LOCALSTORAGE_KEY,
      JSON.stringify(false),
    )
    const { user, unmount } = await renderGridWithSession()

    await user.click(
      screen.getByRole('button', { name: OPEN_SIDEBAR_BUTTON_NAME }),
    )
    await waitForChatReady()
    unmount()

    await renderGridWithSession()

    expect(getSidebar()).toBeInTheDocument()
    expect(queryOpenSidebarButton()).not.toBeInTheDocument()
  })

  it('keeps the conversation when closed and reopened', async () => {
    const agentSessionCreation = registerChatHandlers()
    const { user } = await renderGridWithSession()
    const message = 'Which fields are missing?'

    await user.type(within(getSidebar()).getByRole('textbox'), message)
    await user.click(screen.getByRole('button', { name: 'Send message' }))
    expect(await screen.findByText(message)).toBeInTheDocument()
    // Let the response finish so its async job does not outlive the test
    await waitForChatReady()

    await user.click(
      screen.getByRole('button', { name: CLOSE_SIDEBAR_BUTTON_NAME }),
    )
    await user.click(
      screen.getByRole('button', { name: OPEN_SIDEBAR_BUTTON_NAME }),
    )

    expect(getSidebar()).toBeInTheDocument()
    expect(screen.getByText(message)).toBeInTheDocument()
    expect(
      screen.getByText(/This is the only response this agent is told/),
    ).toBeInTheDocument()
    expect(agentSessionCreation.count).toBe(1)
  })
})
