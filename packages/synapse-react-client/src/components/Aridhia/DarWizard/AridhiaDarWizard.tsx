import { ReactNode, useEffect, useMemo, useState } from 'react'
import { Alert, Box, Button, Skeleton } from '@mui/material'
import { RJSFSchema } from '@rjsf/utils'
import { useGetAridhiaDatasetSettings } from '@/aridhia-queries/useGetAridhiaDatasetSettings'
import { useGetAridhiaWorkflow } from '@/aridhia-queries/useGetAridhiaWorkflow'
import { useGetAridhiaDictionaries } from '@/aridhia-queries/useGetAridhiaDictionaries'
import { useGetAridhiaWorkspaces } from '@/aridhia-queries/useGetAridhiaWorkspaces'
import { useGetAridhiaWorkspaceRequestForm } from '@/aridhia-queries/useGetAridhiaWorkspaceRequestForm'
import { useSubmitAridhiaDar } from '@/aridhia-queries/useSubmitAridhiaDar'
import { TransferType } from '@/aridhia-queries/TransferType'
import { useGlobalIsEditingContext } from '@/utils/context/GlobalIsEditingContext'
import {
  fairSectionToRjsf,
  FairField,
  parseFairFormSections,
  summarizeFormAnswers,
} from '@/components/Aridhia/fairFormToRjsf'
import { useDarDraft } from './useDarDraft'
import { DarDestinationStep } from './DarDestinationStep'
import { DarWorkspaceStep } from './DarWorkspaceStep'
import { DarAboutStep } from './DarAboutStep'
import { DarProjectStep } from './DarProjectStep'
import { DarCompleteStep } from './DarCompleteStep'
import { DarSubmittedPanel } from './DarSubmittedPanel'

export type { TransferType }

export type AridhiaDarWizardProps = {
  datasetCode: string
  /** Display name for headings; falls back to the FAIR catalogue title. */
  datasetName?: string
  onSubmitted?: (requestCode: string) => void
}

// `DatasetSettings.allow_{type}` (e.g. `allow_clear`) gates each `TransferType` value below.
// See Aridhia docs here: https://knowledgebase.aridhia.io/fair-data-services/managing-data/dataset-administration/available-data-delivery-formats/
// NOTE: For the AMP-ALS integration, the published datasets support 'clear' only.
const TRANSFER_TYPE_PRIORITY: TransferType[] = [
  'clear',
  'pseudonymised',
  'manual',
]

function isSectionComplete(
  schema: RJSFSchema,
  values: Record<string, unknown>,
): boolean {
  return (schema.required ?? []).every(key => {
    const value = values[key]
    return value !== undefined && value !== null && value !== ''
  })
}

/**
 * Five-step (four when no new workspace is requested) DAR wizard: Destination, Workspace
 * (conditional), About, Project, Review & Submit.
 */
function useAridhiaDarWizardParts(
  props: AridhiaDarWizardProps,
  options?: {
    enabled?: boolean
    /** Dialog-hosted callers only: renders a "Close" action on the post-submission screen. */
    onClose?: () => void
  },
): {
  content: ReactNode
  actions?: ReactNode
} {
  const { datasetCode, datasetName, onSubmitted } = props
  // Callers that only conditionally show this wizard (e.g. a closed dialog) pass `enabled:
  // false` so its network requests, and the "editing" flag below, stay dormant until shown.
  const enabled = options?.enabled ?? true
  const { draft, setDraft, clearDraft } = useDarDraft(datasetCode)
  const [submitted, setSubmitted] = useState<{
    code: string
    status?: string
  }>()

  // Once submitted the draft is cleared and there's nothing left to lose, so don't treat the
  // wizard as "editing" anymore — callers (e.g. a hosting dialog) can let the user close freely.
  const isDirty =
    enabled &&
    !submitted &&
    (draft.step > 0 ||
      draft.selectedDictionaryCodes.length > 0 ||
      draft.workspaceRequested ||
      draft.termsAccepted ||
      Object.keys(draft.values).length > 0)
  const { setIsEditing } = useGlobalIsEditingContext()
  useEffect(() => {
    setIsEditing(isDirty)
    return () => setIsEditing(false)
  }, [isDirty, setIsEditing])

  const settingsQuery = useGetAridhiaDatasetSettings(datasetCode, { enabled })
  const workflowKey = settingsQuery.data?.workflow_key
  const workflowQuery = useGetAridhiaWorkflow(workflowKey)
  const workspaceFormQuery = useGetAridhiaWorkspaceRequestForm({
    enabled: draft.workspaceRequested && enabled,
  })
  const dictionariesQuery = useGetAridhiaDictionaries(datasetCode, {
    enabled,
  })
  const workspacesQuery = useGetAridhiaWorkspaces(
    datasetCode,
    draft.workspaceLocation,
    { enabled },
  )

  const allowedTransferTypes = useMemo<TransferType[]>(() => {
    const settings = settingsQuery.data
    if (!settings) return []
    return TRANSFER_TYPE_PRIORITY.filter(
      type => settings[`allow_${type}` as const] === true,
    )
  }, [settingsQuery.data])

  // Default transfer_type to the first allowed option once settings load.
  useEffect(() => {
    if (!draft.transferType && allowedTransferTypes.length > 0) {
      setDraft(previous => ({
        ...previous,
        transferType: allowedTransferTypes[0],
      }))
    }
  }, [allowedTransferTypes, draft.transferType, setDraft])

  const aboutRjsf = useMemo(() => {
    const section = parseFairFormSections(workflowQuery.data).find(
      s => s.key === 'about',
    )
    return section ? fairSectionToRjsf(section) : undefined
  }, [workflowQuery.data])

  const projectRjsf = useMemo(() => {
    const section = parseFairFormSections(workflowQuery.data).find(
      s => s.key === 'project',
    )
    return section ? fairSectionToRjsf(section) : undefined
  }, [workflowQuery.data])

  const workspaceRjsf = useMemo(() => {
    const section = parseFairFormSections(workspaceFormQuery.data).find(
      s => s.key === 'workspace',
    )
    return section ? fairSectionToRjsf(section) : undefined
  }, [workspaceFormQuery.data])

  const unsupportedFields: FairField[] = useMemo(() => {
    return [
      ...(aboutRjsf?.unsupported ?? []),
      ...(projectRjsf?.unsupported ?? []),
      ...(draft.workspaceRequested ? (workspaceRjsf?.unsupported ?? []) : []),
    ]
  }, [aboutRjsf, projectRjsf, workspaceRjsf, draft.workspaceRequested])

  const submitMutation = useSubmitAridhiaDar({
    onSuccess: data => {
      clearDraft()
      const code = data.code ?? draft.code
      setSubmitted({ code, status: data.status })
      onSubmitted?.(code)
    },
  })

  if (settingsQuery.isLoading) {
    return { content: <Skeleton height={400} /> }
  }

  if (settingsQuery.isError || !settingsQuery.data) {
    return {
      content: (
        <Alert severity="error">
          Unable to load this dataset&apos;s access settings. Please try again
          later.
        </Alert>
      ),
    }
  }

  if (allowedTransferTypes.length === 0) {
    return {
      content: (
        <Alert severity="error">
          This dataset cannot currently be requested.
        </Alert>
      ),
    }
  }

  if (submitted) {
    return {
      content: (
        <DarSubmittedPanel
          requestCode={submitted.code}
          status={submitted.status}
        />
      ),
      actions: options?.onClose && (
        <Button variant="contained" onClick={options.onClose}>
          Close
        </Button>
      ),
    }
  }

  type StepKey = 'destination' | 'workspace' | 'project' | 'about' | 'complete'
  const stepKeys: readonly StepKey[] = draft.workspaceRequested
    ? ['destination', 'workspace', 'project', 'about', 'complete']
    : ['destination', 'project', 'about', 'complete']
  const currentStepKey: StepKey =
    stepKeys[Math.min(draft.step, stepKeys.length - 1)]

  // Matches RDCA-DAP's own UI: selecting no tables is equivalent to selecting every table.
  const allDictionaries = (dictionariesQuery.data?.items ?? []).filter(
    (d): d is { code: string; name: string } => !!d.code,
  )
  const selectedDictionaries =
    draft.selectedDictionaryCodes.length > 0
      ? allDictionaries.filter(d =>
          draft.selectedDictionaryCodes.includes(d.code),
        )
      : allDictionaries
  const workspaceName = (workspacesQuery.data?.items ?? []).find(
    w => w.uuid === draft.workspaceUuid,
  )?.name
  // The Destination step only asks the user to pick a transfer type when there's more than
  // one allowed option — don't show a value on the review step for a question never asked.
  const showTransferType = allowedTransferTypes.length > 1
  const aboutAnswers = aboutRjsf
    ? summarizeFormAnswers(aboutRjsf.schema, draft.values)
    : []
  const projectAnswers = projectRjsf
    ? summarizeFormAnswers(projectRjsf.schema, draft.values)
    : []

  function canAdvanceFrom(stepKey: StepKey): boolean {
    switch (stepKey) {
      case 'destination':
        return (
          !!draft.transferType &&
          (draft.workspaceRequested || !!draft.workspaceUuid)
        )
      case 'workspace':
        return (
          !workspaceFormQuery.isLoading &&
          !!draft.workspaceReference?.trim() &&
          (!workspaceRjsf ||
            isSectionComplete(workspaceRjsf.schema, draft.values))
        )
      case 'about':
        return (
          !workflowQuery.isLoading &&
          (!aboutRjsf || isSectionComplete(aboutRjsf.schema, draft.values))
        )
      case 'project':
        return (
          !workflowQuery.isLoading &&
          (!projectRjsf || isSectionComplete(projectRjsf.schema, draft.values))
        )
      case 'complete':
        return draft.termsAccepted
    }
  }

  function goToStep(index: number) {
    setDraft(previous => ({ ...previous, step: index }))
  }

  function mergeValues(next: Record<string, unknown>) {
    setDraft(previous => ({
      ...previous,
      values: { ...previous.values, ...next },
    }))
  }

  function handleSubmit() {
    const { name, code: _formCode, ...fields } = draft.values
    submitMutation.mutate({
      code: draft.code,
      name: (name as string) ?? '',
      fields,
      transferType: draft.transferType!,
      workspaceRequested: draft.workspaceRequested,
      workspaceUuid: draft.workspaceUuid,
      workspaceReference: draft.workspaceReference,
      selectedDictionaries,
    })
  }

  const stepIndex = stepKeys.indexOf(currentStepKey)
  const canAdvance = canAdvanceFrom(currentStepKey)

  const content = (
    <>
      {unsupportedFields.length > 0 && (
        <Alert severity="error" sx={{ mb: 2 }}>
          This request form includes field types the portal cannot render yet (
          {unsupportedFields.map(f => f.name).join(', ')}). Please contact
          support — submission is disabled until this is resolved.
        </Alert>
      )}
      {currentStepKey === 'destination' && (
        <DarDestinationStep
          datasetCode={datasetCode}
          allowedTransferTypes={allowedTransferTypes}
          selectedDictionaryCodes={draft.selectedDictionaryCodes}
          onSelectedDictionaryCodesChange={codes =>
            setDraft(previous => ({
              ...previous,
              selectedDictionaryCodes: codes,
            }))
          }
          workspaceRequested={draft.workspaceRequested}
          workspaceLocation={draft.workspaceLocation}
          workspaceUuid={draft.workspaceUuid}
          onWorkspaceChange={change =>
            setDraft(previous => {
              const next = { ...previous, ...change }
              if (previous.workspaceRequested && !change.workspaceRequested) {
                // Switching from "request a new workspace" back to an existing one: drop
                // whatever was entered into the new-workspace form so it isn't submitted
                // against the existing-workspace's schema (that form's fields aren't valid
                // there). RDCA-DAP's workspace form re-asks some fields already collected by
                // the About/Project steps (e.g. `project_name`) — those answers still belong
                // to their own step and must survive, so only drop fields unique to the
                // workspace form.
                const sharedFieldNames = new Set([
                  ...Object.keys(aboutRjsf?.schema.properties ?? {}),
                  ...Object.keys(projectRjsf?.schema.properties ?? {}),
                ])
                const workspaceOnlyFieldNames = Object.keys(
                  workspaceRjsf?.schema.properties ?? {},
                ).filter(name => !sharedFieldNames.has(name))
                next.values = Object.fromEntries(
                  Object.entries(previous.values).filter(
                    ([key]) => !workspaceOnlyFieldNames.includes(key),
                  ),
                )
                next.workspaceReference = undefined
              }
              return next
            })
          }
          transferType={draft.transferType ?? allowedTransferTypes[0]}
          onTransferTypeChange={transferType =>
            setDraft(previous => ({ ...previous, transferType }))
          }
        />
      )}

      {currentStepKey === 'workspace' &&
        (workspaceFormQuery.isLoading ? (
          <Skeleton height={200} />
        ) : workspaceRjsf ? (
          <DarWorkspaceStep
            schema={workspaceRjsf.schema}
            uiSchema={workspaceRjsf.uiSchema}
            formData={draft.values}
            onChange={mergeValues}
            reference={draft.workspaceReference ?? ''}
            onReferenceChange={reference =>
              setDraft(previous => ({
                ...previous,
                workspaceReference: reference,
              }))
            }
          />
        ) : (
          <Alert severity="error">
            Unable to load the new-workspace request form. Please try again
            later.
          </Alert>
        ))}

      {currentStepKey === 'project' &&
        (workflowQuery.isLoading ? (
          <Skeleton height={200} />
        ) : projectRjsf ? (
          <DarProjectStep
            schema={projectRjsf.schema}
            uiSchema={projectRjsf.uiSchema}
            formData={draft.values}
            onChange={mergeValues}
          />
        ) : (
          <Alert severity="error">
            Unable to load the project section of this request form. Please try
            again later.
          </Alert>
        ))}

      {currentStepKey === 'about' &&
        (workflowQuery.isLoading ? (
          <Skeleton height={200} />
        ) : aboutRjsf ? (
          <DarAboutStep
            schema={aboutRjsf.schema}
            uiSchema={aboutRjsf.uiSchema}
            formData={draft.values}
            onChange={mergeValues}
          />
        ) : (
          <Alert severity="error">
            Unable to load the &quot;about you&quot; section of this request
            form. Please try again later.
          </Alert>
        ))}

      {currentStepKey === 'complete' && (
        <DarCompleteStep
          datasetCode={datasetCode}
          datasetName={datasetName}
          selectedDictionaryNames={selectedDictionaries.map(
            d => d.name ?? d.code,
          )}
          allTablesSelected={draft.selectedDictionaryCodes.length === 0}
          workspaceRequested={draft.workspaceRequested}
          workspaceName={workspaceName}
          workspaceReference={draft.workspaceReference}
          showTransferType={showTransferType}
          transferType={draft.transferType ?? allowedTransferTypes[0]}
          aboutAnswers={aboutAnswers}
          projectAnswers={projectAnswers}
          termsAccepted={draft.termsAccepted}
          onTermsAcceptedChange={accepted =>
            setDraft(previous => ({ ...previous, termsAccepted: accepted }))
          }
        />
      )}

      {submitMutation.isError && (
        <Alert
          severity="error"
          sx={{ mt: 2 }}
          action={
            (submitMutation.error?.httpStatus ?? 0) >= 500 ||
            !submitMutation.error?.httpStatus ? (
              <Button color="inherit" size="small" onClick={handleSubmit}>
                Retry
              </Button>
            ) : undefined
          }
        >
          {submitMutation.error?.message ??
            'The request could not be submitted.'}
        </Alert>
      )}
    </>
  )

  const actions = (
    <>
      <Button
        disabled={stepIndex === 0}
        onClick={() => goToStep(stepIndex - 1)}
      >
        Back
      </Button>
      {currentStepKey === 'complete' ? (
        <Button
          variant="contained"
          disabled={
            !canAdvance ||
            unsupportedFields.length > 0 ||
            submitMutation.isPending
          }
          onClick={handleSubmit}
        >
          Submit request
        </Button>
      ) : (
        <Button
          variant="contained"
          disabled={!canAdvance || unsupportedFields.length > 0}
          onClick={() => goToStep(stepIndex + 1)}
        >
          Next
        </Button>
      )}
    </>
  )

  return { content, actions }
}

/**
 * Full-page/standalone entry point for the DAR wizard: renders the step content and its
 * Back/Next/Submit navigation inline in a single scrolling column.
 *
 * Dialog-hosted callers (e.g. `AridhiaAccessStatus`) should use `useAridhiaDarWizardParts`
 * directly instead, so the navigation buttons can be placed in a real MUI `DialogActions`
 * footer rather than nested inside the scrollable dialog content.
 */
export function AridhiaDarWizard(props: AridhiaDarWizardProps) {
  const { content, actions } = useAridhiaDarWizardParts(props)
  return (
    <Box sx={{ width: '100%' }}>
      {content}
      {actions && (
        <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 3 }}>
          {actions}
        </Box>
      )}
    </Box>
  )
}

export { useAridhiaDarWizardParts }
