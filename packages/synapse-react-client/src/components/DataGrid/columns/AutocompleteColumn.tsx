import parseFreeTextGivenJsonSchemaType from '@/components/DataGrid/utils/parseFreeTextUsingJsonSchemaType'
import { Autocomplete, TextField } from '@mui/material'
import { JSONSchema7Type } from 'json-schema'
import { isNil } from 'lodash-es'
import { useEffect, useRef, useState } from 'react'
import { CellComponent, CellProps, Column } from 'react-datasheet-grid'

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
  active,
}: AutocompleteCellProps) {
  const [menuIsOpen, setMenuIsOpen] = useState(false)
  const textInputRef = useRef<HTMLInputElement>(null)

  const rowDataAsString = castCellValueToString(rowData)
  const [localInputState, setLocalInputState] =
    useState<string>(rowDataAsString)

  useEffect(() => {
    // Treat `active` as the source of truth for blurring
    // If we listen to Autocomplete's onBlur, it will fire when selecting an option from the dropdown, in which case
    // we do not want to update rowData
    if (active) {
      textInputRef.current?.focus()
    } else {
      setMenuIsOpen(false)
      textInputRef.current?.blur()
      if (localInputState !== rowDataAsString) {
        // If we have local edits that haven't been committed yet, commit them now
        setRowData(parseFreeTextGivenJsonSchemaType(localInputState, colType))
      }
    }
    // only invoke this if active changes!
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [active])

  // Sync localInputState with rowData when it changes externally (e.g., after cut)
  useEffect(() => {
    setLocalInputState(rowDataAsString)
  }, [rowDataAsString])

  const hasValue = !isNil(rowData) && rowData !== ''

  return (
    <Autocomplete
      open={menuIsOpen}
      onOpen={() => {
        setMenuIsOpen(true)
      }}
      forcePopupIcon={true}
      disableClearable={!hasValue}
      freeSolo={true}
      disablePortal={false}
      options={choices}
      getOptionLabel={option => castCellValueToString(option)}
      value={rowData as AutocompleteOption}
      inputValue={localInputState}
      onInputChange={(_, newInputValue) => {
        setLocalInputState(newInputValue)
      }}
      onKeyDown={e => {
        // tab
        if (e.key === 'Tab') {
          e.preventDefault()
          stopEditing({ nextRow: false })
        } else if (e.key === 'Enter') {
          e.preventDefault()
          stopEditing({ nextRow: true })
        }
      }}
      onClose={() => {
        setMenuIsOpen(false)
        stopEditing({ nextRow: false })
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
        setTimeout(() => stopEditing({ nextRow: false }), 0)
      }}
      blurOnSelect={true}
      renderInput={params => {
        return (
          <TextField
            {...params}
            inputRef={textInputRef}
            slotProps={{
              input: {
                ...params.InputProps,
                sx: {
                  height: '100%',
                  padding: '0 10px',
                  backgroundColor: 'inherit',
                  borderRadius: 0,
                },
              },
            }}
          />
        )
      }}
      sx={{
        width: '100%',
        height: '100%',
        '& .MuiAutocomplete-inputRoot': {
          padding: '0 10px',
          backgroundColor: 'inherit',
          pointerEvents: focus ? undefined : 'none',
        },
        '& .MuiFormControl-root': { height: '100%' },
        '& .MuiAutocomplete-clearIndicator': {
          visibility: active ? 'visible' : 'hidden',
          pointerEvents: 'auto',
        },
        '& .MuiAutocomplete-popupIndicator': {
          visibility: active ? 'visible' : 'hidden',
          pointerEvents: 'auto',
        },
        '&:hover .MuiAutocomplete-clearIndicator': {
          visibility: 'visible',
        },
        '&:hover .MuiAutocomplete-popupIndicator': {
          visibility: 'visible',
        },
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
