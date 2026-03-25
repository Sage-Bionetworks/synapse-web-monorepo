import { getChatbotHandlers } from '@/mocks/msw/handlers/chatHandlers'
import { getEntityHandlers } from '@/mocks/msw/handlers/entityHandlers'
import { getUserProfileHandlers } from '@/mocks/msw/handlers/userProfileHandlers'
import { MOCK_REPO_ORIGIN } from '@/utils/functions/getEndpoint'
import { AgentPromptSessionContext } from '@sage-bionetworks/synapse-client'
import { Meta, StoryObj } from '@storybook/react-vite'
import { useState } from 'react'
import { fn } from 'storybook/test'
import SynapseChatDialog from './SynapseChatDialog'

const meta = {
  title: 'Synapse/Chat',
  component: SynapseChatDialog,
  parameters: {
    chromatic: { viewports: [600, 1200] },
  },
  args: {
    onClose: fn(),
    onChatStateChange: fn(),
    onPromptContextChange: fn(),
    onNewMessage: fn(),
  },
} satisfies Meta
export default meta
type Story = StoryObj<typeof meta>

const mswHandlers = {
  stack: 'mock',
  msw: {
    handlers: [
      ...getUserProfileHandlers(MOCK_REPO_ORIGIN),
      ...getEntityHandlers(MOCK_REPO_ORIGIN),
      ...getChatbotHandlers(MOCK_REPO_ORIGIN),
    ],
  },
}

export const ChatWithSynapseDialog: Story = {
  args: {
    open: true,
    initialMessage: 'hello',
  },
  parameters: mswHandlers,
}

export const ChatDialogWithEditableContext: Story = {
  args: {
    open: true,
    initialMessage: 'hello',
  },
  parameters: mswHandlers,
  render: function Render(args) {
    const [promptContext, setPromptContext] = useState<
      AgentPromptSessionContext[]
    >([
      {
        concreteType: 'org.sagebionetworks.repo.model.agent.EntityContext',
        entityId: 'syn123',
      },
    ])
    return (
      <SynapseChatDialog
        {...args}
        promptContext={promptContext}
        onPromptContextChange={newContexts => {
          setPromptContext(newContexts)
          args.onPromptContextChange?.(newContexts)
        }}
      />
    )
  },
}
