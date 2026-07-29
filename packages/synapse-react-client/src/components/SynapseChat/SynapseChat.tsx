import { ChatState, useChatState } from '@/components/SynapseChat/useChatState'
import {
  useCreateAgentSession,
  useUpdateAgentSession,
} from '@/synapse-queries/chat/useChat'
import { useSynapseContext } from '@/utils'
import { Alert, Box, Chip, List, Stack, Typography } from '@mui/material'
import { GridAgentSessionContext } from '@sage-bionetworks/synapse-client'
import { AgentAccessLevel, AgentSession } from '@sage-bionetworks/synapse-types'
import { useEffect, useRef, useState } from 'react'
import { SkeletonParagraph } from '../Skeleton'
import { displayToast } from '../ToastMessage'
import AccessLevelMenu from './AccessLevelMenu'
import { ChatInputArea } from './components/ChatInputArea/ChatInputArea'
import SynapseChatMessage from './SynapseChatMessage'
import { SmartToyTwoTone } from '@mui/icons-material'
import { UserCard } from '../UserCard/UserCard'
import { useApplicationSessionContext } from '@/utils/AppUtils'

const DEFAULT_AVATAR = (
  <Box
    sx={{
      p: '3px',
      borderRadius: '50%',
      borderStyle: 'solid',
      borderWidth: '1px',
      borderColor: 'grey.300',
      mt: '10px',
      height: '31px',
    }}
  >
    <SmartToyTwoTone sx={{ color: 'secondary.main' }} />
  </Box>
)

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
  externalChatState?: ChatState
  // default access level for the agent session.
  defaultAgentAccessLevel?: AgentAccessLevel
  // Whether to show the access level menu for the agent session.
  showAccessLevelMenu?: boolean
  /**
   * Optional callback invoked once when a chat response is received from the server.
   * Use this for side effects such as navigation based on the response content.
   * Called in the mutation onSuccess handler so it runs exactly once per response.
   */
  onChatResponse?: (responseText: string) => void
  /** Optional list of prompt suggestions shown as clickable pills above the text input */
  suggestedPrompts?: string[]
  /** Optional custom avatar for the chatbot agent */
  agentAvatar?: React.ReactNode
}

export function SynapseChat({
  initialMessage,
  agentRegistrationId,
  chatbotName = 'SynapseChat',
  agentAvatar = DEFAULT_AVATAR,
  hideTitle = false,
  textboxPositionOffset = '0px',
  sessionContext,
  externalSession,
  setExternalSession,
  externalChatState,
  showAccessLevelMenu = true,
  onChatResponse,
  suggestedPrompts,
}: SynapseChatProps) {
  const { accessToken } = useSynapseContext()
  const { userId } = useApplicationSessionContext()

  const userAvatar = (
    <UserCard ownerId={userId} size="AVATAR" avatarSize="MEDIUM" />
  )
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
  const [agentAccessLevel, setAgentAccessLevel] = useState<AgentAccessLevel>(
    sessionContext
      ? AgentAccessLevel.WRITE_YOUR_PRIVATE_DATA
      : AgentAccessLevel.PUBLICLY_ACCESSIBLE,
  )

  const internalChatState = useChatState(agentSession, onChatResponse)
  const chatState = externalChatState ?? internalChatState
  const { interactions, isAwaitingResponse, sendChat } = chatState

  // Only interactions added after this component instance mounted should play the entry
  // animation. Callers may lift state so history survives a `Dialog` closing, but the
  // `Dialog` unmounts its children, so every reopen would otherwise re-animate the whole
  // conversation.
  const presentAtMountRef = useRef<Set<string> | undefined>(undefined)
  if (presentAtMountRef.current === undefined) {
    presentAtMountRef.current = new Set(interactions.map(i => i.id))
  }
  const presentAtMount = presentAtMountRef.current

  // Keep track of the text that the user is currently typing into the textfield
  const [userChatTextfieldValue, setUserChatTextfieldValue] = useState('')
  const [initialMessageProcessed, setInitialMessageProcessed] = useState(false)

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
    // on mount, create a new agent session!
    if (createAgentSession && !agentSession) {
      createAgentSession({
        agentAccessLevel,
        agentRegistrationId,
        sessionContext,
      })
    }
  }, [
    createAgentSession,
    agentSession,
    accessToken,
    sessionContext,
    agentAccessLevel,
    agentRegistrationId,
  ])

  useEffect(() => {
    // on mount, resolve the initial message chat interaction (if set)
    if (agentSession && initialMessage && !initialMessageProcessed) {
      sendChat(initialMessage)
      setInitialMessageProcessed(true)
    }
  }, [agentSession, initialMessage, initialMessageProcessed, sendChat])

  const handleSend = (message: string) => {
    sendChat(message)
    setUserChatTextfieldValue('')
  }

  if (createAgentSessionError) {
    return (
      <Alert severity={'error'} sx={{ my: 2 }}>
        {createAgentSessionError.reason}
      </Alert>
    )
  }

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
              const isLast = index === interactions.length - 1
              return (
                <SynapseChatMessage
                  agentAvatar={agentAvatar}
                  userAvatar={userAvatar}
                  key={interaction.id}
                  userMessage={interaction.userMessage}
                  chatJobId={interaction.jobId}
                  onSendChat={sendChat}
                  scrollIntoView={isLast}
                  animateEntry={!presentAtMount.has(interaction.id)}
                  isAwaitingResponse={isAwaitingResponse}
                />
              )
            })}
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
        {suggestedPrompts &&
          suggestedPrompts.length > 0 &&
          interactions.length === 0 && (
            <Stack
              direction="row"
              spacing={1}
              sx={{ pt: '8px', flexWrap: 'wrap', gap: 1 }}
            >
              {suggestedPrompts.map(prompt => (
                <Chip
                  key={prompt}
                  label={prompt}
                  variant="outlined"
                  onClick={() => setUserChatTextfieldValue(prompt)}
                  disabled={!agentSession}
                  sx={{ cursor: 'pointer' }}
                />
              ))}
            </Stack>
          )}
        <Box sx={{ mt: '5px' }}>
          <ChatInputArea
            value={userChatTextfieldValue}
            onValueChange={setUserChatTextfieldValue}
            onSend={handleSend}
            placeholder={`Message ${chatbotName}`}
            disabled={!agentSession || isAwaitingResponse}
          />
        </Box>
      </Box>
      <Typography variant="smallText1" sx={{ pt: '8px', textAlign: 'center' }}>
        {chatbotName} can make mistakes.
      </Typography>
    </Box>
  )
}

export default SynapseChat
