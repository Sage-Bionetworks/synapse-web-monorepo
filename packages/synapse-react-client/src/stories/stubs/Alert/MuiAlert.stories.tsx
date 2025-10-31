import { Meta, StoryObj } from '@storybook/react-vite'
import { Alert } from './MuiAlert'

const meta = {
  title: 'UI/MUI/Alert',
  argTypes: {
    severity: {
      options: ['info', 'error', 'warning', 'success'],
      control: { type: 'radio' },
    },
  },
  component: Alert,
} satisfies Meta
export default meta

type Story = StoryObj<typeof meta>

export const Demo: Story = {
  args: {
    severity: 'info',
    title: 'Alert Title',
    message:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    onClose: () => console.log('clicked close button'),
  },
}
