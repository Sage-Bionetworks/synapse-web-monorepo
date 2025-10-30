import { Meta, StoryObj } from '@storybook/react-vite'
import SharePageLinkButton from './SharePageLinkButton'

const meta = {
  title: 'UI/SharePageLinkButton',
  component: SharePageLinkButton,
} satisfies Meta
export default meta
type Story = StoryObj<typeof meta>

export const SharePageLinkButtonStory: Story = {
  args: {
    buttonProps: {
      sx: { position: 'fixed', right: '20px' },
    },
  },
  parameters: {
    stack: 'mock',
    msw: {
      handlers: [],
    },
  },
}
