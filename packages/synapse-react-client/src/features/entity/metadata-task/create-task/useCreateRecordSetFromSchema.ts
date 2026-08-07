import { DEFAULT_CSV_TABLE_DESCRIPTOR } from '@/components/table/CsvPreview/useCsvUploadPreview'
import { useCreateEntity } from '@/synapse-queries/entity/useEntity'
import { useBindSchemaToEntity } from '@/synapse-queries/entity/useBindSchemaToEntity'
import { useSynapseMultipartUpload } from '@/synapse-queries/file/useSynapseMultipartUpload'
import { SYNAPSE_STORAGE_LOCATION_ID } from '@/synapse-client/SynapseClient'
import { SynapseClientError } from '@/utils/index'
import {
  CsvTableDescriptor,
  RecordSetConcreteTypeEnum,
} from '@sage-bionetworks/synapse-client'
import { Entity } from '@sage-bionetworks/synapse-types'
import { useMutation, UseMutationOptions } from '@tanstack/react-query'
import { useRef } from 'react'
import { buildHeaderOnlyCsv } from './utils/buildHeaderOnlyCsv'

/** The subset of `RecordSet` fields not present on the legacy `Entity` type, added via a cast. */
type RecordSetCreateEntity = Entity & {
  dataFileHandleId: string
  csvDescriptor: CsvTableDescriptor
  upsertKey?: string[]
}

export type CreateRecordSetFromSchemaVariables = {
  parentId: string
  name: string
  schema$id: string
  /** The ordered top-level property names of the bound schema; written as the CSV header row. */
  headers: string[]
  upsertKey?: string[]
}

/**
 * Creates a new RecordSet from a JSON Schema: uploads a header-only CSV built from the schema's
 * top-level properties, creates the RecordSet entity pointing at that CSV, then binds the schema to
 * it. Tracks which of those three sub-steps have already succeeded (scoped to this hook instance),
 * so retrying after a failure resumes from the first incomplete sub-step instead of repeating work
 * that already succeeded -- in particular, a bind-only failure never re-creates the RecordSet.
 */
export function useCreateRecordSetFromSchema(
  options?: Omit<
    UseMutationOptions<
      RecordSetCreateEntity,
      SynapseClientError,
      CreateRecordSetFromSchemaVariables
    >,
    'mutationFn'
  >,
) {
  const { mutateAsync: uploadCsv } = useSynapseMultipartUpload()
  const { mutateAsync: createEntity } = useCreateEntity()
  const { mutateAsync: bindSchema } = useBindSchemaToEntity()

  const progressRef = useRef<{
    fileHandleId?: string
    recordSet?: RecordSetCreateEntity
  }>({})

  return useMutation<
    RecordSetCreateEntity,
    SynapseClientError,
    CreateRecordSetFromSchemaVariables
  >({
    ...options,
    mutationFn: async ({ parentId, name, schema$id, headers, upsertKey }) => {
      let fileHandleId = progressRef.current.fileHandleId
      if (!fileHandleId) {
        const csv = buildHeaderOnlyCsv(headers, DEFAULT_CSV_TABLE_DESCRIPTOR)
        const uploaded = await uploadCsv({
          blob: new Blob([csv], { type: 'text/csv' }),
          fileName: `${name || 'RecordSet'}.csv`,
          contentType: 'text/csv',
          storageLocationId: SYNAPSE_STORAGE_LOCATION_ID,
          abortController: undefined,
        })
        fileHandleId = uploaded.fileHandleId
        progressRef.current.fileHandleId = fileHandleId
      }

      let recordSet = progressRef.current.recordSet
      if (!recordSet) {
        const entityToCreate: Entity = {
          name,
          parentId,
          concreteType:
            RecordSetConcreteTypeEnum.org_sagebionetworks_repo_model_RecordSet,
        }
        const recordSetToCreate = entityToCreate as RecordSetCreateEntity
        recordSetToCreate.dataFileHandleId = fileHandleId
        recordSetToCreate.csvDescriptor = DEFAULT_CSV_TABLE_DESCRIPTOR
        if (upsertKey && upsertKey.length > 0) {
          recordSetToCreate.upsertKey = upsertKey
        }

        recordSet = (await createEntity(
          entityToCreate,
        )) as RecordSetCreateEntity
        progressRef.current.recordSet = recordSet
      }

      await bindSchema({
        entityId: recordSet.id!,
        schema$id,
        enableDerivedAnnotations: false,
      })

      // All sub-steps succeeded: clear progress so the next call starts a new RecordSet from scratch.
      progressRef.current = {}

      return recordSet
    },
  })
}
