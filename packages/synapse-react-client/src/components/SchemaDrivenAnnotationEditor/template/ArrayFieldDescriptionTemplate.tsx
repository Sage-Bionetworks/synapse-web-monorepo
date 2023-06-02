import React from 'react'
import {
  getTemplate,
  getUiOptions,
  ArrayFieldDescriptionProps,
  FormContextType,
  RJSFSchema,
  StrictRJSFSchema,
} from '@rjsf/utils'

/** The `ArrayFieldDescriptionTemplate` component renders a `DescriptionFieldTemplate` with an `id` derived from
 * the `idSchema`.
 *
 * Identical to @rjsf/core ArrayFieldDescriptionTemplate except doesn't render null if there is no description
 * @param props - The `ArrayFieldDescriptionProps` for the component
 */
export default function ArrayFieldDescriptionTemplate<
  T = any,
  S extends StrictRJSFSchema = RJSFSchema,
  F extends FormContextType = any,
>(props: ArrayFieldDescriptionProps<T, S, F>) {
  const { idSchema, description, registry, schema, uiSchema } = props
  const options = getUiOptions<T, S, F>(uiSchema, registry.globalUiOptions)
  const { label: displayLabel } = options
  if (displayLabel === false) {
    return null
  }

  const DescriptionFieldTemplate = getTemplate<
    'DescriptionFieldTemplate',
    T,
    S,
    F
  >('DescriptionFieldTemplate', registry, options)
  const id = `${idSchema.$id}__description`
  return (
    <DescriptionFieldTemplate
      id={id}
      description={description ?? ''}
      schema={schema}
      uiSchema={uiSchema}
      registry={registry}
    />
  )
}
