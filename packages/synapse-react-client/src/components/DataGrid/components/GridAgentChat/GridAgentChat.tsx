import { ReactComponent as CurieAvatar } from '@/assets/illustrations/curie_avatar.svg'
import { ReactComponent as CurieAvatarHead } from '@/assets/illustrations/curie_avatar_head.svg'
import GridAgentSidebar from '@/components/DataGrid/components/GridAgentSidebar/GridAgentSidebar'
import DraggableDialog from '@/components/DraggableDialog/DraggableDialog'
import SynapseChat from '@/components/SynapseChat/SynapseChat'
import { useChatState } from '@/components/SynapseChat/useChatState'
import {
  AgentSession,
  GridAgentSessionContext,
} from '@sage-bionetworks/synapse-client'
import { AgentAccessLevel } from '@sage-bionetworks/synapse-types'
import { memo, useMemo, useState } from 'react'

const DIALOG_SUGGESTED_PROMPTS = [
  'Help me fill this out',
  'Help me understand this',
  'Find missing fields',
]

// The welcome, prompts and placeholder below are part of the sidebar redesign, which ships behind
// the sidebar's feature flag, so the dialog keeps its original prompts
const SIDEBAR_SUGGESTED_PROMPTS = [
  'Summarize this document',
  'Explain what each column means',
  'Fill in annotations from an uploaded document',
  'What has been changed recently?',
  'Interview me to fill in missing values',
]

const SIDEBAR_INPUT_PLACEHOLDER =
  'Ask a question, upload a document, or describe what to change'

const WELCOME_DESCRIPTION =
  'I’m here to help with your annotations. Ask me questions, ask for changes, or upload documents and I’ll fill in the details.'

export type GridAgentChatProps = {
  gridSessionId: string
  usersReplicaId: number
  /**
   * The agent's name, shown in the composer's placeholder and disclaimer, and as the title of the
   * dialog variant. The sidebar variant is titled "AI Assistant".
   */
  chatbotName?: string
  initialMessage?: string
  open: boolean
  onClose: () => void
  /** Optional ID to use a different agent registered in Synapse */
  agentRegistrationId?: string
  /**
   * `dialog` shows the chat in a draggable dialog. `sidebar` docks it in a GridAgentSidebar, so
   * render it in the `sidebar` slot of SynapseGridLayout.
   * @default 'dialog'
   */
  variant?: 'dialog' | 'sidebar'
}

/**
 * Chat with the grid agent about a grid session. The agent session is created when the user sends
 * their first message, and the conversation is kept while the chat is closed and reopened.
 *
 * Memoized because it renders inside SynapseGrid, which re-renders on every grid model change,
 * including selection moves; the chat only needs to re-render when its own props change.
 */
export const GridAgentChat = memo(function GridAgentChat({
  gridSessionId,
  usersReplicaId,
  chatbotName = 'Grid Assistant',
  initialMessage,
  open,
  onClose,
  agentRegistrationId,
  variant = 'dialog',
}: GridAgentChatProps) {
  // Storing state for the chat session here preserves chat history while the dialog is opened and closed.
  const [agentSession, setAgentSession] = useState<AgentSession | undefined>()
  const chatState = useChatState(agentSession)

  // SynapseChat creates its agent session with this context, so it keeps the same reference across
  // renders that don't change it
  const sessionContext: GridAgentSessionContext = useMemo(
    () => ({
      concreteType:
        'org.sagebionetworks.repo.model.agent.GridAgentSessionContext',
      gridSessionId,
      usersReplicaId,
      experimental: true,
    }),
    [gridSessionId, usersReplicaId],
  )

  const isSidebar = variant === 'sidebar'
  const chat = (
    <SynapseChat
      agentAvatar={<CurieAvatarHead width={35} height="auto" />}
      agentRegistrationId={agentRegistrationId}
      chatbotName={chatbotName}
      initialMessage={initialMessage}
      sessionContext={sessionContext}
      createSessionOnFirstMessage={true}
      // The dialog's content padding sits below the composer, which sticks to the bottom
      textboxPositionOffset={isSidebar ? undefined : '16px'}
      hideTitle={true}
      showAccessLevelMenu={false}
      defaultAgentAccessLevel={AgentAccessLevel.WRITE_YOUR_PRIVATE_DATA}
      // lift state: allow GridAgentChat to control the agent session and interactions
      externalSession={agentSession}
      setExternalSession={setAgentSession}
      externalChatState={chatState}
      suggestedPrompts={
        isSidebar ? SIDEBAR_SUGGESTED_PROMPTS : DIALOG_SUGGESTED_PROMPTS
      }
      allowAttachments={true}
      inputPlaceholder={isSidebar ? SIDEBAR_INPUT_PLACEHOLDER : undefined}
      welcome={
        isSidebar
          ? {
              avatar: <CurieAvatar width={88} height="auto" aria-hidden />,
              title: `Hi, I’m ${chatbotName}!`,
              description: WELCOME_DESCRIPTION,
            }
          : undefined
      }
    />
  )

  if (isSidebar) {
    return (
      <GridAgentSidebar open={open} onClose={onClose}>
        {chat}
      </GridAgentSidebar>
    )
  }

  return (
    <DraggableDialog open={open} onClose={onClose} title={chatbotName}>
      {chat}
    </DraggableDialog>
  )
})

export default GridAgentChat
