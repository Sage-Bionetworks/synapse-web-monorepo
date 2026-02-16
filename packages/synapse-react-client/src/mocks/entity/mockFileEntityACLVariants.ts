import { getAccessTypeFromPermissionLevel } from '@/utils/PermissionLevelToAccessType'
import {
  MOCK_AUTHENTICATED_PRINCIPAL_ID as AUTHENTICATED_PRINCIPAL_ID,
  MOCK_PUBLIC_PRINCIPAL_ID as PUBLIC_PRINCIPAL_ID,
} from '@/mocks/realm/mockRealmPrincipal'
import { EntityType } from '@sage-bionetworks/synapse-client'
import { FileEntity } from '@sage-bionetworks/synapse-types'
import { generateBaseEntity } from '../faker/generateFakeEntity'
import { MOCK_USER_ID, MOCK_USER_ID_2 } from '../user/mock_user_profile'
import { MockEntityData } from './MockEntityData'

/*
 * Mock FileEntities for testing different ACL/permissions scenarios.
 */

export const mockFileOpenDataWithPublicRead: MockEntityData<FileEntity> =
  generateBaseEntity({
    type: EntityType.file,
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
    type: EntityType.file,
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
    type: EntityType.file,
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
    type: EntityType.file,
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
    type: EntityType.file,
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
