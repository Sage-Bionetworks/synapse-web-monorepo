import { CustomFormContext } from '@/components/JsonSchemaForm/CustomFormContext'
import { ChangeEvent, FocusEvent } from 'react'
import TextField, { TextFieldProps } from '@mui/material/TextField'
import { SchemaExamples } from '@rjsf/core'
import {
  BaseInputTemplateProps,
  examplesId,
  FormContextType,
  getBaseInputProps,
  getControlAttributes,
  getExampleSuggestions,
  getSchemaType,
  hasWidgetErrors,
  RJSFSchema,
  StrictRJSFSchema,
  toInputValue,
} from '@rjsf/utils'

const TYPES_THAT_SHRINK_LABEL = new Set([
  'date',
  'datetime-local',
  'file',
  'time',
])

/** The `BaseInputTemplate` is the template to use to render the basic `<input>` component for the `core` theme.
 * It is used as the template for rendering many of the <input> based widgets that differ by `type` and callbacks only.
 * It can be customized/overridden for other themes or individual implementations as needed.
 *
 * `FieldTemplate` draws the label, so this draws none. A `number`/`integer` field keeps a native number input, with the
 * schema's `minimum`, `maximum` and `multipleOf` on it, unless `ui:options.inputType` says otherwise.
 *
 * @param props - The `WidgetProps` for this template
 */
export default function BaseInputTemplate<
  T = any,
  S extends StrictRJSFSchema = RJSFSchema,
  F extends FormContextType = any,
>(props: BaseInputTemplateProps<T, S, F>) {
  const {
    id,
    htmlName,
    placeholder: placeholderFromProps,
    required: _required,
    readonly,
    disabled,
    type,
    label: _label,
    hideLabel: _hideLabel,
    hideError: _hideError,
    value,
    onChange,
    onChangeOverride,
    onBlur,
    onFocus,
    autofocus,
    options,
    schema,
    uiSchema: _uiSchema,
    rawErrors: _rawErrors,
    errorSchema: _errorSchema,
    registry,
    presentation,
    // Attributes of the `<input>`, which `TextField` would otherwise put on its root
    pattern: _pattern,
    accept: _accept,
    inputMode: _inputMode,
    multiple: _multiple,
    name: _name,
    ...textFieldProps
  } = props
  const schemaType = getSchemaType(schema)
  const isNumeric = schemaType === 'number' || schemaType === 'integer'
  const { title, step, min, max, accept, inputMode, pattern, ...inputProps } =
    getBaseInputProps<T, S, F>({
      ...props,
      options:
        isNumeric && !options.inputType && !type
          ? { ...options, inputType: 'number' }
          : options,
    })
  const exampleSuggestions = getExampleSuggestions<S>(schema)
  const hasExamples = exampleSuggestions.length > 0
  // The step, min and max belong on the inner <input>, along with the field's accessibility attributes.
  const htmlInputProps = {
    title,
    step,
    min,
    max,
    accept,
    inputMode,
    pattern,
    ...getControlAttributes<T, S, F>(
      { id, presentation },
      hasExamples ? [examplesId(id)] : [],
    ),
    ...(hasExamples ? { list: examplesId(id) } : undefined),
    'aria-label': id,
  }
  const _onChange = ({ target: { value } }: ChangeEvent<HTMLInputElement>) =>
    onChange(value === '' ? options.emptyValue : value)
  const _onBlur = ({ target }: FocusEvent<HTMLInputElement>) =>
    onBlur(id, target?.value)
  const _onFocus = ({ target }: FocusEvent<HTMLInputElement>) =>
    onFocus(id, target?.value)

  let derivedValuePlaceholder: string | undefined = undefined
  if (schema.default || schema.const) {
    derivedValuePlaceholder =
      JSON.stringify(schema.default || schema.const) + ' (derived)'
  }

  const placeholder = (registry.formContext as CustomFormContext)
    .showDerivedAnnotationPlaceholder
    ? derivedValuePlaceholder || placeholderFromProps
    : placeholderFromProps

  return (
    <>
      <TextField
        id={id}
        name={htmlName || id}
        placeholder={placeholder}
        autoFocus={autofocus}
        required={false}
        disabled={disabled || readonly}
        {...inputProps}
        value={toInputValue(value)}
        error={hasWidgetErrors<T, S, F>(props)}
        onChange={onChangeOverride || _onChange}
        onBlur={_onBlur}
        onFocus={_onFocus}
        {...(textFieldProps as TextFieldProps)}
        slotProps={{
          htmlInput: htmlInputProps,
          inputLabel: TYPES_THAT_SHRINK_LABEL.has(inputProps.type)
            ? { shrink: true }
            : undefined,
        }}
      />
      <SchemaExamples
        id={id}
        schema={schema}
        suggestions={exampleSuggestions}
      />
    </>
  )
}
