import useMergeGridWithSource from '@/components/DataGrid/useMergeGridWithSource'
import { displayToast } from '@/components/index'
import { Button } from '@mui/material'
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
  const { sourceEntityId, gridSessionId, sourceEntityType } = props

  const { mutate: mergeGrid, isPending } = useMergeGridWithSource({
    onSuccess: result => {
      if (result.type === 'table') {
        console.log('table result', result.data)
        onMergeSuccess(result.data as TableUpdateTransactionResponse)
      } else {
        displayToast('Successfully exported RecordSet edits.', 'success')
      }
    },
    onError: e => displayToast(e.message, 'danger'),
  })

  const isRecordSet = sourceEntityType === EntityType.recordset

  const buttonText = isRecordSet
    ? 'Merge grid edits into RecordSet'
    : 'Update table with changes'

  // const isLoading = isRecordSet ? isRecordSetPending : isPending

  return (
    <Button
      // loading={isLoading}
      loading={isPending}
      // onClick={() => {
      //   if (isRecordSet) {
      //     mergeGridWithRecordSet({ gridSessionId })
      //   } else {
      //     mergeGridWithSource({ gridSessionId, sourceEntityId })
      //   }
      // }}
      onClick={() =>
        mergeGrid({ gridSessionId, sourceEntityId, sourceEntityType })
      }
      variant="contained"
    >
      {buttonText}
    </Button>
  )
}

function onMergeSuccess(result: TableUpdateTransactionResponse) {
  console.log('table update result', result)
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
