import { ColumnTypeEnum } from '@sage-bionetworks/synapse-types'
import { doubleSchema } from './DoubleSchema'
import { z, ZodTypeAny } from 'zod'
import { dateTimeSchema } from './DatetimeSchema'
import { booleanSchema } from './BooleanSchema'
import { integerSchema } from './IntegerSchema'
import { entityIdSchema } from './EntityIdSchema'

const arraySerializedAsStringSchema = z.string().transform((data, ctx) => {
  try {
    const parsed = JSON.parse(data)
    if (!Array.isArray(parsed)) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: 'Object was valid JSON, but was not an array',
      })
    }
    return parsed
  } catch (e) {
    ctx.addIssue({
      code: z.ZodIssueCode.custom,
      message: 'Invalid JSON array',
    })
  }
  return data
})

export default function getZodSchemaForColumnType(
  columnType: ColumnTypeEnum,
): ZodTypeAny {
  if (columnType.endsWith('_LIST')) {
    const baseSchema = getZodSchemaForColumnType(
      columnType.replace('_LIST', '') as ColumnTypeEnum,
    )
    return z.union([
      z.array(baseSchema),
      // Also handle cases where the array is serialized as a string
      arraySerializedAsStringSchema.pipe(z.array(baseSchema)),
    ])
  }

  switch (columnType) {
    case ColumnTypeEnum.STRING:
      return z.coerce.string()
    case ColumnTypeEnum.BOOLEAN:
      return booleanSchema
    case ColumnTypeEnum.INTEGER:
      return integerSchema
    case ColumnTypeEnum.DOUBLE:
      return doubleSchema
    case ColumnTypeEnum.DATE:
      return dateTimeSchema
    case ColumnTypeEnum.FILEHANDLEID:
      return integerSchema
    case ColumnTypeEnum.ENTITYID:
      return entityIdSchema
    case ColumnTypeEnum.LINK:
      return z.coerce.string()
    case ColumnTypeEnum.MEDIUMTEXT:
      return z.coerce.string()
    case ColumnTypeEnum.LARGETEXT:
      return z.coerce.string()
    case ColumnTypeEnum.USERID:
      return integerSchema
    case ColumnTypeEnum.EVALUATIONID:
      return integerSchema
    case ColumnTypeEnum.SUBMISSIONID:
      return integerSchema
    case ColumnTypeEnum.JSON:
      return z.string().refine(v => {
        try {
          JSON.parse(v)
          return true
        } catch (e) {
          return false
        }
      })
    default:
      console.warn(`No validator for column type ${columnType}`)
      return z.any()
  }
}
