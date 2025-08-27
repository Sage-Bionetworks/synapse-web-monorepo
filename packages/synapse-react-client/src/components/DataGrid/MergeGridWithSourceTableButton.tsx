import useMergeGridWithSource from '@/components/DataGrid/useMergeGridWithSource'
import { displayToast } from '@/components/index'
import { useGetEntityBundle } from '@/synapse-queries/index'
import { Button } from '@mui/material'
import {
  EntityUpdateResults,
  instanceOfEntityUpdateResults,
  instanceOfUploadToTableResult,
  TableUpdateTransactionResponse,
} from '@sage-bionetworks/synapse-client'

export type MergeGridWithSourceTableButtonProps = {
  sourceEntityId: string
  gridSessionId: string
  disabled?: boolean
}

export default function MergeGridWithSourceTableButton(
  props: MergeGridWithSourceTableButtonProps,
) {
  const { sourceEntityId, gridSessionId, disabled: disabledFromProps } = props

  const { data: sourceEntityBundle } = useGetEntityBundle(sourceEntityId)
  const hasPermissionToUpdateSource = sourceEntityBundle?.permissions?.canEdit

  const { mutate: mergeGridWithSource, isPending } = useMergeGridWithSource({
    onSuccess: result => {
      onMergeSuccess(result)
    },
    onError: e => {
      displayToast(e.message, 'danger')
    },
  })

  if (!hasPermissionToUpdateSource) {
    return null
  }

  return (
    <Button
      loading={isPending}
      disabled={disabledFromProps}
      onClick={() => {
        mergeGridWithSource({ gridSessionId, sourceEntityId })
      }}
      variant="contained"
    >
      Update table with changes
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
