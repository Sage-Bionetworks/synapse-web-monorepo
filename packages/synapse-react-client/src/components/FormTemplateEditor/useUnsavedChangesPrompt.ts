/*
 * Guards an editor's unsaved changes against being lost by leaving it. Navigation inside the
 * router and the editor's own exits (e.g. Cancel) ask in a dialog. Leaving the page (host app
 * links, closing or reloading the tab) is left to the host app through the global editing state,
 * as SWC already does for its other editors; prompting here too would ask twice.
 */
import { useGlobalIsEditingContext } from '@/utils/context/GlobalIsEditingContext'
import { useCallback, useEffect, useRef, useState } from 'react'
import { useBlocker } from 'react-router'

export const DISCARD_CHANGES_TITLE = 'Discard unsaved changes?'
export const DISCARD_CHANGES_MESSAGE =
  'You have unsaved changes. If you leave now, they will be lost.'
export const DISCARD_CHANGES_CONFIRM_TEXT = 'Discard changes'
export const KEEP_EDITING_TEXT = 'Keep editing'

export type UnsavedChangesPrompt = {
  /** Runs `exit` right away when clean; otherwise asks first and runs it only if the user discards. */
  confirmExit: (exit: () => void) => void
  /** Runs `exit` without asking, for exits that keep the changes (e.g. after a successful save). */
  exitWithoutPrompt: (exit: () => void) => void
  /** Props for the confirmation dialog the caller renders. */
  dialogProps: {
    open: boolean
    onConfirm: () => void
    onCancel: () => void
  }
}

/**
 * Must be used under a react-router data router (`createBrowserRouter`/`createMemoryRouter`),
 * because blocking navigation relies on `useBlocker`.
 */
export function useUnsavedChangesPrompt(
  isDirty: boolean,
): UnsavedChangesPrompt {
  // react-router only sees a new `isDirty` after the next commit, but exits such as `onSaved`
  // navigate synchronously from the same handler that cleared it; this lets those through.
  const isExitingRef = useRef(false)
  const blocker = useBlocker(
    ({ currentLocation, nextLocation }) =>
      isDirty &&
      !isExitingRef.current &&
      currentLocation.pathname !== nextLocation.pathname,
  )
  const [pendingExit, setPendingExit] = useState<(() => void) | null>(null)

  const { setIsEditing } = useGlobalIsEditingContext()
  useEffect(() => {
    setIsEditing(isDirty)
    return () => setIsEditing(false)
  }, [isDirty, setIsEditing])

  const exitWithoutPrompt = useCallback((exit: () => void) => {
    isExitingRef.current = true
    try {
      exit()
    } finally {
      isExitingRef.current = false
    }
  }, [])

  const confirmExit = (exit: () => void) => {
    if (isDirty) {
      setPendingExit(() => exit)
    } else {
      exit()
    }
  }

  const onConfirm = () => {
    if (blocker.state === 'blocked') {
      blocker.proceed()
    } else if (pendingExit) {
      setPendingExit(null)
      exitWithoutPrompt(pendingExit)
    }
  }

  const onCancel = () => {
    if (blocker.state === 'blocked') {
      blocker.reset()
    }
    setPendingExit(null)
  }

  return {
    confirmExit,
    exitWithoutPrompt,
    dialogProps: {
      open: blocker.state === 'blocked' || pendingExit !== null,
      onConfirm,
      onCancel,
    },
  }
}
