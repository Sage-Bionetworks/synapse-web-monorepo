import Button from '@/react-ui/components/Button'
import SynapseChat, { SynapseChatProps } from './SynapseChat'
import DialogBase from '@/react-ui/components/DialogBase'

export type SynapseChatDialogProps = {
  open: boolean
  onClose: () => void
} & Omit<SynapseChatProps, 'hideTitle' | 'textboxPositionOffset'>

export function SynapseChatDialog(props: SynapseChatDialogProps) {
  const { chatbotName = 'SynapseChat', open, onClose } = props
  return (
    <DialogBase
      title={chatbotName}
      open={open}
      onCancel={onClose}
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
