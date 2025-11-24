import { Meta, StoryObj } from '@storybook/react-vite'
import { fn } from 'storybook/test'
import {
  FileUploadProgress,
  FileUploadProgressProps,
} from './FileUploadProgress'

const meta: Meta<FileUploadProgressProps> = {
  title: 'Synapse/Upload/FileUploadProgress',
  component: FileUploadProgress,
  args: {
    uploadedSizeInBytes: 1024 * 1024 * 50,
    totalSizeInBytes: 1024 * 1024 * 100,
    onCancel: fn(),
    onPause: fn(),
    onResume: fn(),
    onRemove: fn(),
  },
  tags: ['autodocs'],
} satisfies Meta

export default meta
type Story = StoryObj<typeof meta>

export const Uploading: Story = {
  args: {
    fileName: 'UploadingFile.jpg',
    status: 'UPLOADING',
  },
}

export const Preparing: Story = {
  args: {
    fileName: 'PreparingToUploadFile.fastq',
    status: 'PREPARING',
    uploadedSizeInBytes: 0,
  },
}

export const Paused: Story = {
  args: {
    fileName: 'path/to/paused.png',
    status: 'PAUSED',
  },
}

export const Cancelled: Story = {
  args: {
    fileName: 'Cancelled.pdf',
    status: 'CANCELED_BY_USER',
  },
}

export const Failed: Story = {
  args: {
    fileName: 'Failed.java',
    status: 'FAILED',
    errorMessage: 'Something went wrong.',
  },
}
export const Complete: Story = {
  args: {
    fileName: 'Complete.tsx',
    status: 'COMPLETE',
    uploadedSizeInBytes: 1024 * 1024 * 100,
    totalSizeInBytes: 1024 * 1024 * 100,
  },
}
