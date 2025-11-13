import { SynapseSpinner } from '@/components/LoadingScreen/LoadingScreen'
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
import { useEffect, useMemo, useRef, useState } from 'react'
import MarkdownSynapse from '../Markdown/MarkdownSynapse'
import { TraceEventWithFriendlyMessage } from './SynapseChat'

export type SynapseChatInteractionProps = {
  userMessage: string
  chatResponseText?: string
  chatResponseTrace?: TraceEventWithFriendlyMessage[]
  scrollIntoView?: boolean
  chatErrorReason?: string
}

export function SynapseChatInteraction({
  userMessage,
  chatResponseText,
  chatErrorReason,
  chatResponseTrace,
  scrollIntoView = false,
}: SynapseChatInteractionProps) {
  const theme = useTheme()
  const ref = useRef<HTMLLIElement | null>(null)
  const [showTrace, setShowTrace] = useState(false)
  useEffect(() => {
    // on mount, scroll into view if instructed
    if (scrollIntoView) {
      if (ref.current) {
        ref.current.scrollIntoView({ behavior: 'smooth' })
      }
    }
  }, [ref])

  const isLoading = !chatResponseText && !chatErrorReason

  const traceMessages = useMemo(
    () =>
      (chatResponseTrace ?? [])
        ?.filter(trace => !!trace.friendlyMessage)
        .map(trace => trace.friendlyMessage!),
    [chatResponseTrace],
  )

  const hasTraceInfo = traceMessages.length > 0

  const lastTraceMessage = traceMessages.at(-1)

  const traceButtonLoadingText =
    lastTraceMessage == null ? 'Thinking...' : lastTraceMessage

  const traceButtonText = isLoading
    ? traceButtonLoadingText
    : `${showTrace ? 'Hide' : 'Show'} Trace`

  const textContent = useMemo(() => {
    const parser = new DOMParser()
    const doc = parser.parseFromString(chatResponseText ?? '', 'text/html')
    const elementsToRemove = doc.querySelectorAll('tool_name')
    elementsToRemove.forEach(element => element.remove())
    return doc.body.textContent ?? ''
  }, [chatResponseText])

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
                  markdown={chatResponseTrace
                    .filter(trace => !!trace.friendlyMessage)
                    .map((trace): string => trace.friendlyMessage!)
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
