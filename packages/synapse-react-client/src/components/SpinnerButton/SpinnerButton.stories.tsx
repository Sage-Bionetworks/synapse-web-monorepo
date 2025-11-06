import { Meta, StoryObj } from '@storybook/react-vite'
import SpinnerButton from './SpinnerButton'

const meta: Meta = {
  title: 'UI/SpinnerButton',
  component: SpinnerButton,
  argTypes: {
    isAuthenticated: {
      control: { type: 'boolean' },
    },
    showSpinner: {
      control: { type: 'boolean' },
    },
  },
  args: {
    isAuthenticated: true,
    showSpinner: false,
  },
} satisfies Meta

export default meta

type Story = StoryObj<typeof meta>

export const Demo: Story = {
  args: {
    isAuthenticated: true,
    children: 'Make Async call',
    showSpinner: false,
    variant: 'contained',
    color: 'primary',
    onClick: () => {
      alert('clicked')
    },
  },
}
