import getEnumeratedValues, { EnumeratedValue } from './getEnumeratedValues'
import getSchemaForProperty from './getSchemaForProperty'
import getRequiredAttributes from './getRequiredAttributes'
import { getType, TypeInfo } from './getType'
import { JSONSchema7 } from 'json-schema'

export interface SchemaPropertyInfo {
  type: TypeInfo | undefined
  isRequired: boolean
  enumeratedValues: EnumeratedValue[] | null
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
      const type = getType(propertySchema)
      let enumeratedValues = getEnumeratedValues(propertySchema).map(
        item => item.value,
      )

      // Check for nested enums in array items
      if (
        enumeratedValues.length === 0 &&
        propertySchema &&
        propertySchema.items
      ) {
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
      }
    })
  }

  return propertiesMap
}
