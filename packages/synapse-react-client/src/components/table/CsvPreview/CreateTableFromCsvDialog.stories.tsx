import CreateTableFromCsvDialog from '@/components/table/CsvPreview/CreateTableFromCsvDialog'
import { displayToast } from '@/components/ToastMessage'
import { Meta, StoryObj } from '@storybook/react-vite'
import { fn } from 'storybook/test'

const meta = {
  title: 'Components/Table/Create Table From CSV Dialog',
  component: CreateTableFromCsvDialog,
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
    parentId: 'syn74757362',
    onSuccess: () => displayToast('Table created successfully', 'success'),
  },
}
