import {
  convertToEntityType,
  entityTypeToFriendlyName,
  getVersionDisplay,
  isContainerType,
  isVersionableEntityType,
  normalizeSynPrefix,
} from './EntityTypeUtils'
import {
  Dataset,
  DATASET_CONCRETE_TYPE_VALUE,
  EntityType,
  FileEntity,
  FILE_ENTITY_CONCRETE_TYPE_VALUE,
  TableEntity,
  TABLE_ENTITY_CONCRETE_TYPE_VALUE,
  Entity,
} from '@sage-bionetworks/synapse-types'

const allEntityTypes = [
  {
    type: EntityType.PROJECT,
    concreteType: 'org.sagebionetworks.repo.model.Project',
    friendlyName: 'Project',
  },
  {
    type: EntityType.FOLDER,
    concreteType: 'org.sagebionetworks.repo.model.Folder',
    friendlyName: 'Folder',
  },
  {
    type: EntityType.LINK,
    concreteType: 'org.sagebionetworks.repo.model.Link',
    friendlyName: 'Link',
  },
  {
    type: EntityType.DOCKER_REPO,
    concreteType: 'org.sagebionetworks.repo.model.docker.DockerRepository',
    friendlyName: 'Docker Repository',
  },
  {
    type: EntityType.FILE,
    concreteType: 'org.sagebionetworks.repo.model.FileEntity',
    friendlyName: 'File',
  },
  {
    type: EntityType.TABLE,
    concreteType: 'org.sagebionetworks.repo.model.table.TableEntity',
    friendlyName: 'Table',
  },
  {
    type: EntityType.SUBMISSION_VIEW,
    concreteType: 'org.sagebionetworks.repo.model.table.SubmissionView',
    friendlyName: 'Submission View',
  },
  {
    type: EntityType.ENTITY_VIEW,
    concreteType: 'org.sagebionetworks.repo.model.table.EntityView',
    friendlyName: 'View',
  },
  {
    type: EntityType.DATASET,
    concreteType: 'org.sagebionetworks.repo.model.table.Dataset',
    friendlyName: 'Dataset',
  },
  {
    type: EntityType.DATASET_COLLECTION,
    concreteType: 'org.sagebionetworks.repo.model.table.DatasetCollection',
    friendlyName: 'Dataset Collection',
  },
  {
    type: EntityType.MATERIALIZED_VIEW,
    concreteType: 'org.sagebionetworks.repo.model.table.MaterializedView',
    friendlyName: 'Materialized View',
  },
  {
    type: EntityType.VIRTUAL_TABLE,
    concreteType: 'org.sagebionetworks.repo.model.table.VirtualTable',
    friendlyName: 'Virtual Table',
  },
]

/**
 * The purpose of these tests is more to ensure that we're handling all entity types as new ones are added.
 * A key assumption is that the EntityType enum is the "source of truth", so these tests will check that we handle all
 * the entity types in our test list.
 */
describe('EntityTypeUtils tests', () => {
  it('Verify that our test list captures all entity types', () => {
    for (const type of Object.values(EntityType)) {
      expect(allEntityTypes.find(t => t.type === type)).toBeTruthy()
    }

    // Should be a 1:1 mapping of EntityType to concreteType, so the list lengths should be the same
    expect(Object.keys(EntityType)).toHaveLength(allEntityTypes.length)
  })

  it('entityTypeToFriendlyName handles all enumerated types', () => {
    for (const type of Object.values(EntityType)) {
      expect(entityTypeToFriendlyName(type as EntityType)).toEqual(
        allEntityTypes.find(t => t.type === type)!.friendlyName,
      )
    }
  })

  it('convertToEntityType handles all enumerated types', () => {
    for (const type of Object.values(EntityType)) {
      expect(convertToEntityType(type as EntityType)).toEqual(type)
    }
  })

  it('convertToEntityType handles concreteTypes', () => {
    for (const { concreteType, type } of allEntityTypes) {
      expect(convertToEntityType(concreteType)).toEqual(type)
    }
  })

  it('isContainerType handles all enumerated types', () => {
    for (const type of Object.values(EntityType)) {
      const expected = type === EntityType.PROJECT || type === EntityType.FOLDER
      expect(isContainerType(type as EntityType)).toBe(expected)
    }
  })

  it('isVersionableEntityType handles all enumerated types', () => {
    // Note: not testing values here
    for (const type of Object.values(EntityType)) {
      expect(() => isVersionableEntityType(type as EntityType)).not.toThrow()
    }
  })

  describe('getVersionDisplay tests', () => {
    test('The current version of a file', () => {
      const file: Partial<FileEntity> = {
        concreteType: FILE_ENTITY_CONCRETE_TYPE_VALUE,
        isLatestVersion: true,
        versionNumber: 5,
      }

      expect(getVersionDisplay(file as Entity)).toEqual('5 (Current)')
    })

    test('A previous version of a file', () => {
      const file: Partial<FileEntity> = {
        concreteType: FILE_ENTITY_CONCRETE_TYPE_VALUE,
        isLatestVersion: false,
        versionNumber: 5,
      }

      expect(getVersionDisplay(file as Entity)).toEqual('5')
    })

    test('A previous version of a table', () => {
      const table: Partial<TableEntity> = {
        concreteType: TABLE_ENTITY_CONCRETE_TYPE_VALUE,
        isLatestVersion: false,
        versionNumber: 5,
      }

      expect(getVersionDisplay(table as Entity)).toEqual('5')
    })

    test('The current version of a non-dataset table', () => {
      const table: Partial<TableEntity> = {
        concreteType: TABLE_ENTITY_CONCRETE_TYPE_VALUE,
        isLatestVersion: true,
        versionNumber: 5,
      }

      expect(getVersionDisplay(table as Entity)).toEqual('Current')
    })

    test('A previous version of a dataset', () => {
      const dataset: Partial<Dataset> = {
        concreteType: DATASET_CONCRETE_TYPE_VALUE,
        isLatestVersion: true,
        versionNumber: 5,
      }

      expect(getVersionDisplay(dataset as Entity)).toEqual('Draft')
    })
  })

  describe('normalizeSynPrefix', () => {
    test.each([
      ['syn123', 'syn123'],
      ['syn123.4', 'syn123.4'],
      ['Syn123.4', 'syn123.4'],
      ['123', 'syn123'],
      ['123.4', 'syn123.4'],
    ])('normalizeSynPrefix - %s', (synId, expected) => {
      expect(normalizeSynPrefix(synId)).toBe(expected)
    })
  })
})
