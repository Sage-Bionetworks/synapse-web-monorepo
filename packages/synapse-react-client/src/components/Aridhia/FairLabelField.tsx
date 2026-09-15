import {
  FieldProps,
  FormContextType,
  RJSFSchema,
  StrictRJSFSchema,
} from '@rjsf/utils'
import { Typography } from '@mui/material'

/**
 * Renders a FAIR `label` field (a section subheading) as an MUI subheading.
 * Registered on `JsonSchemaForm` via `fields={{ fairLabel: FairLabelField }}` and selected per
 * field with `ui:field: 'fairLabel'` (see `fairFormToRjsf.ts`).
 */
export default function FairLabelField<
  T = any,
  S extends StrictRJSFSchema = RJSFSchema,
  F extends FormContextType = any,
>(props: FieldProps<T, S, F>) {
  return <Typography variant="subtitle1">{props.schema.title}</Typography>
}
