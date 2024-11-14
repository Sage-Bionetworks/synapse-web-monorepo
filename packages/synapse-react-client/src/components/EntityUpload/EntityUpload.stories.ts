import { Meta, StoryObj } from '@storybook/react'
import mockProjectEntityData from '../../mocks/entity/mockProject'
import { EntityUpload } from './EntityUpload'

const meta = {
  title: 'Synapse/Upload/EntityUpload',
  component: EntityUpload,
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
