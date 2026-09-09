import { getChatbotHandlers } from '@/mocks/msw/handlers/chatHandlers'
import { MOCK_REPO_ORIGIN } from '@/utils/functions/getEndpoint'
import { Meta, StoryObj } from '@storybook/react-vite'
import { HttpHandler } from 'msw'
import SynapseChat from './SynapseChat'

const handlers: Record<string, HttpHandler[]> = {
  chatbot: getChatbotHandlers(MOCK_REPO_ORIGIN),
}

const meta = {
  title: 'Synapse/Chat',
  component: SynapseChat,
  parameters: {
    requireLogin: true,
    chromatic: { viewports: [600, 1200] },
    stack: 'mock',
    msw: {
      handlers,
    },
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
}

/**
 * Demonstrates attaching local files to a chat message. Use the "+" button to upload one or
 * more files, then send the message -- the mocked response reports the first attachment as
 * FAILED and the rest as STAGED (see chatHandlers.ts) so both outcomes can be exercised.
 */
export const WithAttachments: Story = {
  args: { allowAttachments: true },
}
