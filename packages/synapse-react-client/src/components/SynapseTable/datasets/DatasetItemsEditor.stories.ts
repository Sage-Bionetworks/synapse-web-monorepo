import { Meta, StoryObj } from '@storybook/react-vite'
import { fn } from 'storybook/test'
import { DatasetItemsEditor } from './DatasetItemsEditor'

const meta: Meta<typeof DatasetItemsEditor> = {
  title: 'Synapse/DatasetItemsEditor',
  component: DatasetItemsEditor,
  args: {
    onSave: fn(),
    onClose: fn(),
    onUnsavedChangesChange: fn(),
  },
}
export default meta
type Story = StoryObj<typeof meta>

export const Demo: Story = {
  args: {
    entityId: 'syn26302617',
  },
}
