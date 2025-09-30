import { describe, expect, expectTypeOf, test } from 'vitest'
import { EntityFromJSONTyped } from './generated/models/Entity'
import { FileEntity, instanceOfFileEntity } from './generated/models/FileEntity'

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
})
