import { Meta, StoryObj } from '@storybook/react-vite'
import { CreatedByModifiedBy } from './CreatedByModifiedBy'

const meta = {
  title: 'Synapse/EntityPage/CreatedByModifiedBy',
  component: CreatedByModifiedBy,
} satisfies Meta
export default meta
type Story = StoryObj<typeof meta>

export const File: Story = {
  args: {
    entityId: 'syn36695878',
    versionNumber: 1,
  },
}

export const Table: Story = {
  args: {
    entityId: 'syn35197546',
  },
}
export const Dataset: Story = {
  args: {
    entityId: 'syn26302617',
  },
}
