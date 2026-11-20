import { RJSFSchema, UiSchema } from '@rjsf/utils'
import {
  ALLOWED_VALUES_MESSAGE,
  jsonSchemaFormValidator,
} from '@/components/JsonSchemaForm/JsonSchemaFormValidator'
import dayjs from 'dayjs'
import { FairField, FairFormPayload } from '@/aridhia-queries/FairFormPayload'
import { localToday } from '@/utils/functions/DateTimeUtils'

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

/**
 * A FAIR text length limit (sent as a string) as a JSON-schema `minLength`/`maxLength`, which
 * must be a non-negative integer. Anything else is no limit, so the schema still compiles.
 */
function lengthBound(value: string | undefined): number | undefined {
  const bound =
    value == null || value.trim() === '' ? Number.NaN : Number(value)
  return Number.isInteger(bound) && bound >= 0 ? bound : undefined
}

/**
 * The FAIR `string` field formats that are also JSON-schema `format`s, checked by the shared
 * `jsonSchemaFormValidator`. Any other FAIR format is not validated.
 */
const FAIR_FORMATS = new Set(['email', 'uri', 'uuid'])

/**
 * A `date` field's `validation.minimum` as a `YYYY-MM-DD` calendar date: `today` becomes the
 * given `today`, and an ISO 8601 date/date-time becomes its calendar date. Other values
 * (RDCA-DAP also understands e.g. `tomorrow`), and dates that don't exist, are ignored.
 */
function earliestDate(minimum: unknown, today: string): string | undefined {
  if (typeof minimum !== 'string') {
    return undefined
  }
  if (minimum.toLowerCase() === 'today') {
    return today
  }
  const date = minimum.slice(0, 10)
  return /^\d{4}-\d{2}-\d{2}$/.test(date) &&
    dayjs(date).format('YYYY-MM-DD') === date
    ? date
    : undefined
}

/** A blank answer counts as unanswered. */
function isBlankAnswer(value: unknown): boolean {
  return value === undefined || value === null || value === ''
}

/**
 * Translates one FAIR form section into an RJSF schema/uiSchema pair. `today` (`YYYY-MM-DD`,
 * the user's local date by default) resolves a date field's `today` minimum.
 */
export function fairSectionToRjsf(
  section: FairFormSection,
  today: string = localToday(),
): FairRjsfSection {
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

    if (
      !field.type ||
      !RENDERABLE_TYPES.has(field.type) ||
      // A JSON-schema `oneOf` needs at least one option, or the section schema won't compile
      (field.type === 'list' && !field.options?.length)
    ) {
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
          maxLength: lengthBound(v.maximum),
          minLength: lengthBound(v.minimum),
          ...(v.format && FAIR_FORMATS.has(v.format)
            ? { format: v.format }
            : {}),
        }
        uiSchema[name] = { 'ui:placeholder': field.placeholder }
        break
      }
      case 'text':
      case 'markdown': {
        properties[name] = {
          type: 'string',
          maxLength: lengthBound(v.maximum),
          minLength: lengthBound(v.minimum),
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
        // The FAIR API expects a `date-time`, but FAIR date fields ask for a calendar date
        // only, so a simple date picker (DateWidget) is ideal.
        properties[name] = { type: 'string', format: 'date-time' }
        uiSchema[name] = { 'ui:widget': 'DateWidget' }
        const earliest = earliestDate(v.minimum, today)
        if (earliest) {
          // `DateWidget` values are UTC midnight of the picked calendar date, so ajv-formats'
          // `formatMinimum` against UTC midnight of the earliest date compares calendar dates.
          properties[name].formatMinimum = `${earliest}T00:00:00.000Z`
          uiSchema[name]['ui:options'] = { minDate: earliest }
        }
        break
      }
      case 'list': {
        properties[name] = {
          type: 'string',
          oneOf: field.options!.map(option => ({
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
        properties[name] = { type: 'string', maxLength: lengthBound(v.maximum) }
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
  /**
   * Set when the section schema itself couldn't be compiled, so no answer could be checked.
   * `isValid` is then false.
   */
  schemaError?: string
}

/** The shared validator's `date` format message, for date pickers storing a `date-time`. */
const INVALID_DATE_MESSAGE = 'Enter a valid date'

/**
 * Validates answers against a `fairSectionToRjsf` schema with the shared
 * `jsonSchemaFormValidator`, so the messages match every other JSON-schema form. Blank answers
 * count as unanswered: they fail `required`, and optional fields may stay empty.
 */
export function validateFairSection(
  section: Pick<FairRjsfSection, 'schema' | 'uiSchema'>,
  values: Record<string, unknown>,
): FairSectionValidation {
  const answers = Object.fromEntries(
    Object.entries(values).filter(([, value]) => !isBlankAnswer(value)),
  )
  const { errors } = jsonSchemaFormValidator.validateFormData(
    answers,
    section.schema,
  )
  // RJSF reports a schema ajv can't compile as a lone error with only a `stack`
  const schemaError = errors.find(error => !error.name)?.stack
  const fieldErrors: Record<string, string> = {}
  for (const { name, property, message } of errors) {
    // A top-level field's error `property` is `.<field name>`
    const field = property?.replace(/^\./, '').split('.')[0]
    if (name === 'required' || !field || !message || field in fieldErrors) {
      continue
    }
    const isDateWidgetField =
      (section.uiSchema[field] as UiSchema | undefined)?.['ui:widget'] ===
      'DateWidget'
    let fieldMessage = message
    if (name === 'const' || name === 'oneOf') {
      // A `list` field is a `oneOf` of option consts: a value that isn't an option (e.g. from a
      // draft saved before the options changed) breaks every `const` and the `oneOf`.
      fieldMessage = ALLOWED_VALUES_MESSAGE
    } else if (name === 'format' && isDateWidgetField) {
      // `DateWidget` stores a date typed in full that doesn't exist (e.g. 02/30) as a non-ISO
      // string. It only asks for a date, so the `date-time` format's message would mislead.
      fieldMessage = INVALID_DATE_MESSAGE
    }
    fieldErrors[field] = fieldMessage
  }
  return { isValid: errors.length === 0, fieldErrors, schemaError }
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
    if (isBlankAnswer(value)) {
      return []
    }
    const propertySchema = (schema.properties as Record<string, RJSFSchema>)[
      name
    ]
    const label = propertySchema.title ?? name
    return [{ label, value: formatAnswerValue(propertySchema, value) }]
  })
}
