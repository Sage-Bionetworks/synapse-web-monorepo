import { RJSFSchema, UiSchema } from '@rjsf/utils'
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
        uiSchema[name] = { 'ui:options': { inputType: 'tel' } }
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
