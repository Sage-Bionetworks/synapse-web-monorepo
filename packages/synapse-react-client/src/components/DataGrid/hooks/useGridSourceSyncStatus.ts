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

export type GridSourceSyncStatus = {
  /**
   * True when the source data or JSON Schema has been updated since the grid session was
   * created or last synchronized, and the source supports importing those updates.
   */
  isSourceOutdated: boolean
  sourceEntityName: string | undefined
  sourceEntityType: EntityType | undefined
  isLoading: boolean
}

/**
 * Compares a grid session against its source entity to report whether the source has been
 * updated since the session was created or last synchronized.
 *
 * @param gridSession the session to compare against its source entity
 */
export default function useGridSourceSyncStatus(
  gridSession: GridSession | null | undefined,
): GridSourceSyncStatus {
  const sourceEntityId = gridSession?.sourceEntityId

  const { data: sourceEntity, isLoading: entityIsLoading } =
    useGetEntity(sourceEntityId)

  const { data: sourceEntitySchemaBinding, isLoading: schemaBindingIsLoading } =
    useGetSchemaBinding(sourceEntityId ?? '', {
      enabled: !!sourceEntityId,
    })

  // Both requests must resolve before the comparison is meaningful. An unresolved request is
  // reported as up-to-date so that we never prompt the user to import based on partial data.
  const isSourceOutdated =
    gridSession != null &&
    sourceEntity !== undefined &&
    sourceEntitySchemaBinding !== undefined &&
    shouldPullBeforePush(gridSession, sourceEntity, sourceEntitySchemaBinding)

  return {
    isSourceOutdated,
    sourceEntityName: sourceEntity?.name,
    sourceEntityType: sourceEntity?.concreteType
      ? convertToEntityType(sourceEntity.concreteType)
      : undefined,
    isLoading: entityIsLoading || schemaBindingIsLoading,
  }
}

/**
 * If the source data or JSON Schema has been updated since this grid was created, we have
 * the user PULL the latest changes before enabling a full PULL_PUSH, so they have an
 * opportunity to handle unexpected merge outcomes.
 *
 * This only applies to source types that support the PULL SyncType.
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
