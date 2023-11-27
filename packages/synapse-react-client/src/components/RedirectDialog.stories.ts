import { Meta, StoryObj } from '@storybook/react'
import RedirectDialog from './RedirectDialog'

const meta = {
  title: 'Synapse/RedirectDialog',
  component: RedirectDialog,
} satisfies Meta
export default meta

type Story = StoryObj<typeof meta>

export const Demo: Story = {
  args: {
    redirectInstructions:
      'Customizable redirect text, this dialog will redirect back to the current window location!',
    redirectUrl: window.location.href,
  },
}
