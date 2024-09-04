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
