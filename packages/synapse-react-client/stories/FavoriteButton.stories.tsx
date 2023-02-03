import { Meta, StoryObj } from '@storybook/react'
import FavoriteButton from '../src/lib/containers/favorites/FavoriteButton'

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
