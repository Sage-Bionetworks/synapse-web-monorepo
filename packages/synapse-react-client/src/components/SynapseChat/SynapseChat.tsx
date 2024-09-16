import React, {
  KeyboardEventHandler,
  useEffect,
  useMemo,
  useState,
} from 'react'
import { Box, List, IconButton, Typography } from '@mui/material'
import { useTheme } from '@mui/material'
import { ColorPartial } from '@mui/material/styles/createPalette'
import { ArrowUpward } from '@mui/icons-material'
import SynapseChatInteraction from './SynapseChatInteraction'
import { SkeletonParagraph } from '../Skeleton'
import {
  useCreateAgentSession,
  useGetAgentChatSessionHistoryInfinite,
  useSendChatMessageToAgent,
} from '../../synapse-queries/chat/useChat'
import { AgentAccessLevel } from '@sage-bionetworks/synapse-types'
import { TextField } from '@mui/material'

export type SynapseChatProps = {
  initialMessage?: string //optional initial message
  agentId?: string // if provided, use this agent
  chatbotName?: string // optional name of this chatbot agent
  hideTitle?: boolean
  textboxPositionOffset?: string // when embedded in a form, the textbox (form) stuck to the bottom may need to be offset due to container padding (dialog content for example!)
}

type ChatInteraction = {
  userMessage: string
  chatResponseText?: string
}
export const SynapseChat: React.FunctionComponent<SynapseChatProps> = ({
  initialMessage,
  agentId,
  chatbotName = 'SynapseChat',
  hideTitle = false,
  textboxPositionOffset = '0px',
}) => {
  const { data: agentSession, mutate: createAgentSession } =
    useCreateAgentSession()
  const theme = useTheme()
  // When both the current message and current response are available, add a new ChatInteraction to the array
  const [interactions, setInteractions] = useState<ChatInteraction[]>([])
  const [pendingInteraction, setPendingInteraction] =
    useState<ChatInteraction>()
  const [currentResponse, setCurrentResponse] = useState('')
  // Keep track of the text that the user is currently typing into the textfield
  const [userChatTextfieldValue, setUserChatTextfieldValue] = useState('')
  const [initialMessageProcessed, setInitialMessageProcessed] = useState(false)
  const { mutate: sendChatMessageToAgent } = useSendChatMessageToAgent({
    onSuccess: data => {
      // whenever the response is returned, set the last interaction response text
      setCurrentResponse(data.responseText)
    },
  })
  // Restore chat session history, if exists.
  // TODO: currently only a single page is restored.  Add support for multiple pages (and detect the user scrolling up to restore the next page of results older)
  const {
    data: sessionHistoryInfiniteData,
  } = //, hasNextPage: hasMoreSessionHistory, fetchNextPage: fetchNextSessionHistoryPage, isLoading: isSessionHistoryLoading } =
    useGetAgentChatSessionHistoryInfinite(
      {
        sessionId: agentSession?.sessionId,
      },
      {
        enabled: !!agentSession,
      },
    )

  const sessionHistory = useMemo(
    () =>
      sessionHistoryInfiniteData?.pages
        .flatMap(page => page.page)
        /* Note: session history is ordered from most recent to least recent in each page, so reverse the order when restoring the chat interface */
        .reverse() ?? [],
    [sessionHistoryInfiniteData],
  )

  useEffect(() => {
    // when we have both a message and response, add a new interaction and reset
    // Note : We want the current interaction to be visible to the user while this async job processes (show the user message, and a loading response).
    // You might think we could do this work in the onSuccess of createAgentChatInteraction, but I think there's a race condition (currentInteraction may not be set when onSuccess is called).
    if (currentResponse && pendingInteraction) {
      pendingInteraction.chatResponseText = currentResponse
      setInteractions([...interactions, pendingInteraction])
      setCurrentResponse('')
      setPendingInteraction(undefined)
    }
  }, [currentResponse, pendingInteraction])

  useEffect(() => {
    // on mount, create a new agent session!
    if (createAgentSession && !agentSession) {
      createAgentSession({
        agentAccessLevel: AgentAccessLevel.PUBLICLY_ACCESSIBLE,
        agentId: agentId,
      })
    }
  }, [createAgentSession, agentSession])

  useEffect(() => {
    // on mount, resolve the initial message chat interaction (if set)
    if (agentSession && initialMessage && !initialMessageProcessed) {
      setPendingInteraction({ userMessage: initialMessage })
      sendChatMessageToAgent({
        chatText: initialMessage,
        sessionId: agentSession!.sessionId,
      })
      setInitialMessageProcessed(true)
    }
  }, [agentSession, initialMessage, initialMessageProcessed])

  const handleSendMessage = () => {
    if (userChatTextfieldValue.trim()) {
      setPendingInteraction({ userMessage: userChatTextfieldValue })
      setUserChatTextfieldValue('')
      sendChatMessageToAgent({
        chatText: userChatTextfieldValue,
        sessionId: agentSession!.sessionId,
      })
    }
  }

  const isDisabled = !userChatTextfieldValue || !!pendingInteraction

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
      maxWidth="1100px"
      mx="auto"
    >
      {!hideTitle && (
        <Typography
          variant="headline1"
          sx={{
            p: '20px',
            borderBottom: '1px solid',
            borderColor: 'grey.300',
            position: 'sticky',
            top: '0px',
            backgroundColor: 'white',
            zIndex: 1,
          }}
        >
          {chatbotName}
        </Typography>
      )}
      <Box sx={{ flexGrow: 1, overflowY: 'auto', mb: 2 }}>
        <List
          sx={{
            flex: 1,
            overflowY: 'auto',
            pt: '20px',
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          {sessionHistory &&
            sessionHistory.map((interaction, index) => {
              return (
                <SynapseChatInteraction
                  key={index}
                  userMessage={interaction.usersRequestText}
                  chatResponseText={interaction.agentResponseText}
                />
              )
            })}
          {interactions.map((interaction, index) => {
            return (
              <SynapseChatInteraction
                key={index}
                userMessage={interaction.userMessage}
                chatResponseText={interaction.chatResponseText}
              />
            )
          })}
          {pendingInteraction && (
            <SynapseChatInteraction
              userMessage={pendingInteraction.userMessage}
              chatResponseText={pendingInteraction.chatResponseText}
              scrollIntoView
            />
          )}
        </List>
      </Box>
      <Box
        sx={{
          position: 'sticky',
          bottom: textboxPositionOffset,
          backgroundColor: 'white',
        }}
      >
        <Box
          component="form"
          sx={{ pb: '10px', position: 'sticky' }}
          onSubmit={handleSendMessage}
        >
          <TextField
            fullWidth
            value={userChatTextfieldValue}
            onChange={e => setUserChatTextfieldValue(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder={`Message ${chatbotName}`}
            InputProps={{
              sx: { borderRadius: 96.6 },
              endAdornment: (
                <IconButton
                  disabled={isDisabled}
                  onClick={handleSendMessage}
                  sx={{
                    ml: '7px',
                    mr: '-8px',
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
          <Typography
            variant="smallText1"
            sx={{ pt: '8px', textAlign: 'center' }}
          >
            {chatbotName} can make mistakes.
          </Typography>
        </Box>
      </Box>
    </Box>
  )
}

export default SynapseChat
