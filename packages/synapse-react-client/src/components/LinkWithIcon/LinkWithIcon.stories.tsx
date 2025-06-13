import { Meta, StoryFn, StoryObj } from '@storybook/react'
import LinkWithIcon from './LinkWithIcon'
import { Box, useTheme } from '@mui/material'

const RenderComponent = (StoryComponent: StoryFn) => {
  const theme = useTheme()
  return (
    <Box sx={{ backgroundColor: theme.palette.primary.main, padding: '20px' }}>
      <StoryComponent />
    </Box>
  )
}

const meta = {
  title: 'Components/LinkWithIcon',
  component: LinkWithIcon,
  decorators: [RenderComponent],
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
