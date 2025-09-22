import { Meta, StoryObj } from '@storybook/react'
import MetadataTasksPage from './MetadataTasksPage'

const meta = {
  title: 'Synapse/Entity/MetadataTaskTable',
  component: MetadataTasksPage,
} satisfies Meta
export default meta
type Story = StoryObj<typeof meta>

export const Demo: Story = {
  name: 'MetadataTaskTable',
  args: {
    projectId: 'syn12554559',
  },
  parameters: {
    stack: 'development',
  },
}
