import { getChatbotHandlers } from '@/mocks/msw/handlers/chatHandlers'
import { getEntityHandlers } from '@/mocks/msw/handlers/entityHandlers'
import { getUserProfileHandlers } from '@/mocks/msw/handlers/userProfileHandlers'
import { MOCK_REPO_ORIGIN } from '@/utils/functions/getEndpoint'
import { AgentPromptSessionContext } from '@sage-bionetworks/synapse-client'
import { Meta, StoryObj } from '@storybook/react-vite'
import { useState } from 'react'
import { fn } from 'storybook/test'
import SynapseChat from './SynapseChat'

const meta = {
  title: 'Synapse/Chat',
  component: SynapseChat,
  parameters: {
    requireLogin: true,
    chromatic: { viewports: [600, 1200] },
  },
  argTypes: {
    isAuthenticated: {
      type: 'boolean',
    },
  },
  args: {
    isAuthenticated: true,
    onPromptContextChange: fn(),
    onNewMessage: fn(),
    onChatStateChange: fn(),
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

export const ChatWithSynapse: Story = {
  args: { initialMessage: 'hello' },
  parameters: mswHandlers,
}

const entityContext: AgentPromptSessionContext = {
  concreteType: 'org.sagebionetworks.repo.model.agent.EntityContext',
  entityId: 'syn123456',
}

const tableRowContext: AgentPromptSessionContext = {
  concreteType: 'org.sagebionetworks.repo.model.agent.TableRowContext',
  sourceTableEntityId: 'syn789012',
}

export const ChatWithEntityContext: Story = {
  args: {
    promptContext: [entityContext],
  },
  parameters: mswHandlers,
}

export const ChatWithMultipleContexts: Story = {
  args: {
    promptContext: [
      entityContext,
      tableRowContext,
      {
        concreteType: 'org.sagebionetworks.repo.model.agent.EntityContext',
        entityId: 'syn456789',
        versionNumber: 3,
      },
    ],
  },
  parameters: mswHandlers,
}

export const ChatWithEditableContext: Story = {
  args: {
    isContextEditable: true,
  },
  parameters: mswHandlers,
  render: function Render(args) {
    const [promptContext, setPromptContext] = useState<
      AgentPromptSessionContext[]
    >([entityContext, tableRowContext])
    return (
      <SynapseChat
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
