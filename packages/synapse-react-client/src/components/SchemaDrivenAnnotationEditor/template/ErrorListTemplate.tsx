import { Alert } from '@mui/material'
import {
  ErrorListProps,
  FormContextType,
  RJSFSchema,
  RJSFValidationError,
  StrictRJSFSchema,
} from '@rjsf/utils'
import { getFriendlyPropertyName } from '../AnnotationEditorUtils'
import React from 'react'

export default function ErrorListTemplate<
  T = any,
  S extends StrictRJSFSchema = RJSFSchema,
  F extends FormContextType = any,
>(props: ErrorListProps<T, S, F>) {
  const { errors } = props
  return (
    <Alert severity="error" sx={{ my: 2 }}>
      <b>Validation errors found:</b>
      <ul>
        {errors.map((e: RJSFValidationError, index: number) => {
          return (
            <li key={index}>
              <b>{`${getFriendlyPropertyName(e)}: `}</b> {`${e.message}`}
            </li>
          )
        })}
      </ul>
    </Alert>
  )
}
