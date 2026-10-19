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
import { FileHandleAssociateType } from '@sage-bionetworks/synapse-client'
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

beforeAll(() => server.listen())
afterEach(() => server.resetHandlers())
afterAll(() => server.close())

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

  it('chips are disabled when no agent session exists', () => {
    renderComponent({
      suggestedPrompts: mockPrompts,
      externalSession: undefined,
    })

    mockPrompts.forEach(prompt => {
      expect(screen.getByRole('button', { name: prompt })).toHaveAttribute(
        'aria-disabled',
        'true',
      )
    })
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

describe('SynapseChat - allowAttachments', () => {
  beforeAll(() => {
    window.HTMLElement.prototype.scrollIntoView = vi.fn()
  })

  beforeEach(() => {
    vi.clearAllMocks()
    mockUseChatState.mockReturnValue(defaultMockChatState)
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

    expect(mockSendChat).toHaveBeenCalledExactlyOnceWith('hello', undefined)
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

describe('SynapseChat - anonymous session creation', () => {
  beforeAll(() => {
    window.HTMLElement.prototype.scrollIntoView = vi.fn()
  })

  beforeEach(() => {
    vi.clearAllMocks()
    mockUseChatState.mockReturnValue(defaultMockChatState)
  })

  function renderWithAuth(
    isAuthenticated: boolean,
    props?: Partial<SynapseChatProps>,
  ) {
    // No external session, so SynapseChat creates one on mount.
    return render(
      <SynapseChat {...defaultProps} externalSession={undefined} {...props} />,
      {
        wrapper: createWrapper({ isAuthenticated }),
      },
    )
  }

  const unauthorizedReason = 'This agent is not available to anonymous users.'

  function mockSessionCreationFailure(status: number, reason: string) {
    server.use(
      http.post(`${repoOrigin}${AGENT_SESSION}`, () =>
        HttpResponse.json({ reason }, { status }),
      ),
    )
  }

  it('invokes onSessionCreationUnauthenticated when an anonymous session is rejected', async () => {
    const onSessionCreationUnauthenticated = vi.fn()
    mockSessionCreationFailure(403, unauthorizedReason)

    renderWithAuth(false, { onSessionCreationUnauthenticated })

    await waitFor(() =>
      expect(onSessionCreationUnauthenticated).toHaveBeenCalledTimes(1),
    )
  })

  it('does not invoke the callback for authenticated users', async () => {
    const onSessionCreationUnauthenticated = vi.fn()
    mockSessionCreationFailure(403, unauthorizedReason)

    renderWithAuth(true, { onSessionCreationUnauthenticated })

    // The inline error is shown once session creation has failed
    await screen.findByRole('alert')
    expect(onSessionCreationUnauthenticated).not.toHaveBeenCalled()
  })

  it('does not invoke the callback for non-authorization errors', async () => {
    const onSessionCreationUnauthenticated = vi.fn()
    mockSessionCreationFailure(400, 'boom')

    renderWithAuth(false, { onSessionCreationUnauthenticated })

    // The inline error is shown once session creation has failed
    await screen.findByRole('alert')
    expect(onSessionCreationUnauthenticated).not.toHaveBeenCalled()
  })

  it('suppresses the inline error when deferring an anonymous user to login', async () => {
    const onSessionCreationUnauthenticated = vi.fn()
    mockSessionCreationFailure(403, unauthorizedReason)

    renderWithAuth(false, { onSessionCreationUnauthenticated })

    await waitFor(() =>
      expect(onSessionCreationUnauthenticated).toHaveBeenCalledTimes(1),
    )
    // Flush the remaining state updates from the failed mutation before asserting absence
    await act(async () => {})

    expect(screen.queryByRole('alert')).not.toBeInTheDocument()
  })

  it('shows the inline error when there is no login fallback', async () => {
    mockSessionCreationFailure(403, unauthorizedReason)

    renderWithAuth(false)

    expect(await screen.findByRole('alert')).toHaveTextContent(
      unauthorizedReason,
    )
  })
})
