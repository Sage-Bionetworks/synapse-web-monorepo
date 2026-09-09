import { Stack, Typography } from '@mui/material'
import { DarFormSectionStepProps, DarSectionForm } from './DarSectionForm'

/** Renders the workflow's `about` section (applicant details) via `fairFormToRjsf` + `JsonSchemaForm`. */
export function DarAboutStep(props: DarFormSectionStepProps) {
  return (
    <Stack spacing={1}>
      <Typography variant="h6">About you</Typography>
      <DarSectionForm {...props} />
    </Stack>
  )
}
