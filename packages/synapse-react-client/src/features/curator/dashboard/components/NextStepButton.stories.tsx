import { Meta, StoryObj } from '@storybook/react-vite'
import NextStepButton from './NextStepButton'
import { fn } from 'storybook/test'

const meta: Meta<typeof NextStepButton> = {
  title: 'Curator/Dashboard/NextStepButton',
  component: NextStepButton,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof NextStepButton>

export const Default: Story = {
  args: {
    buttonText: 'Review',
    onClick: fn(),
    disabled: false,
    loading: false,
  },
}

export const Loading: Story = {
  args: {
    buttonText: 'Processing',
    onClick: fn(),
    loading: true,
  },
}

export const Disabled: Story = {
  args: {
    buttonText: 'Unavailable',
    onClick: fn(),
    disabled: true,
  },
}
