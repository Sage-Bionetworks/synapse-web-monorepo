import { Meta, StoryObj } from '@storybook/react-vite'
import { HelpPopover } from './HelpPopover'

const meta = {
  title: 'UI/HelpPopover',
  component: HelpPopover,
} satisfies Meta
export default meta
type Story = StoryObj<typeof meta>

export const HelpPopoverDemo: Story = {
  args: {
    markdownText:
      'Help that supports _rendering_ basic **Markdown**. If a helpUrl is provided then a "More info" button will be available.',
    helpUrl: 'https://help.synapse.org/',
    placement: 'right',
  },
}
