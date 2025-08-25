import type { Meta, StoryObj } from '@storybook/react'
import DraggableDialog from './DraggableDialog'

const meta: Meta<typeof DraggableDialog> = {
  title: 'Components/DraggableDialog',
  component: DraggableDialog,
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}
