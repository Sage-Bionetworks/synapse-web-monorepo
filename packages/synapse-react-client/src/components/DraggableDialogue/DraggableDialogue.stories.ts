import type { Meta, StoryObj } from '@storybook/react'
import DraggableDialogue from './DraggableDialogue'

const meta: Meta<typeof DraggableDialogue> = {
  title: 'Components/DraggableDialogue',
  component: DraggableDialogue,
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}
