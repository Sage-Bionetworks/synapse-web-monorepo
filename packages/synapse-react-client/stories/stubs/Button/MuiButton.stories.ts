import { Meta, StoryObj } from '@storybook/react'
import { Button } from './MuiButton'

const meta = {
  title: 'UI/MUI/Button',
  component: Button,
} satisfies Meta
export default meta

type Story = StoryObj<typeof meta>

export const Demo: Story = {
  args: {
    variant: 'contained',
    label: 'My Button Text Here',
  },
}
