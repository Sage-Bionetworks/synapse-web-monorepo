import parseFreeTextGivenJsonSchemaType from '@/components/DataGrid/utils/parseFreeTextUsingJsonSchemaType'
import {
  Autocomplete,
  AutocompleteChangeReason,
  SxProps,
  TextField,
  Theme,
} from '@mui/material'
import { JSONSchema7Type } from 'json-schema'
import { isNil } from 'lodash-es'
import {
  memo,
  useCallback,
  useEffect,
  useLayoutEffect,
  useMemo,
  useRef,
  useState,
} from 'react'
import {
  CellComponent,
  CellProps,
  Column,
} from '@sage-bionetworks/react-datasheet-grid'
import { useGridAutocompleteState } from './useGridAutocompleteState'

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

// Free-text typed/pasted into the cell parses to "" for empty input. Committing
// "" leaves the cell as an empty string, which fails enum validation with a
// terse "is not a valid enum value" message. Substitute the column's clearValue
// (null for required, undefined for optional) so the commit path matches the
// X-button clear path and the validator surfaces the substantive message.
function commitParsedValue(
  parsed: unknown,
  clearValue: undefined | null,
): unknown {
  if (parsed === null || parsed === undefined || parsed === '') {
    return clearValue
  }
  return parsed
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
  // Stable refs so memo(AutocompleteCell) can use default shallow comparison —
  // react-datasheet-grid recreates these functions on every render, but their
  // behavior is stable for a given cell position.
  const setRowDataRef = useRef(setRowData)
  useLayoutEffect(() => {
    setRowDataRef.current = setRowData
  })
  const stopEditingRef = useRef(stopEditing)
  useLayoutEffect(() => {
    stopEditingRef.current = stopEditing
  })

  const rowDataAsString = castCellValueToString(rowData)
  const [localInputState, setLocalInputState] =
    useState<string>(rowDataAsString)

  const {
    menuIsOpen,
    inputRef,
    handleListboxMouseDown,
    notifyOptionCommitted,
    handleMenuOpen,
    handleClose,
  } = useGridAutocompleteState({
    active,
    stopEditing,
    onDeactivate: () => {
      if (localInputState !== rowDataAsString) {
        // Commit any free-typed text that hasn't been saved yet
        const parsed = parseFreeTextGivenJsonSchemaType(
          localInputState,
          colType,
        )
        setRowDataRef.current(
          commitParsedValue(parsed, clearValue) as AutocompleteOption,
        )
      }
    },
  })

  // When not actively being edited, sync localInputState with rowData (e.g. after cut)
  useEffect(() => {
    if (!focus && !active) {
      setLocalInputState(rowDataAsString)
    }
  }, [focus, active, rowDataAsString])

  const hasValue = !isNil(rowData) && rowData !== ''

  // Memoize sx to avoid recreation — dynamic styles change based on active/focus state
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

  const handleKeyDown = useCallback((e: React.KeyboardEvent) => {
    if (e.key === 'Tab') {
      e.preventDefault()
      stopEditingRef.current({ nextRow: false })
    } else if (e.key === 'Enter') {
      e.preventDefault()
      stopEditingRef.current({ nextRow: true })
    }
  }, [])

  const handleChange = useCallback(
    (
      _e: React.SyntheticEvent,
      newVal: unknown,
      reason: AutocompleteChangeReason,
    ) => {
      notifyOptionCommitted()
      if (reason === 'clear') {
        setRowDataRef.current(clearValue)
      } else if (reason === 'createOption') {
        // The user typed an option that wasn't a defined enum — cast to correct type
        const parsed = parseFreeTextGivenJsonSchemaType(
          newVal as string,
          colType,
        )
        setRowDataRef.current(
          commitParsedValue(parsed, clearValue) as AutocompleteOption,
        )
      } else {
        setRowDataRef.current(newVal as AutocompleteOption)
      }
      setTimeout(() => {
        stopEditingRef.current({ nextRow: false })
      }, 0)
    },
    [clearValue, colType, notifyOptionCommitted],
  )

  return (
    <Autocomplete
      open={menuIsOpen}
      onOpen={handleMenuOpen}
      forcePopupIcon={true}
      disableClearable={!hasValue}
      freeSolo={true}
      disablePortal={false}
      options={choices}
      selectOnFocus
      getOptionLabel={option => castCellValueToString(option)}
      value={rowData as AutocompleteOption}
      inputValue={localInputState}
      onInputChange={(_, newInputValue) => {
        setLocalInputState(newInputValue)
      }}
      onKeyDown={handleKeyDown}
      onClose={handleClose}
      onChange={handleChange}
      blurOnSelect={true}
      slotProps={{
        listbox: { onMouseDown: handleListboxMouseDown },
      }}
      renderInput={params => <TextField {...params} inputRef={inputRef} />}
      sx={autocompleteSx}
    />
  )
}

// Memoize the cell component to prevent unnecessary re-renders.
// react-datasheet-grid provides new setRowData/stopEditing function instances
// on each render, so we must ignore those callback identities here and only
// compare the props that affect rendering.
export function areAutocompleteCellPropsEqual(
  prevProps: AutocompleteCellProps,
  nextProps: AutocompleteCellProps,
) {
  return (
    prevProps.rowData === nextProps.rowData &&
    prevProps.choices === nextProps.choices &&
    prevProps.colType === nextProps.colType &&
    prevProps.focus === nextProps.focus &&
    prevProps.active === nextProps.active &&
    prevProps.clearValue === nextProps.clearValue
  )
}

export const MemoizedAutocompleteCell = memo(
  AutocompleteCell,
  areAutocompleteCellPropsEqual,
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
