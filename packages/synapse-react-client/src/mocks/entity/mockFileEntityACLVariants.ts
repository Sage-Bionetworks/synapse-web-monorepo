import { getAccessTypeFromPermissionLevel } from '@/utils/PermissionLevelToAccessType'
import {
  AUTHENTICATED_PRINCIPAL_ID,
  PUBLIC_PRINCIPAL_ID,
} from '@/utils/SynapseConstants'
import { EntityType, FileEntity } from '@sage-bionetworks/synapse-types'
import { generateBaseEntity } from '../faker/generateFakeEntity'
import { MOCK_USER_ID, MOCK_USER_ID_2 } from '../user/mock_user_profile'
import { MockEntityData } from './MockEntityData'

/*
 * Mock FileEntities for testing different ACL/permissions scenarios.
 */

export const mockFileOpenDataWithPublicRead: MockEntityData<FileEntity> =
  generateBaseEntity({
    type: EntityType.FILE,
    acl: {
      resourceAccess: [
        {
          principalId: MOCK_USER_ID,
          accessType: getAccessTypeFromPermissionLevel('CAN_ADMINISTER'),
        },
        {
          principalId: AUTHENTICATED_PRINCIPAL_ID,
          accessType: getAccessTypeFromPermissionLevel('CAN_DOWNLOAD'),
        },
        {
          principalId: PUBLIC_PRINCIPAL_ID,
          accessType: getAccessTypeFromPermissionLevel('CAN_VIEW'),
        },
      ],
    },
    permissions: {
      isEntityOpenData: true,
    },
  })

export const mockFileOpenDataWithNoPublicRead: MockEntityData<FileEntity> =
  generateBaseEntity({
    type: EntityType.FILE,
    acl: {
      resourceAccess: [
        {
          principalId: MOCK_USER_ID,
          accessType: getAccessTypeFromPermissionLevel('CAN_ADMINISTER'),
        },
      ],
    },
    permissions: {
      isEntityOpenData: true,
    },
  })

export const mockFilePublicReadNoOpenData: MockEntityData<FileEntity> =
  generateBaseEntity({
    type: EntityType.FILE,
    acl: {
      resourceAccess: [
        {
          principalId: MOCK_USER_ID,
          accessType: getAccessTypeFromPermissionLevel('CAN_ADMINISTER'),
        },
        {
          principalId: AUTHENTICATED_PRINCIPAL_ID,
          accessType: getAccessTypeFromPermissionLevel('CAN_DOWNLOAD'),
        },
        {
          principalId: PUBLIC_PRINCIPAL_ID,
          accessType: getAccessTypeFromPermissionLevel('CAN_VIEW'),
        },
      ],
    },
    permissions: {
      isEntityOpenData: false,
    },
  })

export const mockFileEntityWithLocalSharingSettingsData: MockEntityData<FileEntity> =
  generateBaseEntity({
    type: EntityType.FILE,
    entity: {
      name: 'mock file with local sharing settings',
    },
    acl: {
      resourceAccess: [
        {
          principalId: MOCK_USER_ID,
          accessType: getAccessTypeFromPermissionLevel('CAN_ADMINISTER'),
        },
      ],
    },
  })

export const mockFileEntityCurrentUserCannotEdit: MockEntityData<FileEntity> =
  generateBaseEntity({
    type: EntityType.FILE,
    entity: {
      name: 'mock file with local sharing settings',
    },
    acl: {
      resourceAccess: [
        {
          principalId: MOCK_USER_ID_2,
          accessType: getAccessTypeFromPermissionLevel('CAN_ADMINISTER'),
        },
        {
          principalId: MOCK_USER_ID,
          accessType: getAccessTypeFromPermissionLevel('CAN_DOWNLOAD'),
        },
      ],
    },
    permissions: {
      canChangePermissions: false,
      canEnableInheritance: false,
    },
  })

export const aclCustomizedMockFileEntities = [
  mockFileOpenDataWithPublicRead,
  mockFileOpenDataWithNoPublicRead,
  mockFilePublicReadNoOpenData,
  mockFileEntityWithLocalSharingSettingsData,
  mockFileEntityCurrentUserCannotEdit,
]
