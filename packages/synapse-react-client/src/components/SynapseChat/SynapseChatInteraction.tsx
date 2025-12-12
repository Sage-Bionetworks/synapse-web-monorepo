import { SynapseSpinner } from '@/components/LoadingScreen/LoadingScreen'
import extractMessageFromTraceEvent, {
  TraceMessage,
} from '@/components/SynapseChat/extractMessageFromTraceEvent'
import {
  KeyboardArrowDown,
  KeyboardArrowRight,
  SmartToyTwoTone,
} from '@mui/icons-material'
import {
  Alert,
  Box,
  Button,
  Collapse,
  ListItem,
  ListItemText,
  useTheme,
} from '@mui/material'
import { Color } from '@mui/material/styles'
import { TraceEvent } from '@sage-bionetworks/synapse-types'
import { useEffect, useMemo, useRef, useState } from 'react'
import { useSynapseContext } from '@/utils'
import MarkdownSynapse from '../Markdown/MarkdownSynapse'

export type SynapseChatInteractionProps = {
  userMessage: string
  chatResponseText?: string
  chatResponseTrace?: TraceEvent[]
  scrollIntoView?: boolean
  chatErrorReason?: string
  processResponseDocument?: (
    doc: Document,
    navigate?: (to: string) => void | Promise<void>,
  ) => void
}

// Show tool calls in the trace. Useful for development. We may want to show them to users in the future.
const SHOW_TOOL_USE = false

function getMarkdownForTraceMessage(traceMessage: TraceMessage): string {
  if ('reasoningText' in traceMessage) {
    return traceMessage.reasoningText
  }
  if (SHOW_TOOL_USE && 'toolName' in traceMessage) {
    return `**Tool Used:** \`${
      traceMessage.toolName
    }\`\n\n**Tool Input:**\n\`\`\`json\n${JSON.stringify(
      traceMessage.toolInput,
      null,
      2,
    )}\n\`\`\`\n`
  }
  return ''
}

export function SynapseChatInteraction({
  userMessage,
  chatResponseText,
  chatErrorReason,
  chatResponseTrace,
  scrollIntoView = false,
  processResponseDocument,
}: SynapseChatInteractionProps) {
  const theme = useTheme()
  const ref = useRef<HTMLLIElement | null>(null)
  const [showTrace, setShowTrace] = useState(false)
  const { navigate } = useSynapseContext()

  useEffect(() => {
    // on mount, scroll into view if instructed
    if (scrollIntoView) {
      if (ref.current) {
        ref.current.scrollIntoView({ behavior: 'smooth' })
      }
    }
  }, [ref, scrollIntoView])

  const isLoading = !chatResponseText && !chatErrorReason

  const traceMessages = useMemo(
    () =>
      (chatResponseTrace ?? [])
        .flatMap(traceEvent => extractMessageFromTraceEvent(traceEvent))
        ?.filter(trace => !!trace),
    [chatResponseTrace],
  )

  const hasTraceInfo = traceMessages.length > 0

  const lastReasoningMessage = useMemo(
    () => traceMessages.filter(trace => 'reasoningText' in trace).at(-1),
    [traceMessages],
  )

  const traceButtonLoadingText =
    lastReasoningMessage == null
      ? 'Thinking...'
      : lastReasoningMessage.reasoningText

  const traceButtonText = isLoading
    ? traceButtonLoadingText
    : `${showTrace ? 'Hide' : 'Show'} Trace`

  const textContent = useMemo(() => {
    const parser = new DOMParser()
    const doc = parser.parseFromString(chatResponseText ?? '', 'text/html')

    // Remove tool_name elements
    const elementsToRemove = doc.querySelectorAll('tool_name')
    elementsToRemove.forEach(element => element.remove())

    // Allow custom processing of the response document
    if (processResponseDocument) {
      processResponseDocument(doc, navigate)
    }

    // Extract text from <chat> element if present, otherwise use full body text
    const chatElement = doc.querySelector('chat')
    if (chatElement) {
      return chatElement.textContent ?? ''
    }

    return doc.body.textContent ?? ''
  }, [chatResponseText, processResponseDocument, navigate])

  return (
    <>
      <ListItem
        ref={ref}
        sx={{
          alignSelf: 'flex-end',
          backgroundColor: (theme.palette.secondary as unknown as Color)[100],
          borderRadius: '24px',
          maxWidth: '70%',
          display: 'block',
          mb: '5px',
          p: '8px 12px',
          wordWrap: 'break-word',
          width: 'auto',
        }}
      >
        <ListItemText primary={userMessage} />
      </ListItem>
      <ListItem
        sx={{
          display: 'grid',
          gridTemplateColumns: '50px auto',
          columnGap: '0px',
          justifyItems: 'center',
          alignItems: 'start',
          p: '0px',
        }}
      >
        <Box
          sx={{
            p: '3px',
            mt: '10px',
            height: '31px',
            borderRadius: '50%',
            borderStyle: 'solid',
            borderWidth: '1px',
            borderColor: 'grey.300',
          }}
        >
          <SmartToyTwoTone sx={{ color: 'secondary.main' }} />
        </Box>
        <Box
          sx={{
            borderRadius: '10px',
            padding: '10px',
            maxWidth: '100%',
            overflow: 'auto',
          }}
        >
          <Box
            component={'aside'}
            sx={{
              '.markdown': {
                fontStyle: 'italic',
                borderLeft: `4px solid ${theme.palette.grey[300]}`,
                marginLeft: '4px',
                paddingLeft: '8px',
                mt: 1,
                mb: 2,
              },
            }}
          >
            <Button
              variant={'outlined'}
              size={'small'}
              startIcon={
                isLoading ? (
                  <SynapseSpinner size={14} />
                ) : showTrace ? (
                  <KeyboardArrowDown sx={{ width: '14px' }} />
                ) : (
                  <KeyboardArrowRight sx={{ width: '14px' }} />
                )
              }
              disabled={!hasTraceInfo}
              onClick={() => {
                setShowTrace(v => !v)
              }}
              sx={{
                height: '20px',
                fontSize: '12px',
                fontWeight: 600,
                mb: 1,
                border: 'none !important',
                color: 'grey.700',
                justifyContent: 'flex-start',
                whiteSpace: 'nowrap',
                maxWidth: '325px',
                textTransform: 'none',
                pl: 0,
                '.MuiButton-startIcon': { mr: 0.5 },
              }}
            >
              <Box sx={{ overflow: 'hidden', textOverflow: 'ellipsis' }}>
                {traceButtonText}
              </Box>
            </Button>
            {chatResponseTrace && (
              <Collapse in={showTrace}>
                <MarkdownSynapse
                  markdown={traceMessages
                    .map(getMarkdownForTraceMessage)
                    .filter(md => md.trim().length > 0)
                    .join('<br/><br/>')}
                />
              </Collapse>
            )}
          </Box>
          {textContent && <MarkdownSynapse markdown={textContent} />}
        </Box>
      </ListItem>
      {chatErrorReason && (
        <Alert severity={'error'} sx={{ my: 2 }}>
          {chatErrorReason}
        </Alert>
      )}
    </>
  )
}

export default SynapseChatInteraction
