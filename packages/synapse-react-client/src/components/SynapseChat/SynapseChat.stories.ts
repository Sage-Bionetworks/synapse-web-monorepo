import { getChatbotHandlers } from '@/mocks/msw/handlers/chatHandlers'
import { getEntityHandlers } from '@/mocks/msw/handlers/entityHandlers'
import { getUserProfileHandlers } from '@/mocks/msw/handlers/userProfileHandlers'
import { MOCK_REPO_ORIGIN } from '@/utils/functions/getEndpoint'
import { Meta, StoryObj } from '@storybook/react-vite'
import { AgentPromptSessionContext } from '@sage-bionetworks/synapse-client'
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
  },
} satisfies Meta
export default meta
type Story = StoryObj<typeof meta>

export const ChatWithSynapse: Story = {
  args: { initialMessage: 'hello' },
  parameters: {
    stack: 'mock',
    msw: {
      handlers: [
        ...getUserProfileHandlers(MOCK_REPO_ORIGIN),
        ...getEntityHandlers(MOCK_REPO_ORIGIN),
        ...getChatbotHandlers(MOCK_REPO_ORIGIN),
      ],
    },
  },
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
  parameters: {
    stack: 'mock',
    msw: {
      handlers: [
        ...getUserProfileHandlers(MOCK_REPO_ORIGIN),
        ...getEntityHandlers(MOCK_REPO_ORIGIN),
        ...getChatbotHandlers(MOCK_REPO_ORIGIN),
      ],
    },
  },
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
  parameters: {
    stack: 'mock',
    msw: {
      handlers: [
        ...getUserProfileHandlers(MOCK_REPO_ORIGIN),
        ...getEntityHandlers(MOCK_REPO_ORIGIN),
        ...getChatbotHandlers(MOCK_REPO_ORIGIN),
      ],
    },
  },
}

export const ChatWithEditableContext: Story = {
  args: {
    promptContext: [entityContext, tableRowContext],
    isContextEditable: true,
    onPromptContextChange: contexts =>
      alert(`Context changed. New count: ${contexts.length}`),
  },
  parameters: {
    stack: 'mock',
    msw: {
      handlers: [
        ...getUserProfileHandlers(MOCK_REPO_ORIGIN),
        ...getEntityHandlers(MOCK_REPO_ORIGIN),
        ...getChatbotHandlers(MOCK_REPO_ORIGIN),
      ],
    },
  },
}
