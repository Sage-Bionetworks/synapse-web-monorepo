import CsvPreviewDialog from '@/components/table/CsvPreview/CsvPreviewDialog'
import { Meta, StoryObj } from '@storybook/react-vite'
import { fn } from 'storybook/test'

const meta = {
  title: 'Components/Table/CSV Preview Dialog',
  component: CsvPreviewDialog,
  args: {
    open: true,
    onClose: fn(),
    onConfirm: fn(),
  },
  parameters: {
    requireLogin: true,
  },
} satisfies Meta
export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}
