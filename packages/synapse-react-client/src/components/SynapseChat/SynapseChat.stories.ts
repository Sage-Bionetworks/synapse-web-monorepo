import { getChatbotHandlers } from '@/mocks/msw/handlers/chatHandlers'
import { getEntityHandlers } from '@/mocks/msw/handlers/entityHandlers'
import { getFileHandlers } from '@/mocks/msw/handlers/fileHandlers'
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

/**
 * Demonstrates attaching local files to a chat message. Use the "+" button to upload one or
 * more files, then send the message -- the mocked response reports the first attachment as
 * FAILED and the rest as STAGED (see chatHandlers.ts) so both outcomes can be exercised.
 */
export const WithAttachments: Story = {
  args: { allowAttachments: true },
  parameters: {
    stack: 'mock',
    msw: {
      handlers: [
        ...getUserProfileHandlers(MOCK_REPO_ORIGIN),
        ...getEntityHandlers(MOCK_REPO_ORIGIN),
        ...getChatbotHandlers(MOCK_REPO_ORIGIN),
        ...getFileHandlers(MOCK_REPO_ORIGIN),
      ],
    },
  },
}
