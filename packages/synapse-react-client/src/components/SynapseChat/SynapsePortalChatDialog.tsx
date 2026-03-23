import { FeatureFlagEnum } from '@sage-bionetworks/synapse-types'
import { useSynapseContext } from '@/utils'
import { useGetFeatureFlag } from '@/synapse-queries/featureflags/useGetFeatureFlag'
import DraggableDialog from '../DraggableDialog/DraggableDialog'
import SynapseChat, { SynapseChatProps } from './SynapseChat'

export type SynapsePortalChatDialogProps = SynapseChatProps & {
  open: boolean
  onClose: () => void
}

/**
 * A dialog that wraps SynapseChat with externally-controlled open/close state.
 * Only shown when the user is logged in and the SYNAPSE_CHAT feature flag is enabled.
 */
export function SynapsePortalChatDialog({
  open,
  onClose,
  ...chatDialogProps
}: SynapsePortalChatDialogProps) {
  const { isAuthenticated } = useSynapseContext()
  const isChatEnabled = useGetFeatureFlag(FeatureFlagEnum.SYNAPSE_CHAT)
  if (!isAuthenticated || !isChatEnabled) {
    return null
  }

  return (
    <DraggableDialog
      open={open}
      onClose={onClose}
      title={chatDialogProps.chatbotName || 'SynapseChat'}
    >
      <SynapseChat
        hideTitle={true}
        textboxPositionOffset="16px"
        {...chatDialogProps}
      />
    </DraggableDialog>
  )
}

export default SynapsePortalChatDialog
