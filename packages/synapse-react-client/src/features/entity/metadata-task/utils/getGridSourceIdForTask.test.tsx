import { describe, it, expect } from 'vitest'
import { getGridSourceIdForTask } from './getGridSourceIdForTask'
import { CurationTask } from '@sage-bionetworks/synapse-client'

describe('getGridSourceIdForTask', () => {
  it('returns fileViewId for FileBasedMetadataTaskProperties', () => {
    const task = {
      taskProperties: {
        concreteType:
          'org.sagebionetworks.repo.model.curation.metadata.FileBasedMetadataTaskProperties',
        fileViewId: 'syn123',
      },
    } as unknown as CurationTask
    expect(getGridSourceIdForTask(task)).toBe('syn123')
  })

  it('returns recordSetId for RecordBasedMetadataTaskProperties', () => {
    const task = {
      taskProperties: {
        concreteType:
          'org.sagebionetworks.repo.model.curation.metadata.RecordBasedMetadataTaskProperties',
        recordSetId: 'rs456',
      },
    } as unknown as CurationTask
    expect(getGridSourceIdForTask(task)).toBe('rs456')
  })

  it('throws error if taskProperties is missing', () => {
    const task = {} as CurationTask
    expect(() => getGridSourceIdForTask(task)).toThrow(
      'CurationTask is missing taskProperties',
    )
  })

  it('throws error for unknown concreteType', () => {
    const task = {
      taskProperties: {
        concreteType: 'unknownType',
      },
    } as unknown as CurationTask
    expect(() => getGridSourceIdForTask(task)).toThrow(
      'Unknown taskProperties concreteType: unknownType',
    )
  })
})
