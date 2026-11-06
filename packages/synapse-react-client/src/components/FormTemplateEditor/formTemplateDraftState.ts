/*
 * Pure transitions over a FormTemplate draft: the in-progress JSON Schema body, the step structure,
 * and the property open for editing. Every transition keeps the three in sync (renaming a property
 * key rewrites every step field bound to it, removing a property unbinds it from every step, etc).
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
  generatePropertyKey,
  SimpleFieldType,
} from './schemaFieldUtils'
import { EditableFormTemplateStep } from './utils'

export type FormTemplateDraftState = {
  jsonSchema: RJSFSchema
  steps: EditableFormTemplateStep[]
  /** The property open in the field definition drawer, if any. */
  editingPropertyKey: string | null
  /**
   * The `uiDefinition` each unbound property gets when it is next bound, keyed by `schemaPath`.
   * Holds what a slot had when it was unbound, and display choices made before the property was
   * ever bound, so neither is lost while the draft is open.
   */
  unboundUiDefinitions: Record<string, UiSchema>
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
  return new Set(steps.flatMap(step => step.fields.map(f => f.schemaPath)))
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

/** Add an unbound text property with a generated key and open it for editing. */
export function createField(
  state: FormTemplateDraftState,
): FormTemplateDraftState {
  const key = generatePropertyKey(
    NEW_FIELD_TITLE,
    schemaPropertyKeys(state.jsonSchema),
  )
  return {
    ...state,
    jsonSchema: setSchemaProperty(
      state.jsonSchema,
      key,
      { type: 'string', title: NEW_FIELD_TITLE, description: '' },
      'ALWAYS',
    ),
    editingPropertyKey: key,
  }
}

/**
 * Rename a property's key everywhere it's referenced: the schema, every step field bound to it, and
 * the drawer editing it. A no-op if `oldKey` doesn't exist or `newKey` is already taken.
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
  const { [oldPath]: unboundUiDefinition, ...unboundUiDefinitions } =
    state.unboundUiDefinitions
  return {
    jsonSchema: renameSchemaProperty(state.jsonSchema, oldKey, newKey),
    unboundUiDefinitions: unboundUiDefinition
      ? { ...unboundUiDefinitions, [newPath]: unboundUiDefinition }
      : unboundUiDefinitions,
    steps: state.steps.map(step => ({
      ...step,
      fields: step.fields.map(f =>
        f.schemaPath === oldPath ? { ...f, schemaPath: newPath } : f,
      ),
    })),
    editingPropertyKey:
      state.editingPropertyKey === oldKey ? newKey : state.editingPropertyKey,
  }
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
 * Replace the schema wholesale (the raw JSON editor). A `uiDefinition` held for a property the new
 * schema no longer has is dropped, so a later property reusing that key doesn't inherit it.
 */
export function replaceJsonSchema(
  state: FormTemplateDraftState,
  jsonSchema: RJSFSchema,
): FormTemplateDraftState {
  const paths = new Set(
    [...schemaPropertyKeys(jsonSchema)].map(propertyKeyToPointer),
  )
  return {
    ...state,
    jsonSchema,
    unboundUiDefinitions: Object.fromEntries(
      Object.entries(state.unboundUiDefinitions).filter(([path]) =>
        paths.has(path),
      ),
    ),
  }
}

/** A slot's `uiDefinition`, which the generated client types as `any`. */
function slotUiDefinition(field: { uiDefinition: unknown }): UiSchema {
  return (field.uiDefinition as UiSchema | null) ?? {}
}

/**
 * Each property's slot `uiDefinition`, keyed by `schemaPath`: the bound slot's, or the one held for
 * an unbound property.
 */
export function uiDefinitionsByPath(
  state: FormTemplateDraftState,
): Record<string, UiSchema> {
  const byPath = { ...state.unboundUiDefinitions }
  for (const field of state.steps.flatMap(step => step.fields)) {
    byPath[field.schemaPath] = slotUiDefinition(field)
  }
  return byPath
}

/**
 * Change a property to a simple field type: its schema takes that type's shape, and its slot
 * `uiDefinition` (held in the draft until bound, if unbound) takes that type's widget. A
 * 'mustCheck' box is made required, since an optional one would accept being left unchecked.
 */
export function changeFieldType(
  state: FormTemplateDraftState,
  key: string,
  type: SimpleFieldType,
): FormTemplateDraftState {
  const path = propertyKeyToPointer(key)
  const resolved = resolveSchemaPropertyAtPointer(state.jsonSchema, path)
  if (!resolved) return state
  const replaced = replaceProperty(
    state,
    key,
    applyFieldType(resolved.subSchema, type),
  )
  const next =
    type === 'mustCheck' ? changeRequired(replaced, key, true) : replaced
  if (boundSchemaPaths(state.steps).has(path)) {
    return {
      ...next,
      steps: next.steps.map(step => ({
        ...step,
        fields: step.fields.map(f =>
          f.schemaPath === path
            ? {
                ...f,
                uiDefinition: applyFieldTypeUiDefinition(
                  slotUiDefinition(f),
                  type,
                ),
              }
            : f,
        ),
      })),
    }
  }
  const { [path]: held = {}, ...unboundUiDefinitions } =
    state.unboundUiDefinitions
  const uiDefinition = applyFieldTypeUiDefinition(held, type)
  return {
    ...next,
    unboundUiDefinitions:
      Object.keys(uiDefinition).length > 0
        ? { ...unboundUiDefinitions, [path]: uiDefinition }
        : unboundUiDefinitions,
  }
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
  const { [path]: _removed, ...unboundUiDefinitions } =
    state.unboundUiDefinitions
  return {
    jsonSchema: removeSchemaProperty(state.jsonSchema, key),
    unboundUiDefinitions,
    steps: state.steps.map(step => ({
      ...step,
      fields: step.fields.filter(f => f.schemaPath !== path),
    })),
    editingPropertyKey:
      state.editingPropertyKey === key ? null : state.editingPropertyKey,
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
  const field = state.steps
    .flatMap(step => step.fields)
    .find(f => f.schemaPath === schemaPath)
  if (!field || !state.steps.some(step => step.uiKey === toStepKey)) {
    return state
  }
  return {
    ...state,
    steps: state.steps.map(step => {
      const fields = step.fields.filter(f => f.schemaPath !== schemaPath)
      if (step.uiKey === toStepKey) {
        fields.splice(Math.max(0, toIndex), 0, field)
      }
      return { ...step, fields }
    }),
  }
}

/**
 * Append a field bound to `propertyKey` to the step identified by `stepKey`. A no-op if that
 * property is already bound to any step (a property binds at most once) or no step has `stepKey`.
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
  const { [path]: uiDefinition = {}, ...unboundUiDefinitions } =
    state.unboundUiDefinitions
  return {
    ...state,
    unboundUiDefinitions,
    steps: state.steps.map(step =>
      step.uiKey === stepKey
        ? {
            ...step,
            fields: [
              ...step.fields,
              { schemaPath: path, uiDefinition, isPublic: false },
            ],
          }
        : step,
    ),
  }
}

/**
 * Replace the step structure wholesale. A slot that drops out keeps its `uiDefinition` for when
 * its property is bound again; a property that is bound again here no longer needs it kept.
 */
export function replaceSteps(
  state: FormTemplateDraftState,
  steps: EditableFormTemplateStep[],
): FormTemplateDraftState {
  const nextPaths = boundSchemaPaths(steps)
  const unboundUiDefinitions = Object.fromEntries(
    Object.entries(state.unboundUiDefinitions).filter(
      ([path]) => !nextPaths.has(path),
    ),
  )
  for (const field of state.steps.flatMap(step => step.fields)) {
    const uiDefinition = slotUiDefinition(field)
    if (
      !nextPaths.has(field.schemaPath) &&
      Object.keys(uiDefinition).length > 0
    ) {
      unboundUiDefinitions[field.schemaPath] = uiDefinition
    }
  }
  return { ...state, steps, unboundUiDefinitions }
}
