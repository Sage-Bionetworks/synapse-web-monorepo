import DraggableDialog from '../DraggableDialog/DraggableDialog'
import { storeRedirectURLForOneSageLoginAndGotoURL } from '@/utils/AppUtils'
import { useOneSageURL } from '@/utils/hooks/useOneSageURL'
import { persistPortalChatReopenIntent } from './portalChatSessionStorage'
import SynapseChat, { SynapseChatProps } from './SynapseChat'

export type SynapsePortalChatDialogProps = SynapseChatProps & {
  open: boolean
  onClose: () => void
}

/**
 * A dialog that wraps SynapseChat with externally-controlled open/close state.
 *
 * Anonymous users are allowed to open the dialog. If the agent is not open to anonymous chat, the
 * user is redirected to log in when SynapseChat tries to create a session, and the message they were
 * sending is sent once they return.
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
        onSessionCreationUnauthenticated={unsentMessage => {
          // Remember the chat was open, and the message being sent, so the chat reopens after the login
          // round-trip and sends it as its initial message.
          persistPortalChatReopenIntent({
            variant: chatDialogProps.variant,
            initialMessage: unsentMessage,
          })
          storeRedirectURLForOneSageLoginAndGotoURL(oneSageUrl.toString())
        }}
        {...chatDialogProps}
      />
    </DraggableDialog>
  )
}

export default SynapsePortalChatDialog
