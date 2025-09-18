import { useState } from 'react'
import DraggableDialog from '../DraggableDialog/DraggableDialog'
import { SynapseChat } from './index'
import { ChatInteraction } from './SynapseChat'
import { AgentSession } from '@sage-bionetworks/synapse-types'

export type GridAgentChatProps = {
  gridSessionId: string
  usersReplicaId: number
  chatbotName?: string
  initialMessage?: string
  open: boolean
  onClose: () => void
}

export function GridAgentChat({
  gridSessionId,
  usersReplicaId,
  chatbotName = 'Grid Assistant',
  initialMessage,
  open,
  onClose,
}: GridAgentChatProps) {
  const [agentSession, setAgentSession] = useState<AgentSession | undefined>()
  const [interactions, setInteractions] = useState<ChatInteraction[]>([])

  // Create session context for grid sessions
  const sessionContext = {
    concreteType:
      'org.sagebionetworks.repo.model.agent.GridAgentSessionContext' as const,
    gridSessionId,
    usersReplicaId,
  }

  return (
    <DraggableDialog open={open} onClose={onClose} title={chatbotName}>
      <SynapseChat
        chatbotName={chatbotName}
        initialMessage={initialMessage}
        sessionContext={sessionContext}
        textboxPositionOffset="16px"
        hideTitle={true}
        // lift state: allow GridAgentChat to control the agent session and interactions
        externalSession={agentSession}
        setExternalSession={setAgentSession}
        externalInteractions={interactions}
        setExternalInteractions={setInteractions}
      />
    </DraggableDialog>
  )
}

export default GridAgentChat
