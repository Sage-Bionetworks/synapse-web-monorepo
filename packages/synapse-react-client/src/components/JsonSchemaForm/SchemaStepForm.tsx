import { JsonSchemaForm } from '@/components/JsonSchemaForm/JsonSchemaForm'
import { GeneratedFormStepForRjsf } from '@/utils/jsonschema/generateDataAccessSchema'
import { getStepData, SchemaData } from '@/utils/jsonschema/schemaData'
import RJSFForm from '@rjsf/core'
import { Ref, useImperativeHandle, useRef } from 'react'

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
}

/**
 * A single step of a form generated from a FormTemplate, rendered as a requester sees it. The answers of all steps
 * are kept in `schemaData`; the step shows and updates only its own.
 */
export default function SchemaStepForm(props: SchemaStepFormProps) {
  const { ref, step, schemaData, onSchemaDataChange, onValid } = props
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
      formContext={{ descriptionVariant: 'inline' }}
      liveValidate={false}
      onChange={event =>
        onSchemaDataChange({ ...schemaData, ...event.formData })
      }
      onSubmit={event =>
        onValid?.({ ...schemaData, ...(event.formData as SchemaData) })
      }
    >
      <></>
    </JsonSchemaForm>
  )
}
