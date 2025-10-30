import { Meta, StoryObj } from '@storybook/react-vite'
import { SynapseNavDrawer } from './SynapseNavDrawer'

const meta = {
  title: 'Synapse/SynapseNavDrawer',
  component: SynapseNavDrawer,
} satisfies Meta
export default meta
type Story = StoryObj<typeof meta>

export const Demo: Story = {
  args: {
    initIsOpen: false,
    gotoPlace: (href: string) => {
      window.alert(`Nav bar calling back to change route to ${href}`)
    },
  },
}
