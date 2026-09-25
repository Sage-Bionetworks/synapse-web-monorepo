import { displayToast } from '@/components/ToastMessage/ToastMessage'
import {
  EntityType,
  SynchronizeGridResponse,
  SyncType,
} from '@sage-bionetworks/synapse-client'

/**
 * Label for the action that imports source changes into the grid without applying the
 * user's own changes back to Synapse. Shared by every affordance for that action — the
 * sync button, the out-of-date dialog, and the out-of-date banner — so they cannot drift.
 */
export const IMPORT_LATEST_CHANGES_TEXT = 'Import changes'

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
      buttonText: 'Submit',
      tooltipText:
        'Applies any changes made in this Curator session to the source',
    }
  }
  return {
    buttonText: 'Submit',
    tooltipText:
      'Applies any changes made in this Curator session, and imports any recent changes into this Curator session.',
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
