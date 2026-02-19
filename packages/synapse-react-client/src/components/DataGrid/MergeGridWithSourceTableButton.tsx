import GridMenuButton from '@/components/DataGrid/components/GridMenuButton/GridMenuButton'
import useMergeGridWithSource from '@/components/DataGrid/useMergeGridWithSource'
import { displayToast } from '@/components/index'
import { useGetEntity } from '@/synapse-queries'
import { useSynchronizeGridSession } from '@/synapse-queries/grid/useGridSession'
import { convertToEntityType } from '@/utils/functions/EntityTypeUtils'
import {
  EntityType,
  EntityUpdateResults,
  instanceOfEntityUpdateResults,
  instanceOfUploadToTableResult,
  TableUpdateTransactionResponse,
} from '@sage-bionetworks/synapse-client'
import { useCallback } from 'react'

export type MergeGridWithSourceTableButtonProps = {
  sourceEntityId: string
  gridSessionId: string
  sourceEntityType?: EntityType
}

export default function MergeGridWithSourceTableButton(
  props: MergeGridWithSourceTableButtonProps,
) {
  const { sourceEntityId, gridSessionId } = props

  const { data: entity, isLoading: entityLoading } =
    useGetEntity(sourceEntityId)

  const sourceEntityType = entity?.concreteType
    ? convertToEntityType(entity.concreteType)
    : undefined

  const { mutate: synchronizeWithView, isPending: isSynchronizePending } =
    useSynchronizeGridSession({
      onSuccess: result => {
        if (result.errorMessages == null || result.errorMessages.length === 0) {
          displayToast('Successfully synchronized metadata.', 'success')
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
      },
    })

  const { mutate: mergeGrid, isPending: isMergePending } =
    useMergeGridWithSource({
      onSuccess: result => {
        if (result.type === 'table') {
          onMergeSuccess(result.data)
        } else {
          displayToast('Successfully updated RecordSet.', 'success')
        }
      },
      onError: e => displayToast(e.message, 'danger'),
    })

  const isPending = isSynchronizePending || isMergePending

  const mergeChanges = useCallback(() => {
    if (sourceEntityType === 'entityview') {
      synchronizeWithView({ gridSessionId })
    } else {
      mergeGrid({ gridSessionId, sourceEntityId, sourceEntityType })
    }
  }, [
    sourceEntityType,
    synchronizeWithView,
    gridSessionId,
    mergeGrid,
    sourceEntityId,
  ])

  return (
    <GridMenuButton
      loading={isPending}
      disabled={entityLoading}
      onClick={() => mergeChanges()}
      variant="contained"
    >
      {sourceEntityType == 'entityview' && 'Synchronize &'} Apply changes
    </GridMenuButton>
  )
}

function onMergeSuccess(result: TableUpdateTransactionResponse) {
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
