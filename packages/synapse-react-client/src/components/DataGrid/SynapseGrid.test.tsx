import createTestModel from '@/components/DataGrid/utils/createTestModel'
import { getCurrentUserCertifiedValidatedHandler } from '@/mocks/msw/handlers/userProfileHandlers'
import { server } from '@/mocks/msw/server'
import { createWrapper } from '@/testutils/TestingLibraryUtils'
import {
  BackendDestinationEnum,
  getEndpoint,
} from '@/utils/functions/getEndpoint'
import {
  CreateReplicaResponse,
  GridSession,
  ListGridReplicasResponse,
} from '@sage-bionetworks/synapse-client'
import { act, render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { http, HttpResponse } from 'msw'
import { createRef } from 'react'
import SynapseGrid, { SynapseGridHandle, SynapseGridProps } from './SynapseGrid'
import { useDataGridWebSocket } from './useDataGridWebsocket'

// The websocket hook owns a live socket connection; replace it with a connected socket holding a real model.
vi.mock('./useDataGridWebsocket', () => ({ useDataGridWebSocket: vi.fn() }))

const mockUseDataGridWebSocket = vi.mocked(useDataGridWebSocket)

const repoOrigin = getEndpoint(BackendDestinationEnum.REPO_ENDPOINT)

const SESSION_ID = 'test-grid-session'
const REPLICA_ID = 7
const HEADER_TEXT = 'Working Copy'
const CONTENT_CLASS_NAME = 'test-grid-content'

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

describe('SynapseGrid', () => {
  beforeEach(() => {
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

  it('renders the header above the grid content, outside the content container', async () => {
    await renderGridWithSession({
      header: <h1>{HEADER_TEXT}</h1>,
      contentClassName: CONTENT_CLASS_NAME,
    })

    const header = screen.getByRole('heading', { name: HEADER_TEXT })
    const toolbarLink = screen.getByRole('link', {
      name: 'Help and Instructions',
    })
    expect(toolbarLink.closest(`.${CONTENT_CLASS_NAME}`)).not.toBeNull()
    expect(header.closest(`.${CONTENT_CLASS_NAME}`)).toBeNull()
    expect(
      header.compareDocumentPosition(toolbarLink) &
        Node.DOCUMENT_POSITION_FOLLOWING,
    ).toBeTruthy()
  })

  it('renders the header and the certification requirement for users who are not certified', async () => {
    server.use(getCurrentUserCertifiedValidatedHandler(repoOrigin, false, true))

    render(
      <SynapseGrid
        header={<h1>{HEADER_TEXT}</h1>}
        contentClassName={CONTENT_CLASS_NAME}
      />,
      { wrapper: createWrapper() },
    )

    const requirement = await screen.findByText(/You must first become a/)
    expect(screen.getByRole('heading', { name: HEADER_TEXT })).toBeVisible()
    expect(requirement.closest(`.${CONTENT_CLASS_NAME}`)).not.toBeNull()
  })
})
