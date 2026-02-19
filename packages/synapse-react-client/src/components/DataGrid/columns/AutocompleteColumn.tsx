import parseFreeTextGivenJsonSchemaType from '@/components/DataGrid/utils/parseFreeTextUsingJsonSchemaType'
import { Autocomplete, SxProps, TextField, Theme } from '@mui/material'
import { JSONSchema7Type } from 'json-schema'
import { isNil } from 'lodash-es'
import { memo, useEffect, useMemo, useRef, useState } from 'react'
import {
  CellComponent,
  CellProps,
  Column,
} from '@sage-bionetworks/react-datasheet-grid'

// Static styles extracted to avoid recreation on every render
const AUTOCOMPLETE_BASE_SX: SxProps<Theme> = {
  width: '100%',
  height: '100%',
  '& .MuiTextField-root .MuiInputBase-root': {
    height: '100%',
    padding: '0 10px',
    backgroundColor: 'inherit',
    borderRadius: 0,
  },
  '& .MuiAutocomplete-inputRoot': {
    padding: '0 10px',
    backgroundColor: 'inherit',
  },
  '& .MuiFormControl-root': { height: '100%' },
}

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
  clearValue?: undefined | null
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
  clearValue = undefined,
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

  // When not actively being edited, sync localInputState with rowData (e.g., after cut)
  useEffect(() => {
    if (!focus && !active) {
      setLocalInputState(rowDataAsString)
    }
  }, [focus, active, rowDataAsString])

  const hasValue = !isNil(rowData) && rowData !== ''

  // Memoize sx to avoid recreation - dynamic styles change based on active/focus state
  const autocompleteSx = useMemo<SxProps<Theme>>(
    () => ({
      ...AUTOCOMPLETE_BASE_SX,
      '& .MuiAutocomplete-inputRoot': {
        padding: '0 10px',
        backgroundColor: 'inherit',
        pointerEvents: focus ? undefined : 'none',
      },
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
    }),
    [active, focus],
  )

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
      autoSelect
      selectOnFocus
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
        if (reason === 'clear') {
          setRowData(clearValue)
        } else if (reason === 'createOption') {
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
        return <TextField {...params} inputRef={textInputRef} />
      }}
      sx={autocompleteSx}
    />
  )
}

// Memoize the cell component to prevent unnecessary re-renders
// Custom comparison function that ignores function prop identity changes
// since the grid library recreates them on each render but their behavior is stable
const MemoizedAutocompleteCell = memo(
  AutocompleteCell,
  (prevProps, nextProps) => {
    // Compare all non-function props that represent actual state changes
    return (
      prevProps.active === nextProps.active &&
      prevProps.focus === nextProps.focus &&
      prevProps.rowData === nextProps.rowData &&
      prevProps.choices === nextProps.choices &&
      prevProps.colType === nextProps.colType &&
      prevProps.clearValue === nextProps.clearValue
      // Note: We intentionally skip comparing stopEditing and setRowData
      // These are recreated by react-datasheet-grid on every render but their
      // behavior remains functionally identical for the same cell position.
      // Comparing them would defeat the purpose of memoization.
    )
  },
)

export type AutocompleteColumnProps = {
  choices: AutocompleteOption[]
  colType?: JSONSchema7Type
  clearValue: undefined | null
}

export function autocompleteColumn({
  choices,
  colType,
  clearValue,
}: AutocompleteColumnProps): Partial<Column> {
  return {
    component: ((props: Omit<AutocompleteCellProps, 'choices'>) => (
      <MemoizedAutocompleteCell
        {...props}
        choices={choices}
        colType={colType}
        clearValue={clearValue}
      />
    )) as CellComponent,
    // If we update our enums to support labels, then we can update copy to copy the label and paste to lookup the mapping from label -> value
    copyValue: ({ rowData }) => rowData,
    pasteValue: ({ value }) => value,
    disableKeys: true,
    keepFocus: true,
  }
}
