import { RJSFSchema, UiSchema } from '@rjsf/utils'
import { JsonSchemaForm } from '@/components/JsonSchemaForm/JsonSchemaForm'
import { DateWidget } from '@/components/JsonSchemaForm/widgets/DateWidget'
import FairLabelField from '@/components/Aridhia/FairLabelField'

export type DarFormSectionStepProps = {
  schema: RJSFSchema
  uiSchema: UiSchema
  formData: Record<string, unknown>
  onChange: (formData: Record<string, unknown>) => void
}

/**
 * Renders one `fairSectionToRjsf` schema/uiSchema pair via `JsonSchemaForm`, with the shared
 * `JsonSchemaForm` customizations needed for the Aridhia DAR flow.
 */
export function DarSectionForm(props: DarFormSectionStepProps) {
  const { schema, uiSchema, formData, onChange } = props
  return (
    <JsonSchemaForm<Record<string, unknown>>
      schema={schema}
      uiSchema={uiSchema}
      formData={formData}
      fields={{ fairLabel: FairLabelField }}
      widgets={{ DateWidget: DateWidget }}
      formContext={{ booleanWidget: 'checkbox' }}
      onChange={({ formData: next }) => onChange(next ?? {})}
      showErrorList={false}
    >
      {/* Suppress the built-in submit button; the wizard owns navigation. */}
      <></>
    </JsonSchemaForm>
  )
}
