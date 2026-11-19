import { useEffect, useState } from 'react'
import { Alert } from '@mui/material'
import { ErrorSchema, RJSFSchema, UiSchema } from '@rjsf/utils'
import { JsonSchemaForm } from '@/components/JsonSchemaForm/JsonSchemaForm'
import { DateWidget } from '@/components/JsonSchemaForm/widgets/DateWidget'
import { PhoneWidget } from '@/components/JsonSchemaForm/widgets/PhoneWidget'
import FairLabelField from '@/components/Aridhia/FairLabelField'
import { validateFairSection } from '@/components/Aridhia/fairFormToRjsf'

export type DarFormSectionStepProps = {
  schema: RJSFSchema
  uiSchema: UiSchema
  formData: Record<string, unknown>
  onChange: (formData: Record<string, unknown>) => void
}

/** RJSF's default `idPrefix`/`idSeparator`: a top-level field's widget id is `root_<name>`. */
const FIELD_ID_PREFIX = 'root_'

/** Shown when a section's schema can't be compiled, so its answers can't be checked. */
export const SCHEMA_ERROR_MESSAGE =
  "This form couldn't be checked. Contact support."

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
 * form); answers breaking one of the schema's rules are flagged inline via `extraErrors`
 * instead, with the shared validator's messages, matching the wizard's own step gating.
 */
export function DarSectionForm(props: DarFormSectionStepProps) {
  const { schema, uiSchema, formData, onChange } = props
  const section = { schema, uiSchema }
  const { fieldErrors, schemaError } = validateFairSection(section, formData)
  useEffect(() => {
    if (schemaError) {
      console.error(`DAR form section schema failed to compile: ${schemaError}`)
    }
  }, [schemaError])
  // Flag a field once the user leaves it rather than while they're still typing. Values the
  // user didn't type (restored from a draft, or the form's own defaults) are flagged right away.
  // TODO(PORTALS-4456, RJSF 7): replace this blur tracking and `extraErrors` with RJSF's
  // `liveValidate="onBlur"` plus `liveErrors="field"`.
  const [visitedFields, setVisitedFields] = useState<ReadonlySet<string>>(
    () =>
      new Set(
        Object.keys(
          validateFairSection(section, withSchemaDefaults(schema, formData))
            .fieldErrors,
        ),
      ),
  )
  const extraErrors = Object.fromEntries(
    Object.entries(fieldErrors)
      .filter(([name]) => visitedFields.has(name))
      .map(([name, message]) => [name, { __errors: [message] }]),
  ) as ErrorSchema<Record<string, unknown>>

  return (
    <>
      {schemaError && (
        <Alert severity="error" sx={{ mb: 2 }}>
          {SCHEMA_ERROR_MESSAGE}
        </Alert>
      )}
      <JsonSchemaForm<Record<string, unknown>>
        schema={schema}
        uiSchema={uiSchema}
        formData={formData}
        fields={{ fairLabel: FairLabelField }}
        widgets={{ DateWidget, PhoneWidget }}
        formContext={{ booleanWidget: 'checkbox' }}
        // A `list` field is a `oneOf` of option consts. By default RJSF would pre-fill an
        // unanswered list with its first option, which the user never chose. Only a default FAIR
        // declares (`default_options` or `defaultValue`) should pre-select one.
        experimental_defaultFormStateBehavior={{ constAsDefaults: 'skipOneOf' }}
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
    </>
  )
}
