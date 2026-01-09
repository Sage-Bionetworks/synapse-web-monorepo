import { getChatbotHandlers } from '@/mocks/msw/handlers/chatHandlers'
import { getEntityHandlers } from '@/mocks/msw/handlers/entityHandlers'
import { getUserProfileHandlers } from '@/mocks/msw/handlers/userProfileHandlers'
import { MOCK_REPO_ORIGIN } from '@/utils/functions/getEndpoint'
import { Meta, StoryObj } from '@storybook/react-vite'
import SynapsePortalChatFloatingActionButton from './SynapsePortalChatFloatingActionButton'

const meta = {
  title: 'Synapse/Chat',
  component: SynapsePortalChatFloatingActionButton,
  parameters: {
    chromatic: { viewports: [600, 1200] },
  },
} satisfies Meta
export default meta
type Story = StoryObj<typeof meta>

export const ChatFloatingActionButton: Story = {
  args: {
    chatbotName: 'SynapseChat',
    initialMessage: 'hello',
    tooltipText: 'Open Chat',
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
