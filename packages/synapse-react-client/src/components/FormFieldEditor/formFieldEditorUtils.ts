import { RJSFSchema, UiSchema } from '@rjsf/utils'

/** The supported field types in the visual builder. */
export type FieldType =
  | 'text'
  | 'textarea'
  | 'number'
  | 'boolean'
  | 'select'
  | 'date'

/** The visual builder configuration state. */
export type VisualFieldConfig = {
  fieldType: FieldType
  title: string
  description: string
  enumOptions: string[] // only used when fieldType === 'select'
}

export const FIELD_TYPE_LABELS: Record<FieldType, string> = {
  text: 'Text',
  textarea: 'Text Area',
  number: 'Number',
  boolean: 'Checkbox',
  select: 'Dropdown Select',
  date: 'Date',
}

/** Convert visual builder config to a JSON Schema definition. */
export function fieldConfigToJsonSchema(config: VisualFieldConfig): RJSFSchema {
  const schema: RJSFSchema = {}

  switch (config.fieldType) {
    case 'text':
    case 'textarea':
    case 'date':
      schema.type = 'string'
      break
    case 'number':
      schema.type = 'number'
      break
    case 'boolean':
      schema.type = 'boolean'
      break
    case 'select':
      schema.type = 'string'
      if (config.enumOptions.length > 0) {
        schema.enum = [...config.enumOptions]
      }
      break
  }

  if (config.fieldType === 'date') {
    schema.format = 'date'
  }

  if (config.title) {
    schema.title = config.title
  }

  if (config.description) {
    schema.description = config.description
  }

  return schema
}

/** Convert visual builder config to a RJSF uiSchema. */
export function fieldConfigToUiSchema(config: VisualFieldConfig): UiSchema {
  const uiSchema: UiSchema = {}

  if (config.fieldType === 'textarea') {
    uiSchema['ui:widget'] = 'textarea'
    uiSchema['ui:options'] = { rows: 5 }
  }

  return uiSchema
}

/** Parse a JSON Schema + uiSchema back into a visual builder config. */
export function jsonSchemaToFieldConfig(
  schema: RJSFSchema,
  uiSchema: UiSchema,
): VisualFieldConfig {
  let fieldType: FieldType = 'text'

  if (schema.type === 'boolean') {
    fieldType = 'boolean'
  } else if (schema.type === 'number' || schema.type === 'integer') {
    fieldType = 'number'
  } else if (schema.enum && Array.isArray(schema.enum)) {
    fieldType = 'select'
  } else if (schema.format === 'date') {
    fieldType = 'date'
  } else if (uiSchema?.['ui:widget'] === 'textarea') {
    fieldType = 'textarea'
  }

  return {
    fieldType,
    title: (schema.title as string) ?? '',
    description: (schema.description as string) ?? '',
    enumOptions:
      fieldType === 'select' && Array.isArray(schema.enum)
        ? (schema.enum as string[])
        : [],
  }
}

/** Get the default visual config for a new field. */
export function getDefaultVisualConfig(): VisualFieldConfig {
  return {
    fieldType: 'text',
    title: '',
    description: '',
    enumOptions: [],
  }
}
