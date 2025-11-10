import { describe, it, expect } from 'vitest'
import { getCreateGridRequestForMetadataTask } from './getCreateGridRequestForMetadataTask'
import { CurationTaskProperties } from '@sage-bionetworks/synapse-client'

describe('getCreateGridRequestForMetadataTask', () => {
  it('returns correct CreateGridRequest for FileBasedMetadataTaskProperties', () => {
    const props = {
      concreteType:
        'org.sagebionetworks.repo.model.curation.metadata.FileBasedMetadataTaskProperties',
      fileViewId: 'syn123',
    } satisfies CurationTaskProperties
    const result = getCreateGridRequestForMetadataTask(props)
    expect(result).toEqual({
      concreteType: 'org.sagebionetworks.repo.model.grid.CreateGridRequest',
      initialQuery: { sql: 'SELECT * FROM syn123' },
    })
  })

  it('returns correct CreateGridRequest for RecordBasedMetadataTaskProperties', () => {
    const props = {
      concreteType:
        'org.sagebionetworks.repo.model.curation.metadata.RecordBasedMetadataTaskProperties',
      recordSetId: 'syn456',
    } satisfies CurationTaskProperties
    const result = getCreateGridRequestForMetadataTask(props)
    expect(result).toEqual({
      concreteType: 'org.sagebionetworks.repo.model.grid.CreateGridRequest',
      recordSetId: 'syn456',
    })
  })

  it('throws error for unknown concreteType', () => {
    const props = {
      concreteType: 'unknownType',
    } as any
    expect(() => getCreateGridRequestForMetadataTask(props)).toThrow(
      'Unknown taskProperties concreteType: unknownType',
    )
  })
})
