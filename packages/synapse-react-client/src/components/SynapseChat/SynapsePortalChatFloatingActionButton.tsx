import { useState } from 'react'
import { Fab, Tooltip } from '@mui/material'
import { Chat } from '@mui/icons-material'
import { FeatureFlagEnum } from '@sage-bionetworks/synapse-types'
import { useSynapseContext } from '@/utils'
import { useGetFeatureFlag } from '@/synapse-queries/featureflags/useGetFeatureFlag'
import DraggableDialog from '../DraggableDialog/DraggableDialog'
import SynapseChat, { SynapseChatProps } from './SynapseChat'

export type SynapsePortalChatFloatingActionButtonProps = SynapseChatProps & {
  tooltipText?: string
}

/**
 * A floating action button that opens the SynapseChat dialog when clicked.
 * Positioned in the lower right corner of the screen.
 * Only shown when the user is logged in and the SYNAPSE_CHAT feature flag is enabled.
 */
export function SynapsePortalChatFloatingActionButton({
  tooltipText = 'Open Chat',
  ...chatDialogProps
}: SynapsePortalChatFloatingActionButtonProps) {
  const [open, setOpen] = useState(false)
  const { accessToken } = useSynapseContext()
  const isChatEnabled = useGetFeatureFlag(FeatureFlagEnum.SYNAPSE_CHAT)

  // Only show the button if the user is logged in and the feature flag is enabled
  if (!accessToken || !isChatEnabled) {
    return null
  }

  return (
    <>
      <Tooltip title={tooltipText} placement="left">
        <Fab
          color="primary"
          aria-label="open chat"
          onClick={() => setOpen(true)}
          sx={{
            position: 'fixed',
            bottom: 20,
            right: 20,
            zIndex: 1000,
          }}
        >
          <Chat />
        </Fab>
      </Tooltip>
      <DraggableDialog
        open={open}
        onClose={() => setOpen(false)}
        title={chatDialogProps.chatbotName || 'SynapseChat'}
      >
        <SynapseChat
          hideTitle={true}
          textboxPositionOffset="16px"
          {...chatDialogProps}
        />
      </DraggableDialog>
    </>
  )
}

export default SynapsePortalChatFloatingActionButton
