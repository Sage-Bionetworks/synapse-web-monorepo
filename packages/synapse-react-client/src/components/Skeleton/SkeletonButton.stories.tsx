import { Meta, StoryObj } from '@storybook/react-vite'
import { SkeletonButton } from './SkeletonButton'

const meta = {
  title: 'Synapse/SkeletonButton',
  component: SkeletonButton,
} satisfies Meta
export default meta

type Story = StoryObj<typeof meta>

export const Demo: Story = {}
