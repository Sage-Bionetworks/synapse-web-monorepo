import { faker } from '@faker-js/faker'
import {
  Entity,
  FileEntity,
  Folder,
  Project,
  TableEntity,
} from '@sage-bionetworks/synapse-types'
import { mockFileHandle } from '../mock_file_handle'
import { pickRandomMockUser } from './fakerUtils'
import { times } from 'lodash-es'

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

function generateTableEntity(overrides?: Partial<TableEntity>): TableEntity {
  return {
    ...generateBaseEntity(overrides),
    concreteType: 'org.sagebionetworks.repo.model.table.TableEntity',
    columnIds: times(10).map(() => String(faker.number.int())),
    isSearchEnabled: false,
    ...overrides,
  }
}

function generateFile(overrides?: Partial<FileEntity>): FileEntity {
  return {
    ...generateBaseEntity(overrides),
    versionNumber: faker.number.int({ min: 1, max: 20 }),
    dataFileHandleId: mockFileHandle.id,
    concreteType: 'org.sagebionetworks.repo.model.FileEntity',
    ...overrides,
  }
}

function generateFolder(overrides?: Partial<Folder>): Folder {
  return {
    ...generateBaseEntity(overrides),
    concreteType: 'org.sagebionetworks.repo.model.Folder',
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
