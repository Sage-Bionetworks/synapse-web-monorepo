import {
  Entity as Entity_OpenAPI,
  EntityType,
} from '@sage-bionetworks/synapse-client'
import {
  Dataset,
  DATASET_CONCRETE_TYPE_VALUE,
  Entity,
  FILE_ENTITY_CONCRETE_TYPE_VALUE,
  FileEntity,
  TABLE_ENTITY_CONCRETE_TYPE_VALUE,
  TableEntity,
} from '@sage-bionetworks/synapse-types'
import {
  convertToEntityType,
  entityTypeToFriendlyName,
  getVersionDisplay,
  isContainerType,
  isVersionableEntityType,
  normalizeSynPrefix,
} from './EntityTypeUtils'

const allEntityTypes: {
  type: EntityType
  concreteType: Entity_OpenAPI['concreteType']
  friendlyName: string
}[] = [
  {
    type: EntityType.project,
    concreteType: 'org.sagebionetworks.repo.model.Project',
    friendlyName: 'Project',
  },
  {
    type: EntityType.folder,
    concreteType: 'org.sagebionetworks.repo.model.Folder',
    friendlyName: 'Folder',
  },
  {
    type: EntityType.link,
    concreteType: 'org.sagebionetworks.repo.model.Link',
    friendlyName: 'Link',
  },
  {
    type: EntityType.dockerrepo,
    concreteType: 'org.sagebionetworks.repo.model.docker.DockerRepository',
    friendlyName: 'Docker Repository',
  },
  {
    type: EntityType.file,
    concreteType: 'org.sagebionetworks.repo.model.FileEntity',
    friendlyName: 'File',
  },
  {
    type: EntityType.table,
    concreteType: 'org.sagebionetworks.repo.model.table.TableEntity',
    friendlyName: 'Table',
  },
  {
    type: EntityType.submissionview,
    concreteType: 'org.sagebionetworks.repo.model.table.SubmissionView',
    friendlyName: 'Submission View',
  },
  {
    type: EntityType.entityview,
    concreteType: 'org.sagebionetworks.repo.model.table.EntityView',
    friendlyName: 'View',
  },
  {
    type: EntityType.dataset,
    concreteType: 'org.sagebionetworks.repo.model.table.Dataset',
    friendlyName: 'Dataset',
  },
  {
    type: EntityType.datasetcollection,
    concreteType: 'org.sagebionetworks.repo.model.table.DatasetCollection',
    friendlyName: 'Dataset Collection',
  },
  {
    type: EntityType.materializedview,
    concreteType: 'org.sagebionetworks.repo.model.table.MaterializedView',
    friendlyName: 'Materialized View',
  },
  {
    type: EntityType.virtualtable,
    concreteType: 'org.sagebionetworks.repo.model.table.VirtualTable',
    friendlyName: 'Virtual Table',
  },
  {
    type: EntityType.recordset,
    concreteType: 'org.sagebionetworks.repo.model.RecordSet',
    friendlyName: 'Record Set',
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
      const expected = type === EntityType.project || type === EntityType.folder
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
