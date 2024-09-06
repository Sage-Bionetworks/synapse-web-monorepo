import { rest } from 'msw'
import {
  AGENT_SESSION,
  AGENT_SESSION_HISTORY,
  GET_CHAT_ASYNC,
  LIST_AGENT_SESSIONS,
  START_CHAT_ASYNC,
} from '../../../utils/APIConstants'
import {
  AgentChatRequest,
  AgentChatResponse,
} from '@sage-bionetworks/synapse-types'
import {
  mockAgentChatResponse,
  mockAgentSession,
  mockChatSessionId,
  mockListAgentSessionsResponse,
  mockSessionHistoryResponse,
} from 'src/mocks/chat/mockChat'
import { generateAsyncJobHandlers } from './asyncJobHandlers'
import { BackendDestinationEnum, getEndpoint } from 'src/utils/functions'

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
]
