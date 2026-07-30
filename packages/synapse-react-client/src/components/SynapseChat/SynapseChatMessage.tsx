import SynapseChatInteraction from '@/components/SynapseChat/SynapseChatInteraction'
import usePollAsynchronousJob from '@/synapse-queries/asynchronous/usePollAsynchronousJob'
import { useGetChatAgentTraceEvents } from '@/synapse-queries/chat/useChat'
import { AgentChatResponse, TraceEvent } from '@sage-bionetworks/synapse-types'
import { useCallback, useEffect, useState } from 'react'

function useTraceEvent(chatJobId: string | undefined, enabled: boolean) {
  const [traceEvents, setTraceEvents] = useState<TraceEvent[]>([])

  const appendTraceEvents = useCallback((newEvents: TraceEvent[]) => {
    setTraceEvents(prev => {
      return [...prev, ...newEvents]
    })
  }, [])

  const latestTraceEvent = traceEvents.at(traceEvents.length - 1)
  const { data: newTraceEvents } = useGetChatAgentTraceEvents(
    {
      jobId: chatJobId ?? '',
      newerThanTimestamp: latestTraceEvent?.timestamp,
    },
    {
      enabled: enabled,
      refetchInterval: 1000, // Re-fetch every second if enabled
      refetchIntervalInBackground: true, // Continue polling even when the tab is not active
    },
  )
  useEffect(() => {
    if (newTraceEvents && newTraceEvents.page.length > 0) {
      appendTraceEvents(newTraceEvents.page)

      // send trace events to the console to ease agent debugging
      // if the trace events do not contain the latest event, add the events to the array
      console.debug(newTraceEvents.page)
    }
  }, [appendTraceEvents, newTraceEvents])

  return {
    traceEvents,
  }
}

type SynapseChatMessageProps = {
  agentAvatar: React.ReactNode
  userAvatar: React.ReactNode
  /** Known at send time; never re-derived from the polled job so the bubble never renders empty. */
  userMessage: string
  /** Undefined until the async job has been registered for this interaction. */
  chatJobId?: string
  onSendChat?: (message: string) => void
  scrollIntoView?: boolean
  animateEntry?: boolean
  isAwaitingResponse?: boolean
}

export default function SynapseChatMessage(props: SynapseChatMessageProps) {
  const {
    userMessage,
    chatJobId,
    onSendChat,
    agentAvatar,
    userAvatar,
    scrollIntoView,
    animateEntry,
    isAwaitingResponse,
  } = props
  const { data: asyncJobStatus } = usePollAsynchronousJob(chatJobId)

  const chatResponse = asyncJobStatus?.responseBody as
    | AgentChatResponse
    | undefined
  const chatError = asyncJobStatus?.errorMessage

  // enabled if the job has been registered and has not finished processing
  const enableTrace =
    !!chatJobId &&
    (!asyncJobStatus?.jobState || asyncJobStatus.jobState == 'PROCESSING')
  const { traceEvents } = useTraceEvent(chatJobId, enableTrace)

  return (
    <SynapseChatInteraction
      agentAvatar={agentAvatar}
      userAvatar={userAvatar}
      userMessage={userMessage}
      chatResponseText={chatResponse?.responseText}
      chatResponseTrace={traceEvents}
      chatErrorReason={chatError}
      onSendChat={onSendChat}
      scrollIntoView={scrollIntoView}
      animateEntry={animateEntry}
      isAwaitingResponse={isAwaitingResponse}
    />
  )
}
