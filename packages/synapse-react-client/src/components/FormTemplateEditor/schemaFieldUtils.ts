import { RJSFSchema } from '@rjsf/utils'

/**
 * The set of property shapes the simple editor knows how to author. Anything
 * outside this set surfaces in the UI as "advanced" and must be edited via the
 * raw JSON Schema view.
 */
export type SimpleFieldType =
  | 'text'
  | 'number'
  | 'boolean'
  | 'choice'
  | 'multiChoice'
  | 'file'

export const FIELD_TYPE_OPTIONS: { value: SimpleFieldType; label: string }[] = [
  { value: 'text', label: 'Text' },
  { value: 'number', label: 'Number' },
  { value: 'boolean', label: 'Yes / No' },
  { value: 'choice', label: 'Single choice' },
  { value: 'multiChoice', label: 'Multiple choice (select many)' },
  { value: 'file', label: 'File upload' },
]

export function detectFieldType(
  prop: RJSFSchema | undefined,
): SimpleFieldType | null {
  if (!prop || typeof prop !== 'object') return null
  if (prop.format === 'synapse-filehandle-id') return 'file'
  if (prop.type === 'string' && Array.isArray(prop.enum)) return 'choice'
  // RJSF renders an array as a multi-select only when `uniqueItems` is set; without it the
  // property renders as a repeatable list, which the simple editor does not author.
  const items = prop.items as RJSFSchema | undefined
  if (
    prop.type === 'array' &&
    prop.uniqueItems === true &&
    items?.type === 'string' &&
    Array.isArray(items.enum)
  ) {
    return 'multiChoice'
  }
  if (prop.type === 'string' && !prop.format) return 'text'
  if (prop.type === 'number' || prop.type === 'integer') return 'number'
  if (prop.type === 'boolean') return 'boolean'
  return null
}

export function fieldTypeLabel(type: SimpleFieldType | null): string {
  if (type === null) return 'Advanced'
  return FIELD_TYPE_OPTIONS.find(opt => opt.value === type)?.label ?? 'Advanced'
}

/** The options a 'choice' (`enum`) or 'multiChoice' (`items.enum`) property declares; empty if none. */
export function choiceOptions(prop: RJSFSchema): string[] {
  const options = prop.enum ?? (prop.items as RJSFSchema | undefined)?.enum
  return Array.isArray(options) ? (options as string[]) : []
}

/** Build a fresh schema body for the given simple type, preserving label and help text. */
export function applyFieldType(
  prev: RJSFSchema,
  type: SimpleFieldType,
): RJSFSchema {
  const next: RJSFSchema = {
    title: prev.title,
    description: prev.description,
  }
  const existingChoices = choiceOptions(prev)
  // A choice field needs at least one option to be answerable.
  const choices = existingChoices.length > 0 ? existingChoices : ['Option 1']
  switch (type) {
    case 'text':
      next.type = 'string'
      break
    case 'number':
      next.type = 'number'
      break
    case 'boolean':
      next.type = 'boolean'
      break
    case 'choice':
      next.type = 'string'
      next.enum = choices
      break
    case 'multiChoice':
      next.type = 'array'
      next.items = { type: 'string', enum: choices }
      next.uniqueItems = true
      break
    case 'file':
      next.type = 'number'
      next.format = 'synapse-filehandle-id'
      break
  }
  return next
}

/** Derive a unique camelCase JSON property key from a display title. */
export function generatePropertyKey(
  title: string,
  existingKeys: Set<string>,
): string {
  const base =
    title
      .toLowerCase()
      .replace(/[^a-z0-9\s]/g, '')
      .trim()
      .split(/\s+/)
      .filter(Boolean)
      .map((w, i) => (i === 0 ? w : w.charAt(0).toUpperCase() + w.slice(1)))
      .join('') || 'field'
  let key = base
  let i = 1
  while (existingKeys.has(key)) {
    i += 1
    key = `${base}${i}`
  }
  return key
}

/**
 * Sanitize a manually-typed property key: strip characters that aren't
 * valid in a JSON Schema property key used as a JS identifier, preserving
 * the editor's casing (unlike `generatePropertyKey`, which derives a
 * camelCase key from a display title).
 */
export function sanitizePropertyKey(raw: string): string {
  const stripped = raw.replace(/[^A-Za-z0-9_]/g, '')
  return /^[0-9]/.test(stripped) ? `_${stripped}` : stripped
}
