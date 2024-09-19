import { Meta, StoryObj } from '@storybook/react'
import SynapseChat from './SynapseChat'
import { getChatbotHandlers } from 'src/mocks/msw/handlers/chatHandlers'
import { MOCK_REPO_ORIGIN } from 'src/utils/functions/getEndpoint'
import { getUserProfileHandlers } from 'src/mocks/msw/handlers/userProfileHandlers'
import { getEntityHandlers } from 'src/mocks/msw/handlers/entityHandlers'

const meta = {
  title: 'Synapse/Chat',
  component: SynapseChat,
  parameters: {
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
