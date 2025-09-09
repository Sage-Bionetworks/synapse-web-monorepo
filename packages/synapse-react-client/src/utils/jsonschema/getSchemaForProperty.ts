import { PROPERTIES_KEY } from '@rjsf/utils'
import get from 'lodash-es/get'

export default function getSchemaForProperty(
  schema: Record<string, any>,
  propertyKey: string,
) {
  return get(schema, [PROPERTIES_KEY, propertyKey], {})
}
