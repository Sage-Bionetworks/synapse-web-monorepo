import { Box, Collapse } from '@mui/material'
import React from 'react'
import { JSONSchema7, JSONSchema7Definition } from 'json-schema'

export type FieldDescriptionTableProps = {
  schema: JSONSchema7
  description: React.ReactNode
}

function getTypeAsString(
  schema: JSONSchema7 | JSONSchema7Definition | JSONSchema7Definition[],
): string {
  if (Array.isArray(schema) || typeof schema === 'boolean') {
    return 'unknown'
  }
  const { type, enum: _enum } = schema

  if (type === 'array' && typeof schema.items === 'object') {
    return `List of ${getTypeAsString(schema.items)}`
  }

  if (_enum) {
    return 'enumeration'
  }

  if (Array.isArray(type)) {
    return type.reduce(
      (typesCommaSeparated, nextType) => `${typesCommaSeparated}, ${nextType}`,
      '',
    )
  }
  return type || 'unknown'
}

export default function FieldDescriptionTable(
  props: FieldDescriptionTableProps,
) {
  const { description, schema } = props

  const typeString = getTypeAsString(schema)

  return (
    <Collapse className="field-description" in={true}>
      <Box component="table" className="FieldDescriptionTable" mb={1}>
        <tbody>
          {description && (
            <tr>
              <th>Description</th>
              <td>{description}</td>
            </tr>
          )}
          <tr>
            <th>Type</th>
            <td>{typeString}</td>
          </tr>
        </tbody>
      </Box>
    </Collapse>
  )
}
