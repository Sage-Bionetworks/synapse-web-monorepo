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

  // check source, file entity or record set
  console.log('typed', sourceEntityType)
  console.log('gridSessionId', gridSessionId)

  const { mutate: mergeGridWithSource, isPending } = useMergeGridWithSource({
    onSuccess: result => {
      onMergeSuccess(result)
    },
    onError: e => {
      displayToast(e.message, 'danger')
    },
  })

  const buttonText =
    sourceEntityType === EntityType.recordset
      ? 'Merge grid edits into RecordSet'
      : 'Update table with changes'

  return (
    <Button
      loading={isPending}
      onClick={() => {
        mergeGridWithSource({ gridSessionId, sourceEntityId })
      }}
      variant="contained"
    >
      {buttonText}
    </Button>
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
