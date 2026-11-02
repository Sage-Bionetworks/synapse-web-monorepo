import { FileHandleWidgetContext } from '@/components/JsonSchemaForm/CustomFormContext'
import { JsonSchemaForm } from '@/components/JsonSchemaForm/JsonSchemaForm'
import { FileHandleWidget } from '@/components/JsonSchemaForm/widgets/FileHandleWidget'
import { GeneratedFormStepForRjsf } from '@/utils/jsonschema/generateDataAccessSchema'
import {
  getStepData,
  SchemaData,
  SYNAPSE_FILE_HANDLE_ID_FORMAT,
} from '@/utils/jsonschema/schemaData'
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
  /** How the step's file questions upload and download files */
  fileHandleWidgetContext: FileHandleWidgetContext
  /** Invoked with the complete answers when the step's answers pass validation. */
  onValid?: (schemaData: SchemaData) => void
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
    fileHandleWidgetContext,
  } = props
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
      formContext={{
        descriptionVariant: 'inline',
        fileHandleWidget: fileHandleWidgetContext,
      }}
      // A property with this format is a number in the schema, and the widget is chosen by its format
      widgets={{ [SYNAPSE_FILE_HANDLE_ID_FORMAT]: FileHandleWidget }}
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
