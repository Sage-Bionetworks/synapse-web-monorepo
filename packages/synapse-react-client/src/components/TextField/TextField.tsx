import {
  Box,
  inputBaseClasses,
  TextField as MuiTextField,
  TextFieldProps as MuiTextFieldProps,
  Typography,
} from '@mui/material'
import styles from './TextField.module.scss'
import FieldDescription from '@/components/FieldDescription'
import { ReactNode, useId } from 'react'

export type TextFieldProps = MuiTextFieldProps & {
  /**
   * Neutral supplementary text shown below the label and above the input (similar to an inline tooltip).
   * Always rendered in a neutral color regardless of form state.
   * For error or status messages, use `helperText` instead.
   */
  description?: ReactNode
  maxCharacterCount?: number
}

/**
 * A styled text field built using MUI components and designed to match the Sage Design System (SDS) input fields.
 *
 * - `label`: Bold label text above the input. Changes color on focus/error/disabled states.
 * - `description`: Neutral supplementary text shown below the label, above the input. Always neutral color.
 * - `helperText`: Status or error message shown below the input. Color-reactive to form state.
 * - `maxCharacterCount`: Renders a character count indicator below the input and sets the `maxLength` on the input.
 */
export default function TextField({
  description,
  maxCharacterCount,
  slotProps,
  id: idProp,
  label,
  fullWidth = true,
  className,
  sx,
  value,
  ...rest
}: TextFieldProps) {
  const generatedId = useId()
  const id = idProp ?? generatedId

  const currentLength = typeof value === 'string' ? value.length : 0

  const compositeLabel =
    label != null || description != null ? (
      <>
        {label}
        {description != null && (
          <FieldDescription className={styles.description}>
            {description}
          </FieldDescription>
        )}
      </>
    ) : undefined

  return (
    <Box className={className} sx={sx}>
      <MuiTextField
        id={id}
        variant="standard"
        label={compositeLabel}
        fullWidth={fullWidth}
        value={value}
        sx={{
          [`& .${inputBaseClasses.root}`]: {
            // The theme default applies spacing(3) for the floating-label pattern (absolute
            // positioned label). Our label is in document flow (position: relative), so it
            // already occupies vertical space — no top margin needed on the input.
            marginTop: 0,
          },
        }}
        slotProps={{
          ...slotProps,
          htmlInput: {
            maxLength: maxCharacterCount,
            ...slotProps?.htmlInput,
          },
          inputLabel: {
            className: styles.inputLabel,
            ...slotProps?.inputLabel,
          },
          input: {
            disableUnderline: true,
            ...slotProps?.input,
          },
        }}
        {...rest}
      />
      {maxCharacterCount !== undefined && (
        <Typography variant="body2" className={styles.charCount}>
          {currentLength}/{maxCharacterCount}
        </Typography>
      )}
    </Box>
  )
}
