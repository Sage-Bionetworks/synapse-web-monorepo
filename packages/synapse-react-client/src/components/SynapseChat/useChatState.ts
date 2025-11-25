import { useSendChatMessageToAgent } from '@/synapse-queries/chat/useChat'
import {
  AgentChatRequest,
  AgentChatResponse,
  AgentSession,
  AsynchronousJobStatus,
} from '@sage-bionetworks/synapse-types'
import { useCallback, useMemo, useState } from 'react'

export type ChatState = {
  sendChat: (message: string) => void
  pendingMessage: string | null
  chatJobIds: string[]
}

export function useChatState(agentSession?: AgentSession): ChatState {
  const [chatJobIds, setChatJobIds] = useState<string[]>([])
  // Optimistic update state for latest unprocessed message
  const [pendingMessage, setPendingMessage] = useState<string | null>(null)

  const { mutate: sendChatMessageToAgent } = useSendChatMessageToAgent(
    {
      onMutate: (newChatMessage: AgentChatRequest) => {
        // set the pending message to the new chat message
        setPendingMessage(newChatMessage.chatText)
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
      })
    },
    [agentSession?.sessionId, sendChatMessageToAgent],
  )

  return useMemo(
    () => ({ sendChat, pendingMessage, chatJobIds }),
    [sendChat, pendingMessage, chatJobIds],
  )
}
