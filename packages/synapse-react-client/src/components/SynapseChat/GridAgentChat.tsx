import { useChatState } from '@/components/SynapseChat/useChatState'
import { GridAgentSessionContext } from '@sage-bionetworks/synapse-client'
import { AgentAccessLevel, AgentSession } from '@sage-bionetworks/synapse-types'
import { useState } from 'react'
import DraggableDialog from '../DraggableDialog/DraggableDialog'
import { SynapseChat } from './index'

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
  // Storing state for the chat session here preserves chat history while the dialog is opened and closed.
  const [agentSession, setAgentSession] = useState<AgentSession | undefined>()
  const chatState = useChatState(agentSession)

  // Create session context for grid sessions
  const sessionContext: GridAgentSessionContext = {
    concreteType:
      'org.sagebionetworks.repo.model.agent.GridAgentSessionContext',
    gridSessionId,
    usersReplicaId,
  }

  return (
    <DraggableDialog open={open} onClose={onClose} title={chatbotName}>
      <SynapseChat
        agentRegistrationId={agentRegistrationId}
        chatbotName={chatbotName}
        initialMessage={initialMessage}
        sessionContext={sessionContext}
        textboxPositionOffset="16px"
        hideTitle={true}
        showAccessLevelMenu={false}
        defaultAgentAccessLevel={AgentAccessLevel.WRITE_YOUR_PRIVATE_DATA}
        // lift state: allow GridAgentChat to control the agent session and interactions
        externalSession={agentSession}
        setExternalSession={setAgentSession}
        externalChatState={chatState}
      />
    </DraggableDialog>
  )
}

export default GridAgentChat
