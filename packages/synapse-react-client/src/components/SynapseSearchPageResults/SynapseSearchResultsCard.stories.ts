import { Meta, StoryObj } from '@storybook/react'
import { SynapseSearchResultsCard } from './SynapseSearchResultsCard'

const meta: Meta<typeof SynapseSearchResultsCard> = {
  title: 'Components/SynapseSearch/SynapseSearchResultsCard',
  component: SynapseSearchResultsCard,
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    name: 'The Jax.IU.PittRatTgF344-AD Study',
  },
}
