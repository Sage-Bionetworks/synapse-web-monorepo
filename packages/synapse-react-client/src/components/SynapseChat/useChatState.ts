import { useSendChatMessageToAgent } from '@/synapse-queries/chat/useChat'
import {
  AgentChatResponse,
  AgentSession,
  AsynchronousJobStatus,
} from '@sage-bionetworks/synapse-types'
import {
  AgentChatRequest,
  AgentPromptSessionContext,
} from '@sage-bionetworks/synapse-client'
import { useCallback, useMemo, useState } from 'react'

export type ChatState = {
  sendChat: (message: string) => void
  pendingMessage: string | null
  chatJobIds: string[]
}

export function useChatState(
  agentSession?: AgentSession,
  context?: AgentPromptSessionContext[],
): ChatState {
  const [chatJobIds, setChatJobIds] = useState<string[]>([])
  // Optimistic update state for latest unprocessed message
  const [pendingMessage, setPendingMessage] = useState<string | null>(null)

  const { mutate: sendChatMessageToAgent } = useSendChatMessageToAgent(
    {
      onMutate: (newChatMessage: AgentChatRequest) => {
        // set the pending message to the new chat message
        setPendingMessage(newChatMessage.chatText ?? null)
      },
    },
    (status: AsynchronousJobStatus<AgentChatRequest, AgentChatResponse>) => {
      if (!chatJobIds.includes(status.jobId)) {
        setPendingMessage(null)
        setChatJobIds(() => [...chatJobIds, status.jobId])
      }
    },
  )

  const sendChat = useCallback(
    (message: string) => {
      if (!agentSession?.sessionId) {
        throw new Error('No agent session available to send chat message.')
      }
      sendChatMessageToAgent({
        chatText: message,
        sessionId: agentSession.sessionId,
        enableTrace: true,
        concreteType: 'org.sagebionetworks.repo.model.agent.AgentChatRequest',
        context: context,
      })
    },
    [agentSession?.sessionId, sendChatMessageToAgent, context],
  )

  return useMemo(
    () => ({ sendChat, pendingMessage, chatJobIds }),
    [sendChat, pendingMessage, chatJobIds],
  )
}
