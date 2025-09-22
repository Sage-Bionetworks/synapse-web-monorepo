import type { Meta, StoryObj } from '@storybook/react'
import DraggableDialog from './DraggableDialog'

const meta: Meta<typeof DraggableDialog> = {
  title: 'Components/DraggableDialog',
  component: DraggableDialog,
  args: {
    open: true,
    title: 'Example Dialog',
  },
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    children: 'This is the content inside the draggable dialog.',
  },
}
