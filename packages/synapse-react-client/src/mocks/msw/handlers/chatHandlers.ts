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
import { rest } from 'msw'
import { generateAsyncJobHandlers } from './asyncJobHandlers'

let traceCallCount = 0
export const getChatbotHandlers = (
  backendOrigin = getEndpoint(BackendDestinationEnum.REPO_ENDPOINT),
) => [
  rest.post(`${backendOrigin}${AGENT_SESSION}`, async (req, res, ctx) => {
    return res(ctx.status(201), ctx.json(mockAgentSession))
  }),

  //list chat sessions
  rest.post(`${backendOrigin}${LIST_AGENT_SESSIONS}`, async (req, res, ctx) => {
    // const request: ListAgentSessionsRequest = await req.json()
    return res(ctx.status(201), ctx.json(mockListAgentSessionsResponse))
  }),

  //session history
  rest.post(
    `${backendOrigin}${AGENT_SESSION_HISTORY(mockChatSessionId)}`,
    async (req, res, ctx) => {
      return res(ctx.status(201), ctx.json(mockSessionHistoryResponse))
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
  rest.post(
    `${backendOrigin}${AGENT_CHAT_TRACE(':id')}`,
    async (_req, res, ctx) => {
      //mock showing progress (increasing number of items)
      traceCallCount++
      if (traceCallCount == 1) {
        return res(ctx.status(201), ctx.json(mockTraceEventsResponse1))
      } else if (traceCallCount == 5) {
        return res(ctx.status(201), ctx.json(mockTraceEventsResponse2))
      } else if (traceCallCount == 8) {
        return res(ctx.status(201), ctx.json(mockTraceEventsResponse3))
      } else return res(ctx.status(201), ctx.json(mockEmptyTraceEventsResponse))
    },
  ),
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
