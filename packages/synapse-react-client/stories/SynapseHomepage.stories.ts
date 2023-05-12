import { Meta, StoryObj } from '@storybook/react'
import { SynapseHomepage } from '../src/components/SynapseHomepage'

const meta = {
  title: 'Synapse/HomePage',
  component: SynapseHomepage,
} satisfies Meta
export default meta
type Story = StoryObj<typeof meta>

export const Demo: Story = {
  args: {
    projectViewId: 'syn23593547.3',
  },
}
