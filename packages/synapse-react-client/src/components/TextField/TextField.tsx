import { PropsWithChildren, useId, useMemo } from 'react'
import {
  InputBase,
  InputLabel,
  TextFieldProps as MuiTextFieldProps,
} from '@mui/material'
import StyledFormControl from '../styled/StyledFormControl'

export type TextFieldProps = Pick<
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
      {props.label && (
        <InputLabel
          htmlFor={props.id || id}
          sx={{
            fontWeight: 700,
            mb: '4px',
            pointerEvents: 'unset',
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
      <InputBase id={id} {...rest}></InputBase>
    </Wrapper>
  )
}
