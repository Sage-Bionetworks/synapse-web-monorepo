import CsvPreviewDialog, {
  CsvPreviewDialogProps,
} from '@/components/table/CsvPreview/CsvPreviewDialog'
import { Meta, StoryObj } from '@storybook/react'
import { fn } from '@storybook/test'

const meta: Meta<CsvPreviewDialogProps> = {
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
}
export default meta
type Story = StoryObj<typeof meta>

export const Demo: Story = {
  name: 'CSV Preview Dialog',
}
