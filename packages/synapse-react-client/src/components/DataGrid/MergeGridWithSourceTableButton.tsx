import GridMenuButton from '@/components/DataGrid/components/GridMenuButton/GridMenuButton'
import useMergeGridWithSource from '@/components/DataGrid/useMergeGridWithSource'
import { displayToast } from '@/components/index'
import { useGetEntity } from '@/synapse-queries'
import { convertToEntityType } from '@/utils/functions/EntityTypeUtils'
import {
  EntityType,
  EntityUpdateResults,
  instanceOfEntityUpdateResults,
  instanceOfUploadToTableResult,
  SynchronizeGridResponse,
  TableUpdateTransactionResponse,
} from '@sage-bionetworks/synapse-client'

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

  const { mutate: mergeGrid, isPending } = useMergeGridWithSource({
    onSuccess: result => {
      if (result.type === 'entityview') {
        onSynchronizeSuccess(result.data)
      } else if (result.type === 'table') {
        onMergeTableSuccess(result.data)
      } else {
        displayToast('Successfully updated RecordSet.', 'success')
      }
    },
    onError: e => displayToast(e.message, 'danger'),
  })

  const buttonText =
    sourceEntityType === 'entityview' ? 'Sync changes' : 'Apply changes'

  return (
    <GridMenuButton
      loading={isPending}
      disabled={entityLoading}
      onClick={() => {
        mergeGrid({ gridSessionId, sourceEntityId, sourceEntityType })
      }}
      variant="contained"
    >
      {buttonText}
    </GridMenuButton>
  )
}

function onSynchronizeSuccess(result: SynchronizeGridResponse) {
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
