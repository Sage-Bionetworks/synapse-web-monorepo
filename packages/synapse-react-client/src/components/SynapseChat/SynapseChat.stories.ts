import { Meta, StoryObj } from '@storybook/react'
import SynapseChat from './SynapseChat'

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
  args: {},
  parameters: {
    stack: 'production',
    design: {
      type: 'figma',
      url: 'https://www.figma.com/',
    },
    msw: {
      handlers: [],
    },
  },
}
