import { Meta, StoryObj } from '@storybook/react-vite'
import ProvenanceGraph, { ProvenanceProps } from './ProvenanceGraph'

const meta: Meta<ProvenanceProps> = {
  title: 'Synapse/ProvenanceGraph',
  component: ProvenanceGraph,
}

export default meta
type Story = StoryObj<typeof meta>

export const TestProvenanceGraph: Story = {
  args: {
    entityRefs: [
      {
        targetId: 'syn13363290',
        targetVersionNumber: 9,
      },
    ],
    containerHeight: '500px',
  },
}

export const NoProvenanceGraph: Story = {
  args: {
    entityRefs: [
      {
        targetId: 'syn8075918',
        targetVersionNumber: undefined,
      },
    ],
    containerHeight: '500px',
  },
}

export const InvalidSynIDProvenanceGraph: Story = {
  args: {
    entityRefs: [
      {
        targetId: 'synINVALID',
        targetVersionNumber: 1,
      },
    ],
    containerHeight: '500px',
  },
}
