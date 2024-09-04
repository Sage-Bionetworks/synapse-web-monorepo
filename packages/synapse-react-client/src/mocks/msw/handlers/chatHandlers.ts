import { rest } from 'msw'
import { AGENT_SESSION, LIST_AGENT_SESSIONS } from '../../../utils/APIConstants'
import {
  AgentChatRequest,
  AgentChatResponse,
  AgentSession,
  CreateAgentSessionRequest,
} from '@sage-bionetworks/synapse-types'
import BasicMockedCrudService from '../util/BasicMockedCrudService'
import {
  mockAgentSession,
  mockListAgentSessionsResponse,
} from 'src/mocks/chat/mockChat'
import { generateAsyncJobHandlers } from './asyncJobHandlers'
import { BackendDestinationEnum, getEndpoint } from 'src/utils/functions'

const agentService = new BasicMockedCrudService<AgentSession, 'sessionId'>({
  initialData: [mockAgentSession],
  idField: 'sessionId',
  autoGenerateId: true,
})

export function getChatbotHandlers(
  response: AgentChatResponse,
  backendOrigin = getEndpoint(BackendDestinationEnum.REPO_ENDPOINT),
) {
  //create a new agent session
  rest.post(`${backendOrigin}${AGENT_SESSION}`, async (req, res, ctx) => {
    const request: CreateAgentSessionRequest = await req.json()
    const newAgentSession = agentService.create({
      agentAccessLevel: request.agentAccessLevel,
      startedOn: new Date().toISOString(),
      agentId: request.agentId,
      sessionId: 'newSessionId',
    })

    return res(ctx.status(201), ctx.json(newAgentSession))
  })

  //list chat sessions
  rest.post(`${backendOrigin}${LIST_AGENT_SESSIONS}`, async (req, res, ctx) => {
    // const request: ListAgentSessionsRequest = await req.json()
    return res(ctx.status(201), ctx.json(mockListAgentSessionsResponse))
  })
  //Async job to send chat message to the agent
  return generateAsyncJobHandlers<AgentChatRequest, AgentChatResponse>(
    '/repo/v1/agent/chat/async/start',
    tokenParam => `/repo/v1/agent/chat/async/get/${tokenParam}`,
    response,
    backendOrigin,
  )
}
