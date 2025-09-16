import DraggableDialog from '../DraggableDialog/DraggableDialog'
import { SynapseChat } from './index'

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
  // Create session context for grid sessions
  const sessionContext = {
    concreteType:
      'org.sagebionetworks.repo.model.agent.GridAgentSessionContext' as const,
    gridSessionId,
    usersReplicaId,
  }

  return (
    <DraggableDialog open={open} onClose={onClose}>
      <SynapseChat
        chatbotName={chatbotName}
        initialMessage={initialMessage}
        sessionContext={sessionContext}
        textboxPositionOffset="16px"
      />
    </DraggableDialog>
  )
}

export default GridAgentChat
