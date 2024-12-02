import { Meta, StoryObj } from '@storybook/react'
import { EntityFileBrowser } from './index'
import { Reference } from '@sage-bionetworks/synapse-types'

const meta = {
  title: 'Synapse/EntityFileBrowser',
  component: EntityFileBrowser,
} satisfies Meta
export default meta
type Story = StoryObj<typeof meta>

export const Demo: Story = {
  args: {
    parentContainerId: 'syn5550376',
    onSelect: (reference: Reference) => {
      window.alert(`Call should go to entity page for ${reference.targetId}`)
    },
  },
}
