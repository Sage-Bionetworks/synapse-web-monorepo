import { ColumnTypeEnum } from '@sage-bionetworks/synapse-types'
import { z, ZodType } from 'zod'
import { isArray, isEmpty } from 'lodash-es'
import getZodSchemaForColumnType from './getZodSchemaForColumnType'

/**
 * Returns a validator for a ColumnModel's `defaultValue` field.
 * This validator will transform the field to match the correct type of defaultValue, which is an optional string.
 * @param columnType the columnType of the ColumnModel
 */
export function getDefaultValueValidator(
  columnType: ColumnTypeEnum,
): ZodType<string | undefined> {
  const schema = getZodSchemaForColumnType(columnType)
  return z
    .union([
      z.null(),
      z
        .string()
        .length(0)
        .transform(() => null),
      schema,
    ])
    .optional()
    .refine(data => {
      if (columnType.endsWith('_LIST')) {
        return data == null || isArray(data)
      }
      return true
    }, 'Default value cannot be an array for a non-list column type')
    .transform(data => {
      if (data == null || data === '' || (isArray(data) && isEmpty(data))) {
        return undefined
      } else if (typeof data === 'string') {
        return data
      } else {
        return JSON.stringify(data)
      }
    })
}
