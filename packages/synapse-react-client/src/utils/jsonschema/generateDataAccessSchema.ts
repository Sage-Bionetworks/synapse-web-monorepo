import { RJSFSchema, UiSchema } from '@rjsf/utils'
import {
  FormField,
  FormFieldReference,
  FormStep,
  GenerateDataAccessSchemaResponse,
  GenerateDataAccessSchemaStep,
} from '@/utils/types/AccessRequirementFormTypes'

const DEFAULT_STEP_ID = '__default__'
const DEFAULT_STEP_TITLE = 'General'
const DEFAULT_STEP_DESCRIPTION = ''

/** A resolved field paired with its requiredness (union of all references). */
type ResolvedField = {
  field: FormField
  required: boolean
}

/**
 * Generates a combined JSON Schema + uiSchema response from a set of FormFields
 * and FormSteps, mimicking the server-side GenerateDataAccessSchema endpoint.
 *
 * When multiple Access Requirements share the same FormField (by id), the field
 * appears only once in the generated schema (deduplication). A field is marked
 * required if ANY referencing AR marks it as required.
 *
 * @param formFields - All FormFields across the relevant Access Requirements (may contain duplicates by id)
 * @param references - The FormFieldReferences from the Access Requirements, used to determine requiredness
 * @param formSteps - All FormSteps in the system
 * @param useFormSteps - If true, the response partitions fields into multiple steps. If false, all fields in a single step.
 */
export function generateDataAccessSchema(
  formFields: FormField[],
  references: FormFieldReference[],
  formSteps: FormStep[],
  useFormSteps: boolean,
): GenerateDataAccessSchemaResponse {
  // 1. Build a required-by-id map: a field is required if ANY reference marks it required
  const requiredByFieldId = new Map<string, boolean>()
  for (const ref of references) {
    const current = requiredByFieldId.get(ref.fieldId) ?? false
    requiredByFieldId.set(ref.fieldId, current || ref.required)
  }

  // 2. Deduplicate fields by id, pairing with resolved requiredness
  const resolvedFields = deduplicateAndResolve(formFields, requiredByFieldId)

  // 3. Sort fields by orderWeight, then by id for tie-breaking
  const sortedFields = [...resolvedFields].sort((a, b) => {
    if (a.field.orderWeight !== b.field.orderWeight)
      return a.field.orderWeight - b.field.orderWeight
    return a.field.id.localeCompare(b.field.id)
  })

  if (!useFormSteps) {
    const { jsonSchema, uiSchema } = composeSchemaFromFields(sortedFields)
    return {
      steps: [
        {
          stepId: null,
          stepTitle: 'Data Access Request',
          stepDescription: '',
          jsonSchema,
          uiSchema,
        },
      ],
    }
  }

  // 4. Group fields by stepId
  const stepMap = new Map<string, ResolvedField[]>()
  for (const resolved of sortedFields) {
    const stepId = resolved.field.stepId ?? DEFAULT_STEP_ID
    if (!stepMap.has(stepId)) {
      stepMap.set(stepId, [])
    }
    stepMap.get(stepId)!.push(resolved)
  }

  // 5. Build step lookup
  const stepLookup = new Map<string, FormStep>()
  for (const step of formSteps) {
    stepLookup.set(step.id, step)
  }

  // 6. Build ordered step entries
  type StepEntry = {
    stepId: string
    step: FormStep | null
    fields: ResolvedField[]
  }

  const stepEntries: StepEntry[] = []
  for (const [stepId, fields] of stepMap) {
    stepEntries.push({
      stepId,
      step: stepLookup.get(stepId) ?? null,
      fields,
    })
  }

  stepEntries.sort((a, b) => {
    const aWeight = a.step?.orderWeight ?? Number.MAX_SAFE_INTEGER
    const bWeight = b.step?.orderWeight ?? Number.MAX_SAFE_INTEGER
    if (aWeight !== bWeight) return aWeight - bWeight
    return a.stepId.localeCompare(b.stepId)
  })

  // 7. Generate schema for each step
  const steps: GenerateDataAccessSchemaStep[] = stepEntries.map(entry => {
    const { jsonSchema, uiSchema } = composeSchemaFromFields(entry.fields)
    return {
      stepId: entry.stepId === DEFAULT_STEP_ID ? null : entry.stepId,
      stepTitle: entry.step?.title ?? DEFAULT_STEP_TITLE,
      stepDescription: entry.step?.description ?? DEFAULT_STEP_DESCRIPTION,
      jsonSchema,
      uiSchema,
    }
  })

  const nonEmptySteps = steps.filter(
    step =>
      step.jsonSchema.properties &&
      Object.keys(step.jsonSchema.properties).length > 0,
  )

  return { steps: nonEmptySteps }
}

/**
 * Deduplicate FormFields by id, keeping the first occurrence,
 * and pair each with its resolved required flag.
 */
function deduplicateAndResolve(
  fields: FormField[],
  requiredByFieldId: Map<string, boolean>,
): ResolvedField[] {
  const seen = new Set<string>()
  const result: ResolvedField[] = []
  for (const field of fields) {
    if (!seen.has(field.id)) {
      seen.add(field.id)
      result.push({
        field,
        required: requiredByFieldId.get(field.id) ?? false,
      })
    }
  }
  return result
}

/**
 * Compose a JSON Schema object and uiSchema from a sorted list of resolved fields.
 */
function composeSchemaFromFields(fields: ResolvedField[]): {
  jsonSchema: RJSFSchema
  uiSchema: UiSchema
} {
  const properties: Record<string, RJSFSchema> = {}
  const required: string[] = []
  const uiSchema: UiSchema = {}
  const uiOrder: string[] = []

  for (const { field, required: isRequired } of fields) {
    const propertyKey = field.id
    properties[propertyKey] = { ...field.schemaDefinition }

    if (!properties[propertyKey].title) {
      properties[propertyKey].title = field.name
    }

    if (isRequired) {
      required.push(propertyKey)
    }

    if (field.uiDefinition && Object.keys(field.uiDefinition).length > 0) {
      uiSchema[propertyKey] = { ...field.uiDefinition }
    }

    uiOrder.push(propertyKey)
  }

  const jsonSchema: RJSFSchema = {
    type: 'object',
    properties,
  }

  if (required.length > 0) {
    jsonSchema.required = required
  }

  uiSchema['ui:order'] = uiOrder

  return { jsonSchema, uiSchema }
}
