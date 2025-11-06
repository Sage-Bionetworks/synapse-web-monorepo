import { Meta, StoryObj } from '@storybook/react-vite'
import Topic from './Topic'
import { fn } from 'storybook/test'

const meta = {
  title: 'Synapse/Following/Topic',
  component: Topic,
  tags: ['autodocs'],
} satisfies Meta
export default meta

type Story = StoryObj<typeof meta>

export const Demo: Story = {
  name: 'Topic',
  args: {
    isSubscribed: true,
    isLoading: false,
    icon: 'discussion',
    name: 'Help me understand this project!',
    onToggleSubscribe: fn(),
  },
}
