import { ColumnTypeEnum } from '@sage-bionetworks/synapse-types'
import { z } from 'zod'
import { isArray, isEmpty } from 'lodash-es'
import getZodSchemaForColumnType from './getZodSchemaForColumnType'

export function getDefaultValueValidator(columnType: ColumnTypeEnum) {
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
