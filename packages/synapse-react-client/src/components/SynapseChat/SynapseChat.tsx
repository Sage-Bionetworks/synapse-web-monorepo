import React, { KeyboardEventHandler, useEffect, useState } from 'react'
import {
  Box,
  List,
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
import SynapseChatInteraction from './SynapseChatInteraction'
import { SkeletonParagraph } from '../Skeleton'
import { useCreateAgentSession } from 'src/synapse-queries/chat/useChat'
import { AgentAccessLevel } from '@sage-bionetworks/synapse-types'

export type SynapseChatProps = {
  initialMessage: string
  agentId?: string // if provided, use this agent
}

export const SynapseChat: React.FunctionComponent<SynapseChatProps> = ({
  initialMessage,
  agentId,
}) => {
  // Create a new Agent Session on mount, add ability to initialize this component with a starting message from the user.
  const [agentSessionId, setAgentSessionId] = useState('')
  const { mutate: createAgentSession } = useCreateAgentSession({
    onSuccess: newAgentSession => {
      setAgentSessionId(newAgentSession.sessionId)
    },
  })
  const theme = useTheme()
  const [messages, setMessages] = useState([initialMessage])
  const [currentMessage, setCurrentMessage] = useState('')

  useEffect(() => {
    // on mount, create a new agent session!
    if (createAgentSession) {
      createAgentSession({
        agentAccessLevel: AgentAccessLevel.PUBLICLY_ACCESSIBLE,
        agentId: agentId,
      })
    }
  }, [createAgentSession])

  const handleSendMessage = () => {
    if (currentMessage.trim()) {
      setMessages([...messages, currentMessage])
      setCurrentMessage('')
    }
  }

  const handleKeyDown: KeyboardEventHandler<
    HTMLInputElement | HTMLTextAreaElement
  > = event => {
    if (event.key === 'Enter') {
      event.preventDefault()
      handleSendMessage()
    }
  }
  const isMessage = !!currentMessage
  const sendMessageButtonColor = (theme.palette.secondary as ColorPartial)[300]
  if (!agentSessionId) {
    return <SkeletonParagraph numRows={6} />
  }

  return (
    <Box
      display="flex"
      flexDirection="column"
      justifyContent="space-between"
      height="100vh"
      maxWidth="700px"
      mx="auto"
      p={2}
    >
      <Paper elevation={3} sx={{ flexGrow: 1, overflowY: 'auto', p: 2, mb: 2 }}>
        <Typography variant="h6" gutterBottom>
          SynapseChat
        </Typography>
        <List>
          {messages.map((message, index) => {
            return (
              <SynapseChatInteraction
                key={index}
                sessionId={agentSessionId}
                userMessage={message}
              />
            )
          })}
        </List>
      </Paper>
      <Box component="form" onSubmit={handleSendMessage}>
        <FormControl fullWidth sx={{ m: 1 }}>
          <OutlinedInput
            value={currentMessage}
            endAdornment={
              <InputAdornment
                position="end"
                sx={{ p: '0px', ml: '7px', mr: '13px' }}
              >
                <IconButton
                  disabled={!isMessage}
                  onClick={handleSendMessage}
                  sx={{
                    color: sendMessageButtonColor,
                    borderStyle: 'solid',
                    borderWidth: isMessage ? '2px' : '1px',
                    borderColor: isMessage ? sendMessageButtonColor : 'gray',
                  }}
                >
                  <ArrowUpward />
                </IconButton>
              </InputAdornment>
            }
            placeholder={'Message SynapseChat'}
            sx={{ borderRadius: 96.6 }}
            onChange={e => setCurrentMessage(e.target.value)}
            onKeyDown={handleKeyDown}
          />
        </FormControl>
      </Box>
    </Box>
  )
}

export default SynapseChat
