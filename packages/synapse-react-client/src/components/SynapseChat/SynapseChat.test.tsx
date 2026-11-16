import { useChatState } from '@/components/SynapseChat/useChatState'
import {
  mockAgentChatRequest,
  mockAgentSession,
  mockChatAttachment,
  mockChatJobStatus,
  mockEmptyTraceEventsResponse,
} from '@/mocks/chat/mockChat'
import { MOCK_CONTEXT_VALUE } from '@/mocks/MockSynapseContext'
import { server } from '@/mocks/msw/server'
import {
  createWrapper,
  createWrapperAndQueryClient,
} from '@/testutils/TestingLibraryUtils'
import {
  AGENT_CHAT_TRACE,
  AGENT_SESSION,
  ASYNCHRONOUS_JOB_TOKEN,
} from '@/utils/APIConstants'
import {
  BackendDestinationEnum,
  getEndpoint,
} from '@/utils/functions/getEndpoint'
import {
  CreateAgentSessionRequest,
  FileHandleAssociateType,
  GridAgentSessionContext,
} from '@sage-bionetworks/synapse-client'
import { AgentAccessLevel } from '@sage-bionetworks/synapse-types'
import { act, render, screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { http, HttpResponse } from 'msw'
import {
  AddFilesDialog,
  AddFilesDialogProps,
} from './components/AddFilesDialog/AddFilesDialog'
import { SynapseChat, SynapseChatProps } from './SynapseChat'

vi.mock('@/components/SynapseChat/useChatState')
vi.mock('./components/AddFilesDialog/AddFilesDialog', () => ({
  AddFilesDialog: vi.fn(),
  ALLOWED_FILE_TYPES_LABEL: 'pdf, csv, txt, json',
}))

const repoOrigin = getEndpoint(BackendDestinationEnum.REPO_ENDPOINT)
const mockUseChatState = vi.mocked(useChatState)
const mockAddFilesDialog = vi.mocked(AddFilesDialog)

const mockSendChat = vi.fn()

const defaultMockChatState = {
  sendChat: mockSendChat,
  interactions: [],
  isAwaitingResponse: false,
}

const mockPrompts = [
  'Help me fill this out',
  'Help me understand this',
  'Find missing fields',
]

const mockGridAgentSessionContext: GridAgentSessionContext = {
  concreteType: 'org.sagebionetworks.repo.model.agent.GridAgentSessionContext',
  gridSessionId: 'grid-session',
  usersReplicaId: 1,
}

const defaultProps: SynapseChatProps = {
  externalSession: mockAgentSession,
  externalChatState: defaultMockChatState,
  showAccessLevelMenu: false,
}

function renderComponent(props?: Partial<SynapseChatProps>) {
  const user = userEvent.setup()
  const { wrapperFn, queryClient } = createWrapperAndQueryClient()
  const { rerender } = render(<SynapseChat {...defaultProps} {...props} />, {
    wrapper: wrapperFn,
  })
  return {
    user,
    queryClient,
    // Re-renders with the same defaults, so a test can advance the mocked props (e.g. once the
    // interaction gains a jobId) without remounting and losing SynapseChat's own internal state.
    rerender: (newProps?: Partial<SynapseChatProps>) =>
      rerender(<SynapseChat {...defaultProps} {...props} {...newProps} />),
  }
}

describe('SynapseChat - suggestedPrompts', () => {
  beforeAll(() => {
    window.HTMLElement.prototype.scrollIntoView = vi.fn()
  })

  beforeEach(() => {
    vi.clearAllMocks()
    mockUseChatState.mockReturnValue(defaultMockChatState)
  })

  it('renders pill chips when suggestedPrompts are provided', () => {
    renderComponent({ suggestedPrompts: mockPrompts })

    mockPrompts.forEach(prompt => {
      expect(screen.getByRole('button', { name: prompt })).toBeInTheDocument()
    })
  })

  it('renders no pill chips when suggestedPrompts is omitted', () => {
    renderComponent({ suggestedPrompts: undefined })

    mockPrompts.forEach(prompt => {
      expect(
        screen.queryByRole('button', { name: prompt }),
      ).not.toBeInTheDocument()
    })
  })

  it('renders no pill chips when suggestedPrompts is an empty array', () => {
    renderComponent({ suggestedPrompts: [] })

    mockPrompts.forEach(prompt => {
      expect(
        screen.queryByRole('button', { name: prompt }),
      ).not.toBeInTheDocument()
    })
  })

  it('clicking a pill populates the text field without sending', async () => {
    const { user } = renderComponent({ suggestedPrompts: mockPrompts })

    await user.click(screen.getByRole('button', { name: mockPrompts[0] }))

    expect(screen.getByRole('textbox')).toHaveValue(mockPrompts[0])
    expect(mockSendChat).not.toHaveBeenCalled()
  })

  it('chips are hidden while a message is pending', () => {
    const pendingChatState = {
      ...defaultMockChatState,
      interactions: [{ id: '0', userMessage: 'waiting...' }],
      isAwaitingResponse: true,
    }
    renderComponent({
      suggestedPrompts: mockPrompts,
      externalChatState: pendingChatState,
    })

    mockPrompts.forEach(prompt => {
      expect(
        screen.queryByRole('button', { name: prompt }),
      ).not.toBeInTheDocument()
    })
  })

  it('chips are hidden after a conversation has started', () => {
    const activeChatState = {
      ...defaultMockChatState,
      interactions: [{ id: '0', userMessage: 'hi', jobId: 'job-1' }],
    }
    renderComponent({
      suggestedPrompts: mockPrompts,
      externalChatState: activeChatState,
    })

    mockPrompts.forEach(prompt => {
      expect(
        screen.queryByRole('button', { name: prompt }),
      ).not.toBeInTheDocument()
    })
  })

  it('disables the send button while awaiting a response', async () => {
    const { user } = renderComponent({
      externalChatState: { ...defaultMockChatState, isAwaitingResponse: true },
    })

    await user.type(screen.getByRole('textbox'), 'hello')

    expect(screen.getByRole('button', { name: 'Send message' })).toBeDisabled()
  })

  it('text input is present alongside pills', () => {
    renderComponent({ suggestedPrompts: mockPrompts })

    expect(screen.getByRole('textbox')).toBeInTheDocument()
    mockPrompts.forEach(prompt => {
      expect(screen.getByRole('button', { name: prompt })).toBeInTheDocument()
    })
  })
})

/** Replaces the Add Files dialog with one whose button simulates uploading `report.pdf` */
function mockAddFilesDialogUpload() {
  mockAddFilesDialog.mockImplementation(
    ({ open, onAttachmentUploaded }: AddFilesDialogProps) => (
      <>
        {open && (
          <div>
            <span>Add files dialog</span>
            <button
              onClick={() =>
                onAttachmentUploaded(
                  mockChatAttachment({ fileName: 'report.pdf' }),
                )
              }
            >
              Simulate attachment uploaded
            </button>
          </div>
        )}
      </>
    ),
  )
}

describe('SynapseChat - allowAttachments', () => {
  beforeAll(() => {
    window.HTMLElement.prototype.scrollIntoView = vi.fn()
  })

  beforeEach(() => {
    vi.clearAllMocks()
    mockUseChatState.mockReturnValue(defaultMockChatState)
    mockAddFilesDialogUpload()
  })

  it('does not render the attach button when allowAttachments is false (default)', () => {
    renderComponent()

    expect(
      screen.queryByRole('button', { name: 'Add files' }),
    ).not.toBeInTheDocument()
  })

  it('renders an attach button when allowAttachments is true', () => {
    renderComponent({ allowAttachments: true })

    expect(
      screen.getByRole('button', { name: 'Add files' }),
    ).toBeInTheDocument()
  })

  it('opens the Add Files dialog when the attach button is clicked', async () => {
    const { user } = renderComponent({ allowAttachments: true })

    expect(screen.queryByText('Add files dialog')).not.toBeInTheDocument()

    await user.click(screen.getByRole('button', { name: 'Add files' }))

    expect(screen.getByText('Add files dialog')).toBeInTheDocument()
  })

  it('renders an attachment chip once a file finishes uploading, and allows removing it', async () => {
    const { user } = renderComponent({ allowAttachments: true })

    await user.click(screen.getByRole('button', { name: 'Add files' }))
    await user.click(
      screen.getByRole('button', { name: 'Simulate attachment uploaded' }),
    )

    expect(screen.getByText('report.pdf')).toBeInTheDocument()

    await user.click(screen.getByRole('button', { name: 'Remove report.pdf' }))

    expect(screen.queryByText('report.pdf')).not.toBeInTheDocument()
  })

  it('sends attachments alongside the message text, then clears both', async () => {
    const { user } = renderComponent({ allowAttachments: true })

    await user.click(screen.getByRole('button', { name: 'Add files' }))
    await user.click(
      screen.getByRole('button', { name: 'Simulate attachment uploaded' }),
    )
    await user.type(screen.getByRole('textbox'), 'hello')
    await user.click(screen.getByRole('button', { name: 'Send message' }))

    expect(mockSendChat).toHaveBeenCalledTimes(1)
    const [message, attachments] = mockSendChat.mock.calls[0]
    expect(message).toBe('hello')
    expect(attachments).toHaveLength(1)
    expect(attachments[0].associateObjectType).toBe('FileEntity')
    // The uploader's own bare file handle is referenced by id; see buildChatAttachmentAssociation.
    expect(attachments[0].associateObjectId).toBe(attachments[0].fileHandleId)
    expect(screen.getByRole('textbox')).toHaveValue('')
    expect(screen.queryByText('report.pdf')).not.toBeInTheDocument()
  })

  it('sends without an attachments argument when there are no pending attachments', async () => {
    const { user } = renderComponent({ allowAttachments: true })

    await user.type(screen.getByRole('textbox'), 'hello')
    await user.click(screen.getByRole('button', { name: 'Send message' }))

    // No attachments, and no session ID override in an existing session
    expect(mockSendChat).toHaveBeenCalledExactlyOnceWith(
      'hello',
      undefined,
      undefined,
    )
  })

  it('shows a rich attachment chip on the pending message once sent, before the interaction has a jobId', async () => {
    // sendChat is mocked and does not itself append an interaction, so seed one pending
    // interaction (no jobId yet) via externalChatState to stand in for the one `useChatState`
    // would add in onMutate.
    const pendingChatState = {
      ...defaultMockChatState,
      interactions: [{ id: '0', userMessage: 'hello' }],
    }
    const { user } = renderComponent({
      allowAttachments: true,
      externalChatState: pendingChatState,
    })

    await user.click(screen.getByRole('button', { name: 'Add files' }))
    await user.click(
      screen.getByRole('button', { name: 'Simulate attachment uploaded' }),
    )
    await user.type(screen.getByRole('textbox'), 'hello')
    await user.click(screen.getByRole('button', { name: 'Send message' }))

    // The composer's own inline chip is cleared on send (see the "clears both" test above), but
    // the pending turn in the message list should still show a rich chip, via SynapseChat's
    // lastSentAttachments state.
    expect(screen.getByText('report.pdf')).toBeInTheDocument()
  })

  it('keeps showing the filename once the interaction gains a jobId, while the job is still PROCESSING', async () => {
    // The chat request's requestBody.attachments (a FileHandleAssociation) never carries a
    // filename, so once the job is registered, SynapseChatMessage can only resolve the filename
    // from the server's attachmentStatuses (not yet available while PROCESSING) or from the
    // pendingAttachments that SynapseChat keeps supplying for the last interaction.
    mockAddFilesDialog.mockImplementation(
      ({ open, onAttachmentUploaded }: AddFilesDialogProps) => (
        <>
          {open && (
            <button
              onClick={() =>
                onAttachmentUploaded(
                  mockChatAttachment({
                    fileHandleId: '4242424',
                    fileName: 'report.pdf',
                  }),
                )
              }
            >
              Simulate attachment uploaded
            </button>
          )}
        </>
      ),
    )
    const { user, rerender, queryClient } = renderComponent({
      allowAttachments: true,
    })

    await user.click(screen.getByRole('button', { name: 'Add files' }))
    await user.click(
      screen.getByRole('button', { name: 'Simulate attachment uploaded' }),
    )
    await user.type(screen.getByRole('textbox'), 'hello')
    await user.click(screen.getByRole('button', { name: 'Send message' }))

    // The async job has now been registered (jobId assigned), but has not finished processing --
    // the response, and thus attachmentStatuses, is not yet available.
    const jobStatus = mockChatJobStatus({
      jobId: 'job-1',
      jobState: 'PROCESSING',
      responseBody: undefined,
      requestBody: {
        ...mockAgentChatRequest,
        attachments: [
          {
            fileHandleId: '4242424',
            associateObjectId: '4242424',
            associateObjectType: FileHandleAssociateType.FileEntity,
          },
        ],
      },
    })
    server.use(
      http.get(`${repoOrigin}${ASYNCHRONOUS_JOB_TOKEN('job-1')}`, () =>
        HttpResponse.json(jobStatus),
      ),
      http.post(`${repoOrigin}${AGENT_CHAT_TRACE(':id')}`, () =>
        HttpResponse.json(mockEmptyTraceEventsResponse),
      ),
    )
    rerender({
      allowAttachments: true,
      externalChatState: {
        ...defaultMockChatState,
        interactions: [{ id: '0', userMessage: 'hello', jobId: 'job-1' }],
        isAwaitingResponse: true,
      },
    })
    // Wait for the job status to be polled into the cache, then verify the filename is retained
    await waitFor(() =>
      expect(
        queryClient.getQueryData(
          MOCK_CONTEXT_VALUE.keyFactory.getAsyncJobStatusQueryKey('job-1'),
        ),
      ).toEqual(jobStatus),
    )

    expect(screen.getByText('report.pdf')).toBeInTheDocument()
    expect(screen.queryByText('4242424')).not.toBeInTheDocument()
  })
})

describe('SynapseChat - creating the agent session', () => {
  beforeAll(() => {
    window.HTMLElement.prototype.scrollIntoView = vi.fn()
  })

  beforeEach(() => {
    vi.clearAllMocks()
    mockUseChatState.mockReturnValue(defaultMockChatState)
    mockAddFilesDialogUpload()
  })

  /**
   * Renders without a session and records the session requests this render makes. Requests from
   * other tests can still be in flight under load, so each render uses its own agent registration
   * ID and only requests with that ID are recorded. With `holdResponse`, each response waits for
   * `release`.
   */
  function renderWithoutSession(
    props?: Partial<SynapseChatProps>,
    { holdResponse = false } = {},
  ) {
    const agentRegistrationId = crypto.randomUUID()
    const { promise: released, resolve: release } =
      Promise.withResolvers<void>()
    if (!holdResponse) {
      release()
    }
    const sessionRequests: CreateAgentSessionRequest[] = []
    server.use(
      http.post(`${repoOrigin}${AGENT_SESSION}`, async ({ request }) => {
        const body = (await request.json()) as CreateAgentSessionRequest
        if (body.agentRegistrationId === agentRegistrationId) {
          sessionRequests.push(body)
        }
        await released
        return HttpResponse.json(mockAgentSession, { status: 201 })
      }),
    )
    const result = renderComponent({
      externalSession: undefined,
      agentRegistrationId,
      ...props,
    })
    return { sessionRequests, release, ...result }
  }

  async function sendMessage(
    user: ReturnType<typeof userEvent.setup>,
    message = 'hello',
  ) {
    await user.type(screen.getByRole('textbox'), message)
    await user.click(screen.getByRole('button', { name: 'Send message' }))
  }

  /** Waits long enough for a request that an effect started to reach its handler */
  async function waitForRequestsToArrive() {
    await act(() => new Promise(resolve => setTimeout(resolve, 50)))
  }

  it('does not create a session on mount, and the composer and prompts are usable', async () => {
    const { sessionRequests } = renderWithoutSession({
      suggestedPrompts: mockPrompts,
    })

    await waitForRequestsToArrive()

    expect(sessionRequests).toHaveLength(0)
    expect(screen.getByRole('textbox')).toBeEnabled()
    mockPrompts.forEach(prompt => {
      expect(screen.getByRole('button', { name: prompt })).not.toHaveAttribute(
        'aria-disabled',
      )
    })
  })

  it('creates the session when the first message is sent, then sends the message in it', async () => {
    const { user, sessionRequests, release } = renderWithoutSession(
      {},
      { holdResponse: true },
    )

    await sendMessage(user)
    await waitFor(() => expect(sessionRequests).toHaveLength(1))

    // The message stays in the composer, which can't send again, until it is sent
    expect(mockSendChat).not.toHaveBeenCalled()
    expect(screen.getByRole('textbox')).toHaveValue('hello')
    expect(screen.getByRole('button', { name: 'Send message' })).toBeDisabled()

    release()

    await waitFor(() =>
      expect(mockSendChat).toHaveBeenCalledExactlyOnceWith(
        'hello',
        undefined,
        mockAgentSession.sessionId,
      ),
    )
    expect(screen.getByRole('textbox')).toHaveValue('')
    expect(sessionRequests).toHaveLength(1)
  })

  it('disables the prompts and the access level menu while the session is being created, and enables them once it exists', async () => {
    const { user, sessionRequests, release } = renderWithoutSession(
      { suggestedPrompts: mockPrompts, showAccessLevelMenu: true },
      { holdResponse: true },
    )
    const accessLevelMenu = screen.getByRole('button', {
      name: 'Access Level Menu',
    })
    expect(accessLevelMenu).toBeEnabled()

    await sendMessage(user)
    await waitFor(() => expect(sessionRequests).toHaveLength(1))

    expect(accessLevelMenu).toBeDisabled()
    mockPrompts.forEach(prompt => {
      expect(screen.getByRole('button', { name: prompt })).toHaveAttribute(
        'aria-disabled',
        'true',
      )
    })

    release()

    await waitFor(() => expect(accessLevelMenu).toBeEnabled())
    mockPrompts.forEach(prompt => {
      expect(screen.getByRole('button', { name: prompt })).not.toHaveAttribute(
        'aria-disabled',
      )
    })
  })

  it('creates the session with the access level chosen before it exists', async () => {
    const { user, sessionRequests } = renderWithoutSession({
      showAccessLevelMenu: true,
    })

    await user.click(screen.getByRole('button', { name: 'Access Level Menu' }))
    await user.click(
      screen.getByRole('menuitem', { name: 'Read Your Private Data' }),
    )
    await sendMessage(user)

    await waitFor(() => expect(sessionRequests).toHaveLength(1))
    expect(sessionRequests[0].agentAccessLevel).toBe(
      AgentAccessLevel.READ_YOUR_PRIVATE_DATA,
    )
  })

  it('sends the first message with its attachments once the session is created', async () => {
    const { user, sessionRequests, release } = renderWithoutSession(
      { allowAttachments: true },
      { holdResponse: true },
    )

    await user.click(screen.getByRole('button', { name: 'Add files' }))
    await user.click(
      screen.getByRole('button', { name: 'Simulate attachment uploaded' }),
    )
    await sendMessage(user)
    await waitFor(() => expect(sessionRequests).toHaveLength(1))
    expect(mockSendChat).not.toHaveBeenCalled()

    release()

    await waitFor(() => expect(mockSendChat).toHaveBeenCalledTimes(1))
    const [message, attachments, sessionId] = mockSendChat.mock.calls[0]
    expect(message).toBe('hello')
    expect(sessionId).toBe(mockAgentSession.sessionId)
    expect(attachments).toHaveLength(1)
    expect(attachments[0].associateObjectId).toBe(attachments[0].fileHandleId)
    expect(attachments[0].associateObjectType).toBe(
      FileHandleAssociateType.FileEntity,
    )
  })

  it('keeps the message and its attachments and shows the error when the session cannot be created, so the user can retry', async () => {
    const { user } = renderWithoutSession({ allowAttachments: true })
    let failSessionCreation = true
    server.use(
      http.post(`${repoOrigin}${AGENT_SESSION}`, () =>
        failSessionCreation
          ? HttpResponse.json(
              { reason: 'The agent is unavailable' },
              { status: 500 },
            )
          : HttpResponse.json(mockAgentSession, { status: 201 }),
      ),
    )

    await user.click(screen.getByRole('button', { name: 'Add files' }))
    await user.click(
      screen.getByRole('button', { name: 'Simulate attachment uploaded' }),
    )
    await sendMessage(user)

    expect(await screen.findByRole('alert')).toHaveTextContent(
      'The agent is unavailable',
    )
    expect(screen.getByRole('textbox')).toHaveValue('hello')
    expect(screen.getByText('report.pdf')).toBeInTheDocument()
    expect(mockSendChat).not.toHaveBeenCalled()

    failSessionCreation = false
    await user.click(screen.getByRole('button', { name: 'Send message' }))

    await waitFor(() => expect(mockSendChat).toHaveBeenCalledTimes(1))
    const [message, attachments, sessionId] = mockSendChat.mock.calls[0]
    expect(message).toBe('hello')
    expect(attachments).toHaveLength(1)
    expect(sessionId).toBe(mockAgentSession.sessionId)
    expect(screen.getByRole('textbox')).toHaveValue('')
    expect(screen.queryByText('report.pdf')).not.toBeInTheDocument()
    expect(screen.queryByRole('alert')).not.toBeInTheDocument()
  })

  // A parent that re-renders while the session is being created, with a new session context each
  // time, must not start another session
  it('creates one session on mount for an initial message, however often it re-renders', async () => {
    const { sessionRequests, release, rerender } = renderWithoutSession(
      { initialMessage: 'Start here' },
      { holdResponse: true },
    )
    await waitFor(() => expect(sessionRequests).toHaveLength(1))

    rerender({ sessionContext: { ...mockGridAgentSessionContext } })
    rerender({ sessionContext: { ...mockGridAgentSessionContext } })
    release()

    await waitFor(() =>
      expect(mockSendChat).toHaveBeenCalledExactlyOnceWith(
        'Start here',
        undefined,
        mockAgentSession.sessionId,
      ),
    )
    await waitForRequestsToArrive()
    expect(sessionRequests).toHaveLength(1)
  })

  it('sends an initial message in an existing session without creating another', async () => {
    const { sessionRequests } = renderWithoutSession({
      initialMessage: 'Start here',
      externalSession: mockAgentSession,
    })

    await waitFor(() => expect(mockSendChat).toHaveBeenCalledTimes(1))
    expect(mockSendChat.mock.calls[0][0]).toBe('Start here')
    await waitForRequestsToArrive()
    expect(sessionRequests).toHaveLength(0)
  })
})

describe('SynapseChat - anonymous session creation', () => {
  beforeAll(() => {
    window.HTMLElement.prototype.scrollIntoView = vi.fn()
  })

  beforeEach(() => {
    vi.clearAllMocks()
    mockUseChatState.mockReturnValue(defaultMockChatState)
  })

  /** Renders without a session and sends a first message, which creates the session */
  async function renderAndSendFirstMessage(
    isAuthenticated: boolean,
    props?: Partial<SynapseChatProps>,
  ) {
    const user = userEvent.setup()
    render(
      <SynapseChat {...defaultProps} externalSession={undefined} {...props} />,
      {
        wrapper: createWrapper({ isAuthenticated }),
      },
    )
    await user.type(screen.getByRole('textbox'), FIRST_MESSAGE)
    await user.click(screen.getByRole('button', { name: 'Send message' }))
  }

  const FIRST_MESSAGE = 'Which datasets mention ALS?'
  const unauthorizedReason = 'This agent is not available to anonymous users.'

  function mockSessionCreationFailure(status: number, reason: string) {
    server.use(
      http.post(`${repoOrigin}${AGENT_SESSION}`, () =>
        HttpResponse.json({ reason }, { status }),
      ),
    )
  }

  it('invokes onSessionCreationUnauthenticated with the unsent message when an anonymous session is rejected', async () => {
    const onSessionCreationUnauthenticated = vi.fn()
    mockSessionCreationFailure(403, unauthorizedReason)

    await renderAndSendFirstMessage(false, { onSessionCreationUnauthenticated })

    await waitFor(() =>
      expect(onSessionCreationUnauthenticated).toHaveBeenCalledExactlyOnceWith(
        FIRST_MESSAGE,
      ),
    )
  })

  it('does not invoke the callback for authenticated users', async () => {
    const onSessionCreationUnauthenticated = vi.fn()
    mockSessionCreationFailure(403, unauthorizedReason)

    await renderAndSendFirstMessage(true, { onSessionCreationUnauthenticated })

    // The inline error is shown once session creation has failed
    await screen.findByRole('alert')
    expect(onSessionCreationUnauthenticated).not.toHaveBeenCalled()
  })

  it('does not invoke the callback for non-authorization errors', async () => {
    const onSessionCreationUnauthenticated = vi.fn()
    mockSessionCreationFailure(400, 'boom')

    await renderAndSendFirstMessage(false, { onSessionCreationUnauthenticated })

    // The inline error is shown once session creation has failed
    await screen.findByRole('alert')
    expect(onSessionCreationUnauthenticated).not.toHaveBeenCalled()
  })

  it('suppresses the inline error when deferring an anonymous user to login', async () => {
    const onSessionCreationUnauthenticated = vi.fn()
    mockSessionCreationFailure(403, unauthorizedReason)

    await renderAndSendFirstMessage(false, { onSessionCreationUnauthenticated })

    await waitFor(() =>
      expect(onSessionCreationUnauthenticated).toHaveBeenCalledTimes(1),
    )
    // Flush the remaining state updates from the failed mutation before asserting absence
    await act(async () => {})

    expect(screen.queryByRole('alert')).not.toBeInTheDocument()
  })

  it('shows the inline error when there is no login fallback', async () => {
    mockSessionCreationFailure(403, unauthorizedReason)

    await renderAndSendFirstMessage(false)

    expect(await screen.findByRole('alert')).toHaveTextContent(
      unauthorizedReason,
    )
  })
})
