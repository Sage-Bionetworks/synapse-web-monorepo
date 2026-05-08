import UpdateTableWithCsvDialog from '@/components/table/CsvPreview/UpdateTableWithCsvDialog'
import { displayToast } from '@/components/ToastMessage'
import { Meta, StoryObj } from '@storybook/react-vite'
import { fn } from 'storybook/test'

const meta = {
  title: 'Components/Table/Update Table With CSV Dialog',
  component: UpdateTableWithCsvDialog,
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

export const Default: Story = {
  args: {
    tableId: 'syn74757362',
    onSuccess: () => displayToast('Table updated successfully', 'success'),
  },
}
