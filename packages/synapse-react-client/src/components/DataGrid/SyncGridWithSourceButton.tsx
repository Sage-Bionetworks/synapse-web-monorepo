import GridMenuButton from '@/components/DataGrid/components/GridMenuButton/GridMenuButton'
import useGridSourceSyncStatus from '@/components/DataGrid/hooks/useGridSourceSyncStatus'
import useMergeGridWithSource, {
  buildMergeGridVariables,
} from '@/components/DataGrid/useMergeGridWithSource'
import {
  displaySynchronizeResultToast,
  getSyncButtonLabels,
} from '@/components/DataGrid/utils/gridSyncMessages'
import { displayToast } from '@/components/ToastMessage/ToastMessage'
import { CloudDownloadTwoTone, CloudSyncTwoTone } from '@mui/icons-material'
import { Skeleton, Tooltip } from '@mui/material'
import {
  EntityUpdateResults,
  GridSession,
  instanceOfEntityUpdateResults,
  instanceOfUploadToTableResult,
  TableUpdateTransactionResponse,
} from '@sage-bionetworks/synapse-client'

export type SyncGridWithSourceButtonProps = {
  gridSession: GridSession
}

export default function SyncGridWithSourceButton(
  props: SyncGridWithSourceButtonProps,
) {
  const { gridSession } = props

  const {
    isSourceOutdated,
    sourceEntityType,
    isLoading: isLoadingPrerequisiteData,
  } = useGridSourceSyncStatus(gridSession)

  const { mutate: mergeGrid, isPending } = useMergeGridWithSource({
    onSuccess: (result, variables) => {
      switch (result.type) {
        case 'synchronize':
          displaySynchronizeResultToast(result.data, variables.syncType)
          break
        case 'tableUpdateTransaction':
          onMergeTableSuccess(result.data)
          break
        default:
          result satisfies never
      }
    },
    onError: e => displayToast(e.message, 'danger'),
  })

  const { buttonText, tooltipText } = getSyncButtonLabels(
    isSourceOutdated,
    sourceEntityType,
  )

  if (isLoadingPrerequisiteData) {
    return <Skeleton width="100px" />
  }

  return (
    <Tooltip title={tooltipText} describeChild>
      <GridMenuButton
        startIcon={
          isSourceOutdated ? <CloudDownloadTwoTone /> : <CloudSyncTwoTone />
        }
        loading={isPending}
        onClick={() => {
          mergeGrid(
            buildMergeGridVariables(
              gridSession,
              sourceEntityType,
              isSourceOutdated,
            ),
          )
        }}
        variant="contained"
      >
        {buttonText}
      </GridMenuButton>
    </Tooltip>
  )
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
