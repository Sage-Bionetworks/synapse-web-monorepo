import GridAgentSidebar from '@/components/DataGrid/components/GridAgentSidebar/GridAgentSidebar'
import { useChatState } from '@/components/SynapseChat/useChatState'
import {
  AgentSession,
  GridAgentSessionContext,
} from '@sage-bionetworks/synapse-client'
import { AgentAccessLevel } from '@sage-bionetworks/synapse-types'
import { useState } from 'react'
import { SynapseChat } from './index'
import { ReactComponent as CurieAvatarHead } from '@/assets/illustrations/curie_avatar_head.svg'

const suggestedPrompts = [
  'Help me fill this out',
  'Help me understand this',
  'Find missing fields',
]

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

export function GridAgentChat({
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

  // Create session context for grid sessions
  const sessionContext: GridAgentSessionContext = {
    concreteType:
      'org.sagebionetworks.repo.model.agent.GridAgentSessionContext',
    gridSessionId,
    usersReplicaId,
    experimental: true,
  }

  return (
    <GridAgentSidebar open={open} onClose={onClose}>
      <SynapseChat
        agentAvatar={<CurieAvatarHead width={35} height="auto" />}
        agentRegistrationId={agentRegistrationId}
        chatbotName={chatbotName}
        initialMessage={initialMessage}
        sessionContext={sessionContext}
        textboxPositionOffset="0px"
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
    </GridAgentSidebar>
  )
}

export default GridAgentChat
