import parseFreeTextGivenJsonSchemaType from '@/components/DataGrid/utils/parseFreeTextUsingJsonSchemaType'
import { Autocomplete, SxProps, TextField, Theme } from '@mui/material'
import { JSONSchema7Type } from 'json-schema'
import { isNil } from 'lodash-es'
import { memo, useCallback, useEffect, useMemo, useRef, useState } from 'react'
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
  setRowDataRef.current = setRowData
  const stopEditingRef = useRef(stopEditing)
  stopEditingRef.current = stopEditing

  const rowDataAsString = castCellValueToString(rowData)
  const [localInputState, setLocalInputState] =
    useState<string>(rowDataAsString)

  const {
    menuIsOpen,
    setMenuIsOpen,
    inputRef,
    optionMouseDownRef,
    handleListboxMouseDown,
  } = useGridAutocompleteState({
    active,
    onDeactivate: () => {
      if (localInputState !== rowDataAsString) {
        // Commit any free-typed text that hasn't been saved yet
        setRowDataRef.current(
          parseFreeTextGivenJsonSchemaType(localInputState, colType),
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

  const handleClose = useCallback(() => {
    setMenuIsOpen(false)
    stopEditingRef.current({ nextRow: false })
  }, [setMenuIsOpen])

  const handleChange = useCallback(
    (_e: React.SyntheticEvent, newVal: AutocompleteOption, reason: string) => {
      // Reset the portal-click guard now that the selection has been committed
      optionMouseDownRef.current = false
      if (reason === 'clear') {
        setRowDataRef.current(clearValue)
      } else if (reason === 'createOption') {
        // The user typed an option that wasn't a defined enum — cast to correct type
        setRowDataRef.current(
          parseFreeTextGivenJsonSchemaType(newVal as string, colType),
        )
      } else {
        setRowDataRef.current(newVal)
      }
      setTimeout(() => stopEditingRef.current({ nextRow: false }), 0)
    },
    [clearValue, colType],
  )

  return (
    <Autocomplete
      open={menuIsOpen}
      onOpen={() => setMenuIsOpen(true)}
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
      onChange={handleChange as any}
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
// setRowData and stopEditing are stabilized via refs inside the component, so
// standard shallow comparison is sufficient — no custom comparator needed.
export const MemoizedAutocompleteCell = memo(AutocompleteCell)

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
