import { useState } from 'react'
import { ErrorSchema, RJSFSchema, UiSchema } from '@rjsf/utils'
import { JsonSchemaForm } from '@/components/JsonSchemaForm/JsonSchemaForm'
import { DateWidget } from '@/components/JsonSchemaForm/widgets/DateWidget'
import { PhoneWidget } from '@/components/JsonSchemaForm/widgets/PhoneWidget'
import FairLabelField from '@/components/Aridhia/FairLabelField'
import { getFairFieldErrors } from '@/components/Aridhia/fairFormToRjsf'

export type DarFormSectionStepProps = {
  schema: RJSFSchema
  uiSchema: UiSchema
  formData: Record<string, unknown>
  onChange: (formData: Record<string, unknown>) => void
}

/** RJSF's default `idPrefix`/`idSeparator`: a top-level field's widget id is `root_<name>`. */
const FIELD_ID_PREFIX = 'root_'

/** `formData` with each unanswered field's schema default, as RJSF fills them in on mount. */
function withSchemaDefaults(
  schema: RJSFSchema,
  formData: Record<string, unknown>,
): Record<string, unknown> {
  const defaults = Object.entries(schema.properties ?? {}).flatMap(
    ([name, property]) =>
      typeof property === 'object' && property.default !== undefined
        ? [[name, property.default] as const]
        : [],
  )
  return { ...Object.fromEntries(defaults), ...formData }
}

/**
 * Renders one `fairSectionToRjsf` schema/uiSchema pair via `JsonSchemaForm`, with the shared
 * `JsonSchemaForm` customizations needed for the Aridhia DAR flow.
 *
 * RJSF's own validation never runs here (the wizard owns navigation and never submits the
 * form); answers breaking one of RDCA-DAP's rules (see `getFairFieldErrors`) are flagged
 * inline via `extraErrors` instead, matching the wizard's own step gating.
 */
export function DarSectionForm(props: DarFormSectionStepProps) {
  const { schema, uiSchema, formData, onChange } = props
  const fieldErrors = getFairFieldErrors({ schema, uiSchema }, formData)
  // Flag a field once the user leaves it rather than while they're still typing. Values the
  // user didn't type (restored from a draft, or the form's own defaults) are flagged right away.
  const [visitedFields, setVisitedFields] = useState<ReadonlySet<string>>(
    () =>
      new Set(
        Object.keys(
          getFairFieldErrors(
            { schema, uiSchema },
            withSchemaDefaults(schema, formData),
          ),
        ),
      ),
  )
  const extraErrors = Object.fromEntries(
    Object.entries(fieldErrors)
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
      // A `list` field is a `oneOf` of option consts. By default RJSF would pre-fill an
      // unanswered list with its first option, which the user never chose. Only FAIR's own
      // `default_options` should pre-select one.
      experimental_defaultFormStateBehavior={{ constAsDefaults: 'never' }}
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
