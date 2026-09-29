import { JsonSchemaForm } from '@/components/JsonSchemaForm/JsonSchemaForm'
import { GeneratedFormStepForRjsf } from '@/utils/jsonschema/generateDataAccessSchema'
import RJSFForm from '@rjsf/core'
import { Ref, useImperativeHandle, useRef } from 'react'
import { getStepData, SchemaData } from './schemaData'

export type SchemaStepFormHandle = {
  /** Validates the step's answers, showing errors against invalid fields. */
  submit: () => void
}

export type SchemaStepFormProps = {
  ref: Ref<SchemaStepFormHandle>
  step: GeneratedFormStepForRjsf
  schemaData: SchemaData
  onSchemaDataChange: (schemaData: SchemaData) => void
  /** Invoked with the complete answers when the step's answers pass validation. */
  onValid: (schemaData: SchemaData) => void
}

/**
 * A single schema-driven step of the request wizard.
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
        onValid({ ...schemaData, ...(event.formData as SchemaData) })
      }
    >
      <></>
    </JsonSchemaForm>
  )
}
