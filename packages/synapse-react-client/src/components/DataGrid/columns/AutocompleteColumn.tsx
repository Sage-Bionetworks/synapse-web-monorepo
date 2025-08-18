import { Autocomplete, TextField } from '@mui/material'

export type AutocompleteOption = string

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
  return (
    <Autocomplete
      freeSolo
      disablePortal={false}
      options={choices}
      value={currentValue}
      onInputChange={(_, newInputValue) => {
        setRowData(newInputValue || '')
      }}
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
