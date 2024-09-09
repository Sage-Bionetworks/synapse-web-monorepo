import React from 'react'
import { Button } from '@mui/material'
import SynapseChat, { SynapseChatProps } from './SynapseChat'
import { DialogBase } from '../DialogBase'

export type SynapseChatDialogProps = {
  open: boolean
  onClose: () => void
} & Omit<SynapseChatProps, 'hideTitle' | 'textboxPositionOffset'>

export const SynapseChatDialog: React.FunctionComponent<
  SynapseChatDialogProps
> = props => {
  const { chatbotName = 'SynapseChat', open, onClose } = props
  return (
    <DialogBase
      title={chatbotName}
      open={open}
      onCancel={() => {}}
      maxWidth="lg"
      content={
        <SynapseChat
          hideTitle={true}
          textboxPositionOffset="-24px"
          {...props}
        />
      }
      actions={
        <Button variant="contained" color="primary" onClick={() => onClose()}>
          Close
        </Button>
      }
    ></DialogBase>
  )
}

export default SynapseChatDialog
