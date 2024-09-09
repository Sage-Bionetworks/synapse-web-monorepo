import { Meta, StoryObj } from '@storybook/react'
import { getChatbotHandlers } from 'src/mocks/msw/handlers/chatHandlers'
import { MOCK_REPO_ORIGIN } from 'src/utils/functions/getEndpoint'
import { getUserProfileHandlers } from 'src/mocks/msw/handlers/userProfileHandlers'
import { getEntityHandlers } from 'src/mocks/msw/handlers/entityHandlers'
import SynapseChatDialog from './SynapseChatDialog'
import { fn } from '@storybook/test'

const meta = {
  title: 'Synapse/Chat',
  component: SynapseChatDialog,
  parameters: {
    chromatic: { viewports: [600, 1200] },
  },
} satisfies Meta
export default meta
type Story = StoryObj<typeof meta>

export const ChatWithSynapseDialog: Story = {
  args: {
    open: true,
    onClose: fn(),
    initialMessage: 'hello',
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
