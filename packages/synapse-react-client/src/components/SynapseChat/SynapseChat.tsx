import {
  useCreateAgentSession,
  useGetChatAgentTraceEvents,
  useSendChatMessageToAgent,
  useUpdateAgentSession,
} from '@/synapse-queries/chat/useChat'
import { useSynapseContext } from '@/utils'
import { ArrowUpward } from '@mui/icons-material'
import {
  Alert,
  Box,
  Fade,
  IconButton,
  List,
  TextField,
  Typography,
  useTheme,
} from '@mui/material'
import { Color } from '@mui/material/styles'
import {
  AgentAccessLevel,
  AgentChatRequest,
  AgentChatResponse,
  AgentSession,
  AsynchronousJobStatus,
  TraceEvent,
} from '@sage-bionetworks/synapse-types'
import { KeyboardEventHandler, useEffect, useState } from 'react'
import { TransitionGroup } from 'react-transition-group'
import { SynapseSpinner } from '../LoadingScreen/LoadingScreen'
import { SkeletonParagraph } from '../Skeleton'
import { displayToast } from '../ToastMessage'
import AccessLevelMenu from './AccessLevelMenu'
import SynapseChatInteraction from './SynapseChatInteraction'
import { GridAgentSessionContext } from '@sage-bionetworks/synapse-client'

export type SynapseChatProps = {
  initialMessage?: string //optional initial message
  agentRegistrationId?: string // if provided, use this agent
  chatbotName?: string // optional name of this chatbot agent
  hideTitle?: boolean
  textboxPositionOffset?: string // when embedded in a form, the textbox (form) stuck to the bottom may need to be offset due to container padding (dialog content for example!)
  /* optional session context for the agent session */
  sessionContext?: GridAgentSessionContext
  /* The current session, if state is lifted out of this component */
  externalSession?: AgentSession
  /* A callback invoked to bootstrap the current session, if state is to be lifted out of this component */
  setExternalSession?: (s: AgentSession | undefined) => void
  /* The current chat history, if state is lifted out of this component */
  externalInteractions?: ChatInteraction[]
  /* A callback to update the current chat history, if state is to be lifted out of this component */
  setExternalInteractions?: (i: ChatInteraction[]) => void
  // default access level for the agent session.
  defaultAgentAccessLevel?: AgentAccessLevel
  // Whether to show the access level menu for the agent session.
  showAccessLevelMenu?: boolean
}

export type ChatInteraction = {
  userMessage: string
  chatResponseText?: string
  chatErrorReason?: string
}

type TraceEventWithFriendlyMessage = {
  friendlyMessage?: string
} & TraceEvent

export function SynapseChat({
  initialMessage,
  agentRegistrationId,
  chatbotName = 'SynapseChat',
  hideTitle = false,
  textboxPositionOffset = '0px',
  sessionContext,
  externalSession,
  setExternalSession,
  externalInteractions,
  setExternalInteractions,
  showAccessLevelMenu = true,
}: SynapseChatProps) {
  const { accessToken } = useSynapseContext()
  const [localAgentSession, setLocalAgentSession] = useState<AgentSession>()
  const agentSession = externalSession ?? localAgentSession
  const setAgentSession = setExternalSession ?? setLocalAgentSession

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
    sessionContext
      ? AgentAccessLevel.WRITE_YOUR_PRIVATE_DATA
      : AgentAccessLevel.PUBLICLY_ACCESSIBLE,
  )
  // When both the current message and current response are available, add a new ChatInteraction to the array
  const [localInteractions, setLocalInteractions] = useState<ChatInteraction[]>(
    [],
  )
  const interactions = externalInteractions ?? localInteractions
  const setInteractions = setExternalInteractions ?? setLocalInteractions

  const [pendingInteraction, setPendingInteraction] =
    useState<ChatInteraction>()
  const [currentlyProcessingJobId, setCurrentlyProcessingJobId] =
    useState<string>()
  const [currentResponse, setCurrentResponse] = useState('')
  const [currentResponseError, setCurrentResponseError] = useState('')
  // Keep track of the text that the user is currently typing into the textfield
  const [userChatTextfieldValue, setUserChatTextfieldValue] = useState('')
  const [initialMessageProcessed, setInitialMessageProcessed] = useState(false)
  const [latestTraceEvent, setLatestTraceEvent] =
    useState<TraceEventWithFriendlyMessage>()
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
      setCurrentlyProcessingJobId(status.jobId)
    },
  )

  const { data: newTraceEvents } = useGetChatAgentTraceEvents(
    {
      jobId: currentlyProcessingJobId!,
      newerThanTimestamp: latestTraceEvent?.timestamp,
    },
    {
      //enabled if there is a pending interaction
      enabled: !!currentlyProcessingJobId,
      refetchInterval: currentlyProcessingJobId ? 1000 : false, // Re-fetch every second if enabled
      refetchIntervalInBackground: true, // Continue polling even when the tab is not active
    },
  )

  useEffect(() => {
    if (newTraceEvents && newTraceEvents.page.length > 0) {
      const latestEvent = newTraceEvents.page[
        newTraceEvents.page.length - 1
      ] as TraceEventWithFriendlyMessage
      // In the latest trace event response, the message is json text of unknown structure
      // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
      const parsedMessage = JSON.parse(latestEvent.message)
      // find all keys in the parsed message that equal "text", and join them together to form the friendly message
      // look in all sub-objects of the parsed message
      // build up the friendly message
      let friendlyMessage = ''
      const findTextKeys = (obj: any) => {
        for (const key in obj) {
          if (key === 'text' && typeof obj[key] === 'string') {
            friendlyMessage += obj[key] + '\n'
          } else if (typeof obj[key] === 'object') {
            findTextKeys(obj[key])
          }
        }
      }
      findTextKeys(parsedMessage)

      // note - never surface the latestEvent.message to the user since it is unfriendly json text
      latestEvent.friendlyMessage = friendlyMessage ?? 'Thinking...'

      setLatestTraceEvent(latestEvent)
      //send trace events to the console to ease agent debugging
      //if the trace events do not contain the latest event, add the events to the array
      console.debug(newTraceEvents.page)
    }
  }, [newTraceEvents])

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
      setPendingInteraction(undefined)
      setCurrentlyProcessingJobId(undefined)
      setLatestTraceEvent(undefined)
    }
  }, [currentResponse, currentResponseError, pendingInteraction])

  useEffect(() => {
    // on mount, create a new agent session!
    if (createAgentSession && !agentSession) {
      createAgentSession({
        agentAccessLevel,
        agentRegistrationId,
        sessionContext,
      })
    }
  }, [createAgentSession, agentSession, accessToken, sessionContext])

  useEffect(() => {
    // on mount, resolve the initial message chat interaction (if set)
    if (agentSession && initialMessage && !initialMessageProcessed) {
      setPendingInteraction({ userMessage: initialMessage })
      sendChatMessageToAgent({
        chatText: initialMessage,
        sessionId: agentSession.sessionId,
        enableTrace: true,
      })
      setInitialMessageProcessed(true)
    }
  }, [
    agentSession,
    initialMessage,
    initialMessageProcessed,
    sendChatMessageToAgent,
  ])

  const handleSendMessage = () => {
    if (userChatTextfieldValue.trim()) {
      setPendingInteraction({ userMessage: userChatTextfieldValue })
      setUserChatTextfieldValue('')
      sendChatMessageToAgent({
        chatText: userChatTextfieldValue,
        sessionId: agentSession!.sessionId,
        enableTrace: true,
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

  const sendMessageButtonColor = (
    theme.palette.secondary as unknown as Color
  )[300]
  if (createAgentSessionError) {
    return (
      <Alert severity={'error'} sx={{ my: 2 }}>
        {createAgentSessionError.reason}
      </Alert>
    )
  }

  const latestTraceEventMessage =
    latestTraceEvent?.friendlyMessage ?? 'Thinking...'

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        maxWidth: '1100px',
        mx: 'auto',
        height: '100%',
      }}
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
      {showAccessLevelMenu && (
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
      )}
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
              <>
                <SynapseChatInteraction
                  userMessage={pendingInteraction.userMessage}
                  chatResponseText={pendingInteraction.chatResponseText}
                  chatErrorReason={pendingInteraction.chatErrorReason}
                  scrollIntoView
                />
                <Box
                  sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    gap: '5px',
                  }}
                >
                  <SynapseSpinner size={40} />
                  {/* Show the current message, as well as the full trace log in a tooltip */}
                  <Box sx={{ position: 'relative', pt: '130px' }}>
                    <TransitionGroup>
                      {/* The key is based on the current text so when the text changes, the Fade component will remount */}
                      <Fade key={latestTraceEventMessage} timeout={500}>
                        <Typography
                          sx={{
                            textAlign: 'center',
                            position: 'absolute',
                            width: '100%',
                            top: 0,
                          }}
                          variant="body1Italic"
                        >
                          {latestTraceEventMessage}
                        </Typography>
                      </Fade>
                    </TransitionGroup>
                  </Box>
                </Box>
              </>
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
          sx={{
            pt: '8px',
            mt: '5px',
            pb: '10px',
            position: 'sticky',
            borderTop: '1px solid',
            borderColor: 'grey.400',
          }}
          onSubmit={handleSendMessage}
        >
          <TextField
            fullWidth
            value={userChatTextfieldValue}
            onChange={e => setUserChatTextfieldValue(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder={`Message ${chatbotName}`}
            slotProps={{
              input: {
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
              },
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
