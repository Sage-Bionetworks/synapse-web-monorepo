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
      if (result.type === 'table') {
        onMergeSuccess(result.data)
      } else {
        displayToast('Successfully updated RecordSet.', 'success')
      }
    },
    onError: e => displayToast(e.message, 'danger'),
  })

  return (
    <GridMenuButton
      loading={isPending}
      disabled={entityLoading}
      onClick={() =>
        mergeGrid({ gridSessionId, sourceEntityId, sourceEntityType })
      }
      variant="contained"
    >
      Apply changes
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
