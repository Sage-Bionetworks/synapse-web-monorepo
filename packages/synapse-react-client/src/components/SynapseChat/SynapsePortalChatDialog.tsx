import DraggableDialog from '../DraggableDialog/DraggableDialog'
import SynapseChat, { SynapseChatProps } from './SynapseChat'

export type SynapsePortalChatDialogProps = SynapseChatProps & {
  open: boolean
  onClose: () => void
}

/**
 * A dialog that wraps SynapseChat with externally-controlled open/close state.
 * Only shown when the user is logged in and the PORTAL_CHAT feature flag is enabled.
 */
export function SynapsePortalChatDialog({
  open,
  onClose,
  ...chatDialogProps
}: SynapsePortalChatDialogProps) {
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
