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

export const WithEntityInURL: Story = {
  args: {
    initIsOpen: false,
    gotoPlace: (href: string) => {
      // Simulate SWC navigation by updating the hash
      window.location.hash = href
    },
  },
  parameters: {
    docs: {
      description: {
        story:
          'Demonstrates automatic context detection from URL. Navigate to an entity page (e.g., click Projects menu items) and then open the chat panel to see the entity context chip.',
      },
    },
  },
  play: () => {
    // Set initial URL with an entity ID
    window.location.hash = '/Synapse:syn9602637'
  },
}
