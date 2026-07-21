import { describe, it, expect } from 'vitest'
import { getGridSourceIdForTask } from './getGridSourceIdForTask'
import { GridSupportedTaskProperties } from '@sage-bionetworks/synapse-client'

describe('getGridSourceIdForTask', () => {
  it('returns fileViewId for FileBasedMetadataTaskProperties', () => {
    const taskProperties = {
      concreteType:
        'org.sagebionetworks.repo.model.curation.metadata.FileBasedMetadataTaskProperties',
      fileViewId: 'syn123',
    } satisfies GridSupportedTaskProperties

    expect(getGridSourceIdForTask(taskProperties)).toBe('syn123')
  })

  it('returns recordSetId for RecordBasedMetadataTaskProperties', () => {
    const taskProperties = {
      concreteType:
        'org.sagebionetworks.repo.model.curation.metadata.RecordBasedMetadataTaskProperties',
      recordSetId: 'rs456',
    } satisfies GridSupportedTaskProperties
    expect(getGridSourceIdForTask(taskProperties)).toBe('rs456')
  })

  it('throws error if taskProperties is null', () => {
    const taskProperties = null as unknown as GridSupportedTaskProperties
    expect(() => getGridSourceIdForTask(taskProperties)).toThrow(
      'taskProperties is required',
    )
  })

  it('throws error for unknown concreteType', () => {
    const taskProperties = {
      concreteType: 'unknownType',
    } as unknown as GridSupportedTaskProperties
    expect(() => getGridSourceIdForTask(taskProperties)).toThrow(
      'Unknown taskProperties concreteType: unknownType',
    )
  })
})
