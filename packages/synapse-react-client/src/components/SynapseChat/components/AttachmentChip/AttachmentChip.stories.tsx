import { Meta, StoryObj } from '@storybook/react-vite'
import { fn } from 'storybook/test'
import { AttachmentChip } from './AttachmentChip'

const meta = {
  title: 'Synapse/Chat/AttachmentChip',
  component: AttachmentChip,
} satisfies Meta<typeof AttachmentChip>
export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    label: 'PCA_Lung_Cancer_Feature_Reduction_Classification.pdf',
    contentType: 'application/pdf',
  },
}

export const Removable: Story = {
  args: {
    label: 'report.csv',
    contentType: 'text/csv',
    onRemove: fn(),
  },
}

export const GenericRestoredAttachment: Story = {
  args: {
    // A restored/polled turn only has the fileHandleId that was sent to the server.
    label: '9999999',
  },
}

export const Failed: Story = {
  args: {
    label: 'unsupported-file.exe',
    status: 'failed',
    errorMessage: 'This file type is not supported.',
  },
}
