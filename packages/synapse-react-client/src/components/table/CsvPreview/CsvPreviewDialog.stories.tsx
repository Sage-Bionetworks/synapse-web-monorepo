import CsvPreviewDialog from '@/components/table/CsvPreview/CsvPreviewDialog'
import { displayToast } from '@/components/ToastMessage'
import { Meta, StoryObj } from '@storybook/react-vite'
import { fn } from 'storybook/test'

const meta = {
  title: 'Components/Table/CSV Preview Dialog',
  component: CsvPreviewDialog,
  args: {
    open: true,
    onClose: fn(),
  },
  parameters: {
    requireLogin: true,
  },
} satisfies Meta
export default meta
type Story = StoryObj<typeof meta>

export const GridMode: Story = {
  args: {
    onConfirm: fn(),
  },
}

export const CreateMode: Story = {
  name: 'Create New Table',
  args: {
    parentId: 'syn74757362',
    onSuccess: () => displayToast('Table created successfully', 'success'),
  },
}
