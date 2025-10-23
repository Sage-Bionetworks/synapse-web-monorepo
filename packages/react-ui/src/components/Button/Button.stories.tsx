import { Meta, StoryObj } from '@storybook/react'
import Button from './Button'
import { GetAppTwoTone } from '@mui/icons-material'

const meta = {
  title: 'Components/Button',
  component: Button,
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/0oPm5lLSUva8kyfVNMS6FA/Sage-Style-%26-Component-Library?type=design&node-id=3006-20001',
    },
  },
} satisfies Meta
export default meta

type Story = StoryObj<typeof meta>

export const Demo: Story = {
  args: {
    variant: 'contained',
    children: 'Button Name',
  },
}

export const WithIcon: Story = {
  args: {
    variant: 'contained',
    children: 'Button Name',
    startIcon: <GetAppTwoTone />,
  },
}

export const Outlined: Story = {
  args: {
    variant: 'outlined',
    children: 'Button Name',
    startIcon: <GetAppTwoTone />,
  },
}

export const Text: Story = {
  args: {
    variant: 'text',
    children: 'Button Name',
    startIcon: <GetAppTwoTone />,
  },
}
