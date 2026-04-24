import parseFreeTextGivenJsonSchemaType from '@/components/DataGrid/utils/parseFreeTextUsingJsonSchemaType'
import { Autocomplete, SxProps, TextField, Theme, Tooltip } from '@mui/material'
import { JSONSchema7Type } from 'json-schema'
import { memo, useCallback, useMemo, useRef, useState } from 'react'
import { CellComponent, Column } from '@sage-bionetworks/react-datasheet-grid'
import {
  AutocompleteCellProps,
  castCellValueToString,
  AutocompleteOption,
} from './AutocompleteColumn'
import { GridAutocompleteChip } from './GridAutocompleteChip'
import isNil from 'lodash-es/isNil'
import isEqual from 'lodash-es/isEqual'
import { useGridAutocompleteState } from './useGridAutocompleteState'

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

export type AutocompleteMultipleEnumOption = AutocompleteOption

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
    return rowData as AutocompleteMultipleEnumOption[]
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
  // Stable refs so memo(AutocompleteMultipleEnumCell) can use default shallow
  // comparison — react-datasheet-grid recreates these functions on every render,
  // but their behavior is stable for a given cell position.
  const setRowDataRef = useRef(setRowData)
  setRowDataRef.current = setRowData
  const [localInputState, setLocalInputState] = useState<string>('')

  const {
    menuIsOpen,
    setMenuIsOpen,
    inputRef,
    activeRef,
    handleListboxMouseDown,
    notifyOptionCommitted,
    handleMenuOpen,
    handleClose,
  } = useGridAutocompleteState({ active, stopEditing })

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

  // Memoize sx to avoid recreation — dynamic styles change based on active/focus state
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

  const handleChange = useCallback(
    (
      _e: React.SyntheticEvent,
      newVal: (EnumOption | string)[] | null,
      _reason: string,
    ) => {
      notifyOptionCommitted()
      const values = (newVal || []).map(item => {
        return typeof item === 'string'
          ? parseFreeTextGivenJsonSchemaType(item, colType)
          : item.value
      })
      // Use clearValue when all items are removed
      setRowDataRef.current(values.length === 0 ? clearValue : values)
      setLocalInputState('')
      if (!activeRef.current) {
        // The cell was deactivated while the option click was in progress (portal
        // click was seen as an outside click by the grid). Now that the value is
        // committed, close the menu.
        setMenuIsOpen(false)
      }
    },
    [activeRef, clearValue, colType, notifyOptionCommitted, setMenuIsOpen],
  )

  const handleBlur = useCallback(() => {
    if (localInputState.trim()) {
      const parsedValue = parseFreeTextGivenJsonSchemaType(
        localInputState,
        colType,
      )
      setRowDataRef.current([...safeRowData, parsedValue])
      setLocalInputState('')
    }
  }, [localInputState, colType, safeRowData])

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
          onOpen={handleMenuOpen}
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
          onInputChange={(_, newInputValue) => {
            setLocalInputState(newInputValue)
          }}
          onClose={handleClose}
          onChange={handleChange as any}
          disableCloseOnSelect={choices.length > 1}
          slotProps={{
            listbox: { onMouseDown: handleListboxMouseDown },
          }}
          onBlur={handleBlur}
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

// Memoize the cell component to prevent unnecessary re-renders.
// react-datasheet-grid provides new setRowData/stopEditing function instances
// on each render, so we must ignore those callback identities here and only
// compare the props that affect rendering.
function areAutocompleteMultipleEnumCellPropsEqual(
  prevProps: AutocompleteMultipleEnumCellProps,
  nextProps: AutocompleteMultipleEnumCellProps,
) {
  return (
    prevProps.rowData === nextProps.rowData &&
    prevProps.choices === nextProps.choices &&
    prevProps.colType === nextProps.colType &&
    prevProps.focus === nextProps.focus &&
    prevProps.active === nextProps.active &&
    prevProps.clearValue === nextProps.clearValue &&
    prevProps.limitTags === nextProps.limitTags
  )
}

const MemoizedAutocompleteMultipleEnumCell = memo(
  AutocompleteMultipleEnumCell,
  areAutocompleteMultipleEnumCellPropsEqual,
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
