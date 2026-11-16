import { useState } from 'react'
import { ErrorSchema, RJSFSchema, UiSchema } from '@rjsf/utils'
import { JsonSchemaForm } from '@/components/JsonSchemaForm/JsonSchemaForm'
import { DateWidget } from '@/components/JsonSchemaForm/widgets/DateWidget'
import { PhoneWidget } from '@/components/JsonSchemaForm/widgets/PhoneWidget'
import FairLabelField from '@/components/Aridhia/FairLabelField'
import { getFairFormatErrors } from '@/components/Aridhia/fairFormToRjsf'

export type DarFormSectionStepProps = {
  schema: RJSFSchema
  uiSchema: UiSchema
  formData: Record<string, unknown>
  onChange: (formData: Record<string, unknown>) => void
}

/** RJSF's default `idPrefix`/`idSeparator`: a top-level field's widget id is `root_<name>`. */
const FIELD_ID_PREFIX = 'root_'

/**
 * Renders one `fairSectionToRjsf` schema/uiSchema pair via `JsonSchemaForm`, with the shared
 * `JsonSchemaForm` customizations needed for the Aridhia DAR flow.
 *
 * RJSF's own validation never runs here (the wizard owns navigation and never submits the
 * form); malformed `email`/`uri`/`uuid` answers are flagged inline via `extraErrors` instead,
 * matching the wizard's own step gating.
 */
export function DarSectionForm(props: DarFormSectionStepProps) {
  const { schema, uiSchema, formData, onChange } = props
  const formatErrors = getFairFormatErrors(schema, formData)
  // Flag a field once the user leaves it rather than while they're still typing. Values that
  // arrive already malformed (e.g. from a restored draft) are flagged right away.
  const [visitedFields, setVisitedFields] = useState<ReadonlySet<string>>(
    () => new Set(Object.keys(formatErrors)),
  )
  const extraErrors = Object.fromEntries(
    Object.entries(formatErrors)
      .filter(([name]) => visitedFields.has(name))
      .map(([name, message]) => [name, { __errors: [message] }]),
  ) as ErrorSchema<Record<string, unknown>>

  return (
    <JsonSchemaForm<Record<string, unknown>>
      schema={schema}
      uiSchema={uiSchema}
      formData={formData}
      fields={{ fairLabel: FairLabelField }}
      widgets={{ DateWidget, PhoneWidget }}
      formContext={{ booleanWidget: 'checkbox' }}
      onChange={({ formData: next }) => onChange(next ?? {})}
      onBlur={id => {
        const name = id.startsWith(FIELD_ID_PREFIX)
          ? id.slice(FIELD_ID_PREFIX.length)
          : id
        if (!visitedFields.has(name)) {
          setVisitedFields(new Set([...visitedFields, name]))
        }
      }}
      extraErrors={extraErrors}
      showErrorList={false}
    >
      {/* Suppress the built-in submit button; the wizard owns navigation. */}
      <></>
    </JsonSchemaForm>
  )
}
