import { Meta, StoryObj } from '@storybook/react'
import FavoritesPage from '../src/lib/containers/favorites/FavoritesPage'

const meta = {
  title: 'Synapse/FavoritesPage',
  component: FavoritesPage,
} satisfies Meta
export default meta
type Story = StoryObj<typeof meta>

export const Demo: Story = {}
