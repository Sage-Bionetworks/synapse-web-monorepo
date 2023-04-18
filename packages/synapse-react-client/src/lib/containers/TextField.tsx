import React, { useId, useMemo } from 'react'
import {
  Box,
  InputBase,
  InputLabel,
  TextFieldProps as MuiTextFieldProps,
} from '@mui/material'
import StyledFormControl from '../components/styled/StyledFormControl'

type TextFieldProps = Pick<
  MuiTextFieldProps,
  | 'autoComplete'
  | 'autoFocus'
  | 'disabled'
  | 'error'
  | 'fullWidth'
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
> & { noWrapInFormControl?: boolean }

/**
 * A styled text field built using MUI components and designed to match the Sage Design System (SDS) input fields.
 */
export default function TextField(props: TextFieldProps) {
  const id = useId()
  const { noWrapInFormControl, label, ...rest } = props
  const Wrapper = useMemo(
    () =>
      noWrapInFormControl
        ? (props: React.PropsWithChildren<object>) => (
            <React.Fragment>{props.children}</React.Fragment>
          )
        : (props: React.PropsWithChildren<object>) => (
            <StyledFormControl fullWidth sx={{ my: 1 }}>
              {props.children}
            </StyledFormControl>
          ),
    [noWrapInFormControl],
  )
  return (
    <Wrapper>
      {props.label && (
        <InputLabel
          htmlFor={props.id || id}
          sx={{ fontWeight: 700, mb: '4px', pointerEvents: 'unset' }}
        >
          {props.label}
          {props.required ? (
            <Box component={'span'} sx={{ ml: '3px', color: 'secondary.main' }}>
              {'*'}
            </Box>
          ) : (
            <></>
          )}
        </InputLabel>
      )}
      <InputBase id={id} {...rest}></InputBase>
    </Wrapper>
  )
}
