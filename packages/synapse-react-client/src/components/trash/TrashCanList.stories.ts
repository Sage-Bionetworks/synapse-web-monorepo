import { Meta, StoryObj } from '@storybook/react-vite'
import { TrashCanList } from './TrashCanList'

const meta = {
  title: 'Synapse/TrashCanList',
  component: TrashCanList,
} satisfies Meta
export default meta
type Story = StoryObj<typeof meta>

export const TrashCan: Story = {}
