import { getChatbotHandlers } from '@/mocks/msw/handlers/chatHandlers'
import { getEntityHandlers } from '@/mocks/msw/handlers/entityHandlers'
import { getUserProfileHandlers } from '@/mocks/msw/handlers/userProfileHandlers'
import { MOCK_REPO_ORIGIN } from '@/utils/functions/getEndpoint'
import { Meta, StoryObj } from '@storybook/react-vite'
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
