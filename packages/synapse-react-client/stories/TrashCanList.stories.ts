import { Meta, StoryObj } from '@storybook/react'
import { TrashCanList } from '../src/components/trash/TrashCanList'

const meta = {
  title: 'Synapse/TrashCanList',
  component: TrashCanList,
} satisfies Meta
export default meta
type Story = StoryObj<typeof meta>

export const TrashCan: Story = {}
