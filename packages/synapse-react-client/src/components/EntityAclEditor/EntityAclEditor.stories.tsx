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
import { ACCESS_TYPE } from '@sage-bionetworks/synapse-types'
import { MOCK_USER_ID } from '@/mocks/user/mock_user_profile'
import { getEntityBundleHandler } from '@/mocks/msw/handlers/entityHandlers'
import { MOCK_REPO_ORIGIN } from '@/utils/functions/getEndpoint'
import { getHandlers } from '@/mocks/msw/handlers'

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

export const DuplicatePrincipal: Story = {
  args: {
    entityId: mockProject.id,
  },
  parameters: {
    stack: 'mock',
    msw: {
      handlers: [
        getEntityBundleHandler(MOCK_REPO_ORIGIN, {
          ...mockProject.bundle,
          benefactorAcl: {
            id: mockProject.id,
            resourceAccess: [
              {
                principalId: MOCK_USER_ID,
                accessType: [
                  ACCESS_TYPE.READ,
                  ACCESS_TYPE.DOWNLOAD,
                  ACCESS_TYPE.CREATE,
                  ACCESS_TYPE.UPDATE,
                  ACCESS_TYPE.DELETE,
                  ACCESS_TYPE.CHANGE_PERMISSIONS,
                  ACCESS_TYPE.CHANGE_SETTINGS,
                  ACCESS_TYPE.MODERATE,
                ],
              },

              { principalId: MOCK_USER_ID, accessType: [ACCESS_TYPE.READ] },
            ],
          },
        }),
        ...getHandlers(MOCK_REPO_ORIGIN),
      ],
    },
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
