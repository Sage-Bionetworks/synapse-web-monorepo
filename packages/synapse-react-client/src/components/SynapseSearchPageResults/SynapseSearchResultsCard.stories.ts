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
    entityId: 'syn68790341',
    name: 'The Jax.IU.PittRatTgF344-AD SEA-AD DREAM Challenge (Home)',
    entityType: 'project',
    modifiedOn: 1753887641,
  },
}
