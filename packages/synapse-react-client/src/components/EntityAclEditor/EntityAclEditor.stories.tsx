import { Meta, StoryObj } from '@storybook/react'
import mockProject from '../../mocks/entity/mockProject'
import mockFileEntity from '../../mocks/entity/mockFileEntity'
import EntityAclEditorModal, {
  EntityAclEditorModalProps,
} from './EntityAclEditorModal'
import { mockFileEntityCurrentUserCannotEdit } from '../../mocks/entity/mockFileEntityACLVariants'

const meta: Meta<EntityAclEditorModalProps> = {
  title: 'Synapse/Entity ACL Editor',
  component: EntityAclEditorModal,
  args: {
    open: true,
  },
}
export default meta
type Story = StoryObj<typeof meta>

export const Project: Story = {
  args: {
    entityId: mockProject.id,
  },
  parameters: {
    stack: 'mock',
  },
}

export const ReadOnly: Story = {
  args: {
    entityId: mockFileEntityCurrentUserCannotEdit.id,
  },
  parameters: {
    stack: 'mock',
  },
}

export const InheritedFile: Story = {
  args: {
    entityId: mockFileEntity.id,
  },
  parameters: {
    stack: 'mock',
  },
}

export const ProdCustomACL: Story = {
  args: {
    entityId: 'syn61833062',
  },

  parameters: {
    stack: 'production',
  },
}

export const TestUserCannotReadParent: Story = {
  args: {
    open: true,
    entityId: 'syn61843528',
  },

  parameters: {
    stack: 'production',
  },
}
