import { mockEmptyTraceEventsResponse } from '@/mocks/chat/mockChat'
import { server } from '@/mocks/msw/server'
import { createWrapper } from '@/testutils/TestingLibraryUtils'
import { AGENT_CHAT_TRACE } from '@/utils/APIConstants'
import { BackendDestinationEnum, getEndpoint } from '@/utils/functions'
import { AsynchJobState } from '@sage-bionetworks/synapse-types'
import { render, screen } from '@testing-library/react'
import { http, HttpResponse } from 'msw'
import SynapseChatMessage from './SynapseChatMessage'
import { ChatAttachment } from './utils/types'

const repoEndpoint = getEndpoint(BackendDestinationEnum.REPO_ENDPOINT)

const attachmentAssociation = {
  fileHandleId: '9999999',
  associateObjectId: '9999999',
  associateObjectType: 'MessageAttachment',
}

const pendingReportAttachment: ChatAttachment = {
  fileHandleId: '9999999',
  fileName: 'report.pdf',
  contentType: 'application/pdf',
  sizeBytes: 1024,
}

/** Mocks the endpoints polled by the component for the chat job with ID 'job-1' */
function mockChatJob(
  jobState: AsynchJobState,
  requestBody: Record<string, unknown>,
  responseBody?: Record<string, unknown>,
) {
  server.use(
    http.get(`${repoEndpoint}/repo/v1/asynchronous/job/:jobId`, () =>
      HttpResponse.json(
        { jobId: 'job-1', jobState, requestBody, responseBody },
        { status: 200 },
      ),
    ),
    http.post(`${repoEndpoint}${AGENT_CHAT_TRACE(':id')}`, () =>
      HttpResponse.json(mockEmptyTraceEventsResponse, { status: 201 }),
    ),
  )
}

function renderComponent(
  chatJobId = 'job-1',
  pendingAttachments?: ChatAttachment[],
) {
  render(
    <SynapseChatMessage
      agentAvatar={<div />}
      userAvatar={<div />}
      userMessage="hello there"
      chatJobId={chatJobId}
      pendingAttachments={pendingAttachments}
    />,
    {
      wrapper: createWrapper(),
    },
  )
}

describe('SynapseChatMessage', () => {
  beforeAll(() => server.listen())
  afterEach(() => server.resetHandlers())
  afterAll(() => server.close())

  it('renders the known user message even before the async job has been registered (chatJobId undefined)', () => {
    render(
      <SynapseChatMessage
        agentAvatar={<div />}
        userAvatar={<div />}
        userMessage="hello there"
        chatJobId={undefined}
      />,
      { wrapper: createWrapper() },
    )

    expect(screen.getByText('hello there')).toBeInTheDocument()
  })

  it('renders no attachment chips when the request has no attachments', async () => {
    mockChatJob(
      'COMPLETE',
      { chatText: 'hello', sessionId: 'session-1' },
      { sessionId: 'session-1', responseText: 'hi there' },
    )

    renderComponent()

    // wait for the job to be loaded
    await screen.findByText('hi there')
    expect(screen.queryByText('FILE')).not.toBeInTheDocument()
  })

  it('renders a generic attachment chip (labeled by fileHandleId) for a restored/polled turn', async () => {
    mockChatJob(
      'COMPLETE',
      {
        chatText: 'hello',
        sessionId: 'session-1',
        attachments: [attachmentAssociation],
      },
      { sessionId: 'session-1', responseText: 'hi there' },
    )

    renderComponent()

    expect(await screen.findByText('9999999')).toBeInTheDocument()
  })

  it('shows a failed status when the response reports a FAILED attachmentStatus', async () => {
    mockChatJob(
      'COMPLETE',
      {
        chatText: 'hello',
        sessionId: 'session-1',
        attachments: [attachmentAssociation],
      },
      {
        sessionId: 'session-1',
        responseText: 'hi there',
        attachmentStatuses: [
          {
            fileHandleId: '9999999',
            status: 'FAILED',
            failureCode: 'NOT_FOUND',
            failureMessage: 'The file could not be found.',
          },
        ],
      },
    )

    renderComponent()

    expect(await screen.findByText('Failed')).toBeInTheDocument()
  })

  it('shows the server-resolved filename once attachmentStatuses reports it, for a restored/polled turn with no pendingAttachments', async () => {
    mockChatJob(
      'COMPLETE',
      {
        chatText: 'hello',
        sessionId: 'session-1',
        attachments: [attachmentAssociation],
      },
      {
        sessionId: 'session-1',
        responseText: 'hi there',
        attachmentStatuses: [
          {
            fileHandleId: '9999999',
            status: 'STAGED',
            fileName: 'report.pdf',
            contentType: 'application/pdf',
          },
        ],
      },
    )

    renderComponent()

    expect(await screen.findByText('report.pdf')).toBeInTheDocument()
    expect(screen.queryByText('9999999')).not.toBeInTheDocument()
  })

  it('keeps the optimistically-known filename visible while the job is still processing, before attachmentStatuses arrives', async () => {
    mockChatJob('PROCESSING', {
      chatText: 'hello',
      sessionId: 'session-1',
      attachments: [attachmentAssociation],
    })

    renderComponent('job-1', [pendingReportAttachment])

    expect(await screen.findByText('report.pdf')).toBeInTheDocument()
  })

  it('falls back to the optimistically-known filename for a FAILED attachment, since the server omits it on failure', async () => {
    mockChatJob(
      'COMPLETE',
      {
        chatText: 'hello',
        sessionId: 'session-1',
        attachments: [attachmentAssociation],
      },
      {
        sessionId: 'session-1',
        responseText: 'hi there',
        attachmentStatuses: [
          {
            fileHandleId: '9999999',
            status: 'FAILED',
            failureCode: 'UNSUPPORTED_TYPE',
            failureMessage: 'This file type is not supported.',
          },
        ],
      },
    )

    renderComponent('job-1', [pendingReportAttachment])

    expect(await screen.findByText('report.pdf')).toBeInTheDocument()
    expect(await screen.findByText('Failed')).toBeInTheDocument()
  })
})
