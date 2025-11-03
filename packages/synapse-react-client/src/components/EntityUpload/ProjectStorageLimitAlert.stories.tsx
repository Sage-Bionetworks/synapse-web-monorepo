import { SYNAPSE_STORAGE_LOCATION_ID } from '@/synapse-client/index'
import { Meta, StoryObj } from '@storybook/react-vite'
import { ProjectStorageLimitAlert } from './ProjectStorageLimitAlert'

const meta = {
  title: 'Synapse/Upload/ProjectStorageLimitAlert',
  component: ProjectStorageLimitAlert,
  tags: ['autodocs'],
} satisfies Meta

export default meta
type Story = StoryObj<typeof meta>

export const Warning: Story = {
  args: {
    didUploadsExceedLimit: false,
    usage: {
      storageLocationId: SYNAPSE_STORAGE_LOCATION_ID,
      maxAllowedFileBytes: 1024 * 1024 * 100,
      sumFileBytes: 1024 * 1024 * 90,
      isOverLimit: false,
    },
  },
}

export const UploadsExceededLimit: Story = {
  args: {
    didUploadsExceedLimit: true,
    usage: {
      storageLocationId: SYNAPSE_STORAGE_LOCATION_ID,
      maxAllowedFileBytes: 1024 * 1024 * 100,
      sumFileBytes: 1024 * 1024 * 90,
      isOverLimit: false,
    },
  },
}

export const OverLimit: Story = {
  args: {
    didUploadsExceedLimit: false,
    usage: {
      storageLocationId: SYNAPSE_STORAGE_LOCATION_ID,
      maxAllowedFileBytes: 1024 * 1024 * 100,
      sumFileBytes: 1024 * 1024 * 110,
      isOverLimit: true,
    },
  },
}
