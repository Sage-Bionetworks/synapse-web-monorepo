import React from 'react'
import { Meta, StoryObj } from '@storybook/react'
import {
  DownloadConfirmationUI,
  DownloadConfirmationUIProps,
} from './DownloadConfirmationUI'
import { SynapseContextConsumer, SynapseContextProvider } from '../../index'
import { fn } from '@storybook/test'

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
    onAddToDownloadCart: fn(),
    onCancel: fn(),
  },
  decorators: [
    (Story, args) => (
      <SynapseContextConsumer>
        {context => (
          <SynapseContextProvider
            synapseContext={{
              ...context,
              accessToken: args.isAuthenticated
                ? context.accessToken ?? 'fake token'
                : undefined,
            }}
          >
            <Story />
          </SynapseContextProvider>
        )}
      </SynapseContextConsumer>
    ),
  ],
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
