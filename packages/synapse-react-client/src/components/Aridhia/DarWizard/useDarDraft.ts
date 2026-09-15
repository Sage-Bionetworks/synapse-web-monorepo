import { useCallback, useState } from 'react'
import { TransferType } from './AridhiaDarWizard'

export type DarDraft = {
  /** Client-generated, stable across the wizard session. */
  code: string
  step: number
  /** Flat answer map across every section (About ∪ Project ∪ Workspace-when-requested). */
  values: Record<string, unknown>
  selectedDictionaryCodes: string[]
  workspaceRequested: boolean
  /** Required when `workspaceRequested` is true — the free-text identifier RDCA-DAP calls
   * "Reference"; sent as `RequestPost.workspace_reference`. Not part of the dynamic
   * `workspace_request` form fetched from `/workspaces-forms/{code}` — the FAIR API treats it
   * as a sibling field of the overall DAR submission, not a form answer. */
  workspaceReference?: string
  workspaceLocation?: string
  workspaceUuid?: string
  transferType?: TransferType
  termsAccepted: boolean
}

/** Exported so tests assert against the same key the wizard writes. */
export function draftStorageKey(datasetCode: string): string {
  return `ampals-dar-draft:${datasetCode}`
}

/** `ampals-{datasetCode}-{8 lowercase hex}` — the only idempotency lever FAIR offers. */
function generateRequestCode(datasetCode: string): string {
  const hex = crypto.randomUUID().replaceAll('-', '').slice(0, 8)
  return `ampals-${datasetCode}-${hex}`
}

function loadOrCreateDraft(datasetCode: string): DarDraft {
  const stored = sessionStorage.getItem(draftStorageKey(datasetCode))
  if (stored) {
    try {
      // Resuming always re-enters at the first step.
      return { ...(JSON.parse(stored) as DarDraft), step: 0 }
    } catch {
      // Corrupt/old-shape draft — fall through to a fresh one rather than crashing the wizard.
    }
  }
  return {
    code: generateRequestCode(datasetCode),
    step: 0,
    values: {},
    selectedDictionaryCodes: [],
    workspaceRequested: false,
    termsAccepted: false,
  }
}

/**
 * Persists the wizard's in-progress draft to `sessionStorage`: survives refresh and
 * accidental back-navigation, but never outlives the tab, since this form collects a name,
 * institutional email, phone number, and street address.
 */
export function useDarDraft(datasetCode: string) {
  const [draft, setDraftState] = useState<DarDraft>(() =>
    loadOrCreateDraft(datasetCode),
  )

  const setDraft = useCallback(
    (updater: DarDraft | ((previous: DarDraft) => DarDraft)) => {
      setDraftState(previous => {
        const next = typeof updater === 'function' ? updater(previous) : updater
        sessionStorage.setItem(
          draftStorageKey(datasetCode),
          JSON.stringify(next),
        )
        return next
      })
    },
    [datasetCode],
  )

  const clearDraft = useCallback(() => {
    sessionStorage.removeItem(draftStorageKey(datasetCode))
  }, [datasetCode])

  return { draft, setDraft, clearDraft }
}
