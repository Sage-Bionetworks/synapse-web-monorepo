import React from 'react'
import { Meta, StoryObj } from '@storybook/react'
import { MarkdownPopover, MarkdownPopoverProps } from './MarkdownPopover'
import { userEvent, within } from '@storybook/testing-library'
import { InfoTwoTone } from '@mui/icons-material'

const meta = {
  title: 'Markdown/MarkdownPopover',
  component: MarkdownPopover,
  args: {
    children: <InfoTwoTone />,
    contentProps: { markdown: '' },
  },
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/0oPm5lLSUva8kyfVNMS6FA/Sage-Style-%26-Component-Library?type=design&node-id=187-6607',
    },
  },

  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    const showPopoverButton = canvas.getByRole('button')
    await userEvent.click(showPopoverButton)
  },
} satisfies Meta<MarkdownPopoverProps>
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
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. [Phasellus sed tellus lorem](https://synapse.org/). In varius dui nec porttitor tristique. Suspendisse purus orci, dictum at lacus et, egestas commodo tortor. Mauris elementum, ligula in aliquet volutpat, sem arcu vestibulum enim, at scelerisque justo diam ut velit. Fusce iaculis tincidunt velit, vel dignissim dolor condimentum et. Sed ut nibh ac nunc facilisis facilisis.',
    },
    placement: 'right',
    actionButton: {
      content: 'Show/Hide Hidden Text',
      onClick: () => {
        console.log('Clicked')
      },
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
