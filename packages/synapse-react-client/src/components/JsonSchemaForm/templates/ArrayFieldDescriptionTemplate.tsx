import {
  ArrayFieldDescriptionProps,
  descriptionId,
  FormContextType,
  getTemplates,
  getUiOptions,
  RJSFSchema,
  StrictRJSFSchema,
} from '@rjsf/utils'

/** The `ArrayFieldDescriptionTemplate` component renders a `DescriptionFieldTemplate` with an `id` derived from
 * the array's `id`.
 *
 * Identical to @rjsf/core ArrayFieldDescriptionTemplate except this renders something if there is no description.
 * Our description field also includes the type, so it should always be rendered.
 * @param props - The `ArrayFieldDescriptionProps` for the component
 */
export default function ArrayFieldDescriptionTemplate<
  T = any,
  S extends StrictRJSFSchema = RJSFSchema,
  F extends FormContextType = any,
>(props: ArrayFieldDescriptionProps<T, S, F>) {
  const { id, description, registry, schema, uiSchema } = props
  const options = getUiOptions<T, S, F>(uiSchema, registry.globalUiOptions)
  const { label: displayLabel } = options
  if (displayLabel === false) {
    return null
  }

  const { DescriptionFieldTemplate } = getTemplates<T, S, F>(registry, options)
  return (
    <DescriptionFieldTemplate
      id={descriptionId(id)}
      description={description ?? ''}
      schema={schema}
      uiSchema={uiSchema}
      registry={registry}
    />
  )
}
