import React, { KeyboardEventHandler, useEffect, useRef, useState } from 'react'
import { Box, List, Paper, Typography, IconButton } from '@mui/material'
import { useTheme } from '@mui/material'
import { ColorPartial } from '@mui/material/styles/createPalette'
import { ArrowUpward } from '@mui/icons-material'
import SynapseChatInteraction from './SynapseChatInteraction'
import { SkeletonParagraph } from '../Skeleton'
import {
  useCreateAgentSession,
  useGetAgentChatWithAsyncStatus,
} from '../../synapse-queries/chat/useChat'
import { AgentAccessLevel } from '@sage-bionetworks/synapse-types'
import { TextField } from '@mui/material'

export type SynapseChatProps = {
  initialMessage?: string //optional initial message
  agentId?: string // if provided, use this agent
}

type ChatInteraction = {
  userMessage: string
  chatResponseText?: string
}
export const SynapseChat: React.FunctionComponent<SynapseChatProps> = ({
  initialMessage,
  agentId,
}) => {
  const { data: agentSession, mutate: createAgentSession } =
    useCreateAgentSession()
  const theme = useTheme()
  // When both the current message and current response are available, add a new ChatInteraction to the array
  const [interactions, setInteractions] = useState<ChatInteraction[]>([])
  const [currentInteraction, setCurrentInteraction] =
    useState<ChatInteraction>()
  const [currentResponse, setCurrentResponse] = useState('')
  // Keep track of the text that the user is currently typing into the textfield
  const [userChatTextfieldValue, setUserChatTextfieldValue] = useState('')
  const { mutate: createAgentChatInteraction } = useGetAgentChatWithAsyncStatus(
    {
      onSuccess: data => {
        // whenever the response is returned, set the last interaction response text
        setCurrentResponse(data.responseText)
      },
    },
  )

  useEffect(() => {
    // when we have both a message and response, add a new interaction and reset
    if (currentResponse && currentInteraction) {
      currentInteraction.chatResponseText = currentResponse
      setInteractions([...interactions, currentInteraction])
      setCurrentResponse('')
      setCurrentInteraction(undefined)
    }
  }, [currentResponse, currentInteraction])

  useEffect(() => {
    // on mount, create a new agent session!
    if (createAgentSession) {
      createAgentSession({
        agentAccessLevel: AgentAccessLevel.PUBLICLY_ACCESSIBLE,
        agentId: agentId,
      })
    }
  }, [createAgentSession])

  useEffect(() => {
    // on mount, resolve the initial message chat interaction (if set)
    if (agentSession && initialMessage) {
      setCurrentInteraction({ userMessage: initialMessage })
      createAgentChatInteraction({
        chatText: initialMessage,
        sessionId: agentSession!.sessionId,
      })
    }
  }, [agentSession, initialMessage])

  const handleSendMessage = () => {
    if (userChatTextfieldValue.trim()) {
      setCurrentInteraction({ userMessage: userChatTextfieldValue })
      setUserChatTextfieldValue('')
      createAgentChatInteraction({
        chatText: userChatTextfieldValue,
        sessionId: agentSession!.sessionId,
      })
    }
  }

  const isDisabled = !userChatTextfieldValue || !!currentInteraction

  const handleKeyDown: KeyboardEventHandler<HTMLDivElement> = event => {
    if (!isDisabled && event.key === 'Enter' && !event.shiftKey) {
      event.preventDefault()
      handleSendMessage()
    }
  }

  const sendMessageButtonColor = (theme.palette.secondary as ColorPartial)[300]
  if (!agentSession) {
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
        <List
          sx={{
            flex: 1,
            overflowY: 'auto',
            padding: '10px',
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          {interactions.map((interaction, index) => {
            return (
              <SynapseChatInteraction
                key={index}
                userMessage={interaction.userMessage}
                chatResponseText={interaction.chatResponseText}
              />
            )
          })}
          {currentInteraction && (
            <SynapseChatInteraction
              userMessage={currentInteraction.userMessage}
              chatResponseText={currentInteraction.chatResponseText}
              scrollIntoView
            />
          )}
        </List>
      </Paper>
      <Box component="form" onSubmit={handleSendMessage}>
        <TextField
          fullWidth
          value={userChatTextfieldValue}
          onChange={e => setUserChatTextfieldValue(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder={'Message SynapseChat'}
          sx={{ m: 1 }}
          InputProps={{
            sx: { borderRadius: 96.6 },
            endAdornment: (
              <IconButton
                disabled={isDisabled}
                onClick={handleSendMessage}
                sx={{
                  ml: '7px',
                  mr: '13px',
                  color: sendMessageButtonColor,
                  borderStyle: 'solid',
                  borderWidth: isDisabled ? '1px' : '2px',
                  borderColor: isDisabled ? 'gray' : sendMessageButtonColor,
                }}
              >
                <ArrowUpward />
              </IconButton>
            ),
          }}
        />
      </Box>
    </Box>
  )
}

export default SynapseChat
