import { ColumnModel, ColumnTypeEnum } from '@sage-bionetworks/synapse-types'
import {
  canHaveMaxListLength,
  canHaveSize,
  DISALLOWED_DEFAULT_VALUE_COLUMN_TYPES,
  getMaxListLengthForType,
  MAX_COLUMN_NAME_LENGTH,
  MAX_ENUM_VALUES,
  MAX_STRING_SIZE,
} from '../TableColumnSchemaEditorUtils'
import { z, ZodType } from 'zod'
import { SetOptional } from 'type-fest'
import { getDefaultValueValidator } from './DefaultValueValidator'
import getEnumValuesValidator from './EnumValuesValidator'
import { optionalStringSchema } from './OptionalStringSchema'
import { omit } from 'lodash-es'

const facetTypeSchema = z.enum(['enumeration', 'range'])

const facetColumnSortConfigSchema = z.object({
  property: z.enum(['FREQUENCY', 'VALUE']).optional(),
  direction: z.enum(['DESC', 'ASC']).optional(),
})

const columnModelBaseZodSchema = z.object({
  name: z
    .string()
    .min(1, { message: 'Name is required' })
    .max(MAX_COLUMN_NAME_LENGTH, {
      message: `Name must be ${MAX_COLUMN_NAME_LENGTH} characters or fewer`,
    }),
  columnType: z.enum(ColumnTypeEnum),
})

export const jsonSubColumnModelZodSchema = columnModelBaseZodSchema.extend({
  jsonPath: z.string().startsWith('$'),
  facetType: facetTypeSchema,
})

/**
 * Zod schema whose shape represents a ColumnModel. This unrefined schema is saved in this "intermediate" state so
 * that it can be extended to create an inferred type that can applied to form data.
 */
const unrefinedColumnModelSchema = columnModelBaseZodSchema.extend({
  id: z.string().optional(),
  defaultValue: z.union([z.string(), z.array(z.any())]).optional(),
  maximumSize: z
    .union([optionalStringSchema, z.number()])
    // Convert string input to a number before validating
    .transform(v => (typeof v === 'string' ? Number(v) : v))
    .pipe(z.number().int().min(1).max(MAX_STRING_SIZE).optional()),
  maximumListLength: z
    .union([optionalStringSchema, z.number()])
    .transform(v => (typeof v === 'string' ? Number(v) : v))
    .pipe(z.number().int().min(1).optional()),
  enumValues: z
    .array(
      z
        .union([
          z.string(),
          // enumValues is allowed on INTEGER type, but the backend stores them as strings, so allow passing integers
          z.number().int(),
        ])
        .pipe(z.coerce.string()),
    )
    .max(MAX_ENUM_VALUES, {
      message: `A column may have at most ${MAX_ENUM_VALUES} enumeration values`,
    })
    .optional(),
  jsonSubColumns: z.array(jsonSubColumnModelZodSchema).optional(),
  facetType: facetTypeSchema.optional(),
  facetSortConfig: facetColumnSortConfigSchema.optional(),
})

/**
 * Runs a field-specific sub-validator against a value, forwarding any issues to the parent
 * context (re-pathed to `path`). Returns the transformed value, or undefined if validation failed.
 */
function parseSubField<T>(
  value: unknown,
  schema: ZodType<T | undefined>,
  path: string,
  ctx: z.RefinementCtx,
): T | undefined {
  const result = schema.safeParse(value)
  if (result.success) {
    return result.data
  }
  result.error.issues.forEach(issue => {
    ctx.addIssue({ ...issue, path: [path] })
  })
  return undefined
}

/**
 * Zod schema to validate a column model. The provided data is coerced and transformed to match the ColumnModel type.
 * For this reason, form data may be directly passed into this schema parser.
 *
 * The parse method will return a ColumnModel where all data is properly formed.
 */
export const columnModelZodSchema = unrefinedColumnModelSchema
  .refine(data => data.maximumSize == null || canHaveSize(data.columnType), {
    message: 'Size is not allowed for this column type',
    path: ['maximumSize'],
  })
  .refine(
    data =>
      data.maximumListLength == null || canHaveMaxListLength(data.columnType),
    {
      message: 'Maximum list length is not allowed for this column type',
      path: ['maximumListLength'],
    },
  )
  .superRefine((data, ctx) => {
    if (
      data.maximumListLength == null ||
      !canHaveMaxListLength(data.columnType)
    ) {
      // Either no list length is set, or a previous refinement already rejected it
      return
    }
    const maxListLength = getMaxListLengthForType(
      data.columnType,
      data.maximumSize,
    )
    if (data.maximumListLength > maxListLength) {
      ctx.addIssue({
        code: 'custom',
        message: `Maximum list length must not exceed ${maxListLength} for this column type and element size`,
        path: ['maximumListLength'],
      })
    }
  })
  .refine(
    data => {
      if (data.jsonSubColumns != null) {
        return data.columnType === ColumnTypeEnum.JSON
      }
      return true
    },
    {
      message: 'Only JSON columns can have JSON sub-columns.',
      path: ['columnType'],
    },
  )
  .refine(
    data => {
      // An empty string or empty array is treated as "no default value" (see the defaultValue transform below)
      const hasDefaultValue =
        data.defaultValue != null &&
        data.defaultValue !== '' &&
        !(Array.isArray(data.defaultValue) && data.defaultValue.length === 0)
      return (
        !hasDefaultValue ||
        !DISALLOWED_DEFAULT_VALUE_COLUMN_TYPES.includes(data.columnType)
      )
    },
    {
      message: 'A default value is not allowed for this column type',
      path: ['defaultValue'],
    },
  )
  .transform((data, ctx) => {
    // Validate and transform the defaultValue based on the columnType
    if (data.defaultValue == null) {
      return omit(data, 'defaultValue')
    }
    return {
      ...data,
      defaultValue: parseSubField(
        data.defaultValue,
        getDefaultValueValidator(data.columnType),
        'defaultValue',
        ctx,
      ),
    }
  })
  .transform((data, ctx) => {
    // Validate and transform the enumValues based on the columnType
    if (data.enumValues == null) {
      return omit(data, 'enumValues')
    }
    return {
      ...data,
      enumValues: parseSubField(
        data.enumValues,
        getEnumValuesValidator(data.columnType),
        'enumValues',
        ctx,
      ),
    }
  })

export const columnModelFormDataZodSchema = z.array(columnModelZodSchema)

const jsonSubColumnModelFormDataSchema = jsonSubColumnModelZodSchema.extend({
  isSelected: z.boolean(),
})

export type JsonSubColumnModelFormData = z.input<
  typeof jsonSubColumnModelFormDataSchema
>

// Use the "unrefined" schema since we can extend it with form-only fields
const _columnModelFormDataSchema = unrefinedColumnModelSchema.extend({
  isSelected: z.boolean(),
  isOriginallyDefaultColumn: z.boolean(),
  jsonSubColumns: z.array(jsonSubColumnModelFormDataSchema).optional(),
})

/**
 * Type that represents possible form input data for a ColumnModel.
 * a
 */
export type ColumnModelFormData = z.input<typeof _columnModelFormDataSchema>

export function validateColumnModelFormData(
  formData: SetOptional<
    ColumnModelFormData,
    'isOriginallyDefaultColumn' | 'isSelected'
  >[],
): z.ZodSafeParseResult<SetOptional<ColumnModel, 'id'>[]> {
  return columnModelFormDataZodSchema.safeParse(formData)
}
