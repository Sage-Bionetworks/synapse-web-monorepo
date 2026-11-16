import { RJSFSchema, UiSchema } from '@rjsf/utils'
import {
  ALLOWED_VALUES_MESSAGE,
  jsonSchemaFormValidator,
} from '@/components/JsonSchemaForm/JsonSchemaFormValidator'
import dayjs from 'dayjs'
import { FairField, FairFormPayload } from '@/aridhia-queries/FairFormPayload'

export type { FairField, FairFormPayload }

export type FairFormSection = {
  key: string
  label?: string
  fields: FairField[]
}

export type FairRjsfSection = {
  schema: RJSFSchema
  uiSchema: UiSchema
  /** Fields whose `type` cannot be rendered; the wizard blocks submit and names them. */
  unsupported: FairField[]
}

const RENDERABLE_TYPES = new Set([
  'string',
  'text',
  'markdown',
  'boolean',
  'date',
  'list',
  'phone',
  'label',
])

/**
 * Accepts both FAIR form-definition payload shapes seen in practice and normalizes them to
 * ordered sections:
 * - `{ sections: { about: { label, fields: [...] }, ... } }` — the shape returned by
 *   `GET /workspaces-forms/{code}` (via `WorkspaceForm.sections`).
 * - `{ fields: { about: [...], project: [...] } }` — the shape declared for
 *   `GET /workflows/{code}` (via `WorkflowNoControlsRequests.fields`).
 */
export function parseFairFormSections(
  payload: FairFormPayload | null | undefined,
): FairFormSection[] {
  if (!payload || typeof payload !== 'object') {
    return []
  }

  const { sections } = payload
  if (sections && typeof sections === 'object') {
    return Object.entries(sections).map(([key, section]) => {
      const { label, fields } = section ?? {}
      return { key, label, fields: fields ?? [] }
    })
  }

  const fieldsBySection = payload.fields
  if (fieldsBySection && typeof fieldsBySection === 'object') {
    return Object.entries(fieldsBySection).map(([key, fields]) => ({
      key,
      fields: fields ?? [],
    }))
  }

  return []
}

/** FAIR sends `minimum`/`maximum` as strings; `undefined` in, `undefined` out. */
function num(value: string | undefined): number | undefined {
  return value == null ? undefined : Number(value)
}

/**
 * The FAIR `string` field formats that are also JSON-schema `format`s, checked by the shared
 * `jsonSchemaFormValidator`. Any other FAIR format is not validated.
 */
const FAIR_FORMATS: Record<string, true> = {
  email: true,
  uri: true,
  uuid: true,
}

function isFairFormat(format: unknown): format is string {
  return typeof format === 'string' && FAIR_FORMATS[format] === true
}

/** Translates one FAIR form section into an RJSF schema/uiSchema pair. */
export function fairSectionToRjsf(section: FairFormSection): FairRjsfSection {
  const properties: Record<string, RJSFSchema> = {}
  const uiSchema: UiSchema = {
    'ui:order': section.fields.map(field => field.name!),
  }
  const required: string[] = []
  const unsupported: FairField[] = []

  for (const field of section.fields) {
    const name = field.name
    if (!name) {
      continue
    }
    const v = field.validation ?? {}

    if (!field.type || !RENDERABLE_TYPES.has(field.type)) {
      unsupported.push(field)
      continue
    }

    if (v.required === true && field.type !== 'label') {
      required.push(name)
    }

    switch (field.type) {
      case 'string': {
        properties[name] = {
          type: 'string',
          maxLength: num(v.maximum),
          minLength: num(v.minimum),
          ...(isFairFormat(v.format) ? { format: v.format } : {}),
        }
        uiSchema[name] = { 'ui:placeholder': field.placeholder }
        break
      }
      case 'text':
      case 'markdown': {
        properties[name] = {
          type: 'string',
          maxLength: num(v.maximum),
          minLength: num(v.minimum),
        }
        uiSchema[name] = {
          'ui:widget': 'textarea',
          'ui:placeholder': field.placeholder,
        }
        break
      }
      case 'boolean': {
        properties[name] = { type: 'boolean' }
        break
      }
      case 'date': {
        // The FAIR API expects a `date-time`; the only date field is project_end_date
        // so a simple date picker (DateWidget) is ideal.
        properties[name] = { type: 'string', format: 'date-time' }
        uiSchema[name] = { 'ui:widget': 'DateWidget' }
        break
      }
      case 'list': {
        properties[name] = {
          type: 'string',
          oneOf: (field.options ?? []).map(option => ({
            const: option.value,
            title: option.text,
            ...(option.description ? { description: option.description } : {}),
          })),
        }
        if (field.default_options) {
          properties[name].default = field.default_options
        }
        uiSchema[name] = {
          'ui:widget': 'SelectWidget',
          'ui:placeholder': field.placeholder,
        }
        break
      }
      case 'phone': {
        properties[name] = { type: 'string', maxLength: num(v.maximum) }
        uiSchema[name] = { 'ui:widget': 'PhoneWidget' }
        break
      }
      case 'label': {
        properties[name] = { type: 'null', title: field.label }
        uiSchema[name] = { 'ui:field': 'fairLabel', 'ui:label': false }
        break
      }
    }

    if (field.type !== 'label' && field.label) {
      properties[name].title = field.label
    }

    if (field.defaultValue) {
      properties[name].default = field.defaultValue
    }
  }

  return {
    schema: {
      type: 'object',
      properties,
      required,
    },
    uiSchema,
    unsupported,
  }
}

export type FairSectionValidation = {
  /** Every required field is answered, and every answer passes the section schema's rules. */
  isValid: boolean
  /**
   * The shared validator's message for each answered field breaking one of the schema's rules,
   * keyed by field name. Unanswered required fields are not listed: they only block `isValid`.
   */
  fieldErrors: Record<string, string>
}

/**
 * Validates answers against a `fairSectionToRjsf` schema with the shared
 * `jsonSchemaFormValidator`, so the messages match every other JSON-schema form. Blank answers
 * count as unanswered: they fail `required`, and optional fields may stay empty.
 */
export function validateFairSection(
  schema: RJSFSchema,
  values: Record<string, unknown>,
): FairSectionValidation {
  const answers = Object.fromEntries(
    Object.entries(values).filter(
      ([, value]) => value !== undefined && value !== null && value !== '',
    ),
  )
  const { errors } = jsonSchemaFormValidator.validateFormData(answers, schema)
  const fieldErrors: Record<string, string> = {}
  for (const { name, property, message } of errors) {
    // A top-level field's error `property` is `.<field name>`
    const field = property?.replace(/^\./, '').split('.')[0]
    if (name === 'required' || !field || !message || field in fieldErrors) {
      continue
    }
    // A `list` field is a `oneOf` of option consts: a value that isn't an option (e.g. from a
    // draft saved before the options changed) breaks every `const` and the `oneOf`.
    fieldErrors[field] =
      name === 'const' || name === 'oneOf' ? ALLOWED_VALUES_MESSAGE : message
  }
  return { isValid: errors.length === 0, fieldErrors }
}

export type AnsweredField = { label: string; value: string }

function formatAnswerValue(propertySchema: RJSFSchema, value: unknown): string {
  if (Array.isArray(value)) {
    return value.map(v => formatAnswerValue(propertySchema, v)).join(', ')
  }
  if (typeof value === 'boolean') {
    return value ? 'Yes' : 'No'
  }
  const oneOf = propertySchema.oneOf as
    | { const: unknown; title?: string }[]
    | undefined
  const matchedOption = oneOf?.find(option => option.const === value)
  if (matchedOption) {
    return matchedOption.title ?? String(value)
  }
  if (propertySchema.format === 'date-time' && typeof value === 'string') {
    // `DateWidget`-produced values are always UTC midnight for the picked calendar date;
    // format the date portion directly to avoid a local-timezone parse shifting it onto
    // the adjacent day.
    const parsed = dayjs(value.slice(0, 10))
    return parsed.isValid() ? parsed.format('MMM D, YYYY') : value
  }
  return String(value)
}

/**
 * Renders a `fairSectionToRjsf` schema's answered fields as `{ label, value }` pairs, in the
 * form's own field order, for read-only review UI (the DAR wizard's Review & submit step).
 * Unanswered fields (including `label`-type fields, which never carry a value) are omitted.
 */
export function summarizeFormAnswers(
  schema: RJSFSchema,
  values: Record<string, unknown>,
): AnsweredField[] {
  const propertyNames = Object.keys(schema.properties ?? {})
  return propertyNames.flatMap(name => {
    const value = values[name]
    if (value === undefined || value === null || value === '') {
      return []
    }
    const propertySchema = (schema.properties as Record<string, RJSFSchema>)[
      name
    ]
    const label = propertySchema.title ?? name
    return [{ label, value: formatAnswerValue(propertySchema, value) }]
  })
}
