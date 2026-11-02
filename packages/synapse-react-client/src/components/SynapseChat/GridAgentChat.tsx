import GridAgentSidebar from '@/components/DataGrid/components/GridAgentSidebar/GridAgentSidebar'
import { useChatState } from '@/components/SynapseChat/useChatState'
import {
  AgentSession,
  GridAgentSessionContext,
} from '@sage-bionetworks/synapse-client'
import { AgentAccessLevel } from '@sage-bionetworks/synapse-types'
import { memo, useMemo, useState } from 'react'
import { SynapseChat } from './index'
import { ReactComponent as CurieAvatarHead } from '@/assets/illustrations/curie_avatar_head.svg'
import { ReactComponent as CurieAvatar } from '@/assets/illustrations/curie_avatar.svg'

const suggestedPrompts = [
  'Summarize this document',
  'Explain what each column means',
  'Fill in annotations from an uploaded document',
  'What has been changed recently?',
  'Interview me to fill in missing values',
]

const WELCOME_DESCRIPTION =
  'I’m here to help with your annotations. Ask me questions, ask for changes, or upload documents and I’ll fill in the details.'

export type GridAgentChatProps = {
  gridSessionId: string
  usersReplicaId: number
  chatbotName?: string
  initialMessage?: string
  open: boolean
  onClose: () => void
  /** Optional ID to use a different agent registered in Synapse */
  agentRegistrationId?: string
}

/**
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
  // Storing state for the chat session here preserves chat history while the sidebar is closed and reopened.
  const [agentSession, setAgentSession] = useState<AgentSession | undefined>()
  const chatState = useChatState(agentSession)

  // SynapseChat creates an agent session whenever this changes before a session exists, so it must
  // keep the same reference across renders to avoid duplicate sessions.
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
    <GridAgentSidebar open={open} onClose={onClose}>
      <SynapseChat
        agentAvatar={<CurieAvatarHead width={35} height="auto" />}
        agentRegistrationId={agentRegistrationId}
        chatbotName={chatbotName}
        initialMessage={initialMessage}
        sessionContext={sessionContext}
        hideTitle={true}
        showAccessLevelMenu={false}
        defaultAgentAccessLevel={AgentAccessLevel.WRITE_YOUR_PRIVATE_DATA}
        // lift state: allow GridAgentChat to control the agent session and interactions
        externalSession={agentSession}
        setExternalSession={setAgentSession}
        externalChatState={chatState}
        suggestedPrompts={suggestedPrompts}
        allowAttachments={true}
        inputPlaceholder="Ask a question, upload a document, or describe what to change"
        welcome={{
          avatar: <CurieAvatar width={88} height="auto" aria-hidden />,
          title: `Hi, I’m ${chatbotName}!`,
          description: WELCOME_DESCRIPTION,
        }}
      />
    </GridAgentSidebar>
  )
})

export default GridAgentChat
