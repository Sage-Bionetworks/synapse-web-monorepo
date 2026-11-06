import { CustomFormContext } from '@/components/JsonSchemaForm/CustomFormContext'
import { JsonSchemaForm } from '@/components/JsonSchemaForm/JsonSchemaForm'
import { GeneratedFormStepForRjsf } from '@/utils/jsonschema/generateDataAccessSchema'
import { getStepData, SchemaData } from '@/utils/jsonschema/schemaData'
import RJSFForm from '@rjsf/core'
import { Ref, useImperativeHandle, useRef } from 'react'

const SCHEMA_STEP_FORM_CONTEXT: CustomFormContext = {
  descriptionVariant: 'inline',
  booleanWidget: 'yesNoRadio',
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
  /** Invoked with the complete answers when the step's answers pass validation. */
  onValid?: (schemaData: SchemaData) => void
  /** Invoked when the step's answers fail validation; the errors are already shown against the fields. */
  onInvalid?: () => void
}

/**
 * A single step of a form generated from a FormTemplate, rendered as a requester sees it. The answers of all steps
 * are kept in `schemaData`; the step shows and updates only its own.
 */
export default function SchemaStepForm(props: SchemaStepFormProps) {
  const { ref, step, schemaData, onSchemaDataChange, onValid, onInvalid } =
    props
  const formRef = useRef<RJSFForm>(null)

  useImperativeHandle(ref, () => ({
    submit: () => formRef.current?.submit(),
  }))

  return (
    <JsonSchemaForm
      formRef={formRef}
      schema={step.jsonSchema}
      uiSchema={step.uiSchema}
      formData={getStepData(schemaData, step)}
      formContext={SCHEMA_STEP_FORM_CONTEXT}
      liveValidate={false}
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
