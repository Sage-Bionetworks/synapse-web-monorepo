import React, { useEffect } from 'react'
import { getDefaultRegistry } from '@rjsf/core'
import { objectFieldComponentDidUpdate } from '../AnnotationEditorUtils'
import {
  FieldProps,
  FormContextType,
  RJSFSchema,
  StrictRJSFSchema,
} from '@rjsf/utils'

/**
 * Extends the @rjsf/core `ObjectField` and just adds a custom hook for Synapse annotation business logic
 */
export function CustomObjectField<
  T = any,
  S extends StrictRJSFSchema = RJSFSchema,
  F extends FormContextType = any,
>(props: FieldProps<T, S, F>) {
  const {
    fields: { ObjectField },
  } = getDefaultRegistry<T, S, F>()

  useEffect(() => {
    objectFieldComponentDidUpdate(props)
  })

  return <ObjectField {...props} />
}

export default CustomObjectField
