import { ChatState, useChatState } from '@/components/SynapseChat/useChatState'
import {
  useCreateAgentSession,
  useUpdateAgentSession,
} from '@/synapse-queries/chat/useChat'
import { useSynapseContext } from '@/utils'
import {
  Alert,
  Box,
  Chip,
  List,
  ListItem,
  Stack,
  Typography,
} from '@mui/material'
import {
  AgentSession,
  FileHandleAssociateType,
  GridAgentSessionContext,
} from '@sage-bionetworks/synapse-client'
import { AgentAccessLevel } from '@sage-bionetworks/synapse-types'
import { useEffect, useRef, useState } from 'react'
import { SkeletonParagraph } from '../Skeleton'
import { displayToast } from '../ToastMessage'
import AccessLevelMenu from './AccessLevelMenu'
import { ChatAttachment } from './utils/types'
import { ChatInputArea } from './components/ChatInputArea/ChatInputArea'
import SynapseChatMessage from './SynapseChatMessage'
import { SmartToyTwoTone } from '@mui/icons-material'
import { UserCard } from '../UserCard/UserCard'
import { useApplicationSessionContext } from '@/utils/AppUtils'
import { ReactComponent as CurieAvatarHead } from '@/assets/illustrations/curie_avatar_head.svg'

const CURIE_GREETING = 'Hi! How can I help you today?'

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

const CURIE_AVATAR = (
  <Box
    sx={{
      mt: '10px',
      height: '30px',
      width: '30px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    }}
  >
    <CurieAvatarHead />
  </Box>
)

export type SynapseChatProps = {
  initialMessage?: string //optional initial message
  agentRegistrationId?: string // if provided, use this agent
  chatbotName?: string // optional name of this chatbot agent
  variant?: 'default' | 'curie'
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
  /**
   * Whether to allow the user to attach local files to their chat message.
   * @default false
   */
  allowAttachments?: boolean
}

export function SynapseChat({
  initialMessage,
  agentRegistrationId,
  chatbotName = 'SynapseChat',
  variant = 'default',
  agentAvatar,
  hideTitle = false,
  textboxPositionOffset = '0px',
  sessionContext,
  externalSession,
  setExternalSession,
  externalChatState,
  showAccessLevelMenu = true,
  onChatResponse,
  suggestedPrompts,
  allowAttachments = false,
}: SynapseChatProps) {
  const { accessToken } = useSynapseContext()
  const { userId } = useApplicationSessionContext()

  const baseDisclaimerText = chatbotName + ' can make mistakes'

  const resolvedAgentAvatar =
    agentAvatar ?? (variant === 'curie' ? CURIE_AVATAR : DEFAULT_AVATAR)

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

  const showGreeting = variant === 'curie' && interactions.length === 0

  const curiePublicAccessLevelMessage =
    agentAccessLevel === AgentAccessLevel.PUBLICLY_ACCESSIBLE &&
    ' and only reads public data.'

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

  // A copy of the attachments sent with the last interaction, so it can still show rich
  // (name/type) chips after ChatInputArea has cleared its own attachment state. This is passed to
  // the last interaction for its entire lifetime -- sent, then processing, then completed -- as a
  // fallback filename source, since the request body (FileHandleAssociation) never carries a
  // filename and the server-resolved filename (attachmentStatuses) only arrives once the job
  // completes. It's simply overwritten on the next send.
  const [lastSentAttachments, setLastSentAttachments] = useState<
    ChatAttachment[]
  >([])

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

  const handleSend = (message: string, attachments: ChatAttachment[]) => {
    sendChat(
      message,
      attachments.length
        ? attachments.map(attachment => ({
            fileHandleId: attachment.fileHandleId,
            // The backend short-circuits the FileHandleAssociation auth check for a user's own
            // uploaded file handle, so associateObjectId/associateObjectType are not totally
            // accurate here. FileHandleAssociateType has no dedicated value for "the uploader's
            // own bare file handle", so this stubs associateObjectId to the fileHandleId itself
            // and the FileEntity associate type, which supports the short-circuit path.
            associateObjectId: attachment.fileHandleId,
            associateObjectType: FileHandleAssociateType.FileEntity,
          }))
        : undefined,
    )
    setUserChatTextfieldValue('')
    setLastSentAttachments(attachments)
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
        justifyContent: variant === 'curie' ? 'flex-start' : 'space-between',
        gap: variant === 'curie' ? '20px' : '0',
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
      {showAccessLevelMenu && variant !== 'curie' && (
        <AccessLevelMenu
          initAccessLevel={agentAccessLevel}
          onChange={newAccessLevel => {
            setAgentAccessLevel(newAccessLevel)
            updateAgentSession({
              agentAccessLevel: newAccessLevel,
              sessionId: agentSession!.sessionId!,
            })
          }}
        />
      )}
      {!agentSession && <SkeletonParagraph numRows={10} />}
      {agentSession && (
        <Box
          sx={{
            flexGrow: 1,
            overflowY: 'auto',
            mb: variant === 'curie' ? 0 : 2,
          }}
        >
          <List
            sx={{
              flex: 1,
              overflowY: 'auto',
              pt: '20px',
              ...(variant === 'curie' && { pt: 0, pb: 0, gap: '20px' }),
              display: 'flex',
              flexDirection: 'column',
              ...(showGreeting && {
                minHeight: '100%',
                justifyContent: 'flex-end',
              }),
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
            {showGreeting && (
              <ListItem
                sx={{
                  display: 'grid',
                  gridTemplateColumns: '50px auto',
                  columnGap: '16px',
                  justifyItems: 'start',
                  alignItems: 'start',
                  p: 0,
                }}
              >
                {resolvedAgentAvatar}
                <Typography sx={{ justifySelf: 'start', mt: '14px' }}>
                  {CURIE_GREETING}
                </Typography>
              </ListItem>
            )}
            {interactions.map((interaction, index) => {
              const isLast = index === interactions.length - 1
              return (
                <SynapseChatMessage
                  agentAvatar={resolvedAgentAvatar}
                  userAvatar={userAvatar}
                  key={interaction.id}
                  userMessage={interaction.userMessage}
                  chatJobId={interaction.jobId}
                  showLoadingIcon={variant !== 'curie'}
                  onSendChat={sendChat}
                  scrollIntoView={isLast}
                  animateEntry={!presentAtMount.has(interaction.id)}
                  isAwaitingResponse={isAwaitingResponse}
                  pendingAttachments={
                    // Only one interaction can be in flight at a time (the composer is disabled
                    // while isAwaitingResponse), so lastSentAttachments always corresponds to
                    // whichever interaction is last.
                    isLast ? lastSentAttachments : undefined
                  }
                />
              )
            })}
          </List>
        </Box>
      )}
      <Box
        sx={{
          position: 'sticky',
          bottom: variant === 'curie' ? '0px' : textboxPositionOffset,
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
            placeholder={
              variant === 'curie' ? 'Ask anything' : `Message ${chatbotName}`
            }
            disabled={!agentSession || isAwaitingResponse}
            allowAttachments={allowAttachments}
          />
        </Box>
      </Box>
      <Typography variant="smallText1" sx={{ pt: '8px', textAlign: 'center' }}>
        {variant === 'curie'
          ? baseDisclaimerText + curiePublicAccessLevelMessage
          : baseDisclaimerText}
      </Typography>
    </Box>
  )
}

export default SynapseChat
