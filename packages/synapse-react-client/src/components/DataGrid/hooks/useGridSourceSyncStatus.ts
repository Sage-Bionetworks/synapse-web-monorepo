import { useGetEntity } from '@/synapse-queries'
import { useGetSchemaBinding } from '@/synapse-queries/jsonschema/useEntityBoundSchema'
import { convertToEntityType } from '@/utils/functions/EntityTypeUtils'
import {
  Entity,
  EntityType,
  GridSession,
  instanceOfRecordSet,
  JsonSchemaObjectBinding,
} from '@sage-bionetworks/synapse-client'
import { QueryObserverResult } from '@tanstack/react-query'

/**
 * How often the source entity is re-read while a session is open, so that a change made to the
 * source mid-session surfaces without the user having to act. Only entity metadata is fetched,
 * not the row data.
 */
export const SOURCE_ENTITY_POLL_INTERVAL_MS = 60_000

export type GridSourceSyncStatus = {
  /**
   * True when the source data or JSON Schema has been updated since the grid session was
   * created or last synchronized, and the source supports importing those updates.
   */
  isSourceOutdated: boolean
  sourceEntityName: string | undefined
  sourceEntityType: EntityType | undefined
  /** The file handle holding the source's rows, when the source is a RecordSet. */
  sourceDataFileHandleId: string | undefined
  isLoading: boolean
  /** True once both reads have produced an answer, so the comparison is meaningful. */
  hasSettled: boolean
  /** Re-reads the source entity, for callers that must not act on cached data. */
  refetchSourceEntity: () => Promise<QueryObserverResult<Entity | undefined>>
  /** Re-reads the source entity's JSON Schema binding. */
  refetchSourceEntitySchemaBinding: () => Promise<
    QueryObserverResult<JsonSchemaObjectBinding | null | undefined>
  >
}

/**
 * Compares a grid session against its source entity to report whether the source has been
 * updated since the session was created or last synchronized.
 *
 * The source entity is re-read on an interval and when the window regains focus, so that an
 * edit made to the source while the session is open is noticed. The package default suppresses
 * both, which would otherwise leave this comparison running on data read once at join time.
 *
 * @param gridSession the session to compare against its source entity
 */
export default function useGridSourceSyncStatus(
  gridSession: GridSession | null | undefined,
): GridSourceSyncStatus {
  const sourceEntityId = gridSession?.sourceEntityId

  const {
    data: sourceEntity,
    isLoading: entityIsLoading,
    refetch: refetchSourceEntity,
  } = useGetEntity(sourceEntityId, undefined, {
    refetchInterval: SOURCE_ENTITY_POLL_INTERVAL_MS,
    refetchOnWindowFocus: true,
  })

  const {
    data: sourceEntitySchemaBinding,
    isLoading: schemaBindingIsLoading,
    refetch: refetchSourceEntitySchemaBinding,
  } = useGetSchemaBinding(sourceEntityId ?? '', {
    enabled: !!sourceEntityId,
    refetchInterval: SOURCE_ENTITY_POLL_INTERVAL_MS,
    refetchOnWindowFocus: true,
  })

  // Both requests must resolve before the comparison is meaningful. An unresolved request is
  // reported as up-to-date so that we never prompt the user to import based on partial data.
  const hasSettled =
    sourceEntity !== undefined && sourceEntitySchemaBinding !== undefined

  const isSourceOutdated =
    gridSession != null &&
    hasSettled &&
    shouldPullBeforePush(gridSession, sourceEntity, sourceEntitySchemaBinding)

  return {
    isSourceOutdated,
    sourceEntityName: sourceEntity?.name,
    sourceEntityType: sourceEntity?.concreteType
      ? convertToEntityType(sourceEntity.concreteType)
      : undefined,
    sourceDataFileHandleId: getSourceDataFileHandleId(sourceEntity),
    isLoading: entityIsLoading || schemaBindingIsLoading,
    hasSettled,
    refetchSourceEntity,
    refetchSourceEntitySchemaBinding,
  }
}

/**
 * If the source data or JSON Schema has been updated since this grid was created, we have
 * the user PULL the latest changes before enabling a full PULL_PUSH, so they have an
 * opportunity to handle unexpected merge outcomes.
 *
 * This only applies to source types that support the PULL SyncType.
 *
 * Note that this compares the version number the session recorded for its source, so it cannot
 * see an edit to the source that did not produce a new entity version. Pair it with
 * {@link hasUnimportedDataFileChange} to also catch those.
 *
 * @param gridSession The grid session to check.
 * @param sourceEntity The source entity to check.
 * @param sourceEntitySchemaBinding The source entity's schema binding to check.
 * @returns True if the user should PULL before PULL_PUSH, false otherwise.
 */
export function shouldPullBeforePush(
  gridSession: GridSession,
  sourceEntity: Entity | null,
  sourceEntitySchemaBinding: JsonSchemaObjectBinding | null,
): boolean {
  // Currently, only RecordSet supports PULL
  const isPullSupported =
    sourceEntity != null && instanceOfRecordSet(sourceEntity)
  if (!isPullSupported) {
    return false
  }

  // Guide the user to PULL first if the source was updated since the grid was
  // created/synced, or if the JSON Schema binding has updated.
  const isSourceEntityUpdated =
    gridSession.sourceEntityVersionNumber != null &&
    sourceEntity.versionNumber != null &&
    gridSession.sourceEntityVersionNumber < sourceEntity.versionNumber

  const isSchemaBindingUpdated =
    sourceEntitySchemaBinding != null &&
    gridSession.gridJsonSchema$Id !==
      sourceEntitySchemaBinding.jsonSchemaVersionInfo?.$id

  return isSourceEntityUpdated || isSchemaBindingUpdated
}

/**
 * True when the source's rows now live in a different file than the one the grid is known to be
 * in sync with.
 *
 * Editing a RecordSet directly replaces its data file, which is not guaranteed to produce a new
 * entity version -- the only source reference the session records. Comparing the file handle
 * therefore catches edits that the version comparison misses, for as long as this client has been
 * watching the source.
 *
 * @param currentDataFileHandleId the source's data file as most recently read
 * @param syncedDataFileHandleId the data file the grid is known to be in sync with, if known
 */
export function hasUnimportedDataFileChange(
  currentDataFileHandleId: string | undefined,
  syncedDataFileHandleId: string | undefined,
): boolean {
  return (
    syncedDataFileHandleId != null &&
    currentDataFileHandleId != null &&
    syncedDataFileHandleId !== currentDataFileHandleId
  )
}

/** The file handle holding a RecordSet's rows. Other source types do not have one. */
export function getSourceDataFileHandleId(
  sourceEntity: Entity | null | undefined,
): string | undefined {
  return sourceEntity != null && instanceOfRecordSet(sourceEntity)
    ? sourceEntity.dataFileHandleId
    : undefined
}
