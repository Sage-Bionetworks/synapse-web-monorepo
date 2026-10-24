import getEnumeratedValues, { EnumeratedValue } from './getEnumeratedValues'
import { getNumberOrEnumInfo, NumberOrEnumInfo } from './getNumberOrEnumInfo'
import getSchemaForProperty from './getSchemaForProperty'
import getRequiredAttributes from './getRequiredAttributes'
import { FlatTypeInfo, getFlatTypeInfo } from './getType'
import { JSONSchema7 } from 'json-schema'

export interface SchemaPropertyInfo {
  type: FlatTypeInfo | undefined
  isRequired: boolean
  enumeratedValues: EnumeratedValue[] | null
  description?: string
  /**
   * Present when the property is a number or one of a closed set of strings;
   * see {@link getNumberOrEnumInfo}
   */
  numberOrEnum?: NumberOrEnumInfo
}

export interface SchemaPropertiesMap {
  [propertyName: string]: SchemaPropertyInfo
}

/**
 * Processes a JSON schema once and returns information for all properties
 * @param schema The JSON schema to process
 * @returns A map of property names to their schema information
 */
export function getSchemaPropertiesInfo(
  schema: JSONSchema7 | null,
): SchemaPropertiesMap {
  if (!schema) {
    return {}
  }

  const requiredFields = getRequiredAttributes(schema)
  const propertiesMap: SchemaPropertiesMap = {}

  // Process each property in the schema
  if (schema.properties) {
    Object.keys(schema.properties).forEach(propertyName => {
      const propertySchema = getSchemaForProperty(schema, propertyName)

      const numberOrEnum = getNumberOrEnumInfo(
        propertySchema,
        schema.definitions,
      )
      if (numberOrEnum) {
        // A number-or-enum union describes neither a single type nor an
        // enumeration, so both come from its detected branches.
        propertiesMap[propertyName] = {
          type: {
            ...getFlatTypeInfo(propertySchema),
            type: numberOrEnum.numericType,
          },
          isRequired: requiredFields.includes(propertyName),
          enumeratedValues: numberOrEnum.enumValues,
          description: propertySchema?.description,
          numberOrEnum,
        }
        return
      }

      const type = getFlatTypeInfo(propertySchema)
      let enumeratedValues = getEnumeratedValues(propertySchema).map(
        item => item.value,
      )

      // Check for nested enums in array items
      if (enumeratedValues.length === 0 && propertySchema?.items) {
        const itemsSchema = Array.isArray(propertySchema.items)
          ? propertySchema.items[0]
          : propertySchema.items
        enumeratedValues = getEnumeratedValues(itemsSchema).map(
          item => item.value,
        )
      }

      propertiesMap[propertyName] = {
        type,
        isRequired: requiredFields.includes(propertyName),
        enumeratedValues: enumeratedValues.length > 0 ? enumeratedValues : null,
        description: propertySchema?.description,
      }
    })
  }

  return propertiesMap
}
