import React from 'react'
import { Meta, StoryObj } from '@storybook/react'
import ProvenanceGraph from '../src/components/ProvenanceGraph/ProvenanceGraph'

const meta = {
  title: 'Synapse/ProvenanceGraph',
  component: ProvenanceGraph,
  render: args => (
    <div className="bootstrap-4-backport">
      <ProvenanceGraph {...args} />
    </div>
  ),
} satisfies Meta
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
