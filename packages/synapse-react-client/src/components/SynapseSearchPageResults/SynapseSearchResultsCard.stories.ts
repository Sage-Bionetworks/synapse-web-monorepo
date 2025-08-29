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
    entityId: 'syn68883786',
    name: 'SEA-AD Dream-2025-0811 copy.mp4',
    entityType: 'file',
    modifiedOn: 1755101943,
  },
}
