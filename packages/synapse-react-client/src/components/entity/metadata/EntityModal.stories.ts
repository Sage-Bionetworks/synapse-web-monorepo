import { Meta, StoryObj } from '@storybook/react-vite'
import { EntityModal } from './EntityModal'
import { fn } from 'storybook/test'

const meta = {
  title: 'Synapse/EntityModal',
  component: EntityModal,
} satisfies Meta
export default meta
type Story = StoryObj<typeof meta>

export const Project: Story = {
  args: {
    show: true,
    initialTab: 'ANNOTATIONS',
    entityId: 'syn23567475',
    onEditModeChanged: fn(),
    onClose: fn(),
  },
}
