import { Meta, StoryObj } from '@storybook/react-vite'
import {
  DownloadConfirmationUI,
  DownloadConfirmationUIProps,
} from './DownloadConfirmationUI'
import { fn } from 'storybook/test'

const meta: Meta<DownloadConfirmationUIProps & { isAuthenticated: boolean }> = {
  title: 'Download/DownloadConfirmationUI',
  component: DownloadConfirmationUI,
  tags: ['autodocs'],
  argTypes: {
    isAuthenticated: {
      type: 'boolean',
    },
  },
  args: {
    isAuthenticated: true,
    onAddToDownloadCart: fn(),
    onCancel: fn(),
  },
}
export default meta
type Story = StoryObj<typeof meta>

export const ConfirmationWithFileSize: Story = {
  args: {
    isAuthenticated: true,
    fileCount: 10_000,
    fileSize: 1_000_000_000,
    isLoadingStats: false,
    isAddingToDownloadCart: false,
  },
}

export const ConfirmationWithoutFileSize: Story = {
  args: {
    isAuthenticated: true,
    fileCount: 10_000,
    fileSize: undefined,
    isLoadingStats: false,
    isAddingToDownloadCart: false,
  },
}

export const LoadingStats: Story = {
  args: {
    isAuthenticated: true,
    fileCount: 0,
    fileSize: undefined,
    isLoadingStats: true,
    isAddingToDownloadCart: false,
  },
}

export const AddingToCart: Story = {
  args: {
    isAuthenticated: true,
    fileCount: 10_000,
    fileSize: undefined,
    isLoadingStats: false,
    isAddingToDownloadCart: true,
  },
}

export const Unauthenticated: Story = {
  args: {
    isAuthenticated: false,
    fileCount: 10_000,
    fileSize: undefined,
    isLoadingStats: false,
    isAddingToDownloadCart: false,
  },
}
