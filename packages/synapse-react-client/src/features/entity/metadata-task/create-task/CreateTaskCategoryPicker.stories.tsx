import { Meta, StoryObj } from '@storybook/react-vite'
import CreateTaskCategoryPicker from './CreateTaskCategoryPicker'

const meta = {
  title: 'Synapse/Entity/MetadataTask/CreateTaskCategoryPicker',
  component: CreateTaskCategoryPicker,
} satisfies Meta<typeof CreateTaskCategoryPicker>
export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    onSelectCompute: () => alert('Selected Compute Data'),
    onSelectCurate: () => alert('Selected Curate Data'),
  },
}
