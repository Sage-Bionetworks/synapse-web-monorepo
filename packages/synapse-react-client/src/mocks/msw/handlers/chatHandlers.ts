import {
  mockAgentChatResponse,
  mockAgentSession,
  mockChatSessionId,
  mockEmptyTraceEventsResponse,
  mockListAgentSessionsResponse,
  mockSessionHistoryResponse,
  mockTraceEventsResponse1,
  mockTraceEventsResponse2,
  mockTraceEventsResponse3,
} from '@/mocks/chat/mockChat'
import {
  AGENT_CHAT_TRACE,
  AGENT_SESSION,
  AGENT_SESSION_HISTORY,
  GET_CHAT_ASYNC,
  LIST_AGENT_SESSIONS,
  START_CHAT_ASYNC,
} from '@/utils/APIConstants'
import { BackendDestinationEnum, getEndpoint } from '@/utils/functions'
import {
  AgentChatRequest,
  AgentChatResponse,
} from '@sage-bionetworks/synapse-types'
import { http, HttpResponse } from 'msw'
import { generateAsyncJobHandlers } from './asyncJobHandlers'

let traceCallCount = 0
export const getChatbotHandlers = (
  backendOrigin = getEndpoint(BackendDestinationEnum.REPO_ENDPOINT),
) => [
  http.post(`${backendOrigin}${AGENT_SESSION}`, () => {
    return HttpResponse.json(mockAgentSession, { status: 201 })
  }),

  //list chat sessions
  http.post(`${backendOrigin}${LIST_AGENT_SESSIONS}`, () => {
    // const request: ListAgentSessionsRequest = await request.json()
    return HttpResponse.json(mockListAgentSessionsResponse, { status: 201 })
  }),

  //session history
  http.post(
    `${backendOrigin}${AGENT_SESSION_HISTORY(mockChatSessionId)}`,
    () => {
      return HttpResponse.json(mockSessionHistoryResponse, { status: 201 })
    },
  ),
  //Async job to send chat message to the agent
  generateAsyncJobHandlers<AgentChatRequest, AgentChatResponse>(
    START_CHAT_ASYNC,
    tokenParam => GET_CHAT_ASYNC(tokenParam),
    mockAgentChatResponse,
    backendOrigin,
  ),

  //trace events
  http.post(`${backendOrigin}${AGENT_CHAT_TRACE(':id')}`, () => {
    //mock showing progress (increasing number of items)
    traceCallCount++
    if (traceCallCount == 1) {
      return HttpResponse.json(mockTraceEventsResponse1, { status: 201 })
    } else if (traceCallCount == 5) {
      return HttpResponse.json(mockTraceEventsResponse2, { status: 201 })
    } else if (traceCallCount == 8) {
      return HttpResponse.json(mockTraceEventsResponse3, { status: 201 })
    } else
      return HttpResponse.json(mockEmptyTraceEventsResponse, { status: 201 })
  }),
  // generateAsyncJobHandlers(
  //   START_CHAT_ASYNC,
  //   tokenParam => GET_CHAT_ASYNC(tokenParam),
  //   {
  //     reason: 'Failed to respond, timed out for example',
  //   },
  //   backendOrigin,
  //   400
  // )
]
