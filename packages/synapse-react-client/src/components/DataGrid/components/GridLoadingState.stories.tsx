import { Meta, StoryObj } from '@storybook/react-vite'
import GridLoadingState from './GridLoadingState'

const meta = {
  title: 'Components/DataGrid/GridLoadingState',
  component: GridLoadingState,
} satisfies Meta<typeof GridLoadingState>
export default meta

type Story = StoryObj<typeof meta>

export const AwaitingReplica: Story = {
  args: {
    hasReplicaId: false,
    hasPresignedUrl: false,
    isConnected: false,
  },
}

export const AwaitingPresignedUrl: Story = {
  args: {
    hasReplicaId: true,
    hasPresignedUrl: false,
    isConnected: false,
  },
}

export const AwaitingConnection: Story = {
  args: {
    hasReplicaId: true,
    hasPresignedUrl: true,
    isConnected: false,
  },
}

export const AwaitingData: Story = {
  args: {
    hasReplicaId: true,
    hasPresignedUrl: true,
    isConnected: true,
  },
}
