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
}

const maskLabelPairs: [string, number][] = [
  ['Files', ENTITY_VIEW_TYPE_MASK_FILE],
  ['Folders', ENTITY_VIEW_TYPE_MASK_FOLDER],
  ['Tables', ENTITY_VIEW_TYPE_MASK_TABLE],
  ['Datasets', ENTITY_VIEW_TYPE_MASK_DATASET],
]

export function isMaskSupportedInUI(value: number) {
  // Union of all the supported UI mask values
  const allMasksSupportedInEditor = maskLabelPairs.reduce(
    (acc, [, mask]) => acc | mask,
    0,
  )
  // Flip the bits and & with the value -- if any bits remain, then an unsupported mask is in use
  return (~allMasksSupportedInEditor & value) === 0
}

export default function EntityViewMaskEditor(props: EntityViewMaskEditorProps) {
  const { value, onChange } = props

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
            checked={(value & mask) > 0}
            disabled={customMaskInUse}
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
