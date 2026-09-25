import { displayToast } from '@/components/ToastMessage/ToastMessage'
import {
  EntityType,
  EntityUpdateResults,
  instanceOfEntityUpdateResults,
  instanceOfUploadToTableResult,
  SynchronizeGridResponse,
  SyncType,
  TableUpdateTransactionResponse,
} from '@sage-bionetworks/synapse-client'

/**
 * Label for the action that imports source changes into the grid without applying the
 * user's own changes back to Synapse. Shared by every affordance for that action — the
 * sync button, the out-of-date dialog, and the out-of-date banner — so they cannot drift.
 */
export const IMPORT_LATEST_CHANGES_TEXT = 'Import changes'

/** Label for the action that applies this session's changes to the source entity. */
export const SUBMIT_TEXT = 'Submit'

/**
 * Determines the button label and tooltip copy for the sync button based on whether the
 * user should PULL before PULL_PUSH, and the source entity's type.
 */
export function getSyncButtonLabels(
  shouldPull: boolean,
  sourceEntityType: EntityType | undefined,
): { buttonText: string; tooltipText: string } {
  if (shouldPull) {
    return {
      buttonText: IMPORT_LATEST_CHANGES_TEXT,
      tooltipText:
        'Imports any recent changes into this Curator session. Your changes will not yet be applied.',
    }
  }
  if (sourceEntityType === EntityType.table) {
    return {
      buttonText: SUBMIT_TEXT,
      tooltipText:
        'Applies any changes made in this Curator session to the source',
    }
  }
  return {
    buttonText: SUBMIT_TEXT,
    tooltipText:
      'Applies any changes made in this Curator session to the source. If the source has been updated, you will be asked to import those changes first.',
  }
}

/**
 * Reports the outcome of a completed Synchronize request to the user. A synchronization can
 * partially succeed, in which case the per-row failures are surfaced as a warning.
 */
export function displaySynchronizeResultToast(
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

/**
 * Reports the outcome of a completed table update transaction to the user, for the source types
 * that are merged through the table update service rather than the Synchronize service.
 */
export function displayTableUpdateResultToast(
  result: TableUpdateTransactionResponse,
) {
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
