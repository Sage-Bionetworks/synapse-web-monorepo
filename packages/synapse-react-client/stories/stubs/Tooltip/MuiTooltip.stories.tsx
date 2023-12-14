import React from 'react'
import { Meta, StoryObj } from '@storybook/react'
import { Link } from '@mui/material'
import { InfoTwoTone } from '@mui/icons-material'
import { Tooltip } from './MuiTooltip'
import { userEvent, within } from '@storybook/testing-library'

const meta = {
  title: 'UI/MUI/Tooltip',
  component: Tooltip,
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/0oPm5lLSUva8kyfVNMS6FA/Sage-Style-%26-Component-Library?node-id=187%3A6615',
    },
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    const tooltipAnchor = canvas.getByTestId('tooltipAnchor')
    await userEvent.hover(tooltipAnchor)
  },
} satisfies Meta
export default meta

type Story = StoryObj<typeof meta>

export const Demo: Story = {
  name: 'Tooltip',
  args: {
    children: <InfoTwoTone data-testid={'tooltipAnchor'} />,
    title: (
      <p>
        This is some text, and{' '}
        <Link href={'https://synapse.org/'}>here is a link</Link>.
      </p>
    ),
  },
}
