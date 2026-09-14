import DraggableDialog from '../DraggableDialog/DraggableDialog'
import { storeRedirectURLForOneSageLoginAndGotoURL } from '@/utils/AppUtils'
import { useOneSageURL } from '@/utils/hooks/useOneSageURL'
import SynapseChat, { SynapseChatProps } from './SynapseChat'

export type SynapsePortalChatDialogProps = SynapseChatProps & {
  open: boolean
  onClose: () => void
}

/**
 * A dialog that wraps SynapseChat with externally-controlled open/close state.
 *
 * Anonymous users are allowed to open the dialog: SynapseChat attempts to create a session, and if
 * the agent is not open to anonymous chat, the user is redirected to log in.
 */
export function SynapsePortalChatDialog({
  open,
  onClose,
  ...chatDialogProps
}: SynapsePortalChatDialogProps) {
  const oneSageUrl = useOneSageURL()
  return (
    <DraggableDialog
      key={chatDialogProps.variant}
      open={open}
      onClose={onClose}
      title={chatDialogProps.chatbotName || 'SynapseChat'}
      variant={chatDialogProps.variant}
    >
      <SynapseChat
        hideTitle={true}
        textboxPositionOffset="16px"
        onSessionCreationUnauthenticated={() =>
          storeRedirectURLForOneSageLoginAndGotoURL(oneSageUrl.toString())
        }
        {...chatDialogProps}
      />
    </DraggableDialog>
  )
}

export default SynapsePortalChatDialog
