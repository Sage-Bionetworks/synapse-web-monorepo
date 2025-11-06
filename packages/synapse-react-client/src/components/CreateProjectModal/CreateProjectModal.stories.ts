import { Meta, StoryObj } from '@storybook/react-vite'
import { CreateProjectModal } from './CreateProjectModal'
import { fn } from 'storybook/test'

const meta = {
  title: 'Synapse/CreateProjectModal',
  component: CreateProjectModal,
} satisfies Meta
export default meta
type Story = StoryObj<typeof meta>

export const Demo: Story = {
  args: {
    isShowingModal: true,
    onClose: fn(),
  },
}
