import { Autocomplete, TextField } from '@mui/material'
import { useState } from 'react'

export type AutocompleteOption =
  | string
  | number
  | boolean
  | null
  | Record<string, unknown>
  | Array<unknown>

export type AutocompleteCellProps = {
  rowData: string
  setRowData: (value: string) => void
  choices: AutocompleteOption[]
}

function AutocompleteCell({
  rowData,
  setRowData,
  choices,
}: AutocompleteCellProps) {
  const currentValue = rowData || ''

  const [localState, setLocalState] = useState(rowData)

  return (
    <Autocomplete
      freeSolo
      disablePortal={false}
      options={choices}
      getOptionLabel={option =>
        typeof option === 'object' ? JSON.stringify(option) : String(option)
      }
      value={currentValue}
      onInputChange={(_, newInputValue) => {
        setLocalState(newInputValue || '')
      }}
      onBlur={() => setRowData(localState)}
      renderInput={params => (
        <TextField
          {...params}
          slotProps={{
            input: {
              ...params.InputProps,
              disableUnderline: true,
              sx: {
                height: '100%',
                padding: '0 10px',
                backgroundColor: 'inherit',
                borderRadius: 0,
              },
            },
          }}
        />
      )}
      sx={{
        width: '100%',
        height: '100%',
        '& .MuiAutocomplete-inputRoot': {
          padding: '0 10px',
          backgroundColor: 'inherit',
        },
        '& .MuiFormControl-root': { height: '100%' },
      }}
    />
  )
}

export type AutocompleteColumnProps = {
  choices: AutocompleteOption[]
}

export function autocompleteColumn({ choices }: AutocompleteColumnProps) {
  return {
    component: (props: Omit<AutocompleteCellProps, 'choices'>) => (
      <AutocompleteCell {...props} choices={choices} />
    ),
    disableKeys: true,
    keepFocus: true,
  }
}
