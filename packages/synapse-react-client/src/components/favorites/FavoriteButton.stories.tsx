import { Meta, StoryObj } from '@storybook/react-vite'
import FavoriteButton from './FavoriteButton'

const meta = {
  title: 'Synapse/FavoriteButton',
  component: FavoriteButton,
} satisfies Meta
export default meta
type Story = StoryObj<typeof meta>

export const Demo: Story = {
  args: {
    entityId: 'syn33576900',
  },
}
