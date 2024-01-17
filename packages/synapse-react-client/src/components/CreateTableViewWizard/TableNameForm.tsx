import React from 'react'
import { TextField } from '@mui/material'
import { useSynapseContext } from '../../utils'

type TableNameFormProps = {
  name: string
  setName: React.Dispatch<React.SetStateAction<string>>
  description: string | undefined
  setDescription: React.Dispatch<React.SetStateAction<string | undefined>>
}

/**
 * React component for the naming a new table or view.
 * Renders UI to provide the name and description of a table or view.
 */
export default function TableNameForm(props: TableNameFormProps) {
  const { name, setName, description, setDescription } = props
  const { isInExperimentalMode } = useSynapseContext()

  return (
    <>
      <TextField
        required
        label={'Name'}
        value={name}
        onChange={e => {
          setName(e.target.value)
        }}
        fullWidth
      />
      {isInExperimentalMode && (
        <TextField
          label={'Description'}
          value={description}
          onChange={e => {
            setDescription(e.target.value || undefined)
          }}
          fullWidth
          multiline
          rows={3}
          sx={{ my: 2 }}
        />
      )}
    </>
  )
}
