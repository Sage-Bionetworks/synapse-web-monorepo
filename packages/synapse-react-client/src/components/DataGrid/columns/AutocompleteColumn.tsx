import parseFreeTextGivenJsonSchemaType from '@/components/DataGrid/utils/parseFreeTextUsingJsonSchemaType'
import { Autocomplete, TextField } from '@mui/material'
import { JSONSchema7Type } from 'json-schema'
import { useEffect, useState } from 'react'
import { CellComponent, CellProps, Column } from 'react-datasheet-grid'
import { isNull } from 'lodash-es'

export type AutocompleteOption =
  | string
  | number
  | boolean
  | null
  | Record<string, unknown>
  | Array<unknown>

export type AutocompleteCellProps = CellProps & {
  rowData: AutocompleteOption
  setRowData: (value: AutocompleteOption) => void
  choices: AutocompleteOption[]
  colType?: JSONSchema7Type
}

export function castCellValueToString(toCast: any): string {
  if (isNull(toCast)) {
    return ''
  }
  if (typeof toCast === 'object') {
    return JSON.stringify(toCast)
  }
  return String(toCast)
}

export function AutocompleteCell({
  rowData,
  setRowData,
  choices,
  colType,
}: AutocompleteCellProps) {
  const [localInputState, setLocalInputState] = useState<string>(
    castCellValueToString(rowData),
  )

  // Sync localInputState with rowData when it changes externally (e.g., after cut)
  useEffect(() => {
    setLocalInputState(castCellValueToString(rowData))
  }, [rowData])

  return (
    <Autocomplete
      freeSolo
      disablePortal={false}
      options={choices}
      getOptionLabel={option => castCellValueToString(option)}
      value={rowData as AutocompleteOption}
      inputValue={localInputState}
      onInputChange={(_, newInputValue) => {
        setLocalInputState(newInputValue)
      }}
      onChange={(_e, newVal, reason) => {
        if (reason === 'createOption') {
          // The user typed an option that wasn't a defined enum. Try to cast it to the correct type
          setRowData(
            parseFreeTextGivenJsonSchemaType(newVal as string, colType),
          )
        } else {
          // The value was selected, so explicitly set it
          setRowData(newVal)
        }
        // Update local input state to match the selected/created value
        setLocalInputState(castCellValueToString(newVal))
      }}
      blurOnSelect={false}
      onBlur={_event => {
        // Only update on blur if the input value differs from the current rowData
        // and no option was selected (which would have already updated via onChange)
        if (localInputState !== castCellValueToString(rowData)) {
          setRowData(parseFreeTextGivenJsonSchemaType(localInputState, colType))
        }
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
  colType?: JSONSchema7Type
}

export function autocompleteColumn({
  choices,
  colType,
}: AutocompleteColumnProps): Partial<Column> {
  return {
    component: ((props: Omit<AutocompleteCellProps, 'choices'>) => (
      <AutocompleteCell {...props} choices={choices} colType={colType} />
    )) as CellComponent,
    // If we update our enums to support labels, then we can update copy to copy the label and paste to lookup the mapping from label -> value
    copyValue: ({ rowData }) => rowData,
    pasteValue: ({ value }) => value,
    disableKeys: true,
    keepFocus: true,
  }
}
