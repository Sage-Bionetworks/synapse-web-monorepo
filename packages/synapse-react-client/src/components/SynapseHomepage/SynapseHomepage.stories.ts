import { Meta, StoryObj } from '@storybook/react'
import { SynapseHomepage } from './SynapseHomepage'

const meta = {
  title: 'Synapse/HomePage',
  component: SynapseHomepage,
  parameters: {
    chromatic: { viewports: [600, 1200] },
  },
} satisfies Meta
export default meta
type Story = StoryObj<typeof meta>

export const Demo: Story = {
  args: {
    projectViewId: 'syn23593547.3',
  },
}
