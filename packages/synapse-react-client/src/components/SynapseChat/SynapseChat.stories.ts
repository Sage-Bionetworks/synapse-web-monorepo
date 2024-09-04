import { Meta, StoryObj } from '@storybook/react'
import SynapseChat from './SynapseChat'
import { getChatbotHandlers } from 'src/mocks/msw/handlers/chatHandlers'
import { mockAgentChatResponse } from 'src/mocks/chat/mockChat'
import { MOCK_REPO_ORIGIN } from 'src/utils/functions/getEndpoint'

const meta = {
  title: 'Synapse/Chat',
  component: SynapseChat,
  parameters: {
    chromatic: { viewports: [600, 1200] },
  },
} satisfies Meta
export default meta
type Story = StoryObj<typeof meta>

export const ChatWithSynapse: Story = {
  args: { initialMessage: 'hello' },
  parameters: {
    stack: 'production',
    design: {
      type: 'figma',
      url: 'https://www.figma.com/',
    },
    msw: {
      handlers: [
        ...getChatbotHandlers(mockAgentChatResponse, MOCK_REPO_ORIGIN),
      ],
    },
  },
}
