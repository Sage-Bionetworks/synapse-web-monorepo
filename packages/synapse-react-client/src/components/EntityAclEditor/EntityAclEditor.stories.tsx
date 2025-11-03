import mockFileEntity from '@/mocks/entity/mockFileEntity'
import {
  mockFileEntityCurrentUserCannotEdit,
  mockFileEntityWithLocalSharingSettingsData,
  mockFileOpenDataWithNoPublicRead,
  mockFileOpenDataWithPublicRead,
  mockFilePublicReadNoOpenData,
} from '@/mocks/entity/mockFileEntityACLVariants'
import mockProject from '@/mocks/entity/mockProject'
import { Meta, StoryObj } from '@storybook/react-vite'
import EntityAclEditorModal, {
  EntityAclEditorModalProps,
} from './EntityAclEditorModal'

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

export const LocalSharingSettings: Story = {
  args: {
    entityId: mockFileEntityWithLocalSharingSettingsData.id,
  },

  parameters: {
    stack: 'mock',
  },
}

export const OpenDataPublicCanRead: Story = {
  args: {
    entityId: mockFileOpenDataWithPublicRead.id,
  },
  parameters: {
    stack: 'mock',
  },
}

export const OpenDataNoPublicRead: Story = {
  args: {
    entityId: mockFileOpenDataWithNoPublicRead.id,
  },
  parameters: {
    stack: 'mock',
  },
}

export const NoOpenDataWithPublicRead: Story = {
  args: {
    entityId: mockFilePublicReadNoOpenData.id,
  },
  parameters: {
    stack: 'mock',
  },
}
