import React, { KeyboardEventHandler, useMemo, useState } from 'react'
import {
  Box,
  List,
  ListItem,
  ListItemText,
  Paper,
  Typography,
  FormControl,
  InputAdornment,
  IconButton,
} from '@mui/material'
import { useTheme } from '@mui/material'
import { ColorPartial } from '@mui/material/styles/createPalette'
import { OutlinedInput } from '@mui/material'
import { ArrowUpward } from '@mui/icons-material'
import { AgentChatRequest } from '@sage-bionetworks/synapse-types'

export type SynapseChatInteractionProps = {
  sessionId: string
  userMessage: string
}

export const SynapseChatInteraction: React.FunctionComponent<
  SynapseChatInteractionProps
> = ({ sessionId, userMessage }) => {
  const theme = useTheme()
  const agentChatRequest: AgentChatRequest = useMemo(() => {
    return {
      chatText: userMessage,
      sessionId: sessionId,
    }
  }, [userMessage])
  // TODO: async ask for AgentChatResponse for this AgentChatRequest
  // Once returned, set the chat response string
  const [chatResponse, setChatResponse] = useState('')

  return (
    <>
      <ListItem sx={{ justifyContent: 'flex-end' }}>
        <ListItemText
          primary={userMessage}
          sx={{
            backgroundColor: (theme.palette.secondary as ColorPartial)[100],
            borderRadius: '10px',
            padding: '10px',
            maxWidth: '75%',
          }}
        />
      </ListItem>
      {chatResponse && (
        <ListItem>
          <ListItemText
            primary={chatResponse}
            sx={{
              borderRadius: '10px',
              padding: '10px',
              maxWidth: '100%',
            }}
          />
        </ListItem>
      )}
    </>
  )
}

export default SynapseChatInteraction
