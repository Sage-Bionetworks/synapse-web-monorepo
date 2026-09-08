import usePollAsynchronousJob from '@/synapse-queries/asynchronous/usePollAsynchronousJob'
import { useGetChatAgentTraceEvents } from '@/synapse-queries/chat/useChat'
import { getUseQuerySuccessMock } from '@/testutils/ReactQueryMockUtils'
import { createWrapper } from '@/testutils/TestingLibraryUtils'
import { render, screen } from '@testing-library/react'
import SynapseChatMessage from './SynapseChatMessage'
import { ChatAttachment } from './utils/types'

vi.mock('@/synapse-queries/asynchronous/usePollAsynchronousJob', () => ({
  default: vi.fn(),
}))
vi.mock('@/synapse-queries/chat/useChat', () => ({
  useGetChatAgentTraceEvents: vi.fn(),
}))

const mockUsePollAsynchronousJob = vi.mocked(usePollAsynchronousJob)
const mockUseGetChatAgentTraceEvents = vi.mocked(useGetChatAgentTraceEvents)

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
  beforeEach(() => {
    vi.clearAllMocks()
    // oxlint-disable-next-line @typescript-eslint/no-explicit-any
    mockUseGetChatAgentTraceEvents.mockReturnValue({ data: undefined } as any)
  })

  it('renders the known user message even before the async job has been registered (chatJobId undefined)', () => {
    mockUsePollAsynchronousJob.mockReturnValue(
      // oxlint-disable-next-line @typescript-eslint/no-explicit-any
      { data: undefined } as any,
    )

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

  it('renders no attachment chips when the request has no attachments', () => {
    mockUsePollAsynchronousJob.mockReturnValue(
      getUseQuerySuccessMock({
        jobState: 'COMPLETE',
        requestBody: { chatText: 'hello', sessionId: 'session-1' },
        responseBody: { sessionId: 'session-1', responseText: 'hi there' },
        // oxlint-disable-next-line @typescript-eslint/no-explicit-any
      }) as any,
    )

    renderComponent()

    expect(screen.queryByText('FILE')).not.toBeInTheDocument()
  })

  it('renders a generic attachment chip (labeled by fileHandleId) for a restored/polled turn', () => {
    mockUsePollAsynchronousJob.mockReturnValue(
      getUseQuerySuccessMock({
        jobState: 'COMPLETE',
        requestBody: {
          chatText: 'hello',
          sessionId: 'session-1',
          attachments: [
            {
              fileHandleId: '9999999',
              associateObjectId: '9999999',
              associateObjectType: 'MessageAttachment',
            },
          ],
        },
        responseBody: { sessionId: 'session-1', responseText: 'hi there' },
        // oxlint-disable-next-line @typescript-eslint/no-explicit-any
      }) as any,
    )

    renderComponent()

    expect(screen.getByText('9999999')).toBeInTheDocument()
  })

  it('shows a failed status when the response reports a FAILED attachmentStatus', () => {
    mockUsePollAsynchronousJob.mockReturnValue(
      getUseQuerySuccessMock({
        jobState: 'COMPLETE',
        requestBody: {
          chatText: 'hello',
          sessionId: 'session-1',
          attachments: [
            {
              fileHandleId: '9999999',
              associateObjectId: '9999999',
              associateObjectType: 'MessageAttachment',
            },
          ],
        },
        responseBody: {
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
        // oxlint-disable-next-line @typescript-eslint/no-explicit-any
      }) as any,
    )

    renderComponent()

    expect(screen.getByText('Failed')).toBeInTheDocument()
  })

  it('shows the server-resolved filename once attachmentStatuses reports it, for a restored/polled turn with no pendingAttachments', () => {
    mockUsePollAsynchronousJob.mockReturnValue(
      getUseQuerySuccessMock({
        jobState: 'COMPLETE',
        requestBody: {
          chatText: 'hello',
          sessionId: 'session-1',
          attachments: [
            {
              fileHandleId: '9999999',
              associateObjectId: '9999999',
              associateObjectType: 'MessageAttachment',
            },
          ],
        },
        responseBody: {
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
        // oxlint-disable-next-line @typescript-eslint/no-explicit-any
      }) as any,
    )

    renderComponent()

    expect(screen.getByText('report.pdf')).toBeInTheDocument()
    expect(screen.queryByText('9999999')).not.toBeInTheDocument()
  })

  it('keeps the optimistically-known filename visible while the job is still processing, before attachmentStatuses arrives', () => {
    mockUsePollAsynchronousJob.mockReturnValue(
      getUseQuerySuccessMock({
        jobState: 'PROCESSING',
        requestBody: {
          chatText: 'hello',
          sessionId: 'session-1',
          attachments: [
            {
              fileHandleId: '9999999',
              associateObjectId: '9999999',
              associateObjectType: 'MessageAttachment',
            },
          ],
        },
        // oxlint-disable-next-line @typescript-eslint/no-explicit-any
      }) as any,
    )

    renderComponent('job-1', [
      {
        fileHandleId: '9999999',
        fileName: 'report.pdf',
        contentType: 'application/pdf',
        sizeBytes: 1024,
      },
    ])

    expect(screen.getByText('report.pdf')).toBeInTheDocument()
  })

  it('falls back to the optimistically-known filename for a FAILED attachment, since the server omits it on failure', () => {
    mockUsePollAsynchronousJob.mockReturnValue(
      getUseQuerySuccessMock({
        jobState: 'COMPLETE',
        requestBody: {
          chatText: 'hello',
          sessionId: 'session-1',
          attachments: [
            {
              fileHandleId: '9999999',
              associateObjectId: '9999999',
              associateObjectType: 'MessageAttachment',
            },
          ],
        },
        responseBody: {
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
        // oxlint-disable-next-line @typescript-eslint/no-explicit-any
      }) as any,
    )

    renderComponent('job-1', [
      {
        fileHandleId: '9999999',
        fileName: 'report.pdf',
        contentType: 'application/pdf',
        sizeBytes: 1024,
      },
    ])

    expect(screen.getByText('report.pdf')).toBeInTheDocument()
    expect(screen.getByText('Failed')).toBeInTheDocument()
  })
})
