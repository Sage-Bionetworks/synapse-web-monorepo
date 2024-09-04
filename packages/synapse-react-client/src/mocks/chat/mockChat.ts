import {
  AgentAccessLevel,
  AgentChatRequest,
  AgentChatResponse,
  AgentSession,
  CreateAgentSessionRequest,
  ListAgentSessionsRequest,
  ListAgentSessionsResponse,
} from '@sage-bionetworks/synapse-types'

export const mockCreateAgentSessionRequest: CreateAgentSessionRequest = {
  agentAccessLevel: AgentAccessLevel.READ_YOUR_PRIVATE_DATA,
  agentId: 'experimental-agent-123',
}
export const mockAgentSession: AgentSession = {
  sessionId: 'session-456',
  agentAccessLevel: AgentAccessLevel.WRITE_YOUR_PRIVATE_DATA,
  startedOn: '2024-09-01T12:00:00Z',
  agentId: 'default-agent',
}
export const mockAgentSession2: AgentSession = {
  sessionId: 'session-789',
  agentAccessLevel: AgentAccessLevel.WRITE_YOUR_PRIVATE_DATA,
  startedOn: '2024-09-01T12:00:00Z',
  agentId: 'default-agent',
}
export const mockListAgentSessionsRequest: ListAgentSessionsRequest = {
  nextPageToken: 'token-789',
}

export const mockListAgentSessionsResponse: ListAgentSessionsResponse = {
  page: [mockAgentSession, mockAgentSession2],
  nextPageToken: 'token-790',
}

export const mockAgentChatRequest: AgentChatRequest = {
  sessionId: 'session-456',
  chatText: 'Hello! How can I access My Projects?',
}

export const mockAgentChatResponse: AgentChatResponse = {
  sessionId: 'session-456',
  responseText:
    'Hm, please elaborate to improve the accuracy of my response...',
}
