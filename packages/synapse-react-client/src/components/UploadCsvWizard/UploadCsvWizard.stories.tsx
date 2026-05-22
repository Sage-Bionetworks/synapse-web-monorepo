import UploadCsvWizard from './UploadCsvWizard'
import { Meta, StoryObj } from '@storybook/react-vite'
import { fn } from 'storybook/test'

const meta = {
  title: 'Synapse/Upload CSV Wizard',
  component: UploadCsvWizard,
  args: {
    open: true,
    onClose: fn(),
    onComplete: fn(),
  },
  parameters: {
    requireLogin: true,
  },
} satisfies Meta<typeof UploadCsvWizard>
export default meta
type Story = StoryObj<typeof meta>

/** Create a new Synapse Table from an uploaded CSV. */
export const CreateMode: Story = {
  name: 'Create new table',
  args: {
    parentId: 'syn00000000',
  },
}

/** Append an uploaded CSV to an existing Synapse Table. */
export const AppendMode: Story = {
  name: 'Append to existing table',
  args: {
    tableId: 'syn00000000',
  },
}
