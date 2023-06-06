import React from 'react'
import {
  TextField as MuiTextField,
  TextFieldProps as MuiTextFieldProps,
} from '@mui/material'

export interface TextFieldProps extends MuiTextFieldProps {}

export const TextField = (props: TextFieldProps) => <MuiTextField {...props} />
