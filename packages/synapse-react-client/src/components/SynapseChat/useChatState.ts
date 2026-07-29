import { useSendChatMessageToAgent } from '@/synapse-queries/chat/useChat'
import { useSynapseContext } from '@/utils'
import {
  AgentChatRequest,
  AgentChatResponse,
  AgentSession,
  AsynchronousJobStatus,
} from '@sage-bionetworks/synapse-types'
import { useQueryClient } from '@tanstack/react-query'
import { useCallback, useMemo, useRef, useState } from 'react'

export type ChatInteraction = {
  /** client-generated at send time; stable for the interaction's whole life */
  id: string
  /** known at send time, never re-fetched */
  userMessage: string
  /** undefined until the async job is registered */
  jobId?: string
}

export type ChatState = {
  sendChat: (message: string) => void
  interactions: ChatInteraction[]
  isAwaitingResponse: boolean
}

export function useChatState(
  agentSession?: AgentSession,
  onChatResponse?: (responseText: string) => void,
): ChatState {
  const { keyFactory } = useSynapseContext()
  const queryClient = useQueryClient()

  const [interactions, setInteractions] = useState<ChatInteraction[]>([])
  const nextInteractionId = useRef(0)

  const { mutate: sendChatMessageToAgent, isPending: isAwaitingResponse } =
    useSendChatMessageToAgent(
      {
        onMutate: (newChatMessage: AgentChatRequest) => {
          const id = String(nextInteractionId.current++)
          setInteractions(prev => [
            ...prev,
            { id, userMessage: newChatMessage.chatText },
          ])
        },
        onSuccess: response => {
          onChatResponse?.(response?.responseBody?.responseText!)
        },
      },
      (status: AsynchronousJobStatus<AgentChatRequest, AgentChatResponse>) => {
        // Seed the cache so usePollAsynchronousJob (a fallback for restored history / a dead
        // mutation loop) renders the same status immediately instead of re-fetching, and so its
        // own polling interval self-disables once the job leaves PROCESSING.
        queryClient.setQueryData(
          keyFactory.getAsyncJobStatusQueryKey(status.jobId),
          status,
        )

        setInteractions(prev => {
          if (prev.some(interaction => interaction.jobId === status.jobId)) {
            // already attached; this is a later poll of the same job
            return prev
          }
          const pendingIndex = prev.findIndex(
            interaction => interaction.jobId == null,
          )
          if (pendingIndex === -1) {
            return prev
          }
          const next = [...prev]
          next[pendingIndex] = {
            ...next[pendingIndex],
            jobId: status.jobId,
          }
          return next
        })
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
    () => ({ sendChat, interactions, isAwaitingResponse }),
    [sendChat, interactions, isAwaitingResponse],
  )
}
