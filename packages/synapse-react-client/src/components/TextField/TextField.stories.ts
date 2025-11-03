import { Meta, StoryObj } from '@storybook/react-vite'
import TextField from './TextField'

const meta = {
  title: 'UI/SDS/TextField',
  component: TextField,
} satisfies Meta
export default meta

type Story = StoryObj<typeof meta>

export const Demo: Story = {
  args: {
    label: 'Label',
    placeholder: 'my placeholder',
    fullWidth: true,
    required: true,
  },
}
