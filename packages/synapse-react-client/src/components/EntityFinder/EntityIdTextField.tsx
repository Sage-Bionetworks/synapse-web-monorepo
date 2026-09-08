import { SearchOutlined } from '@mui/icons-material'
import { IconButton } from '@mui/material'
import { useState } from 'react'
import { TextField } from '../TextField'
import { EntityFinderModal, EntityFinderModalProps } from './EntityFinderModal'

export type EntityIdTextFieldProps = {
  label: string
  value: string
  onChange: (value: string) => void
  description?: string
  disabled?: boolean
  required?: boolean
  entityFinderModalProps: Omit<
    EntityFinderModalProps,
    'show' | 'onConfirm' | 'onCancel'
  >
}

/**
 * A text field with an adornment button that opens an EntityFinderModal to select an entity.
 * The selected entity's ID is set as the value of the text field. Users may also type or paste
 * a raw synId.
 */
function EntityIdTextField(props: EntityIdTextFieldProps) {
  const {
    label,
    value,
    description,
    onChange,
    disabled,
    required,
    entityFinderModalProps,
  } = props
  const [showEntityFinder, setShowEntityFinder] = useState(false)
  return (
    <>
      <EntityFinderModal
        show={showEntityFinder}
        onConfirm={selected => {
          onChange(selected[0].targetId)
          setShowEntityFinder(false)
        }}
        onCancel={() => setShowEntityFinder(false)}
        {...entityFinderModalProps}
      />
      <TextField
        label={label}
        description={description}
        type="text"
        fullWidth
        required={required}
        value={value}
        disabled={disabled}
        onChange={e => onChange(e.target.value)}
        slotProps={{
          input: {
            endAdornment: !disabled && (
              <IconButton onClick={() => setShowEntityFinder(true)}>
                <SearchOutlined />
              </IconButton>
            ),
          },
        }}
      />
    </>
  )
}

export default EntityIdTextField
