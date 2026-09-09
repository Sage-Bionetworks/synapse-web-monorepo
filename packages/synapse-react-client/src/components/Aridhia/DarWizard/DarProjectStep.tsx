import { Stack, Typography } from '@mui/material'
import { DarFormSectionStepProps, DarSectionForm } from './DarSectionForm'

/** Renders the workflow's `project` section via `fairFormToRjsf` + `JsonSchemaForm`. */
export function DarProjectStep(props: DarFormSectionStepProps) {
  return (
    <Stack spacing={1}>
      <Typography variant="h6">Your project</Typography>
      <DarSectionForm {...props} />
    </Stack>
  )
}
