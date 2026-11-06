/*
 * Pure transitions over a FormTemplate draft: the in-progress JSON Schema body, the step structure,
 * each property's slot settings, and the property open for editing. Every transition keeps them in
 * sync (renaming a property key rewrites every step and settings entry that names it, removing a
 * property unbinds it from every step and drops its settings, etc).
 */
import { RJSFSchema, UiSchema } from '@rjsf/utils'
import {
  listResolvedSchemaProperties,
  propertyKeyToPointer,
  removeSchemaProperty,
  renameSchemaProperty,
  replaceSchemaPropertyDefinition,
  ResolvedSchemaProperty,
  resolveSchemaPropertyAtPointer,
  SchemaPropertyContext,
  setSchemaProperty,
  setSchemaPropertyContext,
  setSchemaPropertyRequired,
} from '@/utils/jsonschema/submissionContext'
import {
  applyFieldType,
  applyFieldTypeUiDefinition,
  detectFieldType,
  generatePropertyKey,
  SimpleFieldType,
} from './schemaFieldUtils'
import {
  EditableFormTemplateStep,
  FieldSettings,
  FieldSettingsByPath,
  fieldSettingsFor,
} from './utils'

export type FormTemplateDraftState = {
  jsonSchema: RJSFSchema
  steps: EditableFormTemplateStep[]
  /**
   * Slot settings by `schemaPath`. A property binds to at most one slot, so these are per-property
   * and kept whether or not a step binds the property: unbinding, rebinding and moving a field
   * leave them alone. An entry also outlives its property in the raw JSON Schema, so an edit that
   * drops a property and brings it back (a key typed over, an undo) restores it. Only
   * `removeProperty` deletes one, and a key the guided editor creates (`createField`,
   * `renamePropertyKey`) starts fresh. A property without an entry has `DEFAULT_FIELD_SETTINGS`.
   */
  fieldSettings: FieldSettingsByPath
  /** The property open in the field definition drawer, if any. */
  editingPropertyKey: string | null
}

export const NEW_FIELD_TITLE = 'New field'

export function schemaPropertyKeys(jsonSchema: RJSFSchema): Set<string> {
  return new Set(
    listResolvedSchemaProperties(jsonSchema).map(p => p.propertyKey),
  )
}

/** The `schemaPath` of every field bound to a step. */
export function boundSchemaPaths(
  steps: EditableFormTemplateStep[],
): Set<string> {
  return new Set(steps.flatMap(step => step.fieldPaths))
}

/** Schema properties that no step binds yet, in schema order. */
export function listUnboundProperties(
  jsonSchema: RJSFSchema,
  steps: EditableFormTemplateStep[],
): ResolvedSchemaProperty[] {
  const bound = boundSchemaPaths(steps)
  return listResolvedSchemaProperties(jsonSchema).filter(
    p => !bound.has(propertyKeyToPointer(p.propertyKey)),
  )
}

/**
 * Add an unbound text property with a generated key and open it for editing. It starts from the
 * default slot settings, even if a property removed earlier left settings under the same key.
 */
export function createField(
  state: FormTemplateDraftState,
): FormTemplateDraftState {
  const key = generatePropertyKey(
    NEW_FIELD_TITLE,
    schemaPropertyKeys(state.jsonSchema),
  )
  const { [propertyKeyToPointer(key)]: _stale, ...fieldSettings } =
    state.fieldSettings
  return {
    ...state,
    jsonSchema: setSchemaProperty(
      state.jsonSchema,
      key,
      { type: 'string', title: NEW_FIELD_TITLE, description: '' },
      'ALWAYS',
    ),
    fieldSettings,
    editingPropertyKey: key,
  }
}

/**
 * Rename a property's key everywhere it's referenced: the schema, the step binding it, its slot
 * settings (replacing any left under `newKey`), and the drawer editing it. A no-op if `oldKey`
 * doesn't exist or `newKey` is taken.
 */
export function renamePropertyKey(
  state: FormTemplateDraftState,
  oldKey: string,
  newKey: string,
): FormTemplateDraftState {
  const keys = schemaPropertyKeys(state.jsonSchema)
  if (newKey === oldKey || !keys.has(oldKey) || keys.has(newKey)) return state
  const oldPath = propertyKeyToPointer(oldKey)
  const newPath = propertyKeyToPointer(newKey)
  return {
    jsonSchema: renameSchemaProperty(state.jsonSchema, oldKey, newKey),
    steps: state.steps.map(step => ({
      ...step,
      fieldPaths: step.fieldPaths.map(p => (p === oldPath ? newPath : p)),
    })),
    fieldSettings: moveKey(state.fieldSettings, oldPath, newPath),
    editingPropertyKey:
      state.editingPropertyKey === oldKey ? newKey : state.editingPropertyKey,
  }
}

/** `record` with `oldKey`'s entry, or none, under `newKey` instead. */
function moveKey<T>(
  record: Record<string, T>,
  oldKey: string,
  newKey: string,
): Record<string, T> {
  const { [oldKey]: value, [newKey]: _replaced, ...rest } = record
  return value === undefined ? rest : { ...rest, [newKey]: value }
}

/**
 * Merge `patch` into a property's definition. While the key still matches what the old title
 * generates, a title change renames the key to follow it, like a slug; once the key has been
 * edited by hand it stays put.
 */
export function updateProperty(
  state: FormTemplateDraftState,
  key: string,
  patch: Partial<RJSFSchema>,
): FormTemplateDraftState {
  const resolved = resolveSchemaPropertyAtPointer(
    state.jsonSchema,
    propertyKeyToPointer(key),
  )
  if (!resolved) return state
  const updated: FormTemplateDraftState = {
    ...state,
    jsonSchema: replaceSchemaPropertyDefinition(state.jsonSchema, key, {
      ...resolved.subSchema,
      ...patch,
    }),
  }
  if (typeof patch.title !== 'string') return updated

  const otherKeys = schemaPropertyKeys(state.jsonSchema)
  otherKeys.delete(key)
  const keyFollowsTitle =
    generatePropertyKey(resolved.subSchema.title ?? '', otherKeys) === key
  return keyFollowsTitle
    ? renamePropertyKey(
        updated,
        key,
        generatePropertyKey(patch.title, otherKeys),
      )
    : updated
}

/** Replace a property's whole definition, keeping its context and required-ness. */
export function replaceProperty(
  state: FormTemplateDraftState,
  key: string,
  next: RJSFSchema,
): FormTemplateDraftState {
  return {
    ...state,
    jsonSchema: replaceSchemaPropertyDefinition(state.jsonSchema, key, next),
  }
}

/**
 * Change a property to a simple field type: its schema takes that type's shape, and its slot
 * `uiDefinition` takes that type's widget, whether or not a step binds it yet. Text and Long
 * answer share one schema shape, so switching between them keeps the schema as it is, including
 * constraints the editor doesn't author such as `maxLength` or `pattern`. A 'mustCheck' box is
 * made required, since an optional one would accept being left unchecked.
 */
export function changeFieldType(
  state: FormTemplateDraftState,
  key: string,
  type: SimpleFieldType,
): FormTemplateDraftState {
  const path = propertyKeyToPointer(key)
  const resolved = resolveSchemaPropertyAtPointer(state.jsonSchema, path)
  if (!resolved) return state
  const keepsSchema =
    (type === 'text' || type === 'longText') &&
    detectFieldType(resolved.subSchema) === 'text'
  const replaced = keepsSchema
    ? state
    : replaceProperty(state, key, applyFieldType(resolved.subSchema, type))
  const next =
    type === 'mustCheck' ? changeRequired(replaced, key, true) : replaced
  // The generated client types `uiDefinition` as `any`.
  const uiDefinition = (fieldSettingsFor(state.fieldSettings, path)
    .uiDefinition ?? {}) as UiSchema
  return updateFieldSettings(next, path, {
    uiDefinition: applyFieldTypeUiDefinition(uiDefinition, type),
  })
}

export function changeRequired(
  state: FormTemplateDraftState,
  key: string,
  isRequired: boolean,
): FormTemplateDraftState {
  const context =
    resolveSchemaPropertyAtPointer(state.jsonSchema, propertyKeyToPointer(key))
      ?.context ?? 'ALWAYS'
  return {
    ...state,
    jsonSchema: setSchemaPropertyRequired(
      state.jsonSchema,
      key,
      context,
      isRequired,
    ),
  }
}

export function changeContext(
  state: FormTemplateDraftState,
  key: string,
  context: SchemaPropertyContext,
): FormTemplateDraftState {
  return {
    ...state,
    jsonSchema: setSchemaPropertyContext(state.jsonSchema, key, context),
  }
}

/** Remove a property from the schema, unbind it from every step, and close its drawer. */
export function removeProperty(
  state: FormTemplateDraftState,
  key: string,
): FormTemplateDraftState {
  const path = propertyKeyToPointer(key)
  const { [path]: _removed, ...fieldSettings } = state.fieldSettings
  return {
    jsonSchema: removeSchemaProperty(state.jsonSchema, key),
    steps: state.steps.map(step => ({
      ...step,
      fieldPaths: step.fieldPaths.filter(p => p !== path),
    })),
    fieldSettings,
    editingPropertyKey:
      state.editingPropertyKey === key ? null : state.editingPropertyKey,
  }
}

/** Merge `patch` into the slot settings of the property at `schemaPath`. */
export function updateFieldSettings(
  state: FormTemplateDraftState,
  schemaPath: string,
  patch: Partial<FieldSettings>,
): FormTemplateDraftState {
  return {
    ...state,
    fieldSettings: {
      ...state.fieldSettings,
      [schemaPath]: {
        ...fieldSettingsFor(state.fieldSettings, schemaPath),
        ...patch,
      },
    },
  }
}

/** Move the step at `fromIndex` so it ends up at `toIndex`. A no-op for out-of-range indices. */
export function moveStep(
  state: FormTemplateDraftState,
  fromIndex: number,
  toIndex: number,
): FormTemplateDraftState {
  const { steps } = state
  const inRange = (i: number) => i >= 0 && i < steps.length
  if (fromIndex === toIndex || !inRange(fromIndex) || !inRange(toIndex)) {
    return state
  }
  const next = steps.slice()
  next.splice(toIndex, 0, ...next.splice(fromIndex, 1))
  return { ...state, steps: next }
}

/**
 * Move the field bound to `schemaPath` into the step identified by `toStepKey` so it ends up at
 * `toIndex` there (clamped to the end), whether or not that is the step it came from. A no-op if
 * no step binds `schemaPath` or no step has `toStepKey`.
 */
export function moveSlot(
  state: FormTemplateDraftState,
  schemaPath: string,
  toStepKey: string,
  toIndex: number,
): FormTemplateDraftState {
  const isBound = boundSchemaPaths(state.steps).has(schemaPath)
  if (!isBound || !state.steps.some(step => step.uiKey === toStepKey)) {
    return state
  }
  return {
    ...state,
    steps: state.steps.map(step => {
      const fieldPaths = step.fieldPaths.filter(p => p !== schemaPath)
      if (step.uiKey === toStepKey) {
        fieldPaths.splice(Math.max(0, toIndex), 0, schemaPath)
      }
      return { ...step, fieldPaths }
    }),
  }
}

/**
 * Append the property `propertyKey` to the step identified by `stepKey`. A no-op if that property
 * is already bound to any step (a property binds at most once) or no step has `stepKey`.
 */
export function bindField(
  state: FormTemplateDraftState,
  propertyKey: string,
  stepKey: string,
): FormTemplateDraftState {
  const path = propertyKeyToPointer(propertyKey)
  if (
    boundSchemaPaths(state.steps).has(path) ||
    !state.steps.some(step => step.uiKey === stepKey)
  ) {
    return state
  }
  return {
    ...state,
    steps: state.steps.map(step =>
      step.uiKey === stepKey
        ? { ...step, fieldPaths: [...step.fieldPaths, path] }
        : step,
    ),
  }
}
