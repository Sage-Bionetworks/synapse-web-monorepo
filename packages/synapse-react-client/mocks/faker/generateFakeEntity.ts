import { faker } from '@faker-js/faker'
import { Entity, Project } from '@sage-bionetworks/synapse-types'
import { pickRandomMockUser } from './fakerUtils'

function generateBaseEntity(overrides?: Partial<Entity>): Entity {
  return {
    id: `syn${faker.number.int({ min: 10000, max: 99999 })}`,
    createdBy: String(pickRandomMockUser().id),
    createdOn: faker.date.anytime().toISOString(),
    etag: faker.string.uuid(),
    modifiedBy: String(pickRandomMockUser().id),
    modifiedOn: faker.date.anytime().toISOString(),
    name: faker.lorem.words({ min: 1, max: 4 }),
    concreteType: 'org.sagebionetworks.repo.model.FileEntity',
    ...overrides,
  }
}

export function generateProject(overrides?: Partial<Project>): Project {
  return {
    ...generateBaseEntity(overrides),
    name: faker.lorem.words({ min: 1, max: 4 }),
    concreteType: 'org.sagebionetworks.repo.model.Project',
    ...overrides,
  }
}
