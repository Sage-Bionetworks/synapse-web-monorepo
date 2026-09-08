import { SynapseSpinner } from '@/components/LoadingScreen/LoadingScreen'
import extractMessageFromTraceEvent, {
  TraceMessage,
} from '@/components/SynapseChat/extractMessageFromTraceEvent'
import { KeyboardArrowDown, KeyboardArrowRight } from '@mui/icons-material'
import {
  Alert,
  Box,
  Button,
  Chip,
  Collapse,
  ListItem,
  ListItemText,
  Stack,
  Tooltip,
  useTheme,
} from '@mui/material'
import { TraceEvent } from '@sage-bionetworks/synapse-types'
import { useEffect, useMemo, useRef, useState } from 'react'
import MarkdownSynapse from '../Markdown/MarkdownSynapse'
import styles from './SynapseChatInteraction.module.scss'
import {
  AttachmentStripItem,
  ChatAttachmentStrip,
} from './components/ChatAttachmentStrip/ChatAttachmentStrip'
import { AgentChatAttachmentStatus } from '@sage-bionetworks/synapse-client'

/**
 * A chat attachment to display on a sent/pending turn. Only `fileHandleId` is guaranteed --
 * `fileName`/`contentType` are omitted for a turn restored from history, where only the
 * fileHandleId that was sent to the server is known, with no in-session upload record to fall
 * back on (see SynapseChatMessage).
 */
export type SynapseChatInteractionAttachment = {
  fileHandleId: string
  fileName?: string
  contentType?: string
}

export type SynapseChatInteractionProps = {
  userMessage: string
  chatResponseText?: string
  chatResponseTrace?: TraceEvent[]
  scrollIntoView?: boolean
  chatErrorReason?: string
  onSendChat?: (message: string) => void
  agentAvatar: React.ReactNode
  userAvatar: React.ReactNode
  /** Whether to play the fade/rise-in entry animation for this interaction on mount. */
  animateEntry?: boolean
  /** Whether a turn is currently in flight; gates the guide-prompt chips so they can't bypass the composer. */
  isAwaitingResponse?: boolean
  /** Attachments the user sent with this message, if any. */
  attachments?: SynapseChatInteractionAttachment[]
  /** Server-reported outcome of staging each attachment, if available (see AgentChatResponseWithAttachmentStatuses). */
  attachmentStatuses?: AgentChatAttachmentStatus[]
  /** Whether to show the loading spinner icon while the response is in flight. */
  showLoadingIcon?: boolean
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
  onSendChat,
  agentAvatar,
  userAvatar,
  animateEntry = false,
  isAwaitingResponse = false,
  attachments,
  attachmentStatuses,
  showLoadingIcon = true,
}: SynapseChatInteractionProps) {
  const theme = useTheme()
  const userMessageRef = useRef<HTMLLIElement | null>(null)
  const responseRef = useRef<HTMLLIElement | null>(null)
  const [showTrace, setShowTrace] = useState(false)

  const isLoading = !chatResponseText && !chatErrorReason

  useEffect(() => {
    // on mount, scroll into view if instructed. This brings the "Thinking..." row to the top so
    // the answer's opening lines are usually visible as soon as it starts streaming in.
    if (scrollIntoView) {
      userMessageRef.current?.scrollIntoView({ behavior: 'smooth' })
    }
  }, [scrollIntoView])

  useEffect(() => {
    // once the response (or an error) arrives, scroll all the way to the bottom so the full
    // answer - which may be taller than the viewport - is brought into view.
    if (scrollIntoView && !isLoading) {
      responseRef.current?.scrollIntoView({ behavior: 'smooth', block: 'end' })
    }
  }, [scrollIntoView, isLoading])

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

  const { textContent, guidePrompts } = useMemo(() => {
    try {
      const parser = new DOMParser()
      const doc = parser.parseFromString(chatResponseText ?? '', 'text/html')

      // Remove tool_name and actions elements (AI XML tags not for display)
      doc
        .querySelectorAll('tool_name, actions')
        .forEach(element => element.remove())

      // Extract guideprompts before removing them
      const extractedGuidePrompts = Array.from(
        doc.querySelectorAll('guideprompt'),
      )
        .map(el => el.textContent?.trim())
        .filter((t): t is string => !!t)

      // Remove guideprompt elements
      doc.querySelectorAll('guideprompt').forEach(element => element.remove())

      // Extract text from <chat> element if present, otherwise use full body text
      const chatElement = doc.querySelector('chat')
      return {
        textContent: chatElement
          ? (chatElement.textContent ?? '')
          : (doc.body.textContent ?? ''),
        guidePrompts: extractedGuidePrompts,
      }
    } catch (e) {
      console.error(e)
      return { textContent: chatResponseText ?? '', guidePrompts: [] }
    }
  }, [chatResponseText])

  const attachmentItems: AttachmentStripItem[] = useMemo(
    () =>
      (attachments ?? []).map(attachment => {
        const status = attachmentStatuses?.find(
          s => s.fileHandleId === attachment.fileHandleId,
        )
        return {
          fileHandleId: attachment.fileHandleId,
          label: attachment.fileName ?? attachment.fileHandleId,
          contentType: attachment.contentType,
          status: status?.status === 'FAILED' ? 'failed' : 'default',
          errorMessage: status?.failureMessage,
        }
      }),
    [attachments, attachmentStatuses],
  )

  return (
    <>
      <ListItem
        ref={userMessageRef}
        sx={{
          alignSelf: 'flex-end',
          maxWidth: '82%',
          mb: '5px',
          wordWrap: 'break-word',
          width: 'auto',
          display: 'grid',
          gridTemplateColumns: 'auto auto',
          columnGap: '16px',
          alignItems: 'start',
          justifyItems: 'end',
        }}
      >
        <Box
          className={animateEntry ? styles.entryAnimation : undefined}
          sx={{
            p: '4px 14px',
            backgroundColor: '#F3F6F7',
            borderRadius: '8px',
          }}
        >
          <ListItemText primary={userMessage} />
        </Box>
        <Box sx={{ marginTop: '4px' }}>{userAvatar}</Box>
      </ListItem>
      {attachmentItems.length > 0 && (
        <ListItem sx={{ display: 'block', p: '0px', mb: '5px' }}>
          <ChatAttachmentStrip items={attachmentItems} wrap />
        </ListItem>
      )}
      <ListItem
        ref={responseRef}
        sx={{
          display: 'grid',
          gridTemplateColumns: '50px auto',
          columnGap: '16px',
          justifyItems: 'center',
          alignItems: 'start',
          p: '0px',
          padding: '10px',
        }}
      >
        {agentAvatar}
        <Box
          sx={{
            borderRadius: '10px',
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
                  showLoadingIcon ? (
                    <SynapseSpinner size={14} />
                  ) : undefined
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
          {(textContent || (onSendChat && guidePrompts.length > 0)) && (
            <Box className={animateEntry ? styles.entryAnimation : undefined}>
              {textContent && <MarkdownSynapse markdown={textContent} />}
              {onSendChat && guidePrompts.length > 0 && (
                <Stack direction="row" flexWrap="wrap" gap={1} mt={1}>
                  {guidePrompts.map(prompt => (
                    <Tooltip key={prompt} title={prompt}>
                      <Chip
                        label={prompt}
                        variant="outlined"
                        color="primary"
                        clickable
                        disabled={isAwaitingResponse}
                        onClick={() => onSendChat(prompt)}
                        sx={{ maxWidth: 200 }}
                      />
                    </Tooltip>
                  ))}
                </Stack>
              )}
            </Box>
          )}
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
