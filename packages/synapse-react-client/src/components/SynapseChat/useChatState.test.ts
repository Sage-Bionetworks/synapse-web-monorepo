import {
  mockAgentChatResponse,
  mockAgentSession,
  mockChatJobStatus,
} from '@/mocks/chat/mockChat'
import { MOCK_ACCESS_TOKEN } from '@/mocks/MockSynapseContext'
import { server } from '@/mocks/msw/server'
import SynapseClient from '@/synapse-client'
import { createWrapperAndQueryClient } from '@/testutils/TestingLibraryUtils'
import { ASYNCHRONOUS_JOB_TOKEN, START_CHAT_ASYNC } from '@/utils/APIConstants'
import {
  BackendDestinationEnum,
  getEndpoint,
} from '@/utils/functions/getEndpoint'
import {
  FileHandleAssociateType,
  FileHandleAssociation,
} from '@sage-bionetworks/synapse-types'
import { renderHook, waitFor } from '@testing-library/react'
import { http, HttpResponse } from 'msw'
import { useChatState } from './useChatState'

const JOB_ID = 'chat-job-1'
const backendOrigin = getEndpoint(BackendDestinationEnum.REPO_ENDPOINT)

const mockAttachment: FileHandleAssociation = {
  fileHandleId: '9999999',
  associateObjectId: '9999999',
  associateObjectType: FileHandleAssociateType.MessageAttachment,
}

describe('useChatState', () => {
  beforeAll(() => server.listen())
  afterEach(() => {
    server.resetHandlers()
    vi.restoreAllMocks()
  })
  afterAll(() => server.close())

  it('throws when there is no agent session', () => {
    const { wrapperFn } = createWrapperAndQueryClient()
    const { result } = renderHook(() => useChatState(undefined), {
      wrapper: wrapperFn,
    })

    expect(() => result.current.sendChat('hello')).toThrow(
      'No agent session available to send chat message.',
    )
  })

  it('shows the user message immediately, keeps the same interaction id once the job is registered, and clears isAwaitingResponse once the turn settles', async () => {
    // The job stays PROCESSING for one poll before completing, giving a real window in which the
    // turn is in flight - a real job never completes within the same tick that it was started.
    let pollCount = 0
    server.use(
      http.post(`${backendOrigin}${START_CHAT_ASYNC}`, () =>
        HttpResponse.json({ token: JOB_ID }, { status: 201 }),
      ),
      http.get(`${backendOrigin}${ASYNCHRONOUS_JOB_TOKEN(JOB_ID)}`, () => {
        pollCount++
        const isProcessing = pollCount === 1
        const jobStatus = mockChatJobStatus({
          jobId: JOB_ID,
          jobState: isProcessing ? 'PROCESSING' : 'COMPLETE',
          responseBody: isProcessing ? undefined : mockAgentChatResponse,
        })
        return HttpResponse.json(jobStatus, { status: 200 })
      }),
    )
    const { wrapperFn } = createWrapperAndQueryClient()

    const { result } = renderHook(() => useChatState(mockAgentSession), {
      wrapper: wrapperFn,
    })

    result.current.sendChat('hello there')

    // The user's message is known and rendered on the very first render after sendChat - it is
    // never derived from a not-yet-fetched job status, so the bubble never renders empty.
    await waitFor(() => expect(result.current.interactions).toHaveLength(1))
    expect(result.current.interactions[0].userMessage).toBe('hello there')

    const id = result.current.interactions[0].id

    // isAwaitingResponse is true for the whole turn, while the job is still PROCESSING.
    await waitFor(() => expect(result.current.isAwaitingResponse).toBe(true))
    expect(result.current.interactions[0].jobId).toBe(JOB_ID)

    // The interaction gains a jobId in place; it is not replaced by a new interaction.
    expect(result.current.interactions[0].id).toBe(id)
    expect(result.current.interactions).toHaveLength(1)

    // isAwaitingResponse becomes false once the job leaves PROCESSING.
    await waitFor(() => expect(result.current.isAwaitingResponse).toBe(false))
    expect(result.current.interactions[0].id).toBe(id)
  })

  it('sends chatText/sessionId/enableTrace without an attachments field when no attachments are given', async () => {
    const getAgentChatAsyncJobResults = vi
      .spyOn(SynapseClient, 'getAgentChatAsyncJobResults')
      .mockReturnValue(new Promise(() => {}))
    const { wrapperFn } = createWrapperAndQueryClient()
    const { result } = renderHook(() => useChatState(mockAgentSession), {
      wrapper: wrapperFn,
    })

    result.current.sendChat('hello')

    await waitFor(() =>
      expect(getAgentChatAsyncJobResults).toHaveBeenCalledExactlyOnceWith(
        {
          concreteType: 'org.sagebionetworks.repo.model.agent.AgentChatRequest',
          chatText: 'hello',
          sessionId: mockAgentSession.sessionId,
          enableTrace: true,
        },
        MOCK_ACCESS_TOKEN,
        expect.any(Function),
      ),
    )
  })

  it('includes attachments on the request when provided', async () => {
    const getAgentChatAsyncJobResults = vi
      .spyOn(SynapseClient, 'getAgentChatAsyncJobResults')
      .mockReturnValue(new Promise(() => {}))
    const { wrapperFn } = createWrapperAndQueryClient()
    const { result } = renderHook(() => useChatState(mockAgentSession), {
      wrapper: wrapperFn,
    })

    result.current.sendChat('hello', [mockAttachment])

    await waitFor(() =>
      expect(getAgentChatAsyncJobResults).toHaveBeenCalledExactlyOnceWith(
        {
          concreteType: 'org.sagebionetworks.repo.model.agent.AgentChatRequest',
          chatText: 'hello',
          sessionId: mockAgentSession.sessionId,
          enableTrace: true,
          attachments: [mockAttachment],
        },
        MOCK_ACCESS_TOKEN,
        expect.any(Function),
      ),
    )
  })

  it('omits the attachments field when given an empty array', async () => {
    const getAgentChatAsyncJobResults = vi
      .spyOn(SynapseClient, 'getAgentChatAsyncJobResults')
      .mockReturnValue(new Promise(() => {}))
    const { wrapperFn } = createWrapperAndQueryClient()
    const { result } = renderHook(() => useChatState(mockAgentSession), {
      wrapper: wrapperFn,
    })

    result.current.sendChat('hello', [])

    await waitFor(() =>
      expect(getAgentChatAsyncJobResults).toHaveBeenCalledExactlyOnceWith(
        {
          concreteType: 'org.sagebionetworks.repo.model.agent.AgentChatRequest',
          chatText: 'hello',
          sessionId: mockAgentSession.sessionId,
          enableTrace: true,
        },
        MOCK_ACCESS_TOKEN,
        expect.any(Function),
      ),
    )
  })
})
