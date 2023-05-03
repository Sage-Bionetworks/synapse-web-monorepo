import React from 'react'
import { Meta, StoryObj } from '@storybook/react'
import { Button } from '@mui/material'
import { MarkdownPopover } from '../src/lib/containers/MarkdownPopover'

const meta = {
  title: 'Markdown/MarkdownPopover',
  component: MarkdownPopover,
  render: args => (
    <MarkdownPopover contentProps={{ markdown: '' }} {...args}>
      <Button variant="contained" color="primary">
        Button
      </Button>
    </MarkdownPopover>
  ),
} satisfies Meta
export default meta
type Story = StoryObj<typeof meta>

export const NoAction: Story = {
  args: {
    contentProps: { markdown: 'Supports _rendering_ basic **Markdown**.' },
    placement: 'bottom',
  },
}

export const WithAction: Story = {
  args: {
    contentProps: {
      markdown:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sed tellus lorem. In varius dui nec porttitor tristique. Suspendisse purus orci, dictum at lacus et, egestas commodo tortor. Mauris elementum, ligula in aliquet volutpat, sem arcu vestibulum enim, at scelerisque justo diam ut velit. Fusce iaculis tincidunt velit, vel dignissim dolor condimentum et. Sed ut nibh ac nunc facilisis facilisis.',
    },
    placement: 'right',
    actionButton: {
      content: 'Show/Hide Hidden Text',
    },
  },
}
export const WikiPage: Story = {
  args: {
    contentProps: {
      ownerId: 'syn12666371',
      wikiId: '585317',
    },
    showCloseButton: false,
    placement: 'right',
  },
}

export const NonButtonChild: Story = {
  render: args => (
    <MarkdownPopover contentProps={{ markdown: 'Tooltip on a div' }} {...args}>
      <div>Click Me</div>
    </MarkdownPopover>
  ),
}
