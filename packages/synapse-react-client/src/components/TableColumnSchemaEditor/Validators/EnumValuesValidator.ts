import { ColumnTypeEnum } from '@sage-bionetworks/synapse-types'
import { z } from 'zod'
import { isEmpty } from 'lodash-es'
import getZodSchemaForColumnType from './getZodSchemaForColumnType'

export default function getEnumValuesValidator(columnType: ColumnTypeEnum) {
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
