import { ChatState, useChatState } from '@/components/SynapseChat/useChatState'
import {
  useCreateAgentSession,
  useUpdateAgentSession,
} from '@/synapse-queries/chat/useChat'
import { SynapseClientError, useSynapseContext } from '@/utils'
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
import { useIsMounted } from '@react-hookz/web'
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
  /**
   * A message sent as soon as the chat mounts, which creates the agent session right away. Without
   * one, the session is created when the user sends their first message.
   */
  initialMessage?: string
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
   * log in, and can keep `unsentMessage` to send once they have. When omitted, the session creation
   * error is shown inline instead.
   */
  onSessionCreationUnauthenticated?: (unsentMessage: string) => void
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

/**
 * Whether creating a session failed because an anonymous user may not chat with this agent. A
 * registration that the ACT has not opened to anonymous chat rejects them with a 401 or 403.
 */
function isAnonymousUserTurnedAway(
  error: SynapseClientError,
  isAuthenticated: boolean,
) {
  return !isAuthenticated && (error.status === 401 || error.status === 403)
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
  welcome,
  inputPlaceholder,
}: SynapseChatProps) {
  const { isAuthenticated } = useSynapseContext()
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
    mutateAsync: createAgentSession,
    isPending: isCreatingAgentSession,
    error: createAgentSessionError,
  } = useCreateAgentSession({
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

  // The composer's text and attachments, which are cleared only once the message is sent
  const [userChatTextfieldValue, setUserChatTextfieldValue] = useState('')
  const [composerAttachments, setComposerAttachments] = useState<
    ChatAttachment[]
  >([])

  // A copy of the attachments sent with the last interaction, so it can still show rich
  // (name/type) chips after the composer's attachments are cleared. This is passed to
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

  const sendMessage = useCallback(
    ({ message, attachments }: OutgoingMessage, sessionId?: string) => {
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
        sessionId,
      )
      setLastSentAttachments(attachments)
    },
    [sendChat],
  )

  // The caller prompts an anonymous user who was turned away to log in, instead of an error showing
  const isDeferredToLogin = useCallback(
    (error: unknown) =>
      !!onSessionCreationUnauthenticated &&
      error instanceof SynapseClientError &&
      isAnonymousUserTurnedAway(error, isAuthenticated),
    [onSessionCreationUnauthenticated, isAuthenticated],
  )

  // Clears a sent message from the composer, keeping anything edited while its session was created
  const clearSentMessage = useCallback(
    ({ message, attachments }: OutgoingMessage) => {
      setUserChatTextfieldValue(current =>
        current.trim() === message ? '' : current,
      )
      setComposerAttachments(current =>
        current === attachments ? [] : current,
      )
    },
    [],
  )

  const isMounted = useIsMounted()
  const startSessionAndSend = useCallback(
    async (outgoing: OutgoingMessage) => {
      let newAgentSession: AgentSession
      try {
        newAgentSession = await createAgentSession({
          agentAccessLevel,
          agentRegistrationId,
          sessionContext,
        })
      } catch (error) {
        if (isDeferredToLogin(error)) {
          onSessionCreationUnauthenticated?.(outgoing.message)
        }
        return
      }
      // Unlike a `mutate` callback, this still runs after the chat closes. A caller that keeps the
      // chat state across close and reopen (GridAgentChat) still gets the message; a chat whose
      // state closed with it has nowhere to show the message or its response, so it isn't sent.
      if (!isMounted() && !externalChatState) {
        return
      }
      // The new session reaches `agentSession` only on the next render, so its ID is passed directly
      sendMessage(outgoing, newAgentSession.sessionId)
      clearSentMessage(outgoing)
    },
    [
      createAgentSession,
      agentAccessLevel,
      agentRegistrationId,
      sessionContext,
      isDeferredToLogin,
      onSessionCreationUnauthenticated,
      isMounted,
      externalChatState,
      sendMessage,
      clearSentMessage,
    ],
  )

  // The initial message is sent once per mount, so it starts at most one session however often
  // this effect's dependencies change while that session is being created
  const initialMessageSentRef = useRef(false)
  useEffect(() => {
    if (!initialMessage || initialMessageSentRef.current) {
      return
    }
    initialMessageSentRef.current = true
    const outgoing = { message: initialMessage, attachments: [] }
    if (agentSession) {
      sendMessage(outgoing)
    } else {
      // Like a typed first message, it waits in the composer, so the user can retry it if its
      // session can't be created
      setUserChatTextfieldValue(initialMessage)
      void startSessionAndSend(outgoing)
    }
  }, [initialMessage, agentSession, sendMessage, startSessionAndSend])

  const handleSend = (message: string, attachments: ChatAttachment[]) => {
    const outgoing = { message, attachments }
    if (agentSession) {
      sendMessage(outgoing)
      clearSentMessage(outgoing)
    } else {
      // The message stays in the composer until it is sent, so a failed session creation keeps it
      void startSessionAndSend(outgoing)
    }
  }

  const sessionCreationError = isDeferredToLogin(createAgentSessionError)
    ? null
    : createAgentSessionError

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
          // A change while the session is being created would apply to neither the request nor the session
          disabled={isCreatingAgentSession}
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
      {sessionCreationError && (
        <Alert severity={'error'} sx={{ my: 2 }}>
          {sessionCreationError.reason}
        </Alert>
      )}
      {isCreatingAgentSession && <SkeletonParagraph numRows={10} />}
      {!isCreatingAgentSession && (
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
                        sx={{ fontSize: '16px', color: 'grey.500' }}
                      />
                    </Stack>
                  }
                  onClick={() => setUserChatTextfieldValue(prompt)}
                  disabled={isCreatingAgentSession}
                  sx={{
                    cursor: 'pointer',
                    maxWidth: '100%',
                    bgcolor: 'grey.100',
                    '&:hover': { bgcolor: 'grey.200' },
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
            attachments={composerAttachments}
            onAttachmentsChange={setComposerAttachments}
            onSend={handleSend}
            placeholder={
              inputPlaceholder ??
              (variant === 'curie' ? 'Ask anything' : `Message ${chatbotName}`)
            }
            disabled={isCreatingAgentSession || isAwaitingResponse}
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
