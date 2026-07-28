import { Meta, StoryObj } from '@storybook/react-vite'
import CreateTaskConfirmation from './CreateTaskConfirmation'

const meta = {
  title: 'Synapse/Entity/MetadataTask/CreateTaskConfirmation',
  component: CreateTaskConfirmation,
} satisfies Meta<typeof CreateTaskConfirmation>
export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    taskId: 12345,
    onDone: () => alert('Done!'),
  },
}
