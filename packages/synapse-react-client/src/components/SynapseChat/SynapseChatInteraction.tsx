import { SmartToyTwoTone } from '@mui/icons-material'
import Alert from '@mui/material/Alert'
import Box from '@mui/material/Box'
import ListItem from '@mui/material/ListItem'
import ListItemText from '@mui/material/ListItemText'
import { useTheme } from '@mui/material/styles'
import { Color } from '@mui/material/styles'
import { useEffect, useMemo, useRef } from 'react'
import MarkdownSynapse from '../Markdown/MarkdownSynapse'

export type SynapseChatInteractionProps = {
  userMessage: string
  chatResponseText?: string
  scrollIntoView?: boolean
  chatErrorReason?: string
}

export function SynapseChatInteraction({
  userMessage,
  chatResponseText,
  chatErrorReason,
  scrollIntoView = false,
}: SynapseChatInteractionProps) {
  const theme = useTheme()
  const ref = useRef<HTMLLIElement | null>(null)
  useEffect(() => {
    // on mount, scroll into view if instructed
    if (scrollIntoView) {
      if (ref.current) {
        ref.current.scrollIntoView({ behavior: 'smooth' })
      }
    }
  }, [ref])

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
      {textContent && (
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
            <MarkdownSynapse markdown={textContent} />
          </Box>
        </ListItem>
      )}
      {chatErrorReason && (
        <Alert severity={'error'} sx={{ my: 2 }}>
          {chatErrorReason}
        </Alert>
      )}
    </>
  )
}

export default SynapseChatInteraction
