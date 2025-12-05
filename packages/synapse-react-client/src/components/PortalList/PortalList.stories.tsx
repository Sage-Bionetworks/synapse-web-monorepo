import { Meta, StoryObj } from '@storybook/react-vite'
import PortalList from './PortalList'

const meta = {
  title: 'Synapse/SynapsePortalManager',
  component: PortalList,
  parameters: {
    stack: 'production',
  },
} satisfies Meta
export default meta
type Story = StoryObj<typeof meta>

export const SynapsePortalManager: Story = {}
