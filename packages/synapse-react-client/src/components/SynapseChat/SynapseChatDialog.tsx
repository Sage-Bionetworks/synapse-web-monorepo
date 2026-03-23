import { AgentPromptSessionContext } from '@sage-bionetworks/synapse-client'
import { Button } from '@mui/material'
import { useState } from 'react'
import SynapseChat, { SynapseChatProps } from './SynapseChat'
import { DialogBase } from '../DialogBase'

export type SynapseChatDialogProps = {
  open: boolean
  onClose: () => void
} & Omit<SynapseChatProps, 'hideTitle' | 'textboxPositionOffset'>

export function SynapseChatDialog(props: SynapseChatDialogProps) {
  const {
    chatbotName = 'SynapseChat',
    open,
    onClose,
    promptContext: controlledPromptContext,
    onPromptContextChange: controlledOnPromptContextChange,
    isContextEditable,
    ...rest
  } = props

  const [localPromptContext, setLocalPromptContext] = useState<
    AgentPromptSessionContext[]
  >([])
  const isControlled = controlledPromptContext !== undefined
  const promptContext = isControlled
    ? controlledPromptContext
    : localPromptContext

  const handlePromptContextChange = (
    newContexts: AgentPromptSessionContext[],
  ) => {
    if (!isControlled) setLocalPromptContext(newContexts)
    controlledOnPromptContextChange?.(newContexts)
  }

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
          {...rest}
          chatbotName={chatbotName}
          promptContext={promptContext}
          onPromptContextChange={handlePromptContextChange}
          isContextEditable={isContextEditable ?? true}
        />
      }
      actions={
        <Button variant="contained" color="primary" onClick={onClose}>
          Close
        </Button>
      }
    />
  )
}

export default SynapseChatDialog
