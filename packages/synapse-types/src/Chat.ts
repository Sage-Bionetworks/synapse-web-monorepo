// Type for AgentAccessLevel
export enum AgentAccessLevel {
  PUBLICLY_ACCESSIBLE = 'PUBLICLY_ACCESSIBLE',
  READ_YOUR_PRIVATE_DATA = 'READ_YOUR_PRIVATE_DATA',
  WRITE_YOUR_PRIVATE_DATA = 'WRITE_YOUR_PRIVATE_DATA',
}

// Type for CreateAgentSessionRequest
export type CreateAgentSessionRequest = {
  /**
   * Required. Specifies the access level that the agent will have during this session only.
   */
  agentAccessLevel: AgentAccessLevel
  /**
   * Optional. Most users will not use this parameter. If you are authorized to test experimental agents,
   * provide the ID of the agent you wish to test.
   */
  agentId?: string
}

// Type for AgentSession
export type AgentSession = {
  /**
   * The unique identifier for a conversation with an agent. The sessionId issued by Synapse when the session is started.
   * The caller must provide this sessionId with each chat request to identify a specific conversation with an agent.
   * A sessionId can only be used by the user that created it.
   */
  sessionId: string
  /**
   * Specifies the access level that the agent will have during this session only.
   */
  agentAccessLevel: AgentAccessLevel
  /**
   * The date this session was started.
   */
  startedOn: string
  /**
   * Identifies the agent that will be used for this session. The default value is null, which indicates
   * that the default agent will be used.
   */
  agentId?: string
}

// Type for ListAgentSessionsRequest
export type ListAgentSessionsRequest = {
  /**
   * Forward the returned 'nextPageToken' to get the next page of results.
   */
  nextPageToken?: string
}

// Type for ListAgentSessionsResponse
export type ListAgentSessionsResponse = {
  /**
   * A single page of agent sessions.
   */
  page: AgentSession[]
  /**
   * Forward this token to get the next page of results.
   */
  nextPageToken?: string
}

// Type for AgentChatRequest
export type AgentChatRequest = {
  /**
   * The sessionId that identifies the conversation with the agent.
   */
  sessionId: string
  /**
   * The user's text message to send to the agent.
   */
  chatText: string
}

// Type for AgentChatResponse
export type AgentChatResponse = {
  /**
   * The sessionId that identifies the conversation with the agent.
   */
  sessionId: string
  /**
   * The agent's text response to the user's request.
   */
  responseText: string
}

// Represents a request for a single page of a session's history
export type SessionHistoryRequest = {
  /**
   * The sessionId that identifies the conversation with the agent.
   */
  sessionId?: string
  nextPageToken?: string // Optional field to request the next page of results
}

// Represents a single interaction between the user and an agent
export type Interaction = {
  usersRequestText: string // The text of the user's request
  usersRequestTimestamp: string // ISO 8601 date-time format for when the user made the request
  agentResponseText: string // The text of the agent's response
  agentResponseTimestamp: string // ISO 8601 date-time format for when the agent produced the response
}

// Represents a response containing a single page of a session's history
export type SessionHistoryResponse = {
  sessionId: string // The session ID of this conversation's history
  page: Interaction[] // Array of interactions in the session's history, ordered by interaction timestamp
  nextPageToken?: string // Optional token to retrieve the next page of results
}
