import { Add, ArrowDownward, ArrowUpward, Close } from '@mui/icons-material'
import React from 'react'
import { Button, IconButton, SxProps } from '@mui/material'
import ContentCopyIcon from '@mui/icons-material/ContentCopy'
import {
  FormContextType,
  IconButtonProps,
  RJSFSchema,
  StrictRJSFSchema,
  TranslatableString,
} from '@rjsf/utils'

const buttonSx: SxProps = { minWidth: 'unset', width: '40px', height: '40px' }

export function AddButton<
  T = any,
  S extends StrictRJSFSchema = RJSFSchema,
  F extends FormContextType = any,
>({ uiSchema, registry, ...props }: IconButtonProps<T, S, F>) {
  const { translateString } = registry
  return (
    <Button
      title={translateString(TranslatableString.AddItemButton)}
      {...props}
      color="primary"
      variant={'contained'}
      sx={buttonSx}
    >
      <Add />
    </Button>
  )
}

type IconButtonTemplateProps = {
  buttonType: 'copy' | 'moveUp' | 'moveDown' | 'remove'
}

function getIcon(buttonType: IconButtonTemplateProps['buttonType']) {
  switch (buttonType) {
    case 'copy':
      return <ContentCopyIcon fontSize="inherit" />
    case 'moveUp':
      return <ArrowUpward fontSize="inherit" />
    case 'moveDown':
      return <ArrowDownward fontSize="inherit" />
    case 'remove':
      return <Close fontSize="inherit" />
    default:
      throw new Error(`Unexpected iconType ${buttonType}`)
  }
}

function IconButtonTemplate<
  T = any,
  S extends StrictRJSFSchema = RJSFSchema,
  F extends FormContextType = any,
>(props: IconButtonProps<T, S, F> & IconButtonTemplateProps) {
  const { iconType, buttonType, uiSchema, ...otherProps } = props

  return (
    <IconButton {...otherProps} color={'default'} sx={buttonSx}>
      {getIcon(buttonType)}
    </IconButton>
  )
}

export function RemoveButton<
  T = any,
  S extends StrictRJSFSchema = RJSFSchema,
  F extends FormContextType = any,
>(props: IconButtonProps<T, S, F>) {
  const {
    registry: { translateString },
  } = props
  return (
    <IconButtonTemplate<T, S, F>
      title={translateString(TranslatableString.RemoveButton)}
      {...props}
      buttonType={'remove'}
    />
  )
}

export function CopyButton<
  T = any,
  S extends StrictRJSFSchema = RJSFSchema,
  F extends FormContextType = any,
>(props: IconButtonProps<T, S, F>) {
  const {
    registry: { translateString },
  } = props
  return (
    <IconButtonTemplate<T, S, F>
      title={translateString(TranslatableString.CopyButton)}
      {...props}
      buttonType={'copy'}
    />
  )
}

export function MoveUpButton<
  T = any,
  S extends StrictRJSFSchema = RJSFSchema,
  F extends FormContextType = any,
>(props: IconButtonProps<T, S, F>) {
  const {
    registry: { translateString },
  } = props
  return (
    <IconButtonTemplate<T, S, F>
      title={translateString(TranslatableString.MoveUpButton)}
      {...props}
      buttonType={'moveUp'}
    />
  )
}

export function MoveDownButton<
  T = any,
  S extends StrictRJSFSchema = RJSFSchema,
  F extends FormContextType = any,
>(props: IconButtonProps<T, S, F>) {
  const {
    registry: { translateString },
  } = props
  return (
    <IconButtonTemplate<T, S, F>
      title={translateString(TranslatableString.MoveDownButton)}
      {...props}
      buttonType={'moveDown'}
    />
  )
}

export default {
  AddButton,
  RemoveButton,
  MoveUpButton,
  MoveDownButton,
  CopyButton,
}
