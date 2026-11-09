import { ReactComponent as CurieAvatarHead } from '@/assets/illustrations/curie_avatar_head.svg'
import DraggableDialog from '@/components/DraggableDialog/DraggableDialog'
import SynapseChat from '@/components/SynapseChat/SynapseChat'
import { useChatState } from '@/components/SynapseChat/useChatState'
import {
  AgentSession,
  GridAgentSessionContext,
} from '@sage-bionetworks/synapse-client'
import { AgentAccessLevel } from '@sage-bionetworks/synapse-types'
import { memo, useMemo, useState } from 'react'

const suggestedPrompts = [
  'Help me fill this out',
  'Help me understand this',
  'Find missing fields',
]

export type GridAgentChatProps = {
  gridSessionId: string
  usersReplicaId: number
  /** The agent's name, shown as the chat title and in the composer's placeholder and disclaimer */
  chatbotName?: string
  initialMessage?: string
  open: boolean
  onClose: () => void
  /** Optional ID to use a different agent registered in Synapse */
  agentRegistrationId?: string
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

  return (
    <DraggableDialog open={open} onClose={onClose} title={chatbotName}>
      <SynapseChat
        agentAvatar={<CurieAvatarHead width={35} height="auto" />}
        agentRegistrationId={agentRegistrationId}
        chatbotName={chatbotName}
        initialMessage={initialMessage}
        sessionContext={sessionContext}
        createSessionOnFirstMessage={true}
        textboxPositionOffset="16px"
        hideTitle={true}
        showAccessLevelMenu={false}
        defaultAgentAccessLevel={AgentAccessLevel.WRITE_YOUR_PRIVATE_DATA}
        // lift state: allow GridAgentChat to control the agent session and interactions
        externalSession={agentSession}
        setExternalSession={setAgentSession}
        externalChatState={chatState}
        suggestedPrompts={suggestedPrompts}
        allowAttachments={true}
      />
    </DraggableDialog>
  )
})

export default GridAgentChat
