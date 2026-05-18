import { RJSFSchema } from '@rjsf/utils'

/**
 * The set of property shapes the simple editor knows how to author. Anything
 * outside this set surfaces in the UI as "advanced" and must be edited via the
 * raw JSON Schema view.
 */
export type SimpleFieldType = 'text' | 'number' | 'boolean' | 'choice' | 'file'

export const FIELD_TYPE_OPTIONS: { value: SimpleFieldType; label: string }[] = [
  { value: 'text', label: 'Text' },
  { value: 'number', label: 'Number' },
  { value: 'boolean', label: 'Yes / No' },
  { value: 'choice', label: 'Multiple choice' },
  { value: 'file', label: 'File upload' },
]

export function detectFieldType(
  prop: RJSFSchema | undefined,
): SimpleFieldType | null {
  if (!prop || typeof prop !== 'object') return null
  if (prop.format === 'synapse-filehandle-id') return 'file'
  if (prop.type === 'string' && Array.isArray(prop.enum)) return 'choice'
  if (prop.type === 'string' && !prop.format) return 'text'
  if (prop.type === 'number' || prop.type === 'integer') return 'number'
  if (prop.type === 'boolean') return 'boolean'
  return null
}

export function fieldTypeLabel(type: SimpleFieldType | null): string {
  if (type === null) return 'Advanced'
  return FIELD_TYPE_OPTIONS.find(opt => opt.value === type)?.label ?? 'Advanced'
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
      next.enum =
        Array.isArray(prev.enum) && prev.enum.length > 0
          ? prev.enum
          : ['Option 1']
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
