import parseFreeTextGivenJsonSchemaType from '@/components/DataGrid/utils/parseFreeTextUsingJsonSchemaType'
import { Autocomplete, SxProps, TextField, Theme, Tooltip } from '@mui/material'
import { JSONSchema7Type } from 'json-schema'
import { memo, useEffect, useMemo, useRef, useState } from 'react'
import { CellComponent, Column } from '@sage-bionetworks/react-datasheet-grid'
import {
  AutocompleteCellProps,
  castCellValueToString,
  AutocompleteOption,
} from './AutocompleteColumn'
import { GridAutocompleteChip } from './GridAutocompleteChip'
import isNil from 'lodash-es/isNil'
import isEqual from 'lodash-es/isEqual'

// Static styles extracted to avoid recreation on every render
const AUTOCOMPLETE_MULTIPLE_BASE_SX: SxProps<Theme> = {
  width: '100%',
  height: '100%',
  '& .MuiFormControl-root': {
    height: '100%',
  },
  '& .MuiAutocomplete-tag': {
    margin: '1px',
  },
  '&:hover .MuiAutocomplete-clearIndicator': {
    visibility: 'visible',
  },
  '&:hover .MuiAutocomplete-popupIndicator': {
    visibility: 'visible',
  },
}

const TEXT_FIELD_SX: SxProps<Theme> = {
  height: '100%',
  padding: '0 10px',
  backgroundColor: 'inherit',
  borderRadius: 0,
}

export type AutocompleteMultipleEnumOption =
  | AutocompleteOption
  | unknown
  | unknown[]

export type AutocompleteMultipleEnumCellProps = Omit<
  AutocompleteCellProps,
  'choices'
> & {
  choices: AutocompleteMultipleEnumOption[]
  limitTags?: number
  clearValue?: undefined | null
}

type EnumOption = {
  label: string
  value: AutocompleteMultipleEnumOption
}

function createOptionFromValue(
  value: AutocompleteMultipleEnumOption,
): EnumOption {
  return {
    label: castCellValueToString(value),
    value: value,
  }
}

function createSafeRowData(
  rowData: AutocompleteMultipleEnumOption,
): AutocompleteMultipleEnumOption[] {
  if (Array.isArray(rowData)) {
    return rowData
  } else if (isNil(rowData)) {
    return []
  } else {
    return [rowData]
  }
}

function AutocompleteMultipleEnumCell({
  rowData,
  setRowData,
  choices,
  colType,
  limitTags = 2,
  active,
  focus,
  stopEditing,
  clearValue = undefined,
}: AutocompleteMultipleEnumCellProps) {
  const inputRef = useRef<HTMLInputElement>(null)
  const [menuIsOpen, setMenuIsOpen] = useState(false)
  const [localInputState, setLocalInputState] = useState<string>('')
  // Track whether the current localInputState came from actual user typing.
  // MUI can update the input value internally (e.g. on hover/highlight) without user intent,
  // so we only commit free text on blur when the user deliberately typed it.
  const userIsTypingRef = useRef(false)
  // Tracks whether the user moused down inside the dropdown listbox.
  // When keepFocus fails (q=false in react-datasheet-grid, so portal clicks deactivate the cell),
  // we use this ref to detect that an option click is in progress and suppress the useEffect
  // from closing the menu before onClick→onChange can fire and commit the selection.
  const optionMouseDownRef = useRef(false)
  // Keep a ref to the latest `active` value so onClose and onChange can read it synchronously
  // without stale closures.
  const activeRef = useRef(active)
  useEffect(() => {
    activeRef.current = active
  }, [active])

  useEffect(() => {
    // Treat `active` as the source of truth for focus/blur and menu state.
    // If we listen to Autocomplete's onBlur, it will fire when selecting an option from the dropdown,
    // in which case we do not want to update rowData.
    if (active) {
      inputRef.current?.focus()
    } else if (!optionMouseDownRef.current) {
      // Only close and blur when there is no pending option click. If optionMouseDownRef is
      // set, the click event will fire shortly after and onChange will handle closing.
      setMenuIsOpen(false)
      inputRef.current?.blur()
    }
  }, [active])

  const safeRowData = createSafeRowData(rowData)
  const optionsWithLabels = choices.map(createOptionFromValue)
  const selectedOptions = safeRowData.map(createOptionFromValue)
  const effectiveLimitTags = active ? -1 : limitTags

  // Create tooltip content showing all values
  const tooltipContent =
    safeRowData.length > 0
      ? safeRowData.map(item => castCellValueToString(item)).join(',')
      : ''

  const hasValue = !isNil(rowData) && rowData !== ''

  // Memoize sx to avoid recreation - dynamic styles change based on active/focus state
  const autocompleteSx = useMemo<SxProps<Theme>>(
    () => ({
      ...AUTOCOMPLETE_MULTIPLE_BASE_SX,
      '& .MuiAutocomplete-inputRoot': {
        pointerEvents: focus ? undefined : 'none',
        padding: '0 10px',
        backgroundColor: 'inherit',
        // Allow tags to wrap and enable scrolling
        flexWrap: active ? 'wrap' : 'nowrap',
        minHeight: '100%',
        maxHeight: '100%',
        overflowY: active ? 'auto' : 'hidden',
        overflowX: 'hidden',
        '&::-webkit-scrollbar': {
          width: '6px',
          height: '6px',
        },
        '&::-webkit-scrollbar-track': {
          background: 'transparent',
        },
        '&::-webkit-scrollbar-thumb': {
          background: '#888',
          borderRadius: '3px',
        },
        '&::-webkit-scrollbar-thumb:hover': {
          background: '#555',
        },
      },
      '& .MuiAutocomplete-clearIndicator': {
        visibility: active ? 'visible' : 'hidden',
        pointerEvents: 'auto',
      },
      '& .MuiAutocomplete-popupIndicator': {
        visibility: active ? 'visible' : 'hidden',
        pointerEvents: 'auto',
      },
    }),
    [active, focus],
  )

  return (
    <Tooltip
      title={tooltipContent}
      placement="top-start"
      arrow
      enterDelay={500}
      disableHoverListener={active || safeRowData.length <= limitTags}
    >
      <div
        style={{
          width: '100%',
          height: '100%',
          overflow: 'hidden',
        }}
      >
        <Autocomplete
          forcePopupIcon={choices.length > 0}
          disableClearable={!hasValue}
          multiple
          freeSolo
          open={menuIsOpen}
          onOpen={() => {
            setMenuIsOpen(true)
          }}
          disablePortal={false}
          limitTags={effectiveLimitTags}
          options={optionsWithLabels}
          getOptionLabel={option => {
            // Handle both string (for freeSolo) and object options
            return typeof option === 'string' ? option : option.label
          }}
          isOptionEqualToValue={(option, value) => {
            // Compare the actual values, not labels
            const optionValue =
              typeof option === 'string' ? option : option.value
            const valueValue = typeof value === 'string' ? value : value.value
            return isEqual(optionValue, valueValue)
          }}
          value={selectedOptions}
          inputValue={localInputState}
          onInputChange={(_, newInputValue, reason) => {
            // Only mark as user-typed when the change came from keyboard input,
            // not from MUI's internal hover/highlight updates
            if (reason === 'input') {
              userIsTypingRef.current = true
            }
            setLocalInputState(newInputValue)
          }}
          onClose={(_event, reason) => {
            optionMouseDownRef.current = false
            if (reason === 'blur' && activeRef.current) {
              // The cell is still active (keepFocus:true kept it alive), which means
              // the blur was triggered by clicking inside the portal-rendered dropdown,
              // not by a genuine outside click. Suppress this close so the pending
              // click event can land and trigger onChange.
              return
            }
            setMenuIsOpen(false)
            stopEditing({ nextRow: false })
          }}
          onChange={(_e, newVal, _reason) => {
            optionMouseDownRef.current = false
            // Handle both selection/deselection and free text creation the same way
            const values = (newVal || []).map(item => {
              return typeof item === 'string'
                ? parseFreeTextGivenJsonSchemaType(item, colType)
                : item.value
            })
            // Use clearValue when all items are removed
            setRowData(values.length === 0 ? clearValue : values)
            userIsTypingRef.current = false
            setLocalInputState('')
            if (!activeRef.current) {
              // The cell was deactivated while the menu was open (keepFocus didn't protect
              // because q=false). Now that the value is committed, close the menu.
              setMenuIsOpen(false)
            }
          }}
          disableCloseOnSelect={choices.length > 1}
          slotProps={{
            listbox: {
              onMouseDown: (event: React.MouseEvent) => {
                // Prevent the input from blurring when clicking an option.
                // MUI's internal listbox onMouseDown does the same, but our custom slotProps.listbox
                // replaces it (mergeSlotProps gives externalSlotProps priority over additionalProps),
                // so we must call preventDefault() here to preserve that behavior.
                event.preventDefault()
                // Signal that an option click is in progress so the useEffect watching `active`
                // doesn't close the menu before onClick→onChange can fire.
                optionMouseDownRef.current = true
              },
            },
          }}
          onBlur={() => {
            // Only commit free text if the user actually typed it.
            // Guarding with userIsTypingRef prevents committing a value that was merely
            // hovered/highlighted in the dropdown (which can also update localInputState
            // via MUI's internal input change events).
            if (userIsTypingRef.current && localInputState.trim()) {
              const parsedValue = parseFreeTextGivenJsonSchemaType(
                localInputState,
                colType,
              )
              setRowData([...safeRowData, parsedValue])
              userIsTypingRef.current = false
              setLocalInputState('')
            }
          }}
          renderValue={(tagValue, getTagProps) =>
            tagValue.map((option, index) => {
              const { key, ...tagProps } = getTagProps({ index })
              const optionValue =
                typeof option === 'string' ? option : option.value
              return (
                <GridAutocompleteChip
                  key={key}
                  option={optionValue}
                  active={active}
                  {...tagProps}
                />
              )
            })
          }
          renderInput={params => (
            <TextField
              {...params}
              inputRef={inputRef}
              slotProps={{
                input: {
                  ...params.InputProps,
                  disableUnderline: true,
                  sx: TEXT_FIELD_SX,
                },
              }}
            />
          )}
          sx={autocompleteSx}
        />
      </div>
    </Tooltip>
  )
}

// Memoize the cell component to prevent unnecessary re-renders
// Custom comparison function that ignores function prop identity changes
// since the grid library recreates them on each render but their behavior is stable
const MemoizedAutocompleteMultipleEnumCell = memo(
  AutocompleteMultipleEnumCell,
  (prevProps, nextProps) => {
    // Compare all non-function props that represent actual state changes
    return (
      prevProps.active === nextProps.active &&
      prevProps.focus === nextProps.focus &&
      prevProps.rowData === nextProps.rowData &&
      prevProps.choices === nextProps.choices &&
      prevProps.colType === nextProps.colType &&
      prevProps.limitTags === nextProps.limitTags &&
      prevProps.clearValue === nextProps.clearValue
      // Note: We intentionally skip comparing stopEditing and setRowData
      // These are recreated by react-datasheet-grid on every render but their
      // behavior remains functionally identical for the same cell position.
      // Comparing them would defeat the purpose of memoization.
    )
  },
)

export type AutocompleteMultipleEnumColumnProps = {
  choices: AutocompleteMultipleEnumOption[]
  colType?: JSONSchema7Type
  limitTags?: number
  dynamicHeight?: boolean
  clearValue?: undefined | null
}

export function autocompleteMultipleEnumColumn({
  choices,
  colType,
  limitTags = 2,
  dynamicHeight = false,
  clearValue = undefined,
}: AutocompleteMultipleEnumColumnProps): Partial<Column> {
  return {
    component: ((
      props: Omit<AutocompleteMultipleEnumCellProps, 'choices' | 'limitTags'>,
    ) => (
      <MemoizedAutocompleteMultipleEnumCell
        {...props}
        choices={choices}
        colType={colType}
        limitTags={limitTags}
        clearValue={clearValue}
      />
    )) as CellComponent,
    copyValue: ({ rowData }) => {
      // Convert array to comma-separated string
      const safeRowData = createSafeRowData(rowData)
      return safeRowData.map(item => castCellValueToString(item)).join(',')
    },
    pasteValue: ({ value }) => {
      if (typeof value !== 'string') {
        return value
      }

      // Split by comma or tab and clean up values
      const delimiters = /[,\t]/
      const parsedValues = value
        .split(delimiters)
        .map(item => item.trim())
        .filter(item => item.length > 0)
        .map(item => parseFreeTextGivenJsonSchemaType(item, colType))
        .filter(item => item !== null && item !== undefined)

      return parsedValues.length > 0 ? parsedValues : []
    },
    disableKeys: true,
    keepFocus: true,
    ...(dynamicHeight && {
      cellClassName: ({ rowData }) => {
        const safeRowData = createSafeRowData(rowData)
        return safeRowData.length > 3
          ? 'multi-value-cell-large'
          : 'multi-value-cell'
      },
    }),
  }
}
