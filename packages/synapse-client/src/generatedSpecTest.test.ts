import { describe, expect, expectTypeOf, test } from 'vitest'
import { EntityFromJSONTyped } from './generated/models/Entity'
import { FileEntity, instanceOfFileEntity } from './generated/models/FileEntity'
import { TableQuery, TableQueryToJSON } from './generated/models/TableQuery'

describe('Tests for the generated specification', () => {
  test('instanceOfXxx works for a model with a concreteType', () => {
    const fileEntity: FileEntity = {
      concreteType: 'org.sagebionetworks.repo.model.FileEntity',
      id: 'syn123',
      createdBy: '123',
      modifiedBy: '123',
      createdOn: '2024-01-01T00:00:00.000Z',
      modifiedOn: '2024-01-01T00:00:00.000Z',
      dataFileHandleId: '456',
      etag: 'b75773a4-be19-438f-bc7c-184a3f144d73',
      fileNameOverride: 'foo.txt',
      isLatestVersion: true,
      name: 'Foo',
      parentId: 'syn234',
      versionComment: '',
      versionLabel: '',
      versionNumber: 1,
    }

    const withDifferentConcreteType = {
      ...fileEntity,
      concreteType: 'something else',
    }

    // Verify that instanceOfFileEntity inspects the concreteType
    expect(instanceOfFileEntity(fileEntity)).toBe(true)
    expect(instanceOfFileEntity(withDifferentConcreteType)).toBe(false)

    // Verify that EntityFromJSONTyped inspects the concreteType
    expect(EntityFromJSONTyped(fileEntity, false)).toEqual(fileEntity)
  })
  test('instanceOfXxx asserts that an object is of the checked type', () => {
    const fileEntityWithoutType: object = {
      concreteType: 'org.sagebionetworks.repo.model.FileEntity',
      id: 'syn123',
      createdBy: '123',
      modifiedBy: '123',
      createdOn: '2024-01-01T00:00:00.000Z',
      modifiedOn: '2024-01-01T00:00:00.000Z',
      dataFileHandleId: '456',
      etag: 'b75773a4-be19-438f-bc7c-184a3f144d73',
      fileNameOverride: 'foo.txt',
      isLatestVersion: true,
      name: 'Foo',
      parentId: 'syn234',
      versionComment: '',
      versionLabel: '',
      versionNumber: 1,
    }

    if (instanceOfFileEntity(fileEntityWithoutType)) {
      expectTypeOf(fileEntityWithoutType).toMatchTypeOf<FileEntity>()
    } else {
      throw Error(
        'instanceOfFileEntity was false when it should have been true',
      )
    }
  })

  test("a query's cohorts are serialized with their own query", () => {
    // A cohort's query is a Query. The published spec types it as a CohortDefinition, which patchSpec corrects;
    // without that, serialization drops the cohort query's sql and filters.
    const query: TableQuery = {
      sql: 'SELECT * FROM syn2',
      cohorts: [
        {
          name: 'c1',
          query: {
            sql: 'SELECT individualId FROM syn1',
            additionalFilters: [
              {
                concreteType:
                  'org.sagebionetworks.repo.model.table.ColumnSingleValueQueryFilter',
                columnName: 'race',
                operator: 'EQUAL',
                values: ['Asian'],
              },
            ],
          },
        },
      ],
      additionalFilters: [
        {
          concreteType:
            'org.sagebionetworks.repo.model.table.ColumnCohortFilter',
          columnName: 'individualId',
          cohortName: 'c1',
          isDefiningCondition: true,
        },
      ],
    }

    expect(JSON.parse(JSON.stringify(TableQueryToJSON(query)))).toEqual(query)
  })
})
