import { describe, expect, test } from 'vitest'
import {
  EntityFromJSONTyped,
  FileEntity,
  instanceOfFileEntity,
} from './generated'

describe('Tests for the generated specification', () => {
  test('instanceOfXxx works for a model with a concrete type', () => {
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
    expect(() =>
      EntityFromJSONTyped(withDifferentConcreteType, false),
    ).toThrow()
  })
})
