import { Meta, StoryObj } from '@storybook/react'
import { TextField } from './MuiTextField'

const meta = {
  title: 'UI/MUI/TextField',
  component: TextField,
} satisfies Meta
export default meta

type Story = StoryObj<typeof meta>

export const Demo: Story = {
  name: 'Text Field',
  args: {
    label: 'My Label Text Here',
    placeholder: 'Placeholder text',
    error: true,
  },
}
