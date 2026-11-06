import { Checkbox, FormControlLabel } from '@mui/material'
import { ariaDescribedByIds, WidgetProps } from '@rjsf/utils'

/**
 * A single checkbox for a boolean the schema only accepts as `true` (see `isMustCheckBoolean`),
 * labelled by the field's title. Checking stores `true`; unchecking clears the answer rather than
 * storing `false`, so the field reads as unanswered and fails `required`. `FieldTemplate` renders
 * the field's description above it.
 */
export function MustCheckWidget(props: WidgetProps) {
  const {
    id,
    value,
    label,
    required,
    disabled,
    readonly,
    autofocus,
    rawErrors = [],
  } = props
  const hasError = rawErrors.length > 0

  return (
    <FormControlLabel
      label={
        <>
          {label}
          {required && (
            // The checkbox is named by the question alone; `aria-required` conveys this marker.
            <span className="required" aria-hidden>
              *
            </span>
          )}
        </>
      }
      disabled={disabled || readonly}
      control={
        <Checkbox
          id={id}
          name={id}
          checked={value === true}
          autoFocus={autofocus}
          sx={hasError ? { color: 'error.main' } : undefined}
          onChange={(_, checked) => props.onChange(checked ? true : undefined)}
          onBlur={() => props.onBlur(id, value)}
          onFocus={() => props.onFocus(id, value)}
          // Not the native `required`, which would block submission before RJSF can explain it.
          slotProps={{
            input: {
              'aria-describedby': ariaDescribedByIds(id),
              'aria-invalid': hasError,
              'aria-required': required,
            },
          }}
        />
      }
    />
  )
}
