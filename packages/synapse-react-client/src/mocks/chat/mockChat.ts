import {
  AgentAccessLevel,
  AgentChatRequest,
  AgentChatResponse,
  AgentSession,
  CreateAgentSessionRequest,
  ListAgentSessionsRequest,
  ListAgentSessionsResponse,
  SessionHistoryResponse,
  TraceEventsResponse,
} from '@sage-bionetworks/synapse-types'

export const mockChatSessionId = 'session-456'
export const mockCreateAgentSessionRequest: CreateAgentSessionRequest = {
  agentAccessLevel: AgentAccessLevel.READ_YOUR_PRIVATE_DATA,
  agentId: 'experimental-agent-123',
}
export const mockAgentSession: AgentSession = {
  sessionId: mockChatSessionId,
  agentAccessLevel: AgentAccessLevel.PUBLICLY_ACCESSIBLE,
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
  sessionId: mockChatSessionId,
  chatText: 'Hello! How can I access My Projects?',
  enableTrace: true,
}

export const mockAgentChatResponse: AgentChatResponse = {
  sessionId: mockChatSessionId,
  responseText:
    'Hm, please elaborate to improve the accuracy of my response...',
}

export const mockSessionHistoryResponse: SessionHistoryResponse = {
  sessionId: mockChatSessionId,
  page: [
    {
      usersRequestText: 'What is the weather like today?',
      usersRequestTimestamp: '2024-09-06T14:30:00Z',
      agentResponseText: 'The weather is sunny with a high of 75°F.',
      agentResponseTimestamp: '2024-09-06T14:30:10Z',
    },
    {
      usersRequestText: 'Can you tell me a joke?',
      usersRequestTimestamp: '2024-09-06T14:32:00Z',
      agentResponseText:
        'Why don’t scientists trust atoms? Because they make up everything!',
      agentResponseTimestamp: '2024-09-06T14:32:05Z',
    },
  ],
  nextPageToken: undefined,
}

export const mockTraceEventsResponse1: TraceEventsResponse = {
  jobId: ':id',
  page: [
    {
      timestamp: 1695567600, // Example timestamp (in seconds)
      message: 'Executing search on Synapse',
    },
  ],
}

export const mockTraceEventsResponse2: TraceEventsResponse = {
  jobId: ':id',
  page: [
    {
      timestamp: 1695567700, // Example timestamp (in seconds)
      message: 'Gathering entity metadata',
    },
  ],
}
export const mockTraceEventsResponse3: TraceEventsResponse = {
  jobId: ':id',
  page: [
    {
      timestamp: 1695567800, // Example timestamp (in seconds)
      message:
        '<thinking>The metadata shows that the entity with ID syn9602623 is a Synapse project named "SearchIntegrationTest.Projecte475c6e8-414a-4842-b876-bf8232ce05d0". Its description contains the search term "e7b33c3a-2392-4ce7-a357-efa4612e4a41". The metadata ...',
    },
  ],
}

// no new trace events events
export const mockEmptyTraceEventsResponse: TraceEventsResponse = {
  jobId: ':id',
  page: [],
}
