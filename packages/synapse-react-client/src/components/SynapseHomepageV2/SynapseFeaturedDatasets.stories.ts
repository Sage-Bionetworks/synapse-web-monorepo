import { Meta, StoryObj } from '@storybook/react-vite'
import { SynapseFeaturedDatasets } from './SynapseFeaturedDatasets'
import { featuredDatasetsTable } from './SynapseHomepageV2'

const meta = {
  title: 'Synapse/HomePage/FeaturedDatasets',
  component: SynapseFeaturedDatasets,
  parameters: {
    chromatic: { viewports: [600, 1200] },
  },
} satisfies Meta
export default meta
type Story = StoryObj<typeof meta>

export const Demo: Story = {
  name: 'Synapse Featured Datasets',
  args: {
    sourceTable: featuredDatasetsTable,
  },
}
