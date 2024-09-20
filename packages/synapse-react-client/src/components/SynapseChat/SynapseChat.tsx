import React, { KeyboardEventHandler, useEffect, useState } from 'react'
import { Box, List, IconButton, Typography, Alert } from '@mui/material'
import { useTheme } from '@mui/material'
import { ColorPartial } from '@mui/material/styles/createPalette'
import { ArrowUpward } from '@mui/icons-material'
import SynapseChatInteraction from './SynapseChatInteraction'
import { SkeletonParagraph } from '../Skeleton'
import {
  useCreateAgentSession,
  useSendChatMessageToAgent,
  useUpdateAgentSession,
} from '../../synapse-queries/chat/useChat'
import {
  AgentAccessLevel,
  AgentChatRequest,
  AgentChatResponse,
  AgentSession,
  AsynchronousJobStatus,
} from '@sage-bionetworks/synapse-types'
import { TextField } from '@mui/material'
import { useSynapseContext } from '../../utils'
import AccessLevelMenu from './AccessLevelMenu'
import { displayToast } from '../ToastMessage'

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
  chatErrorReason?: string
}

export const SynapseChat: React.FunctionComponent<SynapseChatProps> = ({
  initialMessage,
  agentId,
  chatbotName = 'SynapseChat',
  hideTitle = false,
  textboxPositionOffset = '0px',
}) => {
  const { accessToken } = useSynapseContext()
  const [agentSession, setAgentSession] = useState<AgentSession>()
  const { mutate: createAgentSession, error: createAgentSessionError } =
    useCreateAgentSession({
      onSuccess: newAgentSession => setAgentSession(newAgentSession),
    })

  const { mutate: updateAgentSession } = useUpdateAgentSession({
    onSuccess: updatedAgentSession => setAgentSession(updatedAgentSession),
    onError: err =>
      displayToast(
        `Unable to update the agent session: ${err.message}`,
        'danger',
      ),
  })
  const theme = useTheme()
  const [agentAccessLevel, setAgentAccessLevel] = useState<AgentAccessLevel>(
    AgentAccessLevel.PUBLICLY_ACCESSIBLE,
  )
  // When both the current message and current response are available, add a new ChatInteraction to the array
  const [interactions, setInteractions] = useState<ChatInteraction[]>([])
  const [pendingInteraction, setPendingInteraction] =
    useState<ChatInteraction>()
  const [currentResponse, setCurrentResponse] = useState('')
  const [currentProgressMessage, setCurrentProgressMessage] = useState<
    string | undefined
  >()
  const [currentResponseError, setCurrentResponseError] = useState('')
  // Keep track of the text that the user is currently typing into the textfield
  const [userChatTextfieldValue, setUserChatTextfieldValue] = useState('')
  const [initialMessageProcessed, setInitialMessageProcessed] = useState(false)
  const { mutate: sendChatMessageToAgent } = useSendChatMessageToAgent(
    {
      onSuccess: data => {
        // whenever the response is returned, set the last interaction response text
        setCurrentResponse(data.responseText)
      },
      onError: err => {
        setCurrentResponseError(err.reason)
      },
    },
    (status: AsynchronousJobStatus<AgentChatRequest, AgentChatResponse>) => {
      setCurrentProgressMessage(status?.progressMessage)
    },
  )

  // Restore chat session history, if exists.
  // TODO: currently only a single page is restored.  Add support for multiple pages (and detect the user scrolling up to restore the next page of results older)
  // const {
  //   data: sessionHistoryInfiniteData,
  // } = //, hasNextPage: hasMoreSessionHistory, fetchNextPage: fetchNextSessionHistoryPage, isLoading: isSessionHistoryLoading } =
  //   useGetAgentChatSessionHistoryInfinite(
  //     {
  //       sessionId: agentSession?.sessionId,
  //     },
  //     {
  //       enabled: !!agentSession,
  //     },
  //   )

  // const sessionHistory = useMemo(
  //   () =>
  //     sessionHistoryInfiniteData?.pages
  //       .flatMap(page => page.page)
  //       /* Note: session history is ordered from most recent to least recent in each page, so reverse the order when restoring the chat interface */
  //       .reverse() ?? [],
  //   [sessionHistoryInfiniteData],
  // )

  useEffect(() => {
    // when we have both a message and either a response or response error, add a new interaction and reset
    // Note : We want the current interaction to be visible to the user while this async job processes (show the user message, and a loading response).
    // You might think we could do this work in the onSuccess of createAgentChatInteraction, but I think there's a race condition (currentInteraction may not be set when onSuccess is called).
    if (pendingInteraction && (currentResponse || currentResponseError)) {
      pendingInteraction.chatResponseText = currentResponse
      pendingInteraction.chatErrorReason = currentResponseError
      setInteractions([...interactions, pendingInteraction])
      setCurrentResponse('')
      setCurrentResponseError('')
      setCurrentProgressMessage('')
      setPendingInteraction(undefined)
    }
  }, [currentResponse, currentResponseError, pendingInteraction])

  useEffect(() => {
    // on mount, create a new agent session!
    if (createAgentSession && !agentSession) {
      createAgentSession({
        agentAccessLevel,
        agentId,
      })
    }
  }, [createAgentSession, agentSession, accessToken])

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

  const isDisabled =
    !agentSession || !userChatTextfieldValue || !!pendingInteraction

  const handleKeyDown: KeyboardEventHandler<HTMLDivElement> = event => {
    if (!isDisabled && event.key === 'Enter' && !event.shiftKey) {
      event.preventDefault()
      handleSendMessage()
    }
  }

  const sendMessageButtonColor = (theme.palette.secondary as ColorPartial)[300]
  if (createAgentSessionError) {
    return (
      <Alert severity={'error'} sx={{ my: 2 }}>
        {createAgentSessionError.reason}
      </Alert>
    )
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
      <AccessLevelMenu
        initAccessLevel={agentAccessLevel}
        onChange={newAccessLevel => {
          setAgentAccessLevel(newAccessLevel)
          updateAgentSession({
            agentAccessLevel: newAccessLevel,
            sessionId: agentSession!.sessionId,
          })
        }}
      />
      {!agentSession && <SkeletonParagraph numRows={10} />}
      {agentSession && (
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
            {/* {sessionHistory &&
            sessionHistory.map((interaction, index) => {
              return (
                <SynapseChatInteraction
                  key={index}
                  userMessage={interaction.usersRequestText}
                  chatResponseText={interaction.agentResponseText}
                />
              )
            })} */}
            {interactions.map((interaction, index) => {
              return (
                <SynapseChatInteraction
                  key={index}
                  userMessage={interaction.userMessage}
                  chatResponseText={interaction.chatResponseText}
                  chatErrorReason={interaction.chatErrorReason}
                />
              )
            })}
            {pendingInteraction && (
              <SynapseChatInteraction
                userMessage={pendingInteraction.userMessage}
                chatResponseText={pendingInteraction.chatResponseText}
                chatErrorReason={pendingInteraction.chatErrorReason}
                progressMessage={currentProgressMessage}
                scrollIntoView
              />
            )}
          </List>
        </Box>
      )}
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
