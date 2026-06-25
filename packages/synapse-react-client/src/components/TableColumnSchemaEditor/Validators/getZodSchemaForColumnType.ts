import { ColumnTypeEnum } from '@sage-bionetworks/synapse-types'
import { doubleSchema } from './DoubleSchema'
import { z, ZodType } from 'zod'
import { dateTimeSchema } from './DatetimeSchema'
import { booleanSchema } from './BooleanSchema'
import { integerSchema } from './IntegerSchema'
import { entityIdSchema } from './EntityIdSchema'

const arraySerializedAsStringSchema = z.string().transform((data, ctx) => {
  try {
    const parsed = JSON.parse(data)
    if (!Array.isArray(parsed)) {
      ctx.addIssue({
        code: 'custom',
        message: 'Object was valid JSON, but was not an array',
      })
      return z.NEVER
    }
    return parsed
  } catch (e) {
    ctx.addIssue({
      code: 'custom',
      message: 'Invalid JSON array',
    })
    return z.NEVER
  }
})

export default function getZodSchemaForColumnType(
  columnType: ColumnTypeEnum,
): ZodType {
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
    case ColumnTypeEnum.LINK:
    case ColumnTypeEnum.MEDIUMTEXT:
    case ColumnTypeEnum.LARGETEXT:
      return z.coerce.string()
    case ColumnTypeEnum.BOOLEAN:
      return booleanSchema
    case ColumnTypeEnum.INTEGER:
    case ColumnTypeEnum.FILEHANDLEID:
    case ColumnTypeEnum.USERID:
    case ColumnTypeEnum.EVALUATIONID:
    case ColumnTypeEnum.SUBMISSIONID:
      return integerSchema
    case ColumnTypeEnum.DOUBLE:
      return doubleSchema
    case ColumnTypeEnum.DATE:
      return dateTimeSchema
    case ColumnTypeEnum.ENTITYID:
      return entityIdSchema
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
