import { describe, it, expect } from 'vitest'
import { getCreateGridRequestForMetadataTask } from './getCreateGridRequestForMetadataTask'
import { GridSupportedTaskProperties } from '@sage-bionetworks/synapse-client'

const FILE_BASED =
  'org.sagebionetworks.repo.model.curation.metadata.FileBasedMetadataTaskProperties'
const RECORD_BASED =
  'org.sagebionetworks.repo.model.curation.metadata.RecordBasedMetadataTaskProperties'
const GRID_REQUEST_CONCRETE_TYPE =
  'org.sagebionetworks.repo.model.grid.CreateGridRequest'

describe('getCreateGridRequestForMetadataTask', () => {
  it('throws when taskProperties is null', () => {
    const taskProperties = null as unknown as GridSupportedTaskProperties
    expect(() => getCreateGridRequestForMetadataTask(taskProperties)).toThrow(
      'taskProperties is required',
    )
  })

  it('throws for unknown concreteType', () => {
    const taskProperties = { concreteType: 'unknownType' } as any
    expect(() => getCreateGridRequestForMetadataTask(taskProperties)).toThrow(
      'Unknown taskProperties concreteType: unknownType',
    )
  })

  describe('FileBasedMetadataTaskProperties', () => {
    it('returns correct CreateGridRequest', () => {
      const taskProperties = {
        concreteType: FILE_BASED,
        fileViewId: 'syn123',
      } as unknown as GridSupportedTaskProperties
      expect(getCreateGridRequestForMetadataTask(taskProperties)).toEqual({
        concreteType: GRID_REQUEST_CONCRETE_TYPE,
        initialQuery: { sql: 'SELECT * FROM syn123' },
        ownerPrincipalId: undefined,
      })
    })

    describe('RecordBasedMetadataTaskProperties', () => {
      it('returns correct CreateGridRequest', () => {
        const taskProperties = {
          concreteType: RECORD_BASED,
          recordSetId: 'syn456',
        } as unknown as GridSupportedTaskProperties
        expect(getCreateGridRequestForMetadataTask(taskProperties)).toEqual({
          concreteType: GRID_REQUEST_CONCRETE_TYPE,
          recordSetId: 'syn456',
          ownerPrincipalId: undefined,
        })
      })
    })
  })
})
