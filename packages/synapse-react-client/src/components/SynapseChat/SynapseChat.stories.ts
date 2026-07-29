import { getChatbotHandlers } from '@/mocks/msw/handlers/chatHandlers'
import { getEntityHandlers } from '@/mocks/msw/handlers/entityHandlers'
import { getUserProfileHandlers } from '@/mocks/msw/handlers/userProfileHandlers'
import { MOCK_REPO_ORIGIN } from '@/utils/functions/getEndpoint'
import { Meta, StoryObj } from '@storybook/react-vite'
import { HttpHandler } from 'msw'
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

const handlers: Record<string, HttpHandler[]> = {
  userProfile: getUserProfileHandlers(MOCK_REPO_ORIGIN),
  entity: getEntityHandlers(MOCK_REPO_ORIGIN),
  chatbot: getChatbotHandlers(MOCK_REPO_ORIGIN),
}

export const ChatWithSynapse: Story = {
  args: { initialMessage: 'hello' },
  parameters: {
    stack: 'mock',
    msw: {
      handlers,
    },
  },
}
