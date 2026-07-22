import GridMenuButton from '@/components/DataGrid/components/GridMenuButton/GridMenuButton'
import useMergeGridWithSource, {
  MergeGridWithSource,
} from '@/components/DataGrid/useMergeGridWithSource'
import { displayToast } from '@/components/index'
import { useGetEntity } from '@/synapse-queries'
import { useGetSchemaBinding } from '@/synapse-queries/entity/useEntityBoundSchema'
import { useGetFeatureFlag } from '@/synapse-queries/featureflags'
import { FeatureFlagEnum } from '@/utils/featureflag/FeatureFlags'
import { convertToEntityType } from '@/utils/functions/EntityTypeUtils'
import { CloudDownloadTwoTone, CloudSyncTwoTone } from '@mui/icons-material'
import { Skeleton, Tooltip } from '@mui/material'
import {
  Entity,
  EntityType,
  EntityUpdateResults,
  GridSession,
  instanceOfEntityUpdateResults,
  instanceOfRecordSet,
  instanceOfUploadToTableResult,
  JsonSchemaObjectBinding,
  SynchronizeGridResponse,
  TableUpdateTransactionResponse,
} from '@sage-bionetworks/synapse-client'
import { SyncType } from '@sage-bionetworks/synapse-client/generated/models/SyncType'

export type SyncGridWithSourceButtonProps = {
  gridSession: GridSession
}

export default function SyncGridWithSourceButton(
  props: SyncGridWithSourceButtonProps,
) {
  const { gridSession } = props

  const { data: entity, isLoading: entityLoading } = useGetEntity(
    gridSession.sourceEntityId,
  )

  const { data: sourceEntitySchemaBinding, isLoading: schemaBindingIsLoading } =
    useGetSchemaBinding(gridSession.sourceEntityId ?? '', {
      enabled: !!gridSession.sourceEntityId,
    })

  const sourceEntityType = entity?.concreteType
    ? convertToEntityType(entity.concreteType)
    : undefined

  const enableRecordSetSync = useGetFeatureFlag(
    FeatureFlagEnum.ENABLE_RECORDSET_SYNCHRONIZATION,
  )

  const { mutate: mergeGrid, isPending } = useMergeGridWithSource({
    onSuccess: (result, variables) => {
      switch (result.type) {
        case 'synchronize':
          onSynchronizeSuccess(result.data, variables.syncType)
          break
        case 'tableUpdateTransaction':
          onMergeTableSuccess(result.data)
          break
        case 'recordset_overwrite':
          displayToast('Successfully updated RecordSet.', 'success')
          break
        default:
          result satisfies never
      }
    },
    onError: e => displayToast(e.message, 'danger'),
  })

  // At this time, only RecordSet sync supports PULL.
  // If the RecordSet source or JSON Schema has been updated since this grid was created,
  //  we have the user PULL the latest changes before enabling a full PULL_PUSH, so they
  //  have an opportunity to handle and fix unexpected merge outcomes.
  const shouldPull =
    enableRecordSetSync &&
    entity !== undefined &&
    sourceEntitySchemaBinding !== undefined &&
    shouldPullBeforePush(gridSession, entity, sourceEntitySchemaBinding)

  const { buttonText, tooltipText } = getSyncButtonLabels(
    shouldPull,
    sourceEntityType,
    enableRecordSetSync,
  )

  const isLoadingPrerequisiteData = entityLoading || schemaBindingIsLoading

  if (isLoadingPrerequisiteData) {
    return <Skeleton width="100px" />
  }

  return (
    <Tooltip title={tooltipText} describeChild>
      <GridMenuButton
        startIcon={shouldPull ? <CloudDownloadTwoTone /> : <CloudSyncTwoTone />}
        loading={isPending}
        onClick={() => {
          mergeGrid(
            buildMergeGridVariables(gridSession, sourceEntityType, shouldPull),
          )
        }}
        variant="contained"
      >
        {buttonText}
      </GridMenuButton>
    </Tooltip>
  )
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

/**
 * Determines the button label and tooltip copy for the sync button based on whether the
 * user should PULL before PULL_PUSH, and the source entity's type.
 */
export function getSyncButtonLabels(
  shouldPull: boolean,
  sourceEntityType: EntityType | undefined,
  enableRecordSetSync: boolean,
): { buttonText: string; tooltipText: string } {
  if (shouldPull) {
    return {
      buttonText: 'Import latest changes',
      tooltipText:
        'Imports any recent changes into this Curator session. Your changes will not yet be applied.',
    }
  }
  if (
    sourceEntityType === EntityType.table ||
    (sourceEntityType === EntityType.recordset && !enableRecordSetSync)
  ) {
    return {
      buttonText: 'Apply changes',
      tooltipText:
        'Applies any changes made in this Curator session to the source',
    }
  }
  return {
    buttonText: 'Sync changes',
    tooltipText:
      'Applies any changes made in this Curator session, and imports any recent changes into this Curator session.',
  }
}

/**
 * Builds the variables passed to the merge grid mutation for the given grid session,
 * source entity type, and whether the user should PULL before PULL_PUSH.
 */
export function buildMergeGridVariables(
  gridSession: GridSession,
  sourceEntityType: EntityType | undefined,
  shouldPull: boolean,
): MergeGridWithSource {
  return {
    gridSessionId: gridSession.sessionId!,
    sourceEntityId: gridSession.sourceEntityId!,
    sourceEntityType,
    syncType: shouldPull ? 'PULL' : 'PULL_PUSH',
  }
}

export function onSynchronizeSuccess(
  result: SynchronizeGridResponse,
  syncType?: SyncType,
) {
  if (result.errorMessages == null || result.errorMessages.length === 0) {
    if (syncType === 'PULL') {
      displayToast('Successfully imported latest changes.', 'success')
    } else {
      displayToast('Successfully synchronized changes.', 'success')
    }
  } else {
    displayToast(
      <ul>
        {result.errorMessages.map((msg, index) => (
          <li key={index}>{msg}</li>
        ))}
      </ul>,
      'warning',
      { title: 'Some changes could not be applied' },
    )
  }
}

function onMergeTableSuccess(result: TableUpdateTransactionResponse) {
  if (result.results?.length) {
    // There should only be one result since the CSV upload is done in one step
    const updateResult = result.results[0]
    if (instanceOfEntityUpdateResults(updateResult)) {
      // This is an update to the contents of a View
      const failureMessages =
        getEntityUpdateResultsErrorMessages(updateResult).join('\n')

      if (failureMessages) {
        displayToast(
          `Some changes could not be applied:\n${failureMessages}`,
          'danger',
        )
      } else {
        displayToast('Changes applied successfully', 'success')
      }
    } else if (instanceOfUploadToTableResult(updateResult)) {
      // This is an update to a TableEntity
      const rowsUpdatedStr = updateResult.rowsProcessed?.toLocaleString()
      displayToast(`Successfully updated ${rowsUpdatedStr} rows.`, 'success')
    }
  }
}

function getEntityUpdateResultsErrorMessages(
  results: EntityUpdateResults,
): string[] {
  return (
    results.updateResults
      ?.filter(e => !!e.failureCode)
      .map(
        r => `${r.entityId}: ${r.failureMessage} (code: ${r.failureCode})`,
      ) ?? []
  )
}
