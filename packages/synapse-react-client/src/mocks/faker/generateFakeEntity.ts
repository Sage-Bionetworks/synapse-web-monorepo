import {
  convertToConcreteEntityType,
  isContainerType,
} from '@/utils/functions/EntityTypeUtils'
import { normalizeNumericId } from '@/utils/functions/StringUtils'
import { faker } from '@faker-js/faker'
import { EntityType } from '@sage-bionetworks/synapse-client'
import {
  AccessControlList,
  Entity,
  EntityHeader,
  Project,
  RestrictionLevel,
  UserEntityPermissions,
} from '@sage-bionetworks/synapse-types'
import { MockEntityData } from '../entity/MockEntityData'
import mockProjectEntityData from '../entity/mockProject'
import { pickRandomMockUser } from './fakerUtils'

export function generateBaseEntity<T extends Entity = Entity>(
  overrides: {
    id?: number
    type?: EntityType
    entity?: Omit<Partial<T>, 'id' | 'concreteType'>
    acl?: Pick<AccessControlList, 'resourceAccess'>
    permissions?: Partial<UserEntityPermissions>
  } = {},
): MockEntityData<T> {
  const {
    id = faker.number.int({ min: 10000, max: 99999 }),
    type = EntityType.file,
    entity: entityOverrides,
    acl: aclOverride,
    permissions: permissionsOverride,
  } = overrides
  const entity = {
    id: `syn${id}`,
    name: faker.lorem.words({ min: 1, max: 4 }),
    createdBy: String(pickRandomMockUser().id),
    createdOn: faker.date.anytime().toISOString(),
    etag: faker.string.uuid(),
    modifiedBy: String(pickRandomMockUser().id),
    modifiedOn: faker.date.anytime().toISOString(),
    concreteType: convertToConcreteEntityType(type),
    parentId: mockProjectEntityData.id,
    ...(entityOverrides as Partial<Entity>),
  } satisfies Entity
  const header: EntityHeader = {
    id: entity.id,
    name: entity.name,
    type: entity.concreteType,
    createdBy: entity.createdBy,
    createdOn: entity.createdOn,
    modifiedBy: entity.modifiedBy,
    modifiedOn: entity.modifiedOn,
    benefactorId: normalizeNumericId(
      aclOverride ? entity.id : mockProjectEntityData.id,
    ),
    isLatestVersion: true,
    versionLabel:
      'versionLabel' in entity ? (entity.versionLabel as string) : undefined,
    versionNumber:
      'versionNumber' in entity ? (entity.versionNumber as number) : undefined,
  }

  const acl: AccessControlList | undefined = aclOverride
    ? {
        ...aclOverride,
        id: entity.id,
        etag: faker.string.uuid(),
        createdBy: entity.createdBy,
        modifiedBy: entity.modifiedBy,
        modifiedOn: entity.modifiedOn,
      }
    : undefined

  return {
    id: entity.id,
    entity: entity as T,
    name: entity.name,
    entityHeader: header,
    bundle: {
      entity: entity,
      entityType: type,
      accessControlList: acl,
      benefactorAcl: acl ?? mockProjectEntityData.bundle.accessControlList!,
      permissions: {
        ownerPrincipalId: parseInt(entity.createdBy),
        canView: true,
        canEdit: true,
        canMove: true,
        canAddChild: isContainerType(type),
        canCertifiedUserEdit: true,
        canCertifiedUserAddChild: isContainerType(type),
        isCertifiedUser: true,
        canChangePermissions: true,
        canChangeSettings: true,
        canDelete: true,
        canDownload: true,
        canUpload: true,
        canEnableInheritance: true,
        canPublicRead: true,
        canModerate: true,
        isCertificationRequired: true,
        isEntityOpenData: false,
        isUserDataContributor: true,
        ...permissionsOverride,
      },
      annotations: {
        id: entity.id,
        etag: faker.string.uuid(),
        annotations: {},
      },
      path: {
        // TODO: Properly generate a path given the parent entity
        path: [
          {
            name: 'Redacted',
            id: 'syn4489',
            type: 'org.sagebionetworks.repo.model.Folder',
          },
          {
            name: mockProjectEntityData.name,
            id: mockProjectEntityData.id,
            type: mockProjectEntityData.entity.concreteType,
          },
          {
            name: entity.name,
            id: entity.id,
            type: entity.concreteType,
          },
        ],
      },
      hasChildren: false,
      fileHandles: [],
      threadCount: 0,
      restrictionInformation: {
        objectId: id,
        restrictionDetails: [],
        restrictionLevel: RestrictionLevel.OPEN,
        hasUnmetAccessRequirement: false,
      },
    },
  }
}

export function generateProject(
  entityDataOverrides?: Partial<Project>,
  idOverride?: number,
): MockEntityData<Project> {
  return generateBaseEntity({
    id: idOverride,
    type: EntityType.project,
    entity: {
      name: faker.lorem.words({ min: 1, max: 4 }),
      ...entityDataOverrides,
    },
  })
}
