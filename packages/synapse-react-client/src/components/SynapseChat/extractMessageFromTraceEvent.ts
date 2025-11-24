import { TraceEvent } from '@sage-bionetworks/synapse-types'
import { JSONPath } from 'jsonpath-plus'

export type TraceMessage =
  | {
      reasoningText: string
    }
  | {
      toolName: string
      toolInput: string
    }

export default function extractMessageFromTraceEvent(
  event: TraceEvent,
): TraceMessage[] | null {
  // WARNING: The message format may change when we change models.
  const messagesToAdd: TraceMessage[] = []
  const parsedMessage = JSON.parse(event.message) as object

  const messages = JSONPath({
    path: '$.output.message.content[*]',
    json: parsedMessage,
  })

  messages.forEach((message: any) => {
    const reasoningMessage = JSONPath({
      path: '$.reasoningContent.reasoningText.text',
      json: message,
    })
    if (reasoningMessage[0]) {
      messagesToAdd.push({ reasoningText: reasoningMessage[0] })
    }
    const toolUseMessage = JSONPath({
      path: '$.toolUse[name,input]',
      json: message,
    })

    if (toolUseMessage.length > 0) {
      messagesToAdd.push({
        toolName: toolUseMessage[0],
        toolInput: toolUseMessage[1],
      })
    }
  })
  return messagesToAdd
}
