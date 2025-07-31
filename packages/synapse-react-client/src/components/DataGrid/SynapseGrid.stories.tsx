import { Meta, StoryObj } from '@storybook/react'
import SynapseGrid from './SynapseGrid'

const meta = {
  title: 'Components/SynapseGrid',
  component: SynapseGrid,
  parameters: {
    stack: 'staging',
  },
  argTypes: {
    showDebugInfo: {
      control: 'boolean',
      description:
        'Show debug information including session details and model snapshot',
    },
  },
} satisfies Meta<typeof SynapseGrid>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    query: 'SELECT * FROM syn35295069',
    showDebugInfo: false,
  },
  parameters: {
    msw: {
      handlers: [],
    },
  },
}

export const GridWithDebugInfo: Story = {
  args: {
    query: '',
    showDebugInfo: true,
  },
  parameters: {
    msw: {
      handlers: [],
    },
  },
}
