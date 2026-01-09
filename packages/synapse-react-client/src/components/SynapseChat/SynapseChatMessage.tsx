import SynapseChatInteraction from '@/components/SynapseChat/SynapseChatInteraction'
import usePollAsynchronousJob from '@/synapse-queries/asynchronous/usePollAsynchronousJob'
import { useGetChatAgentTraceEvents } from '@/synapse-queries/chat/useChat'
import {
  AgentChatRequest,
  AgentChatResponse,
  TraceEvent,
} from '@sage-bionetworks/synapse-types'
import { useCallback, useEffect, useState } from 'react'

function useTraceEvent(chatJobId: string, enabled: boolean) {
  const [traceEvents, setTraceEvents] = useState<TraceEvent[]>([])

  const appendTraceEvents = useCallback((newEvents: TraceEvent[]) => {
    setTraceEvents(prev => {
      return [...prev, ...newEvents]
    })
  }, [])

  const latestTraceEvent = traceEvents.at(traceEvents.length - 1)
  const { data: newTraceEvents } = useGetChatAgentTraceEvents(
    {
      jobId: chatJobId,
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
  chatJobId: string
  processResponseDocument?: (
    doc: Document,
    navigate?: (to: string) => void | Promise<void>,
  ) => void
}

export default function SynapseChatMessage(props: SynapseChatMessageProps) {
  const { chatJobId, processResponseDocument } = props
  const { data: asyncJobStatus } = usePollAsynchronousJob(chatJobId)

  const chatRequest = asyncJobStatus?.requestBody as AgentChatRequest
  const chatResponse = asyncJobStatus?.responseBody as
    | AgentChatResponse
    | undefined
  const chatError = asyncJobStatus?.errorMessage

  // enabled if the job has not finished processing
  const enableTrace =
    !!chatJobId &&
    (!asyncJobStatus?.jobState || asyncJobStatus.jobState == 'PROCESSING')
  const { traceEvents } = useTraceEvent(chatJobId, enableTrace)

  return (
    <SynapseChatInteraction
      userMessage={chatRequest?.chatText}
      chatResponseText={chatResponse?.responseText}
      chatResponseTrace={traceEvents}
      chatErrorReason={chatError}
      processResponseDocument={processResponseDocument}
    />
  )
}
