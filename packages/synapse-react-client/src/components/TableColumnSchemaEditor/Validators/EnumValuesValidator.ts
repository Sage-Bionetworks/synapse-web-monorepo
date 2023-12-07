import { ColumnTypeEnum } from '@sage-bionetworks/synapse-types'
import { z, ZodType } from 'zod'
import { isEmpty } from 'lodash-es'
import getZodSchemaForColumnType from './getZodSchemaForColumnType'

/**
 * Returns a validator for a ColumnModel's `enumValues` field.
 * This validator will transform the field to match the correct type of defaultValue, which is an optional array of strings.
 * @param columnType the columnType of the ColumnModel
 */
export default function getEnumValuesValidator(
  columnType: ColumnTypeEnum,
): ZodType<string[] | undefined> {
  const schema = getZodSchemaForColumnType(columnType)
  return z
    .union([
      z.array(schema),
      z.null(),
      z
        .string()
        .length(0)
        .transform(() => null),
      schema.transform(v => [v]),
    ])
    .optional()
    .transform(data => {
      if (data == null) {
        return undefined
      }
      // Remove empty strings and null values
      data = data.filter(v => v !== '' && v != null)
      if (isEmpty(data)) {
        return undefined
      }

      // Each value must be converted to a string
      return data.map(v => (typeof v === 'string' ? v : JSON.stringify(v)))
    })
}
