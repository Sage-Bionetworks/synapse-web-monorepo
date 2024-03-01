import React from 'react'
import { Alert, FormGroup, Typography } from '@mui/material'
import {
  ENTITY_VIEW_TYPE_MASK_DATASET,
  ENTITY_VIEW_TYPE_MASK_FILE,
  ENTITY_VIEW_TYPE_MASK_FOLDER,
  ENTITY_VIEW_TYPE_MASK_TABLE,
} from '@sage-bionetworks/synapse-types'
import { Checkbox } from '../widgets/Checkbox'

export type EntityViewMaskEditorProps = {
  value: number
  onChange: (mask: number) => void
  disabled?: boolean
}

const maskLabelPairs: [string, number][] = [
  ['Files', ENTITY_VIEW_TYPE_MASK_FILE],
  ['Folders', ENTITY_VIEW_TYPE_MASK_FOLDER],
  ['Tables', ENTITY_VIEW_TYPE_MASK_TABLE],
  ['Datasets', ENTITY_VIEW_TYPE_MASK_DATASET],
]

export function isMaskSupportedInUI(value: number) {
  maskLabelPairs.forEach(([, mask]) => {
    // Remove each supported bit
    if ((value & mask) !== 0) {
      value = value - mask
    }
  })
  // If value is not zero, then some unsupported bit remains
  return value === 0
}

export default function EntityViewMaskEditor(props: EntityViewMaskEditorProps) {
  const { value, onChange, disabled = false } = props

  const customMaskInUse = !isMaskSupportedInUI(value)

  return (
    <>
      <Typography variant={'body1'} mt={2.5} mb={1.25} sx={{ fontWeight: 700 }}>
        Include in View
      </Typography>
      <FormGroup sx={{ gap: 1 }}>
        {maskLabelPairs.map(([label, mask]) => (
          <Checkbox
            key={label}
            label={label}
            checked={
              // Checked if the mask bit is set
              (value & mask) > 0
            }
            disabled={customMaskInUse || disabled}
            onChange={() => {
              // Toggle the clicked mask value with XOR
              onChange(value ^ mask)
            }}
          />
        ))}
      </FormGroup>
      {customMaskInUse && (
        <Alert severity={'warning'} sx={{ my: 2.25 }}>
          A custom mask is in use. Changes cannot be made in the UI.
        </Alert>
      )}
    </>
  )
}
