import {
  CustomFormContext,
  FileHandleWidgetContext,
} from '@/components/JsonSchemaForm/CustomFormContext'
import { JsonSchemaForm } from '@/components/JsonSchemaForm/JsonSchemaForm'
import { FileHandleWidget } from '@/components/JsonSchemaForm/widgets/FileHandleWidget'
import {
  isMustCheckBoolean,
  MUST_CHECK_ERROR_MESSAGE,
} from '@/components/JsonSchemaForm/mustCheckBoolean'
import { GeneratedFormStepForRjsf } from '@/utils/jsonschema/generateDataAccessSchema'
import {
  getStepData,
  SchemaData,
  SYNAPSE_FILE_HANDLE_ID_FORMAT,
} from '@/utils/jsonschema/schemaData'
import RJSFForm from '@rjsf/core'
import { RJSFSchema, RJSFValidationError } from '@rjsf/utils'
import { Ref, useImperativeHandle, useMemo, useRef } from 'react'

const SCHEMA_STEP_FORM_CONTEXT: CustomFormContext = {
  descriptionVariant: 'inline',
  booleanWidget: 'yesNoRadio',
}

/** Drops the "required" errors of file questions. */
function withoutRequiredFileErrors(
  schema: RJSFSchema,
  errors: RJSFValidationError[],
): RJSFValidationError[] {
  return errors.filter(error => {
    const missingProperty: unknown = error.params?.missingProperty
    if (error.name !== 'required' || typeof missingProperty !== 'string') {
      return true
    }
    const property = schema.properties?.[missingProperty]
    return !(
      typeof property === 'object' &&
      property.format === SYNAPSE_FILE_HANDLE_ID_FORMAT
    )
  })
}

/**
 * RJSF fills a `const` property with its value by default, which would check a must-be-true box
 * for the requester; their answers start from what they gave instead.
 */
const DEFAULT_FORM_STATE_BEHAVIOR = { constAsDefaults: 'never' } as const

/**
 * Replace the validator's message for an unchecked must-be-true box ("must have required
 * property", or "must be equal to constant" for a saved `false`) with one a requester can act on.
 * A step's schema is flat, so each error's property is one of its top-level `properties`.
 */
function explainMustCheckErrors(
  stepSchema: RJSFSchema,
  errors: RJSFValidationError[],
): RJSFValidationError[] {
  return errors.map(error => {
    // The validator names the field as `.key` (a `const` error) or `key` (a `required` one).
    const propertyKey =
      error.name === 'required' || error.name === 'const'
        ? error.property?.replace(/^\./, '')
        : undefined
    const property = propertyKey
      ? stepSchema.properties?.[propertyKey]
      : undefined
    if (typeof property !== 'object' || !isMustCheckBoolean(property)) {
      return error
    }
    return { ...error, message: MUST_CHECK_ERROR_MESSAGE }
  })
}

export type SchemaStepFormHandle = {
  /** Validates the step's answers, showing errors against invalid fields. */
  submit: () => void
}

export type SchemaStepFormProps = {
  ref?: Ref<SchemaStepFormHandle>
  step: GeneratedFormStepForRjsf
  schemaData: SchemaData
  onSchemaDataChange: (schemaData: SchemaData) => void
  /** How the step's file questions upload and download files */
  fileHandleWidgetContext: FileHandleWidgetContext
  /** Invoked with the complete answers when the step's answers pass validation. */
  onValid?: (schemaData: SchemaData) => void
  /** Invoked when the step's answers fail validation; the errors are already shown against the fields. */
  onInvalid?: () => void
  /**
   * If true, a required file question does not fail validation. For forms where files cannot be uploaded (the
   * template preview), where such a question could never be answered and would block the step.
   */
  ignoreRequiredFileAnswers?: boolean
}

/**
 * A single step of a form generated from a FormTemplate, rendered as a requester sees it. The answers of all steps
 * are kept in `schemaData`; the step shows and updates only its own.
 */
export default function SchemaStepForm(props: SchemaStepFormProps) {
  const {
    ref,
    step,
    schemaData,
    onSchemaDataChange,
    onValid,
    onInvalid,
    fileHandleWidgetContext,
    ignoreRequiredFileAnswers = false,
  } = props
  const formRef = useRef<RJSFForm>(null)
  const formContext = useMemo<CustomFormContext>(
    () => ({
      ...SCHEMA_STEP_FORM_CONTEXT,
      fileHandleWidget: fileHandleWidgetContext,
    }),
    [fileHandleWidgetContext],
  )

  useImperativeHandle(ref, () => ({
    submit: () => formRef.current?.submit(),
  }))

  return (
    <JsonSchemaForm
      formRef={formRef}
      schema={step.jsonSchema}
      uiSchema={step.uiSchema}
      formData={getStepData(schemaData, step)}
      formContext={formContext}
      // A property with this format is a number in the schema, and the widget is chosen by its format
      widgets={{ [SYNAPSE_FILE_HANDLE_ID_FORMAT]: FileHandleWidget }}
      liveValidate={false}
      experimental_defaultFormStateBehavior={DEFAULT_FORM_STATE_BEHAVIOR}
      transformErrors={errors =>
        explainMustCheckErrors(
          step.jsonSchema,
          ignoreRequiredFileAnswers
            ? withoutRequiredFileErrors(step.jsonSchema, errors)
            : errors,
        )
      }
      onChange={event =>
        onSchemaDataChange({ ...schemaData, ...event.formData })
      }
      onSubmit={event =>
        onValid?.({ ...schemaData, ...(event.formData as SchemaData) })
      }
      onError={onInvalid}
    >
      <></>
    </JsonSchemaForm>
  )
}
