import useGridSourceSyncStatus, {
  getSourceDataFileHandleId,
  hasUnimportedDataFileChange,
  shouldPullBeforePush,
} from '@/components/DataGrid/hooks/useGridSourceSyncStatus'
import useMergeGridWithSource, {
  buildMergeGridVariables,
  SOURCE_HAS_UNIMPORTED_UPDATES_MESSAGE,
} from '@/components/DataGrid/useMergeGridWithSource'
import {
  displaySynchronizeResultToast,
  displayTableUpdateResultToast,
} from '@/components/DataGrid/utils/gridSyncMessages'
import { displayToast } from '@/components/ToastMessage/ToastMessage'
import { useGetGridSession } from '@/synapse-queries/grid/useGridSession'
import { EntityType, GridSession } from '@sage-bionetworks/synapse-client'
import { useCallback, useState } from 'react'

/** Which prompt, if any, should be shown for source updates that have not been imported. */
export type GridSourceSyncPrompt = 'hidden' | 'dialog' | 'banner'

export type GridSourceSync = {
  isSourceOutdated: boolean
  sourceEntityName: string | undefined
  sourceEntityType: EntityType | undefined
  prompt: GridSourceSyncPrompt
  /** True while the data needed to determine the sync state is loading. */
  isLoading: boolean
  /** True while a merge is in flight, or while the source is being re-checked before a submit. */
  isPending: boolean
  /** Imports source updates into this session without applying the session's own changes. */
  importChanges: () => void
  /**
   * Applies this session's changes to the source. If the source has updates that have not been
   * imported, opens the prompt instead so the user decides whether to import them first.
   */
  submit: () => void
  /** Declines the dialog, leaving the persistent banner in its place. */
  dismissDialog: () => void
}

/** What the grid was last known to be in sync with, and how it found the source on arrival. */
type SourceBaseline = {
  sessionId: string
  dataFileHandleId: string | undefined
  /**
   * Whether the source was already updated the first time this client could tell. Arriving to an
   * updated source warrants interrupting with a dialog; an update that appears while the user is
   * working is reported with the banner instead.
   */
  wasOutdatedOnArrival: boolean
}

/**
 * Owns the shared state behind every source-sync affordance for a grid session: whether the
 * source has un-imported updates, which prompt to show for them, and the merge actions.
 *
 * Call this once per session and distribute the result, so that the sync button, dialog, and
 * banner always agree on the sync state and share a single in-flight merge.
 *
 * @param gridSession the session to synchronize, or null before one has been established; the
 *   session is re-read internally so that its source entity version and JSON Schema references
 *   stay current
 */
export default function useGridSourceSync(
  gridSession: GridSession | null,
): GridSourceSync {
  const [baseline, setBaseline] = useState<SourceBaseline>()
  // Each decision is stored as the session it applies to rather than as a boolean, so that a
  // newly joined session is prompted again without needing to reset anything.
  const [declinedSessionId, setDeclinedSessionId] = useState<string>()
  const [importedSessionId, setImportedSessionId] = useState<string>()
  const [blockedSubmitSessionId, setBlockedSubmitSessionId] = useState<string>()
  const [isCheckingSource, setIsCheckingSource] = useState(false)

  const sessionId = gridSession?.sessionId

  const { data: refreshedSession, refetch: refetchSession } = useGetGridSession(
    sessionId ?? '',
    { enabled: !!sessionId },
  )
  const currentSession = refreshedSession ?? gridSession

  const {
    isSourceOutdated: isSourceOutdatedByReference,
    sourceEntityName,
    sourceEntityType,
    sourceDataFileHandleId,
    isLoading,
    hasSettled,
    refetchSourceEntity,
    refetchSourceEntitySchemaBinding,
  } = useGridSourceSyncStatus(currentSession)

  // Adopt a baseline the first time the source can be assessed for a session. Assigning during
  // render rather than in an effect keeps the first prompt from flickering through the wrong
  // variant; the guard makes this one extra render, not a loop.
  if (sessionId != null && hasSettled && baseline?.sessionId !== sessionId) {
    setBaseline({
      sessionId,
      dataFileHandleId: sourceDataFileHandleId,
      // Suppress the interrupting dialog for a session the user already imported into, so that a
      // source reference that has not caught up cannot re-open it.
      wasOutdatedOnArrival:
        isSourceOutdatedByReference && importedSessionId !== sessionId,
    })
  }

  const baselineForSession =
    baseline?.sessionId === sessionId ? baseline : undefined

  const isSourceOutdated =
    isSourceOutdatedByReference ||
    hasUnimportedDataFileChange(
      sourceDataFileHandleId,
      baselineForSession?.dataFileHandleId,
    )

  const { mutate: mergeGrid, isPending: isMergePending } =
    useMergeGridWithSource({
      onSuccess: (result, variables) => {
        switch (result.type) {
          case 'synchronize':
            displaySynchronizeResultToast(result.data, variables.syncType)
            break
          case 'tableUpdateTransaction':
            displayTableUpdateResultToast(result.data)
            break
          default:
            result satisfies never
        }

        if (variables.syncType === 'PULL') {
          setImportedSessionId(variables.gridSessionId)
        }
        setBlockedSubmitSessionId(undefined)
        // The grid now holds the source's content, and a push gave the source a new data file of
        // its own. Drop the baseline so the next read re-adopts it.
        setBaseline(undefined)
      },
      onError: (e, variables) => {
        // The merge hook independently refuses to push a session that is behind its source. If
        // that guard is what rejected, the user needs the prompt, not an error.
        if (e.message === SOURCE_HAS_UNIMPORTED_UPDATES_MESSAGE) {
          setBlockedSubmitSessionId(variables.gridSessionId)
          return
        }
        displayToast(e.message, 'danger')
      },
    })

  const importChanges = useCallback(() => {
    if (!currentSession) {
      return
    }
    mergeGrid(buildMergeGridVariables(currentSession, sourceEntityType, true))
  }, [mergeGrid, currentSession, sourceEntityType])

  const submit = useCallback(async () => {
    if (!currentSession) {
      return
    }

    // The source is read from cache, so it may have been updated since. Re-check before pushing,
    // since a PULL_PUSH would otherwise silently import those updates as part of the submit.
    setIsCheckingSource(true)
    try {
      const [session, sourceEntity, schemaBinding] = await Promise.all([
        refetchSession(),
        refetchSourceEntity(),
        refetchSourceEntitySchemaBinding(),
      ])

      // `refetch` reports a failure by resolving without data rather than by throwing. The
      // comparison must fail closed: treating an unverified source as up to date would send the
      // PULL_PUSH that imports the source's changes without the user ever being asked.
      // A null schema binding is a valid answer (the source has no bound schema); undefined is not.
      const latestSession = session.data
      if (
        !latestSession ||
        !sourceEntity.data ||
        schemaBinding.data === undefined
      ) {
        displayToast(
          'Could not check whether the source has been updated. Please try again.',
          'danger',
        )
        return
      }

      const isOutdated =
        shouldPullBeforePush(
          latestSession,
          sourceEntity.data,
          schemaBinding.data,
        ) ||
        hasUnimportedDataFileChange(
          getSourceDataFileHandleId(sourceEntity.data),
          baselineForSession?.dataFileHandleId,
        )

      if (isOutdated) {
        setBlockedSubmitSessionId(latestSession.sessionId)
        return
      }

      mergeGrid(buildMergeGridVariables(latestSession, sourceEntityType, false))
    } finally {
      setIsCheckingSource(false)
    }
  }, [
    refetchSession,
    refetchSourceEntity,
    refetchSourceEntitySchemaBinding,
    currentSession,
    mergeGrid,
    sourceEntityType,
    baselineForSession?.dataFileHandleId,
  ])

  const dismissDialog = useCallback(() => {
    setDeclinedSessionId(sessionId)
    setBlockedSubmitSessionId(undefined)
  }, [sessionId])

  return {
    isSourceOutdated,
    sourceEntityName,
    sourceEntityType,
    prompt: getPrompt({
      isSourceOutdated,
      hasBaseline: baselineForSession != null,
      wasOutdatedOnArrival: baselineForSession?.wasOutdatedOnArrival ?? false,
      hasDeclinedDialog: sessionId != null && declinedSessionId === sessionId,
      hasImported: sessionId != null && importedSessionId === sessionId,
      isBlockingSubmit:
        sessionId != null && blockedSubmitSessionId === sessionId,
    }),
    isLoading,
    isPending: isMergePending || isCheckingSource,
    importChanges,
    submit: () => void submit(),
    dismissDialog,
  }
}

function getPrompt(args: {
  isSourceOutdated: boolean
  hasBaseline: boolean
  wasOutdatedOnArrival: boolean
  hasDeclinedDialog: boolean
  hasImported: boolean
  isBlockingSubmit: boolean
}): GridSourceSyncPrompt {
  const {
    isSourceOutdated,
    hasBaseline,
    wasOutdatedOnArrival,
    hasDeclinedDialog,
    hasImported,
    isBlockingSubmit,
  } = args

  // A blocked submit takes precedence over everything: it was decided from a fresh read of the
  // source, and the user has to resolve it before they can continue. Deferring to the derived
  // state here would let a submit be silently dropped whenever the two disagree.
  if (isBlockingSubmit) {
    return 'dialog'
  }
  // Until the baseline is adopted there is nothing to compare an update against, so the prompt
  // cannot be classified yet.
  if (!hasBaseline || !isSourceOutdated || hasImported) {
    return 'hidden'
  }
  if (hasDeclinedDialog) {
    return 'banner'
  }
  // An update that appeared while the user was working is reported without interrupting them.
  return wasOutdatedOnArrival ? 'dialog' : 'banner'
}
