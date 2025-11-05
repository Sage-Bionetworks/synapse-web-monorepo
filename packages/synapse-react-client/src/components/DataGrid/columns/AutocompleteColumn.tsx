import parseFreeTextGivenJsonSchemaType from '@/components/DataGrid/utils/parseFreeTextUsingJsonSchemaType'
import { Autocomplete, TextField } from '@mui/material'
import { JSONSchema7Type } from 'json-schema'
import { useEffect, useLayoutEffect, useRef, useState } from 'react'
import { CellComponent, CellProps, Column } from 'react-datasheet-grid'
import { isNil } from 'lodash-es'

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
  if (isNil(toCast)) {
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
  focus,
  stopEditing,
}: AutocompleteCellProps) {
  const ref = useRef<HTMLInputElement>(null)

  useLayoutEffect(() => {
    if (focus) {
      ref.current?.focus()
    } else {
      ref.current?.blur()
    }
  }, [focus])
  const [localInputState, setLocalInputState] = useState<string>(
    castCellValueToString(rowData),
  )

  // Sync localInputState with rowData when it changes externally (e.g., after cut)
  useEffect(() => {
    setLocalInputState(castCellValueToString(rowData))
  }, [rowData])

  const hasValue = !isNil(rowData) && rowData !== ''

  return (
    <Autocomplete
      ref={ref}
      open={!!focus}
      forcePopupIcon={true}
      disableClearable={!hasValue}
      freeSolo
      disablePortal={false}
      options={choices}
      getOptionLabel={option => castCellValueToString(option)}
      value={rowData as AutocompleteOption}
      inputValue={localInputState}
      onInputChange={(_, newInputValue) => {
        setLocalInputState(newInputValue)
      }}
      onClose={() => stopEditing({ nextRow: false })}
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
        setTimeout(() => stopEditing({ nextRow: false }), 0)
      }}
      blurOnSelect={true}
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
        pointerEvents: focus ? undefined : 'none',
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
