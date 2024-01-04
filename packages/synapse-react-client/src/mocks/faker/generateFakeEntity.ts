import { faker } from '@faker-js/faker'
import { Entity, EntityHeader, Project } from '@sage-bionetworks/synapse-types'
import { pickRandomMockUser } from './fakerUtils'
import { MockEntityData } from '../entity/MockEntityData'

export function generateBaseEntity(
  entityDataOverrides?: Partial<Entity>,
  idOverride?: number,
): MockEntityData {
  const id = idOverride ?? faker.number.int({ min: 10000, max: 99999 })
  const entity = {
    id: `syn${id}`,
    createdBy: String(pickRandomMockUser().id),
    createdOn: faker.date.anytime().toISOString(),
    etag: faker.string.uuid(),
    modifiedBy: String(pickRandomMockUser().id),
    modifiedOn: faker.date.anytime().toISOString(),
    name: faker.lorem.words({ min: 1, max: 4 }),
    concreteType: 'org.sagebionetworks.repo.model.FileEntity',
    ...entityDataOverrides,
  } satisfies Entity
  const header: EntityHeader = {
    id: entity.id,
    name: entity.name,
    type: entity.concreteType,
    createdBy: entity.createdBy,
    createdOn: entity.createdOn,
    modifiedBy: entity.modifiedBy,
    modifiedOn: entity.modifiedOn,
    benefactorId: id,
    isLatestVersion: true,
    versionLabel:
      'versionLabel' in entity ? (entity.versionLabel as string) : undefined,
    versionNumber:
      'versionNumber' in entity ? (entity.versionNumber as number) : undefined,
  }

  return {
    id: entity.id!,
    entity: entity,
    name: entity.name,
    entityHeader: header,
  }
}

export function generateProject(
  entityDataOverrides?: Partial<Project>,
  idOverride?: number,
): MockEntityData<Project> {
  return generateBaseEntity(
    {
      name: faker.lorem.words({ min: 1, max: 4 }),
      concreteType: 'org.sagebionetworks.repo.model.Project',
      ...entityDataOverrides,
    },
    idOverride,
  ) as MockEntityData<Project>
}
