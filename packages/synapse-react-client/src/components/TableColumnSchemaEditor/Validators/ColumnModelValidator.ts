import { ColumnModel, ColumnTypeEnum } from '@sage-bionetworks/synapse-types'
import {
  canHaveMaxListLength,
  canHaveSize,
  MAX_LIST_LENGTH,
  MAX_STRING_SIZE,
} from '../TableColumnSchemaEditorUtils'
import { z } from 'zod'
import { SetOptional } from 'type-fest'
import { SafeParseReturnType } from 'zod/lib/types'
import { getDefaultValueValidator } from './DefaultValueValidator'
import getEnumValuesValidator from './EnumValuesValidator'
import { optionalStringSchema } from './OptionalStringSchema'
import { omit } from 'lodash-es'

const facetTypeSchema = z.union([z.literal('enumeration'), z.literal('range')])

const columnModelBaseZodSchema = z.object({
  name: z.string().min(1, { message: 'Name is required' }),
  columnType: z.nativeEnum(ColumnTypeEnum),
})

export const jsonSubColumnModelZodSchema = columnModelBaseZodSchema.merge(
  z.object({
    jsonPath: z.string().startsWith('$'),
    facetType: facetTypeSchema,
  }),
)

/**
 * Zod schema whose shape represents a ColumnModel. This unrefined schema is saved in this "intermediate" state so
 * that it can be extended with `.merge` to create an inferred type that can applied to form data.
 */
const unrefinedColumnModelSchema = columnModelBaseZodSchema.merge(
  z.object({
    id: z.string().optional(),
    defaultValue: z.union([z.string(), z.array(z.any())]).optional(),
    maximumSize: z
      .union([optionalStringSchema, z.number()])
      .pipe(
        z.coerce.number().finite().int().min(1).max(MAX_STRING_SIZE).optional(),
      ),
    maximumListLength: z
      .union([optionalStringSchema, z.number()])
      .pipe(
        z.coerce.number().finite().int().min(1).max(MAX_LIST_LENGTH).optional(),
      ),
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
      .optional(),
    jsonSubColumns: z.array(jsonSubColumnModelZodSchema).optional(),
    facetType: facetTypeSchema.optional(),
  }),
)

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
  .transform((data, ctx) => {
    if (data.defaultValue != null) {
      // Validate and transform the defaultValue based on the columnType
      const defaultValueSchema = getDefaultValueValidator(data.columnType)
      const result = defaultValueSchema.safeParse(data.defaultValue)
      let transformedValue: string | undefined
      if (result.success) {
        transformedValue = result.data
      } else {
        result.error.issues.forEach(issue => {
          ctx.addIssue({ ...issue, path: ['defaultValue'] })
        })
        transformedValue = undefined
      }
      return { ...data, defaultValue: transformedValue }
    }
    return omit(data, 'defaultValue')
  })
  .transform((data, ctx) => {
    // NOTE: This is the same set of steps as the `defaultValue` transform
    // We may be able to refactor this, but it is challenging to do so without breaking the schema's inferred type
    if (data.enumValues != null) {
      // Validate and transform the defaultValue based on the columnType
      const enumValuesSchema = getEnumValuesValidator(data.columnType)
      const result = enumValuesSchema.safeParse(data.enumValues)
      let transformedValue: string[] | undefined
      if (result.success) {
        transformedValue = result.data
      } else {
        result.error.issues.forEach(issue => {
          ctx.addIssue({ ...issue, path: ['enumValues'] })
        })
        transformedValue = undefined
      }
      return { ...data, enumValues: transformedValue }
    }
    return omit(data, 'enumValues')
  })

export const columnModelFormDataZodSchema = z.array(columnModelZodSchema)

const jsonSubColumnModelFormDataSchema = jsonSubColumnModelZodSchema.merge(
  z.object({
    isSelected: z.boolean(),
  }),
)

export type JsonSubColumnModelFormData = z.input<
  typeof jsonSubColumnModelFormDataSchema
>

// Use the "unrefined" schema since we can extend it with form-only fields
const columnModelFormDataSchema = unrefinedColumnModelSchema.merge(
  z.object({
    isSelected: z.boolean(),
    isOriginallyDefaultColumn: z.boolean(),
    jsonSubColumns: z.array(jsonSubColumnModelFormDataSchema).optional(),
  }),
)

/**
 * Type that represents possible form input data for a ColumnModel.
 * a
 */
export type ColumnModelFormData = z.input<typeof columnModelFormDataSchema>

export function validateColumnModelFormData(
  formData: SetOptional<
    ColumnModelFormData,
    'isOriginallyDefaultColumn' | 'isSelected'
  >[],
): SafeParseReturnType<
  SetOptional<
    ColumnModelFormData,
    'isOriginallyDefaultColumn' | 'isSelected'
  >[],
  SetOptional<ColumnModel, 'id'>[]
> {
  return columnModelFormDataZodSchema.safeParse(formData)
}
