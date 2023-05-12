import { Meta, StoryObj } from '@storybook/react'
import { DatasetItemsEditor } from '../src/components/SynapseTable/datasets/DatasetItemsEditor'

const meta = {
  title: 'Synapse/DatasetItemsEditor',
  component: DatasetItemsEditor,
} satisfies Meta
export default meta
type Story = StoryObj<typeof meta>

export const Demo: Story = {
  args: {
    entityId: 'syn26302617',
  },
}
