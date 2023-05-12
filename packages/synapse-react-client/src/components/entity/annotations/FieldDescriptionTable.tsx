import { Collapse } from '@mui/material'
import React from 'react'

export type FieldDescriptionTableProps = {
  type: string
  required: boolean
  description: React.ReactNode
  show: boolean
}

export default function FieldDescriptionTable(
  props: FieldDescriptionTableProps,
) {
  const { description, required, type, show } = props

  return (
    <Collapse className="field-description" in={show}>
      <table className="FieldDescriptionTable">
        <tbody>
          {description && (
            <tr>
              <th>Description</th>
              <td>{description}</td>
            </tr>
          )}
          <tr>
            <th>Type</th>
            <td>{type}</td>
          </tr>
          <tr>
            <th>Required</th>
            <td>{required ? 'Yes' : 'No'}</td>
          </tr>
        </tbody>
      </table>
    </Collapse>
  )
}
