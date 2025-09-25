import { Meta, StoryObj } from '@storybook/react'
import FavoritesPage from './FavoritesPage'

const meta = {
  title: 'Synapse/FavoritesPage',
  component: FavoritesPage,
  parameters: {
    requireLogin: true,
  },
} satisfies Meta
export default meta
type Story = StoryObj<typeof meta>

export const Demo: Story = {}
