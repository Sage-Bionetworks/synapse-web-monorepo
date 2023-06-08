import { Meta, StoryObj } from '@storybook/react'
import { SkeletonButton } from '../src/components/Skeleton/SkeletonButton'

const meta = {
  title: 'Synapse/SkeletonButton',
  component: SkeletonButton,
} satisfies Meta
export default meta

type Story = StoryObj<typeof meta>

export const Demo: Story = {}
