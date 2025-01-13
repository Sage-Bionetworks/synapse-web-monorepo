import { Meta, StoryObj } from '@storybook/react'
import { fn } from '@storybook/test'
import mockProjectEntityData from '../../mocks/entity/mockProject'
import { EntityUploadModal, EntityUploadModalProps } from './EntityUploadModal'

const meta: Meta<EntityUploadModalProps> = {
  title: 'Synapse/Upload/EntityUploadModal',
  component: EntityUploadModal,
  args: {
    open: true,
    onClose: fn(),
  },
} satisfies Meta
export default meta
type Story = StoryObj<typeof meta>

export const Demo: Story = {
  args: {
    entityId: mockProjectEntityData.entity.id,
  },
  parameters: {
    stack: 'mock',
  },
}
