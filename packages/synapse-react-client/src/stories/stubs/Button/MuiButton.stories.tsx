import { Meta, StoryObj } from '@storybook/react-vite'
import { Button } from './MuiButton'
import { GetAppTwoTone } from '@mui/icons-material'

const meta = {
  title: 'UI/MUI/Button',
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
    label: 'Button Name',
  },
}

export const WithIcon: Story = {
  args: {
    variant: 'contained',
    label: 'Button Name',
    startIcon: <GetAppTwoTone />,
  },
}

export const Outlined: Story = {
  args: {
    variant: 'outlined',
    label: 'Button Name',
    startIcon: <GetAppTwoTone />,
  },
}

export const Text: Story = {
  args: {
    variant: 'text',
    label: 'Button Name',
    startIcon: <GetAppTwoTone />,
  },
}
