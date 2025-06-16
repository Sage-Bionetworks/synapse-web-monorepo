import { Meta, StoryObj } from '@storybook/react'
import LinkWithIcon from './LinkWithIcon'

const meta = {
  title: 'Components/LinkWithIcon',
  component: LinkWithIcon,
} satisfies Meta
export default meta
type Story = StoryObj<typeof meta>

export const ExternalLink: Story = {
  args: {
    text: 'Link with icon',
    href: 'https://external-page.com',
    icon: 'helpChatBubble',
  },
}

export const InternalLink: Story = {
  args: {
    text: 'Link with icon',
    href: '/internal-page',
    icon: 'helpChatBubble',
  },
}
