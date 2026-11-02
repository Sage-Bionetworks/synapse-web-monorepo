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
import { useCallback, useEffect, useRef, useState } from 'react'
import { SkeletonParagraph } from '../Skeleton'
import { displayToast } from '../ToastMessage'
import AccessLevelMenu from './AccessLevelMenu'
import { ChatAttachment } from './utils/types'
import {
  ChatInputArea,
  ChatInputAreaHandle,
} from './components/ChatInputArea/ChatInputArea'
import {
  ChatWelcome,
  ChatWelcomeContent,
} from './components/ChatWelcome/ChatWelcome'
import SynapseChatMessage from './SynapseChatMessage'
import SmartToyTwoTone from '@mui/icons-material/SmartToyTwoTone'
import ChevronRight from '@mui/icons-material/ChevronRight'
import { UserCard } from '../UserCard/UserCard'
import { useApplicationSessionContext } from '@/utils/AppUtils'
import { ReactComponent as CurieAvatarHead } from '@/assets/illustrations/curie_avatar_head.svg'

const CURIE_GREETING = 'Hi! How can I help you today?'

const CURIE_ACCESS_LEVEL_SUFFIX: Record<AgentAccessLevel, string> = {
  [AgentAccessLevel.PUBLICLY_ACCESSIBLE]: ' and can only read public data.',
  [AgentAccessLevel.READ_YOUR_PRIVATE_DATA]:
    ' and can read your public and private data in Synapse on your behalf.',
  [AgentAccessLevel.WRITE_YOUR_PRIVATE_DATA]:
    ' and can read and write your public and private data in Synapse on your behalf.',
}

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
  /**
   * Invoked when creating the agent session fails because the current (anonymous) user is not
   * authorized to start a session with this agent. Callers should use this to prompt the user to
   * log in. When omitted, the session creation error is shown inline instead.
   */
  onSessionCreationUnauthenticated?: () => void
  /**
   * Whether to create the agent session when the user sends their first message instead of when
   * this mounts, so a chat that is shown but never used does not start a session. The chat is usable
   * before the session exists. Ignored when `initialMessage` is set, since that needs a session right away.
   * @default false
   */
  createSessionOnFirstMessage?: boolean
  /**
   * Introduction shown while the conversation is empty, in place of the default greeting. When
   * attachments are allowed, it includes a card that opens the composer's file upload.
   */
  welcome?: ChatWelcomeContent
  /** Placeholder for the message input. Defaults to a prompt naming the chatbot. */
  inputPlaceholder?: string
}

type OutgoingMessage = {
  message: string
  attachments: ChatAttachment[]
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
  onSessionCreationUnauthenticated,
  createSessionOnFirstMessage = false,
  welcome,
  inputPlaceholder,
}: SynapseChatProps) {
  const { accessToken, isAuthenticated } = useSynapseContext()
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

  const {
    mutate: createAgentSession,
    isPending: isCreatingAgentSession,
    error: createAgentSessionError,
  } = useCreateAgentSession({
    onSuccess: newAgentSession => setAgentSession(newAgentSession),
    onError: err => {
      // A registration that the ACT has not opened to anonymous chat rejects an anonymous
      // session with a 401/403. Defer to the caller to prompt the user to log in.
      if (!isAuthenticated && (err.status === 401 || err.status === 403)) {
        onSessionCreationUnauthenticated?.()
      }
    },
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

  const isConversationEmpty = interactions.length === 0
  const showWelcome = !!welcome && isConversationEmpty
  const showGreeting = !welcome && variant === 'curie' && isConversationEmpty
  const chatInputAreaRef = useRef<ChatInputAreaHandle>(null)

  const curieAccessLevelSuffix =
    variant === 'curie' ? CURIE_ACCESS_LEVEL_SUFFIX[agentAccessLevel] : ''
  const disclaimerText = baseDisclaimerText + curieAccessLevelSuffix

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

  const waitsForFirstMessage = createSessionOnFirstMessage && !initialMessage
  // A chat that waits for its first message is usable before its session exists
  const isPreparingSession =
    !agentSession && (!waitsForFirstMessage || isCreatingAgentSession)
  const [pendingFirstMessage, setPendingFirstMessage] =
    useState<OutgoingMessage>()

  const startAgentSession = useCallback(
    () =>
      createAgentSession({
        agentAccessLevel,
        agentRegistrationId,
        sessionContext,
      }),
    [createAgentSession, agentAccessLevel, agentRegistrationId, sessionContext],
  )

  useEffect(() => {
    // on mount, create a new agent session!
    if (!agentSession && !waitsForFirstMessage) {
      startAgentSession()
    }
  }, [agentSession, accessToken, waitsForFirstMessage, startAgentSession])

  useEffect(() => {
    // on mount, resolve the initial message chat interaction (if set)
    if (agentSession && initialMessage && !initialMessageProcessed) {
      sendChat(initialMessage)
      setInitialMessageProcessed(true)
    }
  }, [agentSession, initialMessage, initialMessageProcessed, sendChat])

  const sendMessage = useCallback(
    ({ message, attachments }: OutgoingMessage) => {
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
      setLastSentAttachments(attachments)
    },
    [sendChat],
  )

  useEffect(() => {
    // The first message waits for the session it started, which sendChat needs
    if (agentSession && pendingFirstMessage) {
      sendMessage(pendingFirstMessage)
      setPendingFirstMessage(undefined)
    }
  }, [agentSession, pendingFirstMessage, sendMessage])

  const handleSend = (message: string, attachments: ChatAttachment[]) => {
    if (agentSession) {
      sendMessage({ message, attachments })
    } else {
      setPendingFirstMessage({ message, attachments })
      startAgentSession()
    }
    setUserChatTextfieldValue('')
  }

  if (createAgentSessionError) {
    // When an anonymous user can't start a session, the caller is redirecting them to log in, so
    // suppress the inline error in favor of that flow.
    const deferredToLogin =
      !isAuthenticated &&
      !!onSessionCreationUnauthenticated &&
      (createAgentSessionError.status === 401 ||
        createAgentSessionError.status === 403)
    if (!deferredToLogin) {
      return (
        <Alert severity={'error'} sx={{ my: 2 }}>
          {createAgentSessionError.reason}
        </Alert>
      )
    }
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
      {showAccessLevelMenu && variant !== 'curie' && isAuthenticated && (
        <AccessLevelMenu
          initAccessLevel={agentAccessLevel}
          onChange={newAccessLevel => {
            setAgentAccessLevel(newAccessLevel)
            // Without a session yet, the new level applies when the session is created
            if (agentSession) {
              updateAgentSession({
                agentAccessLevel: newAccessLevel,
                sessionId: agentSession.sessionId!,
              })
            }
          }}
        />
      )}
      {isPreparingSession && <SkeletonParagraph numRows={10} />}
      {!isPreparingSession && (
        <Box
          sx={{
            flexGrow: 1,
            // Without this, the list can't shrink below its content, so a tall conversation
            // overflows the chat and slides under the sticky composer instead of scrolling here
            minHeight: 0,
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
              ...((showGreeting || showWelcome) && {
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
            {welcome && showWelcome && (
              <ListItem sx={{ p: 0 }}>
                <ChatWelcome
                  {...welcome}
                  onUploadClick={
                    allowAttachments
                      ? () => chatInputAreaRef.current?.openAddFilesDialog()
                      : undefined
                  }
                  disabled={isAwaitingResponse}
                />
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
            <Stack sx={{ pt: '8px', gap: 1, alignItems: 'flex-start' }}>
              {suggestedPrompts.map(prompt => (
                <Chip
                  key={prompt}
                  label={
                    <Stack
                      direction="row"
                      component="span"
                      sx={{ alignItems: 'center', gap: '4px' }}
                    >
                      {prompt}
                      <ChevronRight
                        sx={{ fontSize: '16px', color: 'grey.700' }}
                      />
                    </Stack>
                  }
                  onClick={() => setUserChatTextfieldValue(prompt)}
                  disabled={isPreparingSession}
                  sx={{
                    cursor: 'pointer',
                    maxWidth: '100%',
                    bgcolor: 'secondary.100',
                    '&:hover': { bgcolor: 'secondary.200' },
                  }}
                />
              ))}
            </Stack>
          )}
        <Box sx={{ mt: '5px' }}>
          <ChatInputArea
            ref={chatInputAreaRef}
            value={userChatTextfieldValue}
            onValueChange={setUserChatTextfieldValue}
            onSend={handleSend}
            placeholder={
              inputPlaceholder ??
              (variant === 'curie' ? 'Ask anything' : `Message ${chatbotName}`)
            }
            disabled={isPreparingSession || isAwaitingResponse}
            allowAttachments={allowAttachments}
          />
        </Box>
      </Box>
      <Typography variant="smallText1" sx={{ pt: '8px', textAlign: 'center' }}>
        {disclaimerText}
      </Typography>
    </Box>
  )
}

export default SynapseChat
