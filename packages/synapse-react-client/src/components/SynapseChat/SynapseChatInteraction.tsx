import React, { useMemo } from 'react'
import { ListItem, ListItemText, Skeleton } from '@mui/material'
import { useTheme } from '@mui/material'
import { ColorPartial } from '@mui/material/styles/createPalette'
import { AgentChatRequest } from '@sage-bionetworks/synapse-types'
import { useGetAgentChatWithAsyncStatus } from 'src/synapse-queries/chat/useChat'

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
  const { data: chatResponse, isLoading } =
    useGetAgentChatWithAsyncStatus(agentChatRequest)

  const chatResponseText = chatResponse?.responseBody?.responseText
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
      {isLoading && <Skeleton width={200} height={100} />}
      {!isLoading && chatResponseText && (
        <ListItem>
          <ListItemText
            primary={chatResponseText}
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
