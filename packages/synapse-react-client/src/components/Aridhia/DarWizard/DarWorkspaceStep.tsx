import { Stack, TextField, Typography } from '@mui/material'
import { DarFormSectionStepProps, DarSectionForm } from './DarSectionForm'

export type DarWorkspaceStepProps = DarFormSectionStepProps & {
  /** RDCA-DAP's "Reference" field: a free-text identifier for the new workspace. Sent as
   * `RequestPost.workspace_reference` — a sibling of the DAR submission, not part of the
   * dynamic `workspace_request` form's answers, so it's tracked separately from `formData`. */
  reference: string
  onReferenceChange: (reference: string) => void
}

/**
 * Renders the FAIR `workspace_request` form: shown only when the user asked for a new
 * workspace instead of picking an existing one. Its answers merge into the same flat `fields`
 * map as every other section on submit. The leading "Reference" field is not part of that
 * dynamic form (see `DarWorkspaceStepProps.reference`).
 */
export function DarWorkspaceStep(props: DarWorkspaceStepProps) {
  const { reference, onReferenceChange, ...sectionProps } = props
  return (
    <Stack spacing={1}>
      <Typography variant="h6">New workspace details</Typography>
      <Typography variant="subtitle1" color="text.secondary">
        Tell us about the workspace you&apos;d like to provision in RDCA-DAP.
      </Typography>
      <TextField
        label="Reference"
        placeholder="Enter a reference that you can use to identify this workspace"
        value={reference}
        onChange={e => onReferenceChange(e.target.value)}
        required
      />
      <DarSectionForm {...sectionProps} />
    </Stack>
  )
}
