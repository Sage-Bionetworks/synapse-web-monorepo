import StyledFormControl from '@/components/styled/StyledFormControl'
import {
  Box,
  InputBase,
  InputLabel,
  TextFieldProps as MuiTextFieldProps,
  Typography,
} from '@mui/material'
import styles from './TextField.module.scss'
import { PropsWithChildren, useId, useMemo } from 'react'

export type TextFieldProps = Pick<
  MuiTextFieldProps,
  | 'autoComplete'
  | 'autoFocus'
  | 'disabled'
  | 'error'
  | 'fullWidth'
  | 'helperText'
  | 'id'
  | 'inputProps'
  | 'label'
  | 'maxRows'
  | 'minRows'
  | 'multiline'
  | 'onBlur'
  | 'onChange'
  | 'placeholder'
  | 'required'
  | 'rows'
  | 'sx'
  | 'type'
  | 'value'
> & { noWrapInFormControl?: boolean; maxCharacterCount?: number }

/**
 * A styled text field built using MUI components and designed to match the Sage Design System (SDS) input fields.
 */
export default function TextField(props: TextFieldProps) {
  const id = useId()
  const {
    noWrapInFormControl,
    label: _label,
    helperText,
    maxCharacterCount,
    inputProps: inputPropsProp,
    ...rest
  } = props
  const mergedInputProps = maxCharacterCount
    ? { ...inputPropsProp, maxLength: maxCharacterCount }
    : inputPropsProp
  const currentLength = typeof rest.value === 'string' ? rest.value.length : 0
  const Wrapper = useMemo(
    () =>
      noWrapInFormControl
        ? (props: PropsWithChildren<object>) => <>{props.children}</>
        : (props: PropsWithChildren<object>) => (
            <StyledFormControl fullWidth sx={{ my: 1 }}>
              {props.children}
            </StyledFormControl>
          ),
    [noWrapInFormControl],
  )
  return (
    <Wrapper>
      {(props.label || helperText) && (
        <Box className={styles.labelRow}>
          {props.label && (
            <InputLabel
              htmlFor={props.id || id}
              className={styles.inputLabel}
              sx={{
                '&::after': ({ palette }) => ({
                  content: props.required ? '"*"' : undefined,
                  marginLeft: '3px',
                  color: palette.secondary.main,
                }),
              }}
            >
              {props.label}
            </InputLabel>
          )}
          {helperText && (
            <Typography variant="body2" className={styles.helperText}>
              {helperText}
            </Typography>
          )}
        </Box>
      )}
      <InputBase id={id} inputProps={mergedInputProps} {...rest}></InputBase>
      {maxCharacterCount !== undefined && (
        <Typography variant="body2" className={styles.charCount}>
          {currentLength}/{maxCharacterCount}
        </Typography>
      )}
    </Wrapper>
  )
}
